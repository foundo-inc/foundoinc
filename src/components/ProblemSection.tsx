import { Ban, Building2, FileWarning, Globe2 } from "lucide-react";

const problems = [
  { icon: Building2, title: "Banking Barriers", desc: "Most U.S. banks won't open accounts for non-residents without a physical visit.", color: "from-destructive/10 to-destructive/5" },
  { icon: FileWarning, title: "Complex Compliance", desc: "Navigating state laws, tax IDs, and registration requirements feels overwhelming.", color: "from-warning/10 to-warning/5" },
  { icon: Ban, title: "Costly Middlemen", desc: "Traditional law firms charge $1,500+ for simple LLC formation.", color: "from-destructive/10 to-destructive/5" },
  { icon: Globe2, title: "Remote Limitations", desc: "Without a U.S. address or SSN, getting started seems impossible.", color: "from-warning/10 to-warning/5" },
];

const ProblemSection = () => (
  <section className="py-24 md:py-32 relative">
    <div className="absolute inset-0 mesh-gradient" />
    <div className="container mx-auto px-4 relative">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-destructive animate-pulse-slow" />
          The Problem
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          Starting a U.S. Business
          <br />
          <span className="text-gradient">Shouldn't Be This Hard</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">International founders face unique challenges that slow down growth and drain resources.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {problems.map((p, i) => (
          <div key={i} className="group relative p-7 rounded-3xl bg-card border border-border/60 card-hover shine">
            <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
              <p.icon className="h-7 w-7 text-destructive" />
            </div>
            <h3 className="font-bold text-lg mb-2 font-display">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
