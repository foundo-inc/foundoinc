import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const MidCTASection = () => (
  <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
    <div className="absolute inset-0 hero-gradient" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(0,0%,100%,0.1)_0%,_transparent_50%)]" />

    <div className="container mx-auto px-5 md:px-4 relative z-10 text-center">
      <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 rounded-full px-4 py-2 mb-6 md:mb-8">
        <Sparkles className="h-4 w-4 text-primary-foreground" />
        <span className="text-primary-foreground text-sm font-semibold">Limited Time — 45% Off</span>
      </div>

      <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4 md:mb-5 font-display leading-tight max-w-2xl mx-auto">
        Ready to Take Your Business to the United States?
      </h2>

      <p className="text-primary-foreground/60 text-base md:text-lg max-w-lg mx-auto mb-8 md:mb-10">
        Join 500+ founders who've launched their U.S. company with Foundo.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
        <Button size="lg" className="w-full sm:w-auto rounded-full text-sm md:text-base px-7 md:px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl h-12 md:h-14 font-semibold transition-all duration-300 hover:-translate-y-0.5">
          Start Your Business Now <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-sm md:text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent h-12 md:h-14 transition-all duration-300">
          See Pricing Plans
        </Button>
      </div>
    </div>
  </section>
);

export default MidCTASection;
