'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FloridaMap from './FloridaMap';

const ServiceAreaSection = () => {
  // State to track highlighted county
  const [highlightedCounty, setHighlightedCounty] = useState(null);
  
  // Service areas for the list
  const serviceAreas = [
    'Brevard County',
    'Indian River County',
    'St. Lucie County',
    'Martin County',
    'Palm Beach County',
    'Broward County',
    'Miami-Dade County'
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  // Get county name without "County" suffix for map highlighting
  const getCountyName = (fullName) => {
    return fullName.replace(' County', '');
  };

  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 transform -rotate-45 bg-gradient-to-tl from-primary/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 transform rotate-45 bg-gradient-to-br from-accent/5 to-transparent" />
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
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

              <div className="border-l-4 border-primary pl-6 space-y-3">
              <div className="text-lg font-edgar uppercase tracking-wider flex items-center gap-2">
                Service Areas
                <span className="text-xs text-dark/60 normal-case font-normal italic">(hover to see on map)</span>
              </div>
              <ul className="space-y-2 text-dark/80">
                {serviceAreas.map((area, index) => (
                  <motion.li 
                    key={area}
                    className={`group relative transition-all duration-300 transform flex items-center px-3 py-2 rounded-sm
                      ${highlightedCounty === getCountyName(area) 
                        ? 'bg-primary/10 text-accent font-medium' 
                        : 'hover:bg-gray-50'}`}
                    variants={itemVariants}
                    onMouseEnter={() => setHighlightedCounty(getCountyName(area))}
                    onMouseLeave={() => setHighlightedCounty(null)}
                    style={{ cursor: 'default' }}
                  >
                    <span className={`w-2 h-2 rounded-full mr-3 transition-all duration-300
                      ${highlightedCounty === getCountyName(area) 
                        ? 'bg-accent scale-125' 
                        : 'bg-primary/50 group-hover:scale-110'}`}
                    ></span>
                    {area}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className={`ml-auto transition-all duration-300
                        ${highlightedCounty === getCountyName(area) 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0'}`}
                    >
                    </svg>
                  </motion.li>
                ))}
              </ul>
            </div>

              <p className="text-dark/80 text-lg leading-relaxed">
                From residential updates to complex commercial installations, our team 
                of licensed electricians brings expertise and dedication to every project. 
                We're proud to serve our community with reliable, high-quality electrical 
                services.
              </p>

              <motion.div 
                className="font-edgar uppercase tracking-wider text-accent flex items-center"
                variants={itemVariants}
              >
                <span className="w-6 h-6 mr-2 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
                </span>
                Free Estimates Available
              </motion.div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            className="relative w-full h-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-full max-w-md mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '85%' }}>
                <div className="absolute inset-0 md:-translate-y-16 -translate-y-28">
                  <FloridaMap 
                    highlightedCounty={highlightedCounty} 
                    setHighlightedCounty={setHighlightedCounty} 
                  />
                </div>
              </div>
            
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceAreaSection;