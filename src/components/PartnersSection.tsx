import { CreditCard, Landmark, ShieldCheck, Globe } from "lucide-react";

const partners = [
  { icon: CreditCard, name: "Stripe", desc: "Accept online payments globally with the world's leading payment processor." },
  { icon: CreditCard, name: "PayPal", desc: "Receive payments from 200+ countries with one of the most trusted platforms." },
  { icon: Landmark, name: "Mercury", desc: "Modern business banking built for startups. Open your account 100% remotely." },
  { icon: Landmark, name: "Relay", desc: "Fee-free business banking with powerful expense management tools." },
  { icon: Globe, name: "Wise", desc: "Multi-currency accounts to send and receive money internationally with low fees." },
  { icon: ShieldCheck, name: "Payoneer", desc: "Get paid globally and manage funds across borders with ease." },
];

const PartnersSection = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">INTEGRATIONS</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          Banking & Payment <span className="text-primary">Partners</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          We connect you with the best banking and payment platforms so you can start transacting from day one.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {partners.map((p, i) => (
          <div key={i} className="flex items-start gap-5 p-6 rounded-2xl border border-border bg-card hover:shadow-md hover:shadow-primary/5 transition-all duration-300 group hover:-translate-y-1">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
              <p.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1 font-display">{p.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
