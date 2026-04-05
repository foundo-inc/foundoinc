import { Ban, Building2, FileWarning, Globe2 } from "lucide-react";

const problems = [
  { icon: Building2, title: "Banking Barriers", desc: "Most U.S. banks won't open accounts for non-residents without a physical visit." },
  { icon: FileWarning, title: "Complex Compliance", desc: "Navigating state laws, tax IDs, and registration requirements feels overwhelming." },
  { icon: Ban, title: "Costly Middlemen", desc: "Traditional law firms charge $1,500+ for simple LLC formation." },
  { icon: Globe2, title: "Remote Limitations", desc: "Without a U.S. address or SSN, getting started seems impossible." },
];

const ProblemSection = () => (
  <section className="py-24 md:py-32 bg-foreground relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
    <div className="container mx-auto px-4 relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">The Problem</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display text-primary-foreground">
          Starting a U.S. Business <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Shouldn't Be This Hard</span>
        </h2>
        <p className="text-primary-foreground/50 text-lg">International founders face unique challenges that slow down growth and drain resources.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((p, i) => (
          <div key={i} className="group p-7 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur card-hover">
            <div className="h-12 w-12 rounded-xl bg-destructive/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <p.icon className="h-6 w-6 text-red-400" />
            </div>
            <h3 className="font-bold text-lg mb-2 font-display text-primary-foreground">{p.title}</h3>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
