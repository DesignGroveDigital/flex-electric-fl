import React from 'react';
import { Shield, PhoneCall, Award } from 'lucide-react';

const FeaturesStrip = () => {
  const features = [
    {
      icon: Shield,
      text: "Licensed & Insured"
    },
    {
      icon: PhoneCall,
      text: "Free Estimates Offered"
    },
    {
      icon: Award,
      text: "Quality Guaranteed"
    }
  ];

  return (
    <section className="w-full bg-dark relative overflow-hidden py-3 md:py-4">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col sm:flex-row sm:justify-between md:justify-center md:gap-12 lg:gap-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center justify-center py-2 sm:py-3 group"
            >
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-accent/20 transform rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  <div className="relative p-2">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <span className="text-white font-edgar uppercase tracking-wide text-sm md:text-base">
                  {feature.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Border */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Bottom Border */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default FeaturesStrip;