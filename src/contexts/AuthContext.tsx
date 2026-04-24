import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type User = { email: string; name: string };
type AuthCtx = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
};

const Ctx = createContext<AuthCtx | null>(null);
const KEY = "foundo_mock_user";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setUser(JSON.parse(raw));
    } catch {}
    setLoading(false);
  }, []);

  const persist = (u: User | null) => {
    setUser(u);
    if (u) localStorage.setItem(KEY, JSON.stringify(u));
    else localStorage.removeItem(KEY);
  };

  const login = async (email: string, _password: string) => {
    await new Promise((r) => setTimeout(r, 500));
    persist({ email, name: email.split("@")[0] || "Founder" });
  };
  const signup = async (email: string, _password: string, name: string) => {
    await new Promise((r) => setTimeout(r, 500));
    persist({ email, name: name || email.split("@")[0] });
  };
  const logout = () => persist(null);

  return <Ctx.Provider value={{ user, loading, login, signup, logout }}>{children}</Ctx.Provider>;
};

export const useAuth = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useAuth must be used inside AuthProvider");
  return c;
};
