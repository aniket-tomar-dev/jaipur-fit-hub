import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    content: "Lost 15 kgs in 6 months! The trainers here really know what they're doing. Best gym in Mansarovar without a doubt.",
    rating: 5,
  },
  {
    name: "Priya Verma",
    role: "Fitness Enthusiast",
    content: "Clean environment, modern equipment, and supportive staff. Sky Fitness has completely transformed my fitness journey.",
    rating: 5,
  },
  {
    name: "Amit Singh",
    role: "Business Owner",
    content: "Flexible timings work perfect for my busy schedule. The personal training sessions are worth every rupee!",
    rating: 5,
  },
  {
    name: "Neha Agarwal",
    role: "Student",
    content: "As a beginner, I was nervous to join a gym. The trainers made me feel comfortable from day one. Highly recommend!",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            Success Stories
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            What Our <span className="text-gradient-primary">Members Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from real people in our fitness community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="p-6 md:p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground text-base leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-muted-foreground text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
