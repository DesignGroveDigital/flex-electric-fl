"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Instagram, Facebook, Youtube } from 'lucide-react';
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
    <nav className="w-full bg-white fixed top-0 z-50">
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-dark/10 to-transparent" />
      
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 xl:px-8">
        <div className="flex items-center h-20 xl:h-24">
          {/* Left Section - Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center">
              <div className="relative h-20 w-48 sm:h-20 sm:w-44 xl:h-24 xl:w-48">
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

          {/* Center Section - Navigation */}
          <div className="hidden xl:flex flex-1 justify-center">
            <div className="flex items-center">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="group relative px-3 2xl:px-4 py-8 font-edgar text-xs text-dark hover:text-primary 
                           transition-colors duration-200 uppercase tracking-wider whitespace-nowrap"
                >
                  {label}
                  <div className="absolute bottom-0 left-1/2 w-6 h-1 bg-primary transform -translate-x-1/2 scale-x-0 
                                group-hover:scale-x-100 transition-transform origin-center" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section - Social + Phone */}
          <div className="flex-1 flex justify-end items-center">
            {/* Social Media Links */}
            <div className="hidden xl:flex items-center gap-4 mr-6">
              <a
                href="https://instagram.com/flexelectricfl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-primary/10 rounded-lg flex items-center justify-center text-dark/60 hover:text-primary transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              
              <a
                href="https://facebook.com/FlexElectricFL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-primary/10 rounded-lg flex items-center justify-center text-dark/60 hover:text-primary transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              
              <a
                href="https://youtube.com/@flexelectricfl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-100 hover:bg-primary/10 rounded-lg flex items-center justify-center text-dark/60 hover:text-primary transition-colors duration-200"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* Phone Button */}
            <div className="hidden xl:flex flex-shrink-0 skew-x-[-20deg]">
              <a
                href="tel:+19548689893"
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 2xl:px-7 py-3
                         font-bold uppercase tracking-wider text-md whitespace-nowrap transition-colors"
              >
                <Phone className="w-4 h-4 skew-x-[20deg]" />
                <span className='skew-x-[20deg]'>(954) 868-9893</span>
              </a>
            </div>
          </div>

          {/* Mobile/Tablet Menu Button - Changed from lg: to xl: */}
          <div className="xl:hidden ml-auto">
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

      {/* Mobile/Tablet Navigation - Changed from lg: to xl: */}
      <div
        className={`
          xl:hidden fixed inset-0 top-20 bg-dark/95 transform transition-transform 
          duration-300 ease-in-out backdrop-blur-sm ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="h-full overflow-y-auto">
          <div className="min-h-full p-6 max-w-md mx-auto flex flex-col justify-center">
            {/* Main Navigation Links - Compact */}
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
            
            {/* Phone Button - Compact */}
            <div className="py-4 border-t border-white/10">
              <a
                href="tel:+19548689893"
                className="flex items-center justify-center gap-3 text-primary py-3 text-lg 
                         font-edgar uppercase tracking-wider bg-white/5 rounded-lg"
              >
                <Phone className="w-5 h-5" />
                (954) 868-9893
              </a>
            </div>
            
            {/* Social Media Links - Compact */}
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
              </div>
            </div>
            
            {/* Spacer to ensure content can be scrolled past navbar */}
            <div className="py-4"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;