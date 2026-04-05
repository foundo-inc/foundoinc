import { CheckCircle, XCircle, MinusCircle } from "lucide-react";

type Status = "yes" | "no" | "partial";

const features: { feature: string; foundo: Status; diy: Status; lawyer: Status }[] = [
  { feature: "LLC Formation", foundo: "yes", diy: "yes", lawyer: "yes" },
  { feature: "EIN Registration", foundo: "yes", diy: "partial", lawyer: "yes" },
  { feature: "Registered Agent", foundo: "yes", diy: "no", lawyer: "yes" },
  { feature: "U.S. Bank Account", foundo: "yes", diy: "no", lawyer: "no" },
  { feature: "Payment Gateway", foundo: "yes", diy: "no", lawyer: "no" },
  { feature: "Ongoing Compliance", foundo: "yes", diy: "no", lawyer: "partial" },
  { feature: "Dedicated Support", foundo: "yes", diy: "no", lawyer: "partial" },
  { feature: "Flat Pricing", foundo: "yes", diy: "yes", lawyer: "no" },
];

const StatusIcon = ({ status }: { status: Status }) => {
  if (status === "yes") return <CheckCircle className="h-5 w-5 text-primary" />;
  if (status === "no") return <XCircle className="h-5 w-5 text-destructive/40" />;
  return <MinusCircle className="h-5 w-5 text-muted-foreground/30" />;
};

const ComparisonSection = () => (
  <section className="py-20 md:py-28 lg:py-32 bg-muted/30 relative">
    <div className="container mx-auto px-5 md:px-4">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3 md:mb-4">Comparison</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-5 font-display leading-tight">
          Foundo vs <span className="text-gradient">Alternatives</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">Why international founders choose Foundo.</p>
      </div>

      <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card overflow-hidden shadow-sm overflow-x-auto">
        <div className="min-w-[420px]">
          <div className="grid grid-cols-4 gap-0 border-b border-border bg-muted/40">
            <div className="p-4 md:p-5 font-medium text-sm md:text-base text-muted-foreground">Feature</div>
            <div className="p-4 md:p-5 text-center bg-primary/[0.06] border-x border-primary/10">
              <span className="font-extrabold text-primary font-display text-base md:text-lg">Foundo</span>
            </div>
            <div className="p-4 md:p-5 text-center font-medium text-sm md:text-base text-muted-foreground">DIY</div>
            <div className="p-4 md:p-5 text-center font-medium text-sm md:text-base text-muted-foreground">Law Firm</div>
          </div>

          {features.map((f, i) => (
            <div key={i} className={`grid grid-cols-4 gap-0 hover:bg-muted/20 transition-colors ${i < features.length - 1 ? "border-b border-border" : ""}`}>
              <div className="p-4 md:p-5 flex items-center text-sm md:text-base font-medium text-foreground">{f.feature}</div>
              <div className="p-4 md:p-5 flex items-center justify-center bg-primary/[0.04] border-x border-primary/10">
                <StatusIcon status={f.foundo} />
              </div>
              <div className="p-4 md:p-5 flex items-center justify-center">
                <StatusIcon status={f.diy} />
              </div>
              <div className="p-4 md:p-5 flex items-center justify-center">
                <StatusIcon status={f.lawyer} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ComparisonSection;
