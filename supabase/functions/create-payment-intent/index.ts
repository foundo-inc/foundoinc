import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import Stripe from 'npm:stripe@17';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') ?? '', {
  apiVersion: '2024-11-20.acacia',
});

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  try {
    const body = await req.json();
    const amount = Number(body.amount);
    if (!Number.isFinite(amount) || amount <= 0) {
      return new Response(JSON.stringify({ error: 'Invalid amount' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    const email = typeof body.email === 'string' ? body.email : undefined;
    const metadata: Record<string, string> = {};
    if (body.metadata && typeof body.metadata === 'object') {
      for (const [k, v] of Object.entries(body.metadata)) {
        metadata[k] = String(v).slice(0, 500);
      }
    }
    const intent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: 'usd',
      receipt_email: email,
      automatic_payment_methods: { enabled: true },
      metadata,
    });
    return new Response(
      JSON.stringify({ clientSecret: intent.client_secret, id: intent.id }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    );
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error';
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
