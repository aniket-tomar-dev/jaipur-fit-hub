import { Button } from "@/components/ui/button";
import { Check, Star, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "917568798310";

const plans = [
  {
    name: "Monthly",
    duration: "1 Month",
    price: "₹1,499",
    features: ["Full Gym Access", "Locker Facility", "Basic Training Support", "Flexible Timing"],
    popular: false,
  },
  {
    name: "Quarterly",
    duration: "3 Months",
    price: "₹3,999",
    features: ["Full Gym Access", "Locker Facility", "Personal Training (4 Sessions)", "Diet Consultation", "Flexible Timing"],
    popular: true,
  },
  {
    name: "Annual",
    duration: "12 Months",
    price: "₹12,999",
    features: ["Full Gym Access", "Locker Facility", "Personal Training (12 Sessions)", "Diet Consultation", "Priority Support", "Guest Passes (2)"],
    popular: false,
  },
];

export const MembershipPreview = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-form");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = (plan: string) => {
    const message = encodeURIComponent(`Hi, I am interested in the ${plan} membership plan. Please share more details.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Membership Plans
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Choose Your <span className="text-gradient-primary">Plan</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Flexible options designed to fit your goals and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/10 to-card border-primary shadow-lg shadow-primary/20"
                  : "bg-card border-border hover:border-primary/50 hover:shadow-primary/10"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
                    <Star className="h-3 w-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-display text-2xl text-foreground mb-1">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.duration}</p>
                <div className="mt-4">
                  <span className="font-display text-4xl md:text-5xl text-foreground">{plan.price}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-primary/20">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  className="w-full"
                  onClick={() => openWhatsApp(plan.name)}
                >
                  <MessageCircle className="h-4 w-4" />
                  Enquire on WhatsApp
                </Button>
                <Button variant="ghost" className="w-full text-muted-foreground" onClick={scrollToContact}>
                  Book Free Trial
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
