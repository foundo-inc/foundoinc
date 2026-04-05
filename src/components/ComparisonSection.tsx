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
  if (status === "yes") return <CheckCircle className="h-5 w-5 text-primary" />;
  if (status === "no") return <XCircle className="h-5 w-5 text-destructive/50" />;
  return <MinusCircle className="h-5 w-5 text-muted-foreground/40" />;
};

const ComparisonSection = () => (
  <section className="py-28 md:py-36 section-alt relative overflow-hidden">
    <div className="absolute inset-0 bg-dot-pattern" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6 glow-blue-subtle">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">Comparison</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          Foundo vs <span className="text-gradient">Alternatives</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          See why international founders choose Foundo over DIY or expensive lawyers.
        </p>
      </div>

      <div className="max-w-4xl mx-auto rounded-2xl bg-card overflow-hidden shadow-lg shadow-primary/5 gradient-border">
        {/* Header */}
        <div className="grid grid-cols-4 gap-0 border-b border-border bg-muted/30">
          <div className="p-5 font-semibold text-sm text-muted-foreground">Feature</div>
          <div className="p-5 text-center bg-primary/5 border-x border-primary/10">
            <span className="font-extrabold text-primary font-display text-lg">Foundo</span>
          </div>
          <div className="p-5 text-center font-semibold text-sm text-muted-foreground">DIY</div>
          <div className="p-5 text-center font-semibold text-sm text-muted-foreground">Law Firm</div>
        </div>

        {/* Rows */}
        {features.map((f, i) => (
          <div key={i} className={`grid grid-cols-4 gap-0 group hover:bg-muted/20 transition-colors ${i < features.length - 1 ? "border-b border-border" : ""}`}>
            <div className="p-5 flex items-center text-sm font-medium text-foreground">{f.feature}</div>
            <div className="p-5 flex items-center justify-center bg-primary/5 border-x border-primary/10">
              <StatusIcon status={f.foundo} />
            </div>
            <div className="p-5 flex items-center justify-center">
              <StatusIcon status={f.diy} />
            </div>
            <div className="p-5 flex items-center justify-center">
              <StatusIcon status={f.lawyer} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ComparisonSection;
