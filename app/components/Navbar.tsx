"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import foundoLogo from "../assets/foundo-logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "LLC Formation", href: "/" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "FAQs", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="mx-auto flex items-center justify-between h-16 md:h-20 px-3 md:px-8 lg:container">
        <Link href="/" className="flex items-center group">
          <img src={foundoLogo} alt="Foundo" className="h-14 md:h-16 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <Link
              key={l.label}
              href={l.href}
              className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-sm font-medium rounded-xl" asChild>
            <Link href="/checkout">Login</Link>
          </Button>
          <Button size="default" className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5" asChild>
            <Link href="/checkout">Get Started</Link>
          </Button>
        </div>

        <button className="md:hidden p-1" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl mx-4 mb-4 rounded-2xl p-5 space-y-1 shadow-2xl border border-border/50">
          {links.map(l => (
            <Link key={l.label} href={l.href} className="block py-3 px-4 rounded-xl text-base font-medium text-foreground hover:bg-accent transition-colors" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className="pt-3 space-y-2">
            <Button variant="outline" className="w-full rounded-xl h-12 text-base" size="lg" asChild>
              <Link href="/checkout">Login</Link>
            </Button>
            <Button className="w-full rounded-xl shadow-lg shadow-primary/20 h-12 text-base" size="lg" asChild>
              <Link href="/checkout">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
