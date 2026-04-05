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
  <section id="pricing" className="py-24 md:py-32">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Pricing</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          Simple, <span className="text-gradient">Transparent</span> Pricing
        </h2>
        <p className="text-muted-foreground text-lg">Everything you need to start your U.S. business — one price, no surprises.</p>
      </div>
      <div className="max-w-lg mx-auto">
        <div className="relative">
          <div className="absolute inset-4 bg-primary/10 rounded-3xl blur-2xl" />
          <div className="relative rounded-3xl border-2 border-primary/20 bg-card shadow-2xl overflow-hidden">
            <div className="hero-gradient-2 py-3 px-6 text-center">
              <span className="text-primary-foreground text-sm font-semibold">All-In-One Package</span>
            </div>
            <div className="p-10">
              <div className="text-center mb-10">
                <span className="text-6xl font-extrabold text-gradient font-display">$249</span>
                <p className="text-muted-foreground mt-2">+ State Filing Fee (varies by state)</p>
              </div>
              <div className="space-y-3.5 mb-10">
                {included.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full rounded-xl shadow-lg shadow-primary/20" size="xl">
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
