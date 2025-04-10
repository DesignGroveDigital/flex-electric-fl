'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import PageBannerAngled from '../components/Banner';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function ServicesPage() {
  const commercialServices = [
    {
      title: "3-Phase Electric Systems",
      description: "Complete installation and maintenance of 3-phase power systems for commercial properties."
    },
    {
      title: "Commercial Remodeling",
      description: "Comprehensive electrical updates for office spaces and commercial buildings."
    },
    {
      title: "Data Systems",
      description: "Installation of data cabling and networking infrastructure for businesses."
    },
    {
      title: "Gear Installation",
      description: "Professional installation of electrical gear and equipment."
    },
    {
      title: "Generators and Transfer Switches",
      description: "Backup power solutions for commercial properties with automatic transfer capabilities."
    },
    {
      title: "New Construction",
      description: "Complete electrical systems for new commercial construction projects."
    },
    {
      title: "Retail-Tenant Build Out",
      description: "Customized electrical solutions for retail spaces and tenant improvements."
    },
    {
      title: "Underground Systems",
      description: "Installation and maintenance of underground electrical systems and conduits."
    }
  ];

  const residentialServices = [
    {
      title: "Custom Lighting",
      description: "Personalized lighting solutions to enhance your home's aesthetics and functionality."
    },
    {
      title: "Electrical Panel Change Outs",
      description: "Upgrade your home's electrical panel for improved safety and capacity."
    },
    {
      title: "Landscaping Lights",
      description: "Outdoor lighting installation to enhance your property's beauty and security."
    },
    {
      title: "Remodeling",
      description: "Comprehensive electrical updates for home renovation projects."
    },
    {
      title: "Safety Inspections",
      description: "Thorough assessment of your home's electrical system to ensure safety and code compliance."
    },
    {
      title: "Service Upgrades",
      description: "Increase your home's electrical capacity to meet modern power demands."
    },
    {
      title: "Smoke Detectors",
      description: "Installation of reliable smoke detection systems for your family's safety."
    },
    {
      title: "Surge Protection",
      description: "Safeguard your home electronics and appliances from power surges."
    }
  ];

  return (
    <main className="bg-white">
      <PageBannerAngled 
        title="Our Services" 
        subtitle="Professional electrical solutions for commercial and industrial needs."
        backgroundImage="/services-banner.jpg"
      />
      
      {/* Introduction Section with Animation */}
      <IntroductionSection />

      {/* Services Categories Section with Animation */}
      <section className="bg-gray-100 py-16 md:py-24 relative overflow-hidden">
        {/* Background Pattern Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-1/3 h-full">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full opacity-20">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)"></rect>
            </svg>
          </div>
        </div>

        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            id='services'
          >
            <h2 className="text-3xl md:text-4xl font-xoireqe uppercase text-dark mb-6">
              Our Electrical Work Covers
            </h2>
            <motion.div 
              className="h-1 w-24 bg-primary mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Commercial Services */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-dark p-5 mb-8 flex items-center">
                <div className="w-10 h-10 bg-accent flex items-center justify-center mr-4">
                  <span className="text-white font-bold">C</span>
                </div>
                <h3 className="text-2xl font-xoireqe uppercase text-white">Commercial Services</h3>
              </div>
              
              <div className="space-y-4">
                {commercialServices.map((service, index) => (
                  <ServiceItem 
                    key={`commercial-${index}`}
                    service={service}
                    isEven={index % 2 === 0}
                    delay={0.1 * index}
                  />
                ))}
              </div>
            </motion.div>

            {/* Residential Services */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-dark p-5 mb-8 flex items-center">
                <div className="w-10 h-10 bg-primary flex items-center justify-center mr-4">
                  <span className="text-white font-bold">R</span>
                </div>
                <h3 className="text-2xl font-xoireqe uppercase text-white">Residential Services</h3>
              </div>
              
              <div className="space-y-4">
                {residentialServices.map((service, index) => (
                  <ServiceItem 
                    key={`residential-${index}`}
                    service={service}
                    isEven={index % 2 === 0}
                    delay={0.1 * index}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

{/* Service Upgrades Section */}
<section 
  className="py-16 md:py-24 overflow-hidden"
  aria-labelledby="service-upgrades-heading"
>
  <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      {/* Image Container */}
      <motion.div 
        className="relative order-2 md:order-1 mx-auto max-w-lg w-full"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="absolute -top-4 -left-4 w-16 md:w-24 h-16 md:h-24 bg-primary/10 rounded-sm"></div>
        <div className="relative z-10">
          <Image 
            src="/electrician-panel.jpg" 
            alt="Licensed electrician working on an electrical panel during a service upgrade" 
            width={600} 
            height={450}
            className="rounded-sm shadow-lg w-full h-auto"
            priority={false}
          />
        </div>
        <div className="absolute -bottom-4 -right-4 w-16 md:w-24 h-16 md:h-24 bg-primary/10 rounded-sm"></div>
      </motion.div>
      
      {/* Content Container */}
      <motion.div 
        className="order-1 md:order-2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 
          id="service-upgrades-heading"
          className="text-3xl md:text-4xl font-xoireqe uppercase text-dark mb-6"
        >
          Get In Touch Today For Service Upgrades
        </h2>
        <motion.div 
          className="h-1 w-0 bg-primary mb-8"
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <p className="text-lg text-gray-700 mb-6 break-words">
          Make sure that your property meets code and is free from electrical issues. At Flex Electric, Inc., we have a range of services to help maintain electrical safety in your commercial or industrial space. Whether it's data wiring, heat installation, or fire alarm installation, we're here to help.
        </p>
        
        <motion.div 
          className="flex items-start mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex-shrink-0 mr-4 mt-1">
            <ShieldCheck className="w-6 h-6 text-primary" aria-hidden="true" />
          </div>
          <p className="text-gray-700 flex-1">
            Our team of licensed electricians ensures all work is performed to the highest standards of safety and quality, giving you peace of mind about your electrical systems.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <a 
            href="/contact" 
            className="bg-dark hover:bg-dark/90 text-white font-edgar uppercase tracking-wider py-3 px-6 inline-flex items-center transition-colors rounded-sm"
            aria-label="Contact us to request electrical service upgrades"
          >
            <span className="mr-2">Request A Quote</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>
    </main>
  );
}

const ServiceItem = ({ service, isEven, delay }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef(null);
    
    useEffect(() => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    }, [isExpanded]);
    
    return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay }}
          className="group"
        >
          <div 
            className="border-l-4 border-primary bg-white hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow rounded-r-sm overflow-hidden"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="flex items-center pl-4 py-3 pr-3 cursor-pointer">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-50 group-hover:bg-primary/10 rounded-full flex items-center justify-center mr-4 transition-colors duration-300">
                {isEven ? (
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <div className="flex-1 flex items-center justify-between">
                <h4 className="font-edgar text-dark font-semibold group-hover:text-accent transition-colors duration-300">{service.title}</h4>
                <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div 
              ref={contentRef}
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ 
                height: isExpanded ? contentHeight : 0,
                opacity: isExpanded ? 1 : 0
              }}
            >
              <div className="px-4 pb-3 pl-20">
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      );
    };

