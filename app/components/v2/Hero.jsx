import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="w-full min-h-[81vh] flex items-center relative pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_image.jpg"
          alt="Electrical work background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className='absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40' />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-24">
        <div className=" mx-auto text-center text-white">
          {/* Main Heading */}
          <h1 className="text-2xl md:text-4xl font-edgar uppercase tracking-wide mb-12 leading-tight">
            Expert Electrical Contractors Serving Residential and Commercial Clients
          </h1>

          {/* Main Content */}
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
            Flex Electric, Inc. is a family-owned and operated electrical company, 
            fully licensed and insured, with over 30 years of combined knowledge 
            and experience providing full electrical service in all areas of the 
            electrical industry whether it be residential or commercial.
          </p>

          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto mt-6">
            Our professionally trained team is reliable, courteous, and trustworthy. 
            We take pride in the quality of our work by ensuring that all work is 
            completed to your satisfaction in a convenient and timely way. Our priority 
            is to provide you with the highest quality of work affordable to your budget.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;