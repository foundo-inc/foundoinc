import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Sparkles,
  Building2,
  Zap,
  Crown,
  ArrowRight,
  Shield,
  Clock,
  Users,
  FileText,
  Briefcase,
  Globe2,
  HelpCircle,
  Star,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Starter",
    icon: Building2,
    tagline: "Perfect for solo founders",
    monthly: 399,
    yearly: 399,
    badge: null,
    cta: "Start my company",
    highlight: false,
    features: [
      "LLC or C-Corp formation (DE / WY)",
      "Expedited EIN (Tax ID) setup",
      "All filing fees included",
      "Registered agent · 1 year",
      "Operating Agreement & Bylaws",
      "Business bank account intro",
      "Lifetime founder support",
    ],
  },
  {
    name: "Complete",
    icon: Zap,
    tagline: "Everything to launch & operate",
    monthly: 699,
    yearly: 599,
    badge: "Most Popular",
    cta: "Launch with Complete",
    highlight: true,
    features: [
      "Everything in Starter",
      "Premium U.S. business address",
      "Virtual mailroom & scanning",
      "Annual compliance autopilot",
      "Stripe & Mercury fast-track",
      "Priority WhatsApp support",
      "Founder community access",
    ],
  },
  {
    name: "Scale",
    icon: Crown,
    tagline: "For funded startups & teams",
    monthly: 1899,
    yearly: 1599,
    badge: "Best Value",
    cta: "Talk to an expert",
    highlight: false,
    features: [
      "Everything in Complete",
      "Bookkeeping (up to 100 txns/mo)",
      "Annual federal & state tax filing",
      "Delaware Franchise Tax filing",
      "Dedicated account manager",
      "Cap table & 83(b) assistance",
      "VC & investor introductions",
    ],
  },
];

const addOns = [
  { icon: Briefcase, title: "Mailroom Premium", price: "$350/yr", desc: "Premium NYC address with unlimited scans" },
  { icon: Shield, title: "Agent Autopilot", price: "$299/yr", desc: "Annual compliance & state filings" },
  { icon: FileText, title: "Bookkeeping", price: "$1,890/yr", desc: "Monthly books, P&L and balance sheet" },
  { icon: Globe2, title: "Tax Filing", price: "$1,799/yr", desc: "Federal + state tax returns" },
];

const compare = [
  { feature: "Company formation (LLC / C-Corp)", starter: true, complete: true, scale: true },
  { feature: "EIN (Tax ID)", starter: true, complete: true, scale: true },
  { feature: "Registered agent", starter: "1 year", complete: "1 year", scale: "Lifetime" },
  { feature: "U.S. business address", starter: false, complete: true, scale: true },
  { feature: "Virtual mailroom", starter: false, complete: true, scale: true },
  { feature: "Compliance autopilot", starter: false, complete: true, scale: true },
  { feature: "Bookkeeping", starter: false, complete: false, scale: true },
  { feature: "Tax filing", starter: false, complete: false, scale: true },
  { feature: "Dedicated manager", starter: false, complete: false, scale: true },
  { feature: "Lifetime support", starter: true, complete: true, scale: true },
];

const faqs = [
  { q: "Are there any hidden fees?", a: "Never. The price you see includes state filing fees, registered agent (year 1), EIN, and all required documents. No surprises." },
  { q: "What's the difference between monthly and yearly?", a: "Yearly billing saves you up to 20%. You get the same features either way — pick what fits your cash flow." },
  { q: "Can I upgrade later?", a: "Absolutely. You can upgrade from Starter to Complete or Scale at any time and we prorate the difference." },
  { q: "Do you offer refunds?", a: "Yes — if we haven't filed your formation paperwork yet, we offer a full refund. Once filed, state fees are non-refundable." },
  { q: "Which state should I incorporate in?", a: "Delaware for startups raising venture capital. Wyoming for asset protection and lower fees. We'll guide you on a free call." },
];

