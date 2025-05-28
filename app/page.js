import ServicesSection from "./components/Services";
import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import WhyUsSection from "./components/WhyUs";
import GallerySection from "./components/Gallery";
import TestimonialsSection from "./components/Testimonials";
import ContactSection from "./components/Contact";
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
