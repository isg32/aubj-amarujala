import heroImage from "@/assets/hero-ceremony.jpg";
import { ChevronRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Bhavishya Jyoti Samman Ceremony" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm font-body text-primary-foreground/90">Presented by Amar Ujala</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-2">
            Bhavishya Jyoti
          </h1>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-accent leading-tight mb-6">
            Samman 2026
          </h1>

          <p className="text-xl md:text-2xl font-heading italic text-primary-foreground/90 mb-4">
            Honoring Merit, Empowering Dreams!
          </p>
          <p className="text-base md:text-lg font-body text-primary-foreground/70 mb-2">
            A grand stage to celebrate the toppers of 10th & 12th Classes
          </p>
          <p className="text-base md:text-lg font-body text-primary-foreground/70 mb-8">
            (UP Board • CBSE • ICSE)
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#register"
              className="gradient-cta inline-flex items-center gap-2 text-primary-foreground font-body font-semibold px-8 py-4 rounded-full text-lg shadow-cta hover:opacity-90 transition-opacity"
            >
              Register Now <ChevronRight className="w-5 h-5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground font-body font-medium px-8 py-4 rounded-full text-lg hover:bg-primary-foreground/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
