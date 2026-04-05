import { MapPin, FileEdit, Cog, Rocket } from "lucide-react";

const steps = [
  { icon: MapPin, num: "01", title: "Choose Your State", desc: "Pick the best state for your business — we'll guide you through the decision." },
  { icon: FileEdit, num: "02", title: "Submit Your Details", desc: "Fill out a simple form. Takes less than 10 minutes to complete." },
  { icon: Cog, num: "03", title: "We Handle the Rest", desc: "We file your LLC, obtain your EIN, and set up everything seamlessly." },
  { icon: Rocket, num: "04", title: "Start Operating", desc: "Receive your documents and start your U.S. business immediately." },
];

const ProcessSection = () => (
  <section id="how-it-works" className="py-24 md:py-32 relative">
    <div className="absolute inset-0 mesh-gradient" />
    <div className="container mx-auto px-4 relative">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          How It Works
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          4 Simple Steps to Your
          <br />
          <span className="text-gradient">U.S. Business</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">From sign-up to your fully operational U.S. company in days, not months.</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-5">
          {steps.map((s, i) => (
            <div key={i} className="group relative p-8 rounded-3xl bg-card border border-border/60 card-hover overflow-hidden">
              <span className="absolute top-6 right-6 text-6xl font-extrabold text-primary/[0.04] font-display">{s.num}</span>
              <div className="h-14 w-14 rounded-2xl hero-gradient-2 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-primary/20">
                <s.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">Step {s.num}</span>
              </div>
              <h3 className="font-bold text-xl mb-2 font-display">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
