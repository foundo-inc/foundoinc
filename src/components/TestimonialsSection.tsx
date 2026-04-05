import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Sanju Thakur", company: "ARK Technology LLC", text: "I really like the service provided and all my queries were handled very well, I am very satisfied with the response of my company formation process.", avatar: "S", color: "bg-amber-500" },
  { name: "Shaytal Angra", company: "Biz Network LLC", text: "Good service with quick response. The team was very professional and helped me through every step of the process.", avatar: "S", color: "bg-emerald-500" },
  { name: "Ahmed K.", company: "Techfly LLC", text: "Prior to Foundo, I was scammed by many companies. Thanks to Foundo team in helping me out and best thing is the on time delivery.", avatar: "A", color: "bg-primary" },
  { name: "Shambo Ray", company: "Bindt AI LLC", text: "I had really great journey with Foundo team to form my LLC Company. Foundo is fast, responsive, reliable and cost effective agency.", avatar: "S", color: "bg-primary" },
  { name: "Maria L.", company: "Your Wellness Products LLC", text: "Forming my US LLC along with ITIN. Quick thanks to Foundo. I received regular updates and all my questions were answered promptly.", avatar: "M", color: "bg-cyan-600" },
  { name: "Raj P.", company: "Travelluex LLC", text: "It's very good experience to get service registration my business in USA and they completed within 10 days so I highly recommend to all.", avatar: "R", color: "bg-orange-500" },
  { name: "Mohit Tomar", company: "Farebees LLC", text: "Awesome experience with Foundo. Process to set up LLC in USA and bank account and through EIN is superb. Will recommend everyone.", avatar: "M", color: "bg-emerald-600" },
  { name: "Anit Kagra", company: "APR Prime Biz LLC", text: "I really liked your work and you have a very nice nature. Professional and caring approach throughout the entire process.", avatar: "A", color: "bg-primary" },
];

const TestimonialsSection = () => (
  <section className="py-28 md:py-36 bg-background relative overflow-hidden">
    <div className="absolute inset-0 bg-dot-pattern" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6 glow-blue-subtle">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">Testimonials</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          Hear From Our <span className="text-gradient">Clients</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="group p-6 rounded-2xl bg-card card-hover card-hover-glow gradient-border relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Quote className="h-10 w-10 text-primary" />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className={`h-11 w-11 rounded-full ${t.color} flex items-center justify-center text-primary-foreground font-bold text-sm ring-2 ring-offset-2 ring-offset-card ring-primary/20`}>
                {t.avatar}
              </div>
              <div>
                <p className="font-bold text-sm font-display">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.company}</p>
              </div>
            </div>
            <p className="text-foreground text-sm leading-relaxed mb-4">{t.text}</p>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
