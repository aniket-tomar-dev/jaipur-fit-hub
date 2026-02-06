import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { z } from "zod";

const WHATSAPP_NUMBER = "917568798310";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi, I am interested in joining your gym. Please share details.");

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(15, "Phone number is too long"),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", phone: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Sky Fitness Jaipur</title>
        <meta
          name="description"
          content="Contact Sky Fitness Jaipur. Visit us at Metro Pillar No-01, Mansarovar or call +91 75687 98310. Book your free trial today!"
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                Contact Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Let's Start Your <span className="text-gradient-primary">Journey</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Have questions? We're here to help. Reach out via phone, WhatsApp, or fill out the form below.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-3xl text-foreground mb-6">Get In Touch</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Visit our gym for a tour, or reach out via phone or WhatsApp. We're excited to help you 
                    start your fitness journey!
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="p-3 rounded-lg bg-gradient-primary">
                      <MapPin className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Metro Pillar No-01, Teja Circle, 1st Floor, ML Tower,<br />
                        Gopalpura Bypass Rd, near Drom Marble,<br />
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
                      <a href="tel:+917568798310" className="text-muted-foreground hover:text-primary transition-colors">
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

                <Button variant="whatsapp" size="lg" onClick={openWhatsApp}>
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </Button>

                {/* Map */}
                <div className="aspect-video rounded-2xl overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.8489168619847!2d75.7673!3d26.8649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUxJzUzLjYiTiA3NcKwNDYnMDIuMyJF!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sky Fitness Location"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div id="contact-form" className="p-8 md:p-10 rounded-2xl bg-card border border-border">
                <h2 className="font-display text-3xl text-foreground mb-2">Book Your Free Trial</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form and we'll contact you within 24 hours
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      className={`h-12 bg-background border-border ${errors.name ? "border-destructive" : ""}`}
                    />
                    {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`h-12 bg-background border-border ${errors.phone ? "border-destructive" : ""}`}
                    />
                    {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Message (Optional)"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`bg-background border-border resize-none ${errors.message ? "border-destructive" : ""}`}
                    />
                    {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                  </div>

                  <Button type="submit" variant="hero" size="xl" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : isSuccess ? (
                      <>
                        <CheckCircle className="h-5 w-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
