import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(15, "Phone number is too long"),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

export const ContactFormSection = () => {
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

    // Simulate form submission (replace with actual form service like Web3Forms, Formspree, etc.)
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

  return (
    <section id="contact-form" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              Book Your Free Trial
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Start Your <span className="text-gradient-primary">Journey</span>
            </h2>
            <p className="text-muted-foreground">
              Fill out the form and we'll contact you within 24 hours
            </p>
          </div>

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
                  Book Free Trial
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
