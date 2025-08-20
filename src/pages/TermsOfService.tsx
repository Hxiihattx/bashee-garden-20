import Layout from "@/components/layout/Layout";

const TermsOfService = () => {
  return (
    <Layout>
      <div className="container-narrow section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-section text-foreground mb-8">Terms of Service</h1>
          
          <div className="prose max-w-none space-y-8">
            <div>
              <p className="text-body text-muted-foreground mb-6">
                Last updated: January 2024
              </p>
              <p className="text-body">
                These Terms of Service ("Terms") govern your use of services provided by Bashee Gardens Hires Ltd 
                ("Company", "we", "our", or "us"). By booking our services, you agree to these Terms.
              </p>
            </div>

            <section>
              <h2 className="text-subsection text-foreground mb-4">1. Service Description</h2>
              <div className="text-body">
                <p className="mb-4">Bashee Gardens Hires Ltd provides:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Garden equipment hire services</li>
                  <li>Remote-controlled mower rental</li>
                  <li>Ride-on tractor rental</li>
                  <li>Hedge trimmer and strimmer rental</li>
                  <li>Garden clearance services</li>
                  <li>Equipment operation services</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-subsection text-foreground mb-4">2. Booking and Payment</h2>
              <div className="text-body space-y-4">
                <h3 className="font-semibold">Booking Process</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All bookings are subject to equipment availability</li>
                  <li>Bookings are confirmed only after payment is received</li>
                  <li>We reserve the right to decline any booking</li>
                </ul>
                
                <h3 className="font-semibold">Payment Terms</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payment is required at the time of booking</li>
                  <li>We accept major credit cards and bank transfers (Account Name: Bashee 1 Ltd, Account: 27724396, Sort Code: 04-06-05)</li>
                  <li>A security deposit may be required for certain equipment</li>
                  <li>All prices include VAT where applicable</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-subsection text-foreground mb-4">3. Equipment Use and Care</h2>
              <div className="text-body">
                <h3 className="font-semibold mb-3">Customer Responsibilities</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Use equipment only for its intended purpose</li>
                  <li>Follow all safety instructions and training provided</li>
                  <li>Inspect equipment before use and report any damage immediately</li>
                  <li>Ensure equipment is stored securely when not in use</li>
                  <li>Return equipment in the same condition as received</li>
                </ul>
                
                <h3 className="font-semibold mb-3">Prohibited Uses</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use by persons under 18 years of age without supervision</li>
                  <li>Use while under the influence of alcohol or drugs</li>
                  <li>Modifications or repairs to equipment</li>
                  <li>Use outside the agreed service area</li>
                  <li>Commercial use without prior agreement</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-subsection text-foreground mb-4">4. Delivery and Collection</h2>
              <div className="text-body">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Delivery times are estimates and may vary due to weather or traffic</li>
                  <li>Someone must be present for delivery and collection</li>
                  <li>Additional charges apply for failed delivery attempts</li>
                  <li>We provide delivery within our service area</li>
                  <li>Equipment must be accessible for our delivery team</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-subsection text-foreground mb-4">5. Cancellation and Refunds</h2>
              <div className="text-body">
                <h3 className="font-semibold mb-3">Cancellation by Customer</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Cancellations more than 48 hours before delivery: Full refund</li>
                  <li>Cancellations 24-48 hours before delivery: 50% refund</li>
                  <li>Cancellations less than 24 hours before delivery: No refund</li>
                  <li>Weather-related cancellations may be rescheduled without penalty</li>
                </ul>
                
                <h3 className="font-semibold mb-3">Cancellation by Company</h3>
                <p>We may cancel bookings due to equipment failure, extreme weather, or other circumstances beyond our control. Full refunds will be provided in such cases.</p>
              </div>
            </section>

            <section>
              <h2 className="text-subsection text-foreground mb-4">6. Liability and Insurance</h2>
              <div className="text-body">
                <h3 className="font-semibold mb-3">Our Insurance</h3>
                <p className="mb-4">We maintain comprehensive public liability insurance. However, this does not cover:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Damage caused by misuse of equipment</li>
                  <li>Injury resulting from failure to follow safety instructions</li>
                  <li>Damage to customer's property due to their negligence</li>
                </ul>
                
                <h3 className="font-semibold mb-3">Customer Liability</h3>
                <p>Customers are responsible for any damage to equipment and for any third-party claims arising from their use of our equipment.</p>
              </div>
            </section>

            <section>
              <h2 className="text-subsection text-foreground mb-4">7. Force Majeure</h2>
              <div className="text-body">
                <p>
                  We are not liable for any failure to perform our obligations due to circumstances beyond our reasonable control, 
                  including but not limited to natural disasters, government actions, strikes, or equipment failure.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-subsection text-foreground mb-4">8. Dispute Resolution</h2>
              <div className="text-body">
                <p className="mb-4">
                  We aim to resolve all disputes amicably. If you have a complaint:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Contact us immediately to discuss the issue</li>
                  <li>If unresolved, you may pursue mediation through trading standards</li>
                  <li>These terms are governed by English law</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-subsection text-foreground mb-4">9. Data Protection</h2>
              <div className="text-body">
                <p>
                  Your personal data is processed in accordance with our Privacy Policy and GDPR requirements. 
                  We may use your information to provide services, process payments, and communicate with you about your booking.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-subsection text-foreground mb-4">10. Changes to Terms</h2>
              <div className="text-body">
                <p>
                  We may update these Terms from time to time. Changes will be posted on our website and will apply to 
                  future bookings. Continued use of our services after changes indicates acceptance of the new Terms.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-subsection text-foreground mb-4">11. Contact Information</h2>
              <div className="text-body">
                <p className="mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p><strong>Bashee Gardens Hires Ltd</strong></p>
                  <p>Email: info@basheegardens.co.uk</p>
                  <p>Phone: 07963378502</p>
                  <p>Service Area: Croydon & Surrounding Areas</p>
                  <p>Hours: Monday-Friday 9AM-5PM, Saturday 9AM-1PM, Sunday Closed</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;