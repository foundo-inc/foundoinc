import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, DollarSign } from "lucide-react";

const stats = [
  { value: "10K+", label: "Companies Formed" },
  { value: "50+", label: "Countries Served" },
  { value: "24/7", label: "Support" },
];

const logos = [
  "TechVentures", "GlobalFlow", "StartUp.io", "NexGen", "CloudBase", "FinBridge", "DataPulse", "ScaleUp"
];

const HeroSection = () => (
  <section className="relative bg-background pt-28 pb-16 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-2 mb-8">
            <span className="text-primary text-sm font-semibold">🏛️ IRS Certified Acceptance Agent</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.08] mb-6 tracking-tight font-display">
            Launch Your
            <br />
            <span className="text-primary">U.S. Company</span>
            <br />
            from Anywhere
          </h1>

          <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
            Form your U.S. company with EIN, ITIN, and business bank account.
            100% online with IRS Certified Acceptance Agent support.
          </p>

          <div className="flex items-center gap-6 mb-8">
            {["100% Online", "Global Access", "Fully Compliant"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-foreground font-medium">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="rounded-full text-base px-8 shadow-lg shadow-primary/20">
              Start Your Business <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full text-base border-primary text-primary hover:bg-primary/5">
              <DollarSign className="mr-1 h-4 w-4" /> Formation Cost
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-10">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-3xl font-extrabold text-foreground font-display">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Hero Visual */}
        <div className="relative hidden lg:flex justify-center items-center">
          <div className="relative w-[480px] h-[520px]">
            {/* Background shape */}
            <div className="absolute inset-0 bg-primary/5 rounded-3xl" />
            {/* Floating accent cards */}
            <div className="absolute top-8 right-8 bg-primary text-primary-foreground rounded-2xl p-4 shadow-xl animate-float">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <div className="absolute top-1/3 right-0 bg-primary/90 text-primary-foreground rounded-2xl p-4 shadow-xl animate-float-delayed">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <div className="absolute bottom-16 left-4 bg-primary/80 text-primary-foreground rounded-2xl p-4 shadow-xl animate-float">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div className="absolute bottom-1/3 right-4 bg-primary/70 text-primary-foreground rounded-2xl p-4 shadow-xl animate-float-delayed">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            {/* Center person placeholder */}
            <div className="absolute inset-12 rounded-2xl bg-gradient-to-b from-primary/10 to-primary/5 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-5xl">👨‍💼</span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Your Global Business Starts Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Marquee */}
      <div className="mt-20 pt-12 border-t border-border">
        <p className="text-center text-sm text-muted-foreground mb-8 font-medium">
          Trusted by over 600+ businesses, from fast-growing startups to world-class institutions
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
          {logos.map((logo, i) => (
            <span key={i} className="text-muted-foreground/40 font-bold text-lg font-display tracking-tight">{logo}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
