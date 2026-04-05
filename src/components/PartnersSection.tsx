import { CreditCard, Landmark, ShieldCheck, Globe } from "lucide-react";

const partners = [
  { icon: CreditCard, name: "Stripe", desc: "Accept online payments globally." },
  { icon: CreditCard, name: "PayPal", desc: "Payments from 200+ countries." },
  { icon: Landmark, name: "Mercury", desc: "Modern banking for startups." },
  { icon: Landmark, name: "Relay", desc: "Fee-free business banking." },
  { icon: Globe, name: "Wise", desc: "Multi-currency, low fees." },
  { icon: ShieldCheck, name: "Payoneer", desc: "Global payment management." },
];

const PartnersSection = () => (
  <section className="py-20 md:py-28 bg-background relative">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-xl mx-auto mb-14">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Integrations</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 font-display">
          Banking & Payment <span className="text-gradient">Partners</span>
        </h2>
        <p className="text-muted-foreground text-sm">Connect with the best platforms from day one.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {partners.map((p, i) => (
          <div key={i} className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-md hover:shadow-primary/[0.03] transition-all duration-300">
            <div className="h-10 w-10 rounded-lg bg-primary/[0.08] flex items-center justify-center shrink-0 group-hover:bg-primary/[0.12] transition-colors">
              <p.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-sm font-display">{p.name}</h3>
              <p className="text-muted-foreground text-[11px]">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
