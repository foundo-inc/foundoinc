import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import AdminShell from "./AdminShell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Trash2, CreditCard } from "lucide-react";
import { Receipt, getReceiptByOrder, deleteReceipt, downloadReceiptHtml } from "@/lib/receipt-storage";
import { toast } from "@/hooks/use-toast";

const AdminOrderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState<Receipt | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    getReceiptByOrder(decodeURIComponent(id)).then(setOrder).finally(() => setLoading(false));
  }, [id]);

  const onDelete = async () => {
    if (!order) return;
    if (!confirm(`Delete order ${order.orderNumber}?`)) return;
    await deleteReceipt(order.orderNumber);
    toast({ title: "Order deleted" });
    navigate("/admin");
  };

  if (loading) return <AdminShell><div className="text-muted-foreground text-sm">Loading…</div></AdminShell>;
  if (!order) return <AdminShell><div>Order not found.</div></AdminShell>;

  return (
    <AdminShell>
      <Link to="/admin" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
        <ArrowLeft className="h-4 w-4 mr-1" /> Back to orders
      </Link>

      <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
        <div>
          <div className="font-mono text-xs font-bold text-primary mb-1">{order.orderNumber}</div>
          <h1 className="text-2xl font-bold font-display">{order.business.name}</h1>
          <p className="text-sm text-muted-foreground">
            {order.business.companyType} · {order.business.state} · ${order.pricing.total} · {new Date(order.createdAt).toLocaleString()}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="text-xs bg-success/10 text-success hover:bg-success/10">Paid</Badge>
          <Button size="sm" variant="outline" onClick={() => downloadReceiptHtml(order)}>
            <Download className="h-4 w-4 mr-1.5" /> Receipt
          </Button>
          <Button size="sm" variant="outline" onClick={onDelete}>
            <Trash2 className="h-4 w-4 mr-1.5" /> Delete
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        <Card title="Customer">
          <Row label="Name" value={`${order.customer.firstName} ${order.customer.lastName}`} />
          <Row label="Email" value={order.customer.email} />
          <Row label="Phone" value={order.customer.phone || "—"} />
        </Card>

        <Card title="Business">
          <Row label="Business name" value={order.business.name} />
          <Row label="Entity" value={order.business.companyType} />
          <Row label="State" value={order.business.state} />
          <Row label="Industry" value={order.business.industry || "—"} />
        </Card>

        <Card title="Pricing">
          <Row label="Foundo fee" value={`$${order.pricing.foundoFee}`} />
          <Row label="State fee" value={`$${order.pricing.stateFee}`} />
          <Row label="Add-ons" value={`$${order.pricing.addons}`} />
          {order.pricing.discount > 0 && (
            <Row label={`Discount${order.pricing.couponCode ? ` (${order.pricing.couponCode})` : ""}`} value={`−$${order.pricing.discount}`} />
          )}
          <div className="flex justify-between pt-2 mt-2 border-t border-border font-bold">
            <span>Total</span><span>${order.pricing.total}</span>
          </div>
        </Card>

        <Card title="Payment">
          <div className="flex items-center gap-2 text-sm">
            <CreditCard className="h-4 w-4 text-muted-foreground" />
            {order.payment.brand ? order.payment.brand.toUpperCase() : "Card"} •••• {order.payment.last4 ?? "—"}
          </div>
          {order.payment.tokenId && (
            <Row label="Stripe token" value={order.payment.tokenId} mono />
          )}
        </Card>
      </div>
    </AdminShell>
  );
};

const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="bg-card border border-border rounded-2xl p-5">
    <h3 className="font-bold font-display mb-4">{title}</h3>
    {children}
  </section>
);

const Row = ({ label, value, mono }: { label: string; value: string; mono?: boolean }) => (
  <div className="flex justify-between gap-4 text-sm py-1.5">
    <span className="text-muted-foreground">{label}</span>
    <span className={`font-medium text-right ${mono ? "font-mono text-xs break-all" : ""}`}>{value}</span>
  </div>
);

export default AdminOrderDetail;
