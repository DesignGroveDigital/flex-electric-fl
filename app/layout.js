import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Nav";
import FooterDark from "./components/Footer";
import Script from "next/script";
import ScrollPaddingFix from "./ScrollPaddingFix";

const xoireqe = localFont({
  src: '../fonts/Xoireqe.ttf',
  variable: '--font-xoireqe',
});

const optiEdgar = localFont({
  src: '../fonts/OPTIEdgarBold-Extended.otf',
  variable: '--font-opti-edgar',
});

export const metadata = {
  title: "FlexElectric - Commercial & Industrial Electrical Contractors",
  description: "Leading electrical contractor with offices in Florida and New York providing professional electrical services nationwide. Specialists in commercial and industrial electrical systems.",
  keywords: "electrical contractors, nationwide electrical services, commercial electrical, industrial electrical, fiber optic cabling, EV charging stations, data centers, hospital electrical, institutional electrical, emergency electrical services",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.flexelectricfl.com",
  },
  authors: [{ name: "Flex Electric, Inc." }],
  generator: "Next.js",
  applicationName: "Flex Electric",
  referrer: "origin-when-cross-origin",
  creator: "Flex Electric, Inc.",
  publisher: "Flex Electric, Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://flexelectricfl.com'),
  openGraph: {
    title: "FlexElectric - National Commercial & Industrial Electrical Contractors",
    description: "Professional commercial and industrial electrical services nationwide. Offices in Florida and New York with expertise in institutional projects, data systems, and EV charging infrastructure.",
    url: "https://flexelectricfl.com",
    siteName: "Flex Electric, Inc.",
    images: [
      {
        url: "https://flexelectricfl.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Flex Electric - Professional Electrical Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlexElectric - National Commercial & Industrial Electrical Contractors",
    description: "Professional commercial and industrial electrical services nationwide with offices in Florida and New York.",
    images: ["https://flexelectricfl.com/og-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    // Add your verification codes when available
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    bing: "bing-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${xoireqe.variable} ${optiEdgar.variable} antialiased`}
      >
        <Script
          id="schema-markup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ElectricalContractor",
              "name": "Flex Electric, Inc.",
              "image": "https://flexelectricfl.com/logo.jpg",
              "url": "https://flexelectricfl.com",
              "telephone": ["+19548689893", "+15074488868"],
              "email": "info@flexelectricfl.com",
              "description": "National provider for design, installation and maintenance of electrical systems, structured cabling applications, fiber optic cables, integrated electronic structures and building solutions for commercial and industrial clients.",
              "location": [
                {
                  "@type": "Place",
                  "name": "Florida Headquarters",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "1860 SW Fountainview Blvd, #1008",
                    "addressLocality": "Port St. Lucie",
                    "addressRegion": "FL",
                    "postalCode": "34986",
                    "addressCountry": "US"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 27.650193982806277,
                    "longitude": -80.39983978491936
                  },
                  "telephone": "+19548689893"
                },
                {
                  "@type": "Place",
                  "name": "New York Office",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "767 Broadway #1413",
                    "addressLocality": "Manhattan",
                    "addressRegion": "NY",
                    "postalCode": "10003",
                    "addressCountry": "US"
                  },
                  "telephone": "+15074488868"
                }
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "14:00"
                }
              ],
              "priceRange": "$$",
              "areaServed": "United States",
              "serviceType": [
                "Commercial Electrical Services",
                "Industrial Electrical Systems",
                "Institutional & Government Electrical",
                "Healthcare Facility Electrical",
                "Data Center & IT Infrastructure",
                "EV Charging Station Installation",
                "Fiber Optic Cabling Systems",
                "Emergency Electrical Services"
              ],
              "sameAs": [
                "https://www.facebook.com/flexelectric",
                "https://www.instagram.com/flexelectric"
              ]
            })
          }}
        />
        
        <Navbar />
        <ScrollPaddingFix />
        <main>{children}</main>
        <FooterDark />
      </body>
    </html>
  );
}