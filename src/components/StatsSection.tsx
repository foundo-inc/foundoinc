import { TrendingUp, Users, Globe, Award } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "10,000+", label: "Companies Successfully Formed", desc: "Trusted by founders worldwide" },
  { icon: Users, value: "50+", label: "Countries Represented", desc: "Truly global reach" },
  { icon: Globe, value: "$2B+", label: "Revenue Processed", desc: "Through businesses we helped launch" },
  { icon: Award, value: "99.8%", label: "Approval Rate", desc: "Near-perfect acceptance record" },
];

const StatsSection = () => (
  <section className="py-24 md:py-32 section-alt">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">BY THE NUMBERS</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          Trusted by Founders <span className="text-primary">Worldwide</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {stats.map((s, i) => (
          <div key={i} className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
            <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/15 transition-colors">
              <s.icon className="h-7 w-7 text-primary" />
            </div>
            <p className="text-4xl md:text-5xl font-extrabold text-foreground font-display mb-2">{s.value}</p>
            <p className="font-semibold text-foreground text-sm mb-1">{s.label}</p>
            <p className="text-muted-foreground text-xs">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
