import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CheckCircle, ArrowLeft, ArrowRight, Calendar as CalendarIcon, Clock, MapPin, User, Mail, Phone, MessageSquare, MessageCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import BookingStepSelector from "@/components/sections/BookingStepSelector";
const equipment = [{
  id: "remote-mower",
  name: "Remote-Controlled Mower",
  description: "Perfect for slopes and hard-to-reach areas"
}, {
  id: "ride-on-mower",
  name: "Ride-On Mower",
  description: "Ideal for large lawns and estates"
}, {
  id: "hedge-trimmer",
  name: "Hedge Trimmer",
  description: "Professional grade for precise trimming"
}, {
  id: "strimmer",
  name: "Petrol Strimmer",
  description: "Heavy-duty for tough weeds and edges"
}, {
  id: "excel-multi-tool",
  name: "Excel 52cc Multi Tool",
  description: "5-in-1 garden tool for versatile operations"
}, {
  id: "clearance-service",
  name: "Garden Clearance Service",
  description: "Full service with operator included"
}];
const timeSlots = ["9:00 AM - 11:00 AM", "11:00 AM - 2:00 PM", "2:00 PM - 4:00 PM", "All Day (9:00 AM - 5:00 PM)"];
const Booking = () => {
  const [currentStep, setCurrentStep] = useState(0); // Start at 0 for buy/hire selection
  const [bookingType, setBookingType] = useState<"buy" | "hire" | null>(null);
  const [selectedEquipment, setSelectedEquipment] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [duration, setDuration] = useState("");
  const [needsOperator, setNeedsOperator] = useState("");
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    postcode: "",
    specialRequirements: ""
  });
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = 6; // Updated to include buy/hire selection
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleSubmit = () => {
    // In a real app, this would submit to a backend
    setIsSubmitted(true);
  };
  const handleBookingTypeSelection = (type: "buy" | "hire") => {
    setBookingType(type);
    setCurrentStep(1); // Move to equipment selection
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return bookingType !== null;
      case 1:
        return selectedEquipment !== "";
      case 2:
        return selectedDate && selectedTime !== "" && duration !== "";
      case 3:
        return needsOperator !== "";
      case 4:
        return customerInfo.name !== "" && customerInfo.email !== "" && customerInfo.phone !== "";
      case 5:
        return true;
      default:
        return false;
    }
  };
  const getSelectedEquipmentDetails = () => {
    return equipment.find(item => item.id === selectedEquipment);
  };
  return <Layout>
      <div className="min-h-screen bg-muted/30 py-12">
        <div className="container-narrow">
          {/* Header */}
          <div className="page-header-content">
            <h1 className="page-header-title">Book Your Garden Equipment</h1>
            <p className="page-header-description max-w-2xl mx-auto">
              Follow these simple steps to book your garden equipment. We'll confirm availability and arrange delivery throughout London and Greater London Area.
            </p>
          </div>

          {/* Progress Bar */}
          {currentStep > 0 && (
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4, 5].map(step => <div key={step} className="flex items-center">
                  <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors", currentStep >= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground")}>
                    {currentStep > step ? <CheckCircle className="h-5 w-5" /> : step}
                  </div>
                  {step < 5 && <div className={cn("h-1 w-12 mx-2 transition-colors", currentStep > step ? "bg-primary" : "bg-muted")} />}
                </div>)}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Equipment</span>
                <span>Schedule</span>
                <span>Service</span>
                <span>Details</span>
                <span>Summary</span>
              </div>
            </div>
          )}

          {/* Step Content */}
          {currentStep === 0 ? (
            <BookingStepSelector onSelection={handleBookingTypeSelection} />
          ) : (
            <Card className="mb-6 lg:mb-8">
              <CardHeader className="pb-4 lg:pb-6">
                <CardTitle className="flex items-center gap-2 text-lg lg:text-xl">
                  {currentStep === 1 && <><User className="h-4 w-4 lg:h-5 lg:w-5" /> Choose Equipment</>}
                  {currentStep === 2 && <><CalendarIcon className="h-4 w-4 lg:h-5 lg:w-5" /> Select Date & Time</>}
                  {currentStep === 3 && <><MessageSquare className="h-4 w-4 lg:h-5 lg:w-5" /> Service Options</>}
                  {currentStep === 4 && <><Mail className="h-4 w-4 lg:h-5 lg:w-5" /> Your Details</>}
                  {currentStep === 5 && <><CheckCircle className="h-4 w-4 lg:h-5 lg:w-5" /> Booking Summary</>}
                </CardTitle>
                {bookingType && (
                  <p className="text-sm text-muted-foreground">
                    Booking type: <span className="font-semibold text-primary">
                      {bookingType === "buy" ? "Purchase" : "Hire"}
                    </span>
                  </p>
                )}
              </CardHeader>
              <CardContent className="space-y-4 lg:space-y-6 pt-0">
                {/* Step 1: Equipment Selection */}
                {currentStep === 1 && <div className="grid gap-4">
                  {equipment.map(item => <div key={item.id} className={cn("p-3 lg:p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md", selectedEquipment === item.id ? "border-primary bg-primary/5 shadow-md" : "border-border hover:border-primary/50")} onClick={() => setSelectedEquipment(item.id)}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-sm lg:text-base text-foreground">{item.name}</h3>
                          <p className="text-xs lg:text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </div>)}
                </div>}

              {/* Step 2: Date & Time Selection */}
              {currentStep === 2 && <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-sm lg:text-base font-semibold mb-3 lg:mb-4 block">Select Date</Label>
                    <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} disabled={date => date < new Date() || date < new Date("1900-01-01")} className="rounded-md border" />
                  </div>
                    <div className="space-y-3 lg:space-y-4">
                    <div>
                      <Label className="text-sm lg:text-base font-semibold mb-2 lg:mb-3 block">Time Slot</Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map(slot => <SelectItem key={slot} value={slot}>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                {slot}
                              </div>
                            </SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-sm lg:text-base font-semibold mb-2 lg:mb-3 block">Duration</Label>
                      <Select value={duration} onValueChange={setDuration}>
                        <SelectTrigger>
                          <SelectValue placeholder="How long do you need it?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-day">1 Day</SelectItem>
                          <SelectItem value="2-days">2 Days</SelectItem>
                          <SelectItem value="3-days">3 Days</SelectItem>
                          <SelectItem value="1-week">1 Week</SelectItem>
                          <SelectItem value="custom">Custom Duration</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>}

              {/* Step 3: Service Options */}
              {currentStep === 3 && <div className="space-y-6">
                  <div>
                    <Label className="text-sm lg:text-base font-semibold mb-3 lg:mb-4 block">Do you need an operator?</Label>
                    <div className="grid gap-3">
                      <div className={cn("p-3 lg:p-4 border rounded-lg cursor-pointer transition-all", needsOperator === "no" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50")} onClick={() => setNeedsOperator("no")}>
                        <div>
                          <h4 className="font-semibold text-sm lg:text-base">Self-Operated</h4>
                          <p className="text-xs lg:text-sm text-muted-foreground">You'll operate the equipment yourself. Basic training included.</p>
                        </div>
                      </div>
                      <div className={cn("p-3 lg:p-4 border rounded-lg cursor-pointer transition-all", needsOperator === "yes" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50")} onClick={() => setNeedsOperator("yes")}>
                        <div>
                          <h4 className="font-semibold text-sm lg:text-base">With Professional Operator</h4>
                          <p className="text-xs lg:text-sm text-muted-foreground">Our experienced operator will handle everything. Additional cost applies.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {selectedEquipment && <div className="p-3 lg:p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm lg:text-base">Your Selection</h4>
                      <p className="text-xs lg:text-sm text-muted-foreground">
                        {getSelectedEquipmentDetails()?.name}
                        {needsOperator === "yes" && " + Operator fee"}
                      </p>
                    </div>}
                </div>}

              {/* Step 4: Customer Information */}
              {currentStep === 4 && <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                  <div className="space-y-3 lg:space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" value={customerInfo.name} onChange={e => setCustomerInfo({
                    ...customerInfo,
                    name: e.target.value
                  })} placeholder="Enter your full name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" value={customerInfo.email} onChange={e => setCustomerInfo({
                    ...customerInfo,
                    email: e.target.value
                  })} placeholder="your@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">WhatsApp Number *</Label>
                      <Input id="phone" type="tel" value={customerInfo.phone} onChange={e => setCustomerInfo({
                    ...customerInfo,
                    phone: e.target.value
                  })} placeholder="07XXX XXXXXX" />
                    </div>
                  </div>
                  <div className="space-y-3 lg:space-y-4">
                    <div>
                      <Label htmlFor="address">Service Address</Label>
                      <Textarea id="address" value={customerInfo.address} onChange={e => setCustomerInfo({
                    ...customerInfo,
                    address: e.target.value
                  })} placeholder="Enter the address where the equipment will be used" rows={3} />
                    </div>
                    <div>
                      <Label htmlFor="postcode">Postcode</Label>
                      <Input id="postcode" value={customerInfo.postcode} onChange={e => setCustomerInfo({
                    ...customerInfo,
                    postcode: e.target.value
                  })} placeholder="SW1A 1AA" />
                    </div>
                    <div>
                      <Label htmlFor="requirements">Special Requirements</Label>
                      <Textarea id="requirements" value={customerInfo.specialRequirements} onChange={e => setCustomerInfo({
                    ...customerInfo,
                    specialRequirements: e.target.value
                  })} placeholder="Any special instructions or requirements..." rows={3} />
                    </div>
                  </div>
                </div>}

              {/* Step 5: Summary */}
              {currentStep === 5 && !isSubmitted && <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold mb-2">Review Your Booking</h3>
                    <p className="text-sm text-muted-foreground">
                      Please review all details before submitting your booking request.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-semibold mb-2">Equipment</h4>
                        <p className="text-sm">{getSelectedEquipmentDetails()?.name}</p>
                        <p className="text-xs text-muted-foreground">{getSelectedEquipmentDetails()?.description}</p>
                      </div>

                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-semibold mb-2">Schedule</h4>
                        <p className="text-sm">Date: {selectedDate ? format(selectedDate, "PPP") : ""}</p>
                        <p className="text-sm">Time: {selectedTime}</p>
                        <p className="text-sm">Duration: {duration}</p>
                      </div>

                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-semibold mb-2">Service Option</h4>
                        <p className="text-sm">
                          {needsOperator === "yes" ? "With Professional Operator" : "Self-Operated"}
                        </p>
                      </div>

                      <div className="p-4 bg-primary/10 rounded-lg">
                        <h4 className="font-semibold mb-3">Our Bank Account Details</h4>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => {
                            window.scrollTo(0, 0);
                            navigate('/contact#payments-details');
                          }}
                          className="w-full"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-semibold mb-2">Contact Details</h4>
                        <p className="text-sm">Name: {customerInfo.name}</p>
                        <p className="text-sm">Email: {customerInfo.email}</p>
                        <p className="text-sm">WhatsApp: {customerInfo.phone}</p>
                        {customerInfo.address && <p className="text-sm">Address: {customerInfo.address}</p>}
                        {customerInfo.postcode && <p className="text-sm">Postcode: {customerInfo.postcode}</p>}
                      </div>

                      {customerInfo.specialRequirements && <div className="p-4 bg-muted/30 rounded-lg">
                          <h4 className="font-semibold mb-2">Special Requirements</h4>
                          <p className="text-sm">{customerInfo.specialRequirements}</p>
                        </div>}
                    </div>
                  </div>
                </div>}

              {/* Success Message */}
              {currentStep === 5 && isSubmitted && <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-green-600">Form Submitted Successfully!</h3>
                    <p className="text-muted-foreground mb-4">
                      Thank you for your booking request. We will get back to you as soon as possible during our working hours.
                    </p>
                  </div>

                  <div className="p-4 bg-primary/10 rounded-lg">
                    <h4 className="font-semibold mb-2">Our Working Hours</h4>
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

                  <Button onClick={() => navigate("/")} className="btn-hero">
                    Return to Home
                  </Button>
                </div>}
            </CardContent>
                </Card>
              )}

          {/* Navigation Buttons */}
          {currentStep > 0 && (!isSubmitted || currentStep < 5) && (
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={prevStep} disabled={currentStep === 1} className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Previous
              </Button>

              <div className="text-sm text-muted-foreground">
                Step {currentStep} of 5
              </div>

              {currentStep < 5 ? (
                <Button onClick={nextStep} disabled={!isStepValid()} className="flex items-center gap-2">
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} disabled={!isStepValid() || isSubmitted} className="btn-hero flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Submit Booking
                </Button>
              )}
            </div>
          )}

          {/* Help Section */}
          <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <h3 className="font-semibold text-foreground mb-2">Get In Touch </h3>
            <p className="text-sm text-muted-foreground mb-4">WhatsApp us your photo/video along with your name and number, and we will provide you with a quote.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/447963378502" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <MessageCircle className="h-4 w-4" />
                WhatsApp us: 07963378502
              </a>
              <a href="mailto:basheegardens@gmail.com" className="flex items-center gap-2 text-sm text-primary hover:underline">
                <Mail className="h-4 w-4" />
                Email: basheegardens@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};
export default Booking;