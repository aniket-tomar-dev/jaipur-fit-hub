import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Target, Heart, Trophy, Users, MessageCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const WHATSAPP_NUMBER = "917568798310";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi, I am interested in joining your gym. Please share details.");

const values = [
  {
    icon: Target,
    title: "Focused Training",
    description: "Every workout is designed with purpose. We help you set clear goals and achieve them systematically.",
  },
  {
    icon: Heart,
    title: "Health First",
    description: "We prioritize your overall well-being, not just aesthetics. Sustainable fitness is our philosophy.",
  },
  {
    icon: Trophy,
    title: "Results Driven",
    description: "Our training programs are backed by proven methodologies that deliver measurable results.",
  },
  {
    icon: Users,
    title: "Community Spirit",
    description: "Join a supportive community of like-minded individuals pushing each other to be better.",
  },
];

const About = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>About Us | Sky Fitness Jaipur</title>
        <meta
          name="description"
          content="Learn about Sky Fitness Jaipur - our mission, values, and commitment to helping you achieve your fitness goals in Mansarovar."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Building <span className="text-gradient-primary">Stronger</span> Bodies,<br />
                <span className="text-gradient-primary">Stronger</span> Minds
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Sky Fitness Jaipur is more than just a gym – we're a community dedicated to transforming lives 
                through fitness, discipline, and unwavering support. Located in the heart of Mansarovar, 
                we've been helping Jaipur residents achieve their fitness goals since day one.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                  Our Mission
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                  Fitness <span className="text-gradient-primary">For Everyone</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We believe that everyone deserves access to quality fitness training, regardless of their 
                    experience level or background. Our mission is to create an inclusive environment where 
                    beginners feel welcome and athletes feel challenged.
                  </p>
                  <p>
                    With certified trainers, modern equipment, and a passion for helping others succeed, 
                    we're committed to being your partner in every step of your fitness journey.
                  </p>
                  <p>
                    At Sky Fitness, consistency beats perfection. We focus on building sustainable habits 
                    that last a lifetime, not quick fixes that fade away.
                  </p>
                </div>
                <Button variant="hero" size="lg" className="mt-8" onClick={openWhatsApp}>
                  <MessageCircle className="h-5 w-5" />
                  Join Our Community
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="font-display text-6xl text-primary">500+</span>
                  </div>
                  <p className="text-center text-muted-foreground text-sm">Active Members</p>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                    <span className="font-display text-6xl text-accent">5+</span>
                  </div>
                  <p className="text-center text-muted-foreground text-sm">Expert Trainers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                Our Values
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                What <span className="text-gradient-primary">Drives Us</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-primary">
                    <value.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
