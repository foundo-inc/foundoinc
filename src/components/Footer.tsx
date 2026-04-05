import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/60 pt-14 md:pt-20 pb-8 md:pb-10">
    <div className="container mx-auto px-5 md:px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 mb-12 md:mb-16">
        <div>
          <p className="font-bold text-primary-foreground text-sm mb-4 md:mb-5 font-display uppercase tracking-wider">Company</p>
          <div className="space-y-3">
            {["Home", "Pricing", "FAQ"].map(l => (
              <a key={l} href="#" className="block text-sm md:text-base hover:text-primary transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-primary-foreground text-sm mb-4 md:mb-5 font-display uppercase tracking-wider">Addons</p>
          <div className="space-y-3">
            {["Premium Business Address", "ITIN Application", "Annual Report Filing", "Seller Permit"].map(l => (
              <a key={l} href="#" className="block text-sm md:text-base hover:text-primary transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-primary-foreground text-sm mb-4 md:mb-5 font-display uppercase tracking-wider">Services</p>
          <div className="space-y-3">
            {["US Dedicated IP VPS", "Business Website Setup", "Company Dissolution", "Company Amendment"].map(l => (
              <a key={l} href="#" className="block text-sm md:text-base hover:text-primary transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-primary-foreground text-sm mb-4 md:mb-5 font-display uppercase tracking-wider">Legal</p>
          <div className="space-y-3">
            {["Privacy Policy", "Terms and Conditions"].map(l => (
              <a key={l} href="#" className="block text-sm md:text-base hover:text-primary transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-primary-foreground text-sm mb-4 md:mb-5 font-display uppercase tracking-wider">Follow us</p>
          <div className="flex gap-2.5">
            {["Facebook", "LinkedIn", "Instagram"].map(s => (
              <a key={s} href="#" className="h-9 md:h-10 w-9 md:w-10 rounded-lg border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/40 hover:text-primary hover:border-primary/30 transition-all text-xs font-bold">
                {s[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-6 md:py-8 border-t border-primary-foreground/8">
        <div>
          <p className="font-bold text-primary-foreground text-sm md:text-base font-display">Instant Support via WhatsApp</p>
          <p className="text-sm text-primary-foreground/50">Reach out directly for quick support.</p>
        </div>
        <Button variant="outline" size="default" className="mt-4 sm:mt-0 rounded-full border-primary-foreground/15 text-primary-foreground/60 bg-transparent hover:bg-primary/10 hover:text-primary hover:border-primary/30 text-sm transition-all">
          WhatsApp Support
        </Button>
      </div>

      <div className="pt-6 md:pt-8 border-t border-primary-foreground/8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="h-8 md:h-9 w-8 md:w-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">F</span>
              </div>
              <span className="text-base md:text-lg font-bold font-display text-primary-foreground">foundo</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Get your U.S. company today. Expert support at every step.
            </p>
            <div className="flex items-center gap-2 mt-3 text-sm hover:text-primary transition-colors cursor-pointer">
              <Mail className="h-4 w-4" />
              <span>info@foundo.com</span>
            </div>
          </div>
          <div>
            <p className="text-sm mb-2">© {new Date().getFullYear()} Foundo. All rights reserved.</p>
            <p className="text-sm leading-relaxed opacity-40">
              Foundo products may not be available to all customers. We are not a law firm, nor can we offer official legal advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
