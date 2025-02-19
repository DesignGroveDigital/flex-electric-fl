import React from 'react';
import Image from 'next/image';

const WhyUsSection = () => {
  return (
    <section className="w-full bg-dark py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 transform rotate-45 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 transform -rotate-45 bg-gradient-to-tl from-accent/10 to-transparent" />
      </div>

      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-white font-xoireqe text-5xl uppercase mb-8">
                Why Choose Us?
              </h2>
              <div className="flex gap-6 mb-8">
                <div className="h-[3px] w-16 bg-accent transform -rotate-45" />
                <div className="h-[3px] w-16 bg-primary transform rotate-45" />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-white/90 text-lg leading-relaxed">
                Our professionally trained team is reliable, courteous, and trustworthy. 
                You won't have to worry about unsafe workmanship. We take pride in the 
                quality of our work by ensuring that all work is completed to your 
                satisfaction in a convenient and timely way. Our priority is to provide 
                you with the highest quality of work affordable to your budget.
              </p>

              <p className="text-accent text-xl font-edgar uppercase tracking-wide">
                You can put your mind at ease knowing we are available in cases of emergency.
              </p>

              <p className="text-white/90 text-lg leading-relaxed">
                At Flex Electric, Inc., our goal is to create a long-term relationship 
                based on trust with our clients.
              </p>

              {/* Key Points */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-center gap-3 group">
                  <div className="w-12 h-12 bg-primary/20 flex items-center justify-center transform rotate-45 group-hover:rotate-0 transition-transform duration-300">
                    <div className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-primary font-edgar">01</div>
                  </div>
                  <span className="text-white font-edgar uppercase tracking-wider">Quality First</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-12 h-12 bg-accent/20 flex items-center justify-center transform rotate-45 group-hover:rotate-0 transition-transform duration-300">
                    <div className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-accent font-edgar">02</div>
                  </div>
                  <span className="text-white font-edgar uppercase tracking-wider">Always Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative h-[600px] w-full">
            <div className="absolute inset-0 bg-white/5 transform -rotate-2" />
            <div className="absolute inset-0 transform rotate-2 overflow-hidden">
              <Image
                src="/why-us-image.jpg"
                alt="Flex Electric professional service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;