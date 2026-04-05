import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => (
  <section className="py-24 md:py-32 bg-foreground">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-2 font-display leading-tight">
        Make the Dream Real.
      </h2>
      <h2 className="text-4xl md:text-6xl font-extrabold mb-8 font-display leading-tight">
        <span className="text-primary">Launch Your U.S. Business.</span>
      </h2>
      <p className="text-lg text-primary-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
        Form a U.S. LLC, set up a U.S. bank account, unlock Stripe payments, and stay
        fully compliant. We'll handle the legal — you focus on growth.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
        <Button size="lg" className="rounded-full text-base px-8 shadow-lg shadow-primary/30">
          Get Started for Free <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button variant="outline" size="lg" className="rounded-full text-base border-primary-foreground/20 text-primary-foreground/80 hover:bg-primary-foreground/5 hover:text-primary-foreground bg-transparent">
          Talk to an Expert
        </Button>
      </div>
      <p className="text-sm text-primary-foreground/40">Explore the process before paying</p>
    </div>
  </section>
);

export default FinalCTASection;
