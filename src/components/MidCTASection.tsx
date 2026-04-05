import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const MidCTASection = () => (
  <section className="py-20 md:py-28 relative overflow-hidden">
    <div className="absolute inset-0 hero-gradient opacity-95" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(0,0%,100%,0.15)_0%,_transparent_60%)]" />

    <div className="container mx-auto px-4 relative z-10 text-center">
      <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8">
        <Sparkles className="h-4 w-4 text-primary-foreground" />
        <span className="text-primary-foreground text-sm font-semibold">Limited Time Offer — 45% Off</span>
      </div>

      <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-6 font-display leading-tight max-w-3xl mx-auto">
        Ready to Take Your Business
        <br className="hidden md:block" />
        to the <span className="underline decoration-primary-foreground/30 underline-offset-8">United States?</span>
      </h2>

      <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
        Join 10,000+ international founders who've already launched their U.S. company with Foundo.
        Start today — formation takes just minutes.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="rounded-full text-base px-10 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl">
          Start Your Business Now <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button variant="outline" size="lg" className="rounded-full text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
          See Pricing Plans
        </Button>
      </div>

      <p className="text-primary-foreground/40 text-sm mt-6">No credit card required • Start exploring for free</p>
    </div>
  </section>
);

export default MidCTASection;
