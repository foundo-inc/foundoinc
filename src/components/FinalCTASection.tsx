import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Clock, HeartHandshake } from "lucide-react";

const FinalCTASection = () => (
  <section className="py-24 md:py-32 relative overflow-hidden bg-foreground">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/15 rounded-full blur-[120px]" />

    <div className="container mx-auto px-4 relative z-10 text-center">
      <h2 className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-6 font-display leading-tight">
        Ready to Launch Your
        <br />
        U.S. Business?
      </h2>
      <p className="text-lg md:text-xl text-primary-foreground/50 max-w-xl mx-auto mb-10 leading-relaxed">
        Join 2,000+ international founders who trusted Foundo. Start today for just <strong className="text-primary-foreground">$249</strong>.
      </p>
      <Button size="xl" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl text-base px-8 shadow-xl shadow-primary/30">
        Get Started Now — $249 <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-14">
        {[
          { icon: ShieldCheck, label: "Money-Back Guarantee" },
          { icon: Clock, label: "Ready in 3–5 Days" },
          { icon: HeartHandshake, label: "Dedicated Support" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 text-primary-foreground/40 text-sm">
            <item.icon className="h-4 w-4" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FinalCTASection;
