import { CheckCircle2, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const states = [
  {
    name: "New Mexico",
    fee: "$50",
    pros: ["No annual report", "No state income tax on out-of-state income", "Very low filing cost", "Maximum privacy"],
    best: "Budget-conscious founders",
    emoji: "🏜️",
  },
  {
    name: "Wyoming",
    fee: "$100",
    pros: ["No state income tax", "Strong asset protection", "Low annual fee ($60)", "Privacy-friendly"],
    best: "Privacy & asset protection",
    popular: true,
    emoji: "🦬",
  },
  {
    name: "Delaware",
    fee: "$90",
    pros: ["Most respected jurisdiction", "Court of Chancery", "Favorable business laws", "Ideal for fundraising"],
    best: "Startups seeking investors",
    emoji: "💎",
  },
];

const StatesSection = () => (
  <section className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 section-light" />
    <div className="absolute top-0 left-1/2 w-[800px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-primary/5 rounded-full blur-3xl" />
    <div className="container mx-auto px-4 relative">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Compare States
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          Choose the Best State
          <br />
          <span className="text-gradient">For Your LLC</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">We'll help you pick the right state based on your business goals.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {states.map((s, i) => (
          <div key={i} className={`relative rounded-3xl bg-card border p-8 card-hover ${s.popular ? 'border-primary/30 ring-1 ring-primary/10 shadow-xl glow-sm' : 'border-border/60'}`}>
            {s.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 hero-gradient-2 text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <Crown className="h-3.5 w-3.5" /> Most Popular
              </div>
            )}
            <div className="text-4xl mb-4">{s.emoji}</div>
            <h3 className="text-2xl font-extrabold mb-1 font-display">{s.name}</h3>
            <p className="text-muted-foreground text-sm mb-6">State fee: <span className="font-bold text-foreground">{s.fee}</span></p>
            <div className="space-y-3 mb-8">
              {s.pros.map((p, j) => (
                <div key={j} className="flex items-start gap-2.5">
                  <div className="h-5 w-5 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                  </div>
                  <span className="text-sm">{p}</span>
                </div>
              ))}
            </div>
            <div className="pt-5 border-t border-border/50">
              <p className="text-xs text-muted-foreground mb-1">Best for:</p>
              <p className="text-sm font-bold text-primary">{s.best}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatesSection;
