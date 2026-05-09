import { useEffect, useState } from "react";

const sections = [
  "Acceptance",
  "Responsibilities",
  "Booking",
  "Refund",
  "Liability",
  "IP Rights",
  "Termination",
  "Changes",
  "Law",
];

const Terms = () => {
  const [active, setActive] = useState("Acceptance");

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(sec);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-200">

      {/* HERO */}
      <div className="text-center mb-12 px-6">
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Terms & Conditions 📜
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          A premium experience designed for modern users.
        </p>
      </div>

      <div className="flex max-w-7xl mx-auto px-6 gap-10">

        {/* SIDEBAR */}
        <div className="hidden md:block w-64 sticky top-28 h-fit">
          <div className="bg-white/70 dark:bg-white/5 backdrop-blur-lg p-6 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold mb-4">Contents</h3>

            <ul className="space-y-3">
              {sections.map((sec) => (
                <li key={sec}>
                  <a
                    href={`#${sec}`}
                    className={`block px-3 py-2 rounded-lg transition ${
                      active === sec
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    {sec}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex-1 space-y-12">

          {sections.map((sec, i) => (
            <section
              key={sec}
              id={sec}
              className="bg-white/70 dark:bg-white/5 backdrop-blur-lg p-8 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-[1.01] transition"
            >
              <h2 className="text-2xl font-bold mb-4">
                {i + 1}. {sec}
              </h2>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                This section outlines important policies and guidelines that
                govern how you interact with Wanderlust. Our goal is to ensure
                transparency, fairness, and a seamless travel experience.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                <li>Clear legal framework</li>
                <li>User-friendly explanation</li>
                <li>Transparency and trust</li>
                <li>Secure and reliable services</li>
              </ul>
            </section>
          ))}

          {/* CTA */}
          <div className="text-center py-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
            <p className="mb-6">We’re always here for you</p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
              Contact Support
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Terms;