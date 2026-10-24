import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceArea, Line } from "recharts";
import { AlertTriangle, Info, Siren } from "lucide-react";
import { useLive, Panel, Overline, PageHead, Dot, Bar, C, fmt, fillColor, STATUS_COLOR } from "@/components/kit";

const LEVEL = { critical: [C.non, Siren], warning: [C.amber, AlertTriangle], info: [C.rec, Info] };

function Kpi({ label, value, unit, accent, testid, delay }) {
  return (
    <div className="p-5 sm:p-6 bg-surface rise flex flex-col justify-between" style={{ animationDelay: `${delay}ms` }} data-testid={testid}>
      <Overline>{label}</Overline>
      <div className="mt-4 font-mono text-3xl sm:text-4xl font-semibold tracking-tight tabular-nums" style={{ color: accent || C.txt }}>
        {value}<span className="text-sm text-mute ml-1.5">{unit}</span>
      </div>
    </div>
  );
}

function Health({ score }) {
  const r = 70, c = 2 * Math.PI * r;
  return (
    <Panel className="p-6 sm:p-8 flex flex-col justify-between rise" data-testid="kpi-health-score">
      <Overline>Campus health index</Overline>
      <div className="relative my-6 mx-auto">
        <svg width="180" height="180" viewBox="0 0 180 180">
          <circle cx="90" cy="90" r={r} fill="none" stroke={C.line} strokeWidth="10" />
          <circle cx="90" cy="90" r={r} fill="none" stroke={C.volt} strokeWidth="10" strokeDasharray={c}
            strokeDashoffset={c * (1 - score / 100)} transform="rotate(-90 90 90)" style={{ transition: "stroke-dashoffset 900ms" }} />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="font-mono text-6xl font-bold text-volt tabular-nums" data-testid="health-score-value">{score}</div>
          <div className="font-mono text-[10px] tracking-[0.3em] text-mute">/ 100</div>
        </div>
      </div>
      <p className="text-sm text-mute">Composite of fill pressure, diversion rate, and sensor uptime across all 10 zones.</p>
    </Panel>
  );
}

