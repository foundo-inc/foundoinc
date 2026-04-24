import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { filings } from "@/lib/dashboard-data";
import { CheckCircle2, Clock, AlertCircle, Calendar } from "lucide-react";

const meta = {
  completed: { label: "Completed", color: "bg-success/10 text-success border-success/20", icon: CheckCircle2 },
  in_progress: { label: "In progress", color: "bg-primary/10 text-primary border-primary/20", icon: Clock },
  upcoming: { label: "Upcoming", color: "bg-muted text-muted-foreground border-border", icon: Calendar },
  overdue: { label: "Overdue", color: "bg-destructive/10 text-destructive border-destructive/20", icon: AlertCircle },
} as const;

const Compliance = () => {
  const completed = filings.filter((f) => f.status === "completed").length;
  const pct = Math.round((completed / filings.length) * 100);

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tighter text-foreground">Compliance & Filings</h2>
        <p className="text-muted-foreground mt-1">Stay on top of every annual report, BOI and tax deadline.</p>
      </div>

      {/* Health bar */}
      <div className="rounded-2xl border border-border bg-card p-6 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-sm text-muted-foreground font-medium">Compliance health</p>
            <p className="text-2xl font-extrabold text-foreground">{pct}%</p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-success/10 text-success text-xs font-semibold border border-success/20">
            <CheckCircle2 className="h-3.5 w-3.5" /> {completed} of {filings.length} completed
          </span>
        </div>
        <div className="h-2.5 w-full rounded-full bg-muted overflow-hidden">
          <div className="h-full hero-gradient transition-all duration-700" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {/* Timeline */}
      <div className="rounded-2xl border border-border bg-card overflow-hidden">
        <div className="p-5 border-b border-border">
          <h3 className="text-lg font-bold text-foreground">Filing timeline</h3>
        </div>
        <div className="divide-y divide-border">
          {filings.map((f) => {
            const m = meta[f.status];
            const Icon = m.icon;
            return (
              <div key={f.name} className="p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className={`h-11 w-11 rounded-xl flex items-center justify-center flex-shrink-0 ${m.color.split(" ").slice(0, 2).join(" ")}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground">{f.name}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{f.description}</p>
                </div>
                <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold border ${m.color}`}>{m.label}</span>
                  <span className="text-xs text-muted-foreground font-medium">Due {f.due}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Compliance;
