import { Building, CreditCard, FileText, MapPin, ScrollText, ShieldCheck } from "lucide-react";

const services = [
  { icon: Building, title: "LLC Formation", desc: "Full company registration in your preferred state with all necessary filings." },
  { icon: FileText, title: "EIN (Tax ID)", desc: "We obtain your Employer Identification Number — no SSN needed." },
  { icon: CreditCard, title: "Bank Account Support", desc: "Step-by-step guidance to open a U.S. business bank account remotely." },
  { icon: MapPin, title: "Registered Agent", desc: "A compliant registered agent in your chosen state for the first year." },
  { icon: ScrollText, title: "Operating Agreement", desc: "Professionally drafted Operating Agreement tailored to your LLC." },
  { icon: ShieldCheck, title: "Compliance Support", desc: "Annual report reminders and ongoing compliance guidance." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Services</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Everything Included in One Package</h2>
        <p className="text-muted-foreground text-lg">No hidden fees. No surprises. Just a complete package to launch your U.S. business.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="p-6 rounded-2xl border bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
            <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
