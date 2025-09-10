import { ArrowRight, MessageCircle, Mail, MessageCircle as WhatsApp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const CallToAction = () => {
  return <section className="section-padding bg-gradient-to-r from-primary via-primary-light to-accent text-primary-foreground">
      <div className="container-wide">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Get your garden project moving with professional equipment and expert service. 
              Book now or speak with our team for personalized recommendations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/services">
                <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-4 text-lg group">
                  Browse Equipment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:text-primary font-semibold px-8 py-4 text-lg bg-black/0">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact Options */}
          <div className="mt-16 pt-16 border-t border-primary-foreground/20">
            <h3 className="text-2xl font-semibold mb-8">Or Contact Us Directly</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* WhatsApp */}
              <a href="https://wa.me/447963378502" className="group p-6 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors duration-300">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold">WhatsApp Us</h4>
                  <p className="text-primary-foreground/80">07963378502</p>
                  <p className="text-sm text-primary-foreground/60">Mon – Fri: 9AM – 5PM / Sat: 9AM – 1PM</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:basheegardens@gmail.com" className="group p-6 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors duration-300">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p className="text-primary-foreground/80 text-sm">basheegardens@gmail.com</p>
                  <p className="text-sm text-primary-foreground/60">We will respond during working hours</p>
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>;
};
export default CallToAction;