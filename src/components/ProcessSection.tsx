const steps = [
  { num: "01", title: "Choose Your State", desc: "Pick the best state for your business — we'll guide you." },
  { num: "02", title: "Submit Your Details", desc: "Fill out a simple form. Takes less than 10 minutes." },
  { num: "03", title: "We Handle the Rest", desc: "We file your LLC, obtain your EIN, and set up everything." },
  { num: "04", title: "Start Operating", desc: "Receive your documents and start your U.S. business." },
];

const ProcessSection = () => (
  <section id="how-it-works" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How It Works</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">4 Simple Steps to Your U.S. Business</h2>
        <p className="text-muted-foreground text-lg">From sign-up to your fully operational U.S. company in days, not months.</p>
      </div>
      <div className="max-w-3xl mx-auto space-y-0">
        {steps.map((s, i) => (
          <div key={i} className="flex gap-6 group">
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                {s.num}
              </div>
              {i < steps.length - 1 && <div className="w-0.5 h-full bg-border my-2 group-hover:bg-primary/30 transition-colors" />}
            </div>
            <div className="pb-10">
              <h3 className="font-bold text-lg mb-1">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
