'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageBannerAngled from '../components/Banner';
import { ArrowRight, CheckCircle, Building, Wrench, LightbulbIcon, Server, Factory, Power, Cable, Car, Phone } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <PageBannerAngled 
        title="Our Services" 
        subtitle="Professional electrical solutions for commercial and industrial needs"
        backgroundImage="/services-banner.jpg"
      />
      
      {/* Introduction Section */}
      <IntroductionSection />

      {/* Commercial Electrical Services Section */}
      <EnhancedServiceSection 
        title="Commercial Electrical"
        description="Flex Electric provides comprehensive electrical services for a wide range of commercial and institutional projects. Our expert team delivers reliable solutions tailored to each client's specific needs."
        imageSrc="/data-center-cables.jpg"
        imageAlt="Commercial electrical installation by Flex Electric"
        imageOnRight={false}
        bgColor="bg-white"
        services={[
          { name: "Hospitals & Medical Facilities", icon: <Building className="w-5 h-5" /> },
          { name: "Research Laboratories", icon: <LightbulbIcon className="w-5 h-5" /> },
          { name: "Educational Facilities", icon: <Building className="w-5 h-5" /> },
          { name: "Sports & Entertainment", icon: <Building className="w-5 h-5" /> },
          { name: "Hospitality & Assemblies", icon: <Building className="w-5 h-5" /> },
          { name: "High Rise Residential", icon: <Building className="w-5 h-5" /> },
          { name: "Townhouses", icon: <Building className="w-5 h-5" /> },
          { name: "Office Buildings", icon: <Building className="w-5 h-5" /> },
          { name: "Data & Call Centers", icon: <Server className="w-5 h-5" /> },
          { name: "Aviation", icon: <Building className="w-5 h-5" /> },
        ]}
      />

      {/* Industrial Services Section */}
      <EnhancedServiceSection 
        title="Industrial Installations"
        description="Our industrial electrical services bring technical expertise and attention to detail to meet the demanding requirements of industrial installations."
        imageSrc="/ev-charging-station.jpg"
        imageAlt="Industrial electrical systems installation"
        imageOnRight={true}
        bgColor="bg-gray-100"
        services={[
          { name: "Automation Systems", icon: <Factory className="w-5 h-5" /> },
          { name: "Power Generation Systems", icon: <Power className="w-5 h-5" /> },
          { name: "Stand By Power Solutions", icon: <Power className="w-5 h-5" /> },
          { name: "Motion Control", icon: <Wrench className="w-5 h-5" /> },
          { name: "Civil And Transit Projects", icon: <Building className="w-5 h-5" /> },
          { name: "EV Charging Stations", icon: <Car className="w-5 h-5" /> },
          { name: "Directional Bore", icon: <Wrench className="w-5 h-5" /> },
          { name: "Fiber Optic Cabling Systems", icon: <Cable className="w-5 h-5" /> },
        ]}
      />

      {/* Service and Maintenance Section */}
      <EnhancedServiceSection 
        title="Service and Maintenance Solutions"
        description="Our dedicated maintenance team ensures your electrical systems remain in optimal condition, minimizing downtime and extending the lifespan of your equipment."
        imageSrc="/maintenance.jpg"
        imageAlt="Electrical maintenance and emergency services"
        imageOnRight={false}
        bgColor="bg-white"
        services={[
          { name: "24/7 Emergency Response", icon: <Phone className="w-5 h-5" /> },
          { name: "Disaster And Recovery Repair", icon: <Wrench className="w-5 h-5" /> },
        ]}
      />

      {/* CTA Section */}
      <section className="relative w-full overflow-hidden py-16 md:py-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/electricity-2403585_19202.jpg"
            alt="Professional electrical services"
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
                Ready to Get Started?
              </h2>
              <p className="text-white/90 text-lg">
                Whether you need electrical services for your commercial property or industrial facility, our team is ready to bring your project to life with expert solutions tailored to your specific requirements.
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <Link href="/contact">
                <motion.button
                  className="bg-white hover:bg-white/90 text-accent py-4 px-8 rounded-lg font-edgar text-lg uppercase tracking-wider transition-colors duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">Get Your Free Estimate</span>
                  <ArrowRight className="w-5 h-5 inline ml-2" />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Introduction Section Component
function IntroductionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  
  return (
    <section 
      ref={ref}
      className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative overflow-hidden"
    >
      <motion.div 
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-xoireqe uppercase text-dark mb-4">
          Superior <span className="text-accent">Electrical</span> Services
        </h2>
        
        <motion.p 
          className="text-lg text-dark/80 leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Flex Electric, Inc. has established itself as a premier electrical contracting company serving commercial and industrial clients nationwide. Our team of licensed professionals delivers comprehensive electrical solutions tailored to enterprise-scale projects across all 50 states. With our extensive expertise and commitment to excellence, we handle everything from new construction to complex system upgrades for businesses that demand the highest standards of quality and reliability.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a href="#commercial-electrical">
            <motion.button
              className="bg-accent hover:bg-accent/90 text-white py-3 px-8 rounded-lg font-edgar text-sm uppercase tracking-wider transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">Explore Our Services</span>
              <ArrowRight className="w-5 h-5 inline ml-1" />
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Enhanced Service Section Component with Service Grid
function EnhancedServiceSection({ title, description, imageSrc, imageAlt, imageOnRight, bgColor, services }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  const id = title.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <section 
      ref={ref}
      id={id}
      className={`${bgColor} relative overflow-hidden`}
    >
      <div className="grid md:grid-cols-2">
        {/* Image Column - Full Height/Width */}
        <div 
          className={`${imageOnRight ? 'order-1 md:order-2' : 'order-1'} h-[400px] md:h-auto md:min-h-[600px] relative`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image 
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Optional gradient overlay for better text contrast if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2b2b2b]/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent"></div>
          </motion.div>
        </div>
          
        {/* Content Column */}
        <motion.div 
          className={`${imageOnRight ? 'order-2 md:order-1' : 'order-2'} py-16 md:py-24 px-4 sm:px-6 lg:px-16 xl:px-24 flex items-center`}
          initial={{ opacity: 0, x: imageOnRight ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-xoireqe uppercase text-dark mb-6">
              {title.split(' ').map((word, i) => 
                i === 0 ? <span key={i} className="text-accent">{word} </span> : <span key={i}>{word} </span>
              )}
            </h2>
            
            <p className="text-dark/80 leading-relaxed text-lg mb-10">
              {description}
            </p>
            
            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="flex items-center bg-white/50 p-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:bg-white transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + (index * 0.05) }}
                  whileHover={{ y: -3 }}
                >
                  <div className="bg-accent/10 p-2 rounded-full mr-3">
                    <div className="text-accent">
                      {service.icon}
                    </div>
                  </div>
                  <span className="text-dark/80 font-medium">{service.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}