import { useEffect, useRef, useState } from "react";
import { api } from "@/lib/api";

export const C = {
  volt: "#D1FF4D", org: "#00E676", rec: "#00BFFF", non: "#FF453A", amber: "#FFB020",
  line: "#22262B", mute: "#8B949E", txt: "#F2F4F7", surface: "#121418", ink: "#090A0C",
};

export const CAT = {
  organic: { label: "Organic", hi: "à¤œà¥ˆà¤µà¤¿à¤•", color: C.org, bin: "Green bin" },
  recyclable: { label: "Recyclable", hi: "à¤°à¥€à¤¸à¤¾à¤¯à¤•à¤² à¤¯à¥‹à¤—à¥à¤¯", color: C.rec, bin: "Blue bin" },
  non_recyclable: { label: "Non-Recyclable", hi: "à¤—à¥ˆà¤°-à¤°à¥€à¤¸à¤¾à¤¯à¤•à¤²", color: C.non, bin: "Red bin" },
};

export const STATUS_COLOR = { ok: C.org, warning: C.amber, critical: C.non };

export const fmt = (n, d = 0) =>
  Number(n || 0).toLocaleString("en-IN", { maximumFractionDigits: d, minimumFractionDigits: d });

export function useLive(path, ms = 5000) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const alive = useRef(true);
  useEffect(() => {
    alive.current = true;
    const load = async () => {
      try {
        const r = await api.get(path);
        if (alive.current) setData(r.data);
      } catch (e) {
        if (alive.current) setError(e);
      }
    };
    load();
    const id = ms ? setInterval(load, ms) : null;
    return () => {
      alive.current = false;
      if (id) clearInterval(id);
    };
  }, [path, ms]);
  return { data, error, setData };
}

export const Panel = ({ className = "", children, ...p }) => (
  <div className={`border border-line bg-surface rounded-sm transition-colors duration-200 ${className}`} {...p}>
    {children}
  </div>
);

export const Overline = ({ children, className = "" }) => (
  <div className={`text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-mute font-mono ${className}`}>{children}</div>
);

export const PageHead = ({ kicker, title, sub, right, testid }) => (
  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 rise" data-testid={testid}>
    <div>
      <Overline className="text-volt mb-3">{kicker}</Overline>
      <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.95]">{title}</h1>
      {sub && <p className="text-sm sm:text-base text-mute mt-4 max-w-2xl">{sub}</p>}
    </div>
    {right}
  </div>
);

export const Dot = ({ color = C.org, pulse }) => (
  <span className={`inline-block w-2 h-2 ${pulse ? "pulse-dot" : ""}`} style={{ background: color }} />
);

export const Bar = ({ value, color = C.volt, h = "h-1.5" }) => (
  <div className={`w-full ${h} bg-line`}>
    <div className={`${h} transition-[width] duration-700`} style={{ width: `${Math.min(100, value)}%`, background: color }} />
  </div>
);

export const fillColor = (f) => (f >= 85 ? C.non : f >= 65 ? C.amber : C.org);

export const Initials = ({ name, size = 36, accent }) => (
  <div
    className="flex items-center justify-center font-mono font-bold text-xs shrink-0 border"
    style={{ width: size, height: size, borderColor: accent || C.line, color: accent || C.txt, background: C.ink }}
  >
    {name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase()}
  </div>
);
