'use client';

import React from 'react';
import { Building2, Home, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  // Animation variants
  const sectionTitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: custom * 0.2,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="w-full bg-gray-100 py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Enhanced Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 transform rotate-45 bg-gradient-to-br from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 transform -rotate-45 bg-gradient-to-tl from-accent/5 to-transparent" />
      
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title with Animation */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionTitleVariants}
        >
          <h2 className="text-dark font-xoireqe text-4xl sm:text-5xl uppercase mb-6">Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-dark/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive electrical solutions for both commercial and residential properties, 
            delivered with expertise and reliability you can trust.
          </p>
        </motion.div>

        {/* Service Cards with Animation */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mx-auto">
          {/* Commercial Card - Now First */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover="hover"
            custom={0}
          >
            <Link href="/services" className="group block h-full">
              <div className="bg-white border border-dark/10 p-6 sm:p-8 md:p-10 transition-all duration-300 h-full relative overflow-hidden
                            hover:shadow-[5px_5px_0px_0px_rgba(226,81,0,0.3)]">
                {/* Enhanced Card Decoration */}
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-accent/5 transform rotate-45 transition-transform group-hover:scale-110" />
                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-accent/3 rounded-full transform transition-transform group-hover:scale-125" />
                
                <div className="relative">
                  <div className="mb-6 sm:mb-8 text-center">
                    <Building2 className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto text-accent transition-transform group-hover:scale-105" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-dark font-edgar text-xl sm:text-2xl text-center mb-4 sm:mb-6 md:mb-8 uppercase tracking-wide group-hover:text-accent transition-colors">Commercial</h3>
                  <p className="text-dark/80 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                    Our commercial electrical services include 3-Phase electric systems, 
                    commercial remodeling, data systems, gear installation, generators 
                    and transfer switches. We specialize in new construction, retail 
                    tenant build-outs, and underground systems installation, providing 
                    comprehensive solutions for all business electrical needs.
                  </p>
                  <div className="flex items-center justify-center text-accent group-hover:translate-x-2 transition-all">
                    <span className="font-edgar uppercase tracking-wider text-sm sm:text-base">Learn More</span>
                    <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Residential Card - Now Second */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover="hover"
            custom={1}
          >
            <Link href="/services" className="group block h-full">
              <div className="bg-white border border-dark/10 p-6 sm:p-8 md:p-10 transition-all duration-300 h-full relative overflow-hidden
                            hover:shadow-[5px_5px_0px_0px_rgba(0,156,29,0.3)]">
                {/* Enhanced Card Decoration */}
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary/5 transform rotate-45 transition-transform group-hover:scale-110" />
                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-primary/3 rounded-full transform transition-transform group-hover:scale-125" />
                
                <div className="relative">
                  <div className="mb-6 sm:mb-8 text-center">
                    <Home className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto text-primary transition-transform group-hover:scale-105" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-dark font-edgar text-xl sm:text-2xl text-center mb-4 sm:mb-6 md:mb-8 uppercase tracking-wide group-hover:text-primary transition-colors">Residential</h3>
                  <p className="text-dark/80 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                    We offer comprehensive residential electrical services including 
                    custom lighting installation, electrical panel change-outs, and 
                    landscaping lights. Our expertise extends to home remodeling, 
                    safety inspections, service upgrades, smoke detector installation, 
                    surge protection, and expert troubleshooting for all your home 
                    electrical needs.
                  </p>
                  <div className="flex items-center justify-center text-primary group-hover:translate-x-2 transition-all">
                    <span className="font-edgar uppercase tracking-wider text-sm sm:text-base">Learn More</span>
                    <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
        
        {/* Service Categories Grid - Optional Add-on */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Link href="/services" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-edgar text-lg uppercase tracking-wider transition-colors">
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;