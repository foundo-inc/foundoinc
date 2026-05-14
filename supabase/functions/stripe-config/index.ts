import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

Deno.serve((req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  const publishableKey = Deno.env.get('STRIPE_PUBLISHABLE_KEY') ?? '';
  return new Response(JSON.stringify({ publishableKey }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
});
