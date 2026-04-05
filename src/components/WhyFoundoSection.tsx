import { Clock, DollarSign, Headphones, ShieldCheck, Star, Users } from "lucide-react";

const benefits = [
  { icon: DollarSign, title: "Transparent Pricing", desc: "Flat $249 + state fee. No hidden costs, no upsells." },
  { icon: Clock, title: "Fast Turnaround", desc: "Your LLC is ready in 3–5 business days, not weeks." },
  { icon: ShieldCheck, title: "100% Compliant", desc: "We ensure every filing meets state and federal requirements." },
  { icon: Users, title: "Built for Global Founders", desc: "Designed specifically for non-residents. No SSN or U.S. visit needed." },
  { icon: Headphones, title: "Dedicated Support", desc: "Real humans who understand international business challenges." },
  { icon: Star, title: "All-In-One Platform", desc: "Formation, EIN, banking, and compliance — all under one roof." },
];

const WhyFoundoSection = () => (
  <section id="why-foundo" className="py-24 md:py-32 section-alt">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Why Foundo</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          Why 2,000+ Founders <br className="hidden md:block" />
          <span className="text-gradient">Choose Foundo</span>
        </h2>
        <p className="text-muted-foreground text-lg">We're not just a filing service — we're your partner in building a global business.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <div key={i} className="group p-8 rounded-2xl border border-border bg-card card-hover">
            <div className="h-12 w-12 rounded-xl hero-gradient-2 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
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
