'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const WhyUsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-dark py-16 sm:py-20 md:py-24 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 transform rotate-45 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 transform -rotate-45 bg-gradient-to-tl from-accent/10 to-transparent" />
      </div>

      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Content Column */}
          <div className="space-y-6 md:space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-white font-xoireqe text-3xl sm:text-4xl md:text-5xl uppercase mb-6">
                Why Choose Us?
              </h2>
              <div className="h-1 w-24 bg-primary mb-6 mr-auto"></div>
            </motion.div>

            <motion.div className="space-y-4 md:space-y-6" variants={itemVariants}>
              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                Our professionally trained team is reliable, courteous, and trustworthy. 
                You won't have to worry about unsafe workmanship. We take pride in the 
                quality of our work by ensuring that all work is completed to your 
                satisfaction in a convenient and timely way.
              </p>

              <p className="text-accent text-lg sm:text-xl font-edgar uppercase tracking-wide">
                You can put your mind at ease knowing we are available in cases of emergency.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                At Flex Electric, Inc., our goal is to create a long-term relationship 
                based on trust with our clients.
              </p>

              {/* Key Points */}
              <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6" variants={itemVariants}>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 flex items-center justify-center transform rotate-45 group-hover:rotate-0 transition-transform duration-300">
                    <div className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-primary font-edgar">01</div>
                  </div>
                  <span className="text-white font-edgar text-sm sm:text-base uppercase tracking-wide sm:tracking-wider">Quality First</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 flex items-center justify-center transform rotate-45 group-hover:rotate-0 transition-transform duration-300">
                    <div className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-accent font-edgar">02</div>
                  </div>
                  <span className="text-white font-edgar text-sm sm:text-base uppercase tracking-wide sm:tracking-wider">Always Available</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Image Column with Enhanced Hover Effects */}
          <motion.div 
            className="relative h-[300px] sm:h-[400px] md:h-[600px] w-full mt-6 md:mt-0"
            variants={imageVariants}
          >
            <motion.div 
              className="absolute inset-0 bg-white/5 transform -rotate-2"
              initial={{ rotate: 0 }}
              animate={{ rotate: -2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.div 
              className="absolute inset-0 transform overflow-hidden"
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/team.jpg"
                alt="Flex Electric professional service"
                fill
                className="object-cover transition-transform duration-700"
              />
              {/* Image overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent opacity-60"></div>
            </motion.div>
            
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary/30 -translate-x-2 -translate-y-2"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-accent/30 translate-x-2 translate-y-2"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;