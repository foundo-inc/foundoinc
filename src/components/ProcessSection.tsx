import { MapPin, FileEdit, Cog, Rocket } from "lucide-react";

const steps = [
  { icon: MapPin, num: "01", title: "Choose Your State", desc: "Pick the best state for your business — we'll guide you through the decision." },
  { icon: FileEdit, num: "02", title: "Submit Your Details", desc: "Fill out a simple form. Takes less than 10 minutes to complete." },
  { icon: Cog, num: "03", title: "We Handle the Rest", desc: "We file your LLC, obtain your EIN, and set up everything seamlessly." },
  { icon: Rocket, num: "04", title: "Start Operating", desc: "Receive your documents and start your U.S. business immediately." },
];

const ProcessSection = () => (
  <section id="how-it-works" className="py-24 md:py-32 bg-foreground relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
    <div className="container mx-auto px-4 relative">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">How It Works</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display text-primary-foreground">
          4 Simple Steps to Your <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">U.S. Business</span>
        </h2>
        <p className="text-primary-foreground/50 text-lg">From sign-up to your fully operational U.S. company in days, not months.</p>
      </div>
      <div className="max-w-3xl mx-auto space-y-6">
        {steps.map((s, i) => (
          <div key={i} className="group flex gap-6 p-6 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur card-hover items-start">
            <div className="h-14 w-14 rounded-xl hero-gradient-2 flex items-center justify-center shrink-0 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
              <s.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-400 mb-1 block">Step {s.num}</span>
              <h3 className="font-bold text-xl mb-1 font-display text-primary-foreground">{s.title}</h3>
              <p className="text-primary-foreground/50 text-sm leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
