import Image from "next/image";
import ServicesSection from "./components/Services";
import HeroSection from "./components/Hero";
import FeaturesStrip from "./components/Features";
import AboutSection from "./components/About";
import WhyUsSection from "./components/WhyUs";
import GallerySection from "./components/Gallery";
import TestimonialsSection from "./components/Testimonials";
import ContactSection from "./components/Contact";
import HeroSectionStates from "./components/Hero-states";
import ProccessTransitionSection from "./components/ProcessVideo";

export default function Home() {
  return (
    <div className="bg-dark text-black overflow-x-hidden">
      <HeroSection />
      {/*<HeroSectionStates />*/}
      <ServicesSection />
      <AboutSection />
      <ProccessTransitionSection />
      <WhyUsSection />
      <GallerySection />
      <TestimonialsSection  />
      <ContactSection />
    </div>
  );
}
