import { Link } from "react-router-dom";
import {
  Sparkles,
  Mail,
  MessageCircle,
  ArrowRight,
  LayoutDashboard,
  FileText,
  Bell,
  CreditCard,
  Users,
  Shield,
  CheckCircle2,
  Clock,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WHATSAPP_NUMBER = "1234567890"; // TODO: replace with real number
const ORDER_EMAIL = "orders@foundoinc.com";

const whatsappMessage = encodeURIComponent(
  "Hi Foundo team! 👋 I'd like to place an order to start my US LLC formation. Can you guide me through the next steps?",
);
const emailSubject = encodeURIComponent("New Order Request — US LLC Formation");
const emailBody = encodeURIComponent(
  `Hi Foundo team,

I'd like to place an order with the following details:

• Full name: 
• Country of residence: 
• Preferred state (Wyoming / Delaware / New Mexico / Other): 
• Business activity: 
• Add-ons (if any): 

Please send me the next steps and an invoice.

Thanks!`,
);

const upcomingFeatures = [
  {
    icon: FileText,
    title: "Document Vault",
    description: "All formation docs, EIN letters & agreements in one secure place.",
  },
  {
    icon: Bell,
    title: "Compliance Alerts",
    description: "Never miss an annual report or BOI filing deadline again.",
  },
  {
    icon: CreditCard,
    title: "Banking Status",
    description: "Track Mercury, Wise & Payoneer applications in real time.",
  },
  {
    icon: Users,
    title: "Live Chat with Experts",
    description: "Message your dedicated formation specialist anytime.",
  },
  {
    icon: Shield,
    title: "Tax & Legal Hub",
    description: "Download tax forms, agreements & legal templates instantly.",
  },
  {
    icon: Rocket,
    title: "One-Click Add-ons",
    description: "Upgrade banking, bookkeeping or tax filing in seconds.",
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute top-40 -right-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Coming Soon
            </div>

            <h1 className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
              Your Client Dashboard is{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                almost ready
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              We're building a beautiful, all-in-one place to manage your US company,
              banking, compliance & documents. In the meantime, place your order in
              under 60 seconds via email or WhatsApp.
            </p>

            {/* Primary CTAs */}
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="xl"
                className="w-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25 hover:bg-[#20bd5a] sm:w-auto"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Order via WhatsApp
                </a>
              </Button>

              <Button asChild size="xl" variant="hero" className="w-full sm:w-auto">
                <a href={`mailto:${ORDER_EMAIL}?subject=${emailSubject}&body=${emailBody}`}>
                  <Mail className="h-5 w-5" />
                  Order via Email
                </a>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-primary" /> Response in &lt; 1 hour
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" /> 100% money-back guarantee
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-primary" /> Trusted by 2,000+ founders
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How to order in the meantime */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              How to place an order today
            </h2>
            <p className="mt-3 text-muted-foreground">
              Three simple steps — no dashboard required.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Reach out",
                desc: "Tap WhatsApp or Email above and tell us a bit about your business.",
              },
              {
                step: "02",
                title: "Get your invoice",
                desc: "We'll send a secure payment link within 1 hour. Pay by card, wire or crypto.",
              },
              {
                step: "03",
                title: "We file in 24h",
                desc: "Your LLC, EIN & banking apps are kicked off the same business day.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="font-heading text-5xl font-bold text-primary/15 transition-colors group-hover:text-primary/30">
                  {item.step}
                </div>
                <h3 className="mt-2 font-heading text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's coming */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background px-4 py-1.5 text-sm font-medium text-primary">
              <LayoutDashboard className="h-4 w-4" />
              What's launching soon
            </div>
            <h2 className="mt-4 font-heading text-3xl font-bold text-foreground md:text-4xl">
              Everything you need, in one dashboard
            </h2>
            <p className="mt-3 text-muted-foreground">
              Built from feedback by 2,000+ founders running US companies remotely.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-10 text-center md:p-16">
            <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <h2 className="relative font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to launch your US company?
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-primary-foreground/80">
              Don't wait for the dashboard — we'll personally walk you through every
              step today.
            </p>

            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="xl"
                className="w-full bg-[#25D366] text-white hover:bg-[#20bd5a] sm:w-auto"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button asChild size="xl" variant="heroOutline" className="w-full sm:w-auto">
                <Link to="/pricing">
                  View Pricing
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
