import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans } from "next/font/google";

import { Analytics } from "@/components/analytics";
import { UTMTracker } from "@/components/utm-tracker";
import { Footer } from "@/components/layout/footer";
import { FloatingCTA } from "@/components/layout/floating-cta";
import { Navbar } from "@/components/layout/navbar";
import { buildPageMetadata } from "@/lib/metadata";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = buildPageMetadata({
  title: {
    default: "BondFix — Laptop & TV Screen Repair in Nairobi, Kenya",
    template: "%s | BondFix",
  },
  description:
    "Professional laptop and TV screen repair in Nairobi. OCA bonding technology. Same-day laptop repairs, 90-day warranty. Call or WhatsApp for a free quote.",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BondFix",
  description: "Professional laptop and TV screen bonding and repair in Nairobi, Kenya",
  url: "https://bondfix.co.ke",
  telephone: "+254722631353",
  email: "repairs@bondfix.co.ke",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kisii",
    addressRegion: "Kisii County",
    addressCountry: "KE",
  },
  openingHours: "Mo-Sa 08:00-18:00",
  priceRange: "KSh 4,000 - KSh 20,000",
  areaServed: ["Kisii County", "Nyanza", "Western Kenya"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full bg-white text-slate-900">
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
        <UTMTracker />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <FloatingCTA />
      </body>
    </html>
  );
}
