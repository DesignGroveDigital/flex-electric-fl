'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';

const HeroSection = () => {
  // State for parallax effect
  const [scrollY, setScrollY] = useState(0);
  
  // Handle scroll for parallax
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };
  
  const taglineVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };
  
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#F05500", // Darker shade of accent
      transition: { 
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="w-full min-h-[84vh] flex items-center relative md:pt-20 pt-16 overflow-hidden">
      {/* Background Image with Enhanced Parallax Effect */}
      <div 
        className="absolute inset-0 z-0"
      >
        <Image
          src="/pexels-pixabay-236089.jpg"
          alt="Electrical work background"
          fill
          className="object-cover scale-[1.05] grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2b2b2b] via-[#2b2b2b]/95 to-[#2b2b2b]/90" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="w-full max-w-4xl mx-auto text-center text-white">
          {/* Heading Group with Animations */}
          <div className="space-y-6 mb-8 md:mb-12">
            <div className="space-y-2 mb-12">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-7xl font-xoireqe leading-tight uppercase"
                initial="hidden"
                animate="visible"
                variants={titleVariants}
              >
                Pow<span className="text-accent relative">
                  e
                </span>ring
              </motion.h1>
              
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-6xl font-edgar leading-tight uppercase tracking-wider"
                initial="hidden"
                animate="visible"
                variants={subtitleVariants}
              >
                Your Future
              </motion.h2>
            </div>
            
            <motion.div 
              className="space-y-3 font-edgar uppercase tracking-wide"
              initial="hidden"
              animate="visible"
              variants={taglineVariants}
            >
              <div className="flex justify-center items-center space-x-2">
                <div className="w-32 h-1 bg-accent"></div>
              </div>
            </motion.div>
          </div>

          {/* Value Proposition with Animation */}
          <motion.div 
            className="space-y-4 md:space-y-6 w-full max-w-3xl mx-auto mb-8 md:mb-10"
            initial="hidden"
            animate="visible"
            variants={contentVariants}
          >
            <p className="text-base sm:text-lg md:text-xl leading-relaxed px-2">
              Flex Electric, Inc. provides comprehensive electrical solutions for commercial properties and industrial facilities across the United States.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed px-2 text-white/90">
              With over 30 years of combined experience, our licensed professionals deliver reliable, code-compliant electrical systems tailored to your enterprise operations. Experience the confidence that comes with America's trusted industrial electrical contractor.
            </p>
          </motion.div>
          <motion.div 
            className="space-y-4 md:space-y-6 w-full max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={contentVariants}
          >
            <p className='text-sm sm:text-base md:text-lg leading-relaxed px-2 text-accent font-edgar lg:pt-4 tracking-wide'>
              SERVING FLORIDA, NEW YORK, AND THE U.S. NATIONWIDE
            </p>
          </motion.div>
          
        </div>
      </div>

            {/* Simple, clean accent at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-1">
        <div className="h-full w-full bg-[#E25100] float-left"></div>
      </div>
    </section>
  );
};

export default HeroSection;