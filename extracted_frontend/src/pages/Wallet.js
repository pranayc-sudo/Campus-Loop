import { useState } from "react";
import { Link } from "react-router-dom";
import { ScanLine, Flag, Ticket, Trophy } from "lucide-react";
import { toast } from "sonner";
import { api, errMsg } from "@/lib/api";
import { useAuth } from "@/context/Auth";
import { useLive, Panel, Overline, PageHead, Initials, C, fmt } from "@/components/kit";

function Balance({ w }) {
  const next = w.tier === "Seedling" ? 200 : w.tier === "Sapling" ? 600 : null;
  return (
    <Panel className="p-6 sm:p-10 relative overflow-hidden grid-bg lg:col-span-2" data-testid="wallet-balance-panel">
      <Overline>Eco-credits balance</Overline>
      <div className="font-mono text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tighter text-volt mt-4 tabular-nums" data-testid="wallet-balance">{fmt(w.credits)}</div>
      <div className="flex flex-wrap gap-8 mt-8 font-mono text-sm">
        <div><Overline>Tier</Overline><div className="mt-2 text-txt" data-testid="wallet-tier">{w.tier}</div></div>
        <div><Overline>Campus rank</Overline><div className="mt-2 text-txt" data-testid="wallet-rank">#{w.rank}</div></div>
        {next && <div><Overline>Next tier at</Overline><div className="mt-2 text-txt">{next} earned</div></div>}
      </div>
    </Panel>
  );
}

function Earn() {
  return (
    <Panel className="flex flex-col" data-testid="earn-panel">
      <div className="p-5 border-b border-line"><Overline>Earn credits</Overline></div>
      {[["/scanner", ScanLine, "Sort an item with AI", "+10 / scan, +5 if intercepted", "earn-scan-link"],
        ["/twin", Flag, "Report an overflowing bin", "+15 once an admin verifies it", "earn-report-link"]].map(([to, Icon, t, d, id]) => (
        <Link key={to} to={to} data-testid={id} className="flex items-center gap-4 p-5 border-b border-line last:border-b-0 hover:bg-raised transition-colors duration-200 flex-1">
          <div className="w-10 h-10 border border-volt/50 text-volt flex items-center justify-center"><Icon size={18} /></div>
          <div><div className="font-semibold text-sm">{t}</div><div className="text-xs text-mute font-mono mt-1">{d}</div></div>
        </Link>
      ))}
    </Panel>
  );
}

function Rewards({ rewards, credits, onRedeem, busy }) {
  return (
    <Panel className="lg:col-span-2" data-testid="rewards-panel">
      <div className="p-5 border-b border-line"><Overline>Canteen & campus rewards</Overline></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
        {rewards.map((r) => {
          const ok = credits >= r.cost;
          return (
            <div key={r.id} className="bg-surface p-5 flex flex-col justify-between gap-5" data-testid={`reward-${r.id}`}>
              <div><div className="font-mono text-[10px] text-mute tracking-widest">{r.tag.toUpperCase()} / {r.venue.toUpperCase()}</div>
                <div className="font-semibold mt-2">{r.title}</div></div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-volt">{r.cost} cr</span>
                <button onClick={() => onRedeem(r)} disabled={!ok || busy} data-testid={`redeem-${r.id}`}
                  className={`px-4 py-2 text-xs font-bold transition-colors duration-200 ${ok ? "bg-volt text-ink hover:bg-[#CCFF00]" : "border border-line text-mute cursor-not-allowed"}`}>
                  {ok ? "Redeem" : `Need ${r.cost - credits}`}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}

function Leaderboard({ rows, me }) {
  return (
    <Panel data-testid="leaderboard">
      <div className="p-5 border-b border-line flex items-center gap-2"><Trophy size={14} className="text-volt" /><Overline>Leaderboard</Overline></div>
      {rows.map((r, i) => (
        <div key={r.id} className={`flex items-center gap-4 px-5 py-3 border-b border-line last:border-b-0 ${r.id === me ? "bg-raised" : ""}`} data-testid={`leaderboard-row-${i + 1}`}>
          <span className="font-mono text-xs w-5" style={{ color: i < 3 ? C.volt : C.mute }}>{String(i + 1).padStart(2, "0")}</span>
          <Initials name={r.name} size={32} accent={i === 0 ? C.volt : undefined} />
          <div className="flex-1 min-w-0"><div className="text-sm font-semibold truncate">{r.name}{r.id === me && <span className="text-volt"> (you)</span>}</div>
            <div className="text-xs text-mute">{r.hostel}</div></div>
          <span className="font-mono text-sm tabular-nums">{fmt(r.credits)}</span>
        </div>
      ))}
    </Panel>
  );
}

function Activity({ txns, coupons }) {
  return (
    <Panel className="lg:col-span-2" data-testid="wallet-activity">
      <div className="p-5 border-b border-line"><Overline>Coupons & activity</Overline></div>
      {coupons.map((c) => (
        <div key={c.id} className="flex items-center justify-between px-5 py-3 border-b border-line" data-testid={`coupon-${c.code}`}>
          <span className="flex items-center gap-3 text-sm"><Ticket size={15} className="text-volt" />{c.title} <span className="text-mute">Â· {c.venue}</span></span>
          <span className="font-mono text-sm border border-dashed border-volt text-volt px-2 py-0.5">{c.code}</span>
        </div>
      ))}
      {txns.map((t) => (
        <div key={t.id} className="flex items-center justify-between px-5 py-3 border-b border-line last:border-b-0 text-sm">
          <span className="text-mute truncate">{t.label}</span>
          <span className="font-mono" style={{ color: t.amount > 0 ? C.org : C.non }}>{t.amount > 0 ? "+" : ""}{t.amount}</span>
        </div>
      ))}
    </Panel>
  );
}

export default function Wallet() {
  const { user } = useAuth();
  const { data: w, setData } = useLive("/wallet", 0);
  const { data: board, setData: setBoard } = useLive("/leaderboard", 0);
  const [busy, setBusy] = useState(false);

  const redeem = async (r) => {
    setBusy(true);
    try {
      const { data: c } = await api.post(`/rewards/${r.id}/redeem`);
      const [nw, nb] = await Promise.all([api.get("/wallet"), api.get("/leaderboard")]);
      setData(nw.data);
      setBoard(nb.data);
      toast.success(`Coupon ${c.code} ready at ${c.venue}`);
    } catch (e) {
      toast.error(errMsg(e));
    } finally {
      setBusy(false);
    }
  };

  if (!w || !board) return <div className="font-mono text-xs text-mute">Loading walletâ€¦</div>;
  return (
    <div data-testid="wallet-page">
      <PageHead kicker="06 / Student gamification" title="Sort right. Eat better." sub="Students earn eco-credits for correct sorting and verified overflow reports, then redeem them at campus canteens." />
      {user.role === "admin" && <p className="text-xs text-mute mb-4 font-mono">ADMIN VIEW: wallet balance applies to student accounts only.</p>}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Balance w={w} />
        <Earn />
        <Rewards rewards={w.rewards} credits={w.credits} onRedeem={redeem} busy={busy} />
        <Leaderboard rows={board} me={user.id} />
        <Activity txns={w.transactions} coupons={w.coupons} />
      </div>
    </div>
  );
}
