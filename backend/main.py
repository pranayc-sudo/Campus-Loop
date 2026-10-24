import os
import json
import uuid
import random
from datetime import datetime, timezone
from typing import Optional, List, Dict, Any
from fastapi import FastAPI, HTTPException, Header, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="CampusLoop API", description="Campus Waste Intelligence API")

# Enable CORS for all origins so frontend on any domain can connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DIR = os.path.dirname(os.path.abspath(__file__))

def load_json(name: str, default: Any):
    p = os.path.join(DIR, name)
    if os.path.exists(p):
        with open(p, "r", encoding="utf-8") as f:
            return json.load(f)
    return default

# In-memory database with persistent dump fallback
OVERVIEW = load_json("overview.json", {})
ZONES_DATA = load_json("zones.json", {"zones": [], "routes": {}})
WALLET = load_json("wallet.json", {"credits": 135, "rank": 9, "tier": "Seedling", "transactions": [], "coupons": [], "rewards": []})
LEADERBOARD = load_json("leaderboard.json", [])
BATCHES = load_json("exchange_batches.json", [])
MY_REPORTS = load_json("reports_mine.json", [])
SCANS = load_json("scans.json", [])

CURRENT_USER = {
    "id": "c6a35c71-a7cc-4f92-8ab5-2de9856e0148",
    "email": "demo.student@campusloop.in",
    "name": "Demo Student",
    "role": "student",
    "credits": WALLET.get("credits", 135),
    "hostel": "Govind Bhawan",
    "created_at": "2026-10-22T10:33:39.624050+00:00"
}

DEMO_TOKEN = "demo-jwt-token-campusloop"

# Models
class LoginReq(BaseModel):
    email: str
    password: str

class RegisterReq(BaseModel):
    name: str
    email: str
    password: str
    hostel: Optional[str] = "Govind Bhawan"

class BatchReq(BaseModel):
    material: str
    weight_kg: float
    price_per_kg: float
    source_zone: Optional[str] = "MAC Canteen"

class ReportReq(BaseModel):
    zone_id: str
    note: Optional[str] = ""

class ReviewReq(BaseModel):
    decision: str

class ScanReq(BaseModel):
    image_base64: str
    mode: Optional[str] = "single"
    detections: Optional[List[Dict[str, Any]]] = None

# Auth endpoints
@app.post("/api/auth/demo")
def auth_demo():
    CURRENT_USER["credits"] = WALLET.get("credits", 135)
    return {"token": DEMO_TOKEN, "user": CURRENT_USER}

@app.post("/api/auth/login")
def auth_login(req: LoginReq):
    CURRENT_USER["email"] = req.email
    CURRENT_USER["credits"] = WALLET.get("credits", 135)
    return {"token": DEMO_TOKEN, "user": CURRENT_USER}

@app.post("/api/auth/register")
def auth_register(req: RegisterReq):
    CURRENT_USER["name"] = req.name
    CURRENT_USER["email"] = req.email
    CURRENT_USER["hostel"] = req.hostel or "Govind Bhawan"
    CURRENT_USER["credits"] = WALLET.get("credits", 135)
    return {"token": DEMO_TOKEN, "user": CURRENT_USER}

@app.get("/api/auth/me")
def auth_me():
    CURRENT_USER["credits"] = WALLET.get("credits", 135)
    return CURRENT_USER

# Overview endpoint
@app.get("/api/overview")
def get_overview():
    now_utc = datetime.now(timezone.utc).isoformat()
    OVERVIEW["ts"] = now_utc
    return OVERVIEW

# Zones & Digital Twin endpoint
@app.get("/api/zones")
def get_zones():
    now_utc = datetime.now(timezone.utc).isoformat()
    ZONES_DATA["ts"] = now_utc
    return ZONES_DATA

# Wallet & Leaderboard
@app.get("/api/wallet")
def get_wallet():
    return WALLET

@app.get("/api/leaderboard")
def get_leaderboard():
    return LEADERBOARD

@app.post("/api/rewards/{reward_id}/redeem")
def redeem_reward(reward_id: str):
    reward = next((r for r in WALLET.get("rewards", []) if r["id"] == reward_id), None)
    if not reward:
        raise HTTPException(status_code=404, detail="Reward not found")
    cost = reward.get("cost", 0)
    if WALLET.get("credits", 0) < cost:
        raise HTTPException(status_code=400, detail="Insufficient credits")

    WALLET["credits"] -= cost
    CURRENT_USER["credits"] = WALLET["credits"]

    code = f"CL-{random.randint(100000, 999999):X}"
    coupon = {
        "id": str(uuid.uuid4()),
        "user_id": CURRENT_USER["id"],
        "reward_id": reward["id"],
        "title": reward["title"],
        "venue": reward["venue"],
        "code": code,
        "created_at": datetime.now(timezone.utc).isoformat()
    }
    WALLET.setdefault("coupons", []).insert(0, coupon)

    txn = {
        "id": str(uuid.uuid4()),
        "user_id": CURRENT_USER["id"],
        "amount": -cost,
        "label": f"Redeemed: {reward['title']}",
        "kind": "redeem",
        "created_at": datetime.now(timezone.utc).isoformat()
    }
    WALLET.setdefault("transactions", []).insert(0, txn)
    return coupon

# Exchange batches
@app.get("/api/exchange/batches")
def get_batches():
    return BATCHES

@app.post("/api/exchange/batches")
def create_batch(req: BatchReq):
    code = f"BATCH-{random.randint(100, 999)}"
    new_batch = {
        "id": str(uuid.uuid4()),
        "code": code,
        "material": req.material,
        "weight_kg": req.weight_kg,
        "price_per_kg": req.price_per_kg,
        "source_zone": req.source_zone,
        "stage": "collected",
        "trend": [random.randint(20, 50) for _ in range(6)],
        "purity": None,
        "buyer": None,
        "revenue": 0,
        "created_at": datetime.now(timezone.utc).isoformat()
    }
    BATCHES.insert(0, new_batch)
    return new_batch

@app.post("/api/exchange/batches/{batch_id}/advance")
def advance_batch(batch_id: str):
    batch = next((b for b in BATCHES if b.get("id") == batch_id or b.get("code") == batch_id), None)
    if not batch:
        raise HTTPException(status_code=404, detail="Batch not found")

    if batch["stage"] == "collected":
        batch["stage"] = "tested"
        batch["purity"] = 92.5
    elif batch["stage"] == "tested":
        batch["stage"] = "sold"
        batch["buyer"] = "Apex Circular Systems"
        batch["revenue"] = int(batch.get("weight_kg", 50) * batch.get("price_per_kg", 20))
    return batch

# Reports
@app.get("/api/reports")
def get_reports(status: Optional[str] = None):
    if status:
        return [r for r in MY_REPORTS if r.get("status") == status]
    return MY_REPORTS

@app.get("/api/reports/mine")
def get_reports_mine():
    return MY_REPORTS

@app.post("/api/reports")
def submit_report(req: ReportReq):
    zone_name = req.zone_id
    for z in ZONES_DATA.get("zones", []):
        if z["id"] == req.zone_id:
            zone_name = z["name"]
            break

    new_report = {
        "id": str(uuid.uuid4()),
        "user_id": CURRENT_USER["id"],
        "user_name": CURRENT_USER["name"],
        "zone_id": req.zone_id,
        "zone": zone_name,
        "note": req.note or "Overflow reported from digital twin",
        "fill_at_report": 78.5,
        "status": "pending",
        "reward": 15,
        "created_at": datetime.now(timezone.utc).isoformat()
    }
    MY_REPORTS.insert(0, new_report)

    # Award credits
    WALLET["credits"] = WALLET.get("credits", 0) + 15
    CURRENT_USER["credits"] = WALLET["credits"]
    WALLET.setdefault("transactions", []).insert(0, {
        "id": str(uuid.uuid4()),
        "user_id": CURRENT_USER["id"],
        "amount": 15,
        "label": f"Reported overflow: {zone_name}",
        "kind": "report",
        "created_at": datetime.now(timezone.utc).isoformat()
    })
    return new_report

@app.post("/api/reports/{report_id}/review")
def review_report(report_id: str, req: ReviewReq):
    r = next((x for x in MY_REPORTS if x["id"] == report_id), None)
    if not r:
        raise HTTPException(status_code=404, detail="Report not found")
    r["status"] = req.decision
    return r

# Scans
@app.get("/api/scans")
def get_scans():
    return SCANS

SAMPLE_CLASSIFICATIONS = [
    {
        "item": "PET plastic bottle",
        "category": "recyclable",
        "final_category": "recyclable",
        "confidence": 0.98,
        "contaminated": False,
        "guardrail": False,
        "material": "PET #1 plastic",
        "reason": "Clean, dry polyethylene terephthalate container easily recyclable.",
        "bin_en": "Blue bin for dry recyclables",
        "bin_hi": "सूखे कचरे के लिए नीले डिब्बे का प्रयोग करें",
        "guard_en": None,
        "guard_hi": None,
        "credits": 10
    },
    {
        "item": "greasy food container",
        "category": "non_recyclable",
        "final_category": "non_recyclable",
        "confidence": 0.94,
        "contaminated": True,
        "guardrail": True,
        "material": "cardboard / wax lining",
        "reason": "Food grease and oil destroy paper recycling pulping processes.",
        "bin_en": "Black / Red bin for non-recyclable domestic waste",
        "bin_hi": "गैर-पुनर्चक्रण योग्य कचरे के लिए लाल डिब्बे का प्रयोग करें",
        "guard_en": "Contamination detected! Do not mix food-stained paper into the blue recycling bin.",
        "guard_hi": "खाद्य अवशेष पाए गए! इसे रीसाइक्लिंग डिब्बे में न डालें।",
        "credits": 5
    },
    {
        "item": "Banana peel",
        "category": "organic",
        "final_category": "organic",
        "confidence": 0.99,
        "contaminated": False,
        "guardrail": False,
        "material": "wet organic biomass",
        "reason": "Decomposing fruit peel suitable for campus biogas digestor.",
        "bin_en": "Green bin for wet organic waste",
        "bin_hi": "गीले जैविक कचरे के लिए हरे डिब्बे का प्रयोग करें",
        "guard_en": None,
        "guard_hi": None,
        "credits": 10
    },
    {
        "item": "Aluminium beverage can",
        "category": "recyclable",
        "final_category": "recyclable",
        "confidence": 0.97,
        "contaminated": False,
        "guardrail": False,
        "material": "Aluminium",
        "reason": "Clean metal cans have 100% recyclability with high scrap valuation.",
        "bin_en": "Blue bin for dry recyclables",
        "bin_hi": "नीले डिब्बे में डालें",
        "guard_en": None,
        "guard_hi": None,
        "credits": 10
    }
]

CONVEYOR_DETECTIONS = [
    { "label": "paper", "category": "recyclable", "confidence": 0.86, "top": 0, "left": 23, "width": 29, "height": 28, "color": "#00E676" },
    { "label": "paper", "category": "recyclable", "confidence": 0.79, "top": 9, "left": 0, "width": 24, "height": 23, "color": "#00E676" },
    { "label": "paper", "category": "recyclable", "confidence": 0.31, "top": 14, "left": 0, "width": 16, "height": 18, "color": "#00E676" },
    { "label": "paper", "category": "recyclable", "confidence": 0.73, "top": 18, "left": 0, "width": 17, "height": 23, "color": "#00E676" },
    { "label": "paper", "category": "recyclable", "confidence": 0.53, "top": 19, "left": 17, "width": 13, "height": 25, "color": "#00E676" },
    { "label": "greyboard", "category": "recyclable", "confidence": 0.52, "top": 15, "left": 22, "width": 18, "height": 19, "color": "#FF9800" },
    { "label": "greyboard", "category": "recyclable", "confidence": 0.41, "top": 17, "left": 28, "width": 16, "height": 16, "color": "#FF9800" },
    { "label": "magazine", "category": "recyclable", "confidence": 0.93, "top": 31, "left": 21, "width": 26, "height": 13, "color": "#76FF03" },
    { "label": "plastic_film", "category": "non_recyclable", "confidence": 0.42, "top": 38, "left": 2, "width": 19, "height": 17, "color": "#00E5FF" },
    { "label": "paper", "category": "recyclable", "confidence": 0.98, "top": 55, "left": 0, "width": 29, "height": 43, "color": "#00E676" },
    { "label": "magazine", "category": "recyclable", "confidence": 0.88, "top": 69, "left": 25, "width": 23, "height": 28, "color": "#76FF03" },
    { "label": "greyboard", "category": "recyclable", "confidence": 0.37, "top": 51, "left": 34, "width": 21, "height": 21, "color": "#FF9800" },
    { "label": "magazine", "category": "recyclable", "confidence": 0.77, "top": 12, "left": 60, "width": 35, "height": 42, "color": "#76FF03" },
    { "label": "magazine", "category": "recyclable", "confidence": 0.33, "top": 34, "left": 81, "width": 17, "height": 19, "color": "#76FF03" },
    { "label": "magazine", "category": "recyclable", "confidence": 0.91, "top": 45, "left": 55, "width": 39, "height": 33, "color": "#76FF03" },
    { "label": "metals", "category": "recyclable", "confidence": 0.68, "top": 45, "left": 77, "width": 19, "height": 19, "color": "#ECEFF1" },
    { "label": "magazine", "category": "recyclable", "confidence": 0.94, "top": 71, "left": 57, "width": 19, "height": 27, "color": "#76FF03" }
]

