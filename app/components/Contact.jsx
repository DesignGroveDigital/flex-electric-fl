"use client"

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactSection = () => {
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
    <section className="w-full bg-gradient-to-br from-accent/90 via-accent to-accent/90 relative overflow-hidden py-16" id="contact">
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
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>  
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info & Map */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-white/10">
                  <MapPin className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-edgar uppercase tracking-wider mb-1">Address</div>
                  <address className="text-white/80 not-italic">
                  1860 SW Fountainview Blvd, #1008<br />
                    Port St. Lucie, FL 34986
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-white/10">
                  <Phone className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-edgar uppercase tracking-wider mb-1">Phone</div>
                  <a href="tel:+19548689893" className="text-white/80 hover:text-white transition-colors" aria-label="Call us at (954) 868-9893">
                    (954) 868-9893
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-white/10">
                  <Mail className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-edgar uppercase tracking-wider mb-1">Email</div>
                  <a href="mailto:flexelectric.fl@gmail.com" className="text-white/80 hover:text-white transition-colors" aria-label="Email us at flexelectric.fl@gmail.com">
                    info@flexelectricfl.com
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-[300px] sm:h-[350px] md:h-[250px] lg:h-[300px] relative overflow-hidden rounded-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.1071143457787!2d-80.39983978491936!3d27.650193982806277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88deeb0ee7d1ded3%3A0x8fc38a3f20345e3b!2s1860%20SW%20Fountainview%20Blvd%2C%20Port%20St.%20Lucie%2C%20FL%2034986!5e0!3m2!1sen!2sus!4v1656946565425!5m2!1sen!2sus" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125"
                title="Flex Electric location map"
                aria-label="Google Maps showing our location"
              ></iframe>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-sm">
            {submitSuccess ? (
              <div className="text-white text-center p-8">
                <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <h3 className="text-2xl font-edgar mb-2">Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid md:grid-cols-2 gap-6">
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

                <div className="grid md:grid-cols-2 gap-6">
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

                <div>
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
                  <div className="p-3 bg-yellow-500/20 border border-yellow-300 text-white text-center rounded-sm">
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;