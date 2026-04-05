import { CheckCircle, XCircle, MinusCircle } from "lucide-react";

type Status = "yes" | "no" | "partial";

const features: { feature: string; foundo: Status; diy: Status; lawyer: Status }[] = [
  { feature: "LLC Formation", foundo: "yes", diy: "yes", lawyer: "yes" },
  { feature: "EIN Registration", foundo: "yes", diy: "partial", lawyer: "yes" },
  { feature: "Registered Agent", foundo: "yes", diy: "no", lawyer: "yes" },
  { feature: "U.S. Bank Account Setup", foundo: "yes", diy: "no", lawyer: "no" },
  { feature: "Payment Gateway Activation", foundo: "yes", diy: "no", lawyer: "no" },
  { feature: "Ongoing Compliance", foundo: "yes", diy: "no", lawyer: "partial" },
  { feature: "Dedicated Support", foundo: "yes", diy: "no", lawyer: "partial" },
  { feature: "Transparent Flat Pricing", foundo: "yes", diy: "yes", lawyer: "no" },
];

const StatusIcon = ({ status }: { status: Status }) => {
  if (status === "yes") return <CheckCircle className="h-4 w-4 text-primary" />;
  if (status === "no") return <XCircle className="h-4 w-4 text-destructive/40" />;
  return <MinusCircle className="h-4 w-4 text-muted-foreground/30" />;
};

const ComparisonSection = () => (
  <section className="py-20 md:py-28 bg-muted/30 relative">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-xl mx-auto mb-14">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Comparison</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 font-display">
          Foundo vs <span className="text-gradient">Alternatives</span>
        </h2>
        <p className="text-muted-foreground text-sm">Why international founders choose Foundo.</p>
      </div>

      <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
        <div className="grid grid-cols-4 gap-0 border-b border-border bg-muted/40">
          <div className="p-4 font-medium text-xs text-muted-foreground">Feature</div>
          <div className="p-4 text-center bg-primary/[0.06] border-x border-primary/10">
            <span className="font-extrabold text-primary font-display text-sm">Foundo</span>
          </div>
          <div className="p-4 text-center font-medium text-xs text-muted-foreground">DIY</div>
          <div className="p-4 text-center font-medium text-xs text-muted-foreground">Law Firm</div>
        </div>

        {features.map((f, i) => (
          <div key={i} className={`grid grid-cols-4 gap-0 hover:bg-muted/20 transition-colors ${i < features.length - 1 ? "border-b border-border" : ""}`}>
            <div className="p-4 flex items-center text-xs font-medium text-foreground">{f.feature}</div>
            <div className="p-4 flex items-center justify-center bg-primary/[0.04] border-x border-primary/10">
              <StatusIcon status={f.foundo} />
            </div>
            <div className="p-4 flex items-center justify-center">
              <StatusIcon status={f.diy} />
            </div>
            <div className="p-4 flex items-center justify-center">
              <StatusIcon status={f.lawyer} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ComparisonSection;
