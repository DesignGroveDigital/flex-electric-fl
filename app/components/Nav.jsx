"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import { PiTiktokLogoBold } from "react-icons/pi";
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/partners', label: 'Partners' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div className="fixed top-0 w-full z-50 bg-white">
      {/* Top Utility Bar */}
      <div className="hidden xl:block bg-accent border-b border-gray-200">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 xl:px-8">
          <div className="flex justify-between items-center py-1">
            {/* Left - Contact Info */}
            <div className="flex items-center gap-6 text-sm">
              <a 
                href="mailto:info@flexelectricfl.com"
                className="flex items-center gap-2 font-sans font-semibold text-white hover:text-white/70 transition-colors"
              >
                <Mail className="w-5 h-5" />
                info@flexelectricfl.com
              </a>
              <a 
                href="tel:+19548689893"
                className="flex items-center gap-2 font-sans font-semibold text-white hover:text-white/70 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (954) 868-9893
              </a>
            </div>

            {/* Right - Social Media */}
            <div className="flex items-center gap-3">
              <p>
                <span className="text-white font-sans font-semibold uppercase tracking-wider text-xs">Follow Us: </span>
              </p>
              <a
                href="https://instagram.com/flexelectricfl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-transparent rounded-full flex items-center justify-center text-white hover:text-white/70 transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              
              <a
                href="https://facebook.com/FlexElectricFL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-transparent rounded-md flex items-center justify-center text-white hover:text-white/70 transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              
              <a
                href="https://youtube.com/@flexelectricfl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-transparent rounded-md flex items-center justify-center text-white hover:text-white/70 transition-colors duration-200"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="w-5 h-5" />
              </a>

              <a
                href="https://tiktok.com/@flexelectricfl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-transparent rounded-md flex items-center justify-center text-white hover:text-white/70 transition-colors duration-200"
                aria-label="Follow us on TikTok"
              >
                <PiTiktokLogoBold className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="w-full bg-white border-b border-gray-100">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 xl:px-8">
          <div className="flex items-center justify-between h-20 xl:h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="relative h-16 w-40 xl:h-20 xl:w-48">
                  <Image
                    src="/FE_logo_color_wide_outline.svg"
                    alt="FlexElectric Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-8">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="group relative py-2 font-edgar text-sm text-dark hover:text-primary 
                           transition-colors duration-200 uppercase tracking-wider whitespace-nowrap"
                >
                  {label}
                  <div className="absolute bottom-0 left-1/2 w-6 h-0.5 bg-primary transform -translate-x-1/2 scale-x-0 
                                group-hover:scale-x-100 transition-transform origin-center" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden xl:block">
              <Link 
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-edgar uppercase tracking-wider text-sm transition-colors duration-300"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden">
              <button
                className="text-dark hover:text-primary transition-colors p-2"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`
          xl:hidden fixed inset-0 top-20 bg-dark/95 transform transition-transform 
          duration-300 ease-in-out backdrop-blur-sm ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="h-full overflow-y-auto">
          <div className="min-h-full p-6 max-w-md mx-auto flex flex-col justify-center">
            {/* Main Navigation Links */}
            <div className="space-y-2 py-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-white/90 hover:text-primary py-3 text-lg font-edgar 
                           uppercase tracking-wider transition-colors duration-200
                           border-b border-white/10 hover:border-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
            
            {/* Mobile CTA */}
            <div className="py-4 border-t border-white/10">
              <Link
                href="/contact"
                className="block text-center bg-primary hover:bg-primary/90 text-white py-3 text-lg 
                         font-edgar uppercase tracking-wider rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="py-4 border-t border-white/10 space-y-2">
              <a
                href="tel:+19548689893"
                className="flex items-center justify-center gap-3 text-white/80 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                (954) 868-9893
              </a>
              <a
                href="mailto:info@flexelectricfl.com"
                className="flex items-center justify-center gap-3 text-white/80 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                info@flexelectricfl.com
              </a>
            </div>
            
            {/* Social Media Links */}
            <div className="py-4 border-t border-white/10">
              <p className="text-white/60 text-sm mb-3 font-edgar uppercase tracking-wider text-center">Follow Us</p>
              <div className="flex items-center justify-center gap-6">
                <a
                  href="https://instagram.com/flexelectricfl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 text-white/70 hover:text-primary transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-6 h-6" />
                  <span className="text-xs">Instagram</span>
                </a>
                
                <a
                  href="https://facebook.com/FlexElectricFL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 text-white/70 hover:text-primary transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-6 h-6" />
                  <span className="text-xs">Facebook</span>
                </a>
                
                <a
                  href="https://youtube.com/@flexelectricfl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 text-white/70 hover:text-primary transition-colors"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <Youtube className="w-6 h-6" />
                  <span className="text-xs">YouTube</span>
                </a>

                <a
                  href="https://tiktok.com/@flexelectricfl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-1 text-white/70 hover:text-primary transition-colors"
                  aria-label="Follow us on TikTok"
                >
                  <PiTiktokLogoBold className="w-6 h-6" />
                  <span className="text-xs">TikTok</span>
                </a>
              </div>
            </div>
            
            {/* Spacer */}
            <div className="py-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;