"use client"

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const GallerySection = () => {
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Ref and inView for scroll animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Example gallery items - replace with actual data
  const galleryItems = [
    {
      id: 1,
      title: 'Industrial Power Plant',
      category: 'Industrial',
      imageUrl: '/gallery/industrial-3.jpg',
    },
    {
      id: 2,
      title: 'Commercial Building',
      category: 'Commercial',
      imageUrl: '/gallery/palm-beach-university.jpg',
    },
    {
      id: 3,
      title: 'Underground Electrical Work',
      category: 'Infrastructure',
      imageUrl: '/gallery/infrastructure-5.jpg',
    },
    {
      id: 6,
      title: 'Golden Beach Civic Center',
      category: 'Commercial',
      imageUrl: '/gallery/golden-beach-civic-center.jpg',
    },
    {
      id: 4,
      title: 'Electrical Installation',
      category: 'Commercial',
      imageUrl: '/gallery/infrastructure.jpg',
    },
    {
      id: 5,
      title: 'TGB Civic Center',
      category: 'Commercial',
      imageUrl: '/gallery/TGB Civic-Center.jpg',
    },

  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const galleryItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5,
        delay: custom * 0.1,
        ease: "easeOut"
      }
    })
  };

  // Open modal with specific image
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  };

  // Navigate to next image
  const nextImage = (e) => {
    e.stopPropagation(); // Prevent closing the modal
    setCurrentImageIndex((prevIndex) => 
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to previous image
  const prevImage = (e) => {
    e.stopPropagation(); // Prevent closing the modal
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!isModalOpen) return;
    
    switch (e.key) {
      case 'ArrowRight':
        nextImage(e);
        break;
      case 'ArrowLeft':
        prevImage(e);
        break;
      case 'Escape':
        closeModal();
        break;
      default:
        break;
    }
  };

  // Add event listener for key press
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <section 
        ref={sectionRef}
        className="w-full bg-white py-24 relative overflow-hidden"
      >

        <motion.div 
          className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl text-dark mb-4 font-xoireqe uppercase">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-dark/70 max-w-2xl mx-auto leading-relaxed text-lg">
            Explore our portfolio of electrical solutions for commercial and industrial clients across the United States.
          </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div 
                key={item.id} 
                className="group relative cursor-pointer"
                onClick={() => openModal(index)}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.title} image`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    openModal(index);
                  }
                }}
                variants={galleryItemVariants}
                custom={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-md">
                  <div className="absolute inset-0 bg-dark/5 transform -rotate-2 group-hover:rotate-0 transition-transform duration-300" />
                  <div className="absolute inset-0 transform group-hover:rotate-0 transition-transform duration-300 overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 -translate-x-1 -translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/40 translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="font-edgar text-white tracking-wider uppercase mb-2">
                      {item.category}
                    </div>
                    <h3 className="text-white text-xl">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div 
            className="text-center mt-12"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link 
                href="/gallery"
                className="inline-flex items-center bg-accent hover:bg-accent/90 text-white py-3 px-8 rounded-lg font-edgar text-sm uppercase tracking-wider transition-colors duration-300 shadow-lg"

              >
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Image Modal with Animation */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="relative w-full max-w-5xl max-h-[90vh] flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="absolute top-0 right-0 z-10 p-4 flex items-center justify-end space-x-4">
                <motion.button 
                  onClick={(e) => {
                    e.stopPropagation();
                    closeModal();
                  }}
                  className="bg-black/50 hover:bg-accent text-white rounded-full p-2 transition-colors"
                  aria-label="Close modal"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
              
              {/* Image Container */}
              <motion.div 
                className="relative w-full h-[70vh] overflow-hidden flex items-center justify-center"
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={galleryItems[currentImageIndex].imageUrl}
                  alt={galleryItems[currentImageIndex].title}
                  fill
                  className="object-contain"
                  id="modal-title"
                />
              </motion.div>
              
              {/* Navigation Buttons */}
              <motion.button 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-accent text-white rounded-full p-2 transition-colors"
                onClick={prevImage}
                aria-label="Previous image"
                whileHover={{ scale: 1.1, x: -3 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              
              <motion.button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-accent text-white rounded-full p-2 transition-colors"
                onClick={nextImage}
                aria-label="Next image"
                whileHover={{ scale: 1.1, x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
              
              {/* Image Caption */}
              <motion.div 
                className="p-4 text-center text-white"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <h3 className="text-xl font-edgar">
                  {galleryItems[currentImageIndex].title}
                </h3>
                <p className="text-gray-300">
                  {galleryItems[currentImageIndex].category}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;