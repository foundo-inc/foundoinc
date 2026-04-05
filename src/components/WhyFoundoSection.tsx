import { Clock, DollarSign, Headphones, ShieldCheck, Star, Users } from "lucide-react";

const benefits = [
  { icon: DollarSign, title: "Transparent Pricing", desc: "Flat $249 + state fee. No hidden costs, no upsells.", num: "01" },
  { icon: Clock, title: "Fast Turnaround", desc: "Your LLC is ready in 3–5 business days, not weeks.", num: "02" },
  { icon: ShieldCheck, title: "100% Compliant", desc: "We ensure every filing meets state and federal requirements.", num: "03" },
  { icon: Users, title: "Built for Global Founders", desc: "Designed specifically for non-residents. No SSN or U.S. visit needed.", num: "04" },
  { icon: Headphones, title: "Dedicated Support", desc: "Real humans who understand international business challenges.", num: "05" },
  { icon: Star, title: "All-In-One Platform", desc: "Formation, EIN, banking, and compliance — all under one roof.", num: "06" },
];

const WhyFoundoSection = () => (
  <section id="why-foundo" className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 section-light" />
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
    <div className="container mx-auto px-4 relative">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Why Foundo
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          Why 2,000+ Founders
          <br />
          <span className="text-gradient">Choose Foundo</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">We're not just a filing service — we're your partner in building a global business.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {benefits.map((b, i) => (
          <div key={i} className="group p-8 rounded-3xl bg-card border border-border/60 card-hover relative overflow-hidden">
            <span className="absolute top-6 right-6 text-5xl font-extrabold text-primary/5 font-display">{b.num}</span>
            <div className="h-12 w-12 rounded-2xl hero-gradient-2 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-primary/20">
              <b.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-bold text-lg mb-2 font-display">{b.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyFoundoSection;
