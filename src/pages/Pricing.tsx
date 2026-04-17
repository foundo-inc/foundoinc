import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Sparkles,
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
  Rocket,
  Zap,
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

const includedLeft = [
  "Company formation (LLC or C-Corp)",
  "Expedited Tax ID (EIN) setup",
  "Zero filing fees for all documents",
  "Business bank account setup",
  "Mailroom Premium — address & mailbox",
  "Agent Autopilot — compliance & filings",
];

const includedRight = [
  "Accounting & Tax Filing included",
  "All essential legal documents",
  "Get discovered by VCs",
  "More than $350K in partner deals",
  "Lifetime expert support",
  "Stripe & Mercury fast-track",
];

const stats = [
  { icon: Users, value: "500+", label: "Founders trust us" },
  { icon: Shield, value: "100%", label: "Compliance rate" },
  { icon: Zap, value: "48hrs", label: "Avg. setup time" },
];

const optionalAddOns = [
  { icon: Briefcase, title: "Premium NYC Address", price: "$350/yr", desc: "Prestigious Manhattan business address" },
  { icon: Globe2, title: "Multi-state Expansion", price: "$499", desc: "Register your company in additional states" },
  { icon: FileText, title: "Trademark Filing", price: "$299", desc: "Protect your brand with USPTO filing" },
];

const faqs = [
  { q: "Why just one package?", a: "Because choice paralysis kills momentum. After 500+ formations we know exactly what founders need on day one — so we put it all in a single, honest price." },
  { q: "Are there any hidden fees?", a: "Never. The price you see includes state filing fees, registered agent, EIN, and every document required. No surprises." },
  { q: "What about state filing fees?", a: "Included. Whether you choose Delaware, Wyoming, or another state — we cover the filing fee in your package price." },
  { q: "Can I cancel later?", a: "Yes. Your formation is yours forever. The recurring services (mailroom, agent, accounting) can be cancelled anytime — no contracts." },
  { q: "Do you offer refunds?", a: "If we haven't filed your formation paperwork yet, we offer a full refund. Once filed, state fees are non-refundable but our service fee is." },
  { q: "Which state should I incorporate in?", a: "Delaware for startups raising venture capital. Wyoming for asset protection and lower fees. We'll guide you on a free call." },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-5 md:px-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.18em] mb-6">
            <Rocket className="h-3.5 w-3.5" />
            All-In-One Package
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-[1.05] mb-5">
            One package.
            <br />
            <span className="text-gradient">Everything included.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            No tiers. No upsells. No confusion. Just one honest price to launch
            and run your U.S. company.
          </p>
        </div>
      </section>

      {/* MAIN PACKAGE CARD */}
      <section className="pb-20 md:pb-24">
        <div className="container mx-auto px-5 md:px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/25 bg-primary">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(0,0%,100%,0.1)_0%,_transparent_60%)]" />
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />

              <div className="grid lg:grid-cols-5 relative z-10">
                {/* LEFT — Pricing */}
                <div className="lg:col-span-2 p-7 sm:p-9 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-primary-foreground/10">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-3 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider mb-6">
                      <Sparkles className="h-3 w-3" />
                      Best Value
                    </div>

                    <h3 className="text-3xl md:text-4xl font-extrabold font-display mb-2 text-primary-foreground">
                      Foundo Complete
                    </h3>
                    <p className="text-primary-foreground/60 text-sm mb-8">
                      Everything to start & scale your U.S. business
                    </p>

                    <div className="mb-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl md:text-6xl font-extrabold font-display text-primary-foreground leading-none">
                          $199
                        </span>
                        <span className="text-primary-foreground/50 text-sm">/month</span>
                      </div>
                      <div className="flex items-center gap-3 mt-3">
                        <span className="text-sm line-through text-primary-foreground/30">$362/mo</span>
                        <span className="text-xs font-extrabold text-primary-foreground bg-primary-foreground/15 px-2.5 py-1 rounded-full">
                          SAVE 45%
                        </span>
                      </div>
                      <p className="text-xs text-primary-foreground/40 mt-3">
                        Billed yearly · One-time formation fee $399
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button
                      size="lg"
                      className="rounded-full w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold h-13 md:h-14 text-base shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                    >
                      Get started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-center text-xs text-primary-foreground/40 mt-3">
                      No credit card required to start
                    </p>
                  </div>
                </div>

                {/* RIGHT — Features */}
                <div className="lg:col-span-3 p-7 sm:p-9 md:p-12">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-primary-foreground/50 mb-6">
                    What's included
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                    {[...includedLeft, ...includedRight].map((f, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="h-5 w-5 rounded-full bg-primary-foreground/15 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary-foreground" />
                        </div>
                        <span className="text-sm text-primary-foreground/85 leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 pt-8 border-t border-primary-foreground/10">
                    <div className="grid grid-cols-3 gap-4">
                      {stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <stat.icon className="h-5 w-5 text-primary-foreground/70 mx-auto mb-2" />
                          <p className="text-lg md:text-xl font-extrabold font-display text-primary-foreground">{stat.value}</p>
                          <p className="text-xs text-primary-foreground/50">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust strip */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-muted-foreground">
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
        </div>
      </section>

      {/* OPTIONAL ADD-ONS */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-5 md:px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3">
              Optional Power-ups
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display mb-4 leading-tight">
              Add only what you <span className="text-gradient">actually need</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Your package already includes everything to launch. These are extras for when you grow.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {optionalAddOns.map((a, i) => (
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

      {/* GUARANTEE */}
      <section className="py-20 md:py-28">
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
      <section className="py-20 md:py-28 bg-muted/30">
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
      <section className="py-24 md:py-32">
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
              Get started — $199/mo
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
