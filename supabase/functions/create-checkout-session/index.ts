// Creates a Stripe Checkout Session with allow_promotion_codes enabled.
// The frontend redirects to Stripe's hosted checkout; after payment a webhook creates the order.
import Stripe from "npm:stripe@14.25.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const stripeSecret = Deno.env.get("STRIPE_SECRET_KEY");
  if (!stripeSecret) {
    return new Response(JSON.stringify({ error: "Stripe not configured" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const stripe = new Stripe(stripeSecret, { apiVersion: "2023-10-16" });

  try {
    const body = await req.json();
    const {
      origin,
      state,
      company_type,
      business_name,
      first_name,
      last_name,
      email,
      phone,
      country_code,
      website,
      industry,
      description,
      members,
      addon_itin,
      addon_seller_permit,
      addon_premium_address,
      state_fee,
      foundo_fee,
      addons_total,
      total,
    } = body;

    const appOrigin = origin || req.headers.get("origin") || "https://foundoinc.lovable.app";

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [
      {
        price_data: {
          currency: "usd",
          product_data: { name: "Foundo Complete — US Company Formation" },
          unit_amount: Math.round((foundo_fee ?? 249) * 100),
        },
        quantity: 1,
      },
    ];

    if (state_fee && state_fee > 0) {
      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: { name: `${state} State Filing Fee` },
          unit_amount: Math.round(state_fee * 100),
        },
        quantity: 1,
      });
    }

    if (addon_itin) {
      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: { name: "ITIN Processing" },
          unit_amount: 199 * 100,
        },
        quantity: 1,
      });
    }
    if (addon_seller_permit) {
      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: { name: "Seller Permit" },
          unit_amount: 149 * 100,
        },
        quantity: 1,
      });
    }
    if (addon_premium_address) {
      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: { name: "Premium Address" },
          unit_amount: 99 * 100,
        },
        quantity: 1,
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      allow_promotion_codes: true,
      success_url: `${appOrigin}/checkout/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appOrigin}/checkout`,
      customer_email: email || undefined,
      metadata: {
        state: state || "",
        company_type: company_type || "",
        business_name: business_name || "",
        first_name: first_name || "",
        last_name: last_name || "",
        email: email || "",
        phone: phone || "",
        country_code: country_code || "",
        website: website || "",
        industry: industry || "",
        description: description || "",
        members_json: JSON.stringify(members || []),
        addon_itin: addon_itin ? "true" : "false",
        addon_seller_permit: addon_seller_permit ? "true" : "false",
        addon_premium_address: addon_premium_address ? "true" : "false",
        state_fee: String(state_fee ?? 0),
        foundo_fee: String(foundo_fee ?? 249),
        addons_total: String(addons_total ?? 0),
        total: String(total ?? 0),
      },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
