import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";
import { toast } from "sonner";
import { api, errMsg } from "@/lib/api";
import { useAuth } from "@/context/Auth";
import { useLive, Panel, Overline, PageHead, Bar, C, fillColor } from "@/components/kit";

const STATUS = { pending: C.amber, approved: C.org, rejected: C.non };
const TABS = ["pending", "approved", "rejected"];
const when = (s) => new Date(s).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });

const Badge = ({ status }) => (
  <span className="font-mono text-[10px] uppercase tracking-widest border px-2 py-1 justify-self-start w-fit" style={{ borderColor: STATUS[status], color: STATUS[status] }} data-testid="report-status-badge">
    {status}
  </span>
);

const FillCell = ({ label, value }) => (
  <div className="w-32">
    <div className="flex justify-between font-mono text-[10px] text-mute mb-1.5"><span>{label}</span><span className="text-txt">{value == null ? "â€”" : `${value}%`}</span></div>
    <Bar value={value || 0} color={fillColor(value || 0)} />
  </div>
);

function ReviewRow({ r, onReview, busy }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_280px_110px_230px] gap-4 lg:items-center p-5 border-b border-line last:border-b-0 hover:bg-raised transition-colors duration-200" data-testid={`report-row-${r.id}`}>
      <div className="min-w-0">
        <div className="font-semibold">{r.zone}</div>
        <div className="text-xs text-mute mt-1">by {r.user_name || "Legacy report"} Â· {when(r.created_at)}</div>
        {r.note && <div className="text-sm text-mute mt-2 truncate">â€œ{r.note}â€</div>}
      </div>
      <div className="flex gap-4">
        <FillCell label="AT REPORT" value={r.fill_at_report} />
        <FillCell label="NOW" value={r.fill_now} />
      </div>
      <Badge status={r.status} />
      {r.status === "pending" ? (
        <div className="flex gap-2">
          <button disabled={busy} onClick={() => onReview(r, "approve")} data-testid={`approve-report-${r.id}`}
            className="flex items-center gap-1.5 bg-volt text-ink font-bold px-4 py-2 text-xs hover:bg-[#CCFF00] transition-colors duration-200 disabled:opacity-60">
            <Check size={14} /> Approve +{r.reward}
          </button>
          <button disabled={busy} onClick={() => onReview(r, "reject")} data-testid={`reject-report-${r.id}`}
            className="flex items-center gap-1.5 border border-line px-4 py-2 text-xs hover:border-non hover:text-non transition-colors duration-200 disabled:opacity-60">
            <X size={14} /> Reject
          </button>
        </div>
      ) : (
        <div className="font-mono text-[11px] text-mute">{r.reviewed_by ? `by ${r.reviewed_by}` : "legacy"}</div>
      )}
    </div>
  );
}

function AdminQueue() {
  const [tab, setTab] = useState("pending");
  const [busy, setBusy] = useState(false);
  const { data, setData } = useLive(`/reports?status=${tab}`, 10000);
  const review = async (r, decision) => {
    setBusy(true);
    try {
      await api.post(`/reports/${r.id}/review`, { decision });
      setData((d) => (d || []).filter((x) => x.id !== r.id));
      toast.success(decision === "approve" ? `Approved. ${r.reward} credits sent to ${r.user_name || "student"}` : "Report rejected");
    } catch (e) {
      toast.error(errMsg(e));
    } finally {
      setBusy(false);
    }
  };
  return (
    <Panel data-testid="admin-report-queue">
      <div className="flex border-b border-line" data-testid="report-tabs">
        {TABS.map((t) => (
          <button key={t} onClick={() => setTab(t)} data-testid={`report-tab-${t}`}
            className={`px-5 py-3 text-sm capitalize border-b-2 transition-colors duration-200 ${tab === t ? "border-volt text-txt" : "border-transparent text-mute hover:text-txt"}`}>{t}</button>
        ))}
      </div>
      {!data && <div className="p-5 font-mono text-xs text-mute">Loading queueâ€¦</div>}
      {data && data.length === 0 && <div className="p-8 text-sm text-mute" data-testid="report-queue-empty">No {tab} reports.</div>}
      {data?.map((r) => <ReviewRow key={r.id} r={r} onReview={review} busy={busy} />)}
    </Panel>
  );
}

function MyReports() {
  const { data } = useLive("/reports/mine", 10000);
  return (
    <Panel data-testid="my-reports">
      <div className="p-5 border-b border-line flex items-center justify-between">
        <Overline>Your reports</Overline>
        <Link to="/twin" className="text-sm text-volt hover:underline" data-testid="new-report-link">Report a bin â†’</Link>
      </div>
      {data && data.length === 0 && <div className="p-8 text-sm text-mute">No reports yet. Spot an overflowing bin on the Digital Twin and flag it.</div>}
      {data?.map((r) => (
        <div key={r.id} className="flex flex-wrap items-center justify-between gap-3 p-5 border-b border-line last:border-b-0" data-testid={`my-report-${r.id}`}>
          <div><div className="font-semibold">{r.zone}</div><div className="text-xs text-mute mt-1">{when(r.created_at)}{r.review_reason ? ` Â· ${r.review_reason}` : ""}</div></div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm" style={{ color: r.status === "approved" ? C.org : C.mute }}>{r.status === "approved" ? `+${r.reward}` : r.status === "pending" ? `+${r.reward} pending` : "0"}</span>
            <Badge status={r.status} />
          </div>
        </div>
      ))}
    </Panel>
  );
}

export default function Reports() {
  const { user } = useAuth();
  const admin = user.role === "admin";
  return (
    <div data-testid="reports-page">
      <PageHead kicker="07 / Overflow reports" title={admin ? "Verify before you reward." : "Your bin reports."}
        sub={admin ? "Compare the fill level at report time with live sensor data, then approve to release eco-credits or reject." : "Credits are released after a campus admin verifies your report against live sensor data."} />
      {admin ? <AdminQueue /> : <MyReports />}
    </div>
  );
}
