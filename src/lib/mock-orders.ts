// Mock orders data — replaces Supabase backend until real backend is ready.

export interface MockMember {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  stateProvince: string;
  zip: string;
  country: string;
  idType: string;
  isResponsible?: boolean;
  idFile?: { name: string };
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

export const MOCK_ORDERS: MockOrder[] = [
  {
    id: "ord_001",
    order_number: "FND-1001",
    first_name: "John",
    last_name: "Smith",
    email: "john@acme.com",
    country_code: "+1",
    phone: "555 123 4567",
    state: "Wyoming",
    company_type: "LLC",
    business_name: "Acme Ventures",
    website: "https://acme.com",
    industry: "Ecommerce",
    description: "We sell premium handmade leather wallets to customers in the US.",
    members: [
      {
        firstName: "John",
        lastName: "Smith",
        street: "123 Main St",
        city: "New York",
        stateProvince: "NY",
        zip: "10001",
        country: "United States",
        idType: "passport",
        isResponsible: true,
        idFile: { name: "passport.pdf" },
      },
    ],
    addon_itin: true,
    addon_seller_permit: true,
    addon_premium_address: false,
    foundo_fee: 249,
    state_fee: 100,
    addons_total: 348,
    subtotal: 697,
    discount: 0,
    total: 697,
    coupon_code: null,
    current_milestone: "filing",
    notes: null,
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
    history: [
      { id: "h1", milestone: "filing", note: "Filed with Wyoming SOS", created_at: new Date(Date.now() - 86400000).toISOString() },
      { id: "h2", milestone: "received", note: "Order received", created_at: new Date(Date.now() - 86400000 * 2).toISOString() },
    ],
  },
  {
    id: "ord_002",
    order_number: "FND-1002",
    first_name: "Sarah",
    last_name: "Lee",
    email: "sarah@brightco.io",
    country_code: "+44",
    phone: "20 7946 0958",
    state: "Delaware",
    company_type: "C-Corp",
    business_name: "BrightCo Labs",
    website: "https://brightco.io",
    industry: "SaaS / Software",
    description: "AI-powered analytics platform for SMBs.",
    members: [
      {
        firstName: "Sarah",
        lastName: "Lee",
        street: "10 King's Road",
        city: "London",
        stateProvince: "",
        zip: "SW3 4UD",
        country: "United Kingdom",
        idType: "passport",
        isResponsible: true,
        idFile: { name: "uk_passport.jpg" },
      },
    ],
    addon_itin: true,
    addon_seller_permit: false,
    addon_premium_address: false,
    foundo_fee: 249,
    state_fee: 90,
    addons_total: 199,
    subtotal: 538,
    discount: 50,
    total: 488,
    coupon_code: "WELCOME50",
    current_milestone: "ein",
    notes: null,
    created_at: new Date(Date.now() - 86400000 * 5).toISOString(),
    history: [
      { id: "h1", milestone: "ein", note: "EIN application submitted to IRS", created_at: new Date(Date.now() - 86400000 * 1).toISOString() },
      { id: "h2", milestone: "filing", note: null, created_at: new Date(Date.now() - 86400000 * 3).toISOString() },
      { id: "h3", milestone: "received", note: "Order received", created_at: new Date(Date.now() - 86400000 * 5).toISOString() },
    ],
  },
  {
    id: "ord_003",
    order_number: "FND-1003",
    first_name: "Carlos",
    last_name: "Mendez",
    email: "carlos@boldbrand.mx",
    country_code: "+52",
    phone: "55 1234 5678",
    state: "Florida",
    company_type: "LLC",
    business_name: "BoldBrand Studio",
    website: null,
    industry: "Marketing & Advertising",
    description: "Branding and creative agency for DTC brands.",
    members: [
      {
        firstName: "Carlos",
        lastName: "Mendez",
        street: "Av. Reforma 123",
        city: "Mexico City",
        stateProvince: "CDMX",
        zip: "06600",
        country: "Mexico",
        idType: "national_id",
        isResponsible: true,
        idFile: { name: "id_card.png" },
      },
    ],
    addon_itin: true,
    addon_seller_permit: false,
    addon_premium_address: true,
    foundo_fee: 249,
    state_fee: 125,
    addons_total: 348,
    subtotal: 722,
    discount: 0,
    total: 722,
    coupon_code: null,
    current_milestone: "completed",
    notes: null,
    created_at: new Date(Date.now() - 86400000 * 14).toISOString(),
    history: [
      { id: "h1", milestone: "completed", note: "All documents delivered", created_at: new Date(Date.now() - 86400000 * 1).toISOString() },
      { id: "h2", milestone: "documents_ready", note: null, created_at: new Date(Date.now() - 86400000 * 3).toISOString() },
      { id: "h3", milestone: "ein", note: null, created_at: new Date(Date.now() - 86400000 * 7).toISOString() },
      { id: "h4", milestone: "filing", note: null, created_at: new Date(Date.now() - 86400000 * 10).toISOString() },
      { id: "h5", milestone: "received", note: "Order received", created_at: new Date(Date.now() - 86400000 * 14).toISOString() },
    ],
  },
];

const STORAGE_KEY = "foundo_mock_orders_v1";

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
