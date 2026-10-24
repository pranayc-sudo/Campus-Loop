import { useState } from "react";
import { Battery, Wifi, Flag } from "lucide-react";
import { toast } from "sonner";
import { api, errMsg } from "@/lib/api";
import { useAuth } from "@/context/Auth";
import { useLive, Panel, Overline, PageHead, Bar, Dot, C, fmt, fillColor, STATUS_COLOR } from "@/components/kit";

const MODES = [["optimized", "AI dynamic"], ["scheduled", "Scheduled loop"], ["both", "Compare"], ["surge", "⚡ Surge Forecast"]];
const pathD = (p) => `M${p.map((n) => `${n.x},${n.y}`).join(" L")}`;

function CampusMap({ zones, routes, mode, selected, onSelect }) {
  const showS = mode !== "optimized";
  const showO = mode !== "scheduled";
  return (
    <svg viewBox="60 100 900 520" className="w-full h-auto" data-testid="campus-map">
      <defs>
        <pattern id="g" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M30 0H0V30" fill="none" stroke={C.line} strokeWidth="0.6" /></pattern>
      </defs>
      <rect x="60" y="100" width="900" height="520" fill="url(#g)" />
      <path d="M60 300 Q 400 280 960 420" stroke="#1A1D22" strokeWidth="26" fill="none" />
      <path d="M420 100 L 470 620" stroke="#1A1D22" strokeWidth="18" fill="none" />
      {showS && <path d={pathD(routes.scheduled.path)} fill="none" stroke={C.mute} strokeWidth="1.5" strokeDasharray="4 6" data-testid="route-scheduled" />}
      {showO && (
        <>
          <path d={pathD(routes.optimized.path)} fill="none" stroke={C.volt} strokeWidth="2.5" strokeDasharray="10 10" className="dash-flow" data-testid="route-optimized" />
          <rect width="14" height="10" x="-7" y="-5" fill={C.volt}>
            <animateMotion dur="14s" repeatCount="indefinite" path={pathD(routes.optimized.path)} rotate="auto" />
          </rect>
        </>
      )}
      <g>
        <rect x={routes.depot.x - 14} y={routes.depot.y - 14} width="28" height="28" fill={C.ink} stroke={C.volt} />
        <text x={routes.depot.x + 22} y={routes.depot.y + 4} fill={C.volt} fontSize="12" fontFamily="JetBrains Mono">MRF DEPOT</text>
      </g>
      {zones.map((z) => {
        const col = fillColor(z.fill);
        const r = 16 + z.bins;
        const c = 2 * Math.PI * (r + 6);
        const sel = selected === z.id;
        return (
          <g key={z.id} onClick={() => onSelect(z.id)} className="cursor-pointer" data-testid={`map-zone-${z.id}`}>
            <circle cx={z.x} cy={z.y} r={r + 6} fill="none" stroke={C.line} strokeWidth="3" />
            <circle cx={z.x} cy={z.y} r={r + 6} fill="none" stroke={col} strokeWidth="3" strokeDasharray={c} strokeDashoffset={c * (1 - z.fill / 100)}
              transform={`rotate(-90 ${z.x} ${z.y})`} style={{ transition: "stroke-dashoffset 900ms" }} />
            <circle cx={z.x} cy={z.y} r={r} fill={sel ? "#1C1F26" : C.ink} stroke={sel ? C.volt : C.line} />
            <text x={z.x} y={z.y + 4} textAnchor="middle" fill={C.txt} fontSize="12" fontFamily="JetBrains Mono">{`${Math.round(z.fill)}%`}</text>
            <text x={z.x} y={z.y + r + 24} textAnchor="middle" fill={sel ? C.volt : C.mute} fontSize="11" fontFamily="Manrope" fontWeight="600">{z.name}</text>
            {z.status === "critical" && <circle cx={z.x + r} cy={z.y - r} r="4" fill={C.non} className="pulse-dot" />}
          </g>
        );
      })}
    </svg>
  );
}

