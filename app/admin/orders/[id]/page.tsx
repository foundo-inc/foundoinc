"use client";

import { useParams } from "next/navigation";

export default function AdminOrderDetailPage() {
  const params = useParams();
  const id = params.id;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-4xl p-8 bg-card rounded-xl border border-border shadow-lg">
        <h1 className="text-2xl font-bold text-foreground mb-6">Order Details</h1>
        <p className="text-muted-foreground">Order ID: {id}</p>
      </div>
    </div>
  );
}
