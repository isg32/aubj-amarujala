import aubjLogo from "@/assets/aubj-logo.png";
import { Star } from "lucide-react";
import RegistrationForm from "./RegistrationForm";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[hsl(30_30%_94%)]">
      {/* Grainy gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 75% 15%, hsl(28 80% 88%) 0%, transparent 55%), radial-gradient(ellipse 70% 70% at 20% 90%, hsl(250 60% 88%) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 90% 80%, hsl(15 75% 86%) 0%, transparent 50%), linear-gradient(135deg, hsl(35 35% 95%) 0%, hsl(250 30% 92%) 100%)",
        }}
      />
      {/* Grain overlay via SVG noise */}
      <div
        className="absolute inset-0 opacity-[0.35] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
      {/* Gridlines overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(0 0% 0% / 0.06) 1px, transparent 1px), linear-gradient(to bottom, hsl(0 0% 0% / 0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="container relative z-10 pt-24 sm:pt-28 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left: Headline */}
          <div className="max-w-2xl text-center lg:text-left">
            <img
              src={aubjLogo}
              alt="AUBJ Logo"
              className="h-28 sm:h-36 md:h-44 lg:h-52 w-auto object-contain mb-4 sm:mb-6 mx-auto lg:mx-0"
            />
            <div className="inline-flex items-center gap-2 bg-background/70 backdrop-blur-md border border-foreground/15 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 shadow-sm">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
              <span className="text-xs sm:text-sm font-body font-medium text-foreground">Presented by Amar Ujala</span>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl font-heading italic text-foreground mb-3 sm:mb-4 font-semibold drop-shadow-sm">
              Honoring Merit, Empowering Dreams!
            </p>
            <p className="text-sm sm:text-base md:text-lg font-body text-foreground/85 mb-1 sm:mb-2 font-medium">
              A grand stage to celebrate the toppers of 10th & 12th Classes
            </p>
            <p className="text-sm sm:text-base md:text-lg font-body text-foreground/85 font-medium">
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
