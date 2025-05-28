'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

const VideoTransitionSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      {/* Video CTA Transition Section with 50/50 split */}
      <section className="relative py-12">
        {/* 50/50 Background Split */}
        <div className="absolute inset-0">
          <div className="h-1/2 bg-white"></div>
          <div className="h-1/2 bg-[#2b2b2b]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[90rem] relative z-10">
          <motion.div 
            className="relative bg-white rounded-xl shadow-2xl p-8 md:p-12 text-center border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Subtle top accent border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-accent"></div>
            
            {/* Content with enhanced spacing */}
            <div className="max-w-3xl mx-auto mb-10">
              <motion.h3 
                className="text-2xl md:text-3xl font-xoireqe uppercase text-dark mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                See Our <span className='text-accent'>Process</span> in Action
              </motion.h3>
              <motion.p 
                className="text-dark/70 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Watch how our expert team approaches every commercial and industrial electrical project 
                with precision, safety, and unmatched expertise.
              </motion.p>
            </div>
            
            {/* Enhanced button with better spacing */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => setIsVideoModalOpen(true)}
                className="group relative inline-flex items-center bg-accent hover:bg-accent/90 text-white py-4 px-10 rounded-lg font-edgar uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-accent rounded-lg opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
                
                <div className="relative flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors group-hover:rotate-12 duration-300">
                    <Play className="w-6 h-6 text-white ml-0.5" fill="currentColor" />
                  </div>
                  <span>Watch Video</span>
                </div>
              </motion.button>
              
              {/* Subtle caption below button */}
              <motion.p 
                className="text-dark/50 text-sm mt-4 font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
              >
                3 minutes • Behind the scenes
              </motion.p>
            </motion.div>
            
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
              <div className="absolute top-8 right-8 w-32 h-32 border border-dark/10 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 border border-dark/10 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setIsVideoModalOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="relative w-full max-w-4xl max-h-[90vh] bg-black rounded-lg overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Vimeo Embed */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://player.vimeo.com/video/1087767380?autoplay=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  title="Flex Electric Process Video"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoTransitionSection;