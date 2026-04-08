import { FileText, Building2, CreditCard, Rocket } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Tell Us About Your Business",
    desc: "Fill out a simple form with your company details. Takes less than 5 minutes.",
  },
  {
    icon: Building2,
    step: "02",
    title: "We Handle the Paperwork",
    desc: "Our experts file everything — formation docs, EIN, compliance. You sit back.",
  },
  {
    icon: CreditCard,
    step: "03",
    title: "Open Your Bank Account",
    desc: "Get set up with a US business bank account through our trusted partners.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Scale",
    desc: "Start operating your US company with full compliance and expert support.",
  },
];

const HowItWorksSection = () => (
  <section className="py-12 md:py-16">
    <div className="container mx-auto px-5 md:px-4">
      <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3">How It Works</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight mb-4">
          From Idea to <span className="text-gradient">US Company</span> in 4 Steps
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">No lawyers, no headaches. We handle everything so you can focus on building.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 md:gap-4 max-w-5xl mx-auto relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-border" />

        {steps.map((s, i) => (
          <div key={i} className="relative text-center group">
            <div className="h-20 w-20 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300 relative z-10">
              <s.icon className="h-8 w-8 text-primary" />
            </div>
            <span className="text-xs font-bold text-primary/50 uppercase tracking-widest mb-2 block">Step {s.step}</span>
            <h3 className="text-lg font-bold font-display mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
