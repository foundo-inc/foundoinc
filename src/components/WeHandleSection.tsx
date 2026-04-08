import { FileText, Building2, CreditCard, Shield, PenTool, FileEdit, RefreshCw, XCircle } from "lucide-react";

const services = [
  { icon: FileText, label: "IRS Tax Filing", desc: "Federal & state tax returns filed on time" },
  { icon: Building2, label: "State Annual Report", desc: "Stay compliant with yearly state filings" },
  { icon: CreditCard, label: "ITIN Application", desc: "Get your individual tax ID number" },
  { icon: Shield, label: "Trademark", desc: "Protect your brand name & logo" },
  { icon: PenTool, label: "DBA Name", desc: "Register your 'Doing Business As' name" },
  { icon: FileEdit, label: "Amendment", desc: "Update your company details easily" },
  { icon: RefreshCw, label: "Reinstatement", desc: "Revive your inactive business status" },
  { icon: XCircle, label: "Dissolution", desc: "Close your company the right way" },
];

const WeHandleSection = () => (
  <section className="py-20 md:py-28 lg:py-32 bg-foreground relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.06] rounded-full blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-5 md:px-4 relative z-10">
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center rounded-full border border-primary-foreground/[0.08] bg-primary-foreground/[0.04] px-4 py-2 mb-6">
          <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/50">
            Beyond Formation
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-primary-foreground mb-4">
          We Handle Your <span className="text-gradient-light">Business</span>
        </h2>
        <p className="text-primary-foreground/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Ongoing services to keep your U.S. company compliant and growing.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
        {services.map(({ icon: Icon, label, desc }) => (
          <div
            key={label}
            className="group relative flex flex-col gap-3 rounded-2xl border border-primary-foreground/[0.06] bg-primary-foreground/[0.03] p-6 transition-all duration-300 hover:border-primary/20 hover:bg-primary-foreground/[0.05]"
          >
            <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-sm font-bold text-primary-foreground tracking-tight">{label}</h3>
            <p className="text-xs text-primary-foreground/40 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WeHandleSection;
