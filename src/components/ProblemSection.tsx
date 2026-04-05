import { Ban, Building2, FileWarning, Globe2 } from "lucide-react";

const problems = [
  { icon: Building2, title: "Banking Barriers", desc: "Most U.S. banks won't open accounts for non-residents without a physical visit." },
  { icon: FileWarning, title: "Complex Compliance", desc: "Navigating state laws, tax IDs, and registration requirements feels overwhelming." },
  { icon: Ban, title: "Costly Middlemen", desc: "Traditional law firms charge $1,500+ for simple LLC formation." },
  { icon: Globe2, title: "Remote Limitations", desc: "Without a U.S. address or SSN, getting started seems impossible." },
];

const ProblemSection = () => (
  <section className="py-24 md:py-32">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-destructive mb-4">The Problem</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          Starting a U.S. Business <br className="hidden md:block" />
          <span className="text-gradient">Shouldn't Be This Hard</span>
        </h2>
        <p className="text-muted-foreground text-lg">International founders face unique challenges that slow down growth and drain resources.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((p, i) => (
          <div key={i} className="group p-7 rounded-2xl border border-border bg-card card-hover">
            <div className="h-12 w-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <p.icon className="h-6 w-6 text-destructive" />
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
