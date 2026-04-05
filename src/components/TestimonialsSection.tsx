import { Star } from "lucide-react";

const testimonials = [
  { name: "Sanju Thakur", company: "ARK Technology LLC", text: "I really like the service provided and all my queries were handled very well, I am very satisfied with the response of my company formation process.", avatar: "S", color: "bg-amber-500" },
  { name: "Shaytal Angra", company: "Biz Network LLC", text: "Good service with quick response. The team was very professional and helped me through every step of the process.", avatar: "S", color: "bg-green-500" },
  { name: "Ahmed K.", company: "Techfly LLC", text: "Prior to Foundo, I was scammed by many companies. Thanks to Foundo team in helping me out and best thing is the on time delivery.", avatar: "A", color: "bg-blue-500" },
  { name: "Shambo Ray", company: "Bindt AI LLC", text: "I had really great journey with Foundo team to form my LLC Company. Foundo is fast, responsive, reliable and cost effective agency. Great work team.", avatar: "S", color: "bg-primary" },
  { name: "Maria L.", company: "Your Wellness Products LLC", text: "Forming my US LLC along with ITIN. Quick thanks to Foundo. I received regular updates and all my questions were answered promptly. Highly recommend their service.", avatar: "M", color: "bg-cyan-600" },
  { name: "Raj P.", company: "Travelluex LLC", text: "It's very good experience to get service registration my business in USA and they completed within 10 days so I highly recommend to all.", avatar: "R", color: "bg-orange-500" },
  { name: "Mohit Tomar", company: "Farebees LLC", text: "Awesome experience with Foundo. Process to set up LLC in USA and bank account and through EIN is superb. Will recommend everyone.", avatar: "M", color: "bg-emerald-600" },
  { name: "Anit Kagra", company: "APR Prime Biz LLC", text: "I really liked your work and you have a very nice nature. Professional and caring approach throughout the entire process.", avatar: "A", color: "bg-primary" },
];

const TestimonialsSection = () => (
  <section className="py-24 md:py-32 section-alt">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          Hear From Our <span className="text-primary">Clients</span>
        </h2>
      </div>

      {/* Testimonial Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 rounded-2xl border border-border bg-card hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className={`h-10 w-10 rounded-full ${t.color} flex items-center justify-center text-primary-foreground font-bold text-sm`}>
                {t.avatar}
              </div>
              <div>
                <p className="font-bold text-sm font-display">{t.name}</p>
              </div>
            </div>
            <p className="text-foreground text-sm leading-relaxed mb-4">{t.text}</p>
            <p className="text-xs text-muted-foreground mb-3">– {t.company}</p>
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
