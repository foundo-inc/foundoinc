
-- Lock down SECURITY DEFINER helpers
REVOKE EXECUTE ON FUNCTION public.set_updated_at() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.create_initial_milestone() FROM PUBLIC, anon, authenticated;
-- has_role is intentionally callable so RLS can call it; keep but lock search_path (already set)

-- Replace overly-permissive insert policy with a column-presence check (still public for checkout)
DROP POLICY "Anyone can place an order" ON public.orders;
CREATE POLICY "Anyone can place an order" ON public.orders
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(email) > 3
    AND length(business_name) > 0
    AND length(state) > 0
    AND current_milestone = 'received'
  );
