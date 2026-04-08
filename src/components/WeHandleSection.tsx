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
  <section className="py-20 md:py-24 lg:py-28 bg-muted/30">
    <div className="container mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center rounded-full border border-border bg-background px-4 py-2 mb-6">
          <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Beyond Formation
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight mb-4">
          We Handle Your <span className="text-gradient">Business</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Ongoing services to keep your U.S. company compliant and growing.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-5xl mx-auto">
        {services.map(({ icon: Icon, label, desc }) => (
          <div
            key={label}
            className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-8 md:p-9 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
              <Icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-foreground">{label}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WeHandleSection;
