import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook, Send } from "lucide-react";
import { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Scroll to top after form submission
    window.scrollTo(0, 0);
    // Handle form submission here
    console.log("Form submitted:", formData);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <Layout>
      {/* Header */}
      <section className="section-padding-sm bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-hero mb-6">Contact Us</h1>
            <p className="text-body text-muted-foreground">
              Get in touch for equipment hire, quotes, or expert advice. We're here to help 
              with all your garden maintenance needs.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8 lg:sticky lg:top-8">
              <div>
                <h2 className="text-section mb-6">Get In Touch</h2>
                <p className="text-body text-muted-foreground mb-8">
                  We're available Monday to Saturday to help with your garden equipment needs. 
                  Choose the contact method that works best for you.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <a href="tel:07963378502" className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-primary font-medium">07963378502</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri: 9AM-5PM, Sat: 9AM-1PM</p>
                  </div>
                </a>

                <a href="mailto:info@basheegardens.com" className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-primary font-medium">info@basheegardens.com</p>
                    <p className="text-sm text-muted-foreground">24-hour response time</p>
                  </div>
                </a>


                <div className="flex items-start space-x-4 p-4 rounded-xl bg-accent/10">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Live Chat</h3>
                    <p className="text-accent font-medium">Available Now</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri: 9AM-5PM, Sat: 9AM-1PM</p>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-muted/30 p-6 rounded-xl">
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Service Areas</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We serve South East London including Croydon, Bromley, Sutton, Merton, 
                      Kingston, and surrounding areas. Free delivery within our service area.
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-primary/10 p-6 rounded-xl">
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Business Hours</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium">9:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bank Details */}
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="font-semibold mb-4">Bank Transfer Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Account Name:</span>
                    <span className="font-mono font-medium">Bashee 1 Ltd</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Account Number:</span>
                    <span className="font-mono font-medium">27724396</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Sort Code:</span>
                    <span className="font-mono font-medium">04-06-05</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      Bank Address: 4th Floor, The Featherstone Building, 66 City Road, London, EC1Y 2AL
                    </p>
                  </div>
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground">
                      Please use your booking reference when making payment
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-3">
                  <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-elegant p-8">
              <h2 className="text-subsection mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="service">Service Interest</Label>
                  <select id="service" name="service" value={formData.service} onChange={handleInputChange} className="mt-1 w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                    <option value="">Select a service</option>
                    <option value="remote-mower">Remote-Controlled Mower</option>
                    <option value="ride-on">Ride-On Tractor</option>
                    <option value="hedge-trimmer">Hedge Trimmer</option>
                    <option value="strimmer">Petrol Strimmer</option>
                    <option value="garden-clearance">Garden Clearance</option>
                    <option value="maintenance">Maintenance Service</option>
                    <option value="quote">General Quote</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={5} required className="mt-1" placeholder="Tell us about your project, dates needed, and any specific requirements..." />
                </div>

                <Button type="submit" className="w-full btn-hero group">
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                We will get back to you as soon as possible in working hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section-padding-sm bg-primary text-primary-foreground">
        <div className="container-wide text-center">
          <h3 className="text-xl font-bold mb-2">Need Equipment Urgently?</h3>
          <a href="tel:07963378502">
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold">
              Call Now: 07963378502
            </Button>
          </a>
        </div>
      </section>
    </Layout>;
};
export default Contact;