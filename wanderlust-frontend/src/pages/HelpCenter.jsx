import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const HelpCenter = () => {
  const [search, setSearch] = useState("");

  const topics = [
    {
      title: "Booking Issues",
      desc: "Problems with booking or payments",
      icon: "🧾",
    },
    {
      title: "Cancellation & Refund",
      desc: "Understand refund policies and timelines",
      icon: "💸",
    },
    {
      title: "Account Help",
      desc: "Manage profile, password & settings",
      icon: "👤",
    },
    {
      title: "Travel Guidelines",
      desc: "Important travel tips & safety rules",
      icon: "🌍",
    },
  ];

  const faqs = [
    {
      q: "How do I cancel a booking?",
      a: "Go to your bookings page and click cancel.",
    },
    {
      q: "When will I get my refund?",
      a: "Refunds are processed within 5-7 business days.",
    },
    {
      q: "Can I reschedule my trip?",
      a: "Yes, depending on availability and policy.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 px-6 bg-gray-50 dark:bg-gray-900 text-black dark:text-white">

      {/* HERO */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold mb-4"
        >
          Help Center 🛠️
        </motion.h1>

        <p className="text-gray-600 dark:text-gray-300">
          Find answers, guides, and support
        </p>
      </div>

      {/* SEARCH */}
      <div className="max-w-xl mx-auto mb-16">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search help articles..."
          className="w-full p-4 rounded-full border shadow focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
        />
      </div>

      {/* TOPICS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
        {topics
          .filter((t) =>
            t.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow hover:shadow-xl transition cursor-pointer"
            >
              <div className="text-3xl mb-3">{t.icon}</div>
              <h3 className="font-bold mb-1">{t.title}</h3>
              <p className="text-gray-500 text-sm">{t.desc}</p>
            </motion.div>
          ))}
      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="p-5 rounded-xl bg-white dark:bg-gray-800 shadow cursor-pointer"
            >
              <summary className="font-semibold">
                {faq.q}
              </summary>
              <p className="mt-2 text-gray-500 text-sm">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* CONTACT SUPPORT */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 rounded-3xl max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Still need help?
        </h2>

        <p className="mb-6">
          Our support team is here 24/7 to assist you.
        </p>

        <Link
          to="/contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold"
        >
          Contact Support
        </Link>
      </div>

    </div>
  );
};

export default HelpCenter;