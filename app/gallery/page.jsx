'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import PageBannerAngled from '../components/Banner';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Lightbulb, X } from 'lucide-react';

// Updated gallery images using actual image files
const galleryImages = [
    {
      src: '/gallery/20240503_120009.jpg',
      alt: 'Modern commercial interior with large windows',
      category: 'commercial',
      title: 'Commercial Interior'
    },
    {
      src: '/gallery/20240503_120023 (1).jpg',
      alt: 'Interior ceiling with recessed lighting',
      category: 'commercial',
      title: 'Office Lighting Installation'
    },
    {
      src: '/gallery/20240503_120152 (1).jpg',
      alt: 'Aerial view of commercial building complex',
      category: 'commercial',
      title: 'Commercial Development'
    },
    {
      src: '/gallery/750963561.jpg',
      alt: 'Underground electrical conduit installation',
      category: 'commercial',
      title: 'Electrical Infrastructure'
    },
    {
      src: '/gallery/apoc-town-homes.jpg',
      alt: 'Modern town home electrical installation',
      category: 'residential',
      title: 'Town Home Electrical'
    },
    {
      src: '/gallery/APOK-5.png',
      alt: 'Aerial view of residential development',
      category: 'residential',
      title: 'Residential Development'
    },
    {
      src: '/gallery/APOK-6.png',
      alt: 'Overhead view of apartment complex',
      category: 'residential',
      title: 'Apartment Complex'
    },
    {
      src: '/gallery/APOK TOWN HOMES.png',
      alt: 'Modern townhome development with electrical installations',
      category: 'residential',
      title: 'APOK Townhomes'
    },
    {
      src: '/gallery/APOK Townhomes -  Boca Raton Florida 1.jpg',
      alt: 'Townhomes in Boca Raton with electrical work',
      category: 'residential',
      title: 'Boca Raton Townhomes'
    },
    {
      src: '/gallery/APOK TOWNHOMES-1.png',
      alt: 'Front view of townhome development',
      category: 'residential',
      title: 'Townhome Electrical Project'
    },
    {
      src: '/gallery/APOK TOWNHOMES-2.png',
      alt: 'Side view of townhome complex',
      category: 'residential',
      title: 'Townhome Complex'
    },
    {
      src: '/gallery/APOK TOWNHOMES-3.png',
      alt: 'Front entrance of townhome development',
      category: 'residential',
      title: 'Townhome Entrance'
    },
    {
      src: '/gallery/APOK TOWNHOMES-4.png',
      alt: 'Aerial view of completed townhome development',
      category: 'residential',
      title: 'Completed Townhome Development'
    },
    {
      src: '/gallery/APOK-7.png',
      alt: 'Modern residential courtyard with electrical fixtures',
      category: 'residential',
      title: 'Residential Courtyard'
    },
    {
      src: '/gallery/cede-luxury-apartments.jpg',
      alt: 'Luxury apartment electrical installation',
      category: 'residential',
      title: 'Luxury Apartment'
    },
    {
      src: '/gallery/commercial-1.jpg',
      alt: 'Commercial electrical panel installation',
      category: 'commercial',
      title: 'Commercial Panel Installation'
    },
    {
      src: '/gallery/freedom-rv-storage.jpg',
      alt: 'Electrical systems for storage facility',
      category: 'commercial',
      title: 'Storage Facility Electrical'
    },
    {
      src: '/gallery/golden-beach-civic-center.jpg',
      alt: 'Civic center electrical project',
      category: 'commercial',
      title: 'Civic Center Project'
    },
    {
      src: '/gallery/HOBE SOUND AUTO VAULT -1.jpg',
      alt: 'Auto vault electrical systems',
      category: 'commercial',
      title: 'Auto Vault Electrical'
    },
    {
      src: '/gallery/HOBE SOUND AUTO VAULT.jpg',
      alt: 'Complete view of auto vault facility',
      category: 'commercial',
      title: 'Auto Vault Facility'
    },
    {
      src: '/gallery/HSAV-1.jpg',
      alt: 'Electrical installation for specialized facility',
      category: 'commercial',
      title: 'Specialized Facility'
    },
    {
      src: '/gallery/infrastructure.jpg',
      alt: 'Electrical infrastructure installation',
      category: 'commercial',
      title: 'Infrastructure Development'
    },
    {
      src: '/gallery/panel-1.jpg',
      alt: 'Professional electrical panel installation',
      category: 'commercial',
      title: 'Electrical Panel Installation'
    },
    {
      src: '/gallery/ritz-carlton.jpg',
      alt: 'Ritz Carlton electrical project',
      category: 'commercial',
      title: 'Ritz Carlton'
    },
    {
      src: '/gallery/ritz-carlton-3.jpg',
      alt: 'Interior electrical work at Ritz Carlton',
      category: 'commercial',
      title: 'Ritz Carlton Interior'
    },
    {
      src: '/gallery/SAILFISH COVE APARTMENTS.jpg',
      alt: 'Sailfish Cove apartment complex electrical',
      category: 'residential',
      title: 'Sailfish Cove Apartments'
    },
    {
      src: '/gallery/SAILFISHCOVE.jpg',
      alt: 'Sailfish Cove residential development',
      category: 'residential',
      title: 'Sailfish Cove Development'
    },
    {
      src: '/gallery/SFC Meter Rm.-1.jpg',
      alt: 'Specialized electrical meter room installation',
      category: 'commercial',
      title: 'Meter Room Installation'
    },
    {
      src: '/gallery/SFC METER RM.jpg',
      alt: 'Complete meter room setup',
      category: 'commercial',
      title: 'Complete Meter Room'
    },
    {
      src: '/gallery/TBG Civic-Center-1.jpg',
      alt: 'TBG Civic Center electrical installation',
      category: 'commercial',
      title: 'TBG Civic Center'
    },
    {
      src: '/gallery/TGB Civic-Center.jpg',
      alt: 'Exterior view of TGB Civic Center',
      category: 'commercial',
      title: 'TGB Civic Center Exterior'
    }
  ];

// Main Gallery Page Component with added Image Modal
export default function GalleryPage() {
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalImageIndex, setCurrentModalImageIndex] = useState(0);
  const [modalImages, setModalImages] = useState([]);

  // Open modal with specific image
  const openModal = (images, index) => {
    setModalImages(images);
    setCurrentModalImageIndex(index);
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
    setCurrentModalImageIndex((prevIndex) => 
      prevIndex === modalImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to previous image
  const prevImage = (e) => {
    e.stopPropagation(); // Prevent closing the modal
    setCurrentModalImageIndex((prevIndex) => 
      prevIndex === 0 ? modalImages.length - 1 : prevIndex - 1
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
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, modalImages, currentModalImageIndex]);

  return (
    <main className="bg-white">
      <PageBannerAngled 
        title="Our Work" 
        subtitle="View our portfolio of commercial and residential electrical projects"
      />
      
      {/* Featured Projects Carousel */}
      <section className="py-16 max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-xoireqe uppercase text-dark mb-6">
            Featured Projects
          </h2>
          <motion.div 
            className="h-1 w-24 bg-primary mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore our showcase of recent electrical projects for homes and businesses throughout South Florida.
          </p>
        </motion.div>
        
        <ImageCarouselWithModal 
          images={galleryImages.slice(0, 6)} 
          openModal={(index) => openModal(galleryImages.slice(0, 6), index)} 
        />
      </section>
      
      {/* Complete Project Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-xoireqe uppercase text-dark mb-6">
              Project Gallery
            </h2>
            <motion.div 
              className="h-1 w-24 bg-primary mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Browse our complete gallery of electrical projects and filter by type to see examples of our work.
            </p>
          </motion.div>
          
          <ImageGridWithModal images={galleryImages} openModal={openModal} />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-accent py-16 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 transform rotate-45">
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-64 h-64 transform -rotate-12">
            <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707M12 21v-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <div className="flex items-center mb-4">
                <Lightbulb className="w-8 h-8 text-white mr-4" />
                <h2 className="text-3xl md:text-4xl font-xoireqe text-white">
                  Ready for Your Project?
                </h2>
              </div>
              <p className="text-white/90 text-lg">
                Whether you need electrical services for your home or business, our team is ready to bring your project to life with the same quality and expertise showcased in our gallery.
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <a 
                href="/contact" 
                className="bg-dark hover:bg-dark/90 text-white font-edgar uppercase tracking-wider py-4 px-8 inline-flex items-center transition-colors rounded-sm"
              >
                <span className="mr-2">Get Your Free Estimate</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="relative w-full max-w-5xl max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="absolute top-0 right-0 z-10 p-4 flex items-center justify-end space-x-4">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal();
                }}
                className="bg-black/50 hover:bg-accent text-white rounded-full p-2 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Image Container */}
            <div className="relative w-full h-[70vh] overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentModalImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full relative flex items-center justify-center"
                >
                  <Image
                    src={modalImages[currentModalImageIndex].src}
                    alt={modalImages[currentModalImageIndex].title}
                    fill
                    className="object-contain"
                    id="modal-title"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-accent text-white rounded-full p-2 transition-colors"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-accent text-white rounded-full p-2 transition-colors"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Image Caption */}
            <div className="p-4 text-center text-white">
              <h3 className="text-xl font-edgar">
                {modalImages[currentModalImageIndex].title}
              </h3>
              <p className="text-gray-300">
                {modalImages[currentModalImageIndex].category === 'commercial' ? 'Commercial Project' : 'Residential Project'}
              </p>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-16 left-4 bg-black/50 text-white px-3 py-1 rounded-sm text-sm">
              {currentModalImageIndex + 1} / {modalImages.length}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

// Modified Carousel Component with Modal Support
const ImageCarouselWithModal = ({ images, openModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setTimeout(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [currentIndex, isAutoPlaying]);

  const handleCarouselHover = (isHovering) => {
    setIsAutoPlaying(!isHovering);
  };

  return (
    <div 
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-sm shadow-lg" 
      onMouseEnter={() => handleCarouselHover(true)}
      onMouseLeave={() => handleCarouselHover(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full relative cursor-pointer"
          onClick={() => openModal(currentIndex)}
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className="object-cover"
            priority={currentIndex === 0}
          />
          
          {/* Image Overlay with Title */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent">
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-edgar mb-2">
                {images[currentIndex].title}
              </h3>
              <p className="text-white/80">
                {images[currentIndex].category === 'commercial' ? 'Commercial Project' : 'Residential Project'}
              </p>
            </div>
          </div>

          {/* View Larger Hint */}
          <div className="absolute top-4 right-4 bg-dark/70 text-white font-edgar text-sm py-1 px-3 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Click to enlarge
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-dark/70 hover:bg-accent text-white p-2 rounded-full transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-dark/70 hover:bg-accent text-white p-2 rounded-full transition-colors z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 right-6 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(index);
            }}
            className={`w-2.5 h-2.5 rotate-45 transition-colors ${
              index === currentIndex ? 'bg-accent' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
};

// Modified Grid Component with Modal Support
const ImageGridWithModal = ({ images, openModal }) => {
  const [filter, setFilter] = useState('all');
  const [activeImages, setActiveImages] = useState(images);

  useEffect(() => {
    if (filter === 'all') {
      setActiveImages(images);
    } else {
      setActiveImages(images.filter(img => img.category === filter));
    }
  }, [filter, images]);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button 
          onClick={() => setFilter('all')} 
          className={`px-4 py-2 rounded-sm font-edgar tracking-wider transition-colors ${
            filter === 'all' 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All Projects
        </button>
        <button 
          onClick={() => setFilter('commercial')} 
          className={`px-4 py-2 rounded-sm font-edgar tracking-wider transition-colors ${
            filter === 'commercial' 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Commercial
        </button>
        <button 
          onClick={() => setFilter('residential')} 
          className={`px-4 py-2 rounded-sm font-edgar tracking-wider transition-colors ${
            filter === 'residential' 
              ? 'bg-primary text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Residential
        </button>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {activeImages.map((image, index) => (
            <motion.div
              key={image.src}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative h-64 overflow-hidden rounded-sm shadow-md cursor-pointer"
              onClick={() => openModal(activeImages, index)}
              tabIndex={0}
              role="button"
              aria-label={`View ${image.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openModal(activeImages, index);
                }
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-lg font-edgar">{image.title}</h3>
                  <p className="text-sm text-white/80">
                    {image.category === 'commercial' ? 'Commercial Project' : 'Residential Project'}
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-dark/70 text-white text-sm py-1 px-3 rounded-sm">
                  Click to enlarge
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};