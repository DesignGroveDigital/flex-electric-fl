import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="w-full bg-gray-100 py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 transform rotate-45 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 transform -rotate-45 bg-gradient-to-tl from-accent/5 to-transparent" />
      </div>

      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative h-[600px] w-full">
            <div className="absolute inset-0 bg-dark/5 transform -rotate-2" />
            <div className="absolute inset-0 transform overflow-hidden">
              <Image
                src="/team.jpg"
                alt="Flex Electric team at work"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-dark font-xoireqe text-5xl uppercase mb-8">
                About Us
              </h2>
              <div className="flex gap-6 mb-8">
                <div className="h-[3px] w-16 bg-accent transform -rotate-45" />
                <div className="h-[3px] w-16 bg-primary transform rotate-45" />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-dark/80 text-lg leading-relaxed">
                Flex Electric, Inc. is a family-owned and operated electrical company, 
                fully licensed and insured, with over 30 years of combined knowledge 
                and experience providing full electrical service in all areas of the 
                electrical industry whether it be residential or commercial.
              </p>

              {/* Feature Points */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                  <div className="text-4xl font-edgar text-primary">30+</div>
                  <div className="text-dark/60 text-sm uppercase tracking-wider">Years Combined Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-edgar text-accent">100%</div>
                  <div className="text-dark/60 text-sm uppercase tracking-wider">Family Owned & Operated</div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-6">
              <div className="px-4 py-2 bg-primary/5 text-primary text-sm uppercase tracking-wider font-edgar">
                Licensed
              </div>
              <div className="px-4 py-2 bg-primary/5 text-primary text-sm uppercase tracking-wider font-edgar">
                Insured
              </div>
              <div className="px-4 py-2 bg-accent/5 text-accent text-sm uppercase tracking-wider font-edgar">
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