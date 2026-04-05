import { Button } from "@/components/ui/button";
import { CheckCircle2, Zap, Building2, Briefcase, FileText } from "lucide-react";

const starterFeatures = [
  "Company formation in Delaware or Wyoming",
  "Expedited Tax ID (EIN) setup",
  "Zero filing fees for all required documents",
  "Open a business bank account with our partners",
  "All essential and important documents",
  "Lifetime expert support",
];

const completeAddons = [
  { icon: Briefcase, title: "Mailroom Premium", price: "$350", desc: "Secure a premium physical address and virtual mailbox" },
  { icon: FileText, title: "Agent Autopilot", price: "$299", desc: "Get compliance reminders and annual report filings" },
];

const completeExtras = [
  { title: "Accounting", price: "$1,890" },
  { title: "Tax Filing", price: "$1,799" },
];

const PricingSection = () => (
  <section id="pricing" className="py-24 md:py-32 section-alt">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">PRICING</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          Simple, Transparent Pricing
        </h2>
        <p className="text-muted-foreground text-lg">One-time payment. No hidden fees. No monthly subscriptions. Start your U.S. business today.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Starter Plan */}
        <div className="bg-card rounded-3xl border border-border p-8 md:p-10 flex flex-col">
          <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center mb-6">
            <Building2 className="h-6 w-6 text-foreground" />
          </div>
          <h3 className="text-2xl font-extrabold font-display mb-1">Start</h3>
          <p className="text-muted-foreground text-sm mb-6">Incorporate your LLC or C-Corp</p>
          <div className="mb-8">
            <span className="text-5xl font-extrabold font-display">$399</span>
            <p className="text-sm text-muted-foreground mt-1">USD · One-time fee</p>
          </div>
          <Button variant="outline" size="lg" className="rounded-full w-full mb-8 border-foreground text-foreground hover:bg-foreground hover:text-background">
            Start my company
          </Button>
          <div className="space-y-4 flex-1">
            {starterFeatures.map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{f}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary inline-block" />
              Registered agent services are required for incorporation
            </p>
          </div>
        </div>

        {/* Complete Plan */}
        <div className="bg-primary rounded-3xl p-8 md:p-10 text-primary-foreground flex flex-col">
          <div className="h-12 w-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-6">
            <Zap className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-2xl font-extrabold font-display">Complete One</h3>
            <span className="text-xs font-bold bg-primary-foreground/20 px-3 py-1 rounded-full">New</span>
          </div>
          <p className="text-primary-foreground/70 text-sm mb-6">All the tools you need to run your company from day one.</p>
          <div className="mb-4">
            <span className="text-5xl font-extrabold font-display">$199</span>
            <span className="text-lg line-through text-primary-foreground/50 ml-3">$362</span>
            <span className="ml-2 text-xs font-bold bg-primary-foreground/20 px-3 py-1 rounded-full">45% off</span>
          </div>
          <p className="text-sm text-primary-foreground/60 mb-6">Monthly · Billed yearly at $2388</p>
          <Button size="lg" className="rounded-full w-full mb-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold">
            + Start add-on
          </Button>

          {/* Add-on cards */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {completeAddons.map((a, i) => (
              <div key={i} className="bg-primary-foreground/10 rounded-2xl p-4">
                <div className="h-10 w-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center mb-3">
                  <a.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <p className="font-bold text-sm mb-0.5">{a.title} · {a.price}</p>
                <p className="text-xs text-primary-foreground/60">{a.desc}</p>
              </div>
            ))}
          </div>

          {/* Extras */}
          <div className="space-y-3 mb-6">
            {completeExtras.map((e, i) => (
              <div key={i} className="flex items-center justify-between bg-primary-foreground/10 rounded-xl px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="font-bold text-sm">{e.title}</span>
                </div>
                <span className="font-bold text-sm">{e.price}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3 flex-1">
            {["Get discovered by VCs", "More than $350K in deals and rewards", "All essential documents — stock purchase agreement, bylaws, etc", "Lifetime expert support"].map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary-foreground/70 shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;
