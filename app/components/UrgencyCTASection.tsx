import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "700+", label: "Founders Served" },
  { icon: Globe, value: "35+", label: "Countries Served" },
  { icon: TrendingUp, value: "98%", label: "Success Rate" },
];

const UrgencyCTASection = () => (
  <section className="py-20 md:py-24 lg:py-28 relative overflow-hidden">
    <div className="absolute inset-0 hero-gradient" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(0,0%,100%,0.1)_0%,_transparent_50%)]" />

    <div className="container mx-auto relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground/60 mb-4">Don't Wait</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-primary-foreground mb-5">
          Your US Company Is One Click Away
        </h2>
        <p className="text-primary-foreground/70 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Every day you wait is a day your competitors are getting ahead. Join thousands of founders who already launched with Foundo.
        </p>

        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto mb-10">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center mx-auto mb-2">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <p className="text-xl md:text-2xl font-extrabold font-display text-primary-foreground">{s.value}</p>
              <p className="text-xs text-primary-foreground/50">{s.label}</p>
            </div>
          ))}
        </div>

        <Button size="lg" className="w-full sm:w-auto rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold h-12 md:h-14 px-10 text-base shadow-lg transition-all duration-300 hover:-translate-y-0.5">
          Start my company now <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  </section>
);

export default UrgencyCTASection;
