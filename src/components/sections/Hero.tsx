import { ArrowRight, CheckCircle, Leaf, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const heroImage = "/lovable-uploads/d6a941da-0a9a-40f6-8cb1-43e554890b14.png";
const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsVideoModalOpen(false);
      }
    };
    if (isVideoModalOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isVideoModalOpen]);
  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };
  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };
  return <section className="relative min-h-[90vh] lg:min-h-[80vh] overflow-hidden lg:pt-16">
      {/* Desktop Layout: Text Left, Image Right */}
      <div className="hidden lg:flex items-center h-full">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Left */}
            <div className="space-y-4 lg:space-y-5">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <CheckCircle className="h-4 w-4" />
                <span>Trusted By Homeowners</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl font-bold text-foreground leading-tight">Gamepad Control Mower</h1>

              {/* Subheading */}
              <p className="text-lg text-muted-foreground leading-relaxed">Want to prepare your garden for a barbecue, home event or get some space back?</p>

              {/* Features List */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Easy to Use</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Petrol/Gas Powered (Loncin Engine)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Cuts up to 2,000m²</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Intelligent Navigation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground">Rapid Weeding Capability</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link to="/booking">
                  <Button className="btn-hero group">
                    <Leaf className="mr-2 h-5 w-5" />
                    Hire Equipment
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/booking">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Buy Equipment
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
              <div className="relative z-10 group cursor-pointer" onClick={openVideoModal}>
                <img src="/lovable-uploads/204d3966-1b18-4311-924c-f76200842a00.png" alt="Professional garden equipment demonstration" className="w-full h-[600px] object-cover rounded-2xl shadow-elegant" />
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

      {/* Mobile Hero Image - Full Width */}
      <div className="lg:hidden w-full relative group cursor-pointer" onClick={openVideoModal}>
        <img 
          src="/lovable-uploads/5d728947-4504-435a-934e-d7e09cd80b91.png" 
          alt="Gamepad Control Lawnmower - Mobile Hero" 
          className="w-full h-auto object-cover"
        />
        {/* Play Button Overlay - Center Right with 30px margin */}
        <div className="absolute inset-y-0 right-[30px] flex items-center">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:bg-white transition-colors">
            <div className="w-0 h-0 border-l-[16px] border-l-primary border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
      </div>

      {/* Mobile Hero Buttons */}
      <div className="lg:hidden px-4 pt-5 pb-5 bg-background">
        <div className="flex flex-col gap-3">
          <Link to="/booking" className="w-full">
            <Button className="btn-hero w-full group">
              <Leaf className="mr-2 h-4 w-4" />
              Hire Equipment
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/booking" className="w-full">
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Buy Equipment
            </Button>
          </Link>
        </div>
      </div>
        </div>
      </div>

      {/* Mobile Layout: Image Top, Content Bottom */}
      <div className="lg:hidden">
        {/* Image Section with Play Button - 3:2 ratio */}
        <div className="relative w-full group cursor-pointer" style={{
        aspectRatio: '3/2'
      }} onClick={openVideoModal}>
          <img src="/lovable-uploads/204d3966-1b18-4311-924c-f76200842a00.png" alt="Professional garden equipment demonstration" className="w-full h-full object-cover" />
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
              <span>Trusted By Homeowners</span>
            </div>

            {/* Main Heading - Mobile optimized */}
            <h1 className="text-hero text-foreground leading-tight">
              Robotic Remote Mower
            </h1>

            {/* Subheading */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              Prepare your garden easily for barbecues, events, or reclaim space with smart robotic lawn mower technology.
            </p>

            {/* Features List */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground">Easy to Use</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground">Petrol/Gas Powered (Loncin Engine)</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground">Cuts up to 2,000m²</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground">Intelligent Navigation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground">Rapid Weeding Capability</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 pt-4">
              <Link to="/booking" className="w-full">
                <Button className="btn-hero w-full group">
                  <Leaf className="mr-2 h-4 w-4" />
                  Hire Equipment
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/booking" className="w-full">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Buy Equipment
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
                <span>Professional Operators</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeVideoModal}>
          <div className="relative bg-black rounded-lg overflow-hidden" onClick={e => e.stopPropagation()} style={{
        width: 'min(90vw, 400px)',
        height: 'min(80vh, 711px)',
        aspectRatio: '9/16'
      }}>
            {/* Close Button */}
            <button onClick={closeVideoModal} className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors">
              <X className="h-4 w-4" />
            </button>
            
            {/* Video Container - 9:16 Portrait Aspect Ratio */}
            <div className="relative w-full h-full">
              <iframe src="https://www.youtube.com/embed/AZB8wz6nkEM?controls=1&modestbranding=1&rel=0&autoplay=1&mute=0&loop=0" title="Garden Equipment Demonstration" className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen></iframe>
            </div>
          </div>
        </div>}
    </section>;
};
export default Hero;