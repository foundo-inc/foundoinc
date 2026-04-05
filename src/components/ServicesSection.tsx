import { Building, CreditCard, FileText, MapPin, ScrollText, ShieldCheck } from "lucide-react";

const services = [
  { icon: Building, title: "LLC Formation", desc: "Full company registration in your preferred state with all necessary filings.", gradient: "from-blue-500/10 to-indigo-500/10" },
  { icon: FileText, title: "EIN (Tax ID)", desc: "We obtain your Employer Identification Number — no SSN needed.", gradient: "from-violet-500/10 to-purple-500/10" },
  { icon: CreditCard, title: "Bank Account Support", desc: "Step-by-step guidance to open a U.S. business bank account remotely.", gradient: "from-emerald-500/10 to-teal-500/10" },
  { icon: MapPin, title: "Registered Agent", desc: "A compliant registered agent in your chosen state for the first year.", gradient: "from-amber-500/10 to-orange-500/10" },
  { icon: ScrollText, title: "Operating Agreement", desc: "Professionally drafted Operating Agreement tailored to your LLC.", gradient: "from-rose-500/10 to-pink-500/10" },
  { icon: ShieldCheck, title: "Compliance Support", desc: "Annual report reminders and ongoing compliance guidance.", gradient: "from-cyan-500/10 to-sky-500/10" },
];

const ServicesSection = () => (
  <section id="services" className="py-24 md:py-32 relative">
    <div className="absolute inset-0 mesh-gradient" />
    <div className="container mx-auto px-4 relative">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Services
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          Everything Included
          <br />
          <span className="text-gradient">In One Package</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">No hidden fees. No surprises. Just a complete package to launch your U.S. business.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <div key={i} className="group p-8 rounded-3xl bg-card border border-border/60 card-hover shine">
            <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
              <s.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2 font-display">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
