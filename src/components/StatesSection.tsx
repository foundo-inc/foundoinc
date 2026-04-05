import { CheckCircle, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const states = [
  {
    name: "Wyoming",
    popular: true,
    price: "$399",
    benefits: ["No state income tax", "Strongest privacy protections", "Low annual fees ($60/yr)", "No public disclosure", "Fast processing (1–2 days)"],
  },
  {
    name: "Delaware",
    popular: false,
    price: "$449",
    benefits: ["Preferred by investors & VCs", "Business-friendly courts", "Flexible corporate laws", "No sales tax on services", "Established legal precedent"],
  },
  {
    name: "New Mexico",
    popular: false,
    price: "$349",
    benefits: ["Lowest formation cost", "No annual report required", "No state franchise tax", "Strong privacy protections", "Great for solo founders"],
  },
];

const StatesSection = () => (
  <section className="py-20 md:py-28 lg:py-32 bg-foreground relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(230,97%,46%,0.08)_0%,_transparent_50%)]" />
    
    <div className="container mx-auto px-5 md:px-4 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3 md:mb-4">Popular States</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-5 font-display text-primary-foreground leading-tight">
          Choose the Best State for Your <span className="text-primary">LLC</span>
        </h2>
        <p className="text-primary-foreground/50 text-base md:text-lg">
          Each state offers unique advantages. We'll help you pick the right one.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto">
        {states.map((state, i) => (
          <div
            key={i}
            className={`relative rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 ${
              state.popular
                ? "bg-primary shadow-xl shadow-primary/20"
                : "border border-primary-foreground/[0.08] bg-primary-foreground/[0.03] hover:bg-primary-foreground/[0.05]"
            }`}
          >
            {state.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-foreground text-primary text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                <Star className="h-3.5 w-3.5 fill-current" /> MOST POPULAR
              </div>
            )}
            <h3 className="text-xl md:text-2xl font-extrabold font-display mb-1 text-primary-foreground">{state.name}</h3>
            <p className="text-2xl md:text-3xl font-extrabold font-display mb-5 md:mb-6 text-primary-foreground">
              {state.price}
              <span className="text-sm font-normal opacity-50 ml-1">one-time</span>
            </p>
            <ul className="space-y-3 mb-6 md:mb-8">
              {state.benefits.map((b, j) => (
                <li key={j} className="flex items-start gap-2.5 text-sm md:text-base">
                  <CheckCircle className={`h-4 md:h-5 w-4 md:w-5 shrink-0 mt-0.5 ${state.popular ? "text-primary-foreground/80" : "text-primary"}`} />
                  <span className={state.popular ? "text-primary-foreground/80" : "text-primary-foreground/60"}>{b}</span>
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              className={`w-full rounded-full h-11 md:h-12 text-sm md:text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                state.popular
                  ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg"
                  : "bg-primary text-primary-foreground shadow-md shadow-primary/20"
              }`}
            >
              Start in {state.name} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatesSection;
