import Layout from "@/components/layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container-narrow section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-section text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none space-y-8">
            <div>
              <p className="text-body text-muted-foreground mb-6">
                Last updated: August 2025
              </p>
              <p className="text-body">
                Bashee Gardens Hires Ltd ("we", "our", or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, and safeguard your information when you use our services.
              </p>
            </div>

            <section>
              <h2 className="text-subsection text-foreground mb-4">1. Information We Collect</h2>
              <div className="space-y-4 text-body">
                <h3 className="font-semibold">Personal Information</h3>
                <p>When you book our services, we may collect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information (email, WhatsApp number, address)</li>
                  <li>Service location and requirements</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Communication preferences</li>
                </ul>
                
                <h3 className="font-semibold mt-6">Website Usage Information</h3>
                <p>We automatically collect certain information when you visit our website:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website addresses</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-subsection text-foreground mb-4">2. How We Use Your Information</h2>
              <div className="text-body">
                <p className="mb-4">We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and manage our garden equipment hire services</li>
                  <li>Process bookings and payments</li>
                  <li>Communicate with you about your bookings</li>
                  <li>Send service updates and promotional materials (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-subsection text-foreground mb-4">3. Information Sharing</h2>
              <div className="text-body">
                <p className="mb-4">We do not sell your personal information. We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Service providers who help us operate our business (payment processors, delivery services)</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners with your explicit consent</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-subsection text-foreground mb-4">4. Data Security</h2>
              <div className="text-body">
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-subsection text-foreground mb-4">5. Your Rights</h2>
              <div className="text-body">
                <p className="mb-4">Under GDPR, you have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-subsection text-foreground mb-4">6. Cookies</h2>
              <div className="text-body">
                <p>
                  Our website uses cookies to enhance your browsing experience. You can control cookie settings 
                  through your browser preferences. Essential cookies are necessary for the website to function properly.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-subsection text-foreground mb-4">7. Data Retention</h2>
              <div className="text-body">
                <p>
                  We retain your personal information for as long as necessary to provide our services and comply 
                  with legal obligations. Booking information is typically retained for 7 years for tax and legal purposes.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-subsection text-foreground mb-4">8. Contact Us</h2>
              <div className="text-body">
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or your personal data, please contact us:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p><strong>Bashee Gardens Hires Ltd</strong></p>
                  <p>Email: basheegardens@gmail.com</p>
                  <p>WhatsApp: 07963378502</p>
                  <p>Address: UK</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-subsection text-foreground mb-4">9. Changes to This Policy</h2>
              <div className="text-body">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by 
                  posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;