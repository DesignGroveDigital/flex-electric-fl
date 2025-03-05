import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="w-full min-h-[81vh] flex items-center relative md:pt-20 pt-4 overflow-hidden">
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

      {/* Content */}
      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="w-full max-w-4xl mx-auto text-center text-white">
          {/* Heading Group */}
          <div className="space-y-6 mb-8 md:mb-12">
            <div className="space-y-2 mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-xoireqe leading-tight uppercase">
                Pow<span className="text-accent">e</span>ring
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-edgar leading-tight uppercase tracking-wider">
                Your Future
              </h2>
            </div>
            
            <div className="space-y-3 font-edgar uppercase tracking-wide">
              <p className="text-lg sm:text-xl text-white/90">Licensed Electrical Contractors</p>
              <p className="text-lg sm:text-xl text-accent">Serving South Florida</p>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="space-y-4 md:space-y-6 w-full max-w-3xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed px-2">
              Flex Electric, Inc. provides comprehensive electrical services for residential and commercial properties throughout South Florida.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed px-2">
              With over 30 years of combined experience, our licensed professionals deliver reliable, code-compliant solutions tailored to your needs. Experience the peace of mind that comes with South Florida's trusted electrical contractor.
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