// Introduction Section Component
function IntroductionSection() {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });
    
    useEffect(() => {
      if (isInView) {
        controls.start('visible');
      }
    }, [controls, isInView]);
  
    return (
      <section 
        ref={ref}
        className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative overflow-hidden"
      >
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6,
                ease: "easeOut"
              } 
            }
          }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-xoireqe uppercase text-dark mb-6"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { 
                  duration: 0.6,
                  ease: "easeOut"
                } 
              }
            }}
          >
            SUPERIOR ELECTRICAL SERVICES
          </motion.h2>
  
          <motion.div 
            className="h-1 w-0 bg-primary mx-auto mb-8"
            variants={{
              hidden: { width: 0 },
              visible: { 
                width: "6rem",
                transition: { 
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.3
                } 
              }
            }}
          />
  
          <motion.p 
            className="text-lg text-gray-700 mb-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1,
                y: 0,
                transition: { 
                  duration: 0.7,
                  delay: 0.5,
                  ease: "easeOut"
                } 
              }
            }}
          >
            Providing superior electrical services for businesses has put Flex Electric, Inc. in South Florida at the forefront of the industry. We specialize in new construction electrical services and service upgrades, as well as other solutions to improve your electrical systems. Whatever your need, entrust your commercial or industrial electrical work to us.
          </motion.p>
  
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.7
                }
              }
            }}
          >
            <a 
              className="group bg-accent hover:bg-accent/90 text-white font-edgar uppercase tracking-wider py-3 px-6 inline-flex items-center transition-colors rounded-sm"
              href="#services"
              aria-label="View our electrical services"
            >
              <span className="mr-2">View Our Services</span>
              <span className="transform group-hover:translate-x-1 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </span>
            </a>
          </motion.div>
        </motion.div>
      </section>
    );
  }