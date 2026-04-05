import { TrendingUp, Users, Globe, Award } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "10,000+", label: "Companies Formed", desc: "Trusted by founders worldwide" },
  { icon: Users, value: "50+", label: "Countries Represented", desc: "Truly global reach" },
  { icon: Globe, value: "$2B+", label: "Revenue Processed", desc: "Through businesses we launched" },
  { icon: Award, value: "99.8%", label: "Approval Rate", desc: "Near-perfect record" },
];

const StatsSection = () => (
  <section className="py-16 md:py-24 lg:py-28 bg-foreground relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(230,97%,46%,0.12)_0%,_transparent_50%)]" />
    
    <div className="container mx-auto px-5 md:px-4 relative z-10">
      <div className="text-center max-w-xl mx-auto mb-10 md:mb-14">
        <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2 md:mb-3">By The Numbers</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-display text-primary-foreground">
          Trusted by Founders <span className="text-primary">Worldwide</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
        {stats.map((s, i) => (
          <div key={i} className="group text-center p-4 md:p-6 rounded-2xl border border-primary-foreground/[0.06] bg-primary-foreground/[0.03] hover:bg-primary-foreground/[0.06] transition-all duration-300">
            <div className="h-9 md:h-11 w-9 md:w-11 rounded-lg md:rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
              <s.icon className="h-4 md:h-5 w-4 md:w-5 text-primary" />
            </div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary-foreground font-display mb-0.5 md:mb-1">{s.value}</p>
            <p className="font-medium text-primary-foreground/70 text-[10px] md:text-xs mb-0.5">{s.label}</p>
            <p className="text-primary-foreground/40 text-[9px] md:text-[10px] hidden sm:block">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
