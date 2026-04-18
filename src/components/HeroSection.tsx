import heroImage from "@/assets/hero-banner.jpg";
import aubjLogo from "@/assets/aubj-logo.png";
import { Star } from "lucide-react";
import RegistrationForm from "./RegistrationForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Bhavishya Jyoti Samman Ceremony" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/50" />
      </div>

      <div className="container relative z-10 pt-24 sm:pt-28 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left: Headline */}
          <div className="max-w-2xl text-center lg:text-left">
            <img
              src={aubjLogo}
              alt="AUBJ Logo"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain mb-4 sm:mb-6 mx-auto lg:mx-0"
            />
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
              <span className="text-xs sm:text-sm font-body text-primary-foreground/90">Presented by Amar Ujala</span>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl font-heading italic text-primary-foreground/90 mb-3 sm:mb-4">
              Honoring Merit, Empowering Dreams!
            </p>
            <p className="text-sm sm:text-base md:text-lg font-body text-primary-foreground/70 mb-1 sm:mb-2">
              A grand stage to celebrate the toppers of 10th & 12th Classes
            </p>
            <p className="text-sm sm:text-base md:text-lg font-body text-primary-foreground/70">
              (State Boards • CBSE • ICSE)
            </p>
          </div>

          {/* Right: Form */}
          <div className="lg:justify-self-end w-full max-w-md mx-auto lg:mx-0">
            <RegistrationForm variant="compact" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
