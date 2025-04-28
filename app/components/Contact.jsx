'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SimpleContactCTA = () => {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/electricity-2403585_19202.jpg"
          alt="Electrical services background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-accent/80"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-white font-xoireqe text-3xl md:text-5xl uppercase mb-6">
            Ready to Power Your Business?
          </h2>
          
          <p className="text-white/90 text-lg mb-10">
            Contact our team of licensed professionals today for a free consultation 
            on your commercial or industrial electrical project.
          </p>
          
          <Link href="/contact">
            <motion.button
              className="inline-flex items-center bg-white hover:bg-white/90 text-accent py-4 px-10 rounded-lg font-edgar text-lg uppercase tracking-wider transition-colors duration-300 shadow-lg mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
              <ArrowRight className="ml-3 w-6 h-6" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleContactCTA;