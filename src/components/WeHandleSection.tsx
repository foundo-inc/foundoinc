import { FileText, Building2, CreditCard, Shield, PenTool, FileEdit, RefreshCw, Trash2 } from "lucide-react";

const services = [
  { icon: FileText, label: "IRS Tax Filing" },
  { icon: Building2, label: "State Annual Report" },
  { icon: CreditCard, label: "ITIN Application" },
  { icon: Shield, label: "Trademark" },
  { icon: PenTool, label: "DBA Name" },
  { icon: FileEdit, label: "Amendment" },
  { icon: RefreshCw, label: "Reinstatement" },
  { icon: Trash2, label: "Dissolution" },
];

const WeHandleSection = () => (
  <section className="py-20 md:py-28 lg:py-32 bg-muted/30">
    <div className="container mx-auto px-5 md:px-4">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight mb-4">
          We Handle Your <span className="text-gradient">Business</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          From formation to compliance — everything your U.S. business needs, managed by experts.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 max-w-4xl mx-auto">
        {services.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 md:p-8 text-center card-hover card-hover-glow"
          >
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm md:text-base font-semibold text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WeHandleSection;
