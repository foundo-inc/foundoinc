import { Button } from "@/components/ui/button";
import { CheckCircle2, Zap, Building2, Briefcase, FileText, ArrowRight, Sparkles } from "lucide-react";

const starterFeatures = [
  "Company formation in Delaware or Wyoming",
  "Expedited Tax ID (EIN) setup",
  "Zero filing fees for all required documents",
  "Open a business bank account with our partners",
  "All essential and important documents",
  "Lifetime expert support",
];

const completeAddons = [
  { icon: Briefcase, title: "Mailroom Premium", price: "$350", desc: "Premium physical address & virtual mailbox" },
  { icon: FileText, title: "Agent Autopilot", price: "$299", desc: "Compliance reminders & annual filings" },
];

const completeExtras = [
  { title: "Accounting", price: "$1,890" },
  { title: "Tax Filing", price: "$1,799" },
];

const PricingSection = () => (
  <section id="pricing" className="py-20 md:py-28 bg-muted/30 relative">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-xl mx-auto mb-14">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Pricing</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 font-display">
          Simple, <span className="text-gradient">Transparent</span> Pricing
        </h2>
        <p className="text-muted-foreground text-sm">One-time payment. No hidden fees. No subscriptions.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {/* Starter Plan */}
        <div className="bg-card rounded-2xl border border-border p-7 flex flex-col hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.04] transition-all duration-300">
          <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center mb-5">
            <Building2 className="h-5 w-5 text-foreground" />
          </div>
          <h3 className="text-xl font-extrabold font-display mb-0.5">Start</h3>
          <p className="text-muted-foreground text-xs mb-5">Incorporate your LLC or C-Corp</p>
          <div className="mb-6">
            <span className="text-4xl font-extrabold font-display">$399</span>
            <p className="text-xs text-muted-foreground mt-0.5">USD · One-time fee</p>
          </div>
          <Button variant="outline" size="lg" className="rounded-full w-full mb-6 border-foreground text-foreground hover:bg-foreground hover:text-background h-11 text-sm font-semibold transition-all duration-300">
            Start my company
          </Button>
          <div className="space-y-3 flex-1">
            {starterFeatures.map((f, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs">{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Complete Plan */}
        <div className="relative rounded-2xl p-7 flex flex-col overflow-hidden bg-primary shadow-xl shadow-primary/20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(0,0%,100%,0.08)_0%,_transparent_50%)]" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-5">
              <div className="h-10 w-10 rounded-lg bg-primary-foreground/15 flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-[10px] font-bold bg-primary-foreground/15 px-2.5 py-1 rounded-full text-primary-foreground flex items-center gap-1">
                <Sparkles className="h-3 w-3" /> POPULAR
              </span>
            </div>
            <h3 className="text-xl font-extrabold font-display text-primary-foreground mb-0.5">Complete One</h3>
            <p className="text-primary-foreground/60 text-xs mb-5">Everything to run your company from day one.</p>
            <div className="mb-1">
              <span className="text-4xl font-extrabold font-display text-primary-foreground">$199</span>
              <span className="text-sm line-through text-primary-foreground/40 ml-2">$362</span>
              <span className="ml-2 text-[10px] font-bold bg-primary-foreground/15 px-2 py-0.5 rounded-full text-primary-foreground">45% off</span>
            </div>
            <p className="text-[10px] text-primary-foreground/40 mb-5">Monthly · Billed yearly at $2388</p>
            <Button size="lg" className="rounded-full w-full mb-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold h-11 text-sm shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              + Start add-on <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </Button>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {completeAddons.map((a, i) => (
                <div key={i} className="bg-primary-foreground/[0.06] rounded-xl p-3">
                  <div className="h-8 w-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center mb-2">
                    <a.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <p className="font-bold text-[11px] text-primary-foreground mb-0.5">{a.title} · {a.price}</p>
                  <p className="text-[10px] text-primary-foreground/50">{a.desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-4">
              {completeExtras.map((e, i) => (
                <div key={i} className="flex items-center justify-between bg-primary-foreground/[0.06] rounded-lg px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded bg-primary-foreground/10 flex items-center justify-center">
                      <FileText className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <span className="font-bold text-[11px] text-primary-foreground">{e.title}</span>
                  </div>
                  <span className="font-bold text-[11px] text-primary-foreground">{e.price}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2 flex-1">
              {["Get discovered by VCs", "More than $350K in deals", "All essential documents", "Lifetime expert support"].map((f, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary-foreground/60 shrink-0 mt-0.5" />
                  <span className="text-[11px] text-primary-foreground/70">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;
