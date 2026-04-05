import { ShieldCheck, RefreshCw, HeadphonesIcon } from "lucide-react";

const promises = [
  { icon: ShieldCheck, title: "100% Acceptance Guarantee", desc: "If your application is rejected due to our error, we'll refile it at no additional cost — guaranteed." },
  { icon: RefreshCw, title: "Full Refund Policy", desc: "Not satisfied? Request a full refund within 30 days — no questions asked." },
  { icon: HeadphonesIcon, title: "Dedicated Support", desc: "Our team is available 7 days a week to answer your questions and guide you through every step." },
];

const PromiseSection = () => (
  <section className="py-28 md:py-36 bg-background relative overflow-hidden">
    <div className="absolute inset-0 bg-dot-pattern" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6 glow-blue-subtle">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">Our Promise</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          Your Peace of Mind, <span className="text-gradient">Guaranteed</span>
        </h2>
        <p className="text-muted-foreground text-lg">We stand behind the quality of our work with ironclad guarantees.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {promises.map((p, i) => (
          <div key={i} className="group text-center p-8 rounded-2xl bg-card card-hover card-hover-glow gradient-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <p.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3 font-display">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PromiseSection;
