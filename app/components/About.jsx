'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, Globe } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[90rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Image with border effect */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              {/* Main image */}
              <div className="relative w-full h-[400px] lg:h-[480px]">
                <Image
                  src="/about.jpg" 
                  alt="Professional electricians working on a commercial project"
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b2b2b]/20 to-transparent"></div>
              </div>
              
              {/* Decorative border */}
              <div className="absolute -bottom-3 -right-3 w-2/3 h-1/2 border-4 border-accent rounded-lg -z-10"></div>
            </div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Section header */}
            <h2 className="text-3xl md:text-4xl text-dark mb-6 font-xoireqe uppercase">
              Powering <span className="text-accent">America's</span> Business
            </h2>
            
            <p className="text-dark/80 mb-6 leading-relaxed">
              Flex Electric, Inc. is a premier electrical contracting company serving commercial and industrial clients nationwide. With our extensive expertise and commitment to excellence, we deliver comprehensive electrical solutions tailored to the specific needs of businesses across the United States.
            </p>
            
            <p className="text-dark/80 mb-8 leading-relaxed">
              Our commitment to quality craftsmanship, innovative approaches, and strict adherence to safety standards has established us as a trusted partner for businesses nationwide. From initial consultation to project completion, we work closely with our clients to ensure their unique needs are met with precision and expertise.
            </p>
            
            {/* Stats section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {/* Experience stat */}
              <div className="flex items-center p-5 bg-gray-100 rounded-lg shadow-md">
                <div className="bg-accent rounded-full p-3 mr-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-dark font-edgar">30+</h3>
                  <p className="text-dark/70 text-sm">Years Combined Experience</p>
                </div>
              </div>
              
              {/* States served stat */}
              <div className="flex items-center p-5 bg-gray-100 rounded-lg shadow-md">
                <div className="bg-accent rounded-full p-3 mr-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-dark font-edgar">50</h3>
                  <p className="text-dark/70 text-sm">States Served Nationwide</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;