import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, Clock, Globe2, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const channels = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    desc: "Fastest replies. Available 7 days a week.",
    value: "+1 (555) 010-1234",
    action: "Chat now",
    accent: true,
  },
  {
    icon: Mail,
    title: "Email Us",
    desc: "We reply within 2 business hours.",
    value: "hello@foundo.com",
    action: "Send email",
  },
  {
    icon: Phone,
    title: "Call Us",
    desc: "Mon–Fri, 9am to 6pm EST.",
    value: "+1 (555) 010-5678",
    action: "Call now",
  },
];

const faqs = [
  { q: "How fast can you form my LLC?", a: "Most formations are complete in 1–3 business days." },
  { q: "Do I need a U.S. address?", a: "No. We provide a registered agent and business address as part of every plan." },
  { q: "What about banking?", a: "We help you open a U.S. business bank account remotely with our partners." },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", country: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Our team will get back to you within 2 business hours.",
      });
      setForm({ name: "", email: "", country: "", message: "" });
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full bg-primary/[0.05] blur-3xl" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />

        <div className="container mx-auto relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/[0.06] border border-primary/10 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm font-semibold tracking-wide">We'd Love to Hear From You</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.05] mb-6 tracking-tighter animate-fade-up">
            Let's <span className="text-gradient">talk business</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-up-delay">
            Have a question, a custom requirement, or just want to chat? Pick whichever channel feels right — we answer them all.
          </p>
        </div>
      </section>

      {/* Channels */}
      <section className="pb-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-5">
            {channels.map((c, i) => (
              <div
                key={i}
                className={`group relative rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 ${
                  c.accent
                    ? "bg-foreground border-foreground text-background hover:shadow-2xl hover:shadow-primary/20"
                    : "bg-card border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/[0.06]"
                }`}
              >
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-5 ${
                  c.accent ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                }`}>
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${c.accent ? "text-background" : "text-foreground"}`}>{c.title}</h3>
                <p className={`text-sm mb-4 leading-relaxed ${c.accent ? "text-background/60" : "text-muted-foreground"}`}>{c.desc}</p>
                <p className={`text-sm font-semibold mb-5 ${c.accent ? "text-background" : "text-foreground"}`}>{c.value}</p>
                <div className={`inline-flex items-center gap-2 text-sm font-semibold ${c.accent ? "text-primary-foreground/90" : "text-primary"} group-hover:gap-3 transition-all`}>
                  {c.action} <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-2xl shadow-primary/[0.05]">
                <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-3">Send a Message</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tighter mb-2">
                  Tell us about your <span className="text-gradient">project</span>
                </h2>
                <p className="text-muted-foreground mb-8">Fill out the form and we'll be in touch shortly.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                      <Input
                        required
                        placeholder="Jane Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                      <Input
                        required
                        type="email"
                        placeholder="jane@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Country</label>
                    <Input
                      placeholder="Where are you based?"
                      value={form.country}
                      onChange={(e) => setForm({ ...form, country: e.target.value })}
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">How can we help?</label>
                    <Textarea
                      required
                      placeholder="Tell us a bit about your business, timeline, and any specific questions..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="min-h-[140px] rounded-xl resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    size="lg"
                    className="w-full rounded-xl h-14 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all"
                  >
                    {loading ? "Sending..." : <>Send Message <Send className="ml-2 h-5 w-5" /></>}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to our Privacy Policy. We'll never share your info.
                  </p>
                </form>
              </div>
            </div>

            {/* Side info */}
            <div className="lg:col-span-2 space-y-5">
              <div className="rounded-2xl border border-border bg-card p-7">
                <div className="flex items-start gap-4 mb-5">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Response Time</h3>
                    <p className="text-sm text-muted-foreground">We're fast. Promise.</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "WhatsApp", time: "~5 minutes" },
                    { label: "Email", time: "~2 hours" },
                    { label: "Form submission", time: "~2 hours" },
                  ].map((r, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                      <span className="text-sm text-muted-foreground">{r.label}</span>
                      <span className="text-sm font-semibold text-foreground">{r.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7">
                <div className="flex items-start gap-4 mb-5">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Our Office</h3>
                    <p className="text-sm text-muted-foreground">Headquartered in Wyoming</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  30 N Gould St, Ste R<br />
                  Sheridan, WY 82801<br />
                  United States
                </p>
              </div>

              <div className="rounded-2xl bg-foreground p-7 text-background relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl" />
                <Globe2 className="h-8 w-8 text-primary mb-4 relative z-10" />
                <h3 className="text-lg font-bold mb-2 relative z-10">Serving Globally</h3>
                <p className="text-sm text-background/70 leading-relaxed relative z-10">
                  Founders from 50+ countries trust Foundo. No matter where you are, we've got you covered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick FAQs */}
      <section className="py-16 md:py-24 bg-muted/20 border-t border-border/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Quick Answers</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground leading-[1.1] tracking-tighter">
              Before you reach out
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/[0.06] transition-all">
                <CheckCircle2 className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-bold text-foreground mb-2">{f.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
