import { Building, FileText, Landmark, CreditCard, ShieldCheck, Calculator } from "lucide-react";

const services = [
  { icon: Building, title: "LLC Formation", desc: "Form your U.S. LLC from anywhere in the world. We handle all the paperwork, state filings, and legal documentation.", gradient: "from-primary/15 to-primary/5" },
  { icon: FileText, title: "EIN Registration", desc: "Get your Employer Identification Number without the hassle. Required for banking, taxes, and hiring.", gradient: "from-primary/12 to-primary/4" },
  { icon: Landmark, title: "U.S. Business Banking", desc: "Open a U.S. business bank account remotely. Access top-tier banking partners with full support.", gradient: "from-primary/15 to-primary/5" },
  { icon: CreditCard, title: "Payment Solutions", desc: "Unlock Stripe, PayPal, and other global payment gateways. Accept payments worldwide.", gradient: "from-primary/12 to-primary/4" },
  { icon: ShieldCheck, title: "Compliance & Agent", desc: "Stay compliant with annual reports, state filings, and a dedicated registered agent.", gradient: "from-primary/15 to-primary/5" },
  { icon: Calculator, title: "Bookkeeping & Tax", desc: "Professional bookkeeping and tax prep by experts who understand international founders.", gradient: "from-primary/12 to-primary/4" },
];

const ServicesSection = () => (
  <section id="services" className="py-28 md:py-36 bg-background relative overflow-hidden">
    <div className="absolute inset-0 bg-dot-pattern" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6 glow-blue-subtle">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">Our Services</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          Everything You Need to
          <br className="hidden md:block" />
          <span className="text-gradient">Start & Run</span> Your U.S. Business
        </h2>
        <p className="text-muted-foreground text-lg">From formation to payments, we handle the complex stuff so you can focus on growth.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="group relative p-8 rounded-2xl bg-card card-hover card-hover-glow gradient-border overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="relative z-10">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3 font-display">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
