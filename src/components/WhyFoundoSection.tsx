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
  <section id="why-foundo" className="py-16 md:py-24 lg:py-28 bg-background relative">
    <div className="container mx-auto px-5 md:px-4">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2 md:mb-3">Why Foundo</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 md:mb-4 font-display leading-tight">
            We Don't Just Set Up Your Business — We Set You Up for{" "}
            <span className="text-gradient">Success.</span>
          </h2>
          <p className="text-muted-foreground text-xs md:text-sm mb-5 md:mb-6 leading-relaxed max-w-md">
            See how Foundo stacks up against doing it yourself or using traditional legal firms.
          </p>
          <Button size="lg" className="rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 h-11 md:h-12 px-6 md:px-7 text-xs md:text-sm font-semibold">
            Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-2.5 md:space-y-3">
          {benefits.map((b, i) => (
            <div key={i} className="group flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-md hover:shadow-primary/[0.03] transition-all duration-300">
              <div className="h-9 md:h-10 w-9 md:w-10 rounded-lg bg-primary/[0.08] flex items-center justify-center shrink-0 group-hover:bg-primary/[0.12] transition-colors">
                <b.icon className="h-4 md:h-5 w-4 md:w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-xs md:text-sm mb-0.5 font-display">{b.title}</h3>
                <p className="text-muted-foreground text-[11px] md:text-xs leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyFoundoSection;
