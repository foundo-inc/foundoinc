import { ShieldCheck, RefreshCw, HeadphonesIcon } from "lucide-react";

const promises = [
  { icon: ShieldCheck, title: "100% Acceptance Guarantee", desc: "If rejected due to our error, we refile at no cost." },
  { icon: RefreshCw, title: "Full Refund Policy", desc: "Not satisfied? Full refund within 30 days, no questions." },
  { icon: HeadphonesIcon, title: "7-Day Support", desc: "Our team is available 7 days a week to guide you." },
];

const PromiseSection = () => (
  <section className="py-20 md:py-28 lg:py-32 bg-muted/30 relative">
    <div className="container mx-auto px-5 md:px-4">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3 md:mb-4">Our Promise</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-5 font-display leading-tight">
          Your Peace of Mind, <span className="text-gradient">Guaranteed</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto">
        {promises.map((p, i) => (
          <div key={i} className="group text-center p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-md hover:shadow-primary/[0.03] transition-all duration-300">
            <div className="h-14 md:h-16 w-14 md:w-16 rounded-xl bg-primary/[0.08] flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-primary/[0.12] group-hover:scale-110 transition-all duration-300">
              <p.icon className="h-6 md:h-7 w-6 md:w-7 text-primary" />
            </div>
            <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 font-display">{p.title}</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PromiseSection;
