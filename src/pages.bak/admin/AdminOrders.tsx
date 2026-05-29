import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AdminShell from "./AdminShell";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, ChevronRight, X, Trash2 } from "lucide-react";
import { Receipt, listReceipts, clearAllReceipts } from "@/lib/receipt-storage";
import { toast } from "@/hooks/use-toast";

const PAGE_SIZE = 8;

function getPageNumbers(current: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | "…")[] = [1];
  const left = Math.max(2, current - 1);
  const right = Math.min(total - 1, current + 1);
  if (left > 2) pages.push("…");
  for (let i = left; i <= right; i++) pages.push(i);
  if (right < total - 1) pages.push("…");
  pages.push(total);
  return pages;
}

const AdminOrders = () => {
  const [all, setAll] = useState<Receipt[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [debounced, setDebounced] = useState("");
  const [page, setPage] = useState(1);

  const load = () => {
    setLoading(true);
    listReceipts().then((rs) => setAll(rs)).finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(search.trim().toLowerCase()), 300);
    return () => clearTimeout(t);
  }, [search]);
  useEffect(() => { setPage(1); }, [debounced]);

  const filtered = useMemo(() => {
    if (!debounced) return all;
    return all.filter((r) =>
      [r.orderNumber, r.business.name, r.customer.firstName, r.customer.lastName, r.customer.email]
        .join(" ").toLowerCase().includes(debounced),
    );
  }, [all, debounced]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const showingFrom = total === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const showingTo = Math.min(page * PAGE_SIZE, total);
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const onClearAll = async () => {
    if (!confirm("Delete all locally stored orders? This cannot be undone.")) return;
    await clearAllReceipts();
    toast({ title: "All orders cleared" });
    load();
  };

  return (
    <AdminShell>
      <div className="mb-6 flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold font-display">Orders</h1>
          <p className="text-sm text-muted-foreground">
            Stored locally in this browser ({all.length} {all.length === 1 ? "order" : "orders"}).
          </p>
        </div>
        {all.length > 0 && (
          <Button variant="outline" size="sm" onClick={onClearAll}>
            <Trash2 className="h-4 w-4 mr-1.5" /> Clear all
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 mb-4">
        <div className="relative">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by order #, name, email, or business…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 h-11"
          />
        </div>
        {search && (
          <Button variant="ghost" onClick={() => setSearch("")} className="h-11">
            <X className="h-4 w-4 mr-1" /> Clear
          </Button>
        )}
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-muted-foreground text-sm">Loading orders…</div>
        ) : pageItems.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground text-sm">
            {all.length === 0 ? "No orders yet. Place a checkout to see it here." : "No orders match your search."}
          </div>
        ) : (
          <div className="divide-y divide-border">
            {pageItems.map((o) => (
              <Link
                key={o.orderNumber}
                to={`/admin/orders/${encodeURIComponent(o.orderNumber)}`}
                className="flex items-center gap-4 p-4 hover:bg-muted/40 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-xs font-semibold text-primary">{o.orderNumber}</span>
                    <span className="font-bold truncate">{o.business.name}</span>
                    <Badge variant="outline" className="text-[10px]">{o.business.companyType}</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5 truncate">
                    {o.customer.firstName} {o.customer.lastName} · {o.customer.email} · {o.business.state}
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <div className="text-sm font-bold">${o.pricing.total}</div>
                  <div className="text-[10px] text-muted-foreground">{new Date(o.createdAt).toLocaleDateString()}</div>
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
            disabled={page <= 1}
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
                className={`min-w-9 h-9 px-3 rounded-lg text-sm font-medium tabular-nums transition-colors ${
                  p === page ? "bg-foreground text-background" : "text-foreground hover:bg-muted/60"
                }`}
              >
                {p}
              </button>
            ),
          )}
          <button
            type="button"
            disabled={page >= totalPages}
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
