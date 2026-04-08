import { Button } from "@/components/ui/button";
import { Globe, Clock, ShieldCheck, HeadphonesIcon, DollarSign, Zap, ArrowRight } from "lucide-react";

const benefits = [
  { icon: Globe, title: "Built for Global Founders", desc: "Designed for non-U.S. entrepreneurs. We understand forming a business from abroad." },
  { icon: Clock, title: "Fast Turnaround", desc: "Get your LLC formed in 1–3 business days. No long waits or delays." },
  { icon: ShieldCheck, title: "Full Compliance", desc: "Stay compliant with all U.S. federal and state regulations, year after year." },
  { icon: HeadphonesIcon, title: "Dedicated Support", desc: "Real humans, not chatbots. Personalized expert support." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "No hidden fees, no surprises. Know exactly what you pay." },
  { icon: Zap, title: "All-in-One Platform", desc: "Formation, banking, payments, compliance — everything under one roof." },
];

const WhyFoundoSection = () => (
  <section id="why-foundo" className="py-20 md:py-24 lg:py-28 bg-background relative">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3 md:mb-4">Why Foundo</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-5 font-display leading-tight">
            We Don't Just Set Up Your Business — We Set You Up for{" "}
            <span className="text-gradient">Success.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-lg">
            See how Foundo stacks up against doing it yourself or using traditional legal firms.
          </p>
          <Button size="lg" className="rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 h-12 md:h-14 px-7 md:px-8 text-sm md:text-base font-semibold">
            Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-3 md:space-y-4">
          {benefits.map((b, i) => (
            <div key={i} className="group flex items-start gap-4 md:gap-5 p-5 md:p-6 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-md hover:shadow-primary/[0.03] transition-all duration-300">
              <div className="h-11 md:h-12 w-11 md:w-12 rounded-lg bg-primary/[0.08] flex items-center justify-center shrink-0 group-hover:bg-primary/[0.12] transition-colors">
                <b.icon className="h-5 md:h-6 w-5 md:w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-base md:text-lg mb-1 font-display">{b.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyFoundoSection;
