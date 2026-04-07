import { ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GuaranteeSection = () => (
  <section className="py-20 md:py-28 lg:py-32 bg-muted/30">
    <div className="container mx-auto px-5 md:px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="h-10 w-10 text-primary" />
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight mb-5">
          100% <span className="text-gradient">Money-Back</span> Guarantee
        </h2>

        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          If we can't get your company formed and fully set up, you get a full refund. No questions asked. We're that confident in our process.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="bg-card rounded-xl border border-border px-6 py-4 text-center">
            <p className="text-2xl font-extrabold font-display text-primary">30 Days</p>
            <p className="text-xs text-muted-foreground">Full refund window</p>
          </div>
          <div className="bg-card rounded-xl border border-border px-6 py-4 text-center">
            <p className="text-2xl font-extrabold font-display text-primary">Zero Risk</p>
            <p className="text-xs text-muted-foreground">No questions asked</p>
          </div>
          <div className="bg-card rounded-xl border border-border px-6 py-4 text-center">
            <p className="text-2xl font-extrabold font-display text-primary">100%</p>
            <p className="text-xs text-muted-foreground">Money back guaranteed</p>
          </div>
        </div>

        <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-14 px-10 text-base shadow-lg transition-all duration-300 hover:-translate-y-0.5">
          Start risk-free today <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  </section>
);

export default GuaranteeSection;
