import { CheckCircle, XCircle, MinusCircle } from "lucide-react";

type Status = "yes" | "no" | "partial";

const features: { feature: string; foundo: Status; stripe: Status; firstbase: Status }[] = [
  { feature: "LLC Formation", foundo: "yes", stripe: "yes", firstbase: "yes" },
  { feature: "EIN Registration", foundo: "yes", stripe: "yes", firstbase: "yes" },
  { feature: "Registered Agent", foundo: "yes", stripe: "partial", firstbase: "yes" },
  { feature: "U.S. Bank Account", foundo: "yes", stripe: "yes", firstbase: "partial" },
  { feature: "Payment Gateway", foundo: "yes", stripe: "yes", firstbase: "no" },
  { feature: "Ongoing Compliance", foundo: "yes", stripe: "no", firstbase: "partial" },
  { feature: "Dedicated Support", foundo: "yes", stripe: "no", firstbase: "partial" },
  { feature: "Flat Pricing", foundo: "yes", stripe: "no", firstbase: "no" },
];

const StatusIcon = ({ status }: { status: Status }) => {
  if (status === "yes") return <CheckCircle className="h-5 w-5 text-primary" />;
  if (status === "no") return <XCircle className="h-5 w-5 text-destructive/40" />;
  return <MinusCircle className="h-5 w-5 text-muted-foreground/30" />;
};

const ComparisonSection = () => (
  <section className="py-20 md:py-28 lg:py-32 bg-muted/30 relative">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3 md:mb-4">Comparison</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-5 font-display leading-tight">
          Foundo vs <span className="text-gradient">Alternatives</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">Why international founders choose Foundo.</p>
      </div>

      <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
        {/* Header */}
        <div className="grid grid-cols-4 border-b border-border bg-muted/40">
          <div className="p-3 md:p-5 font-medium text-sm md:text-base text-muted-foreground">Feature</div>
          <div className="p-3 md:p-5 text-center bg-primary/[0.06] border-x border-primary/10">
            <span className="font-extrabold text-primary font-display text-sm md:text-lg">Foundo</span>
          </div>
          <div className="p-3 md:p-5 text-center font-medium text-xs md:text-base text-muted-foreground">
            <span className="hidden sm:inline">Stripe Atlas</span>
            <span className="sm:hidden">Stripe</span>
          </div>
          <div className="p-3 md:p-5 text-center font-medium text-xs md:text-base text-muted-foreground">
            <span className="hidden sm:inline">Firstbase</span>
            <span className="sm:hidden">1stbase</span>
          </div>
        </div>

        {/* Rows */}
        {features.map((f, i) => (
          <div key={i} className={`grid grid-cols-4 hover:bg-muted/20 transition-colors ${i < features.length - 1 ? "border-b border-border" : ""}`}>
            <div className="p-3 md:p-5 flex items-center text-xs sm:text-sm md:text-base font-medium text-foreground leading-tight">{f.feature}</div>
            <div className="p-3 md:p-5 flex items-center justify-center bg-primary/[0.04] border-x border-primary/10">
              <StatusIcon status={f.foundo} />
            </div>
            <div className="p-3 md:p-5 flex items-center justify-center">
              <StatusIcon status={f.stripe} />
            </div>
            <div className="p-3 md:p-5 flex items-center justify-center">
              <StatusIcon status={f.firstbase} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ComparisonSection;
