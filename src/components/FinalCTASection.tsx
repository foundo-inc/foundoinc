import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Clock, HeartHandshake } from "lucide-react";

const FinalCTASection = () => (
  <section className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 hero-gradient" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(0,0,0,0.15)_0%,_transparent_50%)]" />

    {/* Floating elements */}
    <div className="absolute top-10 left-[10%] w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl animate-float" />
    <div className="absolute bottom-10 right-[10%] w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl animate-float-delayed" />

    <div className="container mx-auto px-4 relative z-10 text-center">
      <h2 className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-6 font-display leading-tight">
        Ready to Launch Your
        <br />
        U.S. Business?
      </h2>
      <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mx-auto mb-10 leading-relaxed">
        Join 2,000+ international founders who trusted Foundo. Start today for just <strong className="text-primary-foreground">$249</strong> — no hidden fees, no hassle.
      </p>
      <Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-2xl shadow-2xl shadow-black/20 text-base">
        Get Started Now — $249 <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-14">
        {[
          { icon: ShieldCheck, label: "Money-Back Guarantee" },
          { icon: Clock, label: "Ready in 3–5 Days" },
          { icon: HeartHandshake, label: "Dedicated Support" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2.5 text-primary-foreground/60 text-sm">
            <div className="h-8 w-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
              <item.icon className="h-4 w-4 text-primary-foreground/70" />
            </div>
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FinalCTASection;
