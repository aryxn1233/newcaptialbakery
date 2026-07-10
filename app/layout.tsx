import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "New Capital Bakery | Fresh Cakes, Pastries & Bakery in Chandigarh",
  description:
    "Premium bakery in Sector 21C Chandigarh offering fresh cakes, pastries, cream rolls, patties, biscuits, breads, and other freshly baked products. Visit New Capital Bakery today.",
  keywords: [
    "bakery chandigarh",
    "fresh cakes chandigarh",
    "pastries chandigarh",
    "cream rolls",
    "swiss rolls",
    "patties",
    "biscuits",
    "breads",
    "New Capital Bakery",
    "sector 21 chandigarh",
    "best bakery chandigarh",
  ],
  authors: [{ name: "New Capital Bakery" }],
  creator: "New Capital Bakery",
  publisher: "New Capital Bakery",
  metadataBase: new URL("https://www.newcapitalbakery.in"),
  openGraph: {
    title: "New Capital Bakery | Fresh Cakes, Pastries & Bakery in Chandigarh",
    description:
      "Premium bakery in Sector 21C Chandigarh offering fresh cakes, pastries, cream rolls, patties, biscuits, breads, and freshly baked products daily.",
    url: "https://www.newcapitalbakery.in",
    siteName: "New Capital Bakery",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Capital Bakery | Fresh Cakes, Pastries & Bakery in Chandigarh",
    description:
      "Premium bakery in Sector 21C Chandigarh. Fresh cakes, pastries, cream rolls, patties and more — baked daily.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "New Capital Bakery",
  description:
    "Premium bakery in Sector 21C Chandigarh offering fresh cakes, pastries, cream rolls, patties, biscuits, and breads.",
  url: "https://www.newcapitalbakery.in",
  telephone: "+918054805451",
  address: {
    "@type": "PostalAddress",
    streetAddress: "29, Sarovar Path",
    addressLocality: "Chandigarh",
    addressRegion: "Chandigarh",
    postalCode: "160022",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "30.7200",
    longitude: "76.7400",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
      ],
      closes: "22:00",
    },
  ],
  servesCuisine: "Bakery",
  priceRange: "₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.1",
    reviewCount: "126",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
