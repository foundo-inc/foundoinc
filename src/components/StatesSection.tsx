import { CheckCircle, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const states = [
  {
    name: "Wyoming",
    popular: true,
    price: "$399",
    benefits: ["No state income tax", "Strongest privacy protections", "Low annual fees ($60/yr)", "No public disclosure requirement", "Fast processing (1–2 days)"],
  },
  {
    name: "Delaware",
    popular: false,
    price: "$449",
    benefits: ["Preferred by investors & VCs", "Business-friendly court system", "Flexible corporate laws", "No sales tax on services", "Established legal precedent"],
  },
  {
    name: "New Mexico",
    popular: false,
    price: "$349",
    benefits: ["Lowest formation cost", "No annual report required", "No state franchise tax", "Strong privacy protections", "Great for solo founders"],
  },
];

const StatesSection = () => (
  <section className="py-28 md:py-36 section-dark relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-pattern opacity-50" />
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_center,_hsl(230,97%,46%,0.08)_0%,_transparent_60%)]" />
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 glass-card-dark rounded-full px-4 py-2 mb-6">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">Popular States</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display text-primary-foreground">
          Choose the Best State
          <br className="hidden md:block" />
          for Your <span className="text-gradient-light">LLC</span>
        </h2>
        <p className="text-primary-foreground/50 text-lg">
          Each state offers unique advantages. We'll help you pick the right one.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {states.map((state, i) => (
          <div
            key={i}
            className={`group relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
              state.popular
                ? "glow-primary"
                : "glass-card-dark card-hover"
            }`}
          >
            {state.popular ? (
              <>
                <div className="absolute inset-0 hero-gradient" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsla(0,0%,100%,0.1)_0%,_transparent_60%)]" />
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-primary-foreground text-primary text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                  <Star className="h-3 w-3 fill-current" /> MOST POPULAR
                </div>
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            )}
            
            <div className="relative z-10">
              <h3 className={`text-2xl font-extrabold font-display mb-2 ${state.popular ? "text-primary-foreground" : "text-primary-foreground"}`}>{state.name}</h3>
              <p className={`text-3xl font-extrabold font-display mb-6 ${state.popular ? "text-primary-foreground" : "text-primary-foreground"}`}>
                {state.price}
                <span className="text-sm font-normal opacity-50 ml-1">one-time</span>
              </p>
              <ul className="space-y-3 mb-8">
                {state.benefits.map((b, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <CheckCircle className={`h-4 w-4 shrink-0 mt-0.5 ${state.popular ? "text-primary-foreground/80" : "text-primary"}`} />
                    <span className={state.popular ? "text-primary-foreground/80" : "text-primary-foreground/60"}>{b}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full rounded-full h-12 font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                  state.popular
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl"
                    : "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                }`}
              >
                Start in {state.name} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatesSection;
