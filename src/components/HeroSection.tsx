import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";

const HeroSection = () => (
  <section className="relative hero-gradient pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15)_0%,_transparent_60%)]" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-6 animate-fade-up">
          <span className="text-primary-foreground/90 text-sm font-medium">🌍 Trusted by 2,000+ founders worldwide</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-6 animate-fade-up">
          Start Your U.S. Business<br />
          <span className="text-primary-foreground/80">From Anywhere</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-up-delay">
          LLC formation, EIN, and business bank account setup — all in one package. No U.S. address or SSN required. Starting at just $249.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
          <Button variant="heroOutline" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Start Your Business Today <ArrowRight className="ml-1 h-5 w-5" />
          </Button>
          <Button variant="heroOutline" size="xl">
            See How It Works
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-12 text-primary-foreground/70 text-sm">
          <div className="flex items-center gap-2"><Zap className="h-4 w-4" /> Ready in 3–5 days</div>
          <div className="flex items-center gap-2"><Shield className="h-4 w-4" /> 100% Compliant</div>
          <div className="flex items-center gap-2"><Globe className="h-4 w-4" /> 150+ Countries Served</div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
