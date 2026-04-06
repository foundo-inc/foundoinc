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
  <section className="py-20 md:py-28 lg:py-36 bg-foreground relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(230,97%,46%,0.08)_0%,_transparent_50%)]" />
    
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3 md:mb-4">Popular States</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold mb-4 md:mb-6 font-display text-primary-foreground leading-tight">
          Choose the Best State for Your <span className="text-primary">LLC</span>
        </h2>
        <p className="text-primary-foreground/50 text-base md:text-lg lg:text-xl max-w-xl mx-auto">
          Each state offers unique advantages. We'll help you pick the right one.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
        {states.map((state, i) => (
          <div
            key={i}
            className={`relative rounded-2xl p-6 sm:p-7 md:p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1 ${
              state.popular
                ? "bg-primary shadow-xl shadow-primary/20"
                : "border border-primary-foreground/[0.08] bg-primary-foreground/[0.03] hover:bg-primary-foreground/[0.05]"
            }`}
          >
            {state.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary-foreground text-primary text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                <Star className="h-3.5 w-3.5 fill-current" /> MOST POPULAR
              </div>
            )}
            <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-extrabold font-display mb-1.5 text-primary-foreground">{state.name}</h3>
            <p className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold font-display mb-6 md:mb-8 text-primary-foreground">
              {state.price}
              <span className="text-sm md:text-base font-normal opacity-50 ml-1.5">one-time</span>
            </p>
            <ul className="space-y-3 md:space-y-4 mb-7 md:mb-8 lg:mb-10">
              {state.benefits.map((b, j) => (
                <li key={j} className="flex items-start gap-3 text-sm sm:text-base md:text-base">
                  <CheckCircle className={`h-5 w-5 shrink-0 mt-0.5 ${state.popular ? "text-primary-foreground/80" : "text-primary"}`} />
                  <span className={state.popular ? "text-primary-foreground/80" : "text-primary-foreground/60"}>{b}</span>
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              className={`w-full rounded-full h-12 md:h-13 lg:h-14 text-sm sm:text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                state.popular
                  ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg"
                  : "bg-primary text-primary-foreground shadow-md shadow-primary/20"
              }`}
            >
              Start in {state.name} <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatesSection;
