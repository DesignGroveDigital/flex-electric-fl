"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';

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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full bg-gray-100 py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 transform rotate-45 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 transform -rotate-45 bg-gradient-to-tl from-accent/5 to-transparent" />
      </div>

      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-dark font-xoireqe text-3xl sm:text-4xl md:text-5xl uppercase mb-6 md:mb-8">
            Client Testimonials
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation Buttons - Desktop */}
            <button 
              onClick={previousTestimonial}
              className="hidden md:block absolute -left-16 top-1/2 -translate-y-1/2 p-2 text-dark/60 hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button 
              onClick={nextTestimonial}
              className="hidden md:block absolute -right-16 top-1/2 -translate-y-1/2 p-2 text-dark/60 hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Testimonial Card */}
            <div className="bg-white p-6 sm:p-8 md:p-12 shadow-lg relative">
              {/* Quote Icon */}
              <div className="absolute -top-5 md:-top-6 left-8 md:left-12">
                <div className="bg-primary p-3 md:p-4 transform rotate-45">
                  <Quote className="w-4 h-4 md:w-6 md:h-6 text-white transform -rotate-45" />
                </div>
              </div>
              
              {/* Testimonial Content */}
              <div className="space-y-4 md:space-y-6">
                {testimonials[currentIndex].quote.map((paragraph, index) => (
                  <p key={index} className="text-dark/80 text-base sm:text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                <div className="pt-6 border-t border-dark/10">
                  <div className="flex items-start gap-4">
                    {/* User Icon */}
                    <div className="p-3 bg-primary/10 rounded-full mt-1">
                      <User className="w-full h-full text-primary" />
                    </div>
                    
                    <div>
                      <div className="font-edgar uppercase tracking-wider text-dark text-base sm:text-lg">
                        {testimonials[currentIndex].author}
                      </div>
                      <div className="text-dark/60 space-y-1 mt-1">
                        <div>{testimonials[currentIndex].role}</div>
                        <div className="font-medium text-primary">{testimonials[currentIndex].company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Navigation Buttons */}
            <div className="flex justify-between mt-6 md:hidden">
              <button 
                onClick={previousTestimonial}
                className="p-2 bg-white/80 rounded-full shadow-sm text-dark/60 hover:text-primary transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 bg-white/80 rounded-full shadow-sm text-dark/60 hover:text-primary transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8 md:mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 md:w-3 md:h-3 transform rotate-45 transition-colors
                          ${index === currentIndex ? 'bg-primary' : 'bg-dark/20 hover:bg-dark/30'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;