import {
  ArrowRight,
  Shield,
  FileText,
  Briefcase,
  Globe2,
  Receipt,
  Scale,
  CreditCard,
  Building,
  BookOpen,
  Landmark,
  HelpCircle,
  Rocket,
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
import PricingSection from "@/components/PricingSection";

const optionalAddOns = [
  { icon: Briefcase, title: "Premium NYC Address", price: "$350/yr", desc: "Prestigious Manhattan business address" },
  { icon: Globe2, title: "Multi-state Expansion", price: "$499", desc: "Register your company in additional states" },
  { icon: FileText, title: "Trademark Filing", price: "$299", desc: "Protect your brand with USPTO filing" },
  { icon: Receipt, title: "Sales Tax Setup", price: "$249", desc: "Register for sales tax in any U.S. state" },
  { icon: Scale, title: "Legal Document Pack", price: "$199", desc: "NDAs, contractor & client agreements" },
  { icon: CreditCard, title: "Stripe Atlas Migration", price: "$399", desc: "Move from Atlas to Foundo, hassle-free" },
  { icon: Building, title: "EIN-Only Service", price: "$149", desc: "Get your Tax ID without forming a company" },
  { icon: BookOpen, title: "Bookkeeping Pro", price: "$1,890/yr", desc: "Monthly books, P&L and balance sheet" },
  { icon: Landmark, title: "Annual Tax Filing", price: "$1,799/yr", desc: "Federal + state corporate tax returns" },
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

      <PricingSection />

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

      <Footer />
    </div>
  );
};

export default Pricing;
