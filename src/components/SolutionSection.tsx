import { MapPin, FileText, CalendarCheck, BadgeCheck } from "lucide-react";

const solutions = [
  { icon: MapPin, title: "Premium Business Address", desc: "A prestigious business address with a unique suite number enhances credibility, ensures Amazon approval, simplifies verification, and supports regulatory compliance for professional business operations." },
  { icon: FileText, title: "ITIN Application", desc: "An ITIN is vital for non-residents to access financial services like PayPal, Stripe, banking, and credit, empowering seamless U.S.-based business operations and transactions." },
  { icon: CalendarCheck, title: "Annual Report Filing", desc: "Filing annual reports keeps your business compliant, avoids penalties, maintains good standing with authorities, and ensures your company remains active and legally recognized by the state." },
  { icon: BadgeCheck, title: "Seller Permit", desc: "A seller permit is essential for compliance, allowing retailers to operate legally. It authorizes the collection and remittance of sales tax on taxable goods and services." },
];

const SolutionSection = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">SOLUTIONS</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          Built for how you do business
        </h2>
        <p className="text-muted-foreground text-lg">Different businesses need different structures. Foundo adapts LLC setup and compliance to your business model.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutions.map((s, i) => (
          <div key={i} className="p-8 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow group">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-3 font-display">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
            <a href="#" className="text-primary text-sm font-semibold hover:underline">Learn more →</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
