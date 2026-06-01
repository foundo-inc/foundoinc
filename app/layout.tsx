import type { Metadata, Viewport } from "next";
import { Unbounded, Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import "@/index.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Foundo — Start Your U.S. Business From Anywhere",
  description:
    "Form your U.S. LLC, get an EIN, and open a business bank account from anywhere in the world. Starting at $249. Trusted by 2,000+ international founders.",
  authors: [{ name: "Foundo" }],
  openGraph: {
    type: "website",
    title: "Foundo — Start Your U.S. Business From Anywhere",
    description:
      "Form your U.S. LLC, get an EIN, and open a business bank account from anywhere in the world. Starting at $249. Trusted by 2,000+ international founders.",
    images: [
      "https://storage.googleapis.com/gpt-engineer-file-uploads/Pw6nVDIOA2gFrYCfZNut0LyJyhv2/social-images/social-1775982422646-Hero.webp",
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Lovable",
    title: "Foundo — Start Your U.S. Business From Anywhere",
    description:
      "Form your U.S. LLC, get an EIN, and open a business bank account from anywhere in the world. Starting at $249. Trusted by 2,000+ international founders.",
    images: [
      "https://storage.googleapis.com/gpt-engineer-file-uploads/Pw6nVDIOA2gFrYCfZNut0LyJyhv2/social-images/social-1775982422646-Hero.webp",
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${unbounded.variable} ${inter.variable} bg-background`}>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
