import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Ahmed K.", country: "🇦🇪 UAE", text: "Foundo made it incredibly easy to set up my LLC. I had my EIN within a week and opened my bank account shortly after. Highly recommend!", avatar: "A" },
  { name: "Maria L.", country: "🇧🇷 Brazil", text: "As a non-resident, I thought starting a U.S. business was impossible. Foundo proved me wrong. Their support team guided me every step of the way.", avatar: "M" },
  { name: "Raj P.", country: "🇮🇳 India", text: "Transparent pricing, fast turnaround, and zero hassle. Foundo is the best investment I made for my global business expansion.", avatar: "R" },
];

const TestimonialsSection = () => (
  <section className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 section-light" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
    <div className="container mx-auto px-4 relative">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Testimonials
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          Loved by Founders
          <br />
          <span className="text-gradient">Worldwide</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">Join thousands of international entrepreneurs who trust Foundo.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <div key={i} className="group p-8 rounded-3xl bg-card border border-border/60 card-hover relative">
            <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-warning text-warning" />)}
            </div>
            <p className="text-foreground text-sm leading-relaxed mb-8">"{t.text}"</p>
            <div className="flex items-center gap-3 pt-6 border-t border-border/50">
              <div className="h-11 w-11 rounded-2xl hero-gradient-2 flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg shadow-primary/20">
                {t.avatar}
              </div>
              <div>
                <p className="font-bold text-sm font-display">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
