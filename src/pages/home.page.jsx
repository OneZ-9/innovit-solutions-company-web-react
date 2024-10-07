import CTASection from "@/components/sections/CTASection";
import AboutSection from "../components/sections/AboutSection";
import BlogsSection from "../components/sections/BlogsSection";
import Hero from "@/components/sections/Hero";
import ServicesSection from "../components/sections/ServicesSection";
import ScrollToSection from "@/components/sections/ScrollToSection";

function HomePage() {
  return (
    <>
      <ScrollToSection />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <BlogsSection />
      <CTASection />
    </>
  );
}

export default HomePage;
