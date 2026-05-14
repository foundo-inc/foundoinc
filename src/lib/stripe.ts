import { loadStripe, type Stripe } from "@stripe/stripe-js";
import { supabase } from "@/integrations/supabase/client";

let stripePromise: Promise<Stripe | null> | null = null;

export function getStripe(): Promise<Stripe | null> {
  if (!stripePromise) {
    stripePromise = (async () => {
      const { data, error } = await supabase.functions.invoke("stripe-config");
      if (error) throw error;
      const key = (data as { publishableKey?: string })?.publishableKey;
      if (!key) throw new Error("Stripe publishable key unavailable");
      return loadStripe(key);
    })();
  }
  return stripePromise;
}

export async function createPaymentIntent(input: {
  amount: number;
  email?: string;
  metadata?: Record<string, string | number | boolean | null | undefined>;
}): Promise<{ clientSecret: string; id: string }> {
  const { data, error } = await supabase.functions.invoke("create-payment-intent", {
    body: input,
  });
  if (error) throw error;
  const res = data as { clientSecret?: string; id?: string; error?: string };
  if (res.error || !res.clientSecret || !res.id) {
    throw new Error(res.error || "Failed to create payment intent");
  }
  return { clientSecret: res.clientSecret, id: res.id };
}
