import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdminShell from "./AdminShell";
import { Badge } from "@/components/ui/badge";
import { milestoneLabel } from "@/lib/admin-data";
import { ArrowLeft } from "lucide-react";
import { getOrder, MockOrder, MockMemberFile } from "@/lib/mock-orders";
import { rebuildFileUrl } from "@/lib/idb-storage";

const AdminOrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState<MockOrder | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setOrder(getOrder(id));
    setLoading(false);
  }, [id]);

  if (loading) return <AdminShell><div className="text-muted-foreground text-sm">Loading…</div></AdminShell>;
  if (!order) return <AdminShell><div>Order not found.</div></AdminShell>;

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

      <div className="space-y-6">
        <div className="space-y-6">
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
                {m.idFile && <MemberFileLink file={m.idFile} />}
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

          {(order.addon_itin || order.addon_seller_permit || order.addon_premium_address) && (
            <Card title="Add-ons selected">
              <ul className="text-sm space-y-1">
                {order.addon_itin && <li>— ITIN</li>}
                {order.addon_seller_permit && <li>— Seller Permit</li>}
                {order.addon_premium_address && <li>— Premium Address</li>}
              </ul>
            </Card>
          )}
        </div>
      </div>
    </AdminShell>
  );
};

const MemberFileLink = ({ file }: { file: MockMemberFile }) => {
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => {
    let active = true;
    if (file.key) {
      rebuildFileUrl(file.key).then((u) => { if (active) setUrl(u); });
    }
    return () => { active = false; };
  }, [file.key]);
  const isImage = file.type?.startsWith("image/");
  return (
    <div className="mt-2 flex items-center gap-3">
      {url && isImage && (
        <a href={url} target="_blank" rel="noopener noreferrer" className="block w-14 h-14 rounded-md overflow-hidden border border-border bg-secondary">
          <img src={url} alt={file.name} className="w-full h-full object-cover" />
        </a>
      )}
      <div className="text-xs">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">
            📎 {file.name}
          </a>
        ) : (
          <span className="text-muted-foreground">📎 {file.name}{file.key ? " (file unavailable in this browser)" : ""}</span>
        )}
        {file.size && <div className="text-muted-foreground">{Math.round(file.size / 1024)} KB · {file.type}</div>}
      </div>
    </div>
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
