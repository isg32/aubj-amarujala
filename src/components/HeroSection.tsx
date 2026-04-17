import heroImage from "@/assets/hero-banner.jpg";
import { Star } from "lucide-react";
import RegistrationForm from "./RegistrationForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Bhavishya Jyoti Samman Ceremony" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/50" />
      </div>

      <div className="container relative z-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Headline */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-accent" />
              <span className="text-sm font-body text-primary-foreground/90">Presented by Amar Ujala</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-2">
              Bhavishya Jyoti
            </h1>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-accent leading-tight mb-6">
              Samman 2026
            </h1>

            <p className="text-xl md:text-2xl font-heading italic text-primary-foreground/90 mb-4">
              Honoring Merit, Empowering Dreams!
            </p>
            <p className="text-base md:text-lg font-body text-primary-foreground/70 mb-2">
              A grand stage to celebrate the toppers of 10th & 12th Classes
            </p>
            <p className="text-base md:text-lg font-body text-primary-foreground/70">
              (UP Board • CBSE • ICSE)
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
