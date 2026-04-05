const Footer = () => (
  <footer className="py-16 border-t border-border bg-card">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="h-9 w-9 rounded-xl hero-gradient-2 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold font-display">Foundo</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
            Helping international founders start and grow U.S. businesses from anywhere in the world since 2023.
          </p>
        </div>
        <div>
          <p className="font-bold text-sm mb-4 font-display">Quick Links</p>
          <div className="space-y-3">
            {["How It Works", "Services", "Pricing", "Why Foundo"].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, '-')}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-sm mb-4 font-display">Legal</p>
          <div className="space-y-3">
            {["Privacy Policy", "Terms of Service", "Contact Us"].map(l => (
              <a key={l} href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-border">
        <p className="text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Foundo. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
