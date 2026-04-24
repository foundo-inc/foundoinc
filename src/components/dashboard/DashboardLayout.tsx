import { NavLink, useLocation } from "react-router-dom";
import { LayoutDashboard, FileText, Shield, Building2, LogOut, Menu, X, Bell, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import foundoLogo from "@/assets/foundo-logo.svg";
import { ReactNode } from "react";

const nav = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard, end: true },
  { to: "/dashboard/documents", label: "Documents", icon: FileText },
  { to: "/dashboard/compliance", label: "Compliance", icon: Shield },
  { to: "/dashboard/banking", label: "Banking & Support", icon: Building2 },
];

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const current = nav.find((n) => (n.end ? location.pathname === n.to : location.pathname.startsWith(n.to)))?.label || "Dashboard";

  const SidebarContent = () => (
    <>
      <div className="flex items-center justify-between px-6 h-20 border-b border-border">
        <img src={foundoLogo} alt="Foundo" className="h-12 w-auto" />
        <button className="lg:hidden p-1" onClick={() => setMobileOpen(false)}>
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex-1 px-3 py-6 space-y-1">
        {nav.map((n) => (
          <NavLink
            key={n.to}
            to={n.to}
            end={n.end}
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
              }`
            }
          >
            <n.icon className="h-5 w-5" />
            {n.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-3 border-t border-border">
        <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-muted/40">
          <div className="h-9 w-9 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold text-sm">
            {(user?.name?.[0] || "F").toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground truncate capitalize">{user?.name}</p>
            <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="mt-2 w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all"
        >
          <LogOut className="h-4 w-4" /> Sign out
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen flex bg-muted/30">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-72 flex-col bg-card border-r border-border fixed inset-y-0 left-0 z-30">
        <SidebarContent />
      </aside>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 bg-foreground/40 backdrop-blur-sm z-40 lg:hidden" onClick={() => setMobileOpen(false)} />
          <aside className="fixed inset-y-0 left-0 w-72 bg-card z-50 flex flex-col lg:hidden">
            <SidebarContent />
          </aside>
        </>
      )}

      <div className="flex-1 lg:pl-72 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-20 h-16 md:h-20 bg-background/80 backdrop-blur-xl border-b border-border flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-2 -ml-2" onClick={() => setMobileOpen(true)}>
              <Menu className="h-6 w-6 text-foreground" />
            </button>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Dashboard</p>
              <h1 className="text-lg md:text-xl font-bold tracking-tight text-foreground leading-tight">{current}</h1>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <Button asChild variant="ghost" size="sm" className="hidden md:inline-flex rounded-full text-sm font-medium">
              <a href="https://api.whatsapp.com/send?phone=919510022071&text=Hi!%20I%20need%20help%20from%20my%20dashboard." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-1" /> Chat with us
              </a>
            </Button>
            <button className="relative h-10 w-10 rounded-full hover:bg-muted flex items-center justify-center transition-colors">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary" />
            </button>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-8 max-w-7xl w-full mx-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
