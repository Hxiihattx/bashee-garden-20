import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Zap, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import hyundaiStrimmerImg from "@/assets/hyundai-complete-kit.jpg";
import mountfieldTractorImg from "@/assets/mountfield-red-tractor.jpg";
import parkerChainsawImg from "@/assets/parker-chainsaw-actual.jpg";
import leafBlowerImg from "@/assets/black-leaf-blower.jpg";
import robotMowerImg from "@/assets/red-robot-mower.jpg";
import trackedMowerImg from "@/assets/tracked-mower-orange.jpg";

const Equipment = () => {
  const equipment = [
    {
      id: "hyundai-grass-trimmer",
      title: "Hyundai HYBC5200X 52cc 2-Stroke Petrol Grass Trimmer",
      image: hyundaiStrimmerImg,
      description: "The Hyundai HYBC5200X is a powerful petrol grass trimmer/brushcutter with dual cutting capability. Perfect for cutting or trimming all types of grass, brambles, shrubs and overgrowth with its powerful 52cc 2-Stroke Euro-V Hyundai low emission petrol engine.",
      features: [
        "Dual cutting capability - nylon head & metal blade",
        "Large cutting width 255mm to 450mm", 
        "Bike handles for comfort and precise control",
        "Split shaft for easy transport",
        "Full double shoulder ergonomic harness",
        "3 year Hyundai warranty"
      ],
      specs: {
        "Engine Size": "52cc (1.45 kW / 2.0HP)",
        "Engine Type": "2-Stroke Euro-V Petrol",
        "Fuel Capacity": "1.2 Litres",
        "Weight": "9.10kg",
        "Trimmer Line": "2.4mm - 2.5mm",
        "Starting System": "Recoil / Pull Start"
      },
      pricing: {
        daily: "£45",
        weekly: "£220",
        monthly: "£580"
      },
      availability: "Available Now",
      popular: true
    },
    {
      id: "mountfield-lawn-tractor",
      title: "Mountfield 1330M Rear-Collect Lawn Tractor with Manual Drive",
      image: mountfieldTractorImg,
      description: "The first ever twin-bladed garden tractor with a cutting-width under 90cm. Twin-blade design ensures a consistent cut and exceptional damp-weather bagging with high-capacity 200-litre grassbag.",
      features: [
        "Twin-bladed 84cm cutting deck",
        "200-litre rear grass collection",
        "6-speed manual transmission (5+1)",
        "Electric key start",
        "Adjustable sprung seat",
        "5-year manufacturer warranty"
      ],
      specs: {
        "Engine": "STIGA ST 400 OHV 432cc",
        "Power": "8.4hp / 6.3kW",
        "Cutting Width": "84cm",
        "Fuel Tank": "6 Litres",
        "Cutting Heights": "25-80mm (7 positions)",
        "Grass Collector": "200 Litres"
      },
      pricing: {
        daily: "£95",
        weekly: "£520",
        monthly: "£1,450"
      },
      availability: "Available Now"
    },
    {
      id: "parker-chainsaw",
      title: "Parker 58cc 20\" Petrol Chainsaw",
      image: parkerChainsawImg,
      description: "Heavy-duty 58cc petrol chainsaw with 20-inch bar, ideal for tree felling and professional forestry work.",
      features: [
        "58cc powerful engine",
        "20-inch cutting bar",
        "Anti-vibration handles",
        "Automatic chain lubrication",
        "Easy start system",
        "Safety chain brake"
      ],
      specs: {
        "Engine Size": "58cc",
        "Bar Length": "20 inches (50cm)",
        "Engine Type": "2-stroke petrol",
        "Weight": "6.5kg",
        "Fuel Tank": "0.55L",
        "Oil Tank": "0.26L"
      },
      pricing: {
        daily: "£55",
        weekly: "£280",
        monthly: "£750"
      },
      availability: "Available Now"
    },
    {
      id: "leaf-blower",
      title: "Excel 25cc Leaf Blower Vacuum",
      image: leafBlowerImg,
      description: "3-in-1 multi garden tool: leaf blower, vacuum, and mulcher for efficient garden maintenance.",
      features: [
        "25cc 2-stroke engine",
        "3-in-1 functionality",
        "Variable speed control",
        "Large collection bag",
        "Mulching capability",
        "Lightweight design"
      ],
      specs: {
        "Engine Size": "25cc",
        "Engine Type": "2-stroke petrol",
        "Air Speed": "270 km/h",
        "Collection Bag": "45L",
        "Weight": "4.5kg",
        "Mulch Ratio": "10:1"
      },
      pricing: {
        daily: "£40",
        weekly: "£200",
        monthly: "£530"
      },
      availability: "Available Now"
    },
    {
      id: "robot-lawn-mower",
      title: "Remote Control Robot Grass Cutter 9HP",
      image: robotMowerImg,
      description: "Professional remote control robotic lawn mower with 9HP 4-stroke engine. Features cordless operation, anti-slip technology and high torque for challenging terrain.",
      features: [
        "9HP 4-stroke petrol engine",
        "Remote operated control",
        "Anti-slip & antistall technology",
        "High torque self-propelled",
        "Cordless operation",
        "1 year manufacturer warranty"
      ],
      specs: {
        "Engine Type": "4-Stroke Petrol",
        "Power": "9HP (350W Brushless Motor)",
        "Tank Capacity": "1.4L",
        "Voltage": "24V",
        "Features": "Cordless, Remote Operated",
        "Horsepower": "9 HP"
      },
      pricing: {
        daily: "£120",
        weekly: "£650",
        monthly: "£1,800"
      },
      availability: "Available Now"
    },
    {
      id: "tracked-remote-mower",
      title: "Remote Control Tracked Mower",
      image: trackedMowerImg,
      description: "Professional tracked remote control mower for steep slopes and challenging terrain access.",
      features: [
        "Remote control operation",
        "Tracked crawler system",
        "Steep slope capability",
        "Heavy-duty construction",
        "Professional cutting deck",
        "Safe operation from distance"
      ],
      specs: {
        "Remote Range": "150m",
        "Slope Capability": "Up to 60°",
        "Cutting Width": "60cm",
        "Engine Type": "Petrol 4-stroke",
        "Weight": "280kg",
        "Track Type": "Rubber crawler"
      },
      pricing: {
        daily: "£150",
        weekly: "£750",
        monthly: "£2,100"
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
            <a href="tel:07963378502">
              <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8">
                Call: 07963378502
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Equipment;