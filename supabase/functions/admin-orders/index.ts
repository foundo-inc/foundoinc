// Admin orders endpoint — lists orders (with search/filter/pagination) or fetches one by id.
// Gated by a static admin password header (matches client static admin auth).
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const ADMIN_PASSWORD = "2668";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-admin-password",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const pwd = req.headers.get("x-admin-password");
  if (pwd !== ADMIN_PASSWORD) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  try {
    if (id) {
      const { data, error } = await supabase.from("orders").select("*").eq("id", id).maybeSingle();
      if (error) throw error;
      return new Response(JSON.stringify({ order: data }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const search = (url.searchParams.get("search") ?? "").trim();
    const stateFilter = (url.searchParams.get("state") ?? "").trim();
    const companyType = (url.searchParams.get("company_type") ?? "").trim();
    const page = Math.max(1, parseInt(url.searchParams.get("page") ?? "1", 10) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(url.searchParams.get("limit") ?? "20", 10) || 20));
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    let query = supabase.from("orders").select("*", { count: "exact" });

    if (search) {
      const escaped = search.replace(/[%,()]/g, " ");
      const like = `%${escaped}%`;
      query = query.or(
        [
          `order_number.ilike.${like}`,
          `business_name.ilike.${like}`,
          `email.ilike.${like}`,
          `first_name.ilike.${like}`,
          `last_name.ilike.${like}`,
        ].join(","),
      );
    }
    if (stateFilter) query = query.eq("state", stateFilter);
    if (companyType) query = query.eq("company_type", companyType);

    const { data, error, count } = await query
      .order("created_at", { ascending: false })
      .range(from, to);
    if (error) throw error;

    return new Response(
      JSON.stringify({ orders: data ?? [], total: count ?? 0, page, limit }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (e) {
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
