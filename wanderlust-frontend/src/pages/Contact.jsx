import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-28 pb-24 px-6 bg-gray-50 dark:bg-gray-900">

      {/* HERO */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold mb-4"
        >
          Get in Touch
        </motion.h1>

        <p className="text-gray-600 dark:text-gray-300">
          We’d love to hear from you. Reach out anytime.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE - INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow">
            <h3 className="font-bold mb-2">📧 Email</h3>
            <p className="text-gray-500 text-sm">
              support@wanderlust.com
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow">
            <h3 className="font-bold mb-2">📞 Phone</h3>
            <p className="text-gray-500 text-sm">
              +91 98765 43210
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow">
            <h3 className="font-bold mb-2">📍 Location</h3>
            <p className="text-gray-500 text-sm">
              Varanasi, India
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-8 space-y-4"
        >

          <input
            required
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900"
          />

          <input
            required
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900"
          />

          <textarea
            required
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            {loading ? "Sending..." : sent ? "Message Sent ✅" : "Send Message"}
          </button>

        </motion.form>
      </div>

      {/* FAQ QUICK LINKS */}
      <div className="mt-24 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Need quick help?
        </h2>

        <p className="text-gray-500 mb-6">
          Check our FAQs or Help Center for instant answers.
        </p>

        <div className="flex justify-center gap-4">
          <a href="/faqs" className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            FAQs
          </a>
          <a href="/help" className="px-6 py-2 bg-blue-600 text-white rounded-full">
            Help Center
          </a>
        </div>
      </div>

    </div>
  );
};

export default Contact;