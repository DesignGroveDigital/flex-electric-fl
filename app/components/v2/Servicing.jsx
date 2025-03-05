import React from 'react';
import Image from 'next/image';
import FloridaMap from './FloridaMap';

const ServiceAreaSection = () => {
  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 transform -rotate-45 bg-gradient-to-tl from-primary/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 transform rotate-45 bg-gradient-to-br from-accent/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-dark font-xoireqe text-4xl uppercase mb-6">
                Serving South Florida
              </h2>
              <div className="h-1 w-24 bg-primary"></div>
            </div>

            <div className="space-y-6">
              <p className="text-dark/80 text-lg leading-relaxed">
                Flex Electric, Inc. is a trusted local electrical contractor with over 30 years 
                of combined experience. Our commitment to quality and professionalism has made 
                us the contractor of choice throughout South Florida.
              </p>

              <div className="border-l-4 border-primary pl-6 space-y-2">
                <div className="text-lg font-edgar uppercase tracking-wider">Service Areas:</div>
                <ul className="space-y-2 text-dark/80">
                  <li>Brevard County</li>
                  <li>Indian River County</li>
                  <li>Saint Lucie County</li>
                  <li>Martin County</li>
                  <li>Palm Beach County</li>
                  <li>Broward County</li>
                </ul>
              </div>

              <p className="text-dark/80 text-lg leading-relaxed">
                From residential updates to complex commercial installations, our team 
                of licensed electricians brings expertise and dedication to every project. 
                We're proud to serve our community with reliable, high-quality electrical 
                services.
              </p>

              <div className="font-edgar uppercase tracking-wider text-accent">
                Free Estimates Available
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-full max-w-md mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '55%' }}>
                <FloridaMap />
                <Image
                  src="/usa-fl.svg"
                  alt="Florida service area map"
                  fill
                  className="object-contain rotate-3 map hidden"
                  style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaSection;