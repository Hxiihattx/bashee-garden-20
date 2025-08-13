import { ArrowRight, CheckCircle, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hyundai-grass-trimmer-kit.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[80vh] overflow-hidden pt-8 lg:pt-16">
      {/* Desktop Layout: Text Left, Image Right */}
      <div className="hidden lg:flex items-center h-full">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Left */}
            <div className="space-y-4 lg:space-y-5">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <CheckCircle className="h-4 w-4" />
                <span>Trusted by Schools & Councils</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl font-bold text-foreground leading-tight">
                Garden Equipment Hire Made Easy in 
                <span className="text-primary"> South East London</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                Professional remote-controlled mowers, ride-on tractors, and garden clearance services. 
                Trusted by homeowners, landscapers, and local councils across Croydon.
              </p>

              {/* Features List */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Remote-Controlled Mowers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Local Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Fully Insured</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link to="/booking">
                  <Button className="btn-hero group">
                    <Leaf className="mr-2 h-5 w-5" />
                    Book Equipment
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    View Services
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-3 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span>Public Liability Insurance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span>Professional Operators</span>
                </div>
              </div>
            </div>

            {/* Image Right */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={heroImage}
                  alt="Professional garden equipment and landscaping"
                  className="w-full h-[600px] object-cover rounded-2xl shadow-elegant"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout: Image Top, Content Bottom */}
      <div className="lg:hidden">
        {/* Image Section - 16:9 ratio */}
        <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
          <img
            src={heroImage}
            alt="Professional garden equipment and landscaping"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="px-4 py-8 bg-background">
          <div className="space-y-4">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-medium">
              <CheckCircle className="h-3 w-3" />
              <span>Trusted by Schools & Councils</span>
            </div>

            {/* Main Heading - Mobile optimized */}
            <h1 className="text-hero text-foreground leading-tight">
              Garden Equipment Hire Made Easy in 
              <span className="text-primary"> South East London</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              Professional remote-controlled mowers, ride-on tractors, and garden clearance services. 
              Trusted by homeowners, landscapers, and local councils.
            </p>

            {/* Features List */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground">Remote-Controlled Mowers</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground">Local Delivery & Setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground">Fully Insured Service</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 pt-4">
              <Link to="/booking" className="w-full">
                <Button className="btn-hero w-full group">
                  <Leaf className="mr-2 h-4 w-4" />
                  Book Equipment
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services" className="w-full">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View All Services
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col gap-2 pt-4 text-xs text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                <span>Public Liability Insurance</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                <span>Professional Operators Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;