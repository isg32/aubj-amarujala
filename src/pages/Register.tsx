import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import { GraduationCap } from "lucide-react";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-secondary pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="container max-w-2xl">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-3 sm:mb-4">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-xs sm:text-sm font-body font-semibold text-primary">Student Registration</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-2 sm:mb-3">
              Register Now
            </h1>
            <p className="text-sm sm:text-base font-body text-foreground/70 px-2">
              Fill in your details below to register for Bhavishya Jyoti 2026
            </p>
          </div>

          <RegistrationForm variant="card" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
