
-- Roles enum + user_roles table
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role
  )
$$;

CREATE POLICY "Users see their own roles" ON public.user_roles
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins manage roles" ON public.user_roles
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Order milestone enum
CREATE TYPE public.order_milestone AS ENUM (
  'received', 'filing', 'ein', 'documents_ready', 'completed'
);

-- Orders table
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number TEXT NOT NULL UNIQUE DEFAULT ('FN-' || upper(substr(replace(gen_random_uuid()::text, '-', ''), 1, 8))),
  -- Contact
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  country_code TEXT,
  phone TEXT,
  -- Business
  state TEXT NOT NULL,
  company_type TEXT NOT NULL,
  business_name TEXT NOT NULL,
  website TEXT,
  industry TEXT,
  description TEXT,
  -- Members (jsonb array)
  members JSONB NOT NULL DEFAULT '[]'::jsonb,
  -- Add-ons
  addon_itin BOOLEAN NOT NULL DEFAULT false,
  addon_seller_permit BOOLEAN NOT NULL DEFAULT false,
  addon_premium_address BOOLEAN NOT NULL DEFAULT false,
  -- Pricing
  foundo_fee INTEGER NOT NULL,
  state_fee INTEGER NOT NULL,
  addons_total INTEGER NOT NULL DEFAULT 0,
  subtotal INTEGER NOT NULL,
  discount INTEGER NOT NULL DEFAULT 0,
  total INTEGER NOT NULL,
  coupon_code TEXT,
  -- Status
  current_milestone order_milestone NOT NULL DEFAULT 'received',
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can place an order" ON public.orders
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admins read orders" ON public.orders
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins update orders" ON public.orders
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins delete orders" ON public.orders
  FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Milestone history
CREATE TABLE public.order_milestones (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
  milestone order_milestone NOT NULL,
  note TEXT,
  changed_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.order_milestones ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins read milestones" ON public.order_milestones
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins insert milestones" ON public.order_milestones
  FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- updated_at trigger
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$;

CREATE TRIGGER orders_updated_at BEFORE UPDATE ON public.orders
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Auto insert initial milestone on order creation
CREATE OR REPLACE FUNCTION public.create_initial_milestone()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.order_milestones (order_id, milestone, note)
  VALUES (NEW.id, NEW.current_milestone, 'Order received');
  RETURN NEW;
END;
$$;

CREATE TRIGGER orders_initial_milestone AFTER INSERT ON public.orders
  FOR EACH ROW EXECUTE FUNCTION public.create_initial_milestone();

CREATE INDEX idx_orders_created_at ON public.orders (created_at DESC);
CREATE INDEX idx_orders_email ON public.orders (email);
CREATE INDEX idx_milestones_order ON public.order_milestones (order_id, created_at DESC);
