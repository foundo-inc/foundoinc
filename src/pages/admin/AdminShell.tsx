import { useEffect, useState, ReactNode } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, LogOut, ShieldAlert } from "lucide-react";

const AdminShell = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [state, setState] = useState<"loading" | "ok" | "no_session" | "no_admin">("loading");

  useEffect(() => {
    let mounted = true;
    const check = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!mounted) return;
      if (!session) {
        setState("no_session");
        return;
      }
      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin");
      if (!mounted) return;
      setState(roles && roles.length > 0 ? "ok" : "no_admin");
    };
    check();
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) setState("no_session");
      else check();
    });
    return () => { mounted = false; sub.subscription.unsubscribe(); };
  }, []);

  useEffect(() => {
    if (state === "no_session") navigate("/admin/login", { replace: true });
  }, [state, navigate]);

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  if (state === "loading" || state === "no_session") {
    return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Loading…</div>;
  }

  if (state === "no_admin") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md text-center bg-card border border-border rounded-2xl p-8">
          <ShieldAlert className="h-10 w-10 text-destructive mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2 font-display">Not Authorized</h2>
          <p className="text-sm text-muted-foreground mb-5">
            Your account does not have admin access. Ask another admin to grant you the admin role.
          </p>
          <Button variant="outline" onClick={signOut}>Sign out</Button>
        </div>
      </div>
    );
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
