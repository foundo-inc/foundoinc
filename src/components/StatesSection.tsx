import { CheckCircle2 } from "lucide-react";

const states = [
  {
    name: "New Mexico",
    fee: "$50",
    pros: ["No annual report", "No state income tax on out-of-state income", "Very low filing cost", "Maximum privacy"],
    best: "Budget-conscious founders",
  },
  {
    name: "Wyoming",
    fee: "$100",
    pros: ["No state income tax", "Strong asset protection", "Low annual fee ($60)", "Privacy-friendly"],
    best: "Privacy & asset protection",
    popular: true,
  },
  {
    name: "Delaware",
    fee: "$90",
    pros: ["Most respected jurisdiction", "Court of Chancery", "Favorable business laws", "Ideal for fundraising"],
    best: "Startups seeking investors",
  },
];

const StatesSection = () => (
  <section className="py-20 md:py-28 section-light">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Compare States</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Choose the Best State for Your LLC</h2>
        <p className="text-muted-foreground text-lg">We'll help you pick the right state based on your business goals.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {states.map((s, i) => (
          <div key={i} className={`relative rounded-2xl border bg-card p-6 transition-all duration-300 hover:shadow-lg ${s.popular ? 'border-primary shadow-lg ring-1 ring-primary/20' : ''}`}>
            {s.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-extrabold mb-1">{s.name}</h3>
            <p className="text-muted-foreground text-sm mb-4">State fee: <span className="font-semibold text-foreground">{s.fee}</span></p>
            <div className="space-y-2.5 mb-6">
              {s.pros.map((p, j) => (
                <div key={j} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />
                  <span className="text-sm">{p}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t">
              <p className="text-xs text-muted-foreground">Best for:</p>
              <p className="text-sm font-semibold text-primary">{s.best}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatesSection;
