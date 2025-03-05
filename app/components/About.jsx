import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="w-full bg-gray-100 py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 transform rotate-45 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 transform -rotate-45 bg-gradient-to-tl from-accent/5 to-transparent" />
      </div>

      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Column */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[600px] w-full">
            <div className="absolute inset-0 bg-dark/5 transform -rotate-2" />
            <div className="absolute inset-0 transform overflow-hidden">
              <Image
                src="/about.png"
                alt="Flex Electric team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-dark font-xoireqe text-3xl sm:text-4xl md:text-5xl uppercase mb-6">
                About Us
              </h2>
              <div className="h-1 w-24 bg-primary mb-6"></div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <p className="text-dark/80 text-base sm:text-lg leading-relaxed">
                Flex Electric, Inc. is a family-owned and operated electrical company, 
                fully licensed and insured, with over 30 years of combined knowledge 
                and experience providing full electrical service in all areas of the 
                electrical industry whether it be residential or commercial.
              </p>

              {/* Feature Points */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 md:pt-6">
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-3xl sm:text-4xl font-edgar text-primary">30+</div>
                  <div className="text-dark/60 text-xs sm:text-sm uppercase tracking-wider">Years Combined Experience</div>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-3xl sm:text-4xl font-edgar text-accent">100%</div>
                  <div className="text-dark/60 text-xs sm:text-sm uppercase tracking-wider">Family Owned & Operated</div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-3 sm:gap-6 pt-4 md:pt-6">
              <div className="px-3 sm:px-4 py-2 bg-primary/5 text-primary text-xs sm:text-sm uppercase tracking-wider font-edgar">
                Licensed
              </div>
              <div className="px-3 sm:px-4 py-2 bg-primary/5 text-primary text-xs sm:text-sm uppercase tracking-wider font-edgar">
                Insured
              </div>
              <div className="px-3 sm:px-4 py-2 bg-accent/5 text-accent text-xs sm:text-sm uppercase tracking-wider font-edgar">
                Professional
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;