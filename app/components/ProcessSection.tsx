import { UserPlus, FileEdit, Landmark, Rocket } from "lucide-react";

const steps = [
  { icon: UserPlus, num: "01", title: "Sign Up & Choose", desc: "Create your account and select the best state for your LLC." },
  { icon: FileEdit, num: "02", title: "We Handle Paperwork", desc: "We file Articles of Organization, obtain EIN, and draft agreements." },
  { icon: Landmark, num: "03", title: "Open Bank Account", desc: "Connect with partner banks to open a U.S. account remotely." },
  { icon: Rocket, num: "04", title: "Start Accepting Pay", desc: "Activate Stripe, PayPal, or other gateways. Go global." },
];

const ProcessSection = () => (
  <section id="how-it-works" className="py-20 md:py-28 lg:py-32 bg-background relative">
    <div className="container mx-auto px-5 md:px-4">
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-3 md:mb-4">How It Works</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-5 font-display leading-tight">
          From Zero to U.S. Business in <span className="text-gradient">4 Steps</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">No lawyers, no complexity. Easy as signing up for an app.</p>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {steps.map((s, i) => (
          <div key={i} className="group text-center p-5 md:p-7 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.04] transition-all duration-300 hover:-translate-y-1 relative">
            <div className="relative inline-flex mb-4 md:mb-6">
              <div className="h-14 md:h-18 w-14 md:w-18 rounded-2xl bg-primary/[0.08] flex items-center justify-center group-hover:bg-primary/[0.12] transition-colors">
                <s.icon className="h-6 md:h-8 w-6 md:w-8 text-primary" />
              </div>
              <span className="absolute -top-1.5 -right-1.5 h-6 md:h-7 w-6 md:w-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-md">
                {s.num}
              </span>
            </div>
            <h3 className="font-bold text-base md:text-lg mb-1.5 md:mb-2 font-display">{s.title}</h3>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
