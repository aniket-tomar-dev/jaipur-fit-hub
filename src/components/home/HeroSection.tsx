import { Button } from "@/components/ui/button";
import { ChevronDown, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-gym.jpg";

const WHATSAPP_NUMBER = "917568798310";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi, I am interested in joining your gym. Please share details.");

export const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-form");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sky Fitness Gym Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="space-y-6 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold tracking-wider uppercase border border-primary/30">
              Premium Fitness Center • Mansarovar, Jaipur
            </span>
            
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-[0.9]">
              Transform<br />
              <span className="text-gradient-primary">Your Body.</span><br />
              Build Your<br />
              <span className="text-gradient-primary">Strength.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Professional training. Modern equipment. Real results. Join Jaipur's premium fitness destination and unlock your true potential.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="xl" onClick={scrollToContact}>
                Book a Free Trial
              </Button>
              <Button variant="whatsapp" size="xl" onClick={openWhatsApp}>
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </div>
    </section>
  );
};
