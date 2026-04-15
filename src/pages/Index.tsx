import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import WhyAttend from "@/components/WhyAttend";
import AboutSection from "@/components/AboutSection";
import EligibilitySection from "@/components/EligibilitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <WhyAttend />
      <AboutSection />
      <EligibilitySection />
      <Footer />
    </div>
  );
};

export default Index;
