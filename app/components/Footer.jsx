import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ChevronRight, Clock, Globe } from 'lucide-react';

const links = {
  main: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ],
  services: [
    { href: '/services/residential', label: 'Residential Services' },
    { href: '/services/commercial', label: 'Commercial Services' },
    { href: '/services/emergency', label: 'Emergency Services' },
    { href: '/services/maintenance', label: 'Maintenance' },
  ]
};

const FooterDark = () => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Logo & Info */}
            <div className="lg:col-span-2 space-y-6">
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
                Licensed, insured, and available 24/7 for emergencies.
              </p>
              
              {/* Hours of Operation */}
              <div className="pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-edgar text-white uppercase tracking-wider">Hours of Operation</h3>
                </div>
                <div className="space-y-2 text-white/70">
                  <p>Monday to Friday: 8:00 AM – 5:00 PM</p>
                  <p>Saturday to Sunday: Closed</p>
                  <p className="text-primary italic mt-4">
                    *Call us to discuss an appointment or consultation. We provide weekend emergency services.*
                  </p>
                </div>
              </div>

              {/* Service Areas */}
              <div className="pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-5 h-5 text-primary" />
                  <h3 className="font-edgar text-white uppercase tracking-wider">Service Areas</h3>
                </div>
                <p className="text-white/70">
                  Palm Beach, Broward, Brevard, and Saint Lucie Counties
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-edgar text-white uppercase tracking-wider mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {links.main.map((link) => (
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

            {/* Services */}
            <div>
              <h3 className="font-edgar text-white uppercase tracking-wider mb-6">Our Services</h3>
              <ul className="space-y-4">
                {links.services.map((service) => (
                  <li key={service.href}>
                    <Link 
                      href={service.href}
                      className="text-white/70 hover:text-primary transition-colors duration-200 flex items-center gap-2"
                    >
                      <ChevronRight className="w-4 h-4" />
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
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

export default FooterDark;