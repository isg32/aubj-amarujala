import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";
import { GraduationCap } from "lucide-react";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-secondary pt-24 pb-16">
        <div className="container max-w-2xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span className="text-sm font-body font-semibold text-primary">Student Registration</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-3">
              Register Now
            </h1>
            <p className="font-body text-foreground/70">
              Fill in your details below to register for Bhavishya Jyoti Samman 2026
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
