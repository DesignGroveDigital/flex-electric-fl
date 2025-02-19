import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GallerySection = () => {
  // Example gallery items - replace with actual data
  const galleryItems = [
    {
      id: 1,
      title: 'Commercial Wiring',
      category: 'Commercial',
      imageUrl: '/gallery/commercial-1.jpg',
    },
    {
      id: 2,
      title: 'Home Lighting Installation',
      category: 'Residential',
      imageUrl: '/gallery/residential-1.jpg',
    },
    {
      id: 3,
      title: 'Panel Upgrade',
      category: 'Residential',
      imageUrl: '/gallery/panel-1.jpg',
    },
    {
      id: 4,
      title: 'Industrial Electric',
      category: 'Commercial',
      imageUrl: '/gallery/commercial-2.jpg',
    },
    {
      id: 5,
      title: 'Emergency Repairs',
      category: 'Services',
      imageUrl: '/gallery/emergency-1.jpg',
    },
    {
      id: 6,
      title: 'Lighting Design',
      category: 'Residential',
      imageUrl: '/gallery/lighting-1.jpg',
    },
  ];

  return (
    <section className="w-full bg-white py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 transform rotate-45 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 transform -rotate-45 bg-gradient-to-tl from-accent/5 to-transparent" />
      </div>

      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-dark font-xoireqe text-5xl uppercase mb-4">
            Our Work
          </h2>
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-[3px] w-16 bg-accent transform -rotate-45" />
            <div className="h-[3px] w-16 bg-primary transform rotate-45" />
          </div>
          <p className="text-dark/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Browse through our collection of completed projects and see the quality of our work firsthand.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative">
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
  );
};

export default GallerySection;