function RouteStats({ routes }) {
  const rows = [["Distance / loop", "km", "km"], ["Daily distance", "km_day", "km"], ["Stops / loop", "stops", ""], ["Loop time", "minutes", "min"], ["COâ‚‚ / day", "co2_kg_day", "kg"]];
  return (
    <Panel data-testid="route-comparison">
      <div className="p-5 border-b border-line flex items-end justify-between">
        <div><Overline>Route intelligence</Overline><h3 className="text-xl font-medium mt-2">Scheduled vs AI-optimized</h3></div>
        <div className="text-right"><div className="font-mono text-3xl text-volt" data-testid="route-savings">-{routes.savings_pct}%</div><Overline>distance</Overline></div>
      </div>
      <div className="grid grid-cols-[1fr_auto_auto] text-sm">
        <div className="px-5 py-2 border-b border-line" /><div className="px-5 py-2 border-b border-line font-mono text-[10px] text-mute tracking-widest">SCHED.</div>
        <div className="px-5 py-2 border-b border-line font-mono text-[10px] text-volt tracking-widest">AI</div>
        {rows.map(([l, k, u]) => (
          <div key={k} className="contents">
            <div className="px-5 py-3 border-b border-line text-mute">{l}</div>
            <div className="px-5 py-3 border-b border-line font-mono tabular-nums">{fmt(routes.scheduled[k], k === "stops" ? 0 : 1)} {u}</div>
            <div className="px-5 py-3 border-b border-line font-mono tabular-nums text-volt">{fmt(routes.optimized[k], k === "stops" ? 0 : 1)} {u}</div>
          </div>
        ))}
      </div>
      <p className="p-5 text-xs text-mute leading-relaxed">AI loop only visits zones above 55% fill, ordered by nearest-neighbour from the depot. Recomputed on every telemetry tick.</p>
    </Panel>
  );
}

