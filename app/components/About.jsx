'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';

const AboutSection = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

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

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: custom * 0.1 + 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-gray-100 py-16 sm:py-20 md:py-24 relative overflow-hidden"
    >
      {/* Decorative Elements with Animation */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 transform rotate-45 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 transform -rotate-45 bg-gradient-to-tl from-accent/5 to-transparent" />
      
      </motion.div>

      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Image Column with Animation */}
          <motion.div 
            className="relative h-[300px] sm:h-[400px] md:h-[600px] w-full"
            variants={imageVariants}
          >
            <motion.div 
              className="absolute inset-0 bg-dark/5 transform -rotate-2"
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
                src="/about.png"
                alt="Flex Electric team at work"
                fill
                className="object-cover transition-transform duration-700"
              />
              {/* Image overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent opacity-60"></div>
            </motion.div>
            
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary/30 -translate-x-2 -translate-y-2"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-accent/30 translate-x-2 translate-y-2"></div>
          </motion.div>

          {/* Content Column */}
          <div className="space-y-6 md:space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-dark font-xoireqe text-3xl sm:text-4xl md:text-5xl uppercase mb-6">
                About Us
              </h2>
              <div className="h-1 w-24 bg-primary mb-6"></div>
            </motion.div>

            <motion.div className="space-y-4 md:space-y-6" variants={itemVariants}>
              <p className="text-dark/80 text-base sm:text-lg leading-relaxed">
                Flex Electric, Inc. is a family-owned and operated electrical company, 
                fully licensed and insured, with over 30 years of combined knowledge 
                and experience providing full electrical service in all areas of the 
                electrical industry whether it be commercial or industrial.
              </p>

              {/* Feature Points with Counter Animation */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 md:pt-6">
                <motion.div 
                  className="space-y-1 sm:space-y-2 bg-white/50 p-4 rounded-sm shadow-sm"
                  variants={statVariants}
                  custom={0}
                  whileHover={{ 
                    y: -5, 
                    backgroundColor: "rgba(255, 255, 255, 0.8)", 
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05)"
                  }}
                >
                  <CounterAnimation 
                    end={30} 
                    suffix="+" 
                    className="text-3xl sm:text-4xl font-edgar text-primary"
                    inView={isInView}
                  />
                  <div className="text-dark/60 text-xs sm:text-sm uppercase tracking-wider">Years Combined Experience</div>
                </motion.div>
                
                <motion.div 
                  className="space-y-1 sm:space-y-2 bg-white/50 p-4 rounded-sm shadow-sm"
                  variants={statVariants}
                  custom={1}
                  whileHover={{ 
                    y: -5, 
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05)"
                  }}
                >
                  <CounterAnimation 
                    end={100} 
                    suffix="%" 
                    className="text-3xl sm:text-4xl font-edgar text-accent"
                    inView={isInView}
                  />
                  <div className="text-dark/60 text-xs sm:text-sm uppercase tracking-wider">Family Owned & Operated</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Trust Indicators with Staggered Animation */}
            <motion.div 
              className="flex flex-wrap gap-3 sm:gap-6 pt-4 md:pt-6"
              variants={itemVariants}
            >
              <motion.div 
                className="px-3 sm:px-4 py-2 bg-primary/5 text-primary text-xs sm:text-sm uppercase tracking-wider font-edgar border-b-2 border-primary/30"
                whileHover={{ y: -3, backgroundColor: "rgba(0, 156, 29, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                Licensed
              </motion.div>
              <motion.div 
                className="px-3 sm:px-4 py-2 bg-primary/5 text-primary text-xs sm:text-sm uppercase tracking-wider font-edgar border-b-2 border-primary/30"
                whileHover={{ y: -3, backgroundColor: "rgba(0, 156, 29, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                Insured
              </motion.div>
              <motion.div 
                className="px-3 sm:px-4 py-2 bg-accent/5 text-accent text-xs sm:text-sm uppercase tracking-wider font-edgar border-b-2 border-accent/30"
                whileHover={{ y: -3, backgroundColor: "rgba(226, 81, 0, 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                Professional
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Counter animation component
const CounterAnimation = ({ end, suffix = "", className, inView }) => {
  const [count, setCount] = React.useState(0);
  const countRef = useRef(null);
  
  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const duration = 1500; // ms
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    const easeOutQuad = t => t * (2 - t);
    
    let frame = 0;
    const countTo = parseInt(end, 10);
    
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      const currentCount = Math.round(countTo * progress);
      
      if (currentCount >= countTo) {
        setCount(countTo);
        clearInterval(counter);
      } else {
        setCount(currentCount);
      }
    }, frameDuration);
    
    return () => clearInterval(counter);
  }, [end, inView]);
  
  return <div className={className}>{count}{suffix}</div>;
};

export default AboutSection;