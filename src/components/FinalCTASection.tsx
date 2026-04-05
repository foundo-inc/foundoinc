import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => (
  <section className="py-16 md:py-24 lg:py-28 bg-foreground relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(230,97%,46%,0.12)_0%,_transparent_50%)]" />
    
    <div className="container mx-auto px-5 md:px-4 relative z-10 text-center">
      <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary-foreground mb-2 font-display leading-tight">
        Make the Dream Real.
      </h2>
      <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 md:mb-6 font-display leading-tight text-primary">
        Launch Your U.S. Business.
      </h2>
      <p className="text-xs md:text-sm text-primary-foreground/50 max-w-lg mx-auto mb-6 md:mb-8 leading-relaxed">
        Form a U.S. LLC, set up banking, unlock Stripe payments, and stay compliant. We handle the legal — you focus on growth.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center mb-3">
        <Button size="lg" className="rounded-full text-xs md:text-sm px-6 md:px-8 shadow-xl shadow-primary/25 h-10 md:h-12 font-semibold transition-all duration-300 hover:-translate-y-0.5">
          Get Started for Free <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg" className="rounded-full text-xs md:text-sm border-primary-foreground/15 text-primary-foreground/70 hover:bg-primary-foreground/5 bg-transparent h-10 md:h-12 transition-all duration-300">
          Talk to an Expert
        </Button>
      </div>
      <p className="text-[10px] md:text-[11px] text-primary-foreground/30">Explore the process before paying</p>
    </div>
  </section>
);

export default FinalCTASection;
