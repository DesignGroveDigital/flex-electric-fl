import React from 'react';
import { Shield, Clock, PhoneCall, Award } from 'lucide-react';

const FeaturesStrip = () => {
  const features = [
    {
      icon: Shield,
      text: "Licensed & Insured"
    },
    {
      icon: Clock,
      text: "24/7 Emergency Service"
    },
    {
      icon: PhoneCall,
      text: "Free Consultation"
    },
    {
      icon: Award,
      text: "100% Satisfaction Guaranteed"
    }
  ];

  return (
    <section className="w-full bg-dark h-[13vh] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 h-full relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 h-full items-center">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center justify-center md:justify-start group"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/20 transform rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  <div className="relative p-3">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <span className="text-white font-edgar uppercase tracking-wider text-base md:text-lg">
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