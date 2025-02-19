import React from 'react';
import Image from 'next/image';

const NewsletterSection = () => {
  return (
    <section className="w-full relative h-[400px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero_image.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/85" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 transform rotate-45" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 transform -rotate-45" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 
                    flex flex-col items-center justify-center text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-white font-xoireqe text-4xl uppercase">
            Stay Connected
          </h2>
          
          <p className="text-white/90 text-lg">
            Subscribe to our newsletter for electrical tips, special offers, and industry insights.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 w-full max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 text-white placeholder-white/60
                       focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-accent hover:bg-accent/90 text-white uppercase font-edgar 
                       tracking-wider transition-colors flex items-center justify-center group"
            >
              Subscribe
              <div className="ml-3 w-6 h-[2px] bg-white transform transition-all duration-300
                            group-hover:w-8 group-hover:translate-x-1" />
            </button>
          </form>

          <p className="text-white/60 text-sm">
            By subscribing, you agree to receive our marketing emails. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;