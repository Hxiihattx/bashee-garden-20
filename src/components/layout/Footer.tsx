import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle, Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                <Leaf className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <div className="font-bold text-xl text-secondary-foreground">BasheeGardens</div>
                <div className="text-sm text-secondary-foreground/80 font-medium">Equipment Hire & Garden Services</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-secondary-foreground/90">
              Professional garden equipment hire and clearance services across South East London. 
              Trusted by homeowners, landscapers, and councils since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/services" className="text-sm hover:text-primary transition-colors">
                Our Services
              </Link>
              <Link to="/equipment" className="text-sm hover:text-primary transition-colors">
                Equipment Hire
              </Link>
              <Link to="/about" className="text-sm hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/testimonials" className="text-sm hover:text-primary transition-colors">
                Testimonials
              </Link>
              <Link to="/booking" className="text-sm hover:text-primary transition-colors">
                Book Equipment
              </Link>
              <Link to="/faq" className="text-sm hover:text-primary transition-colors">
                FAQs
              </Link>
              <Link to="/blog" className="text-sm hover:text-primary transition-colors">
                Blog
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <div className="flex flex-col space-y-2 text-sm text-secondary-foreground/90">
              <span>Remote-Controlled Mowers</span>
              <span>Ride-On Tractors</span>
              <span>Hedge Trimmers</span>
              <span>Petrol Strimmers</span>
              <span>Garden Clearance</span>
              <span>Operator Services</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:01234567890" className="flex items-center space-x-2 text-sm hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>0123 456 789</span>
              </a>
              <a href="mailto:hello@basheegardenshires.co.uk" className="flex items-center space-x-2 text-sm hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>hello@basheegardenshires.co.uk</span>
              </a>
              <a href="mailto:bashee1@icloud.com" className="flex items-center space-x-2 text-sm hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>bashee1@icloud.com</span>
              </a>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>South East London & Croydon</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>Mon-Sat: 9AM-6PM</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-secondary-foreground/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-secondary-foreground/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-secondary-foreground/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary-foreground/20">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-secondary-foreground/80">
              © 2024 BasheeGardens Hires Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;