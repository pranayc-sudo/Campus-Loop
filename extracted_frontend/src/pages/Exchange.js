import { useState } from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { ArrowRight, Plus, PackageCheck, FlaskConical, BadgeIndianRupee } from "lucide-react";
import { toast } from "sonner";
import { api, errMsg } from "@/lib/api";
import { useAuth } from "@/context/Auth";
import { useLive, Panel, Overline, PageHead, C, fmt } from "@/components/kit";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const STAGES = [
  { key: "collected", label: "Collected", icon: PackageCheck, color: C.rec, next: "Send to testing" },
  { key: "tested", label: "Quality tested", icon: FlaskConical, color: C.amber, next: "Sell to recycler" },
  { key: "sold", label: "Sold to recycler", icon: BadgeIndianRupee, color: C.volt },
];
const ZONE_NAMES = ["Thomason Main Bldg", "MG Central Library", "Lecture Hall Complex (LHC)", "Ravindra Bhawan", "Govind Bhawan", "MAC Canteen", "Rajiv Canteen", "IITR Hospital", "LBS Sports Stadium", "Convocation Hall"];

function BatchCard({ b, stage, isAdmin, onAdvance }) {
  return (
    <div className="border border-line bg-ink p-4 hover:border-volt/50 transition-colors duration-200 rise" data-testid={`batch-card-${b.code}`}>
      <div className="flex justify-between items-start">
        <div><div className="font-mono text-[10px] text-mute tracking-widest">{b.code}</div><div className="font-semibold mt-1">{b.material}</div></div>
        <div className="w-20 h-8">
          <ResponsiveContainer><LineChart data={b.trend.map((v) => ({ v }))}><Line type="linear" dataKey="v" stroke={stage.color} dot={false} strokeWidth={1.5} /></LineChart></ResponsiveContainer>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-4 font-mono text-xs">
        <div><div className="text-mute text-[10px]">WEIGHT</div><div className="text-lg text-txt">{fmt(b.weight_kg)}<span className="text-mute text-xs"> kg</span></div></div>
        <div><div className="text-mute text-[10px]">â‚¹ / KG</div><div className="text-lg text-txt">{b.price_per_kg}</div></div>
        <div><div className="text-mute text-[10px]">SOURCE</div><div className="truncate">{b.source_zone}</div></div>
        <div><div className="text-mute text-[10px]">PURITY</div><div>{b.purity ? `${b.purity}%` : "pending"}</div></div>
      </div>
      {b.stage === "sold" && (
        <div className="mt-4 pt-3 border-t border-line text-xs"><span className="text-mute">{b.buyer}</span>
          <div className="font-mono text-volt text-base mt-1" data-testid={`batch-revenue-${b.code}`}>â‚¹{fmt(b.revenue)}</div></div>
      )}
      {isAdmin && stage.next && (
        <button onClick={() => onAdvance(b)} data-testid={`advance-batch-${b.code}`} className="mt-4 w-full flex items-center justify-between border border-line px-3 py-2 text-xs hover:bg-raised hover:border-volt/50 transition-colors duration-200">
          {stage.next} <ArrowRight size={13} />
        </button>
      )}
    </div>
  );
}

