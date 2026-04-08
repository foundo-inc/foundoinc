import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Rocket, Zap, Shield, Users } from "lucide-react";

const leftFeatures = [
  "Company formation (LLC or C-Corp)",
  "Expedited Tax ID (EIN) setup",
  "Zero filing fees for all documents",
  "Business bank account setup",
  "Mailroom Premium — address & mailbox",
  "Agent Autopilot — compliance & filings",
];

const rightFeatures = [
  "Accounting & Tax Filing included",
  "All essential documents",
  "Get discovered by VCs",
  "More than $350K in deals",
  "Lifetime expert support",
];

const stats = [
  { icon: Users, value: "2,400+", label: "Founders trust us" },
  { icon: Shield, value: "100%", label: "Compliance rate" },
  { icon: Zap, value: "48hrs", label: "Avg. setup time" },
];

const SinglePackageSection = () => (
  <section id="pricing" className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-foreground">
    {/* Background effects */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.15)_0%,_transparent_50%)]" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-3xl" />

    <div className="container mx-auto px-5 md:px-4 relative z-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
          <Rocket className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold text-primary">All-In-One Package</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 font-display leading-tight text-background">
          One Package, <span className="text-primary">Everything Included</span>
        </h2>
        <p className="text-background/60 text-base md:text-lg max-w-lg mx-auto">
          No hidden fees. No confusing tiers. Everything you need in one simple plan.
        </p>
      </div>

      {/* Main Card */}
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl bg-card border border-border overflow-hidden">
          {/* Glow effect */}
          <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

          <div className="grid lg:grid-cols-5">
            {/* Left - Pricing */}
            <div className="lg:col-span-2 p-8 md:p-10 lg:p-12 flex flex-col justify-between bg-primary/[0.03] border-b lg:border-b-0 lg:border-r border-border">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  <Zap className="h-3 w-3" />
                  Best Value
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold font-display mb-2">
                  Foundo Complete
                </h3>
                <p className="text-muted-foreground text-sm mb-8">
                  Everything to start & scale your US business
                </p>

                {/* Price */}
                <div className="mb-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl md:text-6xl font-extrabold font-display text-primary leading-none">
                      $199
                    </span>
                    <span className="text-muted-foreground text-sm">/month</span>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-sm line-through text-muted-foreground/50">$362/mo</span>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      SAVE 45%
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Billed yearly · One-time formation fee $399
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  size="lg"
                  className="rounded-full w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-14 text-base shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/35"
                >
                  Get started today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-3">
                  No credit card required to start
                </p>
              </div>
            </div>

            {/* Right - Features */}
            <div className="lg:col-span-3 p-8 md:p-10 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
                What's included
              </p>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {[...leftFeatures, ...rightFeatures].map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/85 leading-snug">{f}</span>
                  </div>
                ))}
              </div>

              {/* Mini stats */}
              <div className="mt-10 pt-8 border-t border-border">
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <stat.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                      <p className="text-lg md:text-xl font-extrabold font-display">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SinglePackageSection;
