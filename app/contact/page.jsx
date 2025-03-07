'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import PageBannerAngled from '../components/Banner';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactTime: '',
    description: ''
  });
  
  // Form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errors, setErrors] = useState({});
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email format is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Please provide a brief description';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(false);
    
    try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to submit');
        }
        
        setSubmitSuccess(true);
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          contactTime: '',
          description: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitError(true);
      } finally {
        setIsSubmitting(false);
      }
    };

  return (
    <main className="bg-white">
      <PageBannerAngled 
        title="Contact Us" 
        subtitle="Reach out for superior electrical services throughout South Florida"
        backgroundImage="/contact-banner.jpg"
      />
      
    {/* Enhanced Contact Information Section */}
    <section className="py-16 bg-gray-50 relative overflow-hidden">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 transform rotate-45 bg-primary/20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 transform -rotate-45 bg-accent/20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/10 rounded-full animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent/10 rounded-full animate-[pulse_5s_ease-in-out_infinite]"></div>
    </div>
    
    <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid md:grid-cols-3 gap-8">
        {/* Email Card */}
        <motion.div 
            className="flex flex-col items-center text-center bg-white p-8 shadow-sm rounded-sm hover:shadow-md transition-shadow group relative overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ y: -5 }}
            onClick={() => {
            window.location.href = 'mailto:info@flexelectricfl.com';
            }}
        >
            {/* Accent Border */}
            <div className="absolute inset-x-0 top-0 h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
            <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-edgar text-dark mb-4">Email</h3>
            <a 
            href="mailto:info@flexelectricfl.com" 
            className="text-gray-700 group-hover:text-accent transition-colors"
            onClick={(e) => e.stopPropagation()}
            >
            info@flexelectricfl.com
            </a>
        </motion.div>
        
        {/* Location Card */}
        <motion.div 
            className="flex flex-col items-center text-center bg-white p-8 shadow-sm rounded-sm hover:shadow-md transition-shadow group relative overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ y: -5 }}
            onClick={() => {
            window.open('https://maps.app.goo.gl/QzEqHzc1u1UBQkXq8', '_blank');
            }}
        >
            {/* Accent Border */}
            <div className="absolute inset-x-0 top-0 h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
            <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-edgar text-dark mb-4">Location</h3>
            <address className="text-gray-700 not-italic group-hover:text-accent transition-colors">
            1860 SW Fountainview Blvd, #1008<br />
            Port St. Lucie, FL 34986
            </address>
        </motion.div>
        
        {/* Phone Card */}
        <motion.div 
            className="flex flex-col items-center text-center bg-white p-8 shadow-sm rounded-sm hover:shadow-md transition-shadow group relative overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            whileHover={{ y: -5 }}
            onClick={() => {
            window.location.href = 'tel:+19548689893';
            }}
        >
            {/* Accent Border */}
            <div className="absolute inset-x-0 top-0 h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors relative">
            <Phone className="w-6 h-6 text-primary" />
            {/* Ringing animation */}
            <span className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping opacity-0 group-hover:opacity-100"></span>
            </div>
            <h3 className="text-xl font-edgar text-dark mb-4">Phone</h3>
            <a 
            href="tel:+19548689893" 
            className="text-gray-700 group-hover:text-accent transition-colors"
            >
            (954) 868-9893
            </a>
        </motion.div>
        </div>
    </div>
    </section>
      
      {/* Map & Contact Form Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="h-[400px] md:h-full rounded-sm overflow-hidden shadow-md"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.1071143457787!2d-80.39983978491936!3d27.650193982806277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88deeb0ee7d1ded3%3A0x8fc38a3f20345e3b!2s1860%20SW%20Fountainview%20Blvd%2C%20Port%20St.%20Lucie%2C%20FL%2034986!5e0!3m2!1sen!2sus!4v1656946565425!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Flex Electric location map"
                className="grayscale"
              ></iframe>
            </motion.div>
            
            {/* Contact Form in Contact Page - Updated for consistency with Home page contact section */}
            <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            >
            <div className="bg-dark p-8 shadow-md rounded-sm">
                <h3 className="text-2xl font-xoireqe uppercase text-white mb-6">
                Send Us a Message
                </h3>
                <div className="h-1 w-16 bg-primary mb-8"></div>
                
                {submitSuccess ? (
                <div className="text-white text-center p-8">
                    <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <h3 className="text-2xl font-edgar mb-2">Thank You!</h3>
                    <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                </div>
                ) : (
                <form onSubmit={handleSubmit} noValidate>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label htmlFor="name" className="block text-white font-edgar uppercase tracking-wider text-sm mb-2">
                        Name
                        </label>
                        <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full p-3 bg-white/10 border ${errors.name ? 'border-yellow-300' : 'border-white/20'} text-white placeholder-white/60
                                focus:border-white focus:outline-none`}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        aria-invalid={errors.name ? "true" : "false"}
                        />
                        {errors.name && (
                        <p id="name-error" className="mt-1 text-yellow-300 text-sm font-semibold">{errors.name}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-white font-edgar uppercase tracking-wider text-sm mb-2">
                        Email
                        </label>
                        <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full p-3 bg-white/10 border ${errors.email ? 'border-yellow-300' : 'border-white/20'} text-white placeholder-white/60
                                focus:border-white focus:outline-none`}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email && (
                        <p id="email-error" className="mt-1 text-yellow-300 text-sm font-semibold">{errors.email}</p>
                        )}
                    </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label htmlFor="phone" className="block text-white font-edgar uppercase tracking-wider text-sm mb-2">
                        Phone
                        </label>
                        <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full p-3 bg-white/10 border ${errors.phone ? 'border-yellow-300' : 'border-white/20'} text-white placeholder-white/60
                                focus:border-white focus:outline-none`}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        aria-invalid={errors.phone ? "true" : "false"}
                        />
                        {errors.phone && (
                        <p id="phone-error" className="mt-1 text-yellow-300 text-sm font-semibold">{errors.phone}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="contactTime" className="block text-white font-edgar uppercase tracking-wider text-sm mb-2">
                        Best Time to Contact
                        </label>
                        <select
                        id="contactTime"
                        name="contactTime"
                        value={formData.contactTime}
                        onChange={handleChange}
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

                    <div className="mb-6">
                    <label htmlFor="description" className="block text-white font-edgar uppercase tracking-wider text-sm mb-2">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        rows={4}
                        value={formData.description}
                        onChange={handleChange}
                        className={`w-full p-3 bg-white/10 border ${errors.description ? 'border-yellow-300' : 'border-white/20'} text-white placeholder-white/60
                                focus:border-white focus:outline-none`}
                        aria-describedby={errors.description ? "description-error" : undefined}
                        aria-invalid={errors.description ? "true" : "false"}
                    ></textarea>
                    {errors.description && (
                        <p id="description-error" className="mt-1 text-yellow-300 text-sm font-semibold">{errors.description}</p>
                    )}
                    </div>

                    {submitError && (
                    <div className="p-3 mb-6 bg-yellow-500/20 border border-yellow-300 text-white text-center rounded-sm">
                        There was a problem submitting your form. Please try again.
                    </div>
                    )}

                    <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-white hover:bg-white/90 text-accent py-4 px-8 
                            font-edgar uppercase tracking-wider transition-colors
                            ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                        </span>
                    ) : (
                        <span className="flex items-center justify-center">
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                        </span>
                    )}
                    </button>
                </form>
                )}
            </div>
            </motion.div>
          </div>
        </div>
      </section>
      
    </main>
  );
}