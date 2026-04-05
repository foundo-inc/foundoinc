import { MapPin, FileText, CalendarCheck, BadgeCheck, ArrowUpRight } from "lucide-react";

const solutions = [
  { icon: MapPin, title: "Premium Business Address", desc: "A prestigious business address with a unique suite number enhances credibility and ensures Amazon approval." },
  { icon: FileText, title: "ITIN Application", desc: "An ITIN is vital for non-residents to access PayPal, Stripe, banking, and credit for U.S.-based operations." },
  { icon: CalendarCheck, title: "Annual Report Filing", desc: "Filing annual reports keeps your business compliant and ensures your company remains active and recognized." },
  { icon: BadgeCheck, title: "Seller Permit", desc: "A seller permit authorizes collection and remittance of sales tax on taxable goods and services." },
];

const SolutionSection = () => (
  <section className="py-28 md:py-36 bg-background relative overflow-hidden">
    <div className="absolute inset-0 bg-dot-pattern" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-2xl mb-16">
        <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6 glow-blue-subtle">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">Solutions</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          Built for how you <span className="text-gradient">do business</span>
        </h2>
        <p className="text-muted-foreground text-lg">Different businesses need different structures. Foundo adapts to your model.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutions.map((s, i) => (
          <div key={i} className="group p-8 rounded-2xl bg-card card-hover card-hover-glow gradient-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3 font-display">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
              <a href="#" className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all duration-300">
                Learn more <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
