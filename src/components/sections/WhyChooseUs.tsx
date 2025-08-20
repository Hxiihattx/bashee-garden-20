import { CheckCircle, Star, Users, Award, MapPin, Headphones } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Star,
      title: "Remote-Controlled Technology",
      description: "Advanced remote mowers for precision cutting and enhanced safety, perfect for challenging terrain."
    },
    {
      icon: Award,
      title: "Fully Insured & Licensed",
      description: "Complete public liability insurance and professional certifications for your peace of mind."
    },
    {
      icon: MapPin,
      title: "Local Delivery Service",
      description: "Free delivery and collection across Croydon and surrounding areas."
    },
    {
      icon: CheckCircle,
      title: "Professional Operators",
      description: "Experienced, trained operators available for all equipment and garden clearance services."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "50+", label: "Schools & Councils" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Insured" }
  ];

  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-section mb-6">
            Why Choose Bashee Gardens Hires?
          </h2>
          <p className="text-body text-muted-foreground">
            We're not just another equipment hire company. We're your local partners in maintaining 
            beautiful outdoor spaces with the latest technology and professional expertise.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group space-y-4 p-6 rounded-xl hover:bg-muted/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>


        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="font-medium">Public Liability Insurance</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="font-medium">Professional Certification</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="font-medium">Safety Trained Operators</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="font-medium">Local Business</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;