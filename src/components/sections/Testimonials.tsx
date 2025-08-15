import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const Testimonials = () => {
  const plugin = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true })
  );

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner, Croydon",
      content: "The remote-controlled mower was incredible! Perfect for our sloped garden where it's normally difficult to cut grass safely. Professional service from start to finish.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Mark Thompson",
      role: "Landscape Contractor",
      content: "Bashee Gardens has become our go-to for equipment hire. Their ride-on tractors are well-maintained and the delivery service is always on time. Highly recommend!",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Emma Davis",
      role: "School Facilities Manager",
      content: "We've used their garden clearance service multiple times for our school grounds. The team is professional, insured, and always leaves the area spotless.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Council Parks Department",
      role: "Sutton Council",
      content: "Reliable partner for our parks maintenance. Their professional operators and modern equipment help us maintain high standards across all our green spaces.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "James Wilson",
      role: "Estate Manager",
      content: "Managing multiple properties is much easier with Bashee Gardens. Their hedge trimmers and strimmers are always in excellent condition, and their advice is invaluable.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Lisa Chen",
      role: "Property Developer",
      content: "Fast, efficient service that fits our tight project schedules. The quality of their equipment and the expertise of their team consistently exceeds expectations.",
      rating: 5,
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="section-padding bg-muted/20">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-section mb-6">
            What Our Customers Say
          </h2>
          <p className="text-body text-muted-foreground">
            Don't just take our word for it. See what homeowners, professionals, and local councils 
            say about our equipment and service.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-1">
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, slideIndex) => (
              <CarouselItem key={slideIndex} className="pl-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {testimonials.slice(slideIndex * 3, (slideIndex + 1) * 3).map((testimonial, index) => (
                    <div
                      key={slideIndex * 3 + index}
                      className="card-elegant p-6 hover:-translate-y-1 transition-all duration-300"
                    >
                      {/* Quote Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <Quote className="h-8 w-8 text-primary/30" />
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, starIndex) => (
                            <Star
                              key={starIndex}
                              className="h-4 w-4 fill-current text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Content */}
                      <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                          <span className="text-primary-foreground font-semibold text-sm">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>

        {/* Trust Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-primary/10 to-accent/10 px-8 py-4 rounded-full">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="h-5 w-5 fill-current text-yellow-400"
                />
              ))}
            </div>
            <div className="text-foreground font-semibold">5.0 Stars</div>
            <div className="text-muted-foreground">from 200+ reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;