function Telemetry({ zone, isStudent }) {
  const report = async () => {
    try {
      const { data } = await api.post("/reports", { zone_id: zone.id, note: "Overflow reported from digital twin" });
      toast.success(`Report for ${data.zone} sent for admin review. +${data.reward} credits once verified.`);
    } catch (e) {
      toast.error(errMsg(e));
    }
  };
  return (
    <Panel data-testid="telemetry-panel">
      <div className="p-5 border-b border-line flex flex-wrap items-center justify-between gap-3">
        <div>
          <Overline>Live IoT telemetry / {zone.id}</Overline>
          <h3 className="text-xl font-medium mt-2" data-testid="telemetry-zone-name">{zone.name} <span className="text-mute text-sm">Â· {zone.type}</span></h3>
        </div>
        {isStudent && (
          <button onClick={report} data-testid="report-overflow-button" className="flex items-center gap-2 border border-non/60 text-non px-4 py-2 text-sm hover:bg-non/10 transition-colors duration-200">
            <Flag size={14} /> Report overflow
          </button>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[560px]" data-testid="telemetry-table">
          <thead><tr className="font-mono text-[10px] text-mute tracking-widest text-left">
            {["NODE", "FILL", "ULTRASONIC", "BATTERY", "SIGNAL", "TEMP", "STATE"].map((h) => <th key={h} className="px-5 py-3 border-b border-line font-medium">{h}</th>)}
          </tr></thead>
          <tbody>
            {zone.sensors.map((s) => (
              <tr key={s.id} className="border-b border-line hover:bg-raised transition-colors duration-200 font-mono" data-testid={`sensor-row-${s.id}`}>
                <td className="px-5 py-3">{s.id}</td>
                <td className="px-5 py-3 w-40"><div className="flex items-center gap-3"><Bar value={s.fill} color={fillColor(s.fill)} /><span className="w-12 text-right tabular-nums">{s.fill}%</span></div></td>
                <td className="px-5 py-3 tabular-nums">{s.distance_cm} cm</td>
                <td className="px-5 py-3 tabular-nums"><span className="flex items-center gap-2" style={{ color: s.battery < 30 ? C.non : C.txt }}><Battery size={14} />{s.battery}%</span></td>
                <td className="px-5 py-3 tabular-nums"><span className="flex items-center gap-2"><Wifi size={14} />{s.rssi} dBm</span></td>
                <td className="px-5 py-3 tabular-nums">{s.temp_c}Â°C</td>
                <td className="px-5 py-3"><span className="flex items-center gap-2 uppercase text-[11px]"><Dot color={STATUS_COLOR[s.status]} />{s.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}

export default function Twin() {
  const { user } = useAuth();
  const { data } = useLive("/zones", 4000);
  const [mode, setMode] = useState("both");
  const [sel, setSel] = useState("Z06");
  if (!data) return <div className="font-mono text-xs text-mute">Rendering digital twinâ€¦</div>;
  const zone = data.zones.find((z) => z.id === sel) || data.zones[0];
  return (
    <div data-testid="twin-page">
      <PageHead kicker="03 / Spatial digital twin" title="The campus, as a living graph." sub="10 landmark zones, 63 ultrasonic bin nodes. Tap a zone to inspect its sensors."
        right={
          <div className="flex border border-line" data-testid="route-mode-toggle">
            {MODES.map(([k, l]) => (
              <button key={k} onClick={() => setMode(k)} data-testid={`route-mode-${k}`}
                className={`px-4 py-2.5 text-sm transition-colors duration-200 ${mode === k ? "bg-volt text-ink font-bold" : "text-mute hover:text-txt hover:bg-raised"}`}>{l}</button>
            ))}
          </div>
        } />
      {mode === "surge" && (
        <div className="mb-4 border border-volt/40 bg-volt/10 p-4 font-mono text-xs rise" data-testid="surge-forecast-panel">
          <div className="flex flex-wrap items-center justify-between text-volt font-bold gap-2">
            <span>⚡ AREA B & D / PREDICTIVE SURGE & GENERATION FORECAST</span>
            <span>MODEL ACCURACY: 94.2%</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3 text-txt">
            <div className="bg-ink/80 p-3 border border-line">
              <span className="text-volt font-semibold">MAC & Rajiv Canteens:</span>
              <div className="text-mute mt-1 font-sans">+58% packaging spike forecasted tonight (21:00-01:00). Collection cart dispatched 2 hours early to prevent overflow.</div>
            </div>
            <div className="bg-ink/80 p-3 border border-line">
              <span className="text-org font-semibold">Ravindra & Govind Messes:</span>
              <div className="text-mute mt-1 font-sans">+44% organic food surge forecasted tomorrow lunch. Direct compost link to Estate Office composting active.</div>
            </div>
            <div className="bg-ink/80 p-3 border border-line">
              <span className="text-rec font-semibold">LHC & Central Library:</span>
              <div className="text-mute mt-1 font-sans">-35% drop during weekend idle. Nodes throttled to standby collection, saving vehicle km.</div>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 xl:grid-cols-[1.6fr_1fr] gap-4 mb-4">
        <Panel className="p-2 sm:p-4 relative">
          <div className="overflow-x-auto"><div className="min-w-[720px]"><CampusMap zones={data.zones} routes={data.routes} mode={mode} selected={zone.id} onSelect={setSel} /></div></div>
          <div className="flex flex-wrap gap-5 px-3 pb-2 font-mono text-[10px] text-mute tracking-widest">
            <span className="flex items-center gap-2"><span className="w-6 border-t-2 border-dashed border-volt" />AI ROUTE</span>
            <span className="flex items-center gap-2"><span className="w-6 border-t border-dashed border-mute" />SCHEDULED</span>
            <span className="flex items-center gap-2"><Dot color={C.org} />&lt;65%</span>
            <span className="flex items-center gap-2"><Dot color={C.amber} />65-85%</span>
            <span className="flex items-center gap-2"><Dot color={C.non} />&gt;85%</span>
          </div>
        </Panel>
        <RouteStats routes={data.routes} />
      </div>
      <Telemetry zone={zone} isStudent={user.role === "student"} />
    </div>
  );
}
