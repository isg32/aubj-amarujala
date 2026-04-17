const stats = [
  { value: "55,000+", label: "Students Honored Since 2015" },
  { value: "100+", label: "Districts Covered" },
  { value: "500+", label: "Schools Participating" },
  { value: "50+", label: "Distinguished Guests" },
];

const StatsBar = () => {
  return (
    <section className="gradient-stats py-8 sm:py-10">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center animate-count-up">
            <p className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-accent mb-1">{stat.value}</p>
            <p className="text-xs sm:text-sm font-body text-primary-foreground/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
