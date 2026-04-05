import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Clock, HeartHandshake } from "lucide-react";

const FinalCTASection = () => (
  <section className="py-20 md:py-28 hero-gradient relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
    <div className="container mx-auto px-4 relative z-10 text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6">
        Ready to Launch Your U.S. Business?
      </h2>
      <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
        Join 2,000+ international founders who trusted Foundo. Start today for just $249 — no hidden fees, no hassle.
      </p>
      <Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg">
        Get Started Now — $249 <ArrowRight className="ml-1 h-5 w-5" />
      </Button>
      <div className="flex flex-wrap justify-center gap-8 mt-10 text-primary-foreground/70 text-sm">
        <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Money-Back Guarantee</div>
        <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> Ready in 3–5 Days</div>
        <div className="flex items-center gap-2"><HeartHandshake className="h-4 w-4" /> Dedicated Support</div>
      </div>
    </div>
  </section>
);

export default FinalCTASection;
