import { CheckCircle2, Crown } from "lucide-react";

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
  <section className="py-24 md:py-32 section-alt">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Compare States</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          Choose the Best State <br className="hidden md:block" />
          <span className="text-gradient">For Your LLC</span>
        </h2>
        <p className="text-muted-foreground text-lg">We'll help you pick the right state based on your business goals.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {states.map((s, i) => (
          <div key={i} className={`relative rounded-2xl bg-card border p-8 card-hover ${s.popular ? 'border-primary/30 ring-2 ring-primary/10 shadow-xl' : 'border-border'}`}>
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
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">{p}</span>
                </div>
              ))}
            </div>
            <div className="pt-5 border-t border-border">
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
