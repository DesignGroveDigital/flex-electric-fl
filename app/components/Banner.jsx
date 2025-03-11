import React from 'react';
import Image from 'next/image';

const PageBannerAngled = ({ title, subtitle, backgroundImage = '/banner-bg.jpg' }) => {
  return (
    <section className="w-full bg-dark relative overflow-hidden pt-24">
      {/* Background Container with Angle */}
      <div className="h-[350px] md:h-[420px] relative">
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/70" />
        
        {/* Bottom Angle - Creates the slanted bottom edge */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-white transform -skew-y-3 origin-left translate-y-12" />
      </div>

      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center pt-8">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-xoireqe text-white uppercase mb-4">
              {title}
            </h1>
            <div className="h-1 w-24 bg-accent mb-4"></div>
            {subtitle && (
              <p className="text-lg md:text-xl text-white/80">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
      
      {/* Accent Lightning Bolt Shape */}
      <div className="absolute right-0 bottom-8 md:bottom-12 w-32 md:w-48 h-32 md:h-48 bg-primary/10 
                    skew-x-12 -skew-y-12 transform rotate-12 hidden md:block" />
    </section>
  );
};

export default PageBannerAngled;