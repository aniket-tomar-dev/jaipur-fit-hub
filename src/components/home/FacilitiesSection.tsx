import strengthTrainingImg from "@/assets/strength-training.jpg";
import cardioZoneImg from "@/assets/cardio-zone.jpg";
import personalTrainingImg from "@/assets/personal-training.jpg";

const facilities = [
  {
    image: strengthTrainingImg,
    title: "Strength Training",
    description: "Heavy weights, power racks, and dedicated zones for serious lifters",
  },
  {
    image: cardioZoneImg,
    title: "Cardio Zone",
    description: "Treadmills, ellipticals, and cycling machines for heart-pumping sessions",
  },
  {
    image: personalTrainingImg,
    title: "Personal Training",
    description: "One-on-one coaching with certified trainers for faster results",
  },
];

export const FacilitiesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Our Facilities
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            World-Class <span className="text-gradient-primary">Equipment</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to achieve your fitness goals under one roof
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {facilities.map((facility, index) => (
            <div
              key={facility.title}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                  {facility.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
