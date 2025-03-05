import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ChevronRight, Clock, Globe, Award } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

const Footer = () => {
  return (
    <footer className="bg-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 transform rotate-45" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 transform -rotate-45" />
      </div>

      <div className="relative">
        {/* Main Footer */}
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Logo & Info */}
            <div className="space-y-6">
              <Link href="/" className="block">
                <div className="relative h-16 w-48">
                  <Image
                    src="/flexelectric_logo.jpg"
                    alt="FlexElectric Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <p className="text-white/70">
                Professional electrical services for residential and commercial needs. 
                Licensed, and insured.
              </p>
              
              {/* License Info */}
              <div className="pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-5 h-5 text-primary" />
                  <h3 className="font-edgar text-white uppercase tracking-wider">License Information</h3>
                </div>
                <div className="space-y-2 text-white/70">
                  <p>License: EC13008376</p>
                  <p>Member of the IEC</p>
                </div>
              </div>

              {/* Service Areas */}
              <div className="pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-5 h-5 text-primary" />
                  <h3 className="font-edgar text-white uppercase tracking-wider">Service Areas</h3>
                </div>
                <p className="text-white/70">
                  Brevard, Indian River, Saint Lucie, Martin, Palm Beach, and Broward Counties
                </p>
              </div>
            </div>

            {/* Hours & Links */}
            <div className="space-y-8">
              {/* Hours of Operation */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-edgar text-white uppercase tracking-wider">Hours of Operation</h3>
                </div>
                <div className="space-y-2 text-white/70">
                  <p>Monday to Friday: 8:00 AM – 5:00 PM</p>
                  <p>Saturday to Sunday: Closed</p>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-edgar text-white uppercase tracking-wider mb-4">Quick Links</h3>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href}
                        className="text-white/70 hover:text-primary transition-colors duration-200 flex items-center gap-2"
                      >
                        <ChevronRight className="w-4 h-4" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-edgar text-white uppercase tracking-wider mb-6">Contact Info</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white/70">
                    <MapPin className="w-5 h-5 mt-1 text-primary" />
                    <span>
                      43 South Powerline Rd, #431<br />
                      Pompano Beach, FL 33069
                    </span>
                  </li>
                  <li>
                    <a 
                      href="tel:+19548689893" 
                      className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors duration-200"
                    >
                      <Phone className="w-5 h-5 text-primary" />
                      (954) 868-9893
                    </a>
                  </li>
                  <li>
                    <a 
                      href="mailto:flexelectric.fl@gmail.com"
                      className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors duration-200"
                    >
                      <Mail className="w-5 h-5 text-primary" />
                      flexelectric.fl@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* Schema.org Structured Data for SEO */}
              <script 
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ElectricalContractor",
                    "name": "Flex Electric, Inc.",
                    "url": "https://flexelectric.com",
                    "logo": "https://flexelectric.com/flexelectric_logo.jpg",
                    "image": "https://flexelectric.com/hero_image.jpg",
                    "description": "Professional electrical services for residential and commercial needs in South Florida.",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "43 South Powerline Rd, #431",
                      "addressLocality": "Pompano Beach",
                      "addressRegion": "FL",
                      "postalCode": "33069",
                      "addressCountry": "US"
                    },
                    "geo": {
                      "@type": "GeoCoordinates",
                      "latitude": 26.229398,
                      "longitude": -80.160755
                    },
                    "telephone": "+19548689893",
                    "email": "flexelectric.fl@gmail.com",
                    "openingHoursSpecification": [
                      {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        "opens": "08:00",
                        "closes": "17:00"
                      }
                    ],
                    "serviceArea": {
                      "@type": "GeoCircle",
                      "geoMidpoint": {
                        "@type": "GeoCoordinates",
                        "latitude": 26.229398,
                        "longitude": -80.160755
                      },
                      "geoRadius": "80000"
                    },
                    "areaServed": ["Palm Beach County", "Broward County", "Brevard County", "Saint Lucie County"],
                    "priceRange": "$$",
                    "sameAs": [
                      "https://www.facebook.com/flexelectric",
                      "https://www.linkedin.com/company/flex-electric-inc"
                    ]
                  })
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Flex Electric, Inc. All rights reserved.
              </p>
              <p className="text-white/60 text-sm">
                Website by{' '}
                <a 
                  href="https://designgrovedigital.com"
                  className="text-white/80 hover:text-primary transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Design Grove Digital
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;