const Pricing = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-40 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-5 md:px-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.18em] mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Transparent Pricing
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-[1.05] mb-5">
            One price.
            <br />
            <span className="text-gradient">Zero surprises.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Form your U.S. company, get your EIN, and open a bank account — all
            from a single, honest price.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-muted p-1.5 rounded-full">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 md:px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                billing === "monthly"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              One-time
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-5 md:px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${
                billing === "yearly"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              Yearly
              <span className="text-[10px] font-extrabold bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-5 md:px-4">
          <div className="grid lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
            {plans.map((plan) => {
              const price = billing === "yearly" ? plan.yearly : plan.monthly;
              return (
                <div
                  key={plan.name}
                  className={`relative rounded-3xl p-7 md:p-8 flex flex-col transition-all duration-500 ${
                    plan.highlight
                      ? "bg-primary shadow-2xl shadow-primary/30 lg:-translate-y-4 lg:scale-[1.03]"
                      : "bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider ${
                          plan.highlight
                            ? "bg-primary-foreground text-primary"
                            : "bg-foreground text-background"
                        }`}
                      >
                        <Sparkles className="h-3 w-3" />
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div
                    className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-6 ${
                      plan.highlight
                        ? "bg-primary-foreground/15"
                        : "bg-muted"
                    }`}
                  >
                    <plan.icon
                      className={`h-7 w-7 ${
                        plan.highlight ? "text-primary-foreground" : "text-foreground"
                      }`}
                    />
                  </div>

                  <h3
                    className={`text-2xl md:text-3xl font-extrabold font-display mb-1 ${
                      plan.highlight ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mb-6 ${
                      plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  <div className="mb-1 flex items-baseline gap-2">
                    <span
                      className={`text-5xl md:text-6xl font-extrabold font-display tracking-tight ${
                        plan.highlight ? "text-primary-foreground" : "text-foreground"
                      }`}
                    >
                      ${price}
                    </span>
                    {billing === "yearly" && plan.monthly !== plan.yearly && (
                      <span
                        className={`text-base line-through ${
                          plan.highlight ? "text-primary-foreground/40" : "text-muted-foreground/60"
                        }`}
                      >
                        ${plan.monthly}
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-sm mb-8 ${
                      plan.highlight ? "text-primary-foreground/60" : "text-muted-foreground"
                    }`}
                  >
                    USD · {billing === "yearly" ? "Billed yearly" : "One-time fee"}
                  </p>

                  <Button
                    size="lg"
                    className={`rounded-full w-full mb-8 h-13 text-sm font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${
                      plan.highlight
                        ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                        : "bg-foreground text-background hover:bg-foreground/90"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <div className="space-y-3.5 flex-1">
                    {plan.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          className={`h-5 w-5 shrink-0 mt-0.5 ${
                            plan.highlight
                              ? "text-primary-foreground"
                              : "text-primary"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            plan.highlight
                              ? "text-primary-foreground/90"
                              : "text-foreground"
                          }`}
                        >
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust strip */}
          <div className="mt-14 md:mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-muted-foreground">
            {[
              { icon: Shield, label: "Money-back guarantee" },
              { icon: Clock, label: "Filed in 1–3 days" },
              { icon: Users, label: "500+ founders served" },
              { icon: Star, label: "4.9/5 average rating" },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-2.5 text-sm font-medium">
                <t.icon className="h-4 w-4 text-primary" />
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-5 md:px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3">
              Power-ups
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display mb-4 leading-tight">
              Add only what you <span className="text-gradient">actually need</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Mix and match services. No bundles. No fluff.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {addOns.map((a, i) => (
              <div
                key={i}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <a.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-extrabold font-display text-lg">{a.title}</h3>
                  <span className="text-sm font-bold text-primary whitespace-nowrap">{a.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE TABLE */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3">
              Compare Plans
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display mb-4 leading-tight">
              Find the <span className="text-gradient">right fit</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-5 md:p-6 text-sm font-bold text-muted-foreground uppercase tracking-wider">
                    Feature
                  </th>
                  {plans.map((p) => (
                    <th
                      key={p.name}
                      className={`p-5 md:p-6 text-center font-extrabold font-display text-lg ${
                        p.highlight ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compare.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors"
                  >
                    <td className="p-5 md:p-6 text-sm md:text-base font-medium">
                      {row.feature}
                    </td>
                    {(["starter", "complete", "scale"] as const).map((key) => {
                      const v = row[key];
                      return (
                        <td key={key} className="p-5 md:p-6 text-center">
                          {typeof v === "boolean" ? (
                            v ? (
                              <CheckCircle2 className="h-5 w-5 text-primary mx-auto" />
                            ) : (
                              <span className="text-muted-foreground/40">—</span>
                            )
                          ) : (
                            <span className="text-sm font-bold text-foreground">{v}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-5 md:px-4 max-w-5xl">
          <div className="relative bg-primary rounded-3xl p-10 md:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(0,0%,100%,0.1)_0%,_transparent_50%)]" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl" />
            <div className="relative z-10 grid md:grid-cols-[auto_1fr] gap-8 md:gap-10 items-center">
              <div className="h-24 w-24 md:h-28 md:w-28 rounded-3xl bg-primary-foreground/15 flex items-center justify-center shrink-0 mx-auto md:mx-0">
                <Shield className="h-12 md:h-14 w-12 md:w-14 text-primary-foreground" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-extrabold font-display text-primary-foreground mb-3 leading-tight">
                  100% Money-Back Guarantee
                </h3>
                <p className="text-primary-foreground/80 text-base md:text-lg mb-6">
                  If we haven't filed your paperwork, we'll refund every penny —
                  no questions, no friction. We only win when you launch.
                </p>
                <Button
                  size="lg"
                  className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold shadow-lg h-12 px-8"
                >
                  Start risk-free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-5 md:px-4 max-w-3xl">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.18em] mb-5">
              <HelpCircle className="h-3.5 w-3.5" />
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight">
              Pricing <span className="text-gradient">questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-2xl px-5 md:px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-bold font-display hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-5 md:px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.18em] mb-6">
            <TrendingUp className="h-3.5 w-3.5" />
            Ready when you are
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-[1.05] mb-5">
            Launch your U.S. company
            <br />
            <span className="text-gradient">in days, not months.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 500+ founders who chose Foundo to start, run, and grow their
            U.S. business — from anywhere in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="rounded-full px-8 h-13 text-base font-bold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
            >
              Get started — $399
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 h-13 text-base font-bold border-foreground text-foreground hover:bg-foreground hover:text-background w-full sm:w-auto"
              >
                Talk to an expert
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
