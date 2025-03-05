"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="w-full bg-white fixed top-0 z-50">
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-dark/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 lg:h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-20 w-48 sm:h-24 sm:w-56 lg:h-28 lg:w-64">
              <Image
                src="/flexelectric_logo.jpg"
                alt="FlexElectric Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Navigation Links */}
            <div className="flex items-center">
              {navLinks.map(({ href, label }, index) => (
                <Link
                  key={href}
                  href={href}
                  className="group relative px-4 xl:px-6 py-8 font-edgar text-xs text-dark/80 hover:text-primary 
                           transition-colors duration-200 uppercase tracking-wider whitespace-nowrap"
                >
                  {label}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 
                                group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              ))}
            </div>

            {/* Phone Button */}
            <a
              href="tel:+19548689893"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 xl:px-6 py-3
                       font-bold uppercase tracking-wider text-md whitespace-nowrap transition-colors"
            >
              <Phone className="w-4 h-4" />
              (954) 868-9893
            </a>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            className="lg:hidden text-dark hover:text-primary transition-colors p-2"
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

      {/* Mobile/Tablet Navigation */}
      <div
        className={`
          lg:hidden fixed inset-0 top-24 sm:top-24 bg-dark/95 transform transition-transform 
          duration-300 ease-in-out backdrop-blur-sm ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="p-8 space-y-6 max-w-md mx-auto">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block text-white/90 hover:text-primary py-4 text-xl sm:text-2xl font-edgar 
                       uppercase tracking-wider transition-colors duration-200
                       border-b border-white/10 hover:border-primary"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          
          {/* Mobile Phone Button */}
          <a
            href="tel:+19548689893"
            className="flex items-center gap-3 text-primary py-4 text-xl sm:text-2xl 
                     font-edgar uppercase tracking-wider"
          >
            <Phone className="w-6 h-6" />
            (954) 868-9893
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;