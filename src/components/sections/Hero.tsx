import { ArrowRight, CheckCircle, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const heroImage = "/lovable-uploads/d6a941da-0a9a-40f6-8cb1-43e554890b14.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[80vh] overflow-hidden lg:pt-16">
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
                Garden Hire & Maintainance Services
              </h1>

              {/* Subheading */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                Professional remote-controlled mowers, ride-on mowers, and garden clearance services.
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

            {/* Image Right with Play Button */}
            <div className="relative">
              <div className="relative z-10 group cursor-pointer" onClick={() => window.open('https://youtube.com/shorts/AZB8wz6nkEM?si=p4KzbOoJlkCpZT21')}>
                <img
                  src="/lovable-uploads/204d3966-1b18-4311-924c-f76200842a00.png"
                  alt="Professional garden equipment demonstration"
                  className="w-full h-[600px] object-cover rounded-2xl shadow-elegant"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-white transition-colors">
                    <div className="w-0 h-0 border-l-[20px] border-l-primary border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout: Image Top, Content Bottom */}
      <div className="lg:hidden">
        {/* Image Section with Play Button - 3:2 ratio */}
        <div className="relative w-full group cursor-pointer" style={{ aspectRatio: '3/2' }} onClick={() => window.open('https://youtube.com/shorts/AZB8wz6nkEM?si=p4KzbOoJlkCpZT21')}>
          <img
            src="/lovable-uploads/204d3966-1b18-4311-924c-f76200842a00.png"
            alt="Professional garden equipment demonstration"
            className="w-full h-full object-cover"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-white transition-colors">
              <div className="w-0 h-0 border-l-[16px] border-l-primary border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
            </div>
          </div>
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
              Garden Hire & Maintainance Services
            </h1>

            {/* Subheading */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              Professional remote-controlled mowers, ride-on mowers, and garden clearance services. 
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