function NewBatch({ open, setOpen, onCreated }) {
  const [f, setF] = useState({ material: "", weight_kg: "", price_per_kg: "", source_zone: "MAC Canteen" });
  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/exchange/batches", { ...f, weight_kg: Number(f.weight_kg), price_per_kg: Number(f.price_per_kg) });
      onCreated(data);
      setOpen(false);
      setF({ material: "", weight_kg: "", price_per_kg: "", source_zone: "MAC Canteen" });
      toast.success(`Batch ${data.code} logged`);
    } catch (err) {
      toast.error(errMsg(err));
    }
  };
  const inp = "w-full bg-ink border border-line px-3 py-2.5 text-sm outline-none focus:border-volt rounded-none";
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-surface border-line rounded-sm" data-testid="new-batch-dialog">
        <DialogHeader><DialogTitle className="font-display text-2xl">Log a collected batch</DialogTitle></DialogHeader>
        <form onSubmit={submit} className="space-y-4">
          <input className={inp} placeholder="Material (e.g. PET Bottles)" value={f.material} onChange={(e) => setF({ ...f, material: e.target.value })} required data-testid="batch-material-input" />
          <div className="grid grid-cols-2 gap-3">
            <input className={inp} type="number" min="1" placeholder="Weight kg" value={f.weight_kg} onChange={(e) => setF({ ...f, weight_kg: e.target.value })} required data-testid="batch-weight-input" />
            <input className={inp} type="number" min="1" step="0.5" placeholder="â‚¹ per kg" value={f.price_per_kg} onChange={(e) => setF({ ...f, price_per_kg: e.target.value })} required data-testid="batch-price-input" />
          </div>
          <Select value={f.source_zone} onValueChange={(v) => setF({ ...f, source_zone: v })}>
            <SelectTrigger className="bg-ink border-line rounded-none" data-testid="batch-zone-select"><SelectValue /></SelectTrigger>
            <SelectContent className="bg-surface border-line rounded-none">{ZONE_NAMES.map((z) => <SelectItem key={z} value={z}>{z}</SelectItem>)}</SelectContent>
          </Select>
          <button type="submit" data-testid="batch-submit-button" className="w-full bg-volt text-ink font-bold py-3 hover:bg-[#CCFF00] transition-colors duration-200">Add to Collected</button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default function Exchange() {
  const { user } = useAuth();
  const isAdmin = user.role === "admin";
  const { data, setData } = useLive("/exchange/batches", 0);
  const [open, setOpen] = useState(false);
  const list = data || [];

  const advance = async (b) => {
    try {
      const { data: nb } = await api.post(`/exchange/batches/${b.id}/advance`);
      setData(list.map((x) => (x.id === nb.id ? nb : x)));
      toast.success(`${nb.code} moved to ${nb.stage}`);
    } catch (e) {
      toast.error(errMsg(e));
    }
  };
  const sold = list.filter((b) => b.stage === "sold");
  const stats = [
    ["In pipeline", `${fmt(list.filter((b) => b.stage !== "sold").reduce((s, b) => s + b.weight_kg, 0))} kg`],
    ["Diverted from landfill", `${fmt(list.reduce((s, b) => s + b.weight_kg, 0))} kg`],
    ["Revenue realised", `â‚¹${fmt(sold.reduce((s, b) => s + b.revenue, 0))}`],
    ["Pipeline value", `â‚¹${fmt(list.filter((b) => b.stage !== "sold").reduce((s, b) => s + b.weight_kg * b.price_per_kg, 0))}`],
  ];

  return (
    <div data-testid="exchange-page">
      <PageHead kicker="04 / Circular exchange hub" title="Waste in. Revenue out." sub="Every recyclable batch is traced from campus collection through quality testing to a verified recycler sale."
        right={isAdmin ? (
          <button onClick={() => setOpen(true)} data-testid="new-batch-button" className="flex items-center gap-2 bg-volt text-ink font-bold px-5 py-3 hover:bg-[#CCFF00] transition-colors duration-200"><Plus size={16} /> Log batch</button>
        ) : <span className="font-mono text-xs text-mute border border-line px-3 py-2">VIEW ONLY / ADMIN MANAGES</span>} />
      {/* Area C: End-to-End Material Traceability & Composting Pipeline */}
      <Panel className="p-5 sm:p-6 mb-4 border-line bg-ink" data-testid="traceability-pipeline">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <Overline>Area C / Resource Recovery & Composting Flow</Overline>
            <h3 className="text-xl font-medium tracking-tight mt-1">End-to-End Material Traceability & Composting Chain</h3>
          </div>
          <span className="font-mono text-xs text-volt border border-volt/30 px-3 py-1">100% Chain-of-Custody</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
          <div className="border border-line p-3 bg-surface">
            <div className="text-volt font-bold">STAGE 01 · SOURCE</div>
            <div className="font-semibold text-txt mt-1">Segregated at Bhawan</div>
            <div className="text-mute mt-1 font-sans text-[11px]">Separated by 4,200+ students via QR & AI smart scanner at hostels & canteens.</div>
          </div>
          <div className="border border-line p-3 bg-surface">
            <div className="text-rec font-bold">STAGE 02 · COLLECTION</div>
            <div className="font-semibold text-txt mt-1">Smart Route Pickup</div>
            <div className="text-mute mt-1 font-sans text-[11px]">Trigger-based collection saves 38% cart distance; weight logged by zone.</div>
          </div>
          <div className="border border-line p-3 bg-surface">
            <div className="text-amber font-bold">STAGE 03 · MRF TESTING</div>
            <div className="font-semibold text-txt mt-1">Weighed & Purity Scan</div>
            <div className="text-mute mt-1 font-sans text-[11px]">NIR purity scan & moisture test. High-purity bales graded before sale.</div>
          </div>
          <div className="border border-line p-3 bg-surface">
            <div className="text-org font-bold">STAGE 04 · RECOVERY</div>
            <div className="font-semibold text-txt mt-1">Composted / Recycled</div>
            <div className="text-mute mt-1 font-sans text-[11px]">Food waste to Aerobic Compost Unit; Baled dry waste to Apex & Paper Mills.</div>
          </div>
        </div>
      </Panel>
      <Panel className="grid grid-cols-2 lg:grid-cols-4 mb-4 gap-px bg-line overflow-hidden">
        {stats.map(([l, v], i) => (
          <div key={l} className="p-5 bg-surface" data-testid={`exchange-stat-${i}`}>
            <Overline>{l}</Overline><div className="font-mono text-2xl sm:text-3xl mt-3 tabular-nums">{v}</div>
          </div>
        ))}
      </Panel>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
        {STAGES.map((st) => {
          const items = list.filter((b) => b.stage === st.key);
          const Icon = st.icon;
          return (
            <Panel key={st.key} className="flex flex-col" data-testid={`kanban-col-${st.key}`}>
              <div className="p-4 border-b border-line flex items-center justify-between" style={{ borderTop: `2px solid ${st.color}` }}>
                <span className="flex items-center gap-2 font-semibold"><Icon size={16} style={{ color: st.color }} />{st.label}</span>
                <span className="font-mono text-xs text-mute">{items.length}</span>
              </div>
              <div className="p-3 space-y-3">{items.map((b) => <BatchCard key={b.id} b={b} stage={st} isAdmin={isAdmin} onAdvance={advance} />)}</div>
            </Panel>
          );
        })}
      </div>
      <NewBatch open={open} setOpen={setOpen} onCreated={(b) => setData([b, ...list])} />
    </div>
  );
}

