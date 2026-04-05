import { TrendingUp, Users, Globe, Award } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "10,000+", label: "Companies Formed", desc: "Trusted by founders worldwide" },
  { icon: Users, value: "50+", label: "Countries Represented", desc: "Truly global reach" },
  { icon: Globe, value: "$2B+", label: "Revenue Processed", desc: "Through businesses we launched" },
  { icon: Award, value: "99.8%", label: "Approval Rate", desc: "Near-perfect record" },
];

const StatsSection = () => (
  <section className="py-28 md:py-36 section-dark relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-pattern opacity-50" />
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_hsl(230,97%,46%,0.1)_0%,_transparent_60%)]" />
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 glass-card-dark rounded-full px-4 py-2 mb-6">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">By The Numbers</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display text-primary-foreground">
          Trusted by Founders <span className="text-gradient-light">Worldwide</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {stats.map((s, i) => (
          <div key={i} className="group text-center p-8 rounded-2xl glass-card-dark card-hover relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <p className="text-4xl md:text-5xl font-extrabold text-primary-foreground font-display mb-2">{s.value}</p>
              <p className="font-semibold text-primary-foreground/80 text-sm mb-1">{s.label}</p>
              <p className="text-primary-foreground/40 text-xs">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
