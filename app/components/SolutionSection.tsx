import { MapPin, FileText, CalendarCheck, BadgeCheck, ArrowUpRight } from "lucide-react";

const solutions = [
  { icon: MapPin, title: "Premium Business Address", desc: "Prestigious address with suite number for credibility." },
  { icon: FileText, title: "ITIN Application", desc: "Access PayPal, Stripe, banking, and credit services." },
  { icon: CalendarCheck, title: "Annual Report Filing", desc: "Stay compliant and keep your company active." },
  { icon: BadgeCheck, title: "Seller Permit", desc: "Legally collect and remit sales tax." },
];

const SolutionSection = () => (
  <section className="py-20 md:py-28 lg:py-32 bg-background relative">
    <div className="container mx-auto px-5 md:px-4">
      <div className="max-w-2xl mb-10 md:mb-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3 md:mb-4">Solutions</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 md:mb-4 font-display leading-tight">
          Built for how you <span className="text-gradient">do business</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">Foundo adapts LLC setup and compliance to your model.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {solutions.map((s, i) => (
          <div key={i} className="group p-5 md:p-7 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.04] transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4 md:mb-5">
              <div className="h-11 md:h-13 w-11 md:w-13 rounded-lg bg-primary/[0.08] flex items-center justify-center group-hover:bg-primary/[0.12] transition-colors">
                <s.icon className="h-5 md:h-6 w-5 md:w-6 text-primary" />
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground/30 group-hover:text-primary transition-colors" />
            </div>
            <h3 className="font-bold text-base md:text-lg mb-2 font-display">{s.title}</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
