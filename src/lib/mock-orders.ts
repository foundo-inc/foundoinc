// Mock orders data — replaces Supabase backend until real backend is ready.

export interface MockMemberFile {
  name: string;
  size?: number;
  type?: string;
  /** IndexedDB key — use rebuildFileUrl() to get a viewable blob URL. */
  key?: string;
}

export interface MockMember {
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
  idFile?: MockMemberFile;
}

export interface MockMilestone {
  id: string;
  milestone: string;
  note: string | null;
  created_at: string;
}

export interface MockOrder {
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
  members: MockMember[];
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
  history: MockMilestone[];
}

export const MOCK_ORDERS: MockOrder[] = [];

const STORAGE_KEY = "foundo_mock_orders_v2";

function load(): MockOrder[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return MOCK_ORDERS;
}

function save(orders: MockOrder[]) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(orders)); } catch {}
}

export function listOrders(): MockOrder[] {
  return load();
}

export function getOrder(id: string): MockOrder | null {
  return load().find((o) => o.id === id) ?? null;
}

export function addOrder(order: MockOrder): MockOrder {
  const orders = load();
  orders.unshift(order);
  save(orders);
  return order;
}

export function updateOrderMilestone(id: string, milestone: string, note: string | null): MockOrder | null {
  const orders = load();
  const idx = orders.findIndex((o) => o.id === id);
  if (idx === -1) return null;
  const order = orders[idx];
  order.current_milestone = milestone;
  order.history = [
    {
      id: `h_${Date.now()}`,
      milestone,
      note,
      created_at: new Date().toISOString(),
    },
    ...order.history,
  ];
  orders[idx] = order;
  save(orders);
  return order;
}
