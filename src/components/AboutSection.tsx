import { Trophy, Medal, Users, Newspaper, GraduationCap, BookOpen, Mic, Award, Handshake, Camera } from "lucide-react";
import eventImage from "@/assets/aubj-event.avif";

const benefits = [
  { icon: Medal, text: "Medal of Excellence & Certificate of Merit" },
  { icon: Mic, text: "Career counseling sessions with IAS/IPS officers & renowned educationists" },
  { icon: GraduationCap, text: "Scholarship opportunities from partner universities & institutions" },
  { icon: Handshake, text: "Networking with toppers from across the state" },
  { icon: Camera, text: "Media coverage in Amar Ujala — India's leading Hindi daily" },
  { icon: Award, text: "Invitation to exclusive workshops, seminars & mentorship programs" },
];

const AboutSection = () => {
  return (
    <section className="py-14 sm:py-20 bg-secondary" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-body font-semibold text-primary uppercase tracking-widest mb-2">About the Initiative</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-3 sm:mb-4">
            A Legacy of Celebrating Merit
          </h2>
          <p className="max-w-2xl mx-auto font-body text-sm sm:text-base text-foreground/70 px-2">
            For years, Amar Ujala has stood at the forefront of honoring academic brilliance across North India.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-12 sm:mb-16">
          {/* Right on mobile - Event Image first for visual hook on small screens */}
          <div className="relative order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-card border border-border">
              <img
                src={eventImage}
                alt="Bhavishya Jyoti Samman Event"
                className="w-full h-[260px] sm:h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-primary text-primary-foreground rounded-xl px-4 py-2 sm:px-6 sm:py-3 shadow-cta">
              <p className="text-xl sm:text-2xl font-heading font-bold">55,000+</p>
              <p className="text-[10px] sm:text-xs font-body opacity-90">Students Honored</p>
            </div>
          </div>

          {/* Left - About text */}
          <div className="order-2 lg:order-1">
            <p className="font-body text-foreground/80 leading-relaxed mb-3 sm:mb-4 text-base sm:text-lg">
              <strong className="text-foreground">Amar Ujala Bhavishya Jyoti Vidyarthi Samman</strong> is one of the most
              prestigious student recognition programs in North India. Since its inception,
              it has celebrated the hard work and dedication of <strong className="text-foreground">thousands of meritorious
              students</strong> across Uttar Pradesh, Uttarakhand, Haryana, Himachal Pradesh,
              and Jammu & Kashmir.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed mb-3 sm:mb-4 text-base sm:text-lg">
              The ceremony felicitates toppers who have scored <strong className="text-foreground">70% and above</strong> in their
              10th and 12th board examinations. Distinguished guests including <strong className="text-foreground">IAS/IPS
              officers, renowned educationists, and community leaders</strong> grace the event to
              inspire the next generation of achievers.
            </p>
            <p className="font-body text-foreground/80 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
              More than just an award ceremony, Bhavishya Jyoti Samman is a <strong className="text-foreground">movement</strong> — 
              it sparks ambition, builds confidence, and connects young minds with mentors who 
              shape futures.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {["State Boards", "CBSE", "ICSE"].map((board) => (
                <span
                  key={board}
                  className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 sm:px-5 sm:py-2.5 font-body text-xs sm:text-sm font-medium text-foreground"
                >
                  <BookOpen className="w-4 h-4 text-primary" />
                  {board}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* What You Get - Scaled Up */}
        <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 shadow-card border border-border">
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-foreground">What You Get</h3>
          </div>
          <p className="font-body text-sm sm:text-base text-foreground/60 mb-8 sm:mb-10 max-w-xl">
            Every selected student receives a comprehensive recognition package designed to celebrate their achievement and fuel their future.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-3 sm:gap-4 bg-secondary/60 rounded-xl p-4 sm:p-5 border border-border/50 hover:border-primary/30 transition-colors">
                <span className="mt-0.5 w-9 h-9 sm:w-10 sm:h-10 rounded-lg gradient-cta flex-shrink-0 flex items-center justify-center shadow-sm">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </span>
                <span className="font-body text-sm sm:text-base text-foreground/80 leading-relaxed">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
