import { Building, FileText, Landmark, CreditCard, ShieldCheck, Calculator } from "lucide-react";

const services = [
  { icon: Building, title: "LLC Formation", desc: "Form your U.S. LLC from anywhere in the world. We handle all the paperwork, state filings, and legal documentation so you can focus on your business." },
  { icon: FileText, title: "EIN Registration", desc: "Get your Employer Identification Number without the hassle. Required for banking, taxes, and hiring — we make it seamless." },
  { icon: Landmark, title: "U.S. Business Banking", desc: "Open a U.S. business bank account remotely. Access top-tier banking partners with full support throughout the process." },
  { icon: CreditCard, title: "Payment Solutions", desc: "Unlock Stripe, PayPal, and other global payment gateways. Accept payments from customers worldwide with your U.S. entity." },
  { icon: ShieldCheck, title: "Compliance & Registered Agent", desc: "Stay compliant with annual reports, state filings, and a dedicated registered agent. We ensure you never miss a deadline." },
  { icon: Calculator, title: "Bookkeeping & Tax Filing", desc: "Professional bookkeeping and tax preparation by experts who understand international founders and cross-border compliance." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">OUR SERVICES</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          Everything You Need to Start
          <br className="hidden md:block" />
          & Run Your U.S. Business
        </h2>
        <p className="text-muted-foreground text-lg">From formation to payments, we handle the complex stuff so you can focus on growth.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="group p-8 rounded-2xl border border-border bg-card hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
            <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
              <s.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-bold text-xl mb-3 font-display">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
