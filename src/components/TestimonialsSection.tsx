import { Star } from "lucide-react";

const testimonials = [
  { name: "Sanju Thakur", company: "ARK Technology LLC", text: "I really like the service provided and all my queries were handled very well. Very satisfied.", avatar: "S", color: "bg-amber-500" },
  { name: "Shaytal Angra", company: "Biz Network LLC", text: "Good service with quick response. The team was very professional throughout.", avatar: "S", color: "bg-emerald-500" },
  { name: "Ahmed K.", company: "Techfly LLC", text: "Prior to Foundo, I was scammed by many companies. Thanks to Foundo for on time delivery.", avatar: "A", color: "bg-primary" },
  { name: "Shambo Ray", company: "Bindt AI LLC", text: "Fast, responsive, reliable and cost effective. Great journey forming my LLC.", avatar: "S", color: "bg-primary" },
  { name: "Maria L.", company: "Wellness Products LLC", text: "Quick LLC formation along with ITIN. Regular updates and prompt answers.", avatar: "M", color: "bg-cyan-600" },
  { name: "Raj P.", company: "Travelluex LLC", text: "Completed registration within 10 days. Highly recommend to all.", avatar: "R", color: "bg-orange-500" },
  { name: "Mohit Tomar", company: "Farebees LLC", text: "Awesome experience. LLC, bank account and EIN process was superb.", avatar: "M", color: "bg-emerald-600" },
  { name: "Anit Kagra", company: "APR Prime Biz LLC", text: "Professional and caring approach. Really liked the work and service.", avatar: "A", color: "bg-primary" },
];

const TestimonialsSection = () => (
  <section className="py-16 md:py-24 lg:py-28 bg-muted/30 relative">
    <div className="container mx-auto px-5 md:px-4">
      <div className="text-center max-w-xl mx-auto mb-10 md:mb-14">
        <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2 md:mb-3">Testimonials</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 md:mb-4 font-display">
          Hear From Our <span className="text-gradient">Clients</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {testimonials.map((t, i) => (
          <div key={i} className="group p-4 md:p-5 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-md hover:shadow-primary/[0.03] transition-all duration-300">
            <div className="flex items-center gap-2.5 mb-2.5 md:mb-3">
              <div className={`h-8 md:h-9 w-8 md:w-9 rounded-full ${t.color} flex items-center justify-center text-primary-foreground font-bold text-[10px] md:text-xs`}>
                {t.avatar}
              </div>
              <div>
                <p className="font-bold text-[11px] md:text-xs font-display">{t.name}</p>
                <p className="text-[9px] md:text-[10px] text-muted-foreground">{t.company}</p>
              </div>
            </div>
            <p className="text-foreground text-[11px] md:text-xs leading-relaxed mb-2.5 md:mb-3">{t.text}</p>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, j) => <Star key={j} className="h-2.5 md:h-3 w-2.5 md:w-3 fill-amber-400 text-amber-400" />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
