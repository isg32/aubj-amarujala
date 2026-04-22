import logo from "@/assets/amar-ujala-logo.png";

const Navbar = () => {
  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between py-2.5 sm:py-3 gap-3">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <img src={logo} alt="Amar Ujala Logo" className="h-9 sm:h-11 w-auto object-contain flex-shrink-0" />
          <div className="min-w-0">
            <p className="hidden sm:block text-[10px] font-body font-medium text-foreground/60 uppercase tracking-wider">Presented by Amar Ujala</p>
            <p className="text-xs sm:text-sm font-heading font-bold text-foreground truncate">Bhavishya Jyoti 2026</p>
          </div>
        </div>
        <button
          onClick={scrollToHero}
          className="gradient-cta text-primary-foreground font-body font-semibold px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm shadow-cta hover:opacity-90 transition-opacity flex-shrink-0"
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
