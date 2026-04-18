import aubjLogo from "@/assets/aubj-logo.png";
import { Star } from "lucide-react";
import RegistrationForm from "./RegistrationForm";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-[hsl(35_15%_92%)]"
      style={{
        backgroundImage:
          "radial-gradient(hsl(0 0% 0% / 0.04) 1px, transparent 1px), radial-gradient(hsl(0 0% 0% / 0.03) 1px, transparent 1px)",
        backgroundSize: "18px 18px, 32px 32px",
        backgroundPosition: "0 0, 9px 16px",
      }}
    >
      <div className="container relative z-10 pt-24 sm:pt-28 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left: Headline */}
          <div className="max-w-2xl text-center lg:text-left">
            <img
              src={aubjLogo}
              alt="AUBJ Logo"
              className="h-28 sm:h-36 md:h-44 lg:h-52 w-auto object-contain mb-4 sm:mb-6 mx-auto lg:mx-0"
            />
            <div className="inline-flex items-center gap-2 bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
              <span className="text-xs sm:text-sm font-body text-foreground/80">Presented by Amar Ujala</span>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl font-heading italic text-foreground/90 mb-3 sm:mb-4">
              Honoring Merit, Empowering Dreams!
            </p>
            <p className="text-sm sm:text-base md:text-lg font-body text-foreground/70 mb-1 sm:mb-2">
              A grand stage to celebrate the toppers of 10th & 12th Classes
            </p>
            <p className="text-sm sm:text-base md:text-lg font-body text-foreground/70">
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
