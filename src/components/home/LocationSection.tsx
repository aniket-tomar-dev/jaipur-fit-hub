import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export const LocationSection = () => {
  const openMaps = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Metro+Pillar+No-01+Teja+Circle+ML+Tower+Mansarovar+Jaipur",
      "_blank",
    );
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Find Us
          </span>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Visit <span className="text-gradient-primary">Sky Fitness</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conveniently located near Metro Pillar No-01 in Mansarovar
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Map */}
          <div
            className="relative w-full overflow-hidden rounded-2xl border border-border 
                aspect-video sm:aspect-[4/3] lg:aspect-auto lg:h-full"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4232.18649652684!2d75.73685193569942!3d26.877127312673025!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db57775fe9a8b%3A0xf5a01442ac733f27!2sSky%20Fitness%20Jaipur!5e0!3m2!1sen!2sus!4v1770413363260!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sky Fitness Location"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Address
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Metro Pillar No-01, Teja Circle, 1st Floor, ML Tower,
                    <br />
                    Gopalpura Bypass Rd, near Drom Marble,
                    <br />
                    Mansarovar, Jaipur, Rajasthan – 302020
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a
                    href="tel:+917568798310"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 75687 98310
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Open Daily – Closes at 10:00 PM
                  </p>
                </div>
              </div>
            </div>

            <Button
              variant="hero"
              size="lg"
              onClick={openMaps}
              className="w-full sm:w-auto"
            >
              <Navigation className="h-5 w-5" />
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
