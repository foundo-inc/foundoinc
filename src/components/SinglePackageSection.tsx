import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Rocket } from "lucide-react";

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
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.04)_0%,_transparent_70%)]" />
    <div className="container mx-auto px-5 md:px-4 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3 md:mb-4">All-In-One</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-5 font-display leading-tight">
          One Package, <span className="text-gradient">Everything Included</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">
          Skip the confusion. Get everything you need to launch and run your US company in a single package.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="relative rounded-2xl border border-primary/20 bg-card p-8 md:p-10 shadow-xl shadow-primary/[0.06] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--primary)/0.05)_0%,_transparent_60%)]" />
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Rocket className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold font-display">Foundo Complete</h3>
                  <p className="text-muted-foreground text-sm">Everything to start & scale</p>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-extrabold font-display text-primary">$199</span>
                  <span className="text-lg line-through text-muted-foreground">$362</span>
                </div>
                <p className="text-xs text-muted-foreground">Monthly · Billed yearly</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base">{f}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="rounded-full w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-14 text-base shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              Get started today <ArrowRight className="ml-2 h-4 w-4" />
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
