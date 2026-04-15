import { Trophy, Medal, Users, Newspaper, GraduationCap, BookOpen } from "lucide-react";

const benefits = [
  "Medal of Excellence & Certificate of Merit",
  "Career counseling from IAS/IPS officers",
  "Scholarship opportunities from partner universities",
  "Networking with toppers from across the state",
  "Media coverage in Amar Ujala newspaper",
  "Invitation to exclusive workshops & seminars",
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-secondary" id="about">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - About text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              About the Event
            </h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-4">
              <strong>Amar Ujala Bhavishya Jyoti Vidyarthi Samman</strong> is one of the most
              prestigious student recognition programs in North India. Since its inception,
              it has celebrated the hard work and dedication of thousands of meritorious
              students across Uttar Pradesh, Uttarakhand, Haryana, Himachal Pradesh,
              and Jammu & Kashmir.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed mb-8">
              The ceremony felicitates toppers who have scored 70% and above in their
              10th and 12th board examinations. Distinguished guests including IAS/IPS
              officers, renowned educationists, and community leaders grace the event to
              inspire the next generation.
            </p>

            <div className="flex flex-wrap gap-3">
              {["UP Board", "CBSE", "ICSE"].map((board) => (
                <span
                  key={board}
                  className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2.5 font-body text-sm font-medium text-foreground"
                >
                  <BookOpen className="w-4 h-4 text-primary" />
                  {board}
                </span>
              ))}
            </div>
          </div>

          {/* Right - What You Get card */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-7 h-7 text-accent" />
              <h3 className="text-2xl font-heading font-bold text-foreground">What You Get</h3>
            </div>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full gradient-cta flex-shrink-0 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-primary-foreground" />
                  </span>
                  <span className="font-body text-foreground/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
