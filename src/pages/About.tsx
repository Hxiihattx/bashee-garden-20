import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Users, Award, Heart, Target } from "lucide-react";
import { Link } from "react-router-dom";
import equipmentCollectionImg from "@/assets/equipment-collection.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To make professional garden equipment accessible to all, from homeowners to large estates, with the highest standards of service and safety."
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Every customer matters. We provide personalized service, expert advice, and support throughout your hire period."
    },
    {
      icon: Award,
      title: "Professional Standards",
      description: "We maintain the highest standards in equipment maintenance, operator training, and safety protocols."
    }
  ];

  const trustSignals = [
    {
      title: "Public Liability Insurance",
      description: "Comprehensive coverage for complete peace of mind"
    },
    {
      title: "Safety Checks",
      description: "Regular maintenance and safety inspections on all equipment"
    },
    {
      title: "Professional Operators",
      description: "Fully trained, experienced operators for all services"
    },
    {
      title: "Local Business",
      description: "Proudly serving the South East London community"
    }
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="section-padding-sm bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-hero mb-6">About Bashee Gardens Hires Ltd</h1>
            <p className="text-body text-muted-foreground">
              Your trusted partner for professional garden equipment hire and maintenance services 
              across South East London and Croydon.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-section">Professional Garden Equipment Experts</h2>
              <p className="text-body leading-relaxed">
                Bashee Gardens Hires Ltd was founded with a simple mission: to provide access to 
                professional-grade garden equipment for everyone, from homeowners tackling weekend 
                projects to professional landscapers managing large estates.
              </p>
              <p className="text-body leading-relaxed">
                Based in South East London, we serve the local community with modern equipment, 
                expert knowledge, and a commitment to safety that has earned us the trust of 
                schools, councils, and professional contractors.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="font-medium">5+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="font-medium">500+ Happy Customers</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={equipmentCollectionImg}
                alt="Professional garden equipment collection"
                className="rounded-2xl shadow-elegant"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">Insured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-section mb-6">Our Values</h2>
            <p className="text-body text-muted-foreground">
              These core values guide everything we do, from equipment maintenance 
              to customer service excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                  <value.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-section">Our Story</h2>
            <div className="space-y-6 text-body leading-relaxed text-muted-foreground">
              <p>
                Bashee Gardens Hires started when we recognized a gap in the market for reliable, 
                professional garden equipment hire in South East London. Too many people were 
                struggling with unsuitable tools or paying premium prices for simple garden maintenance.
              </p>
              <p>
                We began with a commitment to providing modern, well-maintained equipment at fair prices, 
                backed by expert advice and genuine customer service. Our introduction of remote-controlled 
                mowers revolutionized how our customers approach challenging terrain and safety concerns.
              </p>
              <p>
                Today, we're proud to serve a diverse community of customers, from individual homeowners 
                to major local councils, all united by their trust in our equipment and service. 
                Our commitment to safety, quality, and customer satisfaction remains unchanged.
              </p>
            </div>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl">
              <blockquote className="text-lg font-medium text-center italic">
                "Our commitment to safety and service has made us the trusted choice for garden 
                equipment hire across South East London."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why You Can Trust Us</h2>
            <p className="text-primary-foreground/90 text-lg">
              Professional standards and certifications that give you complete confidence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-semibold">{signal.title}</h3>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">
                  {signal.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-6 bg-primary-foreground/10 px-8 py-4 rounded-full">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Safety Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Local Business</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 p-12 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Work With Us?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experience the difference that professional equipment and expert service can make 
              for your garden project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button className="btn-hero">
                  View Our Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;