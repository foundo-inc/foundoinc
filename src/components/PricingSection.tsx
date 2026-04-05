import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const included = [
  "LLC Formation & State Filing",
  "EIN (Tax ID) Acquisition",
  "Registered Agent (1 Year)",
  "Operating Agreement",
  "Bank Account Guidance",
  "Compliance Calendar",
  "U.S. Business Address",
  "Dedicated Support",
];

const PricingSection = () => (
  <section id="pricing" className="py-24 md:py-32 relative">
    <div className="absolute inset-0 mesh-gradient" />
    <div className="container mx-auto px-4 relative">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Pricing
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          Simple, <span className="text-gradient">Transparent</span> Pricing
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">Everything you need to start your U.S. business — one price, no surprises.</p>
      </div>
      <div className="max-w-lg mx-auto">
        <div className="relative">
          <div className="absolute inset-0 hero-gradient-2 rounded-3xl blur-2xl opacity-15 scale-[1.02]" />
          <div className="relative rounded-3xl border-2 border-primary/20 bg-card shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="hero-gradient-2 py-4 px-6 flex items-center justify-center gap-2">
              <Sparkles className="h-4 w-4 text-primary-foreground/80" />
              <span className="text-primary-foreground text-sm font-semibold">Most Popular — All-In-One Package</span>
            </div>
            <div className="p-10">
              {/* Price */}
              <div className="text-center mb-10">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-6xl font-extrabold text-gradient font-display">$249</span>
                </div>
                <p className="text-muted-foreground mt-3">+ State Filing Fee (varies by state)</p>
              </div>
              {/* Features */}
              <div className="space-y-4 mb-10">
                {included.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="h-5 w-5 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full rounded-2xl shadow-lg shadow-primary/20" size="xl">
                Get Started Now <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
              <p className="text-center text-xs text-muted-foreground mt-5">No hidden fees • 100% satisfaction guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;
