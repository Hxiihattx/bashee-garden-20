import { ArrowRight, Zap, Truck, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import remoteMowerImg from "@/assets/tracked-mower-orange.jpg";
import rideOnImg from "@/assets/mountfield-red-tractor.jpg";
import hedgeTrimmerImg from "@/assets/parker-chainsaw-actual.jpg";
import strimmerImg from "@/assets/hyundai-complete-kit.jpg";
import gardenClearanceImg from "@/assets/black-leaf-blower.jpg";
import equipmentCollectionImg from "@/assets/red-robot-mower.jpg";

const ServicesOverview = () => {
  const services = [
    {
      title: "Remote-Controlled Mowers",
      description: "Professional tracked remote control mowers with rubber crawler tracks for steep slopes and challenging terrain.",
      image: remoteMowerImg,
      features: ["Remote Operation", "Tracked System", "Steep Slopes"],
      link: "/equipment"
    },
    {
      title: "Ride-On Tractors",
      description: "Twin-bladed Mountfield lawn tractors with rear collection for large areas and professional landscaping.",
      image: rideOnImg,
      features: ["Twin Blades", "200L Collection", "Professional"],
      link: "/equipment"
    },
    {
      title: "Petrol Chainsaws",
      description: "Heavy-duty Parker chainsaws with 20-inch bars for tree work and professional forestry.",
      image: hedgeTrimmerImg,
      features: ["20\" Bar", "Anti-Vibration", "Safety Brake"],
      link: "/equipment"
    },
    {
      title: "Petrol Strimmers",
      description: "Hyundai 52cc professional grass trimmers with dual cutting capability and shoulder harness.",
      image: strimmerImg,
      features: ["52cc Engine", "Dual Cutting", "Harness Included"],
      link: "/equipment"
    },
    {
      title: "Leaf Blowers",
      description: "3-in-1 leaf blowers with vacuum and mulching capability for efficient garden maintenance.",
      image: gardenClearanceImg,
      features: ["3-in-1 Function", "Vacuum & Mulch", "Large Collection"],
      link: "/equipment"
    },
    {
      title: "Robot Mowers",
      description: "Remote control robotic lawn mowers with 9HP engines for autonomous grass cutting.",
      image: equipmentCollectionImg,
      features: ["9HP Engine", "Remote Control", "Autonomous"],
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
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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