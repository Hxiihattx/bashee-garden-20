import Layout from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      category: "Booking & Pricing",
      questions: [
        {
          question: "How do I book equipment?",
          answer: "You can book equipment through our online booking system, by calling us at 07963378502, or by emailing info@basheegardens.com. We recommend booking at least 48 hours in advance to ensure availability."
        },
        {
          question: "What are your rental rates?",
          answer: "Our rates vary by equipment type: Remote-controlled mowers from £45/day, Ride-on mowers from £65/day, Hedge trimmers from £25/day, Strimmers from £20/day. Garden clearance services start from £200/day including operator. Contact us for weekly rates and bulk discounts."
        },
        {
          question: "Do you require a deposit?",
          answer: "Yes, we require a security deposit for all equipment rentals. The deposit amount varies by equipment value and is fully refundable upon return of equipment in good condition. Deposits can be paid by credit card or bank transfer. Bank details: Account Name: Bashee 1 Ltd, Account: 27724396, Sort Code: 04-06-05."
        },
        {
          question: "What's included in the rental price?",
          answer: "All rentals include basic training, safety equipment, fuel/oil, and local delivery within our service area. For operated services, the operator's time and expertise are included in the daily rate."
        }
      ]
    },
    {
      category: "Equipment & Safety",
      questions: [
        {
          question: "Do you provide training on equipment use?",
          answer: "Yes, we provide comprehensive safety training and operation instructions for all equipment. For complex machinery like remote-controlled mowers, we offer hands-on demonstration to ensure you're comfortable and safe."
        },
        {
          question: "What if the equipment breaks down?",
          answer: "If equipment fails due to mechanical issues (not misuse), we'll replace it at no charge within 4 hours during business hours. We maintain all equipment to high standards and perform regular safety checks."
        },
        {
          question: "Is there an age restriction for using the equipment?",
          answer: "Users must be 18+ for power equipment like mowers and strimmers. For ride-on mowers, users must be 21+ with a valid driving license. All users must complete our safety briefing before operation."
        },
        {
          question: "What safety equipment is provided?",
          answer: "We provide safety goggles, ear protection, gloves, and safety instructions with all equipment. For remote-controlled mowers, we include the remote control unit and safety barriers where required."
        }
      ]
    },
    {
      category: "Delivery & Service Area",
      questions: [
        {
          question: "Where do you deliver?",
          answer: "We deliver throughout South East London including Croydon, Bromley, Sutton, Merton, Kingston, Richmond, Wandsworth, and surrounding areas. Contact us to confirm delivery to your specific location."
        },
        {
          question: "When do you deliver and collect?",
          answer: "Delivery and collection are available Monday-Friday 9AM-5PM and Saturday 9AM-1PM. We're closed Sundays. We aim to deliver within 2-hour time slots and will call 30 minutes before arrival. Emergency equipment is available with shorter notice."
        },
        {
          question: "Is delivery included in the price?",
          answer: "Yes, delivery and collection within our standard service area (within 15 miles of Croydon) is included. Additional charges may apply for distant locations or urgent same-day delivery."
        },
        {
          question: "What if nobody is available for delivery?",
          answer: "Someone must be present for delivery and equipment demonstration. If nobody is available, we charge a £25 re-delivery fee. We can arrange delivery to secure locations with prior agreement."
        }
      ]
    },
    {
      category: "Weather & Cancellations",
      questions: [
        {
          question: "What happens if it rains?",
          answer: "Light rain doesn't stop most garden work, but heavy rain or storms may require postponement for safety. We monitor weather forecasts and will contact you if conditions are unsuitable. Weather-related postponements can be rescheduled without penalty."
        },
        {
          question: "Can I cancel my booking?",
          answer: "Cancellations more than 48 hours before delivery receive a full refund. 24-48 hours notice receives a 50% refund. Less than 24 hours notice is non-refundable unless due to extreme weather or emergency."
        },
        {
          question: "What if I need to extend my rental?",
          answer: "Extensions are possible subject to availability. Contact us as soon as possible to extend your rental. Additional days are charged at the daily rate, and we may need to collect and re-deliver equipment for other bookings."
        }
      ]
    },
    {
      category: "Operated Services",
      questions: [
        {
          question: "Do you provide operators?",
          answer: "Yes, we offer fully operated services for all equipment types. Our operators are trained, insured, and experienced with all types of garden maintenance. This is ideal for commercial clients or complex projects."
        },
        {
          question: "Are your operators insured?",
          answer: "All our operators are fully insured with public liability coverage up to £2 million. They carry proof of insurance and follow strict safety protocols. We're also members of relevant trade associations."
        },
        {
          question: "Can operators work unsupervised?",
          answer: "Our operators can work independently for routine maintenance, but we prefer initial consultation to understand your specific requirements. For commercial properties, we can work to agreed schedules with minimal supervision."
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="container-narrow section-padding">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-section text-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our garden equipment hire services. 
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8 mb-12">
          {faqs.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="card-elegant">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Contact Section */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-center text-foreground">Still Have Questions?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground mb-6">
              Our friendly team is here to help you choose the right equipment and answer any questions.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="tel:07963378502" className="flex flex-col items-center p-4 bg-background rounded-lg hover:shadow-md transition-all">
                <Phone className="h-8 w-8 text-primary mb-2" />
                <span className="font-semibold text-foreground">Call Us</span>
                <span className="text-sm text-muted-foreground">07963378502</span>
                <span className="text-xs text-muted-foreground mt-1">Mon-Fri: 9AM-5PM, Sat: 9AM-1PM</span>
              </a>
              <a href="mailto:info@basheegardens.com" className="flex flex-col items-center p-4 bg-background rounded-lg hover:shadow-md transition-all">
                <Mail className="h-8 w-8 text-primary mb-2" />
                <span className="font-semibold text-foreground">Email Us</span>
                <span className="text-sm text-muted-foreground text-center">info@basheegardens.com</span>
                <span className="text-xs text-muted-foreground mt-1">24/7 Response</span>
              </a>
              <Link to="/contact" className="flex flex-col items-center p-4 bg-background rounded-lg hover:shadow-md transition-all">
                <MessageCircle className="h-8 w-8 text-primary mb-2" />
                <span className="font-semibold text-foreground">Live Chat</span>
                <span className="text-sm text-muted-foreground">Quick Response</span>
                <span className="text-xs text-muted-foreground mt-1">Mon-Fri: 9AM-5PM, Sat: 9AM-1PM</span>
              </Link>
            </div>
            
            <div className="text-center mt-6">
              <Link to="/booking">
                <Button className="btn-hero">
                  Book Equipment Now
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Additional Help */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-4">Need Immediate Assistance?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Contact Form
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;