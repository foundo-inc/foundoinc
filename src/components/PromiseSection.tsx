import { ShieldCheck, RefreshCw, HeadphonesIcon } from "lucide-react";

const promises = [
  { icon: ShieldCheck, title: "100% Acceptance Guarantee", desc: "If rejected due to our error, we refile at no cost." },
  { icon: RefreshCw, title: "Full Refund Policy", desc: "Not satisfied? Full refund within 30 days, no questions." },
  { icon: HeadphonesIcon, title: "7-Day Support", desc: "Our team is available 7 days a week to guide you." },
];

const PromiseSection = () => (
  <section className="py-16 md:py-24 lg:py-28 bg-muted/30 relative">
    <div className="container mx-auto px-5 md:px-4">
      <div className="text-center max-w-xl mx-auto mb-10 md:mb-14">
        <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2 md:mb-3">Our Promise</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 md:mb-4 font-display">
          Your Peace of Mind, <span className="text-gradient">Guaranteed</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto">
        {promises.map((p, i) => (
          <div key={i} className="group text-center p-5 md:p-6 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-md hover:shadow-primary/[0.03] transition-all duration-300">
            <div className="h-10 md:h-12 w-10 md:w-12 rounded-lg md:rounded-xl bg-primary/[0.08] flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-primary/[0.12] group-hover:scale-110 transition-all duration-300">
              <p.icon className="h-5 md:h-6 w-5 md:w-6 text-primary" />
            </div>
            <h3 className="font-bold text-xs md:text-sm mb-1.5 md:mb-2 font-display">{p.title}</h3>
            <p className="text-muted-foreground text-[11px] md:text-xs leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PromiseSection;
