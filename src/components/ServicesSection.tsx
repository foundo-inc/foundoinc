import { Building, FileText, Landmark, CreditCard, ShieldCheck, Calculator, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Building, title: "LLC Formation", desc: "Form your U.S. LLC from anywhere. We handle paperwork, state filings, and legal docs." },
  { icon: FileText, title: "EIN Registration", desc: "Get your Employer Identification Number fast. Required for banking, taxes, and hiring." },
  { icon: Landmark, title: "U.S. Business Banking", desc: "Open a U.S. business bank account remotely with top-tier banking partners." },
  { icon: CreditCard, title: "Payment Solutions", desc: "Unlock Stripe, PayPal, and global payment gateways for worldwide payments." },
  { icon: ShieldCheck, title: "Compliance & Agent", desc: "Stay compliant with annual reports, state filings, and dedicated registered agent." },
  { icon: Calculator, title: "Bookkeeping & Tax", desc: "Professional bookkeeping and tax prep by international business experts." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-24 lg:py-28 bg-background relative">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3 md:mb-4">Our Services</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-5 font-display leading-tight">
          Everything You Need to <span className="text-gradient">Start & Run</span> Your U.S. Business
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">From formation to payments — we handle it all.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {services.map((s, i) => (
          <div key={i} className="group p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.04] transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4 md:mb-5">
              <div className="h-12 md:h-14 w-12 md:w-14 rounded-xl bg-primary/[0.08] flex items-center justify-center group-hover:bg-primary/[0.12] transition-colors">
                <s.icon className="h-6 md:h-7 w-6 md:w-7 text-primary" />
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground/30 group-hover:text-primary transition-colors" />
            </div>
            <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3 font-display">{s.title}</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
