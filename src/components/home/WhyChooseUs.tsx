import { Dumbbell, Shield, Users, IndianRupee } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    description: "State-of-the-art machines and free weights for every fitness level",
  },
  {
    icon: Users,
    title: "Certified Trainers",
    description: "Expert coaches to guide your fitness journey with personalized plans",
  },
  {
    icon: Shield,
    title: "Clean & Safe",
    description: "Sanitized equipment and a hygienic environment for worry-free workouts",
  },
  {
    icon: IndianRupee,
    title: "Affordable Plans",
    description: "Flexible membership options designed to fit every budget",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            The Sky Fitness <span className="text-gradient-primary">Difference</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're not just a gym. We're your partner in transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-5 inline-flex p-4 rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl md:text-2xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
