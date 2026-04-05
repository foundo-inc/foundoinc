import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const points = [
  "Register your LLC in any U.S. state — remotely",
  "Get your EIN (Tax ID) without an SSN",
  "Open a U.S. business bank account from abroad",
  "Receive a registered agent & U.S. business address",
  "Stay compliant with annual report support",
];

const SolutionSection = () => (
  <section className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 section-light" />
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div className="container mx-auto px-4 relative">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            The Solution
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 font-display leading-tight">
            One Platform.
            <br />
            <span className="text-gradient">Everything You Need.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Foundo removes every barrier between you and your U.S. business. We handle the paperwork, compliance, and banking — so you can focus on building.
          </p>
          <div className="space-y-4 mb-10">
            {points.map((p, i) => (
              <div key={i} className="flex items-start gap-3 group">
                <div className="h-6 w-6 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-success/20 transition-colors">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                </div>
                <span className="text-foreground font-medium">{p}</span>
              </div>
            ))}
          </div>
          <Button size="xl" className="rounded-2xl shadow-lg shadow-primary/20">
            Get Started — $249 <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Visual card */}
        <div className="relative">
          <div className="absolute inset-0 hero-gradient-2 rounded-3xl blur-3xl opacity-10 scale-95" />
          <div className="relative glass-card-strong rounded-3xl shadow-2xl p-8 space-y-5">
            <div className="flex items-center gap-4 pb-5 border-b border-border/50">
              <div className="h-12 w-12 rounded-2xl hero-gradient-2 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">F</span>
              </div>
              <div>
                <p className="font-bold font-display text-lg">Your U.S. Business</p>
                <p className="text-sm text-muted-foreground">Ready in 3–5 business days</p>
              </div>
            </div>
            {["LLC Formation", "EIN / Tax ID", "Bank Account", "Registered Agent"].map((s, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-accent/50 transition-colors">
                <span className="text-sm font-semibold">{s}</span>
                <span className="text-xs font-bold bg-success/10 text-success px-3 py-1.5 rounded-full">✓ Included</span>
              </div>
            ))}
            <div className="pt-5 border-t border-border/50 text-center">
              <span className="text-4xl font-extrabold text-gradient font-display">$249</span>
              <span className="text-muted-foreground text-sm ml-2">+ state fee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
