import { Award, GraduationCap, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Recognition",
    desc: "Get honored with Medals and Certificates of Excellence for your academic achievements.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship",
    desc: "Gain career guidance from top Educationists and IAS/IPS Officers who have shaped the nation.",
  },
  {
    icon: Rocket,
    title: "Future Growth",
    desc: "Connect with leading institutions like Mangalayatan University & Future University.",
  },
  {
    icon: Users,
    title: "Motivation",
    desc: "Join a community of high-achievers and get inspired to aim even higher in life.",
  },
];

const WhyAttend = () => {
  return (
    <section className="py-14 sm:py-20 bg-background" id="why-attend">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-center text-foreground mb-2 sm:mb-3">
          Why Attend?
        </h2>
        <p className="text-center text-sm sm:text-base text-muted-foreground font-body mb-8 sm:mb-12">
          Key Highlights of the Ceremony
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-xl p-5 sm:p-6 shadow-card border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl gradient-cta flex items-center justify-center mb-4 sm:mb-5">
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
              </div>
              <h3 className="text-base sm:text-lg font-heading font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
