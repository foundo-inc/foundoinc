import { useEffect, useState } from "react";
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
  CheckCircle,
  Clock,
  Rocket,
  Zap,
  Globe2,
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
  { icon: FileText, title: "Document Vault", description: "All formation docs, EIN letters & agreements in one secure place." },
  { icon: Bell, title: "Compliance Alerts", description: "Never miss an annual report or BOI filing deadline again." },
  { icon: CreditCard, title: "Banking Status", description: "Track Mercury, Wise & Payoneer applications in real time." },
  { icon: Users, title: "Live Chat with Experts", description: "Message your dedicated formation specialist anytime." },
  { icon: Shield, title: "Tax & Legal Hub", description: "Download tax forms, agreements & legal templates instantly." },
  { icon: Rocket, title: "One-Click Add-ons", description: "Upgrade banking, bookkeeping or tax filing in seconds." },
];

const useCountdown = (target: Date) => {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff / 3600000) % 24),
      minutes: Math.floor((diff / 60000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const i = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(i);
  }, []);
  return time;
};

const Dashboard = () => {
  const launchDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
  const { days, hours, minutes, seconds } = useCountdown(launchDate);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="absolute top-[-200px] right-[-200px] w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full bg-primary/[0.05] blur-3xl" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/[0.06] border border-primary/10 rounded-full px-4 py-2 mb-6 animate-fade-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-primary text-sm font-semibold tracking-wide">Client Dashboard — Coming Soon</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-foreground leading-[1.05] mb-5 tracking-tighter animate-fade-up">
                Something <span className="text-gradient">powerful</span> is on the way.
              </h1>

              <p className="text-muted-foreground text-base md:text-lg lg:text-xl mb-8 max-w-lg leading-relaxed animate-fade-up-delay">
                Your all-in-one cockpit to manage your U.S. company, banking, compliance and documents.
                Until launch, our team places your order <span className="font-semibold text-foreground">personally — in under an hour.</span>
              </p>

              {/* Countdown */}
              <div className="grid grid-cols-4 gap-2 md:gap-3 max-w-md mb-8 animate-fade-up-delay">
                {[
                  { v: days, l: "Days" },
                  { v: hours, l: "Hours" },
                  { v: minutes, l: "Min" },
                  { v: seconds, l: "Sec" },
                ].map((t, i) => (
                  <div key={i} className="rounded-xl border border-primary/15 bg-primary/[0.04] p-3 md:p-4 text-center backdrop-blur-sm">
                    <div className="text-2xl md:text-3xl font-extrabold text-foreground tabular-nums tracking-tight">
                      {String(t.v).padStart(2, "0")}
                    </div>
                    <div className="text-[10px] md:text-xs text-muted-foreground mt-1 uppercase tracking-wider font-semibold">{t.l}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 animate-fade-up-delay-2">
                <Button asChild size="lg" className="rounded-full text-sm md:text-base font-semibold px-6 md:px-8 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 h-12 md:h-14">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-1 h-4 md:h-5 w-4 md:w-5" /> Order via WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full text-sm md:text-base font-semibold border-border text-foreground hover:bg-muted/50 h-12 md:h-14 px-5 md:px-8">
                  <a href={`mailto:${ORDER_EMAIL}?subject=${emailSubject}&body=${emailBody}`}>
                    <Mail className="mr-1 h-4 md:h-5 w-4 md:w-5" /> Order via Email
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground animate-fade-up-delay-3">
                <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary" /> Reply in &lt; 1 hour</span>
                <span className="inline-flex items-center gap-1.5"><Shield className="h-4 w-4 text-primary" /> 100% money-back</span>
                <span className="inline-flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-primary" /> 2,000+ founders</span>
              </div>
            </div>

            {/* RIGHT — Mock Dashboard Preview */}
            <div className="relative hidden lg:block animate-fade-up-delay">
              <div className="relative">
                {/* Blurred backdrop preview */}
                <div className="rounded-2xl border border-border bg-card shadow-2xl shadow-primary/[0.08] p-6 xl:p-8 select-none">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-3 w-3 rounded-full bg-destructive/40" />
                    <div className="h-3 w-3 rounded-full bg-warning/40" />
                    <div className="h-3 w-3 rounded-full bg-success/40" />
                    <div className="flex-1" />
                    <div className="h-6 w-28 rounded-md bg-muted" />
                  </div>

                  <div className="grid grid-cols-3 gap-3 xl:gap-4 mb-5">
                    {[
                      { icon: Shield, label: "LLC Status", value: "✓ Active" },
                      { icon: Globe2, label: "EIN", value: "98-XXXXXXX" },
                      { icon: CreditCard, label: "Mercury", value: "✓ Live" },
                    ].map((c, i) => (
                      <div key={i} className="rounded-xl bg-primary/[0.06] border border-primary/10 p-4 xl:p-5">
                        <c.icon className="h-5 w-5 text-primary mb-2" />
                        <p className="text-sm font-semibold text-foreground">{c.label}</p>
                        <p className="text-xs text-primary font-bold mt-1">{c.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl bg-muted/50 border border-border p-4 xl:p-5 mb-5">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm font-semibold text-foreground">Compliance Health</p>
                      <span className="text-xs font-bold text-primary">94%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-border overflow-hidden">
                      <div className="h-full w-[94%] hero-gradient animate-pulse-soft" />
                    </div>
                    <div className="mt-4 space-y-2.5">
                      {[
                        { label: "Annual Report", done: true },
                        { label: "BOI Filing", done: true },
                        { label: "Tax Return 1120", active: true },
                      ].map((s, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className={`h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-bold ${s.done ? "bg-primary text-primary-foreground" : "bg-primary/20 text-primary ring-2 ring-primary/30"}`}>
                            {s.done ? "✓" : i + 1}
                          </div>
                          <span className={`text-sm ${s.done ? "text-foreground font-medium" : "text-primary font-semibold"}`}>{s.label}</span>
                          {s.active && <span className="ml-auto text-xs text-primary font-semibold animate-pulse-soft">Due soon</span>}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-primary/[0.04] border border-primary/10 p-4">
                    <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">$12,840 processed this week</p>
                      <p className="text-xs text-muted-foreground">via Stripe & Mercury</p>
                    </div>
                  </div>
                </div>

                {/* Lock overlay */}
                <div className="absolute inset-0 rounded-2xl bg-background/40 backdrop-blur-[2px] flex items-center justify-center">
                  <div className="bg-card border border-primary/20 rounded-2xl px-6 py-5 shadow-xl shadow-primary/10 text-center">
                    <div className="mx-auto h-12 w-12 rounded-full hero-gradient flex items-center justify-center mb-3 glow-primary">
                      <Rocket className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <p className="text-sm font-bold text-foreground">Launching Soon</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Sneak peek of your future cockpit</p>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-3 shadow-lg animate-float">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">In beta</p>
                      <p className="text-xs text-muted-foreground">v1.0 • 30 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO ORDER */}
      <section className="section-alt py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-primary/[0.06] border border-primary/10 rounded-full px-4 py-2 mb-5">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-primary text-sm font-semibold tracking-wide">No Dashboard Required</span>
            </div>
            <h2 className="font-extrabold tracking-tighter mb-4">
              Order in <span className="text-gradient">3 simple steps</span>
            </h2>
            <p className="text-muted-foreground">A real human walks you through it — start to finish.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              { step: "01", icon: MessageCircle, title: "Reach out", desc: "Tap WhatsApp or Email above and tell us about your business." },
              { step: "02", icon: FileText, title: "Get your invoice", desc: "Secure payment link in 1 hour — card, wire or crypto." },
              { step: "03", icon: Rocket, title: "We file in 24h", desc: "LLC, EIN & banking apps kicked off the same business day." },
            ].map((item) => (
              <div key={item.step} className="group relative rounded-2xl border border-border bg-card p-7 card-hover card-hover-glow">
                <div className="flex items-start justify-between mb-5">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:hero-gradient transition-all duration-300">
                    <item.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="font-extrabold text-4xl text-primary/15 group-hover:text-primary/30 transition-colors tracking-tighter">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-bold text-foreground mb-2 text-xl">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S COMING */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-primary/[0.06] border border-primary/10 rounded-full px-4 py-2 mb-5">
              <LayoutDashboard className="h-4 w-4 text-primary" />
              <span className="text-primary text-sm font-semibold tracking-wide">What's launching</span>
            </div>
            <h2 className="font-extrabold tracking-tighter mb-4">
              Everything you need, <span className="text-gradient">in one place</span>
            </h2>
            <p className="text-muted-foreground">Built from feedback by 2,000+ founders running U.S. companies remotely.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {upcomingFeatures.map((feature) => (
              <div key={feature.title} className="group relative rounded-2xl border border-border bg-card p-7 card-hover card-hover-glow">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:hero-gradient transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-xl">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="relative max-w-5xl mx-auto rounded-3xl hero-gradient p-10 md:p-16 overflow-hidden glow-primary">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
                <span className="text-primary-foreground text-sm font-semibold tracking-wide">Don't wait — start today</span>
              </div>

              <h2 className="font-extrabold tracking-tighter text-primary-foreground mb-4">
                Your U.S. company,<br /> live in <span className="text-gradient-light">24 hours</span>.
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-base md:text-lg">
                Skip the dashboard wait. Our specialists handle every step — personally.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                <Button asChild size="lg" className="rounded-full bg-background text-primary hover:bg-background/90 font-semibold h-12 md:h-14 px-6 md:px-8 shadow-xl">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-1 h-5 w-5" /> Chat on WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="heroOutline" className="rounded-full font-semibold h-12 md:h-14 px-6 md:px-8">
                  <Link to="/pricing">View Pricing <ArrowRight className="ml-1 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;
