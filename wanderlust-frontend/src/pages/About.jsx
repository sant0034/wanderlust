import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 10000;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">

      {/* HERO */}
      <section className="pt-28 pb-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-extrabold mb-6"
        >
          We’re Building the Future of{" "}
          <span className="text-blue-600">Travel</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300"
        >
          Discover, plan, and book unforgettable experiences — all in one place.
        </motion.p>
      </section>

      {/* STORY */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          className="rounded-3xl shadow-xl"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Wanderlust was created to simplify travel planning and make exploring the world effortless.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Today, thousands of travelers trust us to design their perfect journeys.
          </p>
        </motion.div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {["Mission", "Vision"].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-8 rounded-3xl bg-white dark:bg-gray-900 shadow-lg hover:scale-105 transition"
            >
              <h2 className="text-2xl font-bold mb-3">
                {item === "Mission" ? "🎯 Our Mission" : "🚀 Our Vision"}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {item === "Mission"
                  ? "Make travel accessible, seamless, and enjoyable for everyone."
                  : "Become the world’s most trusted travel platform."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Customer First",
              desc: "Every decision we make is centered around improving the traveler experience.",
              icon: "🌍",
            },
            {
              title: "Innovation",
              desc: "We leverage technology to make travel smarter and more efficient.",
              icon: "🚀",
            },
            {
              title: "Trust & Transparency",
              desc: "No hidden fees. No surprises. Just honest travel experiences.",
              icon: "🔐",
            },
            {
              title: "Simplicity",
              desc: "We remove complexity so you can focus on enjoying your journey.",
              icon: "✨",
            },
          ].map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08, rotate: 1 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-xl text-center transition"
            >
              <div className="text-4xl mb-4">{v.icon}</div>
              <h3 className="font-bold text-lg mb-2">{v.title}</h3>
              <p className="text-gray-500 text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* HOW IT WORKS */}
      <section className="py-24 px-6 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-16">
          How Wanderlust Works
        </h2>

        <div className="relative max-w-5xl mx-auto">

          {/* LINE */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-200"></div>

          <div className="grid md:grid-cols-3 gap-12 text-center relative">

            {[
              {
                step: "01",
                title: "Discover",
                desc: "Browse curated destinations tailored to your travel style.",
              },
              {
                step: "02",
                title: "Customize",
                desc: "Plan your trip with smart AI recommendations.",
              },
              {
                step: "03",
                title: "Book & Enjoy",
                desc: "Secure your trip instantly and travel stress-free.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold shadow-lg">
                  {item.step}
                </div>

                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* WHY TRUST US */}
      <section className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Travelers Trust Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {[
            {
              title: "Verified Destinations",
              desc: "Every listing is reviewed and curated for quality.",
            },
            {
              title: "Secure Payments",
              desc: "End-to-end encryption ensures safe transactions.",
            },
            {
              title: "24/7 Global Support",
              desc: "We’re always here to help you anywhere in the world.",
            },
            {
              title: "Best Price Guarantee",
              desc: "We ensure you always get the best deal available.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition"
            >
              <div className="text-blue-600 text-2xl">✔</div>
              <div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </section>
      {/* STATS */}
      <section className="py-24 px-6 text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <h2 className="text-4xl font-bold mb-16">
          Our Impact
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">

          {[
            { value: "10K+", label: "Happy Travelers" },
            { value: "500+", label: "Destinations" },
            { value: "4.9⭐", label: "Average Rating" },
            { value: "24/7", label: "Support" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-xl"
            >
              <h3 className="text-4xl font-extrabold text-blue-600 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Journey
        </h2>

        <div className="max-w-4xl mx-auto border-l-2 border-blue-500 pl-6 space-y-10">

          {[
            { year: "2023", text: "Wanderlust idea was born." },
            { year: "2024", text: "Launched first version of platform." },
            { year: "2025", text: "Reached 10,000+ travelers." },
            { year: "2026", text: "Scaling globally with new features." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative pl-6"
            >
              <div className="absolute -left-3 top-1 w-5 h-5 bg-blue-600 rounded-full"></div>

              <h3 className="font-bold text-lg">{item.year}</h3>
              <p className="text-gray-500 text-sm">{item.text}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h2 className="text-4xl font-bold mb-4">
          Start Your Journey Today
        </h2>

        <Link
          to="/destinations"
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold"
        >
          Explore Now
        </Link>
      </section>

    </div>
  );
};

export default About;