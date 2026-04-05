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
  <section id="why-foundo" className="py-20 md:py-28 section-light">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why Foundo</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Why 2,000+ Founders Choose Foundo</h2>
        <p className="text-muted-foreground text-lg">We're not just a filing service — we're your partner in building a global business.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <div key={i} className="flex gap-4 p-6 rounded-2xl bg-card border hover:shadow-lg transition-all duration-300">
            <div className="h-10 w-10 rounded-lg hero-gradient flex items-center justify-center shrink-0">
              <b.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-bold mb-1">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyFoundoSection;
