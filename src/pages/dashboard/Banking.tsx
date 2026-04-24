import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { banking, messages } from "@/lib/dashboard-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Clock, AlertCircle, Plus, MessageCircle, Send, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const meta = {
  approved: { label: "Approved", color: "bg-success/10 text-success border-success/20", icon: CheckCircle2 },
  in_review: { label: "In review", color: "bg-primary/10 text-primary border-primary/20", icon: Clock },
  action_needed: { label: "Action needed", color: "bg-warning/10 text-warning border-warning/20", icon: AlertCircle },
  available: { label: "Available", color: "bg-muted text-muted-foreground border-border", icon: Plus },
} as const;

const WHATSAPP = "https://api.whatsapp.com/send?phone=919510022071&text=Hi!%20I%20need%20help%20from%20my%20dashboard.";

const Banking = () => {
  const [msg, setMsg] = useState("");

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tighter text-foreground">Banking & Support</h2>
        <p className="text-muted-foreground mt-1">Track your banking applications and chat with your specialist.</p>
      </div>

      {/* Banking grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {banking.map((b) => {
          const m = meta[b.status];
          const Icon = m.icon;
          return (
            <div key={b.name} className="rounded-2xl border border-border bg-card p-5 card-hover-glow transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">
                  {b.name[0]}
                </div>
                <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${m.color}`}>
                  <Icon className="h-3 w-3" /> {m.label}
                </span>
              </div>
              <h3 className="font-bold text-foreground">{b.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4 leading-relaxed">{b.description}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Updated {b.lastUpdate}</span>
                {b.status === "available" ? (
                  <Button onClick={() => toast.success("Specialist will reach out shortly")} size="sm" variant="outline" className="rounded-full text-xs h-8">
                    Apply
                  </Button>
                ) : (
                  <Button onClick={() => toast("Coming soon")} size="sm" variant="ghost" className="rounded-full text-xs h-8">
                    Details
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Support */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-border bg-card overflow-hidden flex flex-col">
          <div className="p-5 border-b border-border flex items-center gap-3">
            <div className="h-10 w-10 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold">S</div>
            <div>
              <p className="font-bold text-foreground">Sara — Your Foundo specialist</p>
              <p className="text-xs text-success font-semibold flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-success" /> Online · usually replies in &lt; 1 hour
              </p>
            </div>
          </div>

          <div className="flex-1 p-5 space-y-4 max-h-96 overflow-y-auto">
            {messages.map((m, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="h-9 w-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {m.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <p className="text-sm font-semibold text-foreground">{m.from}</p>
                    <p className="text-xs text-muted-foreground">{m.time}</p>
                  </div>
                  <div className="rounded-2xl rounded-tl-sm bg-muted/60 px-4 py-2.5 text-sm text-foreground leading-relaxed">{m.text}</div>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!msg.trim()) return;
              toast.success("Message sent! Sara will reply shortly.");
              setMsg("");
            }}
            className="p-4 border-t border-border flex items-center gap-2"
          >
            <Input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Type a message…" className="h-11 rounded-xl flex-1" />
            <Button type="submit" size="icon" className="rounded-xl h-11 w-11 shadow-lg shadow-primary/20">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>

        <div className="space-y-4">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-border bg-card p-5 card-hover-glow transition-all group"
          >
            <div className="h-11 w-11 rounded-xl bg-success/10 flex items-center justify-center mb-3">
              <MessageCircle className="h-5 w-5 text-success" />
            </div>
            <p className="font-bold text-foreground">WhatsApp</p>
            <p className="text-sm text-muted-foreground mt-0.5">Chat with us instantly</p>
          </a>
          <a
            href="mailto:info@foundo.co"
            className="block rounded-2xl border border-border bg-card p-5 card-hover-glow transition-all group"
          >
            <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <p className="font-bold text-foreground">Email</p>
            <p className="text-sm text-muted-foreground mt-0.5">info@foundo.co</p>
          </a>
          <a
            href="tel:+19832124409"
            className="block rounded-2xl border border-border bg-card p-5 card-hover-glow transition-all group"
          >
            <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <p className="font-bold text-foreground">Call us</p>
            <p className="text-sm text-muted-foreground mt-0.5">+1 (983) 212-4409</p>
          </a>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Banking;
