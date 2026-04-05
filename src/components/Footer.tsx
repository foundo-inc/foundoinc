import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/70 pt-16 pb-8">
    <div className="container mx-auto px-4">
      {/* Footer Links */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        <div>
          <p className="font-bold text-primary-foreground text-sm mb-4 font-display">Company</p>
          <div className="space-y-3">
            {["Home", "Pricing", "FAQ"].map(l => (
              <a key={l} href="#" className="block text-sm hover:text-primary-foreground transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-primary-foreground text-sm mb-4 font-display">Addons</p>
          <div className="space-y-3">
            {["Premium Business Address", "ITIN Application", "Annual Report Filing", "Seller Permit"].map(l => (
              <a key={l} href="#" className="block text-sm hover:text-primary-foreground transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-primary-foreground text-sm mb-4 font-display">Services</p>
          <div className="space-y-3">
            {["US Dedicated IP VPS", "Business Website Setup", "Company Dissolution", "Company Amendment"].map(l => (
              <a key={l} href="#" className="block text-sm hover:text-primary-foreground transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-primary-foreground text-sm mb-4 font-display">Legal</p>
          <div className="space-y-3">
            {["Privacy Policy", "Terms and Conditions"].map(l => (
              <a key={l} href="#" className="block text-sm hover:text-primary-foreground transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-primary-foreground text-sm mb-4 font-display">Follow us</p>
          <div className="flex gap-3">
            {["Facebook", "LinkedIn", "Instagram"].map(s => (
              <a key={s} href="#" className="h-9 w-9 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-primary-foreground/40 transition-colors text-xs font-bold">
                {s[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp Support */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 border-t border-primary-foreground/10">
        <div>
          <p className="font-bold text-primary-foreground text-sm font-display">Instant Support via WhatsApp</p>
          <p className="text-sm">Reach out to us directly on WhatsApp for quick support. We're here to help!</p>
        </div>
        <Button variant="outline" className="mt-4 sm:mt-0 rounded-full border-primary-foreground/20 text-primary-foreground/80 bg-transparent hover:bg-primary-foreground/5">
          WhatsApp Support
        </Button>
      </div>

      {/* Bottom */}
      <div className="pt-8 border-t border-primary-foreground/10">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">F</span>
              </div>
              <span className="text-lg font-bold font-display text-primary-foreground">foundo</span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm">
              Get your U.S. company today. With our expert support at every step, we make it easy to get your company online and running smoothly.
            </p>
            <div className="flex items-center gap-2 mt-3 text-xs">
              <Mail className="h-3.5 w-3.5" />
              <span>info@foundo.com</span>
            </div>
          </div>
          <div>
            <p className="text-xs mb-3">© {new Date().getFullYear()} Foundo. All rights reserved.</p>
            <p className="text-xs leading-relaxed opacity-60">
              Foundo products may not be available to all customers. Terms of Condition apply and are subject to change. We are not a law firm, nor can we offer official legal advice. What you see on our website is purely for general and educational matters, and should not be taken as official legal advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
