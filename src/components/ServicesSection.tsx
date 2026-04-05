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
  <section id="services" className="py-16 md:py-24 lg:py-28 bg-background relative">
    <div className="container mx-auto px-5 md:px-4">
      <div className="text-center max-w-xl mx-auto mb-10 md:mb-14">
        <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2 md:mb-3">Our Services</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 md:mb-4 font-display">
          Everything You Need to <span className="text-gradient">Start & Run</span> Your U.S. Business
        </h2>
        <p className="text-muted-foreground text-xs md:text-sm">From formation to payments — we handle it all.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {services.map((s, i) => (
          <div key={i} className="group p-5 md:p-6 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.04] transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-3 md:mb-4">
              <div className="h-10 md:h-11 w-10 md:w-11 rounded-xl bg-primary/[0.08] flex items-center justify-center group-hover:bg-primary/[0.12] transition-colors">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-primary transition-colors" />
            </div>
            <h3 className="font-bold text-sm md:text-base mb-1.5 md:mb-2 font-display">{s.title}</h3>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
