import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Rocket, Zap, Star } from "lucide-react";

const features = [
  "Company formation (LLC or C-Corp)",
  "Expedited Tax ID (EIN) setup",
  "Zero filing fees for all documents",
  "Business bank account setup",
  "Mailroom Premium — physical address & virtual mailbox",
  "Agent Autopilot — compliance & annual filings",
  "Accounting & Tax Filing included",
  "All essential documents",
  "Get discovered by VCs",
  "More than $350K in deals",
  "Lifetime expert support",
];

const SinglePackageSection = () => (
  <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.06)_0%,_transparent_50%)]" />
    <div className="container mx-auto px-5 md:px-4 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3 md:mb-4">
          All-In-One
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-5 font-display leading-tight">
          One Package, <span className="text-gradient">Everything Included</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">
          Skip the confusion. Get everything you need to launch and run your US company in a single package.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="relative rounded-3xl border-2 border-primary/30 bg-card overflow-hidden shadow-2xl shadow-primary/[0.08]">
          {/* Top accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-primary via-primary/80 to-primary" />

          {/* Popular badge */}
          <div className="absolute top-6 right-6 z-20">
            <div className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
              <Star className="h-3.5 w-3.5 fill-current" />
              Most Popular
            </div>
          </div>

          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="flex flex-col gap-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center ring-1 ring-primary/20">
                  <Rocket className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold font-display">
                    Foundo Complete
                  </h3>
                  <p className="text-muted-foreground text-sm mt-0.5">
                    Everything to start & scale your US business
                  </p>
                </div>
              </div>

              {/* Pricing */}
              <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-8 p-6 rounded-2xl bg-muted/50 border border-border/50">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Monthly
                  </p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl md:text-6xl font-extrabold font-display text-primary leading-none">
                      $199
                    </span>
                    <span className="text-lg line-through text-muted-foreground/60">
                      $362
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1.5">Billed yearly</p>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                  <Zap className="h-4 w-4" />
                  <span className="text-sm font-bold">Save 45%</span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border mb-8" />

            {/* Features */}
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-5">
              Everything included
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm md:text-[15px] text-foreground/90">{f}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              size="lg"
              className="rounded-full w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-14 text-base shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
            >
              Get started today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <p className="text-center text-xs text-muted-foreground mt-4">
              One-time formation fee of $399 + $199/mo for ongoing services
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SinglePackageSection;
