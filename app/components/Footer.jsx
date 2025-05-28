'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ChevronRight, Clock, Globe, Award, ArrowRight, Instagram, Facebook, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] relative overflow-hidden">
      {/* Angled top border */}
      <div className="relative h-12 bg-[#2b2b2b]">
        <svg className="absolute -top-1 left-0 w-full" viewBox="0 0 1200 30" preserveAspectRatio="none">
          <path d="M0,30 L1200,0 L1200,30 L0,30 Z" fill="#2b2b2b"></path>
        </svg>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {/* Company Information */}
            <div className="space-y-6">
              <h3 className="text-white font-edgar text-xl uppercase relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-12 after:bg-accent">
                About Flex Electric
              </h3>
              <p className="text-white/70 leading-relaxed">
                Professional electrical services for commercial and industrial needs. 
                Licensed, and insured. Serving clients nationwide with the highest standards 
                of quality and reliability.
              </p>
              
              {/* License Info */}
              <div className="pt-2">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-5 h-5 text-primary" />
                  <h4 className="font-edgar text-white uppercase tracking-wider text-sm">License Information</h4>
                </div>
                <div className="space-y-2 text-white/70 pl-8">
                  <p>License: EC13008376</p>
                  <p>Member of the IEC</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-4">
                <h4 className="font-edgar text-white uppercase tracking-wider text-sm mb-4">Follow Us</h4>
                <div className="flex items-center gap-4">
                  <motion.a
                    href="https://instagram.com/flexelectricfl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-accent/80 rounded-lg flex items-center justify-center text-white/70 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                  
                  <motion.a
                    href="https://facebook.com/FlexElectricFL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-accent/80 rounded-lg flex items-center justify-center text-white/70 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </motion.a>
                  
                  <motion.a
                    href="https://youtube.com/@flexelectricfl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-accent/80 rounded-lg flex items-center justify-center text-white/70 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Subscribe to our YouTube channel"
                  >
                    <Youtube className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Hours & Service Areas */}
            <div className="space-y-8">
              {/* Hours of Operation */}
              <div>
                <h3 className="text-white font-edgar text-xl uppercase relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-12 after:bg-accent mb-6">
                  Business Hours
                </h3>
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <h4 className="font-edgar text-white uppercase tracking-wider text-sm">Office Hours</h4>
                </div>
                <div className="space-y-2 text-white/70 pl-8">
                  <p>Monday to Friday: 8:00 AM – 5:00 PM</p>
                  <p>Saturday to Sunday: Closed</p>
                </div>
              </div>

              {/* Service Areas */}
              <div className="pt-2">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <h4 className="font-edgar text-white uppercase tracking-wider text-sm">Service Areas</h4>
                </div>
                <p className="text-white/70 pl-8">
                  Proudly serving clients nationwide with offices in Florida and New York.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-edgar text-xl uppercase relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-12 after:bg-accent mb-6">
                Contact Us
              </h3>
              
              {/* Florida Office */}
              <div className="mb-6">
                <div className="font-edgar text-white/80 text-sm uppercase tracking-wider mb-2">Florida Office</div>
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-5 h-5 mt-1 text-primary" />
                  <span>
                    1860 SW Fountainview Blvd, #1008<br />
                    Port St. Lucie, FL 34986
                  </span>
                </div>
                <div className="mt-2 pl-8">
                  <a 
                    href="tel:+19548689893" 
                    className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors duration-200"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    (954) 868-9893
                  </a>
                </div>
              </div>
              
              {/* New York Office */}
              <div>
                <div className="font-edgar text-white/80 text-sm uppercase tracking-wider mb-2">New York Office</div>
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="w-5 h-5 mt-1 text-primary" />
                  <span>
                    767 Broadway #1413<br />
                    Manhattan, NY 10003
                  </span>
                </div>
                <div className="mt-2 pl-8">
                  <a 
                    href="tel:+15074488868" 
                    className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors duration-200"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    (507) 448-8868
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links & Email */}
            <div>
              <h3 className="text-white font-edgar text-xl uppercase relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-12 after:bg-accent mb-6">
                Quick Links
              </h3>
              
              <ul className="space-y-3 mb-8">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-white/70 hover:text-accent transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Fax & Email */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-white/70 mb-3">
                  <span className="text-white/80 font-edgar uppercase tracking-wider text-sm">Fax:</span>
                  (954) 820-6767
                </div>
                <a 
                  href="mailto:info@flexelectricfl.com"
                  className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors duration-200 group"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  info@flexelectricfl.com
                </a>
                
                {/* Contact Button */}
                <div className="mt-6">
                  <Link href="/contact">
                    <motion.button
                      className="inline-flex items-center bg-accent hover:bg-accent/90 text-white py-2.5 px-6 rounded-lg font-edgar text-sm uppercase tracking-wider transition-colors duration-300 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact Us Today
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Flex Electric, Inc. All rights reserved.
                <a href='/sitemap.xml' className='text-xs hover:underline border-l border-white/20 px-2 mx-2'>
                  Sitemap
                </a>
              </p>

              <p className="text-white/60 text-sm">
                Website by{' '}
                <a 
                  href="https://designgrovedigital.com"
                  className="text-accent hover:text-white transition-colors duration-200"
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