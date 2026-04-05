import { TrendingUp, Users, Globe, Award } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "10,000+", label: "Companies Formed", desc: "Trusted by founders worldwide" },
  { icon: Users, value: "50+", label: "Countries Represented", desc: "Truly global reach" },
  { icon: Globe, value: "$2B+", label: "Revenue Processed", desc: "Through businesses we launched" },
  { icon: Award, value: "99.8%", label: "Approval Rate", desc: "Near-perfect record" },
];

const StatsSection = () => (
  <section className="py-20 md:py-28 bg-foreground relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(230,97%,46%,0.12)_0%,_transparent_50%)]" />
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center max-w-xl mx-auto mb-14">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">By The Numbers</p>
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-primary-foreground">
          Trusted by Founders <span className="text-primary">Worldwide</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {stats.map((s, i) => (
          <div key={i} className="group text-center p-6 rounded-2xl border border-primary-foreground/[0.06] bg-primary-foreground/[0.03] hover:bg-primary-foreground/[0.06] transition-all duration-300">
            <div className="h-11 w-11 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <s.icon className="h-5 w-5 text-primary" />
            </div>
            <p className="text-3xl md:text-4xl font-extrabold text-primary-foreground font-display mb-1">{s.value}</p>
            <p className="font-medium text-primary-foreground/70 text-xs mb-0.5">{s.label}</p>
            <p className="text-primary-foreground/40 text-[10px]">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
