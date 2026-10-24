# 🚀 CampusLoop — Standalone Deployment & Free Publishing Guide

This repository contains the complete, liberated codebase for **CampusLoop | Campus Waste Intelligence**, extracted and configured for **100% free hosting** without paying Emergent.

---

## ⚡ What was fixed?

1. **Bypassed Emergent Paywall**: You no longer need to pay Emergent to publish your hackathon project.
2. **Fixed Direct Link 404 Errors**: Emergent's preview server threw a `404 Not Found` when opening routes like `/wallet` directly because it lacked SPA rewrites. We configured `_redirects` and `vercel.json` so deep links (`/wallet`, `/twin`, `/scanner`, `/exchange`, etc.) work seamlessly.
3. **Removed Bloat & Trackers**: Stripped out Emergent debug overlays, rrweb screen recorders, and telemetry.
4. **Source Code Recovered**: Extracted full original React components, hooks, and styles into [`extracted_frontend/`](./extracted_frontend).
5. **Backend Preserved**: Built a standalone Python FastAPI backend in [`backend/`](./backend) with all seed data, mock AI classification, wallet mechanics, and digital twin routes.

---

## 🌐 How to Publish for FREE (Choose Any Method)

### Method 1: Netlify Drop (Easiest — 30 Seconds, No Terminal Needed)
1. Open [https://app.netlify.com/drop](https://app.netlify.com/drop) in your browser (log in or create a free Netlify account).
2. Drag and drop the **`dist`** folder from this directory onto the webpage.
3. Netlify will immediately publish your website and give you a free, permanent HTTPS URL (e.g., `https://campusloop-sociothon.netlify.app`).
4. You can share this URL with judges, teammates, or submission portals!

---

### Method 2: Vercel (Fast & Professional)
1. Go to [https://vercel.com](https://vercel.com) and log in with GitHub.
2. Upload this directory or push it to a GitHub repository and import it into Vercel.
3. Set the **Output Directory** to `dist`.
4. Click **Deploy**. Vercel will read [`dist/vercel.json`](./dist/vercel.json) and serve your app globally on a `.vercel.app` domain.

---

### Method 3: GitHub Pages
1. Create a repository on GitHub (e.g. `campusloop`).
2. Copy the contents of `dist/` to the root or a `docs/` folder of your repo.
3. Go to **Settings > Pages** on GitHub and select the branch and folder.
4. The included `404.html` ensures all SPA routes (`/wallet`, `/twin`) resolve without 404 errors.

---

## 💻 Testing Locally (Offline)

You can preview the app on your computer immediately without internet:
- **Double-click [`serve_local.bat`](./serve_local.bat)**  
  *(or in PowerShell run `.\serve_local.ps1`)*
- It will automatically launch your browser at `http://localhost:3000`.

---

## 🗄️ Backend API (Optional Self-Hosting)

- By default, [`dist/static/js/bundle.js`](./dist/static/js/bundle.js) is configured to connect to the live Emergent API endpoint, with fallback support.
- If you want an independent backend running on your own free server (e.g. [Render.com](https://render.com)):
  1. Create a free **Web Service** on Render.com pointing to the [`backend/`](./backend) folder.
  2. Start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
  3. Set `window.CAMPUSLOOP_API = "https://your-backend.onrender.com/api";` inside [`dist/index.html`](./dist/index.html).

---

## 📂 Project Directory Structure

```
├── dist/                     # 🚀 Production-ready build (deploy this!)
│   ├── index.html            # Clean entrypoint with Tailwind & Google fonts
│   ├── 404.html              # Fallback for GitHub Pages SPA routing
│   ├── _redirects            # Netlify routing rules (prevents /wallet 404)
│   ├── vercel.json           # Vercel routing rules
│   └── static/js/bundle.js   # Compiled React application
├── backend/                  # 🐍 Standalone FastAPI backend
│   ├── main.py               # Complete API implementation (auth, scans, wallet, twin)
│   ├── requirements.txt      # Python dependencies (fastapi, uvicorn, pydantic)
│   └── Procfile              # Cloud deployment process file
├── extracted_frontend/       # ⚛️ 100% recovered React source code
│   └── src/
│       ├── pages/            # Wallet, Scanner, Twin, Exchange, Overview, Reports, Roi, Brand, Login
│       ├── components/       # UI components & design system (Shell, kit, dialog, select)
│       └── context/          # Auth context & state
├── serve_local.bat           # 1-click local launcher for Windows
└── serve_local.ps1           # PowerShell HTTP server script
```
