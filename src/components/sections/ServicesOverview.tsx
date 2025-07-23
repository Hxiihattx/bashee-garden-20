import { ArrowRight, Zap, Truck, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import remoteMowerImg from "@/assets/hero-remote-mower.jpg";
import rideOnImg from "@/assets/ride-on-tractor.jpg";
import hedgeTrimmerImg from "@/assets/hedge-trimmer.jpg";
import strimmerImg from "@/assets/strimmer.jpg";
import gardenClearanceImg from "@/assets/garden-clearance.jpg";
import equipmentCollectionImg from "@/assets/equipment-collection.jpg";

const ServicesOverview = () => {
  const services = [
    {
      title: "Remote-Controlled Mowers",
      description: "Advanced remote mowers for precise, safe grass cutting on any terrain.",
      image: remoteMowerImg,
      features: ["Remote Operation", "All Terrain", "Precision Cutting"],
      link: "/equipment/remote-mowers"
    },
    {
      title: "Ride-On Tractors",
      description: "Powerful ride-on tractors for large areas and professional landscaping.",
      image: rideOnImg,
      features: ["Large Coverage", "Professional Grade", "Efficient"],
      link: "/equipment/ride-on-tractors"
    },
    {
      title: "Hedge Trimmers",
      description: "Professional hedge trimmers for perfect garden maintenance.",
      image: hedgeTrimmerImg,
      features: ["Precision Cutting", "Professional Results", "Various Sizes"],
      link: "/equipment/hedge-trimmers"
    },
    {
      title: "Petrol Strimmers",
      description: "High-performance strimmers for edges and difficult areas.",
      image: strimmerImg,
      features: ["Edge Perfection", "Powerful Engine", "Versatile Use"],
      link: "/equipment/strimmers"
    },
    {
      title: "Garden Clearance",
      description: "Complete garden clearance services with professional operators.",
      image: gardenClearanceImg,
      features: ["Full Service", "Professional Team", "Waste Removal"],
      link: "/services/garden-clearance"
    },
    {
      title: "Maintenance Services",
      description: "Ongoing maintenance for schools, councils, and estate managers.",
      image: equipmentCollectionImg,
      features: ["Regular Service", "Trained Operators", "Fully Insured"],
      link: "/services/maintenance"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-section mb-6">
            Professional Garden Equipment & Services
          </h2>
          <p className="text-body text-muted-foreground">
            From remote-controlled mowers to complete garden clearance, we provide the tools and expertise 
            to keep your outdoor spaces pristine. Trusted by homeowners, landscapers, and local councils.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-service group"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-subsection group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-body text-muted-foreground">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link to={service.link}>
                  <Button variant="ghost" className="group/btn p-0 h-auto font-medium">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-primary to-primary-light rounded-2xl text-primary-foreground">
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-2">Need Help Choosing Equipment?</h3>
              <p className="text-primary-foreground/90">Our experts are here to help you find the perfect solution for your project.</p>
            </div>
            <Link to="/contact">
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8">
                Get Expert Advice
              </Button>
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-semibold">Modern Equipment</h4>
            <p className="text-sm text-muted-foreground">Latest technology for efficient results</p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Truck className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-semibold">Local Delivery</h4>
            <p className="text-sm text-muted-foreground">Free delivery across South East London</p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-semibold">Fully Insured</h4>
            <p className="text-sm text-muted-foreground">Public liability insurance included</p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-semibold">Flexible Hire</h4>
            <p className="text-sm text-muted-foreground">Daily, weekly, or monthly options</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;