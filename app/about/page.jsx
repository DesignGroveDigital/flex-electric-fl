'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import PageBannerAngled from '../components/Banner';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Clock, Users, Lightbulb, ArrowRight } from 'lucide-react';

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
        subtitle="Family-owned electrical experts serving South Florida for over 30 years"
        backgroundImage="/about-banner.jpg"
      />
      
      {/* Company Introduction */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                className="text-3xl md:text-4xl font-xoireqe uppercase text-dark mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Expert Electricians You Can Trust
              </motion.h2>
              <motion.div 
                className="h-1 w-0 bg-primary mb-8"
                initial={{ width: 0 }}
                animate={{ width: "6rem" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <motion.p 
                className="text-lg text-gray-700 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Flex Electric, Inc. is a family-owned and operated electrical company, fully licensed and insured, with over 30 years of combined knowledge and experience providing full electrical service throughout South Florida.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-700 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Based in Pompano Beach, Florida, we've built our reputation on delivering exceptional electrical services for both residential and commercial projects. Our team of highly-trained electricians approaches each job with the same level of dedication and professionalism, whether it's a small home repair or a large-scale commercial installation.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                At Flex Electric, our goal is to create long-term relationships with our clients through quality workmanship, transparent communication, and reliable service. We take great pride in our ability to solve complex electrical challenges while maintaining the highest standards of safety and customer satisfaction.
              </motion.p>
            </div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative z-10">
                <Image 
                  src="/gallery/infrastructure-2.jpg" 
                  alt="Flex Electric professional electrician" 
                  width={600} 
                  height={600}
                  className="rounded-sm shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-sm"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-sm"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section 
        ref={missionRef}
        className="py-16 bg-gray-100 overflow-hidden"
      >
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-xoireqe uppercase text-dark mb-6">
              Our Mission
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              "To provide reliable, high-quality electrical services that ensure the safety and satisfaction of our clients, while maintaining the highest standards of professionalism and integrity in everything we do."
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="flex items-center bg-white p-4 rounded-sm shadow-sm">
                <ShieldCheck className="w-8 h-8 text-primary mr-4" />
                <span className="text-dark font-edgar">Licensed & Insured</span>
              </div>
              <div className="flex items-center bg-white p-4 rounded-sm shadow-sm">
                <Clock className="w-8 h-8 text-primary mr-4" />
                <span className="text-dark font-edgar">Prompt Service</span>
              </div>
              <div className="flex items-center bg-white p-4 rounded-sm shadow-sm">
                <Users className="w-8 h-8 text-primary mr-4" />
                <span className="text-dark font-edgar">Experienced Team</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section 
        ref={whyChooseRef}
        className="py-16 md:py-24 relative overflow-hidden"
      >
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isWhyChooseInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-xoireqe uppercase text-dark mb-6">
              Why Choose Us?
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-8"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              animate={isWhyChooseInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative z-10">
                <Image 
                  src="/gallery/APOK-6.png" 
                  alt="Professional electrical installation by Flex Electric" 
                  width={600} 
                  height={400}
                  className="rounded-sm shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-sm"></div>
            </motion.div>
            
            <motion.div 
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 30 }}
              animate={isWhyChooseInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  Our professionally trained team is reliable, courteous, and trustworthy. You won't have to worry about unsafe workmanship. We take pride in the quality of our work by ensuring that all work is completed to your satisfaction in a convenient and timely way.
                </p>
                
                <p className="text-lg text-gray-700">
                  Our priority is to provide you with the highest quality of work affordable to your budget. You can put your mind at ease knowing we are available in cases of emergency.
                </p>
                
                <p className="text-lg text-gray-700">
                  At Flex Electric, Inc., our goal is to create a long-term relationship based on trust with our clients. We strive to become the preferred electrical service provider of homes and businesses in our community and the surrounding area.
                </p>
                
                <div className="pt-4">
                  <div className="flex items-start mb-4">
                    <div className="text-primary mr-4 mt-1">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <p className="text-gray-700">
                      Fully licensed and insured electrical contractors providing trustworthy service.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary mr-4 mt-1">
                      <Clock className="w-6 h-6" />
                    </div>
                    <p className="text-gray-700">
                      Reliable, on-time service that respects your schedule and needs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section 
        ref={valuesRef}
        className="py-16 bg-gray-100 relative overflow-hidden"
      >
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-xoireqe uppercase text-dark mb-6">
              Our Values
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The principles that guide us in providing exceptional electrical services
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-sm shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="text-2xl font-edgar text-dark mb-4">Quality</h3>
              <p className="text-gray-700">
                We never compromise on the quality of our work. From the materials we use to the techniques we employ, excellence is our standard. Our priority is to provide you with the highest quality of work affordable to your budget.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-sm shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h3 className="text-2xl font-edgar text-dark mb-4">Integrity</h3>
              <p className="text-gray-700">
                Honesty and transparency are at the core of our business. We provide straightforward advice, fair pricing, and always act in the best interest of our clients. We stand behind every job we complete.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-sm shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <h3 className="text-2xl font-edgar text-dark mb-4">Reliability</h3>
              <p className="text-gray-700">
                When we make a commitment, we keep it. Our clients can count on us to show up on time, complete projects as scheduled, and be available when emergencies arise. You can put your mind at ease knowing we are available in cases of emergency.
              </p>
            </motion.div>
          </div>
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
    </main>
  );
}