EWASTE_DETECTIONS = [
    { "label": "computer_mouse", "category": "e_waste", "confidence": 0.94, "top": 64, "left": 35, "width": 11, "height": 19, "color": "#00E5FF" },
    { "label": "motherboard_pcb", "category": "e_waste", "confidence": 0.97, "top": 54, "left": 12, "width": 27, "height": 33, "color": "#00E676" },
    { "label": "power_supply_casing", "category": "e_waste", "confidence": 0.91, "top": 32, "left": 35, "width": 22, "height": 35, "color": "#ECEFF1" },
    { "label": "printed_circuit_board", "category": "e_waste", "confidence": 0.89, "top": 16, "left": 12, "width": 26, "height": 24, "color": "#00E676" },
    { "label": "heatsink_assembly", "category": "e_waste", "confidence": 0.93, "top": 30, "left": 58, "width": 34, "height": 32, "color": "#FF9800" },
    { "label": "subassembly_pcb", "category": "e_waste", "confidence": 0.86, "top": 16, "left": 59, "width": 26, "height": 19, "color": "#00E676" },
    { "label": "ribbon_cable_harness", "category": "e_waste", "confidence": 0.82, "top": 38, "left": 21, "width": 14, "height": 15, "color": "#FFD700" }
]

@app.post("/api/scan")
def classify_scan(req: ScanReq):
    is_explicit_single = req.mode == "single"
    is_conveyor_preset = "sample_conveyor" in req.image_base64
    is_ewaste_preset = "sample_ewaste" in req.image_base64
    has_client_detections = bool(req.detections and len(req.detections) > 0)

    if not is_explicit_single and (req.mode == "bulk" or is_conveyor_preset or is_ewaste_preset or (has_client_detections and req.mode != "single")):
        if has_client_detections:
            dets = req.detections
            r_cnt = sum(1 for d in dets if d.get("category") == "recyclable")
            m_cnt = sum(1 for d in dets if d.get("category") == "metals")
            e_cnt = sum(1 for d in dets if d.get("category") == "e_waste")
            n_cnt = sum(1 for d in dets if d.get("category") in ("non_recyclable", "hazardous"))
            tot = len(dets) or 1
            purity = round(((r_cnt + m_cnt + e_cnt) / tot) * 100, 1)

            if e_cnt > 0:
                item_title = "E-Waste / Electronic Hardware Scrap"
                guard_en = "Capacitor & lithium cell isolation required before secondary mechanical shredding."
                guard_hi = "श्रेडेड लाइन से पहले कैपेसिटर और बैटरी अलग करें।"
                creds = 35
            elif n_cnt > 0:
                item_title = "Mixed Material Stream (Contaminants Isolated)"
                guard_en = f"{n_cnt} non-recyclable item(s) isolated. Divert at stage-1 sorter."
                guard_hi = "गैर-पुनर्चक्रण योग्य सामग्री को अलग करें।"
                creds = 25
            else:
                item_title = "High-Purity Recyclable Lot"
                guard_en = "Stream verified clean. High commodity recovery yield."
                guard_hi = "सत्यापित रीसाइक्लिंग बैच।"
                creds = 25

            c = {
                "id": str(uuid.uuid4()),
                "mode": "bulk",
                "item": item_title,
                "category": "recyclable",
                "final_category": "recyclable",
                "confidence": 0.94,
                "purity_score": purity,
                "items_count": len(dets),
                "detections": dets,
                "contaminated": n_cnt > 0 or e_cnt > 0,
                "guardrail": True,
                "material": "Dynamic AI Localized Materials",
                "reason": "Computer vision spatial audit with multi-object localization.",
                "bin_en": "MRF Facility Recovery Line",
                "bin_hi": "एमआरएफ रीसाइक्लिंग केंद्र",
                "guard_en": guard_en,
                "guard_hi": guard_hi,
                "credits": creds,
                "created_at": datetime.now(timezone.utc).isoformat(),
                "user_id": CURRENT_USER["id"]
            }
        elif is_ewaste_preset:
            c = {
                "id": str(uuid.uuid4()),
                "mode": "bulk",
                "item": "E-Waste / Electronic Hardware Scrap",
                "category": "hazardous",
                "final_category": "hazardous",
                "confidence": 0.96,
                "purity_score": 88.5,
                "items_count": len(EWASTE_DETECTIONS),
                "detections": EWASTE_DETECTIONS,
                "contaminated": True,
                "guardrail": True,
                "material": "Motherboards, Silicon, Optical Mouse, Power Supply",
                "reason": "High-value electronic scrap with precious metal yield. Capacitor isolation required.",
                "bin_en": "E-Waste Processing Center Line",
                "bin_hi": "ई-कचरा रीसाइक्लिंग केंद्र",
                "guard_en": "Capacitor & lithium cell isolation required before secondary mechanical shredding.",
                "guard_hi": "मैकेनिकल श्रेडिंग से पहले कैपेसिटर और लिथियम सेल को अलग करें।",
                "credits": 35,
                "created_at": datetime.now(timezone.utc).isoformat(),
                "user_id": CURRENT_USER["id"]
            }
        elif is_conveyor_preset:
            c = {
                "id": str(uuid.uuid4()),
                "mode": "bulk",
                "item": "Conveyor Mixed Recyclable Stream",
                "category": "recyclable",
                "final_category": "recyclable",
                "confidence": 0.94,
                "purity_score": 94.1,
                "items_count": len(CONVEYOR_DETECTIONS),
                "detections": CONVEYOR_DETECTIONS,
                "contaminated": True,
                "guardrail": True,
                "material": "Baled Paper, Greyboard, Magazine, Aluminium Foil",
                "reason": "High grade industrial fibre with 1 plastic film contaminant diverted at pre-sorter.",
                "bin_en": "MRF Facility Paper Pulper Stream",
                "bin_hi": "एमआरएफ रीसाइक्लिंग पल्प लाइन",
                "guard_en": "Plastic film contaminant detected. Divert at stage-1 air-classifier before hydropulping.",
                "guard_hi": "प्लास्टिक फिल्म अवशेष पाए गए। पल्पिंग से पहले इसे प्री-सॉर्टर पर अलग करें।",
                "credits": 25,
                "created_at": datetime.now(timezone.utc).isoformat(),
                "user_id": CURRENT_USER["id"]
            }
        else:
            c = {
                "id": str(uuid.uuid4()),
                "mode": "bulk",
                "item": "Feedstock Stream (0 Objects)",
                "category": "recyclable",
                "final_category": "recyclable",
                "confidence": 0.80,
                "purity_score": 0.0,
                "items_count": 0,
                "detections": [],
                "contaminated": False,
                "guardrail": False,
                "material": "Unidentified Feedstock",
                "reason": "No distinct waste items detected in stream.",
                "bin_en": "Align items in viewport",
                "bin_hi": "वस्तुओं को कैमरे के सामने रखें",
                "guard_en": "Zero objects detected. Align waste stream.",
                "guard_hi": "कोई वस्तु नहीं पहचानी गई।",
                "credits": 0,
                "created_at": datetime.now(timezone.utc).isoformat(),
                "user_id": CURRENT_USER["id"]
            }
    else:
        c = random.choice(SAMPLE_CLASSIFICATIONS).copy()
        c["id"] = str(uuid.uuid4())
        c["user_id"] = CURRENT_USER["id"]
        c["created_at"] = datetime.now(timezone.utc).isoformat()

    SCANS.insert(0, c)

    # Award credits
    pts = c.get("credits", 10)
    WALLET["credits"] = WALLET.get("credits", 0) + pts
    CURRENT_USER["credits"] = WALLET["credits"]
    WALLET.setdefault("transactions", []).insert(0, {
        "id": str(uuid.uuid4()),
        "user_id": CURRENT_USER["id"],
        "amount": pts,
        "label": f"Sorted: {c['item']}",
        "kind": "scan",
        "created_at": c["created_at"]
    })
    return c

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

