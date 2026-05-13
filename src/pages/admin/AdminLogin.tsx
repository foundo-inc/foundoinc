import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Lock } from "lucide-react";
import { signInAdmin, getAdminSession } from "@/lib/admin-auth";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  if (getAdminSession()) return <Navigate to="/admin" replace />;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = signInAdmin(email, password);
    setLoading(false);
    if (!result.ok) {
      toast({ title: "Login failed", description: result.error, variant: "destructive" });
      return;
    }
    navigate("/admin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-lg">
        <div className="flex items-center gap-2 mb-6">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Lock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold font-display">Admin Login</h1>
            <p className="text-xs text-muted-foreground">Foundo Admin Panel</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <Label>Email</Label>
            <Input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="h-11 mt-1" />
          </div>
          <div>
            <Label>Password</Label>
            <Input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="h-11 mt-1" />
          </div>
          <Button type="submit" disabled={loading} className="w-full h-11 font-bold">
            {loading ? "Signing in…" : "Sign In"}
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-6 text-center">
          Admin access only. Contact support if you need an account.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
