import { loadStripe, type Stripe } from "@stripe/stripe-js";

// Publishable Stripe key — safe to expose in client code.
export const STRIPE_PUBLISHABLE_KEY =
  "pk_test_51QFmWYG24hgFt3aLgor26H6xvWOssioBhX3Cm8ZahEzuATGXXujLfiXUK0texYwRlzYNY5v4XDAtXyfg2fZhbnt100v3KnvSMa";

let stripePromise: Promise<Stripe | null> | null = null;

export function getStripe(): Promise<Stripe | null> {
  if (!stripePromise) stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  return stripePromise;
}
