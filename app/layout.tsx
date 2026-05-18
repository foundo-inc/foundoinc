import type { Metadata } from "next";
import { Providers } from "./providers";
import "@/styles/globals.css";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Foundo",
  description: "Foundo - Your Business Management Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Unbounded:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
