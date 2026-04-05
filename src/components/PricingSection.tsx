import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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
  <section id="pricing" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Pricing</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-muted-foreground text-lg">Everything you need to start your U.S. business — one price, no surprises.</p>
      </div>
      <div className="max-w-lg mx-auto">
        <div className="relative rounded-2xl border-2 border-primary bg-card shadow-2xl shadow-primary/10 overflow-hidden">
          <div className="hero-gradient text-center py-3">
            <span className="text-primary-foreground text-sm font-semibold">⭐ Most Popular — All-In-One Package</span>
          </div>
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-extrabold text-foreground">$249</span>
              </div>
              <p className="text-muted-foreground mt-2">+ State Filing Fee (varies by state)</p>
            </div>
            <div className="space-y-3 mb-8">
              {included.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Button className="w-full" size="xl">
              Get Started Now <ArrowRight className="ml-1 h-5 w-5" />
            </Button>
            <p className="text-center text-xs text-muted-foreground mt-4">No hidden fees • Cancel anytime • 100% satisfaction guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;
