import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { company, filings } from "@/lib/dashboard-data";
import { Building2, Hash, Calendar, CheckCircle2, FileText, Shield, Clock, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const statusBadge = {
  completed: { label: "Completed", class: "bg-success/10 text-success border-success/20" },
  in_progress: { label: "In progress", class: "bg-primary/10 text-primary border-primary/20" },
  upcoming: { label: "Upcoming", class: "bg-muted text-muted-foreground border-border" },
  overdue: { label: "Overdue", class: "bg-destructive/10 text-destructive border-destructive/20" },
} as const;

const DashboardOverview = () => {
  const { user } = useAuth();
  const next = filings.find((f) => f.status === "in_progress" || f.status === "upcoming");

  const stats = [
    { icon: CheckCircle2, label: "Company status", value: company.status, hint: company.state },
    { icon: Hash, label: "EIN", value: company.ein, hint: "IRS confirmed" },
    { icon: Calendar, label: "Formation date", value: company.formationDate, hint: `${company.members} member` },
    { icon: Shield, label: "Compliance health", value: "94%", hint: "All on track" },
  ];

  return (
    <DashboardLayout>
      {/* Welcome */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-primary/[0.06] border border-primary/10 rounded-full px-3 py-1.5 mb-3">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span className="text-primary text-xs font-semibold tracking-wide">Welcome back</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tighter text-foreground capitalize">
          Hi {user?.name}, your company is in great shape.
        </h2>
        <p className="text-muted-foreground mt-1">Here's a snapshot of {company.name}.</p>
      </div>

      {/* Stat cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card p-5 card-hover-glow transition-all">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
              <s.icon className="h-5 w-5 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{s.label}</p>
            <p className="text-xl font-bold text-foreground mt-1 truncate">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{s.hint}</p>
          </div>
        ))}
      </div>

      {/* Two column */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Company details */}
        <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">{company.name}</h3>
                <p className="text-xs text-muted-foreground">Incorporated in {company.state}</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/10 text-success text-xs font-semibold border border-success/20">
              <span className="h-1.5 w-1.5 rounded-full bg-success" /> Active
            </span>
          </div>

          <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
            {[
              ["State of formation", company.state],
              ["EIN", company.ein],
              ["Formation date", company.formationDate],
              ["Fiscal year end", company.fiscalYearEnd],
              ["Registered agent", company.registeredAgent],
              ["Members", `${company.members} (single-member LLC)`],
            ].map(([k, v]) => (
              <div key={k} className="border-b border-border pb-3">
                <dt className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{k}</dt>
                <dd className="text-sm font-semibold text-foreground mt-1">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Next filing */}
        <div className="rounded-2xl border border-primary/15 bg-primary/[0.04] p-6">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Next up</span>
          </div>
          {next ? (
            <>
              <h3 className="text-lg font-bold text-foreground mb-1">{next.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{next.description}</p>
              <div className="flex items-center justify-between mb-5 text-sm">
                <span className="text-muted-foreground">Due</span>
                <span className="font-bold text-foreground">{next.due}</span>
              </div>
              <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold border ${statusBadge[next.status].class}`}>
                {statusBadge[next.status].label}
              </span>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">All filings up to date 🎉</p>
          )}
          <Button asChild variant="outline" className="w-full mt-6 rounded-xl">
            <Link to="/dashboard/compliance">
              View compliance <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Quick links */}
      <div className="grid gap-4 sm:grid-cols-2 mt-6">
        <Link to="/dashboard/documents" className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4 card-hover-glow transition-all group">
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:hero-gradient transition-all">
            <FileText className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
          </div>
          <div className="flex-1">
            <p className="font-bold text-foreground">Your documents</p>
            <p className="text-sm text-muted-foreground">Articles, EIN, agreements & more</p>
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </Link>
        <Link to="/dashboard/banking" className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4 card-hover-glow transition-all group">
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:hero-gradient transition-all">
            <Building2 className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
          </div>
          <div className="flex-1">
            <p className="font-bold text-foreground">Banking & support</p>
            <p className="text-sm text-muted-foreground">Mercury, Stripe, Airwallex status</p>
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </Link>
      </div>
    </DashboardLayout>
  );
};

export default DashboardOverview;
