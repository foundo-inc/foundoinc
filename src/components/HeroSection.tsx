import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, DollarSign, Sparkles } from "lucide-react";

const stats = [
  { value: "10K+", label: "Companies Formed" },
  { value: "50+", label: "Countries Served" },
  { value: "24/7", label: "Expert Support" },
];

const logos = [
  "TechVentures", "GlobalFlow", "StartUp.io", "NexGen", "CloudBase", "FinBridge", "DataPulse", "ScaleUp"
];

const HeroSection = () => (
  <section className="relative bg-background pt-32 pb-20 overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_hsl(230,97%,46%,0.06)_0%,_transparent_70%)]" />
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_hsl(200,100%,50%,0.04)_0%,_transparent_70%)]" />
    <div className="absolute inset-0 bg-grid-pattern" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2.5 mb-8 glow-blue-subtle">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm font-semibold">IRS Certified Acceptance Agent</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-foreground leading-[1.05] mb-6 tracking-tight font-display">
            Launch Your
            <br />
            <span className="text-gradient">U.S. Company</span>
            <br />
            from Anywhere
          </h1>

          <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed animate-fade-up-delay">
            Form your U.S. company with EIN, ITIN, and business bank account.
            100% online with IRS Certified Acceptance Agent support.
          </p>

          <div className="flex items-center gap-6 mb-8 animate-fade-up-delay">
            {["100% Online", "Global Access", "Fully Compliant"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-foreground font-medium">
                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="h-3.5 w-3.5 text-primary" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-14 animate-fade-up-delay-2">
            <Button size="lg" className="rounded-full text-base px-8 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 h-14">
              Start Your Business <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full text-base border-primary/20 text-primary hover:bg-primary/5 h-14 hover:border-primary/40 transition-all duration-300">
              <DollarSign className="mr-1 h-4 w-4" /> Formation Cost
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 animate-fade-up-delay-3">
            {stats.map((s, i) => (
              <div key={i} className="relative">
                <p className="text-3xl font-extrabold text-foreground font-display">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
                {i < stats.length - 1 && <div className="absolute right-[-20px] top-1 h-10 w-px bg-border" />}
              </div>
            ))}
          </div>
        </div>

        {/* Right - Hero Visual */}
        <div className="relative hidden lg:flex justify-center items-center animate-fade-up-delay">
          <div className="relative w-[500px] h-[540px]">
            {/* Glow behind */}
            <div className="absolute inset-8 bg-primary/8 rounded-[2rem] blur-3xl" />
            {/* Background shape */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/5 via-transparent to-primary/3 border border-primary/10" />
            
            {/* Floating accent cards */}
            <div className="absolute top-6 right-6 glass-card rounded-2xl p-4 shadow-xl glow-sm animate-float gradient-border">
              <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
                <svg className="h-5 w-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <p className="text-xs font-semibold mt-2 text-foreground">LLC Filed</p>
              <p className="text-[10px] text-muted-foreground">Just now</p>
            </div>
            
            <div className="absolute top-[38%] -right-4 glass-card rounded-2xl p-4 shadow-xl glow-sm animate-float-delayed gradient-border">
              <div className="h-10 w-10 rounded-xl bg-primary/90 flex items-center justify-center">
                <svg className="h-5 w-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
              <p className="text-xs font-semibold mt-2 text-foreground">Bank Account</p>
              <p className="text-[10px] text-muted-foreground">Ready</p>
            </div>
            
            <div className="absolute bottom-20 -left-2 glass-card rounded-2xl p-4 shadow-xl glow-sm animate-float gradient-border">
              <div className="h-10 w-10 rounded-xl bg-primary/80 flex items-center justify-center">
                <svg className="h-5 w-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <p className="text-xs font-semibold mt-2 text-foreground">EIN Approved</p>
              <p className="text-[10px] text-primary font-semibold">✓ Verified</p>
            </div>

            {/* Center */}
            <div className="absolute inset-14 rounded-2xl bg-gradient-to-b from-primary/8 to-transparent flex items-center justify-center">
              <div className="text-center">
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-primary/15 to-primary/5 mx-auto mb-4 flex items-center justify-center ring-4 ring-primary/10 ring-offset-4 ring-offset-background">
                  <span className="text-6xl">👨‍💼</span>
                </div>
                <p className="text-sm text-muted-foreground font-semibold">Your Global Business</p>
                <p className="text-xs text-primary font-semibold">Starts Here →</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Marquee */}
      <div className="mt-24 pt-12 border-t border-border/50">
        <p className="text-center text-sm text-muted-foreground mb-10 font-medium">
          Trusted by over <span className="text-foreground font-semibold">600+</span> businesses worldwide
        </p>
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex items-center gap-16 animate-marquee">
            {[...logos, ...logos].map((logo, i) => (
              <span key={i} className="text-muted-foreground/30 font-bold text-xl font-display tracking-tight whitespace-nowrap hover:text-muted-foreground/50 transition-colors">{logo}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
