import React from 'react';
import Image from 'next/image';

const PageBannerAngled = ({ title, subtitle, backgroundImage = '/banner-bg.jpg' }) => {
  return (
    <section className="w-full bg-dark relative overflow-hidden">
      {/* Background Container with Angle */}
      <div className="h-[350px] md:h-[420px] relative">

        {/*Background image */}
        <Image
          src="/pexels-pixabay-236089.jpg"
          alt="Background Image"
          fill
          className="object-cover scale-[1.05] grayscale"
          priority
        />
                
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2b2b2b] to-[#2b2b2b]/90" />
        
        {/* Bottom Angle - Creates the slanted bottom edge */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white transform -skew-y-3 origin-left translate-y-12" />
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
      

    </section>
  );
};

export default PageBannerAngled;