import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => (
  <section className="py-20 md:py-24 lg:py-28 bg-background relative overflow-hidden">
    <div className="container mx-auto relative z-10">
      <div className="relative max-w-5xl mx-auto rounded-[2rem] bg-foreground px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20 text-center overflow-hidden gradient-border glow-sm">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[260px] bg-primary/[0.08] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-primary-foreground/[0.1] bg-primary-foreground/[0.04] px-4 py-2 mb-6 md:mb-8">
            <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
              Start your U.S. company with confidence
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-primary-foreground mb-5 md:mb-6 font-display leading-[1.05]">
            Make the Dream Real.
            <span className="block text-gradient-light mt-2 md:mt-3">Launch Your U.S. Business.</span>
          </h2>

          <p className="text-base md:text-lg text-primary-foreground/65 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
            We handle formation, banking setup, Stripe access, and compliance so you can focus on building and selling.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-5 md:mb-6">
            <Button size="lg" className="w-full sm:w-auto rounded-full text-sm md:text-base px-7 md:px-8 shadow-xl shadow-primary/25 h-12 md:h-14 font-semibold transition-all duration-300 hover:-translate-y-0.5" asChild>
              <a href="/dashboard">Get Started for Free <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-sm md:text-base border-primary-foreground/15 text-primary-foreground/75 hover:bg-primary-foreground/5 bg-transparent h-12 md:h-14 transition-all duration-300">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FinalCTASection;
