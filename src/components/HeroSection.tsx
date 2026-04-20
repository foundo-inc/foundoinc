import { useState } from "react";
import StatePricingModal from "./StatePricingModal";
import { ArrowRight, ChevronRight, CheckCircle, Shield, Clock, DollarSign, Sparkles, Globe2, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

import mercuryLogo from "@/assets/partners/mercury.svg";
import airwallexLogo from "@/assets/partners/airwallex.svg";
import payoneerLogo from "@/assets/partners/payoneer.svg";
import openphoneLogo from "@/assets/partners/openphone.svg";



const features = [
  { icon: Shield, text: "Full legal compliance" },
  { icon: Clock, text: "Ready in 1–3 days" },
  { icon: DollarSign, text: "All-inclusive pricing" },
];

const stats = [
  { value: "500+", label: "Companies Formed" },
  { value: "50+", label: "Countries" },
  { value: "$2B+", label: "Revenue Processed" },
];

const partnerLogos = [
  { name: "Mercury", logo: mercuryLogo },
  { name: "Airwallex", logo: airwallexLogo },
  { name: "Payoneer", logo: payoneerLogo },
  { name: "OpenPhone", logo: openphoneLogo },
];

const HeroSection = () => {
  const [pricingOpen, setPricingOpen] = useState(false);

  return (
    <section className="relative bg-background pt-28 pb-14 md:pt-36 md:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute top-[-200px] right-[-200px] w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full bg-primary/[0.04] blur-3xl" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/[0.06] border border-primary/10 rounded-full px-4 py-2 mb-6 md:mb-8 animate-fade-up">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-primary text-sm font-semibold tracking-wide">IRS Certified Acceptance Agent</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold text-foreground leading-none mb-3 md:mb-4 tracking-tighter font-display animate-fade-up">
              Turn Your Idea into a <span className="text-gradient">U.S. Company</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-muted-foreground tracking-normal mb-5 md:mb-6 animate-fade-up">Foundo for Founders</p>

            <p className="text-muted-foreground text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-lg leading-relaxed animate-fade-up-delay">
              Form your U.S. company with EIN, ITIN, and business bank account.
              100% online with expert support at every step.
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-5 mb-6 md:mb-8 animate-fade-up-delay">
              {["100% Online", "Global Access", "Fully Compliant"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm md:text-base text-foreground/80">
                  <CheckCircle className="h-4 md:h-5 w-4 md:w-5 text-primary" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-10 md:mb-12 animate-fade-up-delay-2">
              <Button size="lg" className="rounded-full text-sm md:text-base font-semibold px-6 md:px-8 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 h-12 md:h-14" asChild>
                <a href="/dashboard">Start Your Business <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5 shrink-0" /></a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full text-sm md:text-base font-semibold border-border text-foreground hover:bg-muted/50 h-12 md:h-14 px-5 md:px-8 transition-all duration-300" onClick={() => setPricingOpen(true)}>
                <DollarSign className="mr-1 h-4 md:h-5 w-4 md:w-5 shrink-0" /> See Formation Cost
              </Button>
            </div>

            <div className="flex gap-8 md:gap-10 animate-fade-up-delay-3">
              {stats.map((s, i) => (
                <div key={i} className="relative">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground font-display leading-tight">{s.value}</p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</p>
                  {i < stats.length - 1 && <div className="absolute -right-4 md:-right-5 top-1 h-10 w-px bg-border" />}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Dashboard Preview */}
          <div className="relative hidden lg:block animate-fade-up-delay">
            <div className="relative">
              <div className="rounded-2xl border border-border bg-card shadow-2xl shadow-primary/[0.06] p-6 xl:p-8">
                <div className="flex items-center gap-2 mb-5 xl:mb-6">
                  <div className="h-3 w-3 rounded-full bg-destructive/40" />
                  <div className="h-3 w-3 rounded-full bg-warning/40" />
                  <div className="h-3 w-3 rounded-full bg-success/40" />
                  <div className="flex-1" />
                  <div className="h-6 w-28 rounded-md bg-muted" />
                </div>

                <div className="grid grid-cols-3 gap-3 xl:gap-4 mb-4 xl:mb-5">
                  <div className="rounded-xl bg-primary/[0.06] border border-primary/10 p-4 xl:p-5">
                    <Shield className="h-5 xl:h-6 w-5 xl:w-6 text-primary mb-2" />
                    <p className="text-sm font-semibold text-foreground">LLC Status</p>
                    <p className="text-xs text-primary font-bold mt-1">✓ Approved</p>
                  </div>
                  <div className="rounded-xl bg-primary/[0.06] border border-primary/10 p-4 xl:p-5">
                    <Globe2 className="h-5 xl:h-6 w-5 xl:w-6 text-primary mb-2" />
                    <p className="text-sm font-semibold text-foreground">EIN Number</p>
                    <p className="text-xs text-muted-foreground mt-1">XX-XXXXXXX</p>
                  </div>
                  <div className="rounded-xl bg-primary/[0.06] border border-primary/10 p-4 xl:p-5">
                    <CreditCard className="h-5 xl:h-6 w-5 xl:w-6 text-primary mb-2" />
                    <p className="text-sm font-semibold text-foreground">Bank</p>
                    <p className="text-xs text-primary font-bold mt-1">✓ Connected</p>
                  </div>
                </div>

                <div className="rounded-xl bg-muted/50 border border-border p-4 xl:p-5 mb-4 xl:mb-5">
                  <p className="text-sm font-semibold text-foreground mb-3">Formation Progress</p>
                  <div className="space-y-3">
                    {[
                      { label: "Company Registration", done: true },
                      { label: "EIN Application", done: true },
                      { label: "Bank Account Setup", done: true },
                      { label: "Payment Gateway", active: true },
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          step.done ? "bg-primary text-primary-foreground" : step.active ? "bg-primary/20 text-primary ring-2 ring-primary/30" : "bg-muted text-muted-foreground"
                        }`}>
                          {step.done ? "✓" : i + 1}
                        </div>
                        <span className={`text-sm ${step.done ? "text-foreground font-medium" : step.active ? "text-primary font-semibold" : "text-muted-foreground"}`}>{step.label}</span>
                        {step.active && <span className="ml-auto text-xs text-primary font-semibold animate-pulse-soft">In Progress</span>}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-primary/[0.04] border border-primary/10 p-4">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Stripe activated</p>
                    <p className="text-xs text-muted-foreground">Ready to accept payments</p>
                  </div>
                  <span className="ml-auto text-xs text-primary font-bold">Just now</span>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-3 shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">LLC Approved!</p>
                    <p className="text-xs text-muted-foreground">Wyoming • 2 min ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 md:mt-20 lg:mt-28 pt-10 border-t border-border/50">
          <p className="text-center text-sm text-muted-foreground mb-8 font-medium tracking-wide uppercase">
            Our Strategic Partners and Affiliates
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
            {partnerLogos.map((p) => (
              <div key={p.name} className="flex items-center justify-center w-[100px] sm:w-[140px] md:w-[160px] h-[28px] sm:h-[32px] md:h-[36px]">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="w-full h-full object-contain opacity-40 hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <StatePricingModal open={pricingOpen} onOpenChange={setPricingOpen} />
    </section>
  );
};

export default HeroSection;
