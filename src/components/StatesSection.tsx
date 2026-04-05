import { CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const states = [
  {
    name: "Wyoming",
    popular: true,
    price: "$399",
    benefits: [
      "No state income tax",
      "Strongest privacy protections",
      "Low annual fees ($60/yr)",
      "No requirement for public disclosure",
      "Fast processing (1–2 days)",
    ],
  },
  {
    name: "Delaware",
    popular: false,
    price: "$449",
    benefits: [
      "Preferred by investors & VCs",
      "Business-friendly court system",
      "Flexible corporate laws",
      "No sales tax on services",
      "Established legal precedent",
    ],
  },
  {
    name: "New Mexico",
    popular: false,
    price: "$349",
    benefits: [
      "Lowest formation cost",
      "No annual report required",
      "No state franchise tax",
      "Strong privacy protections",
      "Great for solo founders",
    ],
  },
];

const StatesSection = () => (
  <section className="py-24 md:py-32 bg-foreground">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">POPULAR STATES</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display text-primary-foreground">
          Choose the Best State
          <br className="hidden md:block" />
          for Your <span className="text-primary">LLC</span>
        </h2>
        <p className="text-primary-foreground/60 text-lg">
          Each state offers unique advantages. We'll help you pick the one that fits your business best.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {states.map((state, i) => (
          <div
            key={i}
            className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
              state.popular
                ? "bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/20"
                : "bg-primary-foreground/5 border-primary-foreground/10 text-primary-foreground"
            }`}
          >
            {state.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-foreground text-primary text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                <Star className="h-3 w-3 fill-current" /> MOST POPULAR
              </div>
            )}
            <h3 className="text-2xl font-extrabold font-display mb-2">{state.name}</h3>
            <p className="text-3xl font-extrabold font-display mb-6">
              {state.price}
              <span className="text-sm font-normal opacity-70 ml-1">one-time</span>
            </p>
            <ul className="space-y-3 mb-8">
              {state.benefits.map((b, j) => (
                <li key={j} className="flex items-start gap-3 text-sm">
                  <CheckCircle className={`h-4 w-4 shrink-0 mt-0.5 ${state.popular ? "text-primary-foreground" : "text-primary"}`} />
                  <span className={state.popular ? "text-primary-foreground/90" : "text-primary-foreground/70"}>{b}</span>
                </li>
              ))}
            </ul>
            <Button
              className={`w-full rounded-full ${
                state.popular
                  ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  : "bg-primary text-primary-foreground"
              }`}
            >
              Start in {state.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatesSection;
