"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'Palm Beach University',
    image: '/gallery/palm-beach-university.jpg'
  },
  {
    title: 'CEDE Luxury Apartments',
    image: '/gallery/cede-luxury-apartments.jpg'
  },
  {
    title: 'APOC Town Homes',
    image: '/gallery/apoc-town-homes.jpg'
  },
  {
    title: 'Ritz Carlton, South Beach',
    image: '/gallery/ritz-carlton.jpg'
  },
  {
    title: 'Ritz Carlton, South Beach',
    image: '/gallery/ritz-carlton-2.jpg'
  },
  {
    title: 'Ritz Carlton, South Beach',
    image: '/gallery/ritz-carlton-3.jpg'
  }
];

const GallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const totalPages = Math.ceil(projects.length / 3);

  const nextSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentSlide((prev) => (prev + 3) % projects.length);
    setTimeout(() => setTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 3 : prev - 3));
    setTimeout(() => setTransitioning(false), 500);
  };

  const goToPage = (pageIndex) => {
    if (transitioning) return;
    setTransitioning(true);
    setCurrentSlide(pageIndex * 3);
    setTimeout(() => setTransitioning(false), 500);
  };

  const visibleProjects = [
    projects[currentSlide],
    projects[(currentSlide + 1) % projects.length],
    projects[(currentSlide + 2) % projects.length]
  ];

  const currentPage = Math.floor(currentSlide / 3);

  return (
    <section className="w-full bg-dark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl md:text-2xl font-edgar uppercase tracking-wider text-white mb-16">
          We are diversified in commercial and residential projects.
        </h2>

        {/* Desktop Gallery */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-center text-white font-edgar uppercase tracking-wider">
                {project.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="relative lg:hidden">
          {/* Gallery Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 transition-opacity duration-500 
                        ${transitioning ? 'opacity-50' : 'opacity-100'}`}>
            {visibleProjects.map((project, index) => (
              <div key={index} className="space-y-4">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-center text-white font-edgar uppercase tracking-wider text-sm md:text-base">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Navigation and Dots */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevSlide}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors"
              disabled={transitioning}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 
                            ${currentPage === index ? 'bg-primary w-4' : 'bg-white/20 hover:bg-white/40'}`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors"
              disabled={transitioning}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;