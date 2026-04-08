import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MessageCircle, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const contactInfo = [
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "#" },
  { icon: Mail, label: "Email", value: "info@foundo.com", href: "mailto:info@foundo.com" },
  { icon: MapPin, label: "Address", value: "Wyoming, United States", href: "#" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", message: "" });
      toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    }, 1200);
  };

  return (
    <section className="py-20 md:py-24 lg:py-28 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 mb-6">
            <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight mb-4">
            Have Questions? <span className="text-gradient">Let's Talk.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Our team is ready to help you start your U.S. business journey.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300 shrink-0">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">{label}</p>
                  <p className="text-base font-bold text-foreground">{value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 rounded-2xl border border-border bg-card p-8 md:p-10 flex flex-col gap-5">
            <div>
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="h-12 rounded-xl bg-muted/50 border-border text-base"
              />
              {errors.name && <p className="text-destructive text-xs mt-1.5">{errors.name}</p>}
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="h-12 rounded-xl bg-muted/50 border-border text-base"
              />
              {errors.email && <p className="text-destructive text-xs mt-1.5">{errors.email}</p>}
            </div>
            <div>
              <Textarea
                placeholder="How can we help you?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="min-h-[140px] rounded-xl bg-muted/50 border-border text-base resize-none"
              />
              {errors.message && <p className="text-destructive text-xs mt-1.5">{errors.message}</p>}
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={sending}
              className="rounded-full h-14 px-10 text-base font-semibold shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              {sending ? "Sending..." : "Send Message"} <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
