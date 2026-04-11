import { Mail, ArrowUpRight } from "lucide-react";
import foundoLogoWhite from "@/assets/foundo-logo-white.svg";

const footerLinks = {
  Company: ["Home", "Pricing", "FAQ"],
  Addons: ["Premium Business Address", "ITIN Application", "Annual Report Filing", "Seller Permit"],
  Services: ["US Dedicated IP VPS", "Business Website Setup", "Company Dissolution", "Company Amendment"],
  Legal: ["Privacy Policy", "Terms and Conditions"],
};

const socials = [
  { label: "Facebook", letter: "F" },
  { label: "LinkedIn", letter: "L" },
  { label: "Instagram", letter: "I" },
];

const Footer = () => (
  <footer className="relative bg-foreground overflow-hidden">
    {/* Subtle gradient accent */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.06] rounded-full blur-[120px] pointer-events-none" />

    <div className="container mx-auto relative z-10">
      {/* Top bar — brand + newsletter */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-10 md:py-14 gap-6">
        <div className="flex items-center">
          <img src={foundoLogoWhite} alt="Foundo" className="h-12 md:h-14 w-auto" />
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-primary/20">
            WhatsApp Support <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="h-px bg-primary-foreground/[0.06]" />

      {/* Links grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-10 py-10 md:py-14">
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <p className="text-xs font-bold text-primary-foreground/30 uppercase tracking-[0.15em] mb-4">{title}</p>
            <div className="space-y-2.5">
              {links.map(l => (
                <a key={l} href="#" className="block text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-200">{l}</a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="h-px bg-primary-foreground/[0.06]" />

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 md:py-8">
        <div className="flex items-center gap-4">
          <p className="text-xs text-primary-foreground/30">© {new Date().getFullYear()} Foundo. All rights reserved.</p>
          <div className="hidden sm:flex gap-2">
            {socials.map(s => (
              <a key={s.label} href="#" className="h-8 w-8 rounded-full bg-primary-foreground/[0.05] flex items-center justify-center text-primary-foreground/30 hover:bg-primary/10 hover:text-primary transition-all duration-200 text-xs font-bold" aria-label={s.label}>
                {s.letter}
              </a>
            ))}
          </div>
        </div>
        <p className="text-[11px] text-primary-foreground/20 text-center sm:text-right max-w-md leading-relaxed">
          Foundo products may not be available to all customers. We are not a law firm, nor can we offer official legal advice.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
