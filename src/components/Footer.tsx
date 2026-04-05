import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/60 pt-12 md:pt-16 pb-6 md:pb-8">
    <div className="container mx-auto px-5 md:px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-10 md:mb-12">
        <div>
          <p className="font-bold text-primary-foreground text-[10px] md:text-xs mb-3 md:mb-4 font-display uppercase tracking-wider">Company</p>
          <div className="space-y-2 md:space-y-2.5">
            {["Home", "Pricing", "FAQ"].map(l => (
              <a key={l} href="#" className="block text-[11px] md:text-xs hover:text-primary transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-primary-foreground text-[10px] md:text-xs mb-3 md:mb-4 font-display uppercase tracking-wider">Addons</p>
          <div className="space-y-2 md:space-y-2.5">
            {["Premium Business Address", "ITIN Application", "Annual Report Filing", "Seller Permit"].map(l => (
              <a key={l} href="#" className="block text-[11px] md:text-xs hover:text-primary transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-primary-foreground text-[10px] md:text-xs mb-3 md:mb-4 font-display uppercase tracking-wider">Services</p>
          <div className="space-y-2 md:space-y-2.5">
            {["US Dedicated IP VPS", "Business Website Setup", "Company Dissolution", "Company Amendment"].map(l => (
              <a key={l} href="#" className="block text-[11px] md:text-xs hover:text-primary transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-primary-foreground text-[10px] md:text-xs mb-3 md:mb-4 font-display uppercase tracking-wider">Legal</p>
          <div className="space-y-2 md:space-y-2.5">
            {["Privacy Policy", "Terms and Conditions"].map(l => (
              <a key={l} href="#" className="block text-[11px] md:text-xs hover:text-primary transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-primary-foreground text-[10px] md:text-xs mb-3 md:mb-4 font-display uppercase tracking-wider">Follow us</p>
          <div className="flex gap-2">
            {["Facebook", "LinkedIn", "Instagram"].map(s => (
              <a key={s} href="#" className="h-7 md:h-8 w-7 md:w-8 rounded-lg border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/40 hover:text-primary hover:border-primary/30 transition-all text-[9px] md:text-[10px] font-bold">
                {s[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-5 md:py-6 border-t border-primary-foreground/8">
        <div>
          <p className="font-bold text-primary-foreground text-[11px] md:text-xs font-display">Instant Support via WhatsApp</p>
          <p className="text-[10px] md:text-[11px]">Reach out directly for quick support.</p>
        </div>
        <Button variant="outline" size="sm" className="mt-3 sm:mt-0 rounded-full border-primary-foreground/15 text-primary-foreground/60 bg-transparent hover:bg-primary/10 hover:text-primary hover:border-primary/30 text-[10px] md:text-xs transition-all">
          WhatsApp Support
        </Button>
      </div>

      <div className="pt-5 md:pt-6 border-t border-primary-foreground/8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-start">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-6 md:h-7 w-6 md:w-7 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-[9px] md:text-[10px]">F</span>
              </div>
              <span className="text-xs md:text-sm font-bold font-display text-primary-foreground">foundo</span>
            </div>
            <p className="text-[9px] md:text-[10px] leading-relaxed max-w-xs">
              Get your U.S. company today. Expert support at every step.
            </p>
            <div className="flex items-center gap-1.5 mt-2 text-[9px] md:text-[10px] hover:text-primary transition-colors cursor-pointer">
              <Mail className="h-2.5 md:h-3 w-2.5 md:w-3" />
              <span>info@foundo.com</span>
            </div>
          </div>
          <div>
            <p className="text-[9px] md:text-[10px] mb-2">© {new Date().getFullYear()} Foundo. All rights reserved.</p>
            <p className="text-[9px] md:text-[10px] leading-relaxed opacity-40">
              Foundo products may not be available to all customers. We are not a law firm, nor can we offer official legal advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
