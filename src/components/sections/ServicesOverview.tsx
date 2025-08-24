import { ArrowRight, Zap, Truck, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const remoteMowerImg = "/lovable-uploads/3cc9dfd7-883c-4555-84b7-66426bfaebf2.png";
const rideOnImg = "/lovable-uploads/160552da-bc6b-4e0f-9604-2d846a8abc7d.png";
const hedgeTrimmerImg = "/lovable-uploads/4c693b18-a988-4abe-9d7d-975b162e0507.png";
const strimmerImg = "/lovable-uploads/89715c80-76ed-4e73-96c2-a138b7db7187.png";
const gardenClearanceImg = "/lovable-uploads/6a85f9ee-9ca5-48ed-bc14-087e92f16a47.png";
const equipmentCollectionImg = "/lovable-uploads/4a0087ef-2a5b-45b8-8d7c-ef2c796d8d9d.png";

const ServicesOverview = () => {
  const services = [
    {
      title: "Tracked Remote Control Mowers",
      description: "Professional tracked remote control mowers with rubber crawler tracks for steep slopes and challenging terrain access.",
      image: remoteMowerImg,
      features: ["Remote Operation", "60° Slopes", "Safe Distance"],
      link: "/equipment"
    },
    {
      title: "Mountfield Lawn Mowers",
      description: "Twin-bladed Mountfield 1330M with 200L rear collection, 8.4hp STIGA engine and 5-year warranty.",
      image: rideOnImg,
      features: ["Twin Blades", "200L Collection", "5yr Warranty"],
      link: "/equipment"
    },
    {
      title: "Parker Petrol Chainsaws",
      description: "Heavy-duty Parker 58cc chainsaws with 20-inch bars, anti-vibration handles and safety chain brake.",
      image: hedgeTrimmerImg,
      features: ["58cc Engine", "20\" Bar", "Safety Brake"],
      link: "/equipment"
    },
    {
      title: "Hyundai Grass Trimmers",
      description: "Hyundai HYBC5200X 52cc professional grass trimmers with dual cutting capability and complete kit.",
      image: strimmerImg,
      features: ["52cc 2-Stroke", "Dual Cutting", "Complete Kit"],
      link: "/equipment"
    },
    {
      title: "Leaf Blower Vacuum",
      description: "Excel 25cc 3-in-1 leaf blower, vacuum and mulcher with variable speed control and large collection bag.",
      image: gardenClearanceImg,
      features: ["3-in-1 Function", "Variable Speed", "45L Collection"],
      link: "/equipment"
    },
    {
      title: "Excel 52cc Multi Tool",
      description: "Compact 52cc petrol-powered multi-tool for efficient trimming, pruning, and cutting.",
      image: "/lovable-uploads/bf0eb917-a647-4ccb-aa90-e3ce6be6a655.png",
      features: ["5-in-1 Garden Tool", "Powerful 52cc Engine", "Easy to Operate"],
      link: "/equipment"
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
              className="bg-card rounded-xl border border-border p-4 hover:-translate-y-2 cursor-pointer transition-all duration-300 overflow-hidden group"
              style={{ boxShadow: '0 4px 20px -2px hsl(var(--primary) / 0.1)' }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link to="/booking">
                  <Button variant="ghost" className="group/btn p-0 h-auto font-medium text-sm">
                    Hire Now
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
            <p className="text-sm text-muted-foreground">POA Delivery across service areas</p>
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