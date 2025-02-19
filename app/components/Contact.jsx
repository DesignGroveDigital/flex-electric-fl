"use client"

import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-accent/90 via-accent to-accent/90 relative overflow-hidden py-16">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric Patterns */}
        <div className="absolute top-0 right-0 w-96 h-96 transform rotate-45 bg-white/5" />
        <div className="absolute bottom-0 left-0 w-96 h-96 transform -rotate-45 bg-white/5" />
        
        {/* Dot Pattern */}
        <div className="absolute top-20 left-20 grid grid-cols-6 gap-4 transform -rotate-12">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-white/10 rounded-sm"></div>
          ))}
        </div>
        
        {/* Angular Lines */}
        <div className="absolute bottom-20 right-20">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i} 
              className="w-16 h-[1px] bg-white/10 transform rotate-45 mb-4"
              style={{ marginLeft: `${i * 1}rem` }}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-white font-xoireqe text-5xl uppercase mb-8">
            Contact Us
          </h2>
          <div className="flex items-center justify-center gap-6">
            <div className="h-[3px] w-16 bg-white/20 transform -rotate-45" />
            <div className="h-[3px] w-16 bg-primary transform rotate-45" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info & Map */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-white/10">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-edgar uppercase tracking-wider mb-1">Address</div>
                  <p className="text-white/80">
                    43 South Powerline Rd, #431<br />
                    Pompano Beach, FL 33069
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-white/10">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-edgar uppercase tracking-wider mb-1">Phone</div>
                  <a href="tel:+19548689893" className="text-white/80 hover:text-white transition-colors">
                    (954) 868-9893
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-white/10">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-edgar uppercase tracking-wider mb-1">Email</div>
                  <a href="mailto:flexelectric.fl@gmail.com" className="text-white/80 hover:text-white transition-colors">
                    flexelectric.fl@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-[200px] relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.9935789615456!2d-80.16075532385426!3d26.22939817706103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9039f302d7a65%3A0xca940d4daf756897!2s43%20S%20Powerline%20Rd%20%23431%2C%20Pompano%20Beach%2C%20FL%2033069!5e0!3m2!1sen!2sus!4v1739702285169!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125"
              ></iframe>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white/10 backdrop-blur-sm p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-edgar uppercase tracking-wider text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 bg-white/10 border border-white/20 text-white placeholder-white/60
                             focus:border-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white font-edgar uppercase tracking-wider text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 bg-white/10 border border-white/20 text-white placeholder-white/60
                             focus:border-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-edgar uppercase tracking-wider text-sm mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full p-3 bg-white/10 border border-white/20 text-white placeholder-white/60
                             focus:border-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white font-edgar uppercase tracking-wider text-sm mb-2">
                    Best Time to Contact
                  </label>
                  <select
                    className="w-full p-3 bg-white/10 border border-white/20 text-white
                             focus:border-white focus:outline-none"
                  >
                    <option value="" className="text-dark">Select a time</option>
                    <option value="morning" className="text-dark">Morning</option>
                    <option value="afternoon" className="text-dark">Afternoon</option>
                    <option value="evening" className="text-dark">Evening</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-edgar uppercase tracking-wider text-sm mb-2">
                  Description
                </label>
                <textarea
                  rows={4}
                  className="w-full p-3 bg-white/10 border border-white/20 text-white placeholder-white/60
                           focus:border-white focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white hover:bg-white/90 text-accent py-4 px-8 
                         font-edgar uppercase tracking-wider transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;