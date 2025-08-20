import { Link } from "react-router-dom";
import { MessageCircle, Mail, MapPin, Clock, Instagram, Facebook, Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Company Info - Larger Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                <Leaf className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <div className="font-bold text-xl text-white">Bashee Gardens</div>
                <div className="text-sm text-white/80 font-medium">Garden Equipment Hire</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/90">
              Professional garden equipment hire and clearance services. 
              We provide comprehensive domestic and commercial gardening solutions, from state-of-the-art
              remote-controlled mowers to complete garden maintenance packages. Trusted by homeowners 
              and businesses since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
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
              <Link to="/booking" className="text-sm hover:text-primary transition-colors">
                Book Equipment
              </Link>
              <Link to="/blog" className="text-sm hover:text-primary transition-colors">
                Blog
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <div className="flex flex-col space-y-2 text-sm text-white/90">
              <span>Remote-Controlled Mowers</span>
              <span>Ride-On Mowers</span>
              <span>Hedge Trimmers</span>
              <span>Petrol Strimmers</span>
              <span>Garden Clearance</span>
              <span>Operator Services</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <a href="https://wa.me/447963378502" className="flex items-center space-x-2 text-sm hover:text-primary transition-colors">
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp: 07963378502</span>
              </a>
              <a href="mailto:info@basheegardens.co.uk" className="flex items-center space-x-2 text-sm hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>info@basheegardens.co.uk</span>
              </a>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Croydon & Surrounding Areas</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>Mon – Fri: 9AM – 5PM / Sat: 9AM – 1PM, Sun: Closed</span>
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
      <div className="border-t border-white/20">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-white/80">
              © 2025 Bashee Gardens Hires Ltd. All rights reserved.
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