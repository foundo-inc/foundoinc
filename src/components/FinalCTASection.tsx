import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => (
  <section className="pt-20 md:pt-28 lg:pt-32 pb-10 md:pb-14 bg-foreground relative overflow-hidden">
    <div className="absolute inset-x-0 top-0 h-px bg-primary-foreground/[0.08]" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.06] rounded-full blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-5 md:px-4 relative z-10 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center rounded-full border border-primary-foreground/[0.08] bg-primary-foreground/[0.03] px-4 py-2 mb-6 md:mb-8">
          <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/55">
            Ready when you are
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary-foreground mb-5 md:mb-6 font-display leading-[1.05]">
          Make the Dream Real.
          <span className="block text-gradient-light mt-2 md:mt-3">Launch Your U.S. Business.</span>
        </h2>

        <p className="text-base md:text-lg text-primary-foreground/60 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
          Form a U.S. LLC, set up banking, unlock Stripe payments, and stay compliant. We handle the legal — you focus on growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <Button size="lg" className="rounded-full text-sm md:text-base px-7 md:px-8 shadow-xl shadow-primary/25 h-12 md:h-14 font-semibold transition-all duration-300 hover:-translate-y-0.5">
            Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full text-sm md:text-base border-primary-foreground/15 text-primary-foreground/70 hover:bg-primary-foreground/5 bg-transparent h-12 md:h-14 transition-all duration-300">
            Talk to an Expert
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default FinalCTASection;
