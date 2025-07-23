import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Wrench, Users, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import remoteMowerImg from "@/assets/hero-remote-mower.jpg";
import rideOnImg from "@/assets/ride-on-tractor.jpg";
import hedgeTrimmerImg from "@/assets/hedge-trimmer.jpg";
import strimmerImg from "@/assets/strimmer.jpg";
import gardenClearanceImg from "@/assets/garden-clearance.jpg";

const Services = () => {
  const hireEquipment = [
    {
      title: "Remote-Controlled Mowers",
      description: "State-of-the-art remote mowers perfect for challenging terrain and precision cutting.",
      image: remoteMowerImg,
      features: ["Remote operation for safety", "All-terrain capability", "Precision cutting technology", "Slope handling up to 55°"],
      pricing: "From £80/day",
      link: "/equipment/remote-mowers"
    },
    {
      title: "Ride-On Tractors",
      description: "Professional-grade ride-on tractors for large areas and efficient grass cutting.",
      image: rideOnImg,
      features: ["Large cutting width", "Comfortable operation", "Mulching capability", "Professional results"],
      pricing: "From £120/day",
      link: "/equipment/ride-on-tractors"
    },
    {
      title: "Hedge Trimmers",
      description: "Professional hedge trimmers for perfect topiary and hedge maintenance.",
      image: hedgeTrimmerImg,
      features: ["Various blade lengths", "Petrol and electric options", "Professional grade", "Safety features"],
      pricing: "From £35/day",
      link: "/equipment/hedge-trimmers"
    },
    {
      title: "Petrol Strimmers",
      description: "High-performance strimmers for edges, overgrowth, and detailed work.",
      image: strimmerImg,
      features: ["Powerful 2-stroke engines", "Various cutting heads", "Ergonomic design", "Professional durability"],
      pricing: "From £25/day",
      link: "/equipment/strimmers"
    }
  ];

  const services = [
    {
      title: "Garden Clearance (With Operator)",
      description: "Complete garden clearance service with professional operators and waste removal.",
      features: ["Fully trained operators", "All equipment provided", "Waste removal included", "Public liability insurance"],
      pricing: "From £200/day"
    },
    {
      title: "Maintenance Services",
      description: "Regular maintenance contracts for schools, councils, and estate managers.",
      features: ["Scheduled maintenance", "Professional operators", "Equipment maintenance", "Flexible contracts"],
      pricing: "Contact for quote"
    },
    {
      title: "Equipment with Operator",
      description: "Hire any equipment with a professional operator for complex or large projects.",
      features: ["Experienced operators", "Safety training included", "Efficient operation", "Quality guarantee"],
      pricing: "From £300/day"
    }
  ];

  const faqs = [
    {
      question: "Do you deliver equipment?",
      answer: "Yes, we provide free delivery and collection across South East London, including Croydon and surrounding areas."
    },
    {
      question: "Can I hire equipment with an operator?",
      answer: "Absolutely! All our operators are fully trained, insured, and experienced with professional garden maintenance."
    },
    {
      question: "What's included in the hire price?",
      answer: "All hire prices include equipment, basic instruction, and public liability insurance. Fuel and operator services are additional."
    },
    {
      question: "Do you provide safety training?",
      answer: "Yes, we provide basic safety instruction with all equipment hire and full training for operator services."
    },
    {
      question: "What are your hire periods?",
      answer: "We offer flexible hire periods: daily, weekly, or monthly rates. Longer hires get better rates."
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding-sm bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-hero mb-6">Garden Equipment and Hire Services</h1>
            <p className="text-body text-muted-foreground">
              Professional garden equipment hire and services across South East London. 
              From remote-controlled mowers to complete garden clearance with trained operators.
            </p>
          </div>
        </div>
      </section>

      {/* Hire Equipment Section */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-section text-center mb-4">Equipment Hire</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Modern, well-maintained equipment for all your garden maintenance needs
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hireEquipment.map((item, index) => (
              <div key={index} className="card-elegant overflow-hidden hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-64">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {item.pricing}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-subsection mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <ul className="space-y-2 mb-6">
                    {item.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={item.link}>
                    <Button className="w-full group">
                      Check Availability
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <h2 className="text-section text-center mb-4">Professional Services</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Complete garden maintenance solutions with professional operators
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-elegant p-6 text-center hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-semibold text-primary mb-4">{service.pricing}</div>
                <Link to="/contact">
                  <Button variant="outline" className="w-full">
                    Get Quote
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-sm bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container-wide text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help Choosing the Right Equipment?</h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Our experts are here to help you find the perfect solution for your project. 
            Get personalized recommendations based on your specific needs.
          </p>
          <Link to="/contact">
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Get Expert Advice
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-section text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card-elegant p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Link to="/contact">
              <Button>Contact Our Team</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding-sm bg-muted/20">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">Fully Insured</h4>
              <p className="text-sm text-muted-foreground">Public liability coverage included</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">Trained Operators</h4>
              <p className="text-sm text-muted-foreground">Professional, experienced team</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">Flexible Hire</h4>
              <p className="text-sm text-muted-foreground">Daily, weekly, monthly options</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold">Quality Guarantee</h4>
              <p className="text-sm text-muted-foreground">Well-maintained, reliable equipment</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;