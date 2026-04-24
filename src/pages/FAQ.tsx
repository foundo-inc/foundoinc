import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  CreditCard,
  FileText,
  Banknote,
  ShieldCheck,
  HelpCircle,
  MessageCircle,
  Mail,
  ArrowRight,
  Sparkles,
} from "lucide-react";

type Category = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  faqs: { q: string; a: string }[];
};

const categories: Category[] = [
  {
    id: "general",
    label: "General",
    icon: HelpCircle,
    faqs: [
      { q: "What is Foundo?", a: "Foundo is an all-in-one platform that helps non-U.S. residents form, run, and grow a U.S. company — including LLC formation, EIN, U.S. bank account, registered agent, and ongoing compliance." },
      { q: "Do I need to be a U.S. citizen to use Foundo?", a: "No. Foundo is built specifically for non-U.S. residents. You don't need a Social Security Number, a U.S. address, or to ever step foot in the U.S." },
      { q: "Which countries do you support?", a: "We support founders from 175+ countries worldwide. If you have a valid passport, we can help you launch a U.S. company." },
      { q: "How is Foundo different from competitors?", a: "Most providers stop at formation. Foundo bundles formation, EIN, bank account, registered agent, compliance, and founder support into a single yearly plan — with humans on WhatsApp when you need help." },
    ],
  },
  {
    id: "formation",
    label: "Formation & EIN",
    icon: Building2,
    faqs: [
      { q: "How long does LLC formation take?", a: "Standard formation is 3–5 business days. Expedited filings can be completed in as little as 1 business day depending on the state." },
      { q: "How long does it take to get an EIN?", a: "EINs typically take 2–4 weeks for non-U.S. founders. We file directly with the IRS via Form SS-4 — no SSN required." },
      { q: "Which state should I form my LLC in?", a: "Wyoming, Delaware, and New Mexico are the most popular choices for international founders. We help you pick the right one based on your business model." },
      { q: "Can I change my state later?", a: "Yes — we offer domestication and re-formation services if you decide to move your LLC to a different state down the line." },
    ],
  },
  {
    id: "banking",
    label: "Banking & Payments",
    icon: Banknote,
    faqs: [
      { q: "Can I open a U.S. bank account remotely?", a: "Yes. We partner with Mercury, Airwallex, Payoneer, and other fintechs that allow non-residents to open U.S. business accounts 100% online." },
      { q: "Will I get a debit card?", a: "Yes — most of our banking partners ship physical and virtual debit cards internationally once your account is approved." },
      { q: "Can I accept Stripe payments?", a: "Absolutely. Once your LLC and EIN are ready, we guide you through activating Stripe, PayPal, and other payment processors for your U.S. entity." },
      { q: "What if my bank application is rejected?", a: "Approvals depend on our banking partners. If not approved, we will guide you and help you apply with a better-suited alternative." },
    ],
  },
  {
    id: "compliance",
    label: "Compliance & Taxes",
    icon: ShieldCheck,
    faqs: [
      { q: "Do I need to file U.S. taxes?", a: "Yes, most U.S. companies have annual filing requirements. We will guide you and handle the process to keep your company compliant." },
      { q: "What is a Registered Agent and do I need one?", a: "A Registered Agent receives legal mail on behalf of your LLC. It's required in every state — and included free in your Foundo plan." },
      { q: "Will you remind me about deadlines?", a: "Yes. We track every annual report, franchise tax, and federal filing deadline and notify you well in advance." },
    ],
  },
  {
    id: "pricing",
    label: "Pricing & Billing",
    icon: CreditCard,
    faqs: [
      { q: "How much does Foundo cost?", a: "Foundo Complete is $199/month billed yearly + a one-time $399 setup fee. State filing fees are passed through at cost." },
      { q: "Are there hidden fees?", a: "Never. The only additional cost is the state's official filing fee, which we show transparently before you check out." },
      { q: "Can I cancel anytime?", a: "Yes. You can cancel your renewal anytime. Your LLC stays active — we just stop providing renewal services." },
      { q: "Do you offer refunds?", a: "If we fail to form your LLC, you get a 100% refund. State fees are non-refundable once filed with the government." },
    ],
  },
  {
    id: "support",
    label: "Support",
    icon: MessageCircle,
    faqs: [
      { q: "How do I contact support?", a: "Email us at info@foundo.co or message us on WhatsApp 24/7. We respond within a few hours, usually faster." },
      { q: "Do you offer 1-on-1 onboarding?", a: "Yes — every Foundo Complete customer gets a personal onboarding call with a U.S. business specialist." },
      { q: "Can you help after my LLC is formed?", a: "Definitely. Compliance, taxes, banking issues, Stripe setup, payroll — we're with you for the long haul." },
    ],
  },
];

const FAQPage = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categories
      .filter((c) => activeCategory === "all" || c.id === activeCategory)
      .map((c) => ({
        ...c,
        faqs: q
          ? c.faqs.filter(
              (f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
            )
          : c.faqs,
      }))
      .filter((c) => c.faqs.length > 0);
  }, [query, activeCategory]);

  const totalCount = categories.reduce((acc, c) => acc + c.faqs.length, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-background">
        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-5 gap-1.5 px-3 py-1.5">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold">Help Center</span>
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] mb-5">
              How can we <span className="text-gradient">help you?</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse {totalCount}+ answers about forming and running your U.S. company from anywhere in the world.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="pb-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-card text-foreground border-border hover:border-primary/40"
              }`}
            >
              All Topics
            </button>
            {categories.map((c) => {
              const Icon = c.icon;
              const active = activeCategory === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                    active
                      ? "bg-primary text-primary-foreground border-primary shadow-sm"
                      : "bg-card text-foreground border-border hover:border-primary/40"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto space-y-10">
            {filtered.length === 0 && (
              <div className="text-center py-16 bg-card border border-border rounded-2xl">
                <HelpCircle className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-bold mb-2">No matches found</h3>
                <p className="text-muted-foreground mb-6">Try a different search or reach out to our team.</p>
                <Button asChild>
                  <Link to="/contact">Contact Support</Link>
                </Button>
              </div>
            )}

            {filtered.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.id}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold font-display">{cat.label}</h2>
                    <span className="text-sm text-muted-foreground">({cat.faqs.length})</span>
                  </div>

                  <Accordion type="single" collapsible className="space-y-3">
                    {cat.faqs.map((faq, i) => (
                      <AccordionItem
                        key={i}
                        value={`${cat.id}-${i}`}
                        className="border border-border rounded-xl px-5 md:px-6 bg-card data-[state=open]:border-primary/30 data-[state=open]:shadow-sm transition-all"
                      >
                        <AccordionTrigger className="text-left font-semibold text-sm md:text-base py-4 md:py-5 hover:no-underline hover:text-primary transition-colors">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-5">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-foreground relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-background leading-[1.05] tracking-tighter mb-6">
            Ready to join the <span className="text-gradient-light">Foundo family?</span>
          </h2>
          <p className="text-lg md:text-xl text-background/70 mb-10 max-w-2xl mx-auto">
            Hundreds of founders trusted us with their dream. Yours could be next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full text-base font-semibold px-8 h-14 shadow-xl shadow-primary/30">
              <a href="/dashboard">Start Your Business <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="rounded-full text-base font-semibold px-8 h-14 bg-transparent border-background/20 text-background hover:bg-background/10 hover:text-background">
                Talk to Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
