import { CheckCircle, XCircle, MinusCircle } from "lucide-react";

type Status = "included" | "not-included" | "custom";

const features: { feature: string; foundo: string; stripe: string; firstbase: string }[] = [
  { feature: "LLC Formation", foundo: "Included", stripe: "Included", firstbase: "Included" },
  { feature: "Registered Agent", foundo: "Included", stripe: "Included", firstbase: "$149/year extra" },
  { feature: "US Address", foundo: "Included", stripe: "Included", firstbase: "$315/year extra" },
  { feature: "EIN Application", foundo: "Included", stripe: "Included", firstbase: "Included" },
  { feature: "U.S. Bank Account", foundo: "Included", stripe: "Included", firstbase: "Included" },
  { feature: "State Options", foundo: "All 50 states", stripe: "Delaware only", firstbase: "All 50 states" },
  { feature: "ITIN Assistance", foundo: "Included", stripe: "Not included", firstbase: "Included" },
  { feature: "Pricing", foundo: "$249 + State Fees", stripe: "$500 One-time", firstbase: "$399 + State Fees" },
];

const CellValue = ({ value, isFoundo = false }: { value: string; isFoundo?: boolean }) => {
  if (value === "Included") {
    return (
      <span className="flex items-center justify-center gap-1.5">
        <CheckCircle className="h-5 w-5 text-primary" />
        <span className="text-xs md:text-sm text-foreground/80">Included</span>
      </span>
    );
  }
  if (value === "Not included") {
    return (
      <span className="flex items-center justify-center gap-1.5">
        <XCircle className="h-5 w-5 text-destructive/40" />
        <span className="text-xs md:text-sm text-muted-foreground/60">Not included</span>
      </span>
    );
  }
  // Custom text values
  const isNegative = value.includes("extra") || value === "Delaware only";
  return (
    <span className={`text-xs md:text-sm font-medium text-center ${isFoundo ? "text-primary" : isNegative ? "text-destructive/70" : "text-foreground/80"}`}>
      {value}
    </span>
  );
};

const ComparisonSection = () => (
  <section className="py-20 md:py-24 lg:py-28 bg-muted/30 relative">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3 md:mb-4">Comparison</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-5 font-display leading-tight">
          Foundo vs <span className="text-gradient">Alternatives</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">Why international founders choose Foundo.</p>
      </div>

      <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card overflow-x-auto shadow-sm">
        <div className="min-w-[420px]">
          {/* Header */}
          <div className="grid grid-cols-4 border-b border-border bg-muted/40">
            <div className="p-3 md:p-5 font-medium text-sm md:text-base text-muted-foreground">Feature</div>
            <div className="p-3 md:p-5 text-center bg-primary/[0.06] border-x border-primary/10">
              <span className="font-extrabold text-primary font-display text-sm md:text-lg">Foundo</span>
            </div>
            <div className="p-3 md:p-5 text-center font-medium text-xs md:text-base text-muted-foreground">Stripe Atlas</div>
            <div className="p-3 md:p-5 text-center font-medium text-xs md:text-base text-muted-foreground">Firstbase</div>
          </div>

          {/* Rows */}
          {features.map((f, i) => (
            <div key={i} className={`grid grid-cols-4 hover:bg-muted/20 transition-colors ${i < features.length - 1 ? "border-b border-border" : ""}`}>
              <div className="p-3 md:p-5 flex items-center text-xs sm:text-sm md:text-base font-medium text-foreground leading-tight">{f.feature}</div>
              <div className="p-3 md:p-5 flex items-center justify-center bg-primary/[0.04] border-x border-primary/10">
                <CellValue value={f.foundo} isFoundo />
              </div>
              <div className="p-3 md:p-5 flex items-center justify-center">
                <CellValue value={f.stripe} />
              </div>
              <div className="p-3 md:p-5 flex items-center justify-center">
                <CellValue value={f.firstbase} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ComparisonSection;
