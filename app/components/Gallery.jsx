"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection = () => {
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Example gallery items - replace with actual data
  const galleryItems = [
    {
      id: 6,
      title: 'Commercial Wiring',
      category: 'Commercial',
      imageUrl: '/gallery/commercial-1.jpg',
    },
    {
      id: 2,
      title: 'Commercial Lighting Installation',
      category: 'Commercial',
      imageUrl: '/gallery/ritz-carlton.jpg',
    },
    {
      id: 3,
      title: 'Panel Upgrade',
      category: 'Residential',
      imageUrl: '/gallery/panel-1.jpg',
    },
    {
      id: 4,
      title: 'Electrical Installation',
      category: 'Commercial',
      imageUrl: '/gallery/infrastructure.jpg',
    },
    {
      id: 5,
      title: '',
      category: 'Commercial',
      imageUrl: '/gallery/.jpg',
    },
    {
      id: 1,
      title: 'Golden Beach Civic Center',
      category: 'Commercial',
      imageUrl: '/gallery/golden-beach-civic-center.jpg',
    },
  ];

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
      <section className="w-full bg-white py-24 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 transform rotate-45 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-96 h-96 transform -rotate-45 bg-gradient-to-tl from-accent/5 to-transparent" />
        </div>

        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-dark font-xoireqe text-5xl uppercase mb-8">
              Our Work
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-8"></div>

            <p className="text-dark/80 text-lg max-w-3xl mx-auto leading-relaxed">
              Browse through our collection of completed projects and see the quality of our work firsthand.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div 
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
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-dark/5 transform -rotate-2 group-hover:rotate-0 transition-transform duration-300" />
                  <div className="absolute inset-0 transform group-hover:rotate-0 transition-transform duration-300 overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
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
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link 
              href="/gallery"
              className="inline-flex items-center bg-dark hover:bg-dark/90 text-white px-8 py-4
                       uppercase font-edgar tracking-wider transition-colors duration-300"
            >
              View All Projects
              <div className="ml-3 w-6 h-[2px] bg-white transform transition-all duration-300
                            group-hover:w-8 group-hover:translate-x-1" />
            </Link>
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
              <Image
                src={galleryItems[currentImageIndex].imageUrl}
                alt={galleryItems[currentImageIndex].title}
                fill
                className="object-contain"
                id="modal-title"
              />
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
                {galleryItems[currentImageIndex].title}
              </h3>
              <p className="text-gray-300">
                {galleryItems[currentImageIndex].category}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;