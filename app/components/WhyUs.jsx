'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const WhyChooseUsSection = () => {
  const benefits = [
    "Licensed professionals with nationwide reach",
    "Meticulous attention to detail and code compliance",
    "Enterprise-scale electrical systems expertise",
    "Transparent communication throughout projects",
    "Proven track record of exceeding client expectations"
  ];

  return (
    <section className="py-16 md:py-24 bg-[#2b2b2b]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[90rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Section header */}
            <h2 className="text-3xl md:text-4xl text-white mb-6 font-xoireqe uppercase">
              Why Choose <span className="text-accent">Flex</span> Electric
            </h2>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Our team of licensed professionals brings expertise, precision, and reliability to every commercial and industrial project nationwide. We deliver uncompromising quality with meticulous attention to detail, ensuring all work meets rigorous industry standards and code requirements.
            </p>
            
            <p className="text-white/80 mb-8 leading-relaxed">
              Partner with a team that understands the complexities of enterprise-scale electrical systems.
              At Flex Electric, Inc., we build lasting business partnerships through technical excellence, transparent communication, and consistently exceeding client expectations.
            </p>
            
            {/* Benefits list */}
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start text-white/90"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="text-accent mr-3 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <button className="inline-block bg-accent hover:bg-accent/90 text-white py-3 px-8 rounded-lg font-edgar text-sm uppercase tracking-wider transition-colors duration-300 shadow-lg">
                Partner With Us
              </button>
            </motion.div>
          </motion.div>

          {/* Right column - Image with border effect */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              {/* Main image */}
              <div className="relative w-full h-[400px] lg:h-[600px]">
                <Image
                  src="/team.jpg" 
                  alt="Professional electrical installation for commercial clients"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b2b2b]/20 to-transparent"></div>
              </div>
              
              {/* Decorative border */}
              <div className="absolute -bottom-3 -left-3 w-2/3 h-1/2 border-4 border-accent rounded-lg -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;