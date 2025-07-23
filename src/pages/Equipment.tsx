import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Zap, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import remoteMowerImg from "@/assets/hero-remote-mower.jpg";
import rideOnImg from "@/assets/ride-on-tractor.jpg";
import hedgeTrimmerImg from "@/assets/hedge-trimmer.jpg";
import strimmerImg from "@/assets/strimmer.jpg";

const Equipment = () => {
  const equipment = [
    {
      id: "remote-mowers",
      title: "Remote-Controlled Mowers",
      image: remoteMowerImg,
      description: "Advanced remote-controlled mowers for precision cutting and enhanced safety on challenging terrain.",
      features: [
        "Remote operation up to 200m range",
        "Handles slopes up to 55 degrees",
        "Precision cutting technology",
        "All-weather capability",
        "Low noise operation",
        "Environmentally friendly"
      ],
      specs: {
        "Cutting Width": "50cm",
        "Engine Type": "Electric/Petrol",
        "Slope Capability": "Up to 55°",
        "Operating Range": "200m",
        "Cutting Height": "20-80mm",
        "Weight": "45kg"
      },
      pricing: {
        daily: "£80",
        weekly: "£450",
        monthly: "£1,200"
      },
      availability: "Available Now",
      popular: true
    },
    {
      id: "ride-on-tractors",
      title: "Ride-On Tractors",
      image: rideOnImg,
      description: "Professional-grade ride-on tractors perfect for large areas and efficient garden maintenance.",
      features: [
        "Large cutting width for efficiency",
        "Comfortable operator seat",
        "Mulching capability",
        "Side discharge option",
        "Easy height adjustment",
        "Reliable petrol engine"
      ],
      specs: {
        "Cutting Width": "107cm",
        "Engine Type": "Petrol",
        "Fuel Capacity": "15L",
        "Turning Radius": "46cm",
        "Cutting Height": "25-102mm",
        "Weight": "180kg"
      },
      pricing: {
        daily: "£120",
        weekly: "£650",
        monthly: "£1,800"
      },
      availability: "Available Now"
    },
    {
      id: "hedge-trimmers",
      title: "Professional Hedge Trimmers",
      image: hedgeTrimmerImg,
      description: "High-performance hedge trimmers for professional topiary and hedge maintenance.",
      features: [
        "Double-sided cutting blade",
        "Anti-vibration system",
        "Various blade lengths available",
        "Safety switch protection",
        "Ergonomic design",
        "Professional grade durability"
      ],
      specs: {
        "Blade Length": "60cm/75cm",
        "Engine Type": "Petrol 2-stroke",
        "Engine Size": "23cc",
        "Cutting Capacity": "28mm",
        "Weight": "4.5kg",
        "Fuel Tank": "0.4L"
      },
      pricing: {
        daily: "£35",
        weekly: "£180",
        monthly: "£500"
      },
      availability: "Available Now"
    },
    {
      id: "strimmers",
      title: "Petrol Strimmers",
      image: strimmerImg,
      description: "Powerful petrol strimmers for edge cutting, overgrowth clearance, and detailed garden work.",
      features: [
        "Powerful 2-stroke engine",
        "Multiple cutting head options",
        "Adjustable handle height",
        "Quick-start system",
        "Fuel-efficient operation",
        "Professional reliability"
      ],
      specs: {
        "Engine Type": "Petrol 2-stroke",
        "Engine Size": "25cc",
        "Cutting Width": "38cm",
        "Shaft Type": "Straight",
        "Weight": "5.2kg",
        "Fuel Tank": "0.5L"
      },
      pricing: {
        daily: "£25",
        weekly: "£130",
        monthly: "£350"
      },
      availability: "Available Now"
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding-sm bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-hero mb-6">Professional Garden Equipment</h1>
            <p className="text-body text-muted-foreground">
              Modern, well-maintained equipment for all your garden maintenance needs. 
              From remote-controlled mowers to professional strimmers.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="space-y-16">
            {equipment.map((item, index) => (
              <div key={item.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[400px] object-cover rounded-2xl shadow-elegant"
                  />
                  {item.popular && (
                    <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    {item.availability}
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <h2 className="text-3xl font-bold mb-3">{item.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {item.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Specifications</h3>
                    <div className="grid grid-cols-2 gap-y-1 text-sm">
                      {Object.entries(item.specs).slice(0, 4).map(([key, value]) => (
                        <div key={key}>
                          <span className="text-muted-foreground">{key}:</span>
                          <span className="ml-2 font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="bg-muted/50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3">Hire Rates</h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-sm text-muted-foreground">Daily</div>
                        <div className="text-lg font-bold text-primary">{item.pricing.daily}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Weekly</div>
                        <div className="text-lg font-bold text-primary">{item.pricing.weekly}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Monthly</div>
                        <div className="text-lg font-bold text-primary">{item.pricing.monthly}</div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3 text-center">
                      *Includes delivery, collection, and basic instruction
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/contact" className="flex-1">
                      <Button className="w-full btn-hero group">
                        Book Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link to="/contact" className="flex-1">
                      <Button variant="outline" className="w-full">
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-section mb-4">Why Choose Our Equipment?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All our equipment is professionally maintained, fully insured, and comes with 
              expert support throughout your hire period.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Modern Technology</h3>
              <p className="text-muted-foreground">
                Latest equipment with advanced features for efficient, professional results.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Fully Insured</h3>
              <p className="text-muted-foreground">
                All equipment comes with public liability insurance and safety training.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Flexible Hire</h3>
              <p className="text-muted-foreground">
                Daily, weekly, or monthly hire options with competitive rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to check availability and get expert advice on the best 
            equipment for your project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8">
                Check Availability
              </Button>
            </Link>
            <a href="tel:01234567890">
              <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8">
                Call: 0123 456 789
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Equipment;