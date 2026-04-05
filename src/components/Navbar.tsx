import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Why Foundo", href: "#why-foundo" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/90 backdrop-blur-xl shadow-sm border-b border-border/50' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl hero-gradient-2 flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">F</span>
          </div>
          <span className={`text-xl font-bold font-display tracking-tight transition-colors ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}>Foundo</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/10 ${scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10'}`}
            >
              {l.label}
            </a>
          ))}
          <Button size="lg" className="ml-4 rounded-xl shadow-lg shadow-primary/20">
            Get Started
          </Button>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open
            ? <X className={`h-6 w-6 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
            : <Menu className={`h-6 w-6 ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`} />
          }
        </button>
      </div>
      {open && (
        <div className="md:hidden glass-card-strong mx-4 mb-4 rounded-2xl p-4 space-y-1 shadow-xl">
          {links.map(l => (
            <a key={l.label} href={l.href} className="block py-3 px-4 rounded-xl text-sm font-medium text-foreground hover:bg-accent transition-colors" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <Button className="w-full mt-2 rounded-xl" size="lg">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
