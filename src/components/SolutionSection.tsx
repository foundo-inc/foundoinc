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
  <section className="py-24 md:py-32 section-alt">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">The Solution</p>
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
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground font-medium">{p}</span>
              </div>
            ))}
          </div>
          <Button size="xl" className="rounded-xl shadow-lg shadow-primary/20">
            Get Started — $249 <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-4 bg-primary/10 rounded-3xl blur-2xl" />
          <div className="relative rounded-3xl border border-border bg-card shadow-2xl p-8 space-y-4">
            <div className="flex items-center gap-4 pb-5 border-b border-border">
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
                <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1.5 rounded-full">✓ Included</span>
              </div>
            ))}
            <div className="pt-5 border-t border-border text-center">
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
