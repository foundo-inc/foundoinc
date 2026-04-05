import { CheckCircle2 } from "lucide-react";

const points = [
  "Register your LLC in any U.S. state — remotely",
  "Get your EIN (Tax ID) without an SSN",
  "Open a U.S. business bank account from abroad",
  "Receive a registered agent & U.S. business address",
  "Stay compliant with annual report support",
];

const SolutionSection = () => (
  <section className="py-20 md:py-28 section-light">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">The Solution</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">One Platform. Everything You Need.</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Foundo removes every barrier between you and your U.S. business. We handle the paperwork, compliance, and banking — so you can focus on building.
          </p>
          <div className="space-y-4">
            {points.map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success mt-0.5 shrink-0" />
                <span className="text-foreground font-medium">{p}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="bg-card rounded-2xl border shadow-xl p-8 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b">
              <div className="h-10 w-10 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold text-sm">F</div>
              <div>
                <p className="font-bold">Your U.S. Business</p>
                <p className="text-xs text-muted-foreground">Ready in 3–5 business days</p>
              </div>
            </div>
            {["LLC Formation", "EIN / Tax ID", "Bank Account", "Registered Agent"].map((s, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm font-medium">{s}</span>
                <span className="text-xs font-semibold bg-accent text-accent-foreground px-3 py-1 rounded-full">✓ Included</span>
              </div>
            ))}
            <div className="pt-4 border-t text-center">
              <span className="text-3xl font-extrabold text-primary">$249</span>
              <span className="text-muted-foreground text-sm ml-1">+ state fee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
