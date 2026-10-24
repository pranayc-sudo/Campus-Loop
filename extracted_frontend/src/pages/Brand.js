import { Panel, Overline, PageHead, C } from "@/components/kit";

const PALETTE = [
  ["Obsidian", "#090A0C", "Canvas. Near-black keeps data luminous and cuts eye strain in 24/7 ops rooms."],
  ["Graphite", "#121418", "Surface. One flat step up; depth comes from borders, never soft shadows."],
  ["Hairline", "#22262B", "Structure. 1px grid lines give the engineered, blueprint feel."],
  ["Neon Volt", "#D1FF4D", "Signal. The single brand accent: actions, AI routes, the health index."],
  ["Organic", "#00E676", "Waste class: compostable / wet."],
  ["Recyclable", "#00BFFF", "Waste class: dry recoverable."],
  ["Non-Recyclable", "#FF453A", "Waste class: reject. Also critical alerts."],
  ["Amber", "#FFB020", "Guardrail and warning state."],
];

const TYPE = [
  ["Outfit", "font-display text-5xl font-bold tracking-tighter", "Display / headings", "Geometric, confident, slightly futuristic."],
  ["Manrope", "font-body text-lg", "Body / UI copy", "Humanist and highly legible at small sizes."],
  ["JetBrains Mono", "font-mono text-3xl", "Data / metrics", "Tabular figures so live numbers never jitter."],
];

const PRINCIPLES = [
  ["Tactical eco-brutalism", "Sustainability without the clichÃ© leaf-green. We treat waste as infrastructure: precise, measurable, operational."],
  ["One accent, three classes", "Volt is reserved for action and AI. Green, cyan and red map 1:1 to the three bins, so colour itself teaches sorting."],
  ["Borders over shadows", "Sharp 2px radius, hairline grids and flat surfaces read like an instrument panel and stay crisp on projectors in a judging hall."],
  ["Motion means data", "Animation only where it carries information: route tracing, scanner sweep, live pulse, filling gauges."],
];

export default function Brand() {
  return (
    <div data-testid="brand-page">
      <PageHead kicker="08 / Design system" title="CampusLoop identity." sub="A dark, instrument-grade visual language built for a live operations product." />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
        {PRINCIPLES.map(([t, d], i) => (
          <Panel key={t} className="p-6 hover:border-volt/50 rise" style={{ animationDelay: `${i * 70}ms` }}>
            <span className="font-mono text-xs text-volt">0{i + 1}</span>
            <h3 className="text-xl font-semibold tracking-tight mt-4">{t}</h3>
            <p className="text-sm text-mute mt-3 leading-relaxed">{d}</p>
          </Panel>
        ))}
      </div>
      <Panel className="mb-4" data-testid="brand-palette">
        <div className="p-5 border-b border-line"><Overline>Colour palette</Overline></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line">
          {PALETTE.map(([n, hex, d]) => (
            <div key={n} className="bg-surface">
              <div className="h-24 border-b border-line" style={{ background: hex }} />
              <div className="p-4"><div className="flex justify-between"><span className="font-semibold text-sm">{n}</span><span className="font-mono text-xs text-mute">{hex}</span></div>
                <p className="text-xs text-mute mt-2 leading-relaxed">{d}</p></div>
            </div>
          ))}
        </div>
      </Panel>
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-4">
        <Panel data-testid="brand-typography">
          <div className="p-5 border-b border-line"><Overline>Typography</Overline></div>
          {TYPE.map(([n, cls, role, why]) => (
            <div key={n} className="p-6 border-b border-line last:border-b-0 grid sm:grid-cols-[1fr_200px] gap-4 items-end">
              <div className={cls}>{n === "JetBrains Mono" ? "1,284.6 kg" : n === "Outfit" ? "Close the loop." : "Every bin is a sensor, every scrap an asset."}</div>
              <div><div className="font-mono text-xs text-volt">{n}</div><div className="text-xs text-mute mt-1">{role}. {why}</div></div>
            </div>
          ))}
        </Panel>
        <Panel className="p-6 space-y-6" data-testid="brand-components">
          <Overline>Core components</Overline>
          <div className="flex flex-wrap gap-3">
            <button className="bg-volt text-ink font-bold px-5 py-3 hover:bg-[#CCFF00] transition-colors duration-200">Primary action</button>
            <button className="border border-line px-5 py-3 hover:bg-raised transition-colors duration-200">Secondary</button>
          </div>
          <div className="flex flex-wrap gap-2 font-mono text-[11px]">
            {[["OK", C.org], ["WARNING", C.amber], ["CRITICAL", C.non], ["AI ROUTE", C.volt]].map(([l, c]) => (
              <span key={l} className="border px-2 py-1" style={{ borderColor: c, color: c }}>{l}</span>
            ))}
          </div>
          <div><Overline>Radius / elevation</Overline><p className="text-sm text-mute mt-2">2px corners Â· 1px #22262B borders Â· no drop shadows Â· glass blur (24px) only on sticky chrome.</p></div>
          <div><Overline>Spacing</Overline><div className="flex items-end gap-2 mt-3">{[4, 8, 16, 24, 32, 48].map((s) => <div key={s} className="bg-volt/80" style={{ width: s, height: s }} />)}</div></div>
        </Panel>
      </div>
    </div>
  );
}
