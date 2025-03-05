import Image from "next/image";
import ServicesSection from "../components/Services";
import HeroSection from "../components/v2/Hero";
import FeaturesStrip from "../components/Features";
import AboutSection from "../components/About";
import WhyUsSection from "../components/WhyUs";
import GallerySection from "../components/v2/Gallery";
import NewsletterSection from "../components/Subscription";
import TestimonialsSection from "../components/Testimonials";
import ContactSection from "../components/v2/Contact";
import ServiceAreaSection from "../components/v2/Servicing";

export default function Home() {
  return (
    <div className="bg-white text-black mt-16">
        <HeroSection />
        <ServiceAreaSection />
        <GallerySection />  
        <ContactSection />
    </div>
  );
}
