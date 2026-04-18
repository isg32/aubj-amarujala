import logo from "@/assets/aubj-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground pt-14 pb-6">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="AUBJ Logo" className="h-14 w-14 object-contain mb-4" loading="lazy" />
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              Bhavishya Jyoti Samman is a flagship initiative by Amar
              Ujala to recognize and celebrate academic excellence
              among students of Class 10th & 12th.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5 font-body text-sm">
              {[
                { label: "Why Attend?", href: "/#why-attend" },
                { label: "About the Event", href: "/#about" },
                { label: "Eligibility", href: "/#eligibility" },
                { label: "Register Now", href: "/register" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-2.5 font-body text-sm text-primary-foreground/70">
              <li>
                Contact:{" "}
                <a href="tel:18001211166" className="hover:text-accent transition-colors">
                  1800 121 1166
                </a>
              </li>
              <li>
                Email:{" "}
                <a href="mailto:events@bs.amarujala.com" className="hover:text-accent transition-colors">
                  events@bs.amarujala.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs font-body text-primary-foreground/50">
            © 2026 Amar Ujala. All rights reserved.
          </p>
          <p className="text-xs font-body text-primary-foreground/50">
            Presented by <span className="text-primary-foreground/70">Amar Ujala</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
