// Simple static admin auth (no backend). Replace with real auth when backend is ready.

const STORAGE_KEY = "foundo_admin_session_v1";
const ADMIN_EMAIL = "hello@foundo.co";
const ADMIN_PASSWORD = "2668";

export interface AdminSession {
  email: string;
  loggedInAt: number;
}

export function signInAdmin(email: string, password: string): { ok: true } | { ok: false; error: string } {
  if (email.trim().toLowerCase() !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    return { ok: false, error: "Invalid email or password." };
  }
  const session: AdminSession = { email: ADMIN_EMAIL, loggedInAt: Date.now() };
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(session)); } catch {}
  return { ok: true };
}

export function getAdminSession(): AdminSession | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AdminSession;
  } catch {
    return null;
  }
}

export function signOutAdmin() {
  try { localStorage.removeItem(STORAGE_KEY); } catch {}
}
