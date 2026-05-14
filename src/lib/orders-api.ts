// Orders API — talks to the real backend (Supabase orders table + admin edge function).
import { supabase } from "@/integrations/supabase/client";

export interface MemberFile {
  name: string;
  size?: number;
  type?: string;
  key?: string;
}

export interface OrderMember {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  stateProvince: string;
  zip: string;
  country: string;
  idType: string;
  ssn?: string;
  isResponsible?: boolean;
  idFile?: MemberFile;
}

export interface Order {
  id: string;
  order_number: string;
  first_name: string;
  last_name: string;
  email: string;
  country_code: string | null;
  phone: string | null;
  state: string;
  company_type: string;
  business_name: string;
  website: string | null;
  industry: string | null;
  description: string | null;
  members: OrderMember[];
  addon_itin: boolean;
  addon_seller_permit: boolean;
  addon_premium_address: boolean;
  foundo_fee: number;
  state_fee: number;
  addons_total: number;
  subtotal: number;
  discount: number;
  total: number;
  coupon_code: string | null;
  current_milestone: string;
  notes: string | null;
  created_at: string;
}

const ADMIN_PASSWORD = "2668";

async function callAdmin(path: string): Promise<Response> {
  const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/admin-orders${path}`;
  return fetch(url, {
    headers: {
      "x-admin-password": ADMIN_PASSWORD,
      apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
    },
  });
}

export async function listOrders(): Promise<Order[]> {
  const res = await callAdmin("");
  if (!res.ok) throw new Error(`Failed to load orders (${res.status})`);
  const json = await res.json();
  return json.orders ?? [];
}

export async function getOrder(id: string): Promise<Order | null> {
  const res = await callAdmin(`?id=${encodeURIComponent(id)}`);
  if (!res.ok) throw new Error(`Failed to load order (${res.status})`);
  const json = await res.json();
  return json.order ?? null;
}

export async function createOrder(input: Omit<Order, "id" | "order_number" | "created_at" | "current_milestone">): Promise<Order> {
  const { data, error } = await supabase
    .from("orders")
    .insert({ ...input, members: input.members as unknown as never, current_milestone: "received" })
    .select()
    .single();
  if (error) throw error;
  return data as unknown as Order;
}
