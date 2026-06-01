import { ArrowRight, Sparkles, Target, Heart, Globe2, Shield, Zap, Users, Trophy, TrendingUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const whatsappLink = "https://api.whatsapp.com/send?phone=919510022071&text=Hi!%20%F0%9F%91%8B%20I%27d%20like%20to%20know%20more.%20Is%20anyone%20free%20to%20chat?";

const values = [
  { icon: Target, title: "Founder First", desc: "Every decision we make starts with one question: does this help founders win?" },
  { icon: Heart, title: "Radical Honesty", desc: "No hidden fees. No legal jargon. Just clear answers and real timelines." },
  { icon: Zap, title: "Move Fast", desc: "Your business shouldn't wait weeks. We deliver in days — sometimes hours." },
  { icon: Shield, title: "Compliance Built-In", desc: "We handle the boring stuff so you can focus on building something incredible." },
];

const stats = [
  { value: "700+", label: "Founders Served", icon: Trophy },
  { value: "35+", label: "Countries Served", icon: Globe2 },
  { value: "300+", label: "ITINs Issued", icon: TrendingUp },
  { value: "98%", label: "Client Satisfaction", icon: Heart },
];

const milestones = [
  { year: "2023", title: "The Beginning", desc: "Our founder set out to make U.S. company formation simple and accessible for global founders." },
  { year: "2024", title: "First 100 Founders", desc: "Helped our first 100 international founders successfully launch their U.S. businesses." },
  { year: "2025", title: "Foundo Launched", desc: "Introduced Foundo — a streamlined platform built to help founders start and manage U.S. companies with ease." },
  { year: "2026", title: "Global Expansion", desc: "Now supporting founders in 35+ countries with a 98% satisfaction rate." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full bg-primary/[0.05] blur-3xl" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />

        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary/[0.06] border border-primary/10 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm font-semibold tracking-wide">About Foundo</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.05] mb-6 tracking-tighter animate-fade-up">
            We help founders <span className="text-gradient">build globally</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up-delay">
            Foundo exists for one reason — to remove every barrier between an ambitious founder and a fully operational U.S. company.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 border-y border-border/50 bg-muted/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {stats.map((s, i) => (
              <div key={i} className="text-center group">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-3 group-hover:bg-primary/15 transition-colors">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">{s.value}</p>
                <p className="text-sm md:text-base text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Our Mission</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-[1.1] tracking-tighter mb-6">
                Borders shouldn&apos;t decide <span className="text-gradient">who gets to build.</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                The American market is the largest in the world — yet for most international founders, accessing it feels impossible. Endless paperwork. Confusing tax codes. Banks that don&apos;t return your calls.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                We built Foundo to fix that. One platform, one flat price, one clear path from idea to incorporated.
              </p>
              <div className="space-y-3">
                {[
                  "100% online — no embassy visits required",
                  "EIN, ITIN, and bank account included",
                  "Real human support in your timezone",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-border bg-card shadow-2xl shadow-primary/[0.08] p-8 md:p-10 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Globe2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Global Founders</p>
                    <p className="text-sm text-muted-foreground">In 50+ countries</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { region: "Asia Pacific", count: "180+ founders", percent: 92 },
                    { region: "Europe", count: "150+ founders", percent: 78 },
                    { region: "Latin America", count: "95+ founders", percent: 60 },
                    { region: "Africa & Middle East", count: "75+ founders", percent: 48 },
                  ].map((r, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2 text-sm">
                        <span className="font-semibold text-foreground">{r.region}</span>
                        <span className="text-muted-foreground">{r.count}</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full" style={{ width: `${r.percent}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-primary/10 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-muted/20 border-y border-border/50">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">What We Stand For</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-[1.1] tracking-tighter mb-4">
              Values that shape every <span className="text-gradient">interaction</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We&apos;re not just another formation service. These principles guide how we work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="group relative rounded-2xl border border-border bg-card p-7 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/[0.06] transition-all duration-300 hover:-translate-y-1">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <v.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Our Journey</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-[1.1] tracking-tighter">
              From idea to <span className="text-gradient">global platform</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent md:-translate-x-px" />
            <div className="space-y-10 md:space-y-16">
              {milestones.map((m, i) => (
                <div key={i} className={`relative flex items-center gap-6 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary ring-4 ring-background z-10" />
                  <div className="hidden md:block flex-1" />
                  <div className="ml-12 md:ml-0 flex-1 rounded-2xl border border-border bg-card p-6 md:p-8 hover:shadow-xl hover:shadow-primary/[0.06] transition-shadow">
                    <p className="text-sm font-bold text-primary mb-2">{m.year}</p>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{m.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
            <Button size="lg" className="rounded-full text-base font-semibold px-8 h-14 shadow-xl shadow-primary/30">
              Start Your Business <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-base font-semibold px-8 h-14 bg-transparent border-background/20 text-background hover:bg-background/10 hover:text-background">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Talk to Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
