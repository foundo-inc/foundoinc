import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { label: "Business Formation", href: "#services", hasDropdown: true },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Blog", href: "#" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/80 backdrop-blur-2xl shadow-lg shadow-foreground/[0.03] border-b border-border/50' : 'bg-background/50 backdrop-blur-xl'}`}>
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-shadow">
            <span className="text-primary-foreground font-bold text-sm">F</span>
          </div>
          <span className="text-xl font-bold font-display tracking-tight text-foreground">foundo.</span>
        </a>

        <div className="hidden md:flex items-center gap-0.5">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
            >
              {l.label}
              {l.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-sm font-medium rounded-xl">
            Login
          </Button>
          <Button size="sm" className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5">
            Get Started
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-card mx-4 mb-4 rounded-2xl p-4 space-y-1 shadow-2xl">
          {links.map(l => (
            <a key={l.label} href={l.href} className="block py-3 px-4 rounded-xl text-sm font-medium text-foreground hover:bg-accent transition-colors" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className="pt-2 space-y-2">
            <Button variant="outline" className="w-full rounded-xl" size="lg">Login</Button>
            <Button className="w-full rounded-xl shadow-lg shadow-primary/20" size="lg">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