function PeakChart({ hourly }) {
  return (
    <Panel className="p-5 sm:p-6 lg:col-span-3" data-testid="peak-hour-chart">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <Overline>Hourly generation / kg</Overline>
          <h3 className="text-xl font-medium tracking-tight mt-2">Peak-hour load vs collection capacity</h3>
        </div>
        <div className="flex gap-4 font-mono text-[11px] text-mute">
          {[["Organic", C.org], ["Recyclable", C.rec], ["Non-rec.", C.non], ["Capacity", C.volt]].map(([l, c]) => (
            <span key={l} className="flex items-center gap-2"><Dot color={c} />{l}</span>
          ))}
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer>
          <AreaChart data={hourly} margin={{ left: -20, right: 4 }}>
            <CartesianGrid stroke={C.line} strokeDasharray="3 6" vertical={false} />
            <ReferenceArea x1="12:00" x2="14:00" fill={C.non} fillOpacity={0.07} />
            <ReferenceArea x1="19:00" x2="21:00" fill={C.amber} fillOpacity={0.06} />
            <XAxis dataKey="hour" tick={{ fill: C.mute, fontSize: 10, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} interval={2} />
            <YAxis tick={{ fill: C.mute, fontSize: 10, fontFamily: "JetBrains Mono" }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: C.ink, border: `1px solid ${C.line}`, borderRadius: 0, fontFamily: "JetBrains Mono", fontSize: 12 }} />
            <Area type="linear" dataKey="organic" stackId="1" stroke={C.org} fill={C.org} fillOpacity={0.18} />
            <Area type="linear" dataKey="recyclable" stackId="1" stroke={C.rec} fill={C.rec} fillOpacity={0.18} />
            <Area type="linear" dataKey="non_recyclable" stackId="1" stroke={C.non} fill={C.non} fillOpacity={0.18} />
            <Line type="linear" dataKey="capacity" stroke={C.volt} strokeDasharray="5 5" dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}

function Alerts({ alerts }) {
  return (
    <Panel className="lg:col-span-2" data-testid="alerts-feed">
      <div className="p-5 sm:p-6 border-b border-line flex items-center justify-between">
        <div><Overline>Operational alerts</Overline><h3 className="text-xl font-medium mt-2">Dispatch queue</h3></div>
        <span className="font-mono text-xs text-non">{alerts.filter((a) => a.level === "critical").length} critical</span>
      </div>
      <div className="max-h-[360px] overflow-y-auto">
        {alerts.map((a) => {
          const [color, Icon] = LEVEL[a.level];
          return (
            <div key={a.id} className="flex gap-4 p-5 border-b border-line last:border-b-0 hover:bg-raised transition-colors duration-200" data-testid={`alert-${a.id}`}>
              <div className="w-9 h-9 shrink-0 flex items-center justify-center border" style={{ borderColor: color, color }}><Icon size={16} /></div>
              <div className="min-w-0">
                <div className="flex items-center gap-2"><span className="font-semibold text-sm">{a.zone}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color }}>{a.level}</span></div>
                <p className="text-sm text-mute mt-1">{a.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}

function ZoneList({ zones }) {
  return (
    <Panel className="lg:col-span-2" data-testid="zone-fill-list">
      <div className="p-5 sm:p-6 border-b border-line"><Overline>Zone fill pressure</Overline><h3 className="text-xl font-medium mt-2">10 landmarks, live</h3></div>
      <div className="divide-y divide-line">
        {[...zones].sort((a, b) => b.fill - a.fill).map((z) => (
          <div key={z.id} className="grid grid-cols-[1fr_120px_56px] sm:grid-cols-[1fr_180px_64px] items-center gap-4 px-5 sm:px-6 py-3">
            <div className="flex items-center gap-3 min-w-0"><Dot color={STATUS_COLOR[z.status]} /><span className="text-sm truncate">{z.name}</span></div>
            <Bar value={z.fill} color={fillColor(z.fill)} />
            <span className="font-mono text-sm text-right tabular-nums">{z.fill}%</span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

export default function Overview() {
  const { data } = useLive("/overview", 5000);
  if (!data) return <div className="font-mono text-xs text-mute" data-testid="overview-loading">Syncing telemetryâ€¦</div>;
  const k = data.kpis;
  return (
    <div data-testid="overview-page">
      <PageHead kicker="01 / Command center" title="Campus, in real time." sub="Fill levels, diversion, and peak-hour pressure across every landmark zone, refreshed every 5 seconds." />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
        <Health score={data.health_score} />
        <Panel className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 auto-rows-fr gap-px bg-line overflow-hidden">
          <Kpi testid="kpi-total-waste" label="Generated today" value={fmt(k.total_kg)} unit="kg" delay={0} />
          <Kpi testid="kpi-diversion" label="Diversion rate" value={fmt(k.diversion_rate, 1)} unit="%" accent={C.org} delay={60} />
          <Kpi testid="kpi-critical" label="Critical zones" value={k.critical_zones} unit="/10" accent={k.critical_zones ? C.non : C.org} delay={120} />
          <Kpi testid="kpi-bins" label="Active IoT bins" value={k.active_bins} unit="nodes" delay={180} />
          <Kpi testid="kpi-scans" label="AI scans today" value={k.scans_today} unit="items" accent={C.rec} delay={240} />
          <Kpi testid="kpi-guardrail" label="Guardrail intercepts" value={k.guardrail_hits} unit="saved" accent={C.amber} delay={300} />
          <Kpi testid="kpi-revenue" label="Exchange revenue" value={`â‚¹${fmt(k.revenue_inr)}`} unit="" accent={C.volt} delay={360} />
          <Kpi testid="kpi-co2" label="COâ‚‚e avoided" value={fmt(k.co2_saved_kg)} unit="kg" delay={420} />
        </Panel>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <PeakChart hourly={data.hourly} />
        <Panel className="p-5 sm:p-6" data-testid="composition-panel">
          <Overline>Stream composition</Overline>
          <div className="mt-6 space-y-6">
            {data.composition.map((c, i) => (
              <div key={c.name}>
                <div className="flex justify-between text-sm mb-2"><span>{c.name}</span><span className="font-mono">{c.value}%</span></div>
                <Bar value={c.value} color={[C.org, C.rec, C.non][i]} h="h-2" />
              </div>
            ))}
          </div>
          <p className="text-xs text-mute mt-8 leading-relaxed">Shaded bands on the chart mark the lunch and dinner surge windows that trigger pre-emptive dispatch.</p>
        </Panel>
        <Alerts alerts={data.alerts} />
        <ZoneList zones={data.zones} />
      </div>
    </div>
  );
}
