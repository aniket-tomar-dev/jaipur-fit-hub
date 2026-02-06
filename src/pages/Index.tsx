import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FacilitiesSection } from "@/components/home/FacilitiesSection";
import { MembershipPreview } from "@/components/home/MembershipPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { LocationSection } from "@/components/home/LocationSection";
import { ContactFormSection } from "@/components/home/ContactFormSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sky Fitness Jaipur | Premium Gym in Mansarovar</title>
        <meta
          name="description"
          content="Transform your body at Sky Fitness Jaipur. Modern equipment, certified trainers, and affordable memberships in Mansarovar. Book your free trial today!"
        />
        <meta name="keywords" content="gym jaipur, fitness center mansarovar, sky fitness, personal training jaipur, weight training, cardio" />
        <link rel="canonical" href="https://skyfitnessjaipur.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Gym",
            name: "Sky Fitness Jaipur",
            description: "Premium Fitness & Wellness Center in Mansarovar, Jaipur",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Metro Pillar No-01, Teja Circle, 1st Floor, ML Tower, Gopalpura Bypass Rd",
              addressLocality: "Mansarovar",
              addressRegion: "Rajasthan",
              postalCode: "302020",
              addressCountry: "IN",
            },
            telephone: "+91-7568798310",
            openingHours: "Mo-Su 06:00-22:00",
            priceRange: "₹₹",
            image: "https://skyfitnessjaipur.com/og-image.jpg",
          })}
        </script>
      </Helmet>
      <Layout>
        <HeroSection />
        <WhyChooseUs />
        <FacilitiesSection />
        <MembershipPreview />
        <TestimonialsSection />
        <LocationSection />
        <ContactFormSection />
      </Layout>
    </>
  );
};

export default Index;
