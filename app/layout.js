import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Nav";
import FooterDark from "./components/Footer";
import Script from "next/script";

const xoireqe = localFont({
  src: '../fonts/Xoireqe.ttf',
  variable: '--font-xoireqe',
});

const optiEdgar = localFont({
  src: '../fonts/OPTIEdgarBold-Extended.otf',
  variable: '--font-opti-edgar',
});

export const metadata = {
  title: "FlexElectric - Licensed Electrical Contractors South Florida | Commercial & Residential",
  description: "Trusted electrical contractors serving South Florida with 30+ years of experience. Specializing in commercial and residential electrical services, panel upgrades, and installations.",
  keywords: "electrical contractors, South Florida electrician, commercial electrical, residential electrical, Port St. Lucie, electrical services, licensed electrician, electrical panel upgrades",
  robots: "index, follow",
  alternates: {
    canonical: "https://flexelectricfl.com",
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
    title: "FlexElectric - Licensed Electrical Contractors | South Florida",
    description: "Professional electrical services for residential and commercial properties with 30+ years of experience. Serving Brevard, Indian River, St. Lucie, Martin, Palm Beach, and Broward counties.",
    url: "https://flexelectricfl.com",
    siteName: "Flex Electric, Inc.",
    images: [
      {
        url: "https://flexelectricfl.com/og-image.jpg", // Be sure to create this image
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
    title: "FlexElectric - Licensed Electrical Contractors | South Florida",
    description: "Professional electrical services for residential and commercial properties throughout South Florida.",
    images: ["https://flexelectricfl.com/og-image.jpg"], // Same as OG image
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
              "telephone": "+19548689893",
              "email": "info@flexelectricfl.com",
              "description": "Licensed electrical contractors serving South Florida with over 30 years of combined experience in residential and commercial electrical services.",
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
              "areaServed": [
                "Brevard County",
                "Indian River County",
                "St. Lucie County",
                "Martin County",
                "Palm Beach County",
                "Broward County"
              ],
              "serviceType": [
                "Commercial Electrical Services",
                "Residential Electrical Services",
                "Electrical Panel Upgrades",
                "Lighting Installation",
                "Emergency Electrical Services"
              ],
              "sameAs": [
                "https://www.facebook.com/flexelectric", // Replace with actual links
                "https://www.instagram.com/flexelectric"
              ]
            })
          }}
        />
        
        {/* Google Tag Manager - Add when you have a GTM account */}
        {/* <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');`
          }}
        /> */}
        
        <Navbar />
        <main>{children}</main>
        <FooterDark />
      </body>
    </html>
  );
}