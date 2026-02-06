import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MessageCircle, Dumbbell, Heart, Target, Users, Zap, Scale } from "lucide-react";
import { Helmet } from "react-helmet-async";
import strengthTrainingImg from "@/assets/strength-training.jpg";
import cardioZoneImg from "@/assets/cardio-zone.jpg";
import personalTrainingImg from "@/assets/personal-training.jpg";

const WHATSAPP_NUMBER = "917568798310";

const services = [
  {
    icon: Dumbbell,
    image: strengthTrainingImg,
    title: "Strength Training",
    description: "Build muscle, increase strength, and transform your physique with our comprehensive strength training programs.",
    benefits: ["Free weights & machines", "Progressive overload programs", "Form correction", "Muscle building focus"],
  },
  {
    icon: Heart,
    image: cardioZoneImg,
    title: "Cardio Workouts",
    description: "Improve your cardiovascular health and burn calories with our state-of-the-art cardio equipment.",
    benefits: ["Treadmills & ellipticals", "Cycling machines", "HIIT sessions", "Heart rate monitoring"],
  },
  {
    icon: Target,
    image: personalTrainingImg,
    title: "Personal Training",
    description: "Get personalized attention and customized workout plans designed specifically for your goals.",
    benefits: ["1-on-1 coaching", "Custom workout plans", "Nutrition guidance", "Faster results"],
  },
  {
    icon: Scale,
    title: "Weight Loss Programs",
    description: "Structured programs combining cardio, strength, and nutrition for effective, sustainable weight loss.",
    benefits: ["Calorie burn optimization", "Metabolic boosting", "Progress tracking", "Diet consultation"],
  },
  {
    icon: Zap,
    title: "Muscle Building",
    description: "Specialized programs for those looking to pack on lean muscle mass and achieve a powerful physique.",
    benefits: ["Hypertrophy training", "Supplement advice", "Recovery protocols", "Body composition analysis"],
  },
  {
    icon: Users,
    title: "Group Workouts",
    description: "High-energy group sessions that make fitness fun while pushing you to your limits.",
    benefits: ["Motivating atmosphere", "Community support", "Varied routines", "All fitness levels"],
  },
];

const Services = () => {
  const openWhatsApp = (service: string) => {
    const message = encodeURIComponent(`Hi, I am interested in ${service}. Please share more details.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Services & Facilities | Sky Fitness Jaipur</title>
        <meta
          name="description"
          content="Explore our fitness services - strength training, cardio, personal training, weight loss programs, and more at Sky Fitness Jaipur."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Everything You Need To <span className="text-gradient-primary">Succeed</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From strength training to personal coaching, we offer comprehensive fitness services 
                designed to help you achieve your goals faster and more effectively.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="group rounded-2xl bg-card border border-border hover:border-primary/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {service.image && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  )}
                  <div className="p-6 md:p-8">
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-primary">
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-2xl text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full" onClick={() => openWhatsApp(service.title)}>
                      <MessageCircle className="h-4 w-4" />
                      Enquire Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
