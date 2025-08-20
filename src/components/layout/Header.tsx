import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/equipment", label: "Equipment" },
    { href: "/booking", label: "Book Now" },
    { href: "/contact", label: "Contact" }
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container-wide">
          <div className="flex items-center justify-center lg:justify-between text-sm">
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:07963378502" className="flex items-center space-x-1 hover:text-accent-light transition-colors">
                <Phone className="h-3 w-3" />
                <span>07963378502</span>
              </a>
              <a href="mailto:info@basheegardens.co.uk" className="hidden sm:flex items-center space-x-1 hover:text-accent-light transition-colors">
                <Mail className="h-3 w-3" />
                <span>info@basheegardens.co.uk</span>
              </a>
            </div>
            {/* Mobile centered phone number */}
            <div className="lg:hidden">
              <a href="tel:07963378502" className="flex items-center space-x-1 hover:text-accent-light transition-colors">
                <Phone className="h-3 w-3" />
                <span>07963378502</span>
              </a>
            </div>
            <div className="text-sm font-medium hidden lg:block">
              Mon–Fri: 9AM–5PM, Sat: 9AM–1PM
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container-wide">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover-lift">
            <div className="h-8 w-8 sm:h-10 sm:w-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
              <Leaf className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
            </div>
            <div>
              <div className="font-bold text-lg text-foreground">Bashee Gardens</div>
              <div className="text-xs text-muted-foreground font-medium hidden sm:block">Equipment Hire & Garden Services</div>
              <div className="text-xs text-muted-foreground font-medium sm:hidden">Garden Hire</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActiveLink(link.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Link to="/booking">
              <Button className="hidden sm:inline-flex btn-hero">
                Book Now
              </Button>
            </Link>
            
            {/* Mobile menu drawer */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors">
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background border-l border-border">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center space-x-3 pb-6 border-b border-border">
                    <div className="h-10 w-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                      <Leaf className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-foreground">Bashee Gardens</div>
                      <div className="text-xs text-muted-foreground font-medium">Equipment Hire & Garden Services</div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <nav className="flex flex-col space-y-2 py-6 flex-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                          isActiveLink(link.href)
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground hover:bg-primary/10"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  {/* CTA Buttons */}
                  <div className="space-y-3 pt-4 border-t border-border">
                    <Link to="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full btn-hero">
                        <Leaf className="mr-2 h-4 w-4" />
                        Book Equipment
                      </Button>
                    </Link>
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full">
                        Get Quote
                      </Button>
                    </Link>
                    
                    {/* Contact Info */}
                    <div className="pt-4 space-y-2">
                      <a href="tel:07963378502" className="flex items-center space-x-2 text-sm hover:text-primary transition-colors">
                        <Phone className="h-4 w-4" />
                        <span>07963378502</span>
                      </a>
                      <a href="mailto:info@basheegardens.co.uk" className="flex items-center space-x-2 text-sm hover:text-primary transition-colors">
                        <Mail className="h-4 w-4" />
                        <span>info@basheegardens.co.uk</span>
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;