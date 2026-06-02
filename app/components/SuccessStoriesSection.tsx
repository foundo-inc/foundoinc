import { ArrowRight } from "lucide-react";

const stories = [
  {
    name: "Ahmed K.",
    country: "UAE",
    result: "Raised $2M seed round",
    quote: "Foundo got my Delaware C-Corp set up in 3 days. My investors were impressed with how fast and clean everything was.",
    metric: "3 days",
    metricLabel: "to incorporation",
  },
  {
    name: "Priya S.",
    country: "India",
    result: "Launched SaaS in the US market",
    quote: "As a solo founder, I had no idea where to start. Foundo handled everything — from EIN to bank account. I just focused on my product.",
    metric: "$120K",
    metricLabel: "first-year revenue",
  },
  {
    name: "Carlos M.",
    country: "Brazil",
    result: "Accepted into Y Combinator",
    quote: "The compliance autopilot saved me so much time. I never missed a filing deadline. Foundo is a must-have for international founders.",
    metric: "YC W24",
    metricLabel: "batch accepted",
  },
];

const SuccessStoriesSection = () => (
  <section className="py-20 md:py-28 lg:py-32">
    <div className="container mx-auto px-5 md:px-4">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3">Success Stories</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight mb-4">
          Founders Who <span className="text-gradient">Made It Happen</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">Real stories from real founders who launched their US companies with Foundo.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
        {stories.map((s, i) => (
          <div key={i} className="bg-card rounded-2xl border border-border p-6 md:p-8 flex flex-col hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.04] transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg font-display">
                {s.name[0]}
              </div>
              <div>
                <p className="font-bold text-sm">{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.country}</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">"{s.quote}"</p>

            <div className="bg-primary/5 rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-2xl font-extrabold font-display text-primary">{s.metric}</p>
                <p className="text-xs text-muted-foreground">{s.metricLabel}</p>
              </div>
              <div className="text-xs font-semibold text-primary flex items-center gap-1">
                {s.result} <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SuccessStoriesSection;
