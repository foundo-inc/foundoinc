import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => (
  <footer className="section-dark text-primary-foreground/60 pt-20 pb-8 relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-pattern opacity-20" />
    <div className="container mx-auto px-4 relative z-10">
      {/* Footer Links */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
        <div>
          <p className="font-bold text-primary-foreground text-sm mb-5 font-display">Company</p>
          <div className="space-y-3">
            {["Home", "Pricing", "FAQ"].map(l => (
              <a key={l} href="#" className="block text-sm hover:text-primary transition-colors duration-200">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-primary-foreground text-sm mb-5 font-display">Addons</p>
          <div className="space-y-3">
            {["Premium Business Address", "ITIN Application", "Annual Report Filing", "Seller Permit"].map(l => (
              <a key={l} href="#" className="block text-sm hover:text-primary transition-colors duration-200">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-primary-foreground text-sm mb-5 font-display">Services</p>
          <div className="space-y-3">
            {["US Dedicated IP VPS", "Business Website Setup", "Company Dissolution", "Company Amendment"].map(l => (
              <a key={l} href="#" className="block text-sm hover:text-primary transition-colors duration-200">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-primary-foreground text-sm mb-5 font-display">Legal</p>
          <div className="space-y-3">
            {["Privacy Policy", "Terms and Conditions"].map(l => (
              <a key={l} href="#" className="block text-sm hover:text-primary transition-colors duration-200">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-primary-foreground text-sm mb-5 font-display">Follow us</p>
          <div className="flex gap-3">
            {["Facebook", "LinkedIn", "Instagram"].map(s => (
              <a key={s} href="#" className="h-10 w-10 rounded-xl glass-card-dark flex items-center justify-center text-primary-foreground/50 hover:text-primary hover:bg-primary/10 transition-all duration-200 text-xs font-bold">
                {s[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp Support */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 border-t border-primary-foreground/8">
        <div>
          <p className="font-bold text-primary-foreground text-sm font-display">Instant Support via WhatsApp</p>
          <p className="text-sm">Reach out to us directly on WhatsApp for quick support.</p>
        </div>
        <Button variant="outline" className="mt-4 sm:mt-0 rounded-full border-primary-foreground/15 text-primary-foreground/70 bg-transparent hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300">
          WhatsApp Support
        </Button>
      </div>

      {/* Bottom */}
      <div className="pt-8 border-t border-primary-foreground/8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-primary-foreground font-bold text-sm">F</span>
              </div>
              <span className="text-lg font-bold font-display text-primary-foreground">foundo</span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm">
              Get your U.S. company today. With expert support at every step, we make it easy to get your company online and running smoothly.
            </p>
            <div className="flex items-center gap-2 mt-3 text-xs hover:text-primary transition-colors cursor-pointer">
              <Mail className="h-3.5 w-3.5" />
              <span>info@foundo.com</span>
            </div>
          </div>
          <div>
            <p className="text-xs mb-3">© {new Date().getFullYear()} Foundo. All rights reserved.</p>
            <p className="text-xs leading-relaxed opacity-50">
              Foundo products may not be available to all customers. Terms of Condition apply and are subject to change. We are not a law firm, nor can we offer official legal advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
