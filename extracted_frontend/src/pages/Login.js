import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/context/Auth";
import { errMsg } from "@/lib/api";
import { Logo } from "@/components/Shell";
import { Overline, C } from "@/components/kit";

const NODES = [[120, 90], [300, 60], [420, 170], [260, 230], [90, 260], [380, 320], [200, 360]];

function LoopArt() {
  const d = `M${NODES.map((n) => n.join(",")).join(" L")} Z`;
  return (
    <svg viewBox="0 0 500 420" className="w-full max-w-lg" aria-hidden>
      <path d={d} fill="none" stroke={C.line} strokeWidth="1" />
      <path d={d} fill="none" stroke={C.volt} strokeWidth="2" strokeDasharray="6 14" className="dash-flow" />
      {NODES.map(([x, y], i) => (
        <g key={i}>
          <rect x={x - 7} y={y - 7} width="14" height="14" fill={C.ink} stroke={[C.org, C.rec, C.non][i % 3]} />
          <rect x={x - 2} y={y - 2} width="4" height="4" fill={[C.org, C.rec, C.non][i % 3]} className="pulse-dot" />
        </g>
      ))}
      <circle r="5" fill={C.volt}>
        <animateMotion dur="9s" repeatCount="indefinite" path={d} />
      </circle>
    </svg>
  );
}

const Field = ({ label, ...p }) => (
  <label className="block">
    <Overline className="mb-2">{label}</Overline>
    <input {...p} className="w-full bg-ink border border-line px-4 py-3 text-sm outline-none focus:border-volt transition-colors duration-200 rounded-none" />
  </label>
);

export default function Login() {
  const { login, register, demo } = useAuth();
  const [mode, setMode] = useState("login");
  const [f, setF] = useState({ name: "", email: "", password: "" });
  const [busy, setBusy] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const run = async (fn) => {
    setBusy(true);
    try {
      await fn();
    } catch (e) {
      toast.error(errMsg(e));
    } finally {
      setBusy(false);
    }
  };
  const submit = (e) => {
    e.preventDefault();
    run(() => (mode === "login" ? login(f.email, f.password) : register(f)));
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-[1.2fr_1fr] bg-ink">
      <section className="relative hidden lg:flex flex-col justify-between p-12 border-r border-line grid-bg noise overflow-hidden">
        <Logo />
        <div className="rise">
          <Overline className="text-volt mb-5">Campus waste intelligence / circular economy OS</Overline>
          <h1 className="text-5xl xl:text-6xl font-bold tracking-tight leading-[0.95] max-w-xl">
            Every bin is a sensor.<br />Every scrap is an asset.
          </h1>
          <div className="mt-10"><LoopArt /></div>
        </div>
        <div className="grid grid-cols-3 border border-line bg-ink/80 font-mono">
          {[["10", "Landmark zones"], ["63", "IoT bin nodes"], ["3", "AI waste classes"]].map(([v, l]) => (
            <div key={l} className="p-5 border-r border-line last:border-r-0">
              <div className="text-3xl text-txt">{v}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-mute mt-1">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md rise" style={{ animationDelay: "120ms" }}>
          <div className="lg:hidden mb-10"><Logo /></div>
          <Overline className="mb-3">{mode === "login" ? "Access terminal" : "New student node"}</Overline>
          <h2 className="text-3xl font-bold tracking-tight mb-8">{mode === "login" ? "Sign in to CampusLoop" : "Create your eco-wallet"}</h2>

          <button
            onClick={() => run(demo)}
            disabled={busy}
            data-testid="demo-student-login-button"
            className="w-full flex items-center justify-between bg-volt text-ink font-bold px-5 py-4 hover:bg-[#CCFF00] transition-colors duration-200 disabled:opacity-60"
          >
            <span className="flex items-center gap-3"><Sparkles size={16} /> Try instant demo as a student</span>
            <ArrowRight size={18} />
          </button>
          <div className="flex items-center gap-4 my-8 font-mono text-[10px] tracking-[0.3em] text-mute">
            <span className="flex-1 h-px bg-line" /> OR WITH ACCOUNT <span className="flex-1 h-px bg-line" />
          </div>

          <form onSubmit={submit} className="space-y-5" data-testid="auth-form">
            {mode === "register" && <Field label="Full name" value={f.name} onChange={set("name")} required data-testid="register-name-input" />}
            <Field label="Email" type="email" value={f.email} onChange={set("email")} required data-testid="auth-email-input" />
            <Field label="Password" type="password" value={f.password} onChange={set("password")} required minLength={6} data-testid="auth-password-input" />
            <button type="submit" disabled={busy} data-testid="auth-submit-button" className="w-full border border-line py-4 font-semibold hover:bg-raised hover:border-volt/50 transition-colors duration-200 disabled:opacity-60">
              {busy ? "Authenticating…" : mode === "login" ? "Sign in" : "Create account"}
            </button>
          </form>
          <button
            onClick={() => setMode(mode === "login" ? "register" : "login")}
            data-testid="auth-mode-toggle"
            className="mt-6 text-sm text-mute hover:text-volt transition-colors duration-200"
          >
            {mode === "login" ? "New student? Create an account →" : "Already registered? Sign in →"}
          </button>
          <p className="mt-10 text-xs text-mute leading-relaxed">Operations admins sign in with their issued campus credentials.</p>
        </div>
      </section>
    </div>
  );
}
