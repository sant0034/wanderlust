import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const Booking = () => {
  const { state } = useLocation();
  const destination = state?.destination;

  if (!destination) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">
          No Destination Selected ❌
        </h1>

        <p className="text-gray-500 mb-6">
          Please choose a destination first.
        </p>

        <Link
          to="/destinations"
          className="bg-blue-600 text-white px-6 py-2 rounded-full"
        >
          Explore Destinations
        </Link>
      </div>
    );
  }

  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    people: 1,
  });



  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);


  const pricePerPerson = destination?.price || 4999;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const total = form.people * pricePerPerson;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      toast.success(`Trip to ${destination.name} booked 🎉`);

      setForm({
        name: "",
        email: "",
        date: "",
        people: 1,
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-28 px-6 bg-gray-50 dark:bg-gray-900 text-black dark:text-white">

      {/* HERO */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold mb-4"
        >
          Book Your Dream Trip ✈️
        </motion.h1>

        <p className="text-gray-600 dark:text-gray-300">
          Secure your journey in just a few steps
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT: FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl space-y-4"
        >

          {destination && (
            <div className="mb-4 p-3 bg-blue-50 dark:bg-gray-700 rounded-xl text-sm">
              Booking for: <span className="font-semibold">{destination.name}</span>
            </div>
          )}

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Full Name"
            className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-500 dark:bg-gray-900"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-500 dark:bg-gray-900"
          />

          <input
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            type="date"
            className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-500 dark:bg-gray-900"
          />

          <input
            name="people"
            value={form.people}
            onChange={handleChange}
            type="number"
            min="1"
            className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-blue-500 dark:bg-gray-900"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Processing..." : "Confirm Booking"}
          </button>
        </motion.form>

        {/* RIGHT: SUMMARY */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl space-y-6"
        >

          {destination && (
            <div className="w-full h-40 rounded-2xl overflow-hidden mb-4">
              <img
                src={destination.img}
                alt={destination.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <h2 className="text-2xl font-bold">Booking Summary</h2>

          <div className="flex justify-between">
            <span>Destination</span>
            <span className="font-semibold">
              {destination ? destination.name : "No destination"}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Price / Person</span>
            <span>₹{pricePerPerson}</span>
          </div>

          <div className="flex justify-between">
            <span>People</span>
            <span>{form.people}</span>
          </div>

          <hr />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-blue-600">₹{total}</span>
          </div>

          {/* TRUST BADGES */}
          <div className="mt-6 space-y-2 text-sm text-gray-500">
            <p>✔ Secure Payment</p>
            <p>✔ Free Cancellation</p>
            <p>✔ 24/7 Support</p>
          </div>

        </motion.div>

      </div>

      {/* FOOTER GAP */}
      <div className="pb-24"></div>



    </div>
  );
};

export default Booking;