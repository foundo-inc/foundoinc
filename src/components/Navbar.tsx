import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["How It Works", "Services", "Pricing", "Why Foundo"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="text-2xl font-extrabold text-primary tracking-tight">Foundo</a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{l}</a>
          ))}
          <Button size="lg">Get Started — $249</Button>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-background px-4 pb-4 space-y-3">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g, '-')}`} className="block py-2 text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>{l}</a>
          ))}
          <Button className="w-full" size="lg">Get Started — $249</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
