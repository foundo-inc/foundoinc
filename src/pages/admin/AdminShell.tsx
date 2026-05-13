import { useEffect, useState, ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, LogOut } from "lucide-react";
import { getAdminSession, signOutAdmin } from "@/lib/admin-auth";

const AdminShell = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!getAdminSession()) {
      navigate("/admin/login", { replace: true });
      return;
    }
    setReady(true);
  }, [navigate]);

  const signOut = () => {
    signOutAdmin();
    navigate("/admin/login");
  };

  if (!ready) {
    return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Loading…</div>;
  }

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="border-b border-border bg-card">
        <div className="container flex items-center justify-between h-14">
          <Link to="/admin" className="flex items-center gap-2 font-bold font-display">
            <div className="h-7 w-7 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
              <LayoutDashboard className="h-4 w-4" />
            </div>
            Foundo Admin
          </Link>
          <Button variant="ghost" size="sm" onClick={signOut}>
            <LogOut className="h-4 w-4 mr-1.5" /> Sign out
          </Button>
        </div>
      </header>
      <main className="container py-6">{children}</main>
    </div>
  );
};

export default AdminShell;
