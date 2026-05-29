import { useEffect, useState } from "react";
import { COUNTRIES as FALLBACK } from "@/lib/checkout-data";

const CACHE_KEY = "foundo_countries_v1";

let cached: string[] | null = null;
let inflight: Promise<string[]> | null = null;

async function fetchCountries(): Promise<string[]> {
  if (cached) return cached;
  try {
    const local = localStorage.getItem(CACHE_KEY);
    if (local) {
      const parsed = JSON.parse(local) as string[];
      if (Array.isArray(parsed) && parsed.length) {
        cached = parsed;
        return parsed;
      }
    }
  } catch {}
  if (inflight) return inflight;
  inflight = (async () => {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all?fields=name");
      if (!res.ok) throw new Error("countries api");
      const json = (await res.json()) as Array<{ name: { common: string } }>;
      const names = json
        .map((c) => c?.name?.common)
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b));
      cached = names;
      try { localStorage.setItem(CACHE_KEY, JSON.stringify(names)); } catch {}
      return names;
    } catch {
      cached = FALLBACK;
      return FALLBACK;
    } finally {
      inflight = null;
    }
  })();
  return inflight;
}

export function useCountries() {
  const [countries, setCountries] = useState<string[]>(cached ?? FALLBACK);
  const [loading, setLoading] = useState(!cached);
  useEffect(() => {
    let alive = true;
    fetchCountries().then((c) => {
      if (!alive) return;
      setCountries(c);
      setLoading(false);
    });
    return () => { alive = false; };
  }, []);
  return { countries, loading };
}
