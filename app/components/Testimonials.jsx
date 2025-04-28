"use client"

import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: [
        "I worked with Andre Luders with Flex Electric, Inc. on the APOK project in Boca Raton, Florida. We would like to extend our sincere recommendation for Andre on any future construction projects and express our desire to work further with him. Andre worked with Landsouth Construction, LLC, the general contractor, as a true team member and assisted in bringing, at times, a difficult project to a successful conclusion. The APOK project was a 20-million dollar project.",
        "Andre and his team completed the Electrical portion of the project, including all site lighting and amenities. They worked well with the developer and us.",
        "Landsouth Construction would like to work with him and his team on future projects."
      ],
      author: "Paul Sowders",
      role: "Construction Manager",
      company: "Landsouth Construction"
    },
    {
      id: 2,
      quote: [
        "I had the pleasure of working Flex Electric, Inc. on the APOK project in Boca Raton, Florida. I would recommend Andre and his team to any Owners that I work with in the future. Andre worked with us as a true team member and pushed the job to its conclusion without sacrificing quality or workmanship. The APOK project was a 20 million dollar project with Flex doing the electrical portion of the project which included site lighting and amenities.",
        "Andre and his team worked well with the Owners of the project making numerous Owner changes. The Owner of the project even expressed an interest in working with them on their other projects due to their professionalism and honesty.",
        "I personally would like to work with him and his team again on future projects and would recommend them to any company looking to have the electrical portion of the project progress smoothly. Please feel free to contact me if you would like to discuss further."
      ],
      author: "Thyra Nichols",
      role: "Admin Assist/Assist Project Manager",
      company: "Landsouth Construction"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  
  // Ref and inView for scroll animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7,
        delay: 0.3
      }
    }
  };
  
  const testimonialVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    })
  };

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-gray-100 py-16 sm:py-20 md:py-24 relative overflow-hidden"
    >

      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 md:mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="text-dark font-xoireqe text-2xl sm:text-3xl md:text-4xl uppercase mb-6 md:mb-8">
            Hear From <span className='text-accent'>Our</span> Clients
          </h2>

          <p className="text-dark/70 max-w-2xl mx-auto leading-relaxed text-lg">
            See what our valued clients have to say about our electrical expertise and professional service.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="relative">
            {/* Navigation Buttons - Desktop */}
            <motion.button 
              onClick={previousTestimonial}
              className="hidden md:block absolute -left-16 top-1/2 -translate-y-1/2 p-2 text-dark/60 hover:text-accent transition-colors"
              aria-label="Previous testimonial"
              whileHover={{ x: -3, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronLeft className="w-8 h-8" />
            </motion.button>

            <motion.button 
              onClick={nextTestimonial}
              className="hidden md:block absolute -right-16 top-1/2 -translate-y-1/2 p-2 text-dark/60 hover:text-accent transition-colors"
              aria-label="Next testimonial"
              whileHover={{ x: 3, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight className="w-8 h-8" />
            </motion.button>

            {/* Testimonial Card */}
            <div className="bg-white p-6 sm:p-8 md:p-12 shadow-lg relative">
              {/* Quote Icon */}
              <motion.div 
                className="absolute -top-5 md:-top-6 left-8 md:left-12"
                initial={{ rotate: 0 }}
                animate={{ rotate: 45 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="bg-accent p-3 md:p-4">
                  <Quote className="w-4 h-4 md:w-6 md:h-6 text-white transform -rotate-45" />
                </div>
              </motion.div>
              
              {/* Testimonial Content with Animation */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div 
                  key={currentIndex}
                  custom={direction}
                  variants={testimonialVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="space-y-4 md:space-y-6"
                >
                  {testimonials[currentIndex].quote.map((paragraph, index) => (
                    <p key={index} className="text-dark/80 text-base sm:text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}

                  <div className="pt-6 border-t border-dark/10">
                    <div className="flex items-start gap-4">
                      {/* User Icon */}
                      <div className="p-3 bg-accent/10 rounded-full mt-1">
                        <User className="w-full h-full text-accent" />
                      </div>
                      
                      <div>
                        <div className="font-edgar uppercase tracking-wider text-dark text-base sm:text-lg">
                          {testimonials[currentIndex].author}
                        </div>
                        <div className="text-dark/60 space-y-1 mt-1">
                          <div>{testimonials[currentIndex].role}</div>
                          <div className="font-medium text-accent rotate">{testimonials[currentIndex].company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Mobile Navigation Buttons */}
            <div className="flex justify-between mt-6 md:hidden">
              <motion.button 
                onClick={previousTestimonial}
                className="p-2 bg-white/80 rounded-full shadow-sm text-dark/60 hover:text-accent transition-colors"
                aria-label="Previous testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              
              <motion.button 
                onClick={nextTestimonial}
                className="p-2 bg-white/80 rounded-full shadow-sm text-dark/60 hover:text-accent transition-colors"
                aria-label="Next testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8 md:mt-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-sm transform rotate-45 transition-colors
                          ${index === currentIndex ? 'bg-accent' : 'bg-dark/20 hover:bg-dark/30'}`}
                aria-label={`Go to testimonial ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={index === currentIndex ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;