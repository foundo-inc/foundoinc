import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, DollarSign, Sparkles, Shield, Globe2, CreditCard } from "lucide-react";
import StatePricingModal from "@/components/StatePricingModal";

const stats = [
  { value: "10K+", label: "Companies Formed" },
  { value: "50+", label: "Countries Served" },
  { value: "24/7", label: "Expert Support" },
];

const logos = [
  "Stripe", "Mercury", "Wise", "PayPal", "Payoneer", "Relay", "Brex", "Shopify"
];

const HeroSection = () => {
  const [pricingOpen, setPricingOpen] = useState(false);

  return (
    <section className="relative bg-background pt-24 pb-12 md:pt-32 md:pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="absolute top-[-200px] right-[-200px] w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full bg-primary/[0.04] blur-3xl" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      <div className="container mx-auto px-5 md:px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/[0.06] border border-primary/10 rounded-full px-3 md:px-4 py-1.5 md:py-2 mb-5 md:mb-6 animate-fade-up">
              <Sparkles className="h-3 md:h-3.5 w-3 md:w-3.5 text-primary" />
              <span className="text-primary text-[11px] md:text-xs font-semibold tracking-wide">IRS Certified Acceptance Agent</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.25rem] xl:text-[3.75rem] font-extrabold text-foreground leading-none mb-2 md:mb-3 tracking-tighter font-display animate-fade-up">
              Turn Your Idea into a <span className="text-gradient">U.S. Company</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-muted-foreground tracking-normal mb-4 md:mb-5 animate-fade-up">Foundo for Founders</p>

            <p className="text-muted-foreground text-sm md:text-base lg:text-lg mb-5 md:mb-6 max-w-md leading-relaxed animate-fade-up-delay">
              Form your U.S. company with EIN, ITIN, and business bank account.
              100% online with expert support at every step.
            </p>

            <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-5 md:mb-6 animate-fade-up-delay">
              {["100% Online", "Global Access", "Fully Compliant"].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs md:text-sm text-foreground/80">
                  <CheckCircle className="h-3.5 md:h-4 w-3.5 md:w-4 text-primary" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-8 md:mb-10 animate-fade-up-delay-2">
              <Button size="lg" className="rounded-full text-xs md:text-sm font-semibold px-6 md:px-7 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 h-11 md:h-12">
                Start Your Business <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full text-xs md:text-sm font-semibold border-border text-foreground hover:bg-muted/50 h-11 md:h-12 transition-all duration-300" onClick={() => setPricingOpen(true)}>
                <DollarSign className="mr-1 h-4 w-4" /> See Formation Cost
              </Button>
            </div>

            <div className="flex gap-6 md:gap-8 animate-fade-up-delay-3">
              {stats.map((s, i) => (
                <div key={i} className="relative">
                  <p className="text-xl md:text-2xl lg:text-3xl font-extrabold text-foreground font-display leading-tight">{s.value}</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5">{s.label}</p>
                  {i < stats.length - 1 && <div className="absolute -right-3 md:-right-4 top-1 h-7 md:h-8 w-px bg-border" />}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Dashboard Preview */}
          <div className="relative hidden lg:block animate-fade-up-delay">
            <div className="relative">
              <div className="rounded-2xl border border-border bg-card shadow-2xl shadow-primary/[0.06] p-5 xl:p-6">
                <div className="flex items-center gap-2 mb-4 xl:mb-5">
                  <div className="h-3 w-3 rounded-full bg-destructive/40" />
                  <div className="h-3 w-3 rounded-full bg-warning/40" />
                  <div className="h-3 w-3 rounded-full bg-success/40" />
                  <div className="flex-1" />
                  <div className="h-6 w-24 rounded-md bg-muted" />
                </div>

                <div className="grid grid-cols-3 gap-2 xl:gap-3 mb-3 xl:mb-4">
                  <div className="rounded-xl bg-primary/[0.06] border border-primary/10 p-3 xl:p-4">
                    <Shield className="h-4 xl:h-5 w-4 xl:w-5 text-primary mb-2" />
                    <p className="text-[11px] xl:text-xs font-semibold text-foreground">LLC Status</p>
                    <p className="text-[10px] text-primary font-bold mt-1">✓ Approved</p>
                  </div>
                  <div className="rounded-xl bg-primary/[0.06] border border-primary/10 p-3 xl:p-4">
                    <Globe2 className="h-4 xl:h-5 w-4 xl:w-5 text-primary mb-2" />
                    <p className="text-[11px] xl:text-xs font-semibold text-foreground">EIN Number</p>
                    <p className="text-[10px] text-muted-foreground mt-1">XX-XXXXXXX</p>
                  </div>
                  <div className="rounded-xl bg-primary/[0.06] border border-primary/10 p-3 xl:p-4">
                    <CreditCard className="h-4 xl:h-5 w-4 xl:w-5 text-primary mb-2" />
                    <p className="text-[11px] xl:text-xs font-semibold text-foreground">Bank</p>
                    <p className="text-[10px] text-primary font-bold mt-1">✓ Connected</p>
                  </div>
                </div>

                <div className="rounded-xl bg-muted/50 border border-border p-3 xl:p-4 mb-3 xl:mb-4">
                  <p className="text-[11px] xl:text-xs font-semibold text-foreground mb-2.5 xl:mb-3">Formation Progress</p>
                  <div className="space-y-2 xl:space-y-2.5">
                    {[
                      { label: "Company Registration", done: true },
                      { label: "EIN Application", done: true },
                      { label: "Bank Account Setup", done: true },
                      { label: "Payment Gateway", active: true },
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-2 xl:gap-2.5">
                        <div className={`h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                          step.done ? "bg-primary text-primary-foreground" : step.active ? "bg-primary/20 text-primary ring-2 ring-primary/30" : "bg-muted text-muted-foreground"
                        }`}>
                          {step.done ? "✓" : i + 1}
                        </div>
                        <span className={`text-[11px] xl:text-xs ${step.done ? "text-foreground font-medium" : step.active ? "text-primary font-semibold" : "text-muted-foreground"}`}>{step.label}</span>
                        {step.active && <span className="ml-auto text-[10px] text-primary font-semibold animate-pulse-soft">In Progress</span>}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-primary/[0.04] border border-primary/10 p-2.5 xl:p-3">
                  <div className="h-7 xl:h-8 w-7 xl:w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-3.5 xl:h-4 w-3.5 xl:w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] xl:text-xs font-semibold text-foreground">Stripe activated</p>
                    <p className="text-[10px] text-muted-foreground">Ready to accept payments</p>
                  </div>
                  <span className="ml-auto text-[10px] text-primary font-bold">Just now</span>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-2.5 xl:p-3 shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <div className="h-6 xl:h-7 w-6 xl:w-7 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-3.5 xl:h-4 w-3.5 xl:w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] xl:text-[11px] font-semibold text-foreground">LLC Approved!</p>
                    <p className="text-[9px] text-muted-foreground">Wyoming • 2 min ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 lg:mt-24 pt-8 md:pt-10 border-t border-border/50">
          <p className="text-center text-[10px] md:text-xs text-muted-foreground mb-6 md:mb-8 font-medium tracking-wide uppercase">
            Trusted by <span className="text-foreground font-semibold">600+</span> businesses worldwide
          </p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-20 bg-gradient-to-l from-background to-transparent z-10" />
            <div className="flex items-center gap-8 md:gap-14 animate-marquee">
              {[...logos, ...logos].map((logo, i) => (
                <span key={i} className="text-muted-foreground/25 font-bold text-sm md:text-lg font-display tracking-tight whitespace-nowrap">{logo}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <StatePricingModal open={pricingOpen} onOpenChange={setPricingOpen} />
    </section>
  );
};

export default HeroSection;
