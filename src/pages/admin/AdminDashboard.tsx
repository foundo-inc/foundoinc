import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, ShieldCheck } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("foundo_admin") !== "1") {
      navigate("/admin/login", { replace: true });
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("foundo_admin");
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <h1 className="font-bold font-display">Foundo Admin</h1>
          </div>
          <Button variant="outline" size="sm" onClick={handleLogout} className="rounded-xl">
            <LogOut className="h-4 w-4 mr-2" /> Logout
          </Button>
        </div>
      </header>
      <main className="container py-10">
        <div className="rounded-2xl border border-border bg-card p-8 text-center">
          <h2 className="text-xl font-bold font-display mb-2">Admin Panel</h2>
          <p className="text-sm text-muted-foreground">
            Backend is in progress. Order management features will appear here once connected.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
