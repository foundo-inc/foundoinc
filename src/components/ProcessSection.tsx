import { UserPlus, FileEdit, Landmark, Rocket } from "lucide-react";

const steps = [
  { icon: UserPlus, num: "01", title: "Sign Up & Choose", desc: "Create your account and select the best state for your LLC — Wyoming, Delaware, or any other." },
  { icon: FileEdit, num: "02", title: "We Handle Paperwork", desc: "Our team files your Articles of Organization, obtains your EIN, and drafts your Operating Agreement." },
  { icon: Landmark, num: "03", title: "Open Bank Account", desc: "We connect you with partner banks to open a U.S. business bank account remotely." },
  { icon: Rocket, num: "04", title: "Start Accepting Pay", desc: "Activate Stripe, PayPal, or other payment gateways. You're ready to do business globally." },
];

const ProcessSection = () => (
  <section id="how-it-works" className="py-28 md:py-36 section-dark relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-pattern opacity-50" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_hsl(230,97%,46%,0.08)_0%,_transparent_60%)]" />
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 glass-card-dark rounded-full px-4 py-2 mb-6">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">How It Works</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display text-primary-foreground">
          From Zero to U.S. Business
          <br className="hidden md:block" />
          in <span className="text-gradient-light">4 Simple Steps</span>
        </h2>
        <p className="text-primary-foreground/50 text-lg">No lawyers, no complexity. Easy as signing up for an app.</p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div key={i} className="group text-center glass-card-dark rounded-2xl p-8 card-hover relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="relative inline-flex mb-6">
                <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-105">
                  <s.icon className="h-9 w-9 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-lg shadow-primary/30 ring-2 ring-primary/20">
                  {s.num}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2 font-display text-primary-foreground">{s.title}</h3>
              <p className="text-primary-foreground/50 text-sm leading-relaxed">{s.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-primary/30 to-transparent" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
