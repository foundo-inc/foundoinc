import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Shield, Zap, Sparkles } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-[100vh] flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 hero-gradient" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.15)_0%,_transparent_50%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(0,0,0,0.2)_0%,_transparent_50%)]" />

    {/* Floating orbs */}
    <div className="absolute top-20 right-[15%] w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl animate-float" />
    <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-float-delayed" />

    {/* Grid pattern */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

    <div className="container mx-auto px-4 relative z-10 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-5 py-2 mb-8 animate-fade-up">
          <Sparkles className="h-4 w-4 text-primary-foreground/80" />
          <span className="text-primary-foreground/90 text-sm font-medium">Trusted by 2,000+ founders from 150+ countries</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary-foreground leading-[1.05] mb-8 animate-fade-up tracking-tight">
          Start Your U.S.
          <br />
          Business From
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">Anywhere</span>
            <span className="absolute -bottom-2 left-0 right-0 h-4 bg-primary-foreground/20 rounded-full -skew-x-3" />
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-up-delay leading-relaxed">
          LLC formation, EIN, and business bank account — all in one package.
          <br className="hidden md:block" />
          No U.S. address or SSN required. Starting at just <strong className="text-primary-foreground">$249</strong>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-2">
          <Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-2xl shadow-2xl shadow-black/20 text-base">
            Start Your Business Today <ArrowRight className="ml-1 h-5 w-5" />
          </Button>
          <Button variant="heroOutline" size="xl" className="rounded-2xl text-base">
            See How It Works
          </Button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-16 animate-fade-up-delay-3">
          {[
            { icon: Zap, label: "Ready in 3–5 days" },
            { icon: Shield, label: "100% Compliant" },
            { icon: Globe, label: "150+ Countries Served" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 text-primary-foreground/60 text-sm">
              <div className="h-8 w-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <item.icon className="h-4 w-4 text-primary-foreground/70" />
              </div>
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
