import { Button } from "@/components/ui/button";
import { Globe, Clock, ShieldCheck, HeadphonesIcon, DollarSign, Zap } from "lucide-react";

const benefits = [
  { icon: Globe, title: "Built for Global Founders", desc: "Specifically designed for non-U.S. entrepreneurs. We understand the unique challenges of forming a business from abroad." },
  { icon: Clock, title: "Fast Turnaround", desc: "Get your LLC formed in as little as 1–3 business days. No long waits, no bureaucratic delays." },
  { icon: ShieldCheck, title: "Full Compliance", desc: "We ensure your business stays compliant with all U.S. federal and state regulations, year after year." },
  { icon: HeadphonesIcon, title: "Dedicated Support", desc: "Real humans, not chatbots. Get personalized support from experts who know international business formation." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "No hidden fees, no surprises. Know exactly what you're paying for from day one." },
  { icon: Zap, title: "All-in-One Platform", desc: "Formation, banking, payments, compliance, taxes — everything you need under one roof." },
];

const WhyFoundoSection = () => (
  <section id="why-foundo" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Side */}
        <div className="relative">
          <span className="absolute -top-8 -left-4 text-[200px] font-extrabold text-primary/5 leading-none select-none font-display">1</span>
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">WHY FOUNDO</p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 font-display leading-tight">
              We Don't Just Set Up
              <br />
              Your Business — We
              <br />
              Set You Up for <span className="text-primary">Success.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              See how Foundo stacks up against doing it yourself or using traditional legal firms.
            </p>
            <Button size="lg" className="rounded-full shadow-lg shadow-primary/20">
              Get Started Today
            </Button>
          </div>
        </div>

        {/* Right Side - Stacked benefit cards */}
        <div className="space-y-4">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-5 p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <b.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 font-display">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyFoundoSection;
