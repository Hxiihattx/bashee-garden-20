import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      location: "Croydon",
      content: "The remote-controlled mower was absolutely incredible! We have a sloped garden where it's normally quite dangerous to cut the grass with a regular mower. The remote mower handled it perfectly and gave us a professional finish. The team was helpful throughout the entire hire period.",
      rating: 5,
      project: "Garden Maintenance",
      image: "/placeholder.svg"
    },
    {
      name: "Mark Thompson",
      role: "Landscape Contractor",
      location: "Bromley",
      content: "Bashee Gardens has become our go-to supplier for equipment hire. Their ride-on tractors are always well-maintained, and the delivery service is consistently on time. The professional support and competitive pricing make them our preferred partner for projects across South London.",
      rating: 5,
      project: "Commercial Landscaping",
      image: "/placeholder.svg"
    },
    {
      name: "Emma Davis",
      role: "School Facilities Manager",
      location: "Sutton",
      content: "We've used their garden clearance service multiple times for our school grounds. The team is professional, fully insured, and always leaves the area spotless. Parents and staff have commented on how well-maintained our outdoor spaces look since we started using Bashee Gardens.",
      rating: 5,
      project: "School Grounds Maintenance",
      image: "/placeholder.svg"
    },
    {
      name: "David Wilson",
      role: "Council Parks Department",
      location: "Sutton Council",
      content: "As a council department, we need reliable partners who understand the importance of safety and professionalism. Bashee Gardens delivers on both fronts. Their modern equipment and trained operators help us maintain high standards across all our green spaces.",
      rating: 5,
      project: "Public Parks Maintenance",
      image: "/placeholder.svg"
    },
    {
      name: "James Wilson",
      role: "Estate Manager",
      location: "Kingston",
      content: "Managing multiple properties is much easier with Bashee Gardens as our equipment partner. Their hedge trimmers and strimmers are always in excellent condition, and their expert advice helps us tackle challenging maintenance tasks efficiently.",
      rating: 5,
      project: "Estate Management",
      image: "/placeholder.svg"
    },
    {
      name: "Lisa Chen",
      role: "Property Developer",
      location: "Merton",
      content: "Fast, efficient service that fits our tight project schedules. The quality of their equipment and the expertise of their team consistently exceeds our expectations. They've become an integral part of our project success.",
      rating: 5,
      project: "Property Development",
      image: "/placeholder.svg"
    },
    {
      name: "Robert Taylor",
      role: "Homeowner",
      location: "Croydon",
      content: "I hired a petrol strimmer for weekend garden work. The equipment was delivered clean and in perfect working order. The brief training session ensured I could use it safely, and the results were professional-quality. Great value for money!",
      rating: 5,
      project: "DIY Garden Project",
      image: "/placeholder.svg"
    },
    {
      name: "Amanda Foster",
      role: "Community Garden Coordinator",
      location: "Bromley",
      content: "Our community garden project was transformed thanks to Bashee Gardens' equipment and operator services. They helped us clear overgrown areas and establish beautiful, maintainable spaces that the whole community now enjoys.",
      rating: 5,
      project: "Community Garden",
      image: "/placeholder.svg"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "50+", label: "Schools & Councils" },
    { number: "95%", label: "Repeat Customers" },
    { number: "24hr", label: "Response Time" }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding-sm bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-hero mb-6">Customer Testimonials</h1>
            <p className="text-body text-muted-foreground">
              See what homeowners, professional landscapers, schools, and local councils 
              say about our equipment and service quality.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding-sm bg-muted/20">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-primary">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-3 rounded-full mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-current text-yellow-400"
                  />
                ))}
              </div>
              <span className="font-semibold">5.0 Average Rating</span>
            </div>
            <h2 className="text-section mb-4">Real Reviews from Real Customers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality equipment and professional service has earned us 
              hundreds of positive reviews from customers across South East London.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-elegant p-6 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Quote and Rating */}
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

                {/* Project Type */}
                <div className="mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.project}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between">
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
                  <div className="text-sm text-muted-foreground text-right">
                    <div>{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Types */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-section mb-4">Trusted by Diverse Customers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From individual homeowners to large organizations, our equipment and 
              service quality meets the needs of every customer type.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="font-semibold">Homeowners</h3>
              <p className="text-sm text-muted-foreground">Weekend projects & garden maintenance</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-semibold">Landscapers</h3>
              <p className="text-sm text-muted-foreground">Professional contractors & developers</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🏫</span>
              </div>
              <h3 className="font-semibold">Schools</h3>
              <p className="text-sm text-muted-foreground">Educational facilities & grounds</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="font-semibold">Councils</h3>
              <p className="text-sm text-muted-foreground">Public spaces & community areas</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Happy Customers</h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Experience the same quality equipment and professional service that has earned us 
            these outstanding reviews. Book with confidence – we're trusted by schools and councils.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 group">
                View Equipment
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8">
                Get Your Quote
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-primary-foreground/80">
            <p className="text-sm">📞 Call us today: 07963378502</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TestimonialsPage;