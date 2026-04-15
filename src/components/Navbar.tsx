import logo from "@/assets/aubj-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <img src={logo} alt="AUBJ Logo" className="h-10 w-10 object-contain" />
          <div>
            <p className="text-xs font-body font-medium text-primary-foreground/70 uppercase tracking-wider">Presented by Amar Ujala</p>
            <p className="text-sm font-heading font-bold text-primary-foreground">Bhavishya Jyoti Samman 2026</p>
          </div>
        </div>
        <a
          href="/register"
          className="gradient-cta text-primary-foreground font-body font-semibold px-6 py-2.5 rounded-full text-sm shadow-cta hover:opacity-90 transition-opacity"
        >
          Register Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
