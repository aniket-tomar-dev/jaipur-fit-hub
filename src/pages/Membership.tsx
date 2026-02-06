import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, Star, MessageCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";

const WHATSAPP_NUMBER = "917568798310";

const plans = [
  {
    name: "Monthly",
    duration: "1 Month",
    price: "₹1,499",
    perMonth: "₹1,499/mo",
    features: [
      "Full Gym Access",
      "Locker Facility",
      "Basic Training Support",
      "Flexible Timing",
      "Clean & Sanitized Equipment",
    ],
    popular: false,
  },
  {
    name: "Quarterly",
    duration: "3 Months",
    price: "₹3,999",
    perMonth: "₹1,333/mo",
    features: [
      "Full Gym Access",
      "Locker Facility",
      "Personal Training (4 Sessions)",
      "Diet Consultation",
      "Flexible Timing",
      "Body Composition Analysis",
      "Progress Tracking",
    ],
    popular: true,
  },
  {
    name: "Half-Yearly",
    duration: "6 Months",
    price: "₹6,999",
    perMonth: "₹1,166/mo",
    features: [
      "Full Gym Access",
      "Locker Facility",
      "Personal Training (8 Sessions)",
      "Diet Consultation",
      "Flexible Timing",
      "Body Composition Analysis",
      "Progress Tracking",
      "Priority Support",
    ],
    popular: false,
  },
  {
    name: "Annual",
    duration: "12 Months",
    price: "₹12,999",
    perMonth: "₹1,083/mo",
    features: [
      "Full Gym Access",
      "Locker Facility",
      "Personal Training (12 Sessions)",
      "Diet Consultation",
      "Flexible Timing",
      "Body Composition Analysis",
      "Progress Tracking",
      "Priority Support",
      "Guest Passes (2)",
      "Exclusive Member Events",
    ],
    popular: false,
  },
];

const Membership = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact-form";
    }
  };

  const openWhatsApp = (plan: string) => {
    const message = encodeURIComponent(`Hi, I am interested in the ${plan} membership plan. Please share more details.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Membership Plans | Sky Fitness Jaipur</title>
        <meta
          name="description"
          content="Affordable gym membership plans at Sky Fitness Jaipur. Monthly, quarterly, and annual options with personal training and more."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                Membership Plans
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Invest In Your <span className="text-gradient-primary">Health</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Choose the plan that fits your goals and budget. All plans include full access to our 
                state-of-the-art facilities and equipment.
              </p>
            </div>
          </div>
        </section>

        {/* Plans Grid */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                    plan.popular
                      ? "bg-gradient-to-b from-primary/10 to-card border-primary shadow-lg shadow-primary/20 scale-105"
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
                    <p className="text-muted-foreground text-sm mt-1">{plan.perMonth}</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="p-1 rounded-full bg-primary/20 flex-shrink-0">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3 mt-auto">
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

            {/* Note */}
            <div className="mt-12 text-center">
              <p className="text-muted-foreground text-sm">
                All prices are inclusive of GST. Personal training sessions are subject to trainer availability.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Membership;
