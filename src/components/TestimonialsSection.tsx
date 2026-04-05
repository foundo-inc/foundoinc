import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Ahmed K.", country: "🇦🇪 UAE", text: "Foundo made it incredibly easy to set up my LLC. I had my EIN within a week and opened my bank account shortly after. Highly recommend!", avatar: "A" },
  { name: "Maria L.", country: "🇧🇷 Brazil", text: "As a non-resident, I thought starting a U.S. business was impossible. Foundo proved me wrong. Their support team guided me every step of the way.", avatar: "M" },
  { name: "Raj P.", country: "🇮🇳 India", text: "Transparent pricing, fast turnaround, and zero hassle. Foundo is the best investment I made for my global business expansion.", avatar: "R" },
];

const TestimonialsSection = () => (
  <section className="py-24 md:py-32 section-alt">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Testimonials</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          Loved by Founders <span className="text-gradient">Worldwide</span>
        </h2>
        <p className="text-muted-foreground text-lg">Join thousands of international entrepreneurs who trust Foundo.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="p-8 rounded-2xl border border-border bg-card card-hover relative">
            <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}
            </div>
            <p className="text-foreground text-sm leading-relaxed mb-8">"{t.text}"</p>
            <div className="flex items-center gap-3 pt-6 border-t border-border">
              <div className="h-10 w-10 rounded-full hero-gradient-2 flex items-center justify-center text-primary-foreground font-bold text-sm">
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
