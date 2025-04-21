'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PageBannerAngled from '../components/Banner';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';

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
  const [touchedFields, setTouchedFields] = useState({});
  const [mapLocation, setMapLocation] = useState('florida');
  
  // Character count for description
  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for phone formatting
    if (name === 'phone') {
      // Keep only digits
      const digitsOnly = value.replace(/\D/g, '');
      
      // Format phone number as user types (xxx) xxx-xxxx
      let formattedPhone = '';
      if (digitsOnly.length > 0) {
        formattedPhone = digitsOnly.substring(0, 10);
        if (formattedPhone.length > 6) {
          formattedPhone = `(${formattedPhone.substring(0, 3)}) ${formattedPhone.substring(3, 6)}-${formattedPhone.substring(6)}`;
        } else if (formattedPhone.length > 3) {
          formattedPhone = `(${formattedPhone.substring(0, 3)}) ${formattedPhone.substring(3)}`;
        } else {
          formattedPhone = `(${formattedPhone}`;
        }
      }
      
      setFormData(prev => ({
        ...prev,
        [name]: formattedPhone
      }));
    } else if (name === 'description') {
      setCharCount(value.length);
      setFormData(prev => ({
        ...prev,
        [name]: value.substring(0, maxChars)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Mark field as touched
    if (!touchedFields[name]) {
      setTouchedFields(prev => ({
        ...prev,
        [name]: true
      }));
    }
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  // Handle field blur for validation
  const handleBlur = (e) => {
    const { name } = e.target;
    validateField(name, formData[name]);
  };
  
  // Validate a single field
  const validateField = (name, value) => {
    let errorMessage = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          errorMessage = 'Name is required';
        }
        break;
      case 'email':
        if (!value.trim()) {
          errorMessage = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(value)) {
          errorMessage = 'Email format is invalid';
        }
        break;
      case 'phone':
        if (!value.trim()) {
          errorMessage = 'Phone number is required';
        } else if (value.replace(/\D/g, '').length < 10) {
          errorMessage = 'Please enter a complete phone number';
        }
        break;
      case 'description':
        if (!value.trim()) {
          errorMessage = 'Please provide a brief description';
        }
        break;
      default:
        break;
    }
    
    setErrors(prev => ({
      ...prev,
      [name]: errorMessage
    }));
    
    return !errorMessage;
  };
  
  // Validate the entire form
  const validateForm = () => {
    const fieldNames = ['name', 'email', 'phone', 'description'];
    let formIsValid = true;
    
    // Mark all fields as touched
    const newTouchedFields = {};
    fieldNames.forEach(field => {
      newTouchedFields[field] = true;
      const isValid = validateField(field, formData[field]);
      if (!isValid) formIsValid = false;
    });
    
    setTouchedFields(newTouchedFields);
    return formIsValid;
  };
  
  // Save form data to localStorage
  useEffect(() => {
    const saveFormData = () => {
      if (Object.values(formData).some(value => value)) {
        localStorage.setItem('contactFormData', JSON.stringify(formData));
      }
    };
    
    saveFormData();
  }, [formData]);
  
  // Restore form data from localStorage on mount
  useEffect(() => {
    const storedData = localStorage.getItem('contactFormData');
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setFormData(parsedData);
        if (parsedData.description) {
          setCharCount(parsedData.description.length);
        }
      } catch (error) {
        console.error('Error parsing stored form data:', error);
      }
    }
  }, []);
  
  // Clear stored form data after successful submission
  useEffect(() => {
    if (submitSuccess) {
      localStorage.removeItem('contactFormData');
    }
  }, [submitSuccess]);
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to the first error
      const firstErrorField = document.querySelector('[aria-invalid="true"]');
      if (firstErrorField) {
        firstErrorField.focus();
      }
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
        setCharCount(0);
        
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
      subtitle="Reach out for superior electrical services nationwide"
      backgroundImage="/contact-banner.jpg"
    />
      
    {/* Enhanced Contact Information Section - Grid layout with all cards in one row */}
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Animated Background Elements - keep as is */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 transform rotate-45 bg-primary/20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 transform -rotate-45 bg-accent/20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/10 rounded-full animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent/10 rounded-full animate-[pulse_5s_ease-in-out_infinite]"></div>
      </div>
      
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Florida Office Card */}
          <motion.div 
            className="flex flex-col items-center text-center bg-white p-8 shadow-sm rounded-sm hover:shadow-md transition-shadow group relative overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
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
            <h3 className="text-xl font-edgar text-dark mb-4">Florida Office</h3>
            <address className="text-gray-700 text-base not-italic group-hover:text-accent transition-colors mb-4">
              1860 SW Fountainview Blvd, #1008<br />
              Port St. Lucie, FL 34986
            </address>
            <div className="text-gray-700 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              <a 
                href="tel:+19548689893" 
                className="group-hover:text-accent transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                (954) 868-9893
              </a>
            </div>
          </motion.div>
          
          {/* New York Office Card */}
          <motion.div 
            className="flex flex-col items-center text-center bg-white p-8 shadow-sm rounded-sm hover:shadow-md transition-shadow group relative overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ y: -5 }}
            onClick={() => {
              window.open('https://maps.app.goo.gl/s1Yfr5KoL2Sg4UAU6', '_blank');
            }}
          >
            {/* Accent Border */}
            <div className="absolute inset-x-0 top-0 h-1 bg-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-edgar text-dark mb-4">New York Office</h3>
            <address className="text-gray-700 text-base not-italic group-hover:text-accent transition-colors mb-4">
              767 Broadway #1413<br />
              Manhattan, NY 10003
            </address>
            <div className="text-gray-700 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              <a 
                href="tel:+15074488868" 
                className="group-hover:text-accent transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                (507) 448-8868
              </a>
            </div>
          </motion.div>
          
          {/* Email Card */}
          <motion.div 
            className="flex flex-col items-center text-center bg-white p-8 shadow-sm rounded-sm hover:shadow-md transition-shadow group relative overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
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
              className="text-gray-700 text-base group-hover:text-accent transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              info@flexelectricfl.com
            </a>
          </motion.div>
        </div>
      </div>
    </section>
      
      {/* Map & Contact Form Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Map with Location Toggle */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Location Toggle Buttons */}
              <div className="flex border border-dark/10 rounded-sm overflow-hidden">
                <button 
                  className={`flex-1 py-3 font-edgar tracking-wider uppercase text-sm transition-colors ${
                    mapLocation === 'florida' 
                      ? 'bg-dark text-white' 
                      : 'bg-white text-dark hover:bg-gray-50'
                  }`}
                  onClick={() => setMapLocation('florida')}
                >
                  Florida Office
                </button>
                <button 
                  className={`flex-1 py-3 font-edgar tracking-wider uppercase text-sm transition-colors ${
                    mapLocation === 'newyork' 
                      ? 'bg-dark text-white' 
                      : 'bg-white text-dark hover:bg-gray-50'
                  }`}
                  onClick={() => setMapLocation('newyork')}
                >
                  New York Office
                </button>
              </div>
              
              {/* Dynamic Map Based on Selected Location */}
              <div className="h-[400px] md:h-[500px] rounded-sm overflow-hidden shadow-md">
                {mapLocation === 'florida' ? (
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.1071143457787!2d-80.39983978491936!3d27.650193982806277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88deeb0ee7d1ded3%3A0x8fc38a3f20345e3b!2s1860%20SW%20Fountainview%20Blvd%2C%20Port%20St.%20Lucie%2C%20FL%2034986!5e0!3m2!1sen!2sus!4v1656946565425!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Flex Electric Florida location map"
                    className="transition-all duration-500"
                  ></iframe>
                ) : (
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.2965910076334!2d-73.99227492449853!3d40.73290807138661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599f3a92ade3%3A0x82c799a1cff7ff6e!2s767%20Broadway%20%231413%2C%20New%20York%2C%20NY%2010003!5e0!3m2!1sen!2sus!4v1714087427023!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Flex Electric New York location map"
                    className="transition-all duration-500"
                  ></iframe>
                )}
              </div>
            </motion.div>
            
            {/* Enhanced Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white p-8 shadow-lg rounded-sm">
                <h3 className="text-2xl font-xoireqe uppercase text-dark mb-2">
                  Send Us a Message
                </h3>
                <p className="text-dark/80 mb-4">Reach out today to contact us about a free estimate for your project.</p>
                <div className="h-1 w-16 bg-primary mb-8"></div>
                
                {submitSuccess ? (
                  <div className="text-dark text-center p-8" aria-live="polite">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-edgar mb-2">Thank You!</h3>
                    <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="mt-6 bg-dark/10 hover:bg-dark/20 text-dark py-2 px-4 rounded-sm transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-dark font-edgar uppercase tracking-wider text-sm mb-2">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="John Doe"
                          className={`w-full p-3 bg-gray-50 border ${touchedFields.name && errors.name ? 'border-red-400' : 'border-gray-200'} text-dark placeholder-gray-400
                                    focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition-all rounded-sm`}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          aria-invalid={touchedFields.name && errors.name ? "true" : "false"}
                          required
                        />
                        {touchedFields.name && errors.name && (
                          <p id="name-error" className="mt-1 text-red-500 text-sm font-semibold flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-dark font-edgar uppercase tracking-wider text-sm mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="your.email@example.com"
                          className={`w-full p-3 bg-gray-50 border ${touchedFields.email && errors.email ? 'border-red-400' : 'border-gray-200'} text-dark placeholder-gray-400
                                    focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition-all rounded-sm`}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          aria-invalid={touchedFields.email && errors.email ? "true" : "false"}
                          required
                        />
                        {touchedFields.email && errors.email && (
                          <p id="email-error" className="mt-1 text-red-500 text-sm font-semibold flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-dark font-edgar uppercase tracking-wider text-sm mb-2">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="(123) 456-7890"
                          className={`w-full p-3 bg-gray-50 border ${touchedFields.phone && errors.phone ? 'border-red-400' : 'border-gray-200'} text-dark placeholder-gray-400
                                    focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition-all rounded-sm`}
                          aria-describedby={errors.phone ? "phone-error" : "phone-hint"}
                          aria-invalid={touchedFields.phone && errors.phone ? "true" : "false"}
                          required
                        />
                        {touchedFields.phone && errors.phone ? (
                          <p id="phone-error" className="mt-1 text-red-500 text-sm font-semibold flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.phone}
                          </p>
                        ) : (
                          <p id="phone-hint" className="mt-1 text-gray-500 text-xs">
                            Format: (123) 456-7890
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="contactTime" className="block text-dark font-edgar uppercase tracking-wider text-sm mb-2">
                          Best Time to Contact
                        </label>
                        <select
                          id="contactTime"
                          name="contactTime"
                          value={formData.contactTime}
                          onChange={handleChange}
                          className="w-full p-3 bg-gray-50 border border-gray-200 text-dark
                                    focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition-all rounded-sm"
                        >
                          <option value="" className="text-dark">Select a time</option>
                          <option value="morning" className="text-dark">Morning (8AM-12PM)</option>
                          <option value="afternoon" className="text-dark">Afternoon (12PM-5PM)</option>
                          <option value="evening" className="text-dark">Evening (5PM-8PM)</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="description" className="block text-dark font-edgar uppercase tracking-wider text-sm mb-2">
                        Description <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        value={formData.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Please describe your electrical needs or questions..."
                        className={`w-full p-3 bg-gray-50 border ${touchedFields.description && errors.description ? 'border-red-400' : 'border-gray-200'} text-dark placeholder-gray-400
                                  focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition-all rounded-sm`}
                        aria-describedby={errors.description ? "description-error" : "char-count"}
                        aria-invalid={touchedFields.description && errors.description ? "true" : "false"}
                        maxLength={maxChars}
                        required
                      ></textarea>
                      <div className="flex justify-between items-center mt-1">
                        {touchedFields.description && errors.description ? (
                          <p id="description-error" className="text-red-500 text-sm font-semibold flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.description}
                          </p>
                        ) : (
                          <span></span>
                        )}
                        <p id="char-count" className={`text-xs ${charCount > maxChars * 0.9 ? 'text-red-500' : 'text-gray-500'}`}>
                          {charCount}/{maxChars} characters
                        </p>
                      </div>
                    </div>

                    {submitError && (
                      <div className="p-3 mb-6 bg-red-50 border border-red-300 text-red-700 rounded-sm" aria-live="assertive" role="alert">
                        <div className="flex items-center justify-center">
                          <AlertCircle className="w-5 h-5 mr-2 text-red-500" />
                          There was a problem submitting your form. Please try again.
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-accent hover:bg-accent/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white focus:outline-none
                                text-white py-4 px-8 rounded-sm font-edgar uppercase tracking-wider transition-all
                                ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
                    
                    <p className="text-gray-500 text-xs text-center mt-2">
                      Fields marked with <span className="text-red-500">*</span> are required
                    </p>
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