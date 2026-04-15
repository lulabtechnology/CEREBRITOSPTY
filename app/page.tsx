import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import MethodSection from "@/components/MethodSection";
import PlayLearningSection from "@/components/PlayLearningSection";
import TeamSection from "@/components/TeamSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Preloader />
      <Header />
      <Hero />
      <TrustSection />
      <ServicesSection />
      <MethodSection />
      <PlayLearningSection />
      <TeamSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
