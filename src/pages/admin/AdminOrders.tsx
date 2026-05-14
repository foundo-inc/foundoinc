import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminShell from "./AdminShell";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, ChevronRight } from "lucide-react";
import { listOrders, MockOrder } from "@/lib/mock-orders";

type Order = MockOrder;

const AdminOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setOrders(listOrders());
    setLoading(false);
  }, []);

  const filtered = orders.filter((o) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      o.order_number.toLowerCase().includes(q) ||
      o.business_name.toLowerCase().includes(q) ||
      o.email.toLowerCase().includes(q) ||
      `${o.first_name} ${o.last_name}`.toLowerCase().includes(q)
    );
  });

  return (
    <AdminShell>
      <div className="mb-6">
        <h1 className="text-2xl font-bold font-display">Orders</h1>
        <p className="text-sm text-muted-foreground">All checkout submissions and their formation milestones.</p>
      </div>

      <div className="relative mb-4">
        <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search by order #, name, email, or business…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 h-11"
        />
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-muted-foreground text-sm">Loading orders…</div>
        ) : filtered.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground text-sm">No orders found.</div>
        ) : (
          <div className="divide-y divide-border">
            {filtered.map((o) => (
              <Link
                key={o.id}
                to={`/admin/orders/${o.id}`}
                className="flex items-center gap-4 p-4 hover:bg-muted/40 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-xs font-semibold text-primary">{o.order_number}</span>
                    <span className="font-bold truncate">{o.business_name}</span>
                    <Badge variant="outline" className="text-[10px]">{o.company_type}</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5 truncate">
                    {o.first_name} {o.last_name} · {o.email} · {o.state}
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <div className="text-sm font-bold">${o.total}</div>
                  <div className="text-[10px] text-muted-foreground">
                    {new Date(o.created_at).toLocaleDateString()}
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </AdminShell>
  );
};

export default AdminOrders;
