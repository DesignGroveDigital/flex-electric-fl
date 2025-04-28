'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageBannerAngled from '../components/Banner';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Handshake, Globe, Award, Users, Phone, Mail, ExternalLink, MapPin } from 'lucide-react';

export default function PartnersPage() {
  return (
    <main className="bg-white">
      <PageBannerAngled 
        title="Our Partners" 
        subtitle="Building stronger connections across the electrical industry"
        backgroundImage="/about-banner.jpg"
      />
      
      {/* Featured Partnership Section */}
      <FeaturedPartnership />
      
      {/* Decorative Divider */}
      <div className="relative flex py-5 items-center max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-grow border-t border-gray-200"></div>
        <span className="flex-shrink mx-4 text-accent">
          <Award className="w-8 h-8" />
        </span>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>
      
      {/* Partner Benefits Section */}
      <PartnerBenefits />
      
      {/* Partnership CTA Section */}
      <section className="relative w-full overflow-hidden py-16 md:py-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/electricity-2403585_19202.jpg"
            alt="Electrical services background"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-accent/80"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-white font-xoireqe text-3xl md:text-4xl uppercase mb-4">
                Become a Partner
              </h2>
              <p className="text-white/90 text-lg">
                Join our network of industry leaders and discover how a partnership with Flex Electric can benefit your business and clients.
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <Link href="/contact">
                <motion.button
                  className="bg-white hover:bg-white/90 text-accent py-4 px-8 rounded-lg font-edgar text-lg uppercase tracking-wider transition-colors duration-300 shadow-lg flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">Become a Partner</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Featured Partnership Section with Enhanced Visual Hierarchy
function FeaturedPartnership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  return (
    <section 
      ref={ref}
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-xoireqe uppercase text-dark mb-4">
            Strategic <span className="text-accent">Partnerships</span>
          </h2>
          <p className="text-dark/80 max-w-3xl mx-auto">
            We've built strong relationships with industry leaders to deliver exceptional electrical solutions nationwide.
          </p>
        </motion.div>
        
        {/* Enhanced Card with Image and Text */}
        <motion.div
          className="bg-white rounded-lg shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/* Combined Image + Text Section with Stronger Gradient Fade */}
          <div className="relative">
            {/* Image Section */}
            <div className="relative h-[300px] md:h-[500px] w-full">
              <Image
                src="/ny-cover.jpg"
                alt="Featured partnership - Bolands North construction company"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                className="object-cover"
              />
              
              {/* Enhanced Gradient Overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/0 to-white/0"></div>
            </div>
            
            {/* Text Content with Visual Improvements */}
            <div className="p-8 md:p-12 relative">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-edgar text-dark mb-2">
                    Bolands North
                  </h3>
                  <h4 className="text-lg text-dark/70">
                    Commercial & Residential Construction company
                  </h4>
                </div>
                
                {/* Contact Information Card */}
                <div className="mt-4 md:mt-0 bg-accent/5 p-4 rounded-lg border border-accent/20 shadow-sm">
                  <div className="flex items-center text-dark/80 mb-2">
                    <MapPin className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                    <span className="text-sm">1403 Millburn Dr, Conklin, New York, 13748</span>
                  </div>
                  <div className="flex items-center text-dark/80">
                    <Globe className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                    <a href="#" className="text-sm text-accent hover:underline">Visit Website</a>
                  </div>
                </div>
              </div>
              
              {/* Content with Visual Separators */}
              <div className="space-y-6">
                <p className="text-dark/80 leading-relaxed">
                  Bolands Excavating & Topsoil Inc. is a fourth and fifth generation of the enthusiastic Boland family serving the local construction industry. From small business beginnings in the early 1920s as Francis J. Boland Inc. moving into the 1930s, when it became Binghamton Crushed Stone & Gravel Corp, including McIntosh Concrete Corp.
                </p>
                
                <div className="border-l-4 border-accent/30 pl-4 py-1">
                  <p className="text-dark/80 leading-relaxed">
                    Later in the 1940s it became Walter P. Boland & Sons, leading into the 1960s when James Boland made it Boland Topsoil Inc.
                  </p>
                </div>
                
                <p className="text-dark/80 leading-relaxed">
                  In the 1980s, with an exceptional group of hard working employees, the new Bolands Excavating & Topsoil, Inc. got started. It soon evolved from residential projects and delivery only into commercial restoration and town storm water and utility projects. Later work included contaminated sites and soil removals, and following that the schools and specialty airports work of today.
                </p>
                
                <p className="text-dark/80 leading-relaxed">
                  The fifth generation continues to grow with Bolands North Inc., Airport Division; B&I Taxilane Lighting Inc., specializing in signs, light and weather stations; and Bolands South LLC, a licensed Florida Directional Drilling Contractor to name a few. With our unwavering dedication to quality and with our highest achieving team of employees, the Boland family is pushing their way forward to 100 years in the southern tier of New York and Pennsylvania.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-6 mt-8 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center text-dark/70">
                  <Globe className="w-5 h-5 text-accent mr-2" />
                  <span>100 Years of Excellence</span>
                </div>
                
                <div className="flex items-center text-dark/70">
                  <Award className="w-5 h-5 text-accent mr-2" />
                  <span>Industry Certified</span>
                </div>
                
                <div className="flex items-center text-dark/70">
                  <Users className="w-5 h-5 text-accent mr-2" />
                  <span>Fifth-Generation Family Business</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Partner Benefits Section with Enhanced Hover Effects
function PartnerBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  const benefits = [
    {
      title: "Extended Network",
      description: "Access to a nationwide network of electrical professionals and resources.",
      icon: <Globe className="w-10 h-10 text-accent" />
    },
    {
      title: "Shared Expertise",
      description: "Combine specialized knowledge to tackle complex projects efficiently.",
      icon: <Users className="w-10 h-10 text-accent" />
    },
    {
      title: "Quality Assurance",
      description: "Maintain the highest standards through collaborative quality controls.",
      icon: <Award className="w-10 h-10 text-accent" />
    },
    {
      title: "Business Growth",
      description: "Expand capabilities and market reach through strategic alliances.",
      icon: <Handshake className="w-10 h-10 text-accent" />
    }
  ];
  
  return (
    <section 
      ref={ref}
      className="py-16 md:py-24 bg-gray-100 relative overflow-hidden"
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-xoireqe uppercase text-dark mb-4">
            Partnership <span className="text-accent">Benefits</span>
          </h2>
          <p className="text-dark/80 max-w-3xl mx-auto">
            Our strategic partnerships create value through shared resources and expertise.
          </p>
        </motion.div>
        
        {/* Benefits Grid with Enhanced Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              whileHover={{ y: -5 }}
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-accent/5 transform translate-x-8 -translate-y-8 rotate-45 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300"></div>
              
              <div className="bg-accent/10 p-4 rounded-full mx-auto mb-6 w-20 h-20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-edgar text-dark uppercase mb-4 group-hover:text-accent transition-colors">{benefit.title}</h3>
              <p className="text-dark/70">{benefit.description}</p>
              
              {/* Reveal on hover link */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Link href="/contact" className="text-accent text-sm flex items-center justify-center">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}