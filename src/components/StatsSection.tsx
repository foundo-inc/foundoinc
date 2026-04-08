import { TrendingUp, Users, Globe, Award } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "500+", label: "Companies Formed", desc: "Trusted by founders worldwide" },
  { icon: Users, value: "50+", label: "Countries Represented", desc: "Truly global reach" },
  { icon: Globe, value: "$2B+", label: "Revenue Processed", desc: "Through businesses we launched" },
  { icon: Award, value: "99.8%", label: "Approval Rate", desc: "Near-perfect record" },
];

const StatsSection = () => (
  <section className="py-16 md:py-20 bg-foreground relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(230,97%,46%,0.12)_0%,_transparent_50%)]" />
    
    <div className="container mx-auto px-5 md:px-4 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3 md:mb-4">By The Numbers</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display text-primary-foreground leading-tight">
          Trusted by Founders <span className="text-primary">Worldwide</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-4xl mx-auto">
        {stats.map((s, i) => (
          <div key={i} className="group text-center p-5 md:p-7 rounded-2xl border border-primary-foreground/[0.06] bg-primary-foreground/[0.03] hover:bg-primary-foreground/[0.06] transition-all duration-300">
            <div className="h-12 md:h-14 w-12 md:w-14 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-300">
              <s.icon className="h-5 md:h-6 w-5 md:w-6 text-primary" />
            </div>
            <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground font-display mb-1 md:mb-2">{s.value}</p>
            <p className="font-medium text-primary-foreground/70 text-sm md:text-base mb-0.5">{s.label}</p>
            <p className="text-primary-foreground/40 text-xs md:text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
