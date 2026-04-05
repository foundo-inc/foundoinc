import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const MidCTASection = () => (
  <section className="py-16 md:py-20 relative overflow-hidden">
    <div className="absolute inset-0 hero-gradient" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(0,0%,100%,0.1)_0%,_transparent_50%)]" />

    <div className="container mx-auto px-4 relative z-10 text-center">
      <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 rounded-full px-4 py-1.5 mb-6">
        <Sparkles className="h-3.5 w-3.5 text-primary-foreground" />
        <span className="text-primary-foreground text-xs font-semibold">Limited Time — 45% Off</span>
      </div>

      <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4 font-display leading-tight max-w-2xl mx-auto">
        Ready to Take Your Business to the United States?
      </h2>

      <p className="text-primary-foreground/60 text-sm max-w-lg mx-auto mb-8">
        Join 10,000+ founders who've launched their U.S. company with Foundo.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button size="lg" className="rounded-full text-sm px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl h-12 font-semibold transition-all duration-300 hover:-translate-y-0.5">
          Start Your Business Now <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg" className="rounded-full text-sm border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent h-12 transition-all duration-300">
          See Pricing Plans
        </Button>
      </div>
    </div>
  </section>
);

export default MidCTASection;
