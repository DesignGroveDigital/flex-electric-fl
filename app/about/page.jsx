'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageBannerAngled from '../components/Banner';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Clock, Users, Lightbulb, ArrowRight, CheckCircle, Award, Target } from 'lucide-react';

export default function AboutPage() {
  const missionRef = useRef(null);
  const isMissionInView = useInView(missionRef, { once: true, threshold: 0.3 });
  
  const whyChooseRef = useRef(null);
  const isWhyChooseInView = useInView(whyChooseRef, { once: true, threshold: 0.3 });
  
  const valuesRef = useRef(null);
  const isValuesInView = useInView(valuesRef, { once: true });

  return (
    <main className="bg-white">
      <PageBannerAngled 
        title="About Us" 
        subtitle="Premier electrical solutions for commercial and industrial clients nationwide"
        backgroundImage="/about-banner.jpg"
      />
      
      {/* Company Introduction */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                className="text-3xl md:text-4xl text-dark mb-6 font-xoireqe uppercase tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Powering <span className='text-accent'>America's</span> Business
              </motion.h2>
              <motion.p 
                className="text-dark/80 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Flex Electric, Inc. is one of the nation's leading providers for design, installation and maintenance of electrical systems, structured cabling applications, fiber optic cables, integrated electronic structures and building solutions, street lights and EV charger structures.
              </motion.p>
              <motion.p 
                className="text-dark/80 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Headquartered in Port St. Lucie, Florida with offices located in New York, we service a diverse customer base across all 50 states. Our team of licensed professionals delivers comprehensive electrical solutions tailored to the unique needs of commercial and industrial enterprises nationwide.
              </motion.p>
              <motion.p 
                className="text-dark/80 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                We are committed to building better solutions for our customers in both private and public sectors. Our goal is to create long-term relationships through quality workmanship, transparent communication, and reliable service. We take great pride in our ability to solve complex electrical challenges while maintaining the highest standards of safety and customer satisfaction.
              </motion.p>
            </div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative h-[500px] overflow-hidden rounded-lg shadow-xl">
                <Image 
                  src="/gallery/infrastructure-13-1.jpg" 
                  alt="Flex Electric professional electrical installation" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b2b2b]/30 to-transparent"></div>
              </div>
              
              {/* Decorative border */}
              <div className="absolute -bottom-3 -right-3 w-2/3 h-1/2 border-4 border-accent rounded-lg -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section 
        ref={missionRef}
        className="py-16 md:py-24 bg-gray-100 overflow-hidden"
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl text-dark mb-4 font-xoireqe uppercase tracking-wide">
              Our <span className="text-accent">Mission</span>
            </h2>
            <p className="text-base text-dark/80 mb-12 leading-relaxed">
              "To provide reliable, high-quality electrical solutions that ensure the safety and satisfaction of our commercial and industrial clients, while maintaining the highest standards of professionalism and integrity in everything we do."
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
              <motion.div 
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-accent/10 p-4 rounded-full mb-4">
                  <ShieldCheck className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-lg font-edgar text-dark uppercase tracking-wider mb-2">Licensed & Insured</h3>
                <p className="text-dark/70 text-center text-base">Fully certified professionals delivering compliant electrical installations nationwide</p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-accent/10 p-4 rounded-full mb-4">
                  <Clock className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-lg font-edgar text-dark uppercase tracking-wider mb-2">24/7 Response</h3>
                <p className="text-dark/70 text-center text-base">Emergency services available around the clock to minimize business disruption</p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-accent/10 p-4 rounded-full mb-4">
                  <Users className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-lg font-edgar text-dark uppercase tracking-wider mb-2">Nationwide Service</h3>
                <p className="text-dark/70 text-center text-base">Serving clients across all 50 states with consistent quality and expertise</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section 
        ref={whyChooseRef}
        className="py-16 md:py-24 bg-[#2b2b2b] relative overflow-hidden"
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isWhyChooseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-white mb-4 font-xoireqe uppercase tracking-wide">
              Why Choose <span className="text-accent">Flex</span> Electric
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Our commitment to excellence sets us apart in the electrical industry
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <motion.div 
              className="md:col-span-5 relative order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              animate={isWhyChooseInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
                <Image 
                  src="/gallery/APOK-6.jpg" 
                  alt="Professional electrical installation by Flex Electric" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2b2b2b]/50 to-transparent"></div>
              </div>
              
              {/* Decorative border */}
              <div className="absolute -bottom-3 -left-3 w-2/3 h-1/2 border-4 border-accent rounded-lg -z-10"></div>
            </motion.div>
            
            <motion.div 
              className="md:col-span-7 order-1 md:order-2"
              initial={{ opacity: 0, x: 30 }}
              animate={isWhyChooseInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="space-y-6">
                <p className="text-white/80 leading-relaxed">
                  Our professionally trained team is reliable, courteous, and trustworthy. You won't have to worry about unsafe workmanship. We take pride in the quality of our work by ensuring that all projects are completed to your satisfaction in a convenient and timely manner.
                </p>
                
                <p className="text-white/80 leading-relaxed">
                  As specialists in commercial and industrial electrical systems, we bring expertise to complex projects including structured cabling, fiber optic installations, and integrated electronic systems. Our priority is to provide you with the highest quality solutions affordable to your budget.
                </p>
                
                <p className="text-white/80 leading-relaxed">
                  We serve diverse facilities including hospitals, educational institutions, data centers, office buildings, and aviation facilities. With dedicated teams in both Florida and New York, we're positioned to support clients throughout the United States.
                </p>
                
                <div className="pt-4 space-y-4">
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isWhyChooseInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <CheckCircle className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                    <p className="text-white/80">
                      Comprehensive electrical design, installation, and maintenance for commercial and industrial properties.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isWhyChooseInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <CheckCircle className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                    <p className="text-white/80">
                      Specialized expertise in structured cabling, fiber optics, and integrated systems.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isWhyChooseInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <CheckCircle className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                    <p className="text-white/80">
                      Nationwide service capabilities with offices in Florida and New York.
                    </p>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isWhyChooseInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <CheckCircle className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                    <p className="text-white/80">
                      24/7 emergency response for disaster recovery and system repairs.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section 
        ref={valuesRef}
        className="py-16 md:py-24 bg-white relative overflow-hidden"
      >
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-dark mb-4 font-xoireqe uppercase tracking-wide">
              Our <span className="text-accent">Values</span>
            </h2>
            <p className="text-dark/80 max-w-2xl mx-auto">
              The principles that guide us in providing exceptional electrical services
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gray-100 p-8 rounded-lg shadow-md overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-accent mr-4" />
                <h3 className="text-xl font-edgar text-dark uppercase tracking-wider">Quality</h3>
              </div>
              <p className="text-dark/80">
                We never compromise on the quality of our work. From the materials we use to the techniques we employ, excellence is our standard. Our priority is to provide you with the highest quality solutions that meet enterprise-scale requirements while remaining affordable for your budget.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-100 p-8 rounded-lg shadow-md overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
              <div className="flex items-center mb-4">
                <ShieldCheck className="w-8 h-8 text-accent mr-4" />
                <h3 className="text-xl font-edgar text-dark uppercase tracking-wider">Integrity</h3>
              </div>
              <p className="text-dark/80">
                Honesty and transparency are at the core of our business. We provide straightforward advice, fair pricing, and always act in the best interest of our clients. We stand behind every installation, maintaining rigorous compliance with industry standards and regulations nationwide.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-100 p-8 rounded-lg shadow-md overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-accent mr-4" />
                <h3 className="text-xl font-edgar text-dark uppercase tracking-wider">Reliability</h3>
              </div>
              <p className="text-dark/80">
                When we make a commitment, we keep it. Our commercial and industrial clients can count on us to show up on time, complete projects as scheduled, and be available for 24/7 emergency response. Our national presence ensures we can support your business wherever you operate.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      
      {/* CTA Section */}
      <section className="relative w-full overflow-hidden py-16 md:py-24">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/electricity-2403585_19202.jpg"
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
              <h2 className="text-white font-xoireqe text-3xl md:text-4xl uppercase mb-4 tracking-wide">
                Ready for Your Project?
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