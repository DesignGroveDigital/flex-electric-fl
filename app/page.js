import Image from "next/image";
import DesignSystem from "./components/Design";
import ServicesSection from "./components/Services";
import HeroSection from "./components/Hero";
import FeaturesStrip from "./components/Features";
import AboutSection from "./components/About";
import WhyUsSection from "./components/WhyUs";
import GallerySection from "./components/Gallery";
import NewsletterSection from "./components/Subscription";
import TestimonialsSection from "./components/Testimonials";
import ContactSection from "./components/Contact";
import ServiceAreaSection from "./components/v2/Servicing";

export default function Home() {
  return (
    <div className="bg-white text-black mt-16">
      <HeroSection />
      <FeaturesStrip />
      <ServicesSection />
      <ServiceAreaSection />
      <AboutSection />
      <WhyUsSection />
      <GallerySection />
      <TestimonialsSection  />
      <ContactSection />
    </div>
  );
}
