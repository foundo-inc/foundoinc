import { Button } from "@/components/ui/button";
import { Globe, Clock, ShieldCheck, HeadphonesIcon, DollarSign, Zap, ArrowRight } from "lucide-react";

const benefits = [
  { icon: Globe, title: "Built for Global Founders", desc: "Specifically designed for non-U.S. entrepreneurs. We understand the unique challenges of forming a business from abroad." },
  { icon: Clock, title: "Fast Turnaround", desc: "Get your LLC formed in as little as 1–3 business days. No long waits, no bureaucratic delays." },
  { icon: ShieldCheck, title: "Full Compliance", desc: "We ensure your business stays compliant with all U.S. federal and state regulations, year after year." },
  { icon: HeadphonesIcon, title: "Dedicated Support", desc: "Real humans, not chatbots. Get personalized support from experts who know international business formation." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "No hidden fees, no surprises. Know exactly what you're paying for from day one." },
  { icon: Zap, title: "All-in-One Platform", desc: "Formation, banking, payments, compliance, taxes — everything you need under one roof." },
];

const WhyFoundoSection = () => (
  <section id="why-foundo" className="py-28 md:py-36 bg-background relative overflow-hidden">
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_hsl(230,97%,46%,0.04)_0%,_transparent_70%)]" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* Left Side */}
        <div className="relative lg:sticky lg:top-32">
          <span className="absolute -top-10 -left-6 text-[220px] font-extrabold text-primary/[0.03] leading-none select-none font-display">1</span>
          <div className="relative">
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6 glow-blue-subtle">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Why Foundo</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 font-display leading-tight">
              We Don't Just Set Up
              <br />
              Your Business — We
              <br />
              Set You Up for <span className="text-gradient">Success.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              See how Foundo stacks up against doing it yourself or using traditional legal firms.
            </p>
            <Button size="lg" className="rounded-full shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 h-14 px-8">
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Right Side - Stacked benefit cards */}
        <div className="space-y-4">
          {benefits.map((b, i) => (
            <div key={i} className="group flex items-start gap-5 p-6 rounded-2xl bg-card card-hover card-hover-glow gradient-border">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <b.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 font-display group-hover:text-primary transition-colors">{b.title}</h3>
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
