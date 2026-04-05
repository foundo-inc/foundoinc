import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const MidCTASection = () => (
  <section className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 hero-gradient" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(0,0%,100%,0.12)_0%,_transparent_50%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsla(200,100%,50%,0.15)_0%,_transparent_50%)]" />
    <div className="absolute inset-0 bg-grid-pattern opacity-20" />

    <div className="container mx-auto px-4 relative z-10 text-center">
      <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/15 rounded-full px-5 py-2.5 mb-8">
        <Sparkles className="h-4 w-4 text-primary-foreground animate-pulse-soft" />
        <span className="text-primary-foreground text-sm font-semibold">Limited Time Offer — 45% Off</span>
      </div>

      <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6 font-display leading-tight max-w-3xl mx-auto">
        Ready to Take Your Business
        <br className="hidden md:block" />
        to the <span className="underline decoration-primary-foreground/20 underline-offset-8 decoration-2">United States?</span>
      </h2>

      <p className="text-primary-foreground/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
        Join 10,000+ international founders who've already launched their U.S. company with Foundo.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="rounded-full text-base px-10 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-2xl h-14 font-semibold transition-all duration-300 hover:-translate-y-0.5">
          Start Your Business Now <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button variant="outline" size="lg" className="rounded-full text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent h-14 transition-all duration-300">
          See Pricing Plans
        </Button>
      </div>

      <p className="text-primary-foreground/30 text-sm mt-8">No credit card required • Start exploring for free</p>
    </div>
  </section>
);

export default MidCTASection;
