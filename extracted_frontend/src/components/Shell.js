import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Activity, ScanLine, Map, Recycle, Calculator, Wallet, Palette, LogOut, Menu, X, Flag } from "lucide-react";
import { useAuth } from "@/context/Auth";
import { Dot, C } from "@/components/kit";

const NAV = [
  { to: "/", label: "Command Center", icon: Activity, id: "overview" },
  { to: "/scanner", label: "AI Smart Scanner", icon: ScanLine, id: "scanner" },
  { to: "/twin", label: "Digital Twin & Routes", icon: Map, id: "twin" },
  { to: "/exchange", label: "Circular Exchange", icon: Recycle, id: "exchange" },
  { to: "/roi", label: "ROI & Scaling", icon: Calculator, id: "roi" },
  { to: "/wallet", label: "Eco-Credits", icon: Wallet, id: "wallet" },
  { to: "/reports", label: "Overflow Reports", icon: Flag, id: "reports" },
  { to: "/brand", label: "Design System", icon: Palette, id: "brand" },
];

export const Logo = ({ className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden>
      <rect x="1" y="1" width="30" height="30" fill="none" stroke={C.line} />
      <path d="M8 16a8 8 0 1 1 8 8" fill="none" stroke={C.volt} strokeWidth="3" />
      <rect x="6" y="20" width="6" height="6" fill={C.volt} />
    </svg>
    <span className="font-display font-bold text-xl tracking-tight">
      Campus<span className="text-volt">Loop</span>
    </span>
  </div>
);

function useClock() {
  const [t, setT] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return t.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata", hour12: false });
}

function Nav({ onNavigate }) {
  return (
    <nav className="flex flex-col py-4" data-testid="sidebar-nav">
      {NAV.map(({ to, label, icon: Icon, id }, i) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          onClick={onNavigate}
          data-testid={`nav-${id}`}
          className={({ isActive }) =>
            `group flex items-center gap-3 px-6 py-3 text-sm border-l-2 transition-colors duration-200 ${
              isActive ? "border-volt bg-raised text-txt" : "border-transparent text-mute hover:text-txt hover:bg-raised/60"
            }`
          }
        >
          <span className="font-mono text-[10px] text-mute/60 w-5">{String(i + 1).padStart(2, "0")}</span>
          <Icon size={16} strokeWidth={1.75} />
          <span className="font-medium">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

function UserBlock() {
  const { user, logout } = useAuth();
  return (
    <div className="border-t border-line p-5 flex items-center justify-between gap-3">
      <div className="min-w-0">
        <div className="text-sm font-semibold truncate" data-testid="sidebar-user-name">{user.name}</div>
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-volt" data-testid="sidebar-user-role">{user.role}</div>
      </div>
      <button onClick={logout} data-testid="logout-button" className="p-2 border border-line text-mute hover:text-non hover:border-non transition-colors duration-200" aria-label="Log out">
        <LogOut size={15} />
      </button>
    </div>
  );
}

export default function Shell() {
  const [open, setOpen] = useState(false);
  const clock = useClock();
  const loc = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  return (
    <div className="min-h-screen flex bg-ink">
      <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-line bg-ink sticky top-0 h-screen">
        <div className="h-16 flex items-center px-6 border-b border-line"><Logo /></div>
        <div className="flex-1 overflow-y-auto"><Nav /></div>
        <UserBlock />
      </aside>
      {open && (
        <div className="lg:hidden fixed inset-0 z-50 bg-ink/95 backdrop-blur-xl flex flex-col" data-testid="mobile-nav">
          <div className="h-16 flex items-center justify-between px-6 border-b border-line">
            <Logo />
            <button onClick={() => setOpen(false)} data-testid="mobile-nav-close" className="p-2 border border-line"><X size={16} /></button>
          </div>
          <div className="flex-1"><Nav onNavigate={() => setOpen(false)} /></div>
          <UserBlock />
        </div>
      )}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="h-16 sticky top-0 z-40 bg-ink/90 backdrop-blur-xl border-b border-line flex items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 border border-line" onClick={() => setOpen(true)} data-testid="mobile-nav-open"><Menu size={16} /></button>
            <div className="lg:hidden"><Logo /></div>
            <div className="hidden lg:flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
              <Dot color={C.org} pulse /> <span className="text-txt">Live</span>
              <span className="text-line">/</span> 63 nodes streaming <span className="text-line">/</span> 10 zones
            </div>
          </div>
          <div className="flex items-center gap-4 font-mono text-xs">
            <span className="hidden sm:inline text-mute">IST</span>
            <span className="text-volt tabular-nums" data-testid="header-clock">{clock}</span>
          </div>
        </header>
        <main className="flex-1 px-4 sm:px-8 lg:px-10 py-8 lg:py-10 max-w-[1600px] w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
