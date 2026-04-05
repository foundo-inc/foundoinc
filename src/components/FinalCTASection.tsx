import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTASection = () => (
  <section className="py-28 md:py-36 section-dark relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-pattern opacity-30" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_center,_hsl(230,97%,46%,0.12)_0%,_transparent_50%)]" />
    
    <div className="container mx-auto px-4 relative z-10 text-center">
      <div className="inline-flex items-center gap-2 glass-card-dark rounded-full px-5 py-2.5 mb-8">
        <Sparkles className="h-4 w-4 text-primary animate-pulse-soft" />
        <span className="text-primary-foreground/80 text-sm font-semibold">Start Your Journey Today</span>
      </div>
      
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground mb-3 font-display leading-tight">
        Make the Dream Real.
      </h2>
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 font-display leading-tight">
        <span className="text-gradient-light">Launch Your U.S. Business.</span>
      </h2>
      <p className="text-lg text-primary-foreground/50 max-w-2xl mx-auto mb-10 leading-relaxed">
        Form a U.S. LLC, set up a U.S. bank account, unlock Stripe payments, and stay
        fully compliant. We'll handle the legal — you focus on growth.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
        <Button size="lg" className="rounded-full text-base px-10 shadow-2xl shadow-primary/30 h-14 font-semibold transition-all duration-300 hover:-translate-y-0.5">
          Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button variant="outline" size="lg" className="rounded-full text-base border-primary-foreground/15 text-primary-foreground/70 hover:bg-primary-foreground/5 hover:text-primary-foreground bg-transparent h-14 transition-all duration-300">
          Talk to an Expert
        </Button>
      </div>
      <p className="text-sm text-primary-foreground/30">Explore the process before paying</p>
    </div>
  </section>
);

export default FinalCTASection;
