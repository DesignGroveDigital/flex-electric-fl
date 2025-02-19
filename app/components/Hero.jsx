import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="w-full min-h-[81vh] flex items-center relative pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_image.jpg"
          alt="Electrical work background"
          fill
          className="object-cover scale-[1.02] animate-subtle-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/95 via-dark/90 to-dark/85" />
      </div>

      {/* Diagonal Decorative Elements */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute -right-40 top-20 w-96 h-96 bg-accent/20 transform rotate-12" />
        <div className="absolute -left-40 bottom-20 w-96 h-96 bg-primary/20 transform -rotate-12" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Heading Group */}
          <div className="space-y-8 mb-12">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-xoireqe leading-tight uppercase">
                Pow<span className="text-accent">e</span>ring
              </h1>
              <h2 className="text-4xl md:text-6xl font-edgar leading-tight uppercase tracking-wider">
                Your Future
              </h2>
            </div>
            
            <div className="flex items-center justify-center gap-6">
              <div className="h-[3px] w-16 bg-accent transform -rotate-45" />
              <div className="h-[3px] w-16 bg-primary transform rotate-45" />
            </div>
            
            <div className="space-y-4 font-edgar uppercase tracking-wider">
              <p className="text-xl text-white/90">Licensed Electrical Contractors</p>
              <p className="text-xl text-accent">Serving South Florida</p>
            </div>
          </div>

          {/* CTA Group */}
          <div className="space-y-6">
            <Link 
              href="/contact"
              className="group inline-flex items-center bg-accent text-white px-10 py-5
                       uppercase font-edgar tracking-wider hover:bg-accent/90 
                       transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule Service
              <div className="ml-4 w-8 h-[2px] bg-white transform transition-all duration-300
                            group-hover:w-12 group-hover:translate-x-1" />
            </Link>
            
            <p className="text-white/80 font-edgar uppercase tracking-wider text-sm">
              24/7 Emergency Service Available
            </p>
          </div>
        </div>
      </div>

      {/* Additional Overlay Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent z-[2]" />
    </section>
  );
};

export default HeroSection;