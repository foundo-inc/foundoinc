import { MapPin, FileText, CalendarCheck, BadgeCheck, ArrowUpRight } from "lucide-react";

const solutions = [
  { icon: MapPin, title: "Premium Business Address", desc: "Prestigious address with suite number for credibility." },
  { icon: FileText, title: "ITIN Application", desc: "Access PayPal, Stripe, banking, and credit services." },
  { icon: CalendarCheck, title: "Annual Report Filing", desc: "Stay compliant and keep your company active." },
  { icon: BadgeCheck, title: "Seller Permit", desc: "Legally collect and remit sales tax." },
];

const SolutionSection = () => (
  <section className="py-16 md:py-24 lg:py-28 bg-background relative">
    <div className="container mx-auto px-5 md:px-4">
      <div className="max-w-xl mb-8 md:mb-14">
        <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2 md:mb-3">Solutions</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 md:mb-3 font-display">
          Built for how you <span className="text-gradient">do business</span>
        </h2>
        <p className="text-muted-foreground text-xs md:text-sm">Foundo adapts LLC setup and compliance to your model.</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {solutions.map((s, i) => (
          <div key={i} className="group p-4 md:p-6 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.04] transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-3 md:mb-4">
              <div className="h-9 md:h-10 w-9 md:w-10 rounded-lg bg-primary/[0.08] flex items-center justify-center group-hover:bg-primary/[0.12] transition-colors">
                <s.icon className="h-4 md:h-5 w-4 md:w-5 text-primary" />
              </div>
              <ArrowUpRight className="h-3.5 md:h-4 w-3.5 md:w-4 text-muted-foreground/30 group-hover:text-primary transition-colors" />
            </div>
            <h3 className="font-bold text-xs md:text-sm mb-1.5 md:mb-2 font-display">{s.title}</h3>
            <p className="text-muted-foreground text-[11px] md:text-xs leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
