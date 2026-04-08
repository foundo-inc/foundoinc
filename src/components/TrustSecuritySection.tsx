import { ShieldCheck, Lock, Award, Clock } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "100% Compliant",
    desc: "Every filing follows state and federal regulations. We stay current so you don't have to.",
  },
  {
    icon: Lock,
    title: "Bank-Level Security",
    desc: "Your data is encrypted end-to-end. We never share your information with third parties.",
  },
  {
    icon: Award,
    title: "Trusted by 1,000+ Founders",
    desc: "Founders from 50+ countries have launched their US companies through Foundo.",
  },
  {
    icon: Clock,
    title: "24/7 Expert Support",
    desc: "Real humans ready to help. No bots, no ticket queues — just fast, personal support.",
  },
];

const TrustSecuritySection = () => (
  <section className="py-20 md:py-24 lg:py-28 bg-muted/30">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3">Trust & Security</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight mb-4">
          Your Business Is in <span className="text-gradient">Safe Hands</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">We take compliance and security seriously so you can focus on growth.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-5xl mx-auto">
        {trustItems.map((item, i) => (
          <div key={i} className="bg-card rounded-2xl border border-border p-6 text-center hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.04] transition-all duration-300">
            <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <item.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-base font-bold font-display mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSecuritySection;
