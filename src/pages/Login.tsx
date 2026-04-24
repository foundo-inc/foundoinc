import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowRight, Loader2, Sparkles } from "lucide-react";
import foundoLogo from "@/assets/foundo-logo.svg";
import { toast } from "sonner";

const Login = () => {
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || "/dashboard";

  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }
    setLoading(true);
    try {
      if (mode === "login") await login(email, password);
      else await signup(email, password, name);
      toast.success(mode === "login" ? "Welcome back!" : "Account created");
      navigate(from, { replace: true });
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      {/* LEFT — brand panel */}
      <div className="hidden lg:flex relative overflow-hidden hero-gradient p-12 flex-col justify-between">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <Link to="/" className="relative z-10">
          <img src={foundoLogo} alt="Foundo" className="h-14 w-auto brightness-0 invert" />
        </Link>

        <div className="relative z-10 max-w-md">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
            <span className="text-primary-foreground text-sm font-semibold tracking-wide">Client Cockpit</span>
          </div>
          <h2 className="text-primary-foreground font-extrabold tracking-tighter mb-4">
            Your U.S. company, <span className="text-gradient-light">in one place.</span>
          </h2>
          <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed">
            Track your LLC, EIN, banking applications, compliance deadlines and documents — all from a single secure dashboard.
          </p>
        </div>

        <div className="relative z-10 text-primary-foreground/70 text-sm">
          © {new Date().getFullYear()} Foundo Inc. — Trusted by 700+ founders.
        </div>
      </div>

      {/* RIGHT — form */}
      <div className="flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-md">
          <Link to="/" className="lg:hidden flex justify-center mb-8">
            <img src={foundoLogo} alt="Foundo" className="h-12 w-auto" />
          </Link>

          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-foreground mb-2">
            {mode === "login" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="text-muted-foreground mb-8 text-base">
            {mode === "login" ? "Sign in to access your client dashboard." : "Get instant access to your Foundo cockpit."}
          </p>

          <form onSubmit={submit} className="space-y-5">
            {mode === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Founder" className="h-12 rounded-xl" />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="h-12 rounded-xl" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                {mode === "login" && <button type="button" className="text-xs text-primary font-semibold hover:underline">Forgot?</button>}
              </div>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="h-12 rounded-xl" required />
            </div>

            <Button type="submit" disabled={loading} size="lg" className="w-full rounded-full h-12 text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-xl transition-all">
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : (
                <>
                  {mode === "login" ? "Sign in" : "Create account"} <ArrowRight className="ml-1 h-5 w-5" />
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            {mode === "login" ? "New to Foundo?" : "Already have an account?"}{" "}
            <button onClick={() => setMode(mode === "login" ? "signup" : "login")} className="text-primary font-semibold hover:underline">
              {mode === "login" ? "Create an account" : "Sign in"}
            </button>
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            Demo mode — any email and password will sign you in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
