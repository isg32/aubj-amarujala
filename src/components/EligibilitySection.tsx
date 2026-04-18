import { ChevronRight } from "lucide-react";

const EligibilitySection = () => {
  return (
    <section className="py-14 sm:py-20 bg-background" id="eligibility">
      <div className="container text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6">
          Eligibility Criteria
        </h2>
        <p className="text-base sm:text-lg font-body text-muted-foreground mb-8 sm:mb-10 leading-relaxed">
          Students who have scored <strong className="text-foreground">70% or above</strong> in their Class 10th or 12th Board
          Examinations (2026) from State Boards, CBSE, or ICSE are eligible.
        </p>
        <a
          href="/register"
          className="gradient-cta inline-flex items-center gap-2 text-primary-foreground font-body font-semibold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-base sm:text-lg shadow-cta hover:opacity-90 transition-opacity"
        >
          Register Now <ChevronRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default EligibilitySection;
