import type { Metadata, Viewport } from "next";
import { Bagel_Fat_One, DM_Sans } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const display = Bagel_Fat_One({ weight: "400", subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | Elotes, tostitos y hot dogs en Monterrey`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: "Llevamos el antojo a tu evento en Monterrey.",
    locale: "es_MX",
    type: "website",
    // images: ["/og.jpg"], // agrega public/og.jpg (1200x630) para vista previa al compartir
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phoneDisplay,
  servesCuisine: "Mexicana",
  areaServed: "Monterrey, Nuevo León, México",
  address: { "@type": "PostalAddress", addressLocality: "Monterrey", addressRegion: "N.L.", addressCountry: "MX" },
  sameAs: [site.instagram, site.facebook],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
