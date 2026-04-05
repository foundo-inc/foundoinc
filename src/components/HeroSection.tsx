import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-foreground">
    {/* Subtle radial accents */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />

    <div className="container mx-auto px-4 relative z-10 pt-24 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-primary-foreground/10 bg-primary-foreground/5 rounded-full px-5 py-2 mb-10 animate-fade-up">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-primary-foreground/70 text-sm font-medium">Trusted by 2,000+ founders worldwide</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-primary-foreground leading-[1.08] mb-8 animate-fade-up tracking-tight">
          Start Your U.S.
          <br />
          Business From
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Anywhere</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/50 max-w-2xl mx-auto mb-12 animate-fade-up-delay leading-relaxed font-light">
          LLC formation, EIN, and business bank account — all in one package.
          <br className="hidden md:block" />
          No U.S. address or SSN required. Starting at just <span className="text-primary-foreground font-semibold">$249</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
          <Button size="xl" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl text-base px-8 shadow-xl shadow-primary/30">
            Start Your Business Today <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="xl" className="rounded-xl text-base border-primary-foreground/20 text-primary-foreground/80 hover:bg-primary-foreground/5 hover:text-primary-foreground bg-transparent">
            See How It Works
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-20 animate-fade-up-delay-3">
          {[
            { icon: Zap, label: "Ready in 3–5 days" },
            { icon: Shield, label: "100% Compliant" },
            { icon: Globe, label: "150+ Countries Served" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 text-primary-foreground/40 text-sm">
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
