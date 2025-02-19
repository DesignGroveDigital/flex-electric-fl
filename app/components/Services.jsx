import React from 'react';
import { Building2, Home, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ServicesSection = () => {
  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 transform rotate-45 bg-gradient-to-br from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 transform -rotate-45 bg-gradient-to-tl from-accent/5 to-transparent" />
      
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-dark font-xoireqe text-5xl uppercase">Services</h2>
          <div className="flex items-center justify-center gap-6 my-6">
            <div className="h-[3px] w-16 bg-accent transform -rotate-45" />
            <div className="h-[3px] w-16 bg-primary transform rotate-45" />
          </div>
          <p className="text-dark/80 text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive electrical solutions for both residential and commercial properties, 
            delivered with expertise and reliability you can trust.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-12 mx-auto">
          {/* Residential Card */}
          <Link href="/services/residential" className="group">
            <div className="bg-white border border-dark/10 p-10 transition-all duration-300 h-full relative overflow-hidden
                          hover:shadow-[5px_5px_0px_0px_rgba(0,156,29,0.3)]">
              {/* Card Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 transform rotate-45 transition-transform group-hover:scale-110" />
              
              <div className="relative">
                <div className="mb-8 text-center">
                  <Home className="w-24 h-24 mx-auto text-primary transition-transform group-hover:scale-105" strokeWidth={1.5} />
                </div>
                <h3 className="text-dark font-edgar text-2xl text-center mb-8 uppercase tracking-wide">Residential</h3>
                <p className="text-dark/80 leading-relaxed mb-8">
                  We offer comprehensive residential electrical services including 
                  custom lighting installation, electrical panel change-outs, and 
                  landscaping lights. Our expertise extends to home remodeling, 
                  safety inspections, service upgrades, smoke detector installation, 
                  surge protection, and expert troubleshooting for all your home 
                  electrical needs.
                </p>
                <div className="flex items-center justify-center text-primary group-hover:gap-2 transition-all">
                  <span className="font-edgar uppercase tracking-wider">Learn More</span>
                  <div className="ml-3 w-6 h-[2px] bg-primary transform transition-all duration-300
                                group-hover:w-8 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>

          {/* Commercial Card */}
          <Link href="/services/commercial" className="group">
            <div className="bg-white border border-dark/10 p-10 transition-all duration-300 h-full relative overflow-hidden
                          hover:shadow-[5px_5px_0px_0px_rgba(226,81,0,0.3)]">
              {/* Card Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 transform rotate-45 transition-transform group-hover:scale-110" />
              
              <div className="relative">
                <div className="mb-8 text-center">
                  <Building2 className="w-24 h-24 mx-auto text-accent transition-transform group-hover:scale-105" strokeWidth={1.5} />
                </div>
                <h3 className="text-dark font-edgar text-2xl text-center mb-8 uppercase tracking-wide">Commercial</h3>
                <p className="text-dark/80 leading-relaxed mb-8">
                  Our commercial electrical services include 3-Phase electric systems, 
                  commercial remodeling, data systems, gear installation, generators 
                  and transfer switches. We specialize in new construction, retail 
                  tenant build-outs, and underground systems installation, providing 
                  comprehensive solutions for all business electrical needs.
                </p>
                <div className="flex items-center justify-center text-accent group-hover:gap-2 transition-all">
                  <span className="font-edgar uppercase tracking-wider">Learn More</span>
                  <div className="ml-3 w-6 h-[2px] bg-accent transform transition-all duration-300
                                group-hover:w-8 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;