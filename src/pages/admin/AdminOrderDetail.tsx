import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdminShell from "./AdminShell";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { MILESTONES, milestoneIndex, milestoneLabel } from "@/lib/admin-data";
import { ArrowLeft, CheckCircle2, Circle, Mail, Loader2 } from "lucide-react";
import { getOrder, updateOrderMilestone, MockOrder } from "@/lib/mock-orders";

const AdminOrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState<MockOrder | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);
  const [note, setNote] = useState("");

  const load = () => {
    if (!id) return;
    setOrder(getOrder(id));
    setLoading(false);
  };

  useEffect(() => { load(); }, [id]);

  const updateMilestone = async (next: string) => {
    if (!order) return;
    setUpdating(next);
    await new Promise((r) => setTimeout(r, 400));
    const updated = updateOrderMilestone(order.id, next, note.trim() || null);
    if (!updated) {
      toast({ title: "Update failed", variant: "destructive" });
      setUpdating(null);
      return;
    }
    toast({ title: "Milestone updated", description: `Notification queued for ${order.email}` });
    setNote("");
    setUpdating(null);
    load();
  };

  if (loading) return <AdminShell><div className="text-muted-foreground text-sm">Loading…</div></AdminShell>;
  if (!order) return <AdminShell><div>Order not found.</div></AdminShell>;

  const currentIdx = milestoneIndex(order.current_milestone);
  const history = order.history;

  return (
    <AdminShell>
      <Link to="/admin" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
        <ArrowLeft className="h-4 w-4 mr-1" /> Back to orders
      </Link>

      <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
        <div>
          <div className="font-mono text-xs font-bold text-primary mb-1">{order.order_number}</div>
          <h1 className="text-2xl font-bold font-display">{order.business_name}</h1>
          <p className="text-sm text-muted-foreground">
            {order.company_type} · {order.state} · ${order.total} · {new Date(order.created_at).toLocaleString()}
          </p>
        </div>
        <Badge className="text-xs">{milestoneLabel(order.current_milestone)}</Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card title="Customer">
            <Row label="Name" value={`${order.first_name} ${order.last_name}`} />
            <Row label="Email" value={order.email} />
            <Row label="Phone" value={`${order.country_code ?? ""} ${order.phone ?? ""}`} />
          </Card>

          <Card title="Business">
            <Row label="Business name" value={order.business_name} />
            <Row label="Entity" value={order.company_type} />
            <Row label="State" value={order.state} />
            <Row label="Industry" value={order.industry ?? "—"} />
            <Row label="Website" value={order.website ?? "—"} />
            <Row label="Description" value={order.description ?? "—"} multiline />
          </Card>

          <Card title={`Members (${order.members?.length ?? 0})`}>
            {(order.members ?? []).map((m, i) => (
              <div key={i} className="border border-border rounded-xl p-3 mb-2 last:mb-0">
                <div className="flex items-center justify-between mb-1">
                  <div className="font-semibold text-sm">
                    {m.firstName} {m.lastName}{" "}
                    {m.isResponsible && <Badge variant="outline" className="ml-1 text-[10px]">Responsible</Badge>}
                  </div>
                  <span className="text-xs text-muted-foreground">{m.idType}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  {m.street}, {m.city}, {m.stateProvince} {m.zip}, {m.country}
                </div>
                {m.idFile && <div className="text-xs mt-1">📎 {m.idFile.name}</div>}
              </div>
            ))}
          </Card>

          <Card title="Pricing">
            <Row label="Package & state fee" value={`$${order.foundo_fee + order.state_fee}`} />
            <Row label="Add-ons" value={`$${order.addons_total}`} />
            {order.discount > 0 && (
              <Row label={`Discount${order.coupon_code ? ` (${order.coupon_code})` : ""}`} value={`−$${order.discount}`} />
            )}
            <div className="flex justify-between pt-2 mt-2 border-t border-border font-bold">
              <span>Total</span><span>${order.total}</span>
            </div>
          </Card>

          <Card title="Add-ons selected">
            <ul className="text-sm space-y-1">
              <li>{order.addon_itin ? "✅" : "—"} ITIN</li>
              <li>{order.addon_seller_permit ? "✅" : "—"} Seller Permit</li>
              <li>{order.addon_premium_address ? "✅" : "—"} Premium Address</li>
            </ul>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Milestone Status">
            <div className="space-y-2">
              {MILESTONES.map((m, i) => {
                const isDone = i < currentIdx;
                const isCurrent = i === currentIdx;
                return (
                  <div key={m.key} className={`flex items-start gap-3 p-3 rounded-xl border ${isCurrent ? "border-primary bg-primary/5" : "border-border"}`}>
                    {isDone ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    ) : isCurrent ? (
                      <div className="h-5 w-5 rounded-full bg-primary shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm">{m.label}</div>
                      <div className="text-xs text-muted-foreground">{m.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 pt-5 border-t border-border">
              <label className="text-xs font-semibold text-muted-foreground mb-1.5 block">
                Add a note (included in customer email)
              </label>
              <Textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Optional message to client…"
                className="text-sm mb-3"
                rows={3}
              />
              <div className="grid gap-2">
                {MILESTONES.map((m) => {
                  const disabled = m.key === order.current_milestone || updating !== null;
                  return (
                    <Button
                      key={m.key}
                      variant={m.key === order.current_milestone ? "secondary" : "outline"}
                      disabled={disabled}
                      onClick={() => updateMilestone(m.key)}
                      className="justify-between"
                    >
                      <span>Set to: {m.label}</span>
                      {updating === m.key ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}
                    </Button>
                  );
                })}
              </div>
            </div>
          </Card>

          <Card title="History">
            <div className="space-y-3">
              {history.map((h) => (
                <div key={h.id} className="text-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{milestoneLabel(h.milestone)}</span>
                    <span className="text-xs text-muted-foreground">{new Date(h.created_at).toLocaleString()}</span>
                  </div>
                  {h.note && <p className="text-xs text-muted-foreground mt-0.5">{h.note}</p>}
                </div>
              ))}
            </div>
          </Card>
        </div>
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

const Row = ({ label, value, multiline }: { label: string; value: string; multiline?: boolean }) => (
  <div className={`flex ${multiline ? "flex-col gap-0.5" : "justify-between gap-4"} text-sm py-1.5`}>
    <span className="text-muted-foreground">{label}</span>
    <span className={multiline ? "" : "font-medium text-right"}>{value}</span>
  </div>
);

export default AdminOrderDetail;
