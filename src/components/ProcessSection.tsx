import { UserPlus, FileEdit, Landmark, Rocket } from "lucide-react";

const steps = [
  { icon: UserPlus, num: "01", title: "Sign Up & Choose Your State", desc: "Create your account and select the best state for your LLC — Wyoming, Delaware, or any other. We'll guide you through the options." },
  { icon: FileEdit, num: "02", title: "We Handle the Paperwork", desc: "Our team files your Articles of Organization, obtains your EIN, drafts your Operating Agreement, and sets up your Registered Agent." },
  { icon: Landmark, num: "03", title: "Open Your U.S. Bank Account", desc: "We connect you with partner banks to open a U.S. business bank account remotely — no U.S. visit required." },
  { icon: Rocket, num: "04", title: "Start Accepting Payments", desc: "Activate Stripe, PayPal, or other payment gateways with your new U.S. entity. You're ready to do business globally." },
];

const ProcessSection = () => (
  <section id="how-it-works" className="py-24 md:py-32 section-alt">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">HOW IT WORKS</p>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 font-display">
          From Zero to U.S. Business
          <br className="hidden md:block" />
          in 4 Simple Steps
        </h2>
        <p className="text-muted-foreground text-lg">No lawyers, no complexity. We make it as easy as signing up for an app.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <div key={i} className="text-center">
            <div className="relative inline-flex mb-6">
              <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                <s.icon className="h-9 w-9 text-primary" />
              </div>
              <span className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-lg">
                {s.num}
              </span>
            </div>
            <h3 className="font-bold text-lg mb-2 font-display">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
