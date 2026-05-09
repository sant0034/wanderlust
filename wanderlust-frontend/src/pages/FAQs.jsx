import { useState } from "react";

const FAQs = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "How do I book a trip?",
      a: "Go to destinations and click 'Book Now'.",
    },
    {
      q: "Can I cancel my booking?",
      a: "Yes, cancellation is available as per policy.",
    },
    {
      q: "Do you offer refunds?",
      a: "Refunds depend on cancellation timing.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
          FAQs ❓
        </h1>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white rounded-xl shadow">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left p-5 font-semibold flex justify-between"
              >
                {f.q}
                <span>{open === i ? "-" : "+"}</span>
              </button>

              {open === i && (
                <p className="p-5 pt-0 text-gray-600">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default FAQs;