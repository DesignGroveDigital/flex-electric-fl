'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import PageBannerAngled from '../components/Banner';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Lightbulb, X, Play, Pause, Volume2, VolumeX } from 'lucide-react';

// Updated gallery images with new categories: Commercial, Infrastructure, Multi-family
const galleryImages = [
  {
    src: '/gallery/20240503_120009.jpg',
    alt: 'Modern commercial interior with large windows',
    category: 'commercial',
    title: 'Commercial Interior',
    type: 'image'
  },
  {
    src: '/gallery/20240503_120023 (1).jpg',
    alt: 'Interior ceiling with recessed lighting',
    category: 'commercial',
    title: 'Office Lighting Installation',
    type: 'image'
  },
  {
    src: '/gallery/20240503_120152 (1).jpg',
    alt: 'Aerial view of commercial building complex',
    category: 'commercial',
    title: 'Commercial Development',
    type: 'image'
  },
  {
    src: '/gallery/apoc-town-homes.jpg',
    alt: 'Modern town home electrical installation',
    category: 'multi-family',
    title: 'Town Home Electrical',
    type: 'image'
  },
  {
    src: '/gallery/APOK-5.png',
    alt: 'Aerial view of residential development',
    category: 'multi-family',
    title: 'Residential Development',
    type: 'image'
  },
  {
    src: '/gallery/APOK-6.jpg',
    alt: 'Overhead view of apartment complex',
    category: 'multi-family',
    title: 'Apartment Complex',
    type: 'image'
  },
  {
    src: '/gallery/APOK TOWN HOMES.jpg',
      alt: 'Modern townhome development with electrical installations',
      category: 'multi-family',
      title: 'APOK Townhomes',
      type: 'image'
    },
    {
      src: '/gallery/APOK TOWNHOMES-1.png',
      alt: 'Front view of townhome development',
      category: 'multi-family',
      title: 'Townhome Electrical Project',
      type: 'image'
    },
    {
      src: '/gallery/APOK TOWNHOMES-4.png',
      alt: 'Aerial view of completed townhome development',
      category: 'multi-family',
      title: 'Completed Townhome Development',
      type: 'image'
    },
    {
      src: '/gallery/APOK-7.png',
      alt: 'Modern residential courtyard with electrical fixtures',
      category: 'multi-family',
      title: 'Residential Courtyard',
      type: 'image'
    },
    {
      src: '/gallery/commercial-1.jpg',
      alt: 'Commercial electrical panel installation',
      category: 'commercial',
      title: 'Commercial Panel Installation',
      type: 'image'
    },
    {
      src: '/gallery/freedom-rv-storage.jpg',
      alt: 'Electrical systems for storage facility',
      category: 'commercial',
      title: 'Storage Facility Electrical',
      type: 'image'
    },
    {
      src: '/gallery/golden-beach-civic-center.jpg',
      alt: 'Civic center electrical project',
      category: 'commercial',
      title: 'Civic Center Project',
      type: 'image'
    },
    {
      src: '/gallery/HOBE SOUND AUTO VAULT -1.jpg',
      alt: 'Auto vault electrical systems',
      category: 'commercial',
      title: 'Auto Vault Electrical',
      type: 'image'
    },
    {
      src: '/gallery/HOBE SOUND AUTO VAULT.jpg',
      alt: 'Complete view of auto vault facility',
      category: 'commercial',
      title: 'Auto Vault Facility',
      type: 'image'
    },
    {
      src: '/gallery/HSAV-1.jpg',
      alt: 'Electrical installation for specialized facility',
      category: 'commercial',
      title: 'Specialized Facility',
      type: 'image'
    },
    {
      src: '/gallery/infrastructure.jpg',
      alt: 'Electrical infrastructure installation',
      category: 'infrastructure',
      title: 'Infrastructure Development',
      type: 'image'
    },
    {
      src: '/gallery/panel-1.jpg',
      alt: 'Professional electrical panel installation',
      category: 'commercial',
      title: 'Electrical Panel Installation',
      type: 'image'
    },
    {
      src: '/gallery/ritz-carlton.jpg',
      alt: 'Ritz Carlton electrical project',
      category: 'commercial',
      title: 'Ritz Carlton',
      type: 'image'
    },
    {
      src: '/gallery/ritz-carlton-3.jpg',
      alt: 'Interior electrical work at Ritz Carlton',
      category: 'commercial',
      title: 'Ritz Carlton Interior',
      type: 'image'
    },
    {
      src: '/gallery/SAILFISH COVE APARTMENTS.jpg',
      alt: 'Sailfish Cove apartment complex electrical',
      category: 'multi-family',
      title: 'Sailfish Cove Apartments',
      type: 'image'
    },
    {
      src: '/gallery/SAILFISHCOVE.jpg',
      alt: 'Sailfish Cove residential development',
      category: 'multi-family',
      title: 'Sailfish Cove Development',
      type: 'image'
    },
    {
      src: '/gallery/SFC Meter Rm.-1.jpg',
      alt: 'Specialized electrical meter room installation',
      category: 'commercial',
      title: 'Meter Room Installation',
      type: 'image'
    },
    {
      src: '/gallery/SFC METER RM.jpg',
      alt: 'Complete meter room setup',
      category: 'commercial',
      title: 'Complete Meter Room',
      type: 'image'
    },
    {
      src: '/gallery/TBG Civic-Center-1.jpg',
      alt: 'TBG Civic Center electrical installation',
      category: 'commercial',
      title: 'TBG Civic Center',
      type: 'image'
    },
    {
      src: '/gallery/TGB Civic-Center.jpg',
      alt: 'Exterior view of TGB Civic Center',
      category: 'commercial',
      title: 'TGB Civic Center Exterior',
      type: 'image'
    },
    {
      src: '/gallery/infrastructure-4.jpg',
      alt: 'Underground electrical conduit installation',
      category: 'infrastructure',
      title: 'Electrical Infrastructure',
      type: 'image'
    },
    {
      src: '/gallery/infrastructure-5.jpg',
      alt: 'Underground electrical installation',
      category: 'infrastructure',
      title: 'Underground Electrical',
      type: 'image'
    },
    {
      src: '/gallery/infrastructure-6.jpg',
      alt: 'Conduit bundles for electrical infrastructure',
      category: 'infrastructure',
      title: 'Conduit Bundles',
      type: 'image'
    },
    {
      src: '/gallery/infrastructure-7.jpg',
      alt: 'Conduit bundles for electrical infrastructure',
      category: 'infrastructure',
      title: 'Conduit Bundles',
      type: 'image'
    },
    {
      src: '/gallery/infrastructure-8.jpg',
      alt: 'Underground electrical installation',
      category: 'infrastructure',
      title: 'Underground Electrical',
      type: 'image'
    },
    {
      src: '/gallery/infrastructure-9.jpg',
      alt: 'Large spools of electrical wire',
      category: 'infrastructure',
      title: 'Electrical Wire Spools',
      type: 'image'
    },
    {
      src: '/gallery/meter-4.jpg',
      alt: 'Electrical meter installation',
      category: 'commercial',
      title: 'Meter Installation',
      type: 'image'
    },
    {
      src: '/gallery/healthcare-1.png',
      alt: 'Healthcare facility electrical installation',
      category: 'healthcare',
      title: 'Good Samaritan Medical Center',
      type: 'image'
    },
    {
      src: '/gallery/industrial-1.jpg',
      alt: 'Industrial power plant',
      category: 'industrial',
      title: 'Industrial Power Plant',
      type: 'image'
    },
    {
      src: '/gallery/industrial-3.jpg',
      alt: 'Industrial power plant with electrical systems',
      category: 'industrial',
    title: 'Industrial Power Plant',
    type: 'image'
  },
  {
    src: '/gallery/GULF STREAM VIEWS TOWNHOMES.png',
    alt: 'Gulf Stream Views Townhomes electrical installation project',
    category: 'multi-family',
    title: 'Gulf Stream Views Townhomes',
    type: 'image'
  },
  {
    src: '/gallery/infrastructure-10.jpg',
    alt: 'Construction equipment for electrical infrastructure',
    category: 'infrastructure',
    title: 'Construction Machinery',
    type: 'image'
  },
  {
    src: '/gallery/infrastructure-11.jpg',
    alt: 'Electrical infrastructure installation',
    category: 'infrastructure',
    title: 'Electrical Infrastructure',
    type: 'image'
  },
  {
    src: '/gallery/infrastructure-12.jpg',
    alt: 'Electrical infrastructure installation with conduit',
    category: 'infrastructure',
    title: 'Electrical Conduit Installation',
    type: 'image'
  },
  {
    src: '/gallery/industrial-4.jpg',
    alt: 'APP Jet Center electrical installation',
    category: 'industrial',
    title: 'APP Jet Center',
    type: 'image'
  },
  {
    src: '/gallery/industrial-5.jpg',
    alt: 'APP Jet Center electrical installation',
    category: 'industrial',
    title: 'APP Jet Center',
    type: 'image'
  },
  {
    src: '/gallery/industrial-6.jpg',
    alt: 'APP Jet Center electrical installation',
    category: 'industrial',
    title: 'APP Jet Center',
    type: 'image'
  },
  {
    src: '/gallery/industrial-7.jpg',
    alt: 'APP Jet Center electrical installation',
    category: 'industrial',
    title: 'APP Jet Center',
    type: 'image'
  },
  {
    src: '/gallery/industrial-8.jpg',
    alt: 'APP Jet Center electrical installation',
    category: 'industrial',
    title: 'APP Jet Center',
    type: 'image'
  },
  {
    src: '/gallery/infrastructure-14.jpg',
    alt: 'Electrical conduit installed underground',
    category: 'infrastructure',
    title: 'Underground Electrical Conduit',
    type: 'image'
  },
  {
    src: '/gallery/fountain-business-center-1.jpg',
    alt: 'Fountain Business Center electrical project',
    category: 'commercial',
    title: 'Fountain Business Center',
    type: 'image'
  },
  {
    src: '/gallery/fountain-business-center-2.jpg',
    alt: 'Fountain Business Center electrical project',
    category: 'commercial',
    title: 'Fountain Business Center',
    type: 'image'
  },
  {
    src: '/gallery/industrial-9.jpg',
    alt: 'Directional boring machine for electrical installation',
    category: 'industrial',
    title: 'Directional Boring Machine',
    type: 'image'
  },
  
];

const galleryVideos = [
  {
    src: '/gallery/infrastructure-vid-1.mp4',
    alt: 'Crew working on electrical infrastructure',
    category: 'infrastructure',
    title: 'Infrastructure Work',
    type: 'video'
  },
  {
    src: '/gallery/infrastructure-vid-2.mp4',
    alt: 'Crew working on electrical infrastructure',
    category: 'infrastructure',
    title: 'Infrastructure Work',
    type: 'video'
  },
  {
    src: '/gallery/infrastructure-vid-3.mp4',
    alt: 'Crew working on electrical infrastructure',
    category: 'infrastructure',
    title: 'Infrastructure Work',
    type: 'video'
  },
  {
    src: '/gallery/infrastructure-vid-4.mp4',
    alt: 'Crew working on electrical infrastructure',
    category: 'infrastructure',
    title: 'Infrastructure Work',
    type: 'video'
  },
];

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Combine images and videos into one gallery array
const galleryItems = [...galleryImages, ...galleryVideos];

// Main Gallery Page Component with added Image and Video Modal
export default function GalleryPage() {
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalItemIndex, setCurrentModalItemIndex] = useState(0);
  const [modalItems, setModalItems] = useState([]);
  const [randomizedGallery, setRandomizedGallery] = useState([]);
  const [videoMuted, setVideoMuted] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setRandomizedGallery(shuffleArray(galleryItems));
  }, []);

  // Open modal with specific item
  const openModal = (items, index) => {
    setModalItems(items);
    setCurrentModalItemIndex(index);
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    // Reset video states when closing modal
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsVideoPlaying(false);
    // Restore body scrolling
    document.body.style.overflow = 'auto';
  };

  // Navigate to next item
  const nextItem = (e) => {
    if (e) e.stopPropagation(); // Prevent closing the modal
    // Reset video state for current video if applicable
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsVideoPlaying(false);
    
    setCurrentModalItemIndex((prevIndex) => 
      prevIndex === modalItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to previous item
  const prevItem = (e) => {
    if (e) e.stopPropagation(); // Prevent closing the modal
    // Reset video state for current video if applicable
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsVideoPlaying(false);
    
    setCurrentModalItemIndex((prevIndex) => 
      prevIndex === 0 ? modalItems.length - 1 : prevIndex - 1
    );
  };

  // Toggle video play/pause
  const toggleVideoPlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  // Toggle video mute
  const toggleVideoMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoMuted;
      setVideoMuted(!videoMuted);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!isModalOpen) return;
    
    switch (e.key) {
      case 'ArrowRight':
        nextItem();
        break;
      case 'ArrowLeft':
        prevItem();
        break;
      case 'Escape':
        closeModal();
        break;
      case ' ': // Space bar
        if (modalItems[currentModalItemIndex]?.type === 'video') {
          e.preventDefault(); // Prevent page scroll
          toggleVideoPlay(e);
        }
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
  }, [isModalOpen, modalItems, currentModalItemIndex, isVideoPlaying]);

  return (
    <main className="bg-white">
      <PageBannerAngled 
        title="Our Work" 
        subtitle="View our portfolio of commercial, industrial, and multi-family electrical projects"
        backgroundImage="/gallery-banner.jpg"
      />
      
      {/* Featured Projects Carousel */}
      <section className="py-16 md:py-24 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-xoireqe uppercase text-dark mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-dark/80 max-w-3xl mx-auto">
            Explore our showcase of recent electrical projects for commercial buildings, industrial complexes, infrastructure, and multi-family developments.
          </p>
        </motion.div>
        
        <MediaCarouselWithModal 
          items={galleryItems.slice(0, 6)} 
          openModal={(index) => openModal(galleryItems.slice(0, 6), index)} 
        />
      </section>
      
      {/* Complete Project Gallery */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-xoireqe uppercase text-dark mb-4">
              Project <span className="text-accent">Gallery</span>
            </h2>
            <p className="text-dark/80 max-w-3xl mx-auto">
              Browse our complete gallery of electrical projects and filter by type to see examples of our work.
            </p>
          </motion.div>
          
          <MediaGridWithModal items={galleryItems} openModal={openModal} />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative w-full overflow-hidden py-16 md:py-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/electrical-2476782_640.jpg"
            alt="Electrical services background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-accent/80"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-white font-xoireqe text-3xl md:text-4xl uppercase mb-4">
                Ready for Your Project?
              </h2>
              <p className="text-white/90 text-lg">
                Whether you need electrical services for commercial buildings, infrastructure projects, or multi-family developments, our team is ready to bring your project to life with expert solutions.
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <a href="/contact">
                <motion.button
                  className="bg-white hover:bg-white/90 text-accent py-4 px-8 rounded-lg font-edgar text-lg uppercase tracking-wider transition-colors duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">Get Your Free Estimate</span>
                  <ArrowRight className="w-5 h-5 inline ml-2" />
                </motion.button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Media Modal */}
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
            
            {/* Media Container */}
            <div className="relative w-full h-[70vh] overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentModalItemIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full relative flex items-center justify-center"
                >
                  {modalItems[currentModalItemIndex]?.type === 'video' ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <video
                        ref={videoRef}
                        src={modalItems[currentModalItemIndex].src}
                        poster={modalItems[currentModalItemIndex].poster}
                        className="max-w-full max-h-full"
                        muted={videoMuted}
                        playsInline
                        onClick={(e) => e.stopPropagation()}
                        onPlay={() => setIsVideoPlaying(true)}
                        onPause={() => setIsVideoPlaying(false)}
                        onEnded={() => setIsVideoPlaying(false)}
                        id="modal-title"
                      />
                      
                      {/* Video Controls Overlay */}
                      <div 
                        className="absolute inset-0 flex items-center justify-center hover:bg-black/20 transition-colors opacity-0 hover:opacity-100"
                        onClick={(e) => e.stopPropagation()} // Prevent modal close
                      >
                        {/* Center Play/Pause Button */}
                        <button
                          onClick={toggleVideoPlay}
                          className="bg-accent/80 hover:bg-accent text-white rounded-full p-6 transition-colors"
                          aria-label={isVideoPlaying ? "Pause video" : "Play video"}
                        >
                          {isVideoPlaying ? (
                            <Pause className="w-8 h-8" />
                          ) : (
                            <Play className="w-8 h-8" />
                          )}
                        </button>
                        
                        {/* Mute Toggle Button */}
                        <button
                          onClick={toggleVideoMute}
                          className="absolute bottom-4 right-4 bg-black/50 hover:bg-accent text-white rounded-full p-2 transition-colors"
                          aria-label={videoMuted ? "Unmute video" : "Mute video"}
                        >
                          {videoMuted ? (
                            <VolumeX className="w-5 h-5" />
                          ) : (
                            <Volume2 className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={modalItems[currentModalItemIndex].src}
                      alt={modalItems[currentModalItemIndex].title}
                      fill
                      className="object-contain"
                      id="modal-title"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-accent text-white rounded-full p-2 transition-colors"
              onClick={prevItem}
              aria-label="Previous item"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-accent text-white rounded-full p-2 transition-colors"
              onClick={nextItem}
              aria-label="Next item"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Media Caption */}
            <div className="p-4 text-center text-white">
              <h3 className="text-xl font-edgar">
                {modalItems[currentModalItemIndex].title}
              </h3>
              <p className="text-gray-300">
                {getCategoryLabel(modalItems[currentModalItemIndex].category)}
                {modalItems[currentModalItemIndex].type === 'video' && " • Video"}
              </p>
            </div>

            {/* Item Counter */}
            <div className="absolute bottom-16 left-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
              {currentModalItemIndex + 1} / {modalItems.length}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

// Helper function to get user-friendly category labels
function getCategoryLabel(category) {
  switch(category) {
    case 'commercial':
      return 'Commercial Project';
    case 'infrastructure':
      return 'Infrastructure Project';
    case 'multi-family':
      return 'Multi-Family Project';
    case 'healthcare':
      return 'Healthcare Project';
    case 'industrial':
      return 'Industrial Project';
    default:
      return 'Project';
  }
}

// Modified Carousel Component with Modal Support for both Images and Videos
const MediaCarouselWithModal = ({ items, openModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
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

  const currentItem = items[currentIndex];
  const isVideo = currentItem?.type === 'video';

  return (
    <div 
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-lg" 
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
          {isVideo ? (
            <div className="w-full h-full relative">
              <video 
                src={currentItem.src}
                alt={currentItem.alt}
                className="object-cover w-full h-full"
                muted
                playsInline
              />
              {/* Video Indicator */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-accent/80 rounded-full p-6 group-hover:opacity-100 opacity-80 transition-opacity">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          ) : (
            <Image
              src={currentItem.src}
              alt={currentItem.alt}
              fill
              className="object-cover"
              priority={currentIndex === 0}
            />
          )}
          
          {/* Image Overlay with Title */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2b2b2b]/80 to-transparent">
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-edgar mb-2">
                {currentItem.title}
              </h3>
              <p className="text-white/80">
                {getCategoryLabel(currentItem.category)}
                {isVideo && " • Video"}
              </p>
            </div>
          </div>

          {/* View Larger Hint */}
          <div className="absolute top-4 right-4 bg-[#2b2b2b]/70 text-white font-edgar text-sm py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            {isVideo ? "Play video" : "View full size"}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button 
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#2b2b2b]/70 hover:bg-accent text-white p-2 rounded-full transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button 
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#2b2b2b]/70 hover:bg-accent text-white p-2 rounded-full transition-colors z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 right-6 flex space-x-2 z-10">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(index);
            }}
            className={`w-2.5 h-2.5 rounded-sm transform rotate-0 transition-colors ${
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

// Modified Grid Component with Modal Support and Updated Filter Categories
// Modified Grid Component with Modal Support and Updated Filter Categories
const MediaGridWithModal = ({ items, openModal }) => {
  const [filter, setFilter] = useState('all');
  const [activeItems, setActiveItems] = useState([]);

  const categoryItemsRef = useRef({
    all: [],
    commercial: [],
    industrial: [],
    infrastructure: [],
    'multi-family': [],
    healthcare: []
  });

  useEffect(() => {
    // Only randomize the "all" category
    categoryItemsRef.current.all = shuffleArray(items);
    
    // For other categories, maintain the original order
    const categories = ['commercial', 'industrial', 'infrastructure', 'multi-family', 'healthcare'];
    categories.forEach(category => {
      // Filter items by category but do NOT shuffle them
      const categoryItems = items.filter(item => item.category === category);
      categoryItemsRef.current[category] = categoryItems; // No shuffling here
    });
    
    // Set initial active items
    setActiveItems(categoryItemsRef.current.all);
  }, [items]);
  
  // Use the arrays when changing filters
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setActiveItems(categoryItemsRef.current[newFilter]);
  };

  return (
    <div>
      {/* Filter Buttons with Updated Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button 
          onClick={() => handleFilterChange('all')} 
          className={`px-4 py-2 rounded-lg font-edgar tracking-wider transition-colors ${
            filter === 'all' 
              ? 'bg-accent text-white' 
              : 'bg-gray-200 text-dark/80 hover:bg-gray-300'
          }`}
        >
          All Projects
        </button>
        <button 
          onClick={() => handleFilterChange('commercial')} 
          className={`px-4 py-2 rounded-lg font-edgar tracking-wider transition-colors ${
            filter === 'commercial' 
              ? 'bg-accent text-white' 
              : 'bg-gray-200 text-dark/80 hover:bg-gray-300'
          }`}
        >
          Commercial
        </button>
        <button
          onClick={() => handleFilterChange('industrial')} 
          className={`px-4 py-2 rounded-lg font-edgar tracking-wider transition-colors ${
            filter === 'industrial' 
              ? 'bg-accent text-white' 
              : 'bg-gray-200 text-dark/80 hover:bg-gray-300'
          }`}
        >
          Industrial
        </button>
        <button 
          onClick={() => handleFilterChange('infrastructure')} 
          className={`px-4 py-2 rounded-lg font-edgar tracking-wider transition-colors ${
            filter === 'infrastructure' 
              ? 'bg-accent text-white' 
              : 'bg-gray-200 text-dark/80 hover:bg-gray-300'
          }`}
        >
          Infrastructure
        </button>
        <button 
          onClick={() => handleFilterChange('multi-family')} 
          className={`px-4 py-2 rounded-lg font-edgar tracking-wider transition-colors ${
            filter === 'multi-family' 
              ? 'bg-accent text-white' 
              : 'bg-gray-200 text-dark/80 hover:bg-gray-300'
          }`}
        >
          Multi-Family
        </button>
        <button 
          onClick={() => handleFilterChange('healthcare')} 
          className={`px-4 py-2 rounded-lg font-edgar tracking-wider transition-colors ${
            filter === 'healthcare' 
              ? 'bg-accent text-white' 
              : 'bg-gray-200 text-dark/80 hover:bg-gray-300'
          }`}
        >
          Healthcare
        </button>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {activeItems.map((item, index) => (
            <motion.div
              key={`${item.category}-${item.src}`}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative h-64 overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => openModal(activeItems, index)}
              tabIndex={0}
              role="button"
              aria-label={`View ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openModal(activeItems, index);
                }
              }}
            >
              {item.type === 'video' ? (
                <div className="relative w-full h-full">
                  <video
                    src={item.src}
                    alt={item.alt}
                    className="object-cover w-full h-full"
                    muted
                    playsInline
                  />
                  {/* Video Play Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-100 opacity-80 transition-opacity">
                    <div className="bg-accent/80 rounded-full p-4">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2b2b2b]/80 via-[#2b2b2b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-lg font-edgar">{item.title}</h3>
                  <p className="text-sm text-white/80">
                    {getCategoryLabel(item.category)}
                    {item.type === 'video' && " • Video"}
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-[#2b2b2b]/70 text-white text-sm py-1 px-3 rounded-lg">
                  {item.type === 'video' ? "Play video" : "View full size"}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};