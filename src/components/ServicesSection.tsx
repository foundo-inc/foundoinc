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
  <section id="services" className="py-24 md:py-32 bg-foreground relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
    <div className="container mx-auto px-4 relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Services</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display text-primary-foreground">
          Everything Included <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">In One Package</span>
        </h2>
        <p className="text-primary-foreground/50 text-lg">No hidden fees. No surprises. Just a complete package to launch your U.S. business.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="group p-8 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur card-hover">
            <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <s.icon className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="font-bold text-lg mb-2 font-display text-primary-foreground">{s.title}</h3>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
