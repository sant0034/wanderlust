const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">

      <div className="max-w-5xl mx-auto bg-white p-10 rounded-xl shadow-lg">

        {/* HEADER */}
        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          Privacy Policy 🔒
        </h1>

        <p className="text-gray-600 mb-8">
          At Wanderlust, your privacy is extremely important to us. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our platform.
        </p>

        {/* SECTION */}
        <div className="space-y-10 text-gray-700 leading-relaxed">

          {/* 1 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              1. Information We Collect
            </h2>
            <p>
              We collect different types of information to provide and improve our services:
            </p>

            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li>Personal details (Name, Email, Phone number)</li>
              <li>Booking and payment information</li>
              <li>Location and travel preferences</li>
              <li>Device and browser data</li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              2. How We Use Your Information
            </h2>
            <p>We use your data to:</p>

            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li>Process bookings and payments</li>
              <li>Provide personalized travel recommendations</li>
              <li>Improve our website and services</li>
              <li>Send updates, offers, and newsletters</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              3. Sharing of Information
            </h2>
            <p>
              We do not sell your personal data. However, we may share information with:
            </p>

            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li>Trusted travel partners (hotels, airlines)</li>
              <li>Payment gateways for secure transactions</li>
              <li>Legal authorities if required by law</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              4. Cookies & Tracking
            </h2>
            <p>
              We use cookies to enhance your experience, remember preferences, and analyze traffic. You can disable cookies in your browser settings.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              5. Data Security
            </h2>
            <p>
              We use industry-standard encryption and security measures to protect your personal data from unauthorized access, misuse, or disclosure.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              6. Your Rights
            </h2>
            <p>You have the right to:</p>

            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li>Access your personal data</li>
              <li>Request corrections or updates</li>
              <li>Delete your account and data</li>
              <li>Opt-out of marketing emails</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              7. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party sites. We are not responsible for their privacy practices.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              9. Contact Us
            </h2>
            <p>
              If you have any questions regarding this policy, please contact us:
            </p>

            <div className="mt-3 bg-gray-100 p-4 rounded-lg">
              <p>📧 support@wanderlust.com</p>
              <p>📞 +91 98765 43210</p>
              <p>📍 India</p>
            </div>
          </section>

        </div>

      </div>

    </div>
  );
};

export default PrivacyPolicy;