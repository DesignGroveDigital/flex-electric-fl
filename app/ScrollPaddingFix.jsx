'use client';

import { useEffect } from 'react';

export default function ScrollPaddingFix() {
  useEffect(() => {
    // Add scroll-padding-top to html element to account for fixed navigation
    // Adjust the value (112px) based on your actual navbar height
    document.documentElement.style.setProperty('scroll-padding-top', '112px');
    
    // Optional: Handle direct anchor links when page loads
    if (window.location.hash) {
      // Wait a moment for page to fully render
      setTimeout(() => {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
    
    return () => {
      // Clean up when component unmounts
      document.documentElement.style.removeProperty('scroll-padding-top');
    };
  }, []);
  
  return null; // This component doesn't render anything
}