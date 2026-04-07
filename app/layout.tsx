import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Manrope,
  Noto_Serif,
} from "next/font/google";
import Script from "next/script";
import { SiteNavbar } from "@/components/site-navbar";
import {
  soultwareDemoDescription,
  soultwareLinks,
  soultwareValueProp,
} from "@/lib/soultware";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Coffee Shop Website Demo by Soultware | The Artisanal Editorial",
    template: "%s | Soultware Demo",
  },
  description: soultwareDemoDescription,
  applicationName: "The Artisanal Editorial",
  keywords: [
    "coffee shop website demo",
    "restaurant website demo",
    "hospitality web design",
    "web development agency",
    "small business website design",
    "specialty coffee",
    "coffee roastery",
    "artisanal coffee shop",
    "single origin coffee",
    "espresso bar",
    "coffee menu",
    "coffee journal",
    "coffee shop Brooklyn",
  ],
  authors: [{ name: "The Artisanal Editorial" }],
  creator: "The Artisanal Editorial",
  publisher: "The Artisanal Editorial",
  category: "food and drink",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Artisanal Editorial",
    title: "Coffee Shop Website Demo by Soultware | The Artisanal Editorial",
    description: soultwareDemoDescription,
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4XQMHdcdBn4eYJlUBCYip2f_jAq1eq7l43zMl1jqfDgfvkMdvuKvGoMmw68stXuE-C0JJ65uxRmmf1rCerGWo54Kk6NPCYnk-XPnLuUKzKnOsfViXF9hbXaO0n5wvQG7K7XBOXnm9y-6E_JBPS1ZrvLf3qTTenQVBl8pZijuj097fBqO5ZRJARaOv6EJv591mC0emckgnH7BHxlczDlF0bQQMDm2gidxgK-eb3Dkekgg1CaReTnYIeZ_J-C_JqutqDr11MWTLEw",
        width: 1200,
        height: 630,
        alt: "Rich espresso with crema in a ceramic cup.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffee Shop Website Demo by Soultware | The Artisanal Editorial",
    description: soultwareDemoDescription,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC4XQMHdcdBn4eYJlUBCYip2f_jAq1eq7l43zMl1jqfDgfvkMdvuKvGoMmw68stXuE-C0JJ65uxRmmf1rCerGWo54Kk6NPCYnk-XPnLuUKzKnOsfViXF9hbXaO0n5wvQG7K7XBOXnm9y-6E_JBPS1ZrvLf3qTTenQVBl8pZijuj097fBqO5ZRJARaOv6EJv591mC0emckgnH7BHxlczDlF0bQQMDm2gidxgK-eb3Dkekgg1CaReTnYIeZ_J-C_JqutqDr11MWTLEw",
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Soultware",
      url: soultwareLinks.home,
      description: soultwareValueProp,
    },
    {
      "@type": "CreativeWork",
      name: "The Artisanal Editorial",
      url: soultwareLinks.home,
      description: soultwareDemoDescription,
      creator: {
        "@type": "Organization",
        name: "Soultware",
        url: soultwareLinks.home,
      },
      about: [
        "coffee shop website demo",
        "hospitality website design",
        "restaurant website development",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${manrope.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-on-surface font-body">
        <Script
          id="soultware-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <SiteNavbar />
        {children}
      </body>
    </html>
  );
}
