"use client"

import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const ContactSection = () => {
  // Ref and inView for scroll animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
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
  
  // Form validation state
  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  
  // Character count for description
  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };
  
  const contactItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.15,
        ease: "easeOut"
      }
    })
  };
  
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
      
       if (!response.ok) throw new Error('Failed to submit');
      
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
    <section 
      ref={sectionRef}
      className="w-full bg-gradient-to-br from-accent/90 via-accent to-accent/90 relative overflow-hidden py-16" 
      id="contact"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric Patterns */}
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 transform rotate-45 bg-white/5"
          initial={{ rotate: 30, opacity: 0 }}
          animate={isInView ? { rotate: 45, opacity: 1 } : { rotate: 30, opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 transform -rotate-45 bg-white/5"
          initial={{ rotate: -30, opacity: 0 }}
          animate={isInView ? { rotate: -45, opacity: 1 } : { rotate: -30, opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
        
        {/* Dot Pattern */}
        <motion.div 
          className="absolute top-20 left-20 grid grid-cols-6 gap-4 transform -rotate-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {[...Array(24)].map((_, i) => (
            <motion.div 
              key={i} 
              className="w-2 h-2 bg-white/10 rounded-sm"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + (i * 0.02) }}
            ></motion.div>
          ))}
        </motion.div>
        
        {/* Angular Lines */}
        <div className="absolute bottom-20 right-20">
          {[...Array(3)].map((_, i) => (
            <motion.div 
              key={i} 
              className="w-16 h-[1px] bg-white/10 transform rotate-45 mb-4"
              style={{ marginLeft: `${i * 1}rem` }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + (i * 0.1) }}
            ></motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-white font-xoireqe text-5xl uppercase mb-8">
            Contact Us
          </h2>
          <motion.div 
            className="w-24 h-1 bg-primary mx-auto mb-8"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: "6rem", opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>  
          <p className="text-white/80 max-w-2xl mx-auto">
            Have questions or need a free estimate? Fill out the form below, and our team will get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column - Contact Info & Map */}
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Contact Information - Both Locations Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Florida Office */}
            <div className="space-y-6 text-white">
              <h3 className="font-edgar uppercase tracking-wider text-white/90 border-b border-white/20 pb-2 mb-2">Florida Office</h3>
              <motion.div 
                className="flex items-center gap-4"
                variants={contactItemVariants}
                custom={0}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-sm">
                  <MapPin className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <address className="text-white/80 not-italic my-auto">
                  1860 SW Fountainview Blvd, #1008<br />
                  Port St. Lucie, FL 34986
                </address>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4"
                variants={contactItemVariants}
                custom={1}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-sm">
                  <Phone className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <a href="tel:+19548689893" className="text-white/80 hover:text-white transition-colors my-auto" aria-label="Call our Florida office at (954) 868-9893">
                  (954) 868-9893
                </a>
              </motion.div>
            </div>

            {/* New York Office */}
            <div className="space-y-6 text-white">
              <h3 className="font-edgar uppercase tracking-wider text-white/90 border-b border-white/20 pb-2 mb-2">New York Office</h3>
              <motion.div 
                className="flex items-center gap-4"
                variants={contactItemVariants}
                custom={2}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-sm">
                  <MapPin className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <address className="text-white/80 not-italic my-auto">
                  767 Broadway #1413<br />
                  Manhattan, NY 10003
                </address>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4"
                variants={contactItemVariants}
                custom={3}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-sm">
                  <Phone className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <a href="tel:+15074488868" className="text-white/80 hover:text-white transition-colors my-auto" aria-label="Call our New York office at (507) 448-8868">
                  (507) 448-8868
                </a>
              </motion.div>
            </div>
          </div>
          
          {/* Email - Common for both offices */}
          <motion.div 
            className="flex items-center gap-4"
            variants={contactItemVariants}
            custom={4}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-sm">
              <Mail className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <div>
              <div className="font-edgar text-white/90 uppercase tracking-wider mb-1">Email</div>
              <a href="mailto:info@flexelectricfl.com" className="text-white/80 hover:text-white transition-colors" aria-label="Email us at info@flexelectricfl.com">
                info@flexelectricfl.com
              </a>
            </div>
          </motion.div>

          {/* Google Map - Florida office for now */}
          <motion.div 
            className="h-[300px] sm:h-[350px] md:h-[250px] lg:h-[300px] relative overflow-hidden rounded-sm mt-8"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.1071143457787!2d-80.39983978491936!3d27.650193982806277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88deeb0ee7d1ded3%3A0x8fc38a3f20345e3b!2s1860%20SW%20Fountainview%20Blvd%2C%20Port%20St.%20Lucie%2C%20FL%2034986!5e0!3m2!1sen!2sus!4v1656946565425!5m2!1sen!2sus" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-all duration-500 contrast-125"
              title="Flex Electric Florida location map"
              aria-label="Google Maps showing our Florida location"
            ></iframe>
          </motion.div>
        </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm p-8 rounded-sm border border-white/10 shadow-lg"
            variants={formVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {submitSuccess ? (
              <motion.div 
                className="text-white text-center p-8" 
                aria-live="polite"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2
                  }}
                >
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                </motion.div>
                <motion.h3 
                  className="text-2xl font-edgar mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  Thank You!
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  Your message has been sent successfully. We'll get back to you as soon as possible.
                </motion.p>
                <motion.button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-6 bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-sm transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-edgar uppercase tracking-wider text-sm mb-2">
                      Name <span className="text-yellow-300">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="John Doe"
                      className={`w-full p-3 bg-white/10 border ${touchedFields.name && errors.name ? 'border-yellow-300' : 'border-white/20'} text-white placeholder-white/60
                               focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition-all rounded-sm`}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-invalid={touchedFields.name && errors.name ? "true" : "false"}
                      required
                    />
                    {touchedFields.name && errors.name && (
                      <p id="name-error" className="mt-1 text-yellow-300 text-sm font-semibold flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-edgar uppercase tracking-wider text-sm mb-2">
                      Email <span className="text-yellow-300">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="your.email@example.com"
                      className={`w-full p-3 bg-white/10 border ${touchedFields.email && errors.email ? 'border-yellow-300' : 'border-white/20'} text-white placeholder-white/60
                               focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition-all rounded-sm`}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-invalid={touchedFields.email && errors.email ? "true" : "false"}
                      required
                    />
                    {touchedFields.email && errors.email && (
                      <p id="email-error" className="mt-1 text-yellow-300 text-sm font-semibold flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-white font-edgar uppercase tracking-wider text-sm mb-2">
                      Phone <span className="text-yellow-300">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="(123) 456-7890"
                      className={`w-full p-3 bg-white/10 border ${touchedFields.phone && errors.phone ? 'border-yellow-300' : 'border-white/20'} text-white placeholder-white/60
                               focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition-all rounded-sm`}
                      aria-describedby={errors.phone ? "phone-error" : "phone-hint"}
                      aria-invalid={touchedFields.phone && errors.phone ? "true" : "false"}
                      required
                    />
                    {touchedFields.phone && errors.phone ? (
                      <p id="phone-error" className="mt-1 text-yellow-300 text-sm font-semibold flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.phone}
                      </p>
                    ) : (
                      <p id="phone-hint" className="mt-1 text-white/60 text-xs">
                        Format: (123) 456-7890
                      </p>
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
                               focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition-all rounded-sm"
                    >
                      <option value="" className="text-dark">Select a time</option>
                      <option value="morning" className="text-dark">Morning (8AM-12PM)</option>
                      <option value="afternoon" className="text-dark">Afternoon (12PM-5PM)</option>
                      <option value="evening" className="text-dark">Evening (5PM-8PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-white font-edgar uppercase tracking-wider text-sm mb-2">
                    Description <span className="text-yellow-300">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Please describe your electrical needs or questions..."
                    className={`w-full p-3 bg-white/10 border ${touchedFields.description && errors.description ? 'border-yellow-300' : 'border-white/20'} text-white placeholder-white/60
                             focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition-all rounded-sm`}
                    aria-describedby={errors.description ? "description-error" : "char-count"}
                    aria-invalid={touchedFields.description && errors.description ? "true" : "false"}
                    maxLength={maxChars}
                    required
                  ></textarea>
                  <div className="flex justify-between items-center mt-1">
                    {touchedFields.description && errors.description ? (
                      <p id="description-error" className="text-yellow-300 text-sm font-semibold flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.description}
                      </p>
                    ) : (
                      <span></span>
                    )}
                    <p id="char-count" className={`text-xs ${charCount > maxChars * 0.9 ? 'text-yellow-300' : 'text-white/60'}`}>
                      {charCount}/{maxChars} characters
                    </p>
                  </div>
                </div>

                {submitError && (
                  <motion.div 
                    className="p-3 bg-yellow-500/20 border border-yellow-300 text-white text-center rounded-sm" 
                    aria-live="assertive"
                    role="alert"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 mr-2 text-yellow-300" />
                      There was a problem submitting your form. Please try again.
                    </div>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-white hover:bg-white/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-accent focus:outline-none
                           text-accent py-4 px-8 rounded-sm font-edgar uppercase tracking-wider transition-all
                           ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  whileHover={!isSubmitting ? { y: -3 } : {}}
                  whileTap={!isSubmitting ? { y: 0 } : {}}
                  transition={{ duration: 0.2 }}
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
                </motion.button>
                
                <p className="text-white/60 text-xs text-center">
                  Fields marked with <span className="text-yellow-300">*</span> are required
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;