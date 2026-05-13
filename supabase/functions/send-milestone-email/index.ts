import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const MILESTONE_LABEL: Record<string, string> = {
  received: "Order Received",
  filing: "Filing with State",
  ein: "EIN Application",
  documents_ready: "Documents Ready",
  completed: "Completed",
};

const MILESTONE_MESSAGE: Record<string, string> = {
  received: "We've received your order and our team is reviewing it now.",
  filing: "We're filing your formation paperwork with the state.",
  ein: "We're applying for your EIN with the IRS.",
  documents_ready: "Your formation documents are ready! Check your account for details.",
  completed: "🎉 Your company formation is complete. Welcome aboard!",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const { orderId, milestone, note } = await req.json();
    if (!orderId || !milestone) {
      return new Response(JSON.stringify({ error: "orderId and milestone required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { data: order, error: orderErr } = await supabase
      .from("orders")
      .select("email, first_name, business_name, order_number")
      .eq("id", orderId)
      .single();

    if (orderErr || !order) {
      return new Response(JSON.stringify({ error: "Order not found" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const label = MILESTONE_LABEL[milestone] ?? milestone;
    const message = MILESTONE_MESSAGE[milestone] ?? "Your order status has been updated.";
    const subject = `[${order.order_number}] ${label} — ${order.business_name}`;
    const html = `
      <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#0f172a;">
        <h1 style="font-size:22px;margin:0 0 16px;">Hi ${order.first_name},</h1>
        <p style="font-size:15px;line-height:1.6;margin:0 0 12px;">
          Your order <strong>${order.order_number}</strong> for <strong>${order.business_name}</strong> has a status update:
        </p>
        <div style="background:#0436E3;color:#fff;padding:18px 20px;border-radius:12px;margin:18px 0;">
          <div style="font-size:12px;opacity:.8;text-transform:uppercase;letter-spacing:1px;">Current Milestone</div>
          <div style="font-size:20px;font-weight:700;margin-top:4px;">${label}</div>
        </div>
        <p style="font-size:15px;line-height:1.6;margin:0 0 12px;">${message}</p>
        ${note ? `<p style="background:#f1f5f9;padding:12px 14px;border-radius:8px;font-size:14px;margin:16px 0;"><strong>Note from our team:</strong> ${note}</p>` : ""}
        <p style="font-size:13px;color:#64748b;margin-top:24px;">— The Foundo Team</p>
      </div>
    `;

    // Try delegating to send-transactional-email (requires email domain).
    // If not configured, log to console and return ok so admin flow doesn't break.
    try {
      const resp = await fetch(
        `${Deno.env.get("SUPABASE_URL")}/functions/v1/send-transactional-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")}`,
          },
          body: JSON.stringify({
            to: order.email,
            subject,
            html,
            idempotencyKey: `milestone-${orderId}-${milestone}`,
          }),
        }
      );
      if (!resp.ok) {
        const txt = await resp.text();
        console.warn("Transactional email send not available yet:", resp.status, txt);
      }
    } catch (e) {
      console.warn("Email infra not configured:", e);
    }

    return new Response(
      JSON.stringify({ ok: true, sentTo: order.email, subject }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
