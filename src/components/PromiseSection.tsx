import { ShieldCheck, RefreshCw, HeadphonesIcon } from "lucide-react";

const promises = [
  { icon: ShieldCheck, title: "100% Acceptance Guarantee", desc: "If your application is rejected due to our error, we'll refile it at no additional cost — guaranteed." },
  { icon: RefreshCw, title: "Full Refund Policy", desc: "Not satisfied with our service? Request a full refund within 30 days of your purchase — no questions asked." },
  { icon: HeadphonesIcon, title: "Dedicated Support", desc: "Our team is available 7 days a week to answer your questions and guide you through every step of the process." },
];

const PromiseSection = () => (
  <section className="py-24 md:py-32 section-alt">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">OUR PROMISE</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          Your Peace of Mind, <span className="text-primary">Guaranteed</span>
        </h2>
        <p className="text-muted-foreground text-lg">We stand behind the quality of our work with ironclad guarantees so you can apply with confidence.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {promises.map((p, i) => (
          <div key={i} className="text-center p-8 rounded-2xl bg-card border border-border hover:shadow-md transition-shadow">
            <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <p.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-3 font-display">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PromiseSection;
