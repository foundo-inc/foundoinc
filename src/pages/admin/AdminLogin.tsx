import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ADMIN_EMAIL = "hello@foundo.co";
const ADMIN_PASSWORD = "2668";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (email.trim().toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        sessionStorage.setItem("foundo_admin", "1");
        toast({ title: "Welcome back", description: "Signed in as admin." });
        navigate("/admin");
      } else {
        toast({ title: "Invalid credentials", description: "Email or password is incorrect.", variant: "destructive" });
      }
      setLoading(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-sm">
        <div className="mb-6 text-center">
          <div className="mx-auto h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
            <Lock className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold font-display">Admin Login</h1>
          <p className="text-sm text-muted-foreground mt-1">Sign in to access the admin panel.</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-1.5">
            <Label className="text-sm font-semibold">Email</Label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="hello@foundo.co" className="h-12 rounded-xl" required />
          </div>
          <div className="space-y-1.5">
            <Label className="text-sm font-semibold">Password</Label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••" className="h-12 rounded-xl" required />
          </div>
          <Button type="submit" disabled={loading} className="w-full h-12 rounded-xl font-bold">
            {loading ? "Signing in…" : "Sign In"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
