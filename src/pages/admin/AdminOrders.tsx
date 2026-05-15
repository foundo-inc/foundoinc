import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminShell from "./AdminShell";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, ChevronRight, ChevronLeft, X } from "lucide-react";
import { listOrders, Order } from "@/lib/orders-api";
import { STATES } from "@/lib/checkout-data";
import { toast } from "@/hooks/use-toast";

const COMPANY_TYPES = ["LLC", "C-Corp"];
const PAGE_SIZES = [10, 20, 50, 100];
const ALL = "__all__";

const AdminOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [stateFilter, setStateFilter] = useState<string>(ALL);
  const [companyType, setCompanyType] = useState<string>(ALL);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);

  // Debounce search input
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search.trim()), 300);
    return () => clearTimeout(t);
  }, [search]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, stateFilter, companyType, limit]);

  useEffect(() => {
    setLoading(true);
    listOrders({
      search: debouncedSearch || undefined,
      state: stateFilter === ALL ? undefined : stateFilter,
      companyType: companyType === ALL ? undefined : companyType,
      page,
      limit,
    })
      .then((res) => {
        setOrders(res.orders);
        setTotal(res.total);
      })
      .catch((e) =>
        toast({ title: "Failed to load orders", description: e.message, variant: "destructive" }),
      )
      .finally(() => setLoading(false));
  }, [debouncedSearch, stateFilter, companyType, page, limit]);

  const totalPages = Math.max(1, Math.ceil(total / limit));
  const showingFrom = total === 0 ? 0 : (page - 1) * limit + 1;
  const showingTo = Math.min(page * limit, total);
  const hasFilters = !!debouncedSearch || stateFilter !== ALL || companyType !== ALL;

  const clearFilters = () => {
    setSearch("");
    setStateFilter(ALL);
    setCompanyType(ALL);
  };

  return (
    <AdminShell>
      <div className="mb-6">
        <h1 className="text-2xl font-bold font-display">Orders</h1>
        <p className="text-sm text-muted-foreground">All checkout submissions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_200px_180px_auto] gap-2 mb-4">
        <div className="relative">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by order #, name, email, or business…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 h-11"
          />
        </div>
        <Select value={stateFilter} onValueChange={setStateFilter}>
          <SelectTrigger className="h-11">
            <SelectValue placeholder="All states" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={ALL}>All states</SelectItem>
            {STATES.map((s) => (
              <SelectItem key={s.name} value={s.name}>
                {s.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={companyType} onValueChange={setCompanyType}>
          <SelectTrigger className="h-11">
            <SelectValue placeholder="All types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={ALL}>All types</SelectItem>
            {COMPANY_TYPES.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {hasFilters && (
          <Button variant="ghost" onClick={clearFilters} className="h-11">
            <X className="h-4 w-4 mr-1" /> Clear
          </Button>
        )}
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-muted-foreground text-sm">Loading orders…</div>
        ) : orders.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground text-sm">No orders found.</div>
        ) : (
          <div className="divide-y divide-border">
            {orders.map((o) => (
              <Link
                key={o.id}
                to={`/admin/orders/${o.id}`}
                className="flex items-center gap-4 p-4 hover:bg-muted/40 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-xs font-semibold text-primary">{o.order_number}</span>
                    <span className="font-bold truncate">{o.business_name}</span>
                    <Badge variant="outline" className="text-[10px]">
                      {o.company_type}
                    </Badge>
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

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
        <div className="text-sm text-muted-foreground tabular-nums">
          {total === 0 ? "0 results" : `${showingFrom}-${showingTo} of ${total}`}
        </div>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            disabled={page <= 1 || loading}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="px-3 h-9 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors disabled:opacity-40 disabled:pointer-events-none"
          >
            Previous
          </button>
          {getPageNumbers(page, totalPages).map((p, i) =>
            p === "…" ? (
              <span key={`e${i}`} className="px-2 text-sm text-muted-foreground">…</span>
            ) : (
              <button
                key={p}
                type="button"
                onClick={() => setPage(p as number)}
                disabled={loading}
                className={`min-w-9 h-9 px-3 rounded-lg text-sm font-medium tabular-nums transition-colors ${
                  p === page
                    ? "bg-foreground text-background"
                    : "text-foreground hover:bg-muted/60"
                }`}
              >
                {p}
              </button>
            ),
          )}
          <button
            type="button"
            disabled={page >= totalPages || loading}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="px-3 h-9 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors disabled:opacity-40 disabled:pointer-events-none"
          >
            Next
          </button>
        </div>
      </div>
    </AdminShell>
  );
};

export default AdminOrders;
