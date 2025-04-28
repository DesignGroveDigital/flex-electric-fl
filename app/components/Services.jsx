'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ image, title, description, delay = 0 }) => {
  return (
    <Link href={`/services#${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <motion.div 
        className="bg-white rounded-lg overflow-hidden shadow-lg h-full flex flex-col cursor-pointer 
                   transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Image section with gradient overlay */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2b2b2b]/80 to-transparent"></div>
        </div>
        
        {/* Peaked border between image and content */}
        <div className="relative h-8 bg-white">
          <svg className="absolute -top-10 lg:-top-8 left-0 w-full" viewBox="0 0 50 10" preserveAspectRatio="none">
            <path d="M0,8 L50,0 L100,8 L100,8 L0,8 Z" fill="white"></path>
          </svg>
        </div>
        
        {/* Content section */}
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-4 text-[#2b2b2b] font-edgar transition-colors">{title}</h3>
          <p className="text-dark/80 mb-6 flex-grow leading-relaxed sm:text-base">{description}</p>
          <div 
            className="text-accent hover:text-primary transition-colors duration-300 inline-flex items-center text-xs font-edgar"
          >
            VIEW ALL SERVICES
            <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const ServicesSection = () => {
  const services = [
    {
      image: "/data-center-cables.jpg",
      title: "Commercial",
      description: "Comprehensive electrical solutions for hospitals, educational facilities, data centers, office buildings, and various commercial properties. Our expertise ensures reliable power systems tailored to your specific business requirements."
    },
    {
      image: "/ev-charging-station.jpg",
      title: "Industrial",
      description: "Specialized electrical systems for industrial applications including automation, power generation, EV charging stations, and fiber optic networks. We deliver reliable infrastructure that meets the demands of modern industrial operations."
    },
    {
      image: "/maintenance.jpg",
      title: "Service and Maintenance",
      description: "24/7 emergency response and preventative maintenance services to keep your electrical systems operating at peak performance. Our dedicated team ensures minimal downtime and maximum system longevity."
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[90rem]">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl text-dark mb-4 font-xoireqe uppercase max-w-2xl mx-auto">Services that fit <span className='text-accent'>Your Needs</span></h2>
          <p className="text-dark/70 max-w-2xl mx-auto leading-relaxed text-lg">
            Delivering exceptional electrical solutions for commercial and industrial properties across the United States with professionalism and expertise.
          </p>  
        </div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;