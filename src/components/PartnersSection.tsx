import { CreditCard, Landmark, ShieldCheck, Globe } from "lucide-react";

const partners = [
  { icon: CreditCard, name: "Stripe", desc: "Accept online payments globally with the world's leading processor." },
  { icon: CreditCard, name: "PayPal", desc: "Receive payments from 200+ countries with trusted platform." },
  { icon: Landmark, name: "Mercury", desc: "Modern business banking built for startups. 100% remote." },
  { icon: Landmark, name: "Relay", desc: "Fee-free banking with powerful expense management." },
  { icon: Globe, name: "Wise", desc: "Multi-currency accounts with low international fees." },
  { icon: ShieldCheck, name: "Payoneer", desc: "Get paid globally and manage funds across borders." },
];

const PartnersSection = () => (
  <section className="py-28 md:py-36 section-alt relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-pattern" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6 glow-blue-subtle">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">Integrations</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          Banking & Payment <span className="text-gradient">Partners</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Connect with the best platforms to start transacting from day one.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {partners.map((p, i) => (
          <div key={i} className="group flex items-start gap-5 p-6 rounded-2xl bg-card card-hover card-hover-glow gradient-border">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              <p.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1 font-display group-hover:text-primary transition-colors">{p.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
