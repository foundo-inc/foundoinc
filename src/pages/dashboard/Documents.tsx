import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { documents } from "@/lib/dashboard-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, FileText, Search, Upload } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Documents = () => {
  const [q, setQ] = useState("");
  const filtered = documents.filter((d) => d.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tighter text-foreground">Documents</h2>
          <p className="text-muted-foreground mt-1">All your formation, IRS and compliance documents in one place.</p>
        </div>
        <Button onClick={() => toast.success("Upload coming soon")} size="lg" className="rounded-full font-semibold">
          <Upload className="h-4 w-4 mr-2" /> Request document
        </Button>
      </div>

      <div className="rounded-2xl border border-border bg-card overflow-hidden">
        <div className="p-4 border-b border-border">
          <div className="relative max-w-md">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search documents…" className="pl-10 h-11 rounded-xl" />
          </div>
        </div>

        <div className="divide-y divide-border">
          {filtered.map((d) => (
            <div key={d.name} className="flex items-center gap-4 p-4 md:p-5 hover:bg-muted/40 transition-colors">
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground truncate">{d.name}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-0.5">
                  <span className="px-2 py-0.5 rounded-md bg-muted font-medium">{d.category}</span>
                  <span>{d.type} · {d.size}</span>
                  <span className="hidden sm:inline">{d.date}</span>
                </div>
              </div>
              <Button onClick={() => toast.success(`Downloading ${d.name}`)} variant="ghost" size="sm" className="rounded-xl">
                <Download className="h-4 w-4 sm:mr-1" /> <span className="hidden sm:inline">Download</span>
              </Button>
            </div>
          ))}
          {filtered.length === 0 && <p className="p-10 text-center text-muted-foreground">No documents match "{q}"</p>}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Documents;
