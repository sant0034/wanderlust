import { useParams, Link } from "react-router-dom";
import { destinations } from "../data/destinations";

const DestinationDetail = () => {
  const { name } = useParams();

  const destination = destinations.find(
    (d) => d.name === decodeURIComponent(name)
  );

  if (!destination) {
    return (
      <div className="text-center mt-40">
        <h1 className="text-2xl font-bold">Destination Not Found</h1>
        <Link to="/destinations" className="text-blue-500">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20">

      {/* HERO SECTION */}
      <div className="relative h-[400px] md:h-[500px]">
        <img
          src={destination.img}
          alt={destination.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            {destination.name}
          </h1>

          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm mt-3 w-fit">
            {destination.type}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            About this destination
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Discover the beauty of {destination.name}. Enjoy a premium travel experience with curated packages, breathtaking views, and unforgettable memories.
          </p>

          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>✔ 5 Days / 4 Nights Package</li>
            <li>✔ Free Cancellation</li>
            <li>✔ Guided Tours Included</li>
            <li>✔ 24/7 Support</li>
          </ul>
        </div>

        {/* RIGHT (CARD) */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl">

          <h3 className="text-xl font-bold mb-4">Book This Trip</h3>

          <div className="flex justify-between mb-3">
            <span>Price per person</span>
            <span className="font-semibold text-blue-600">
              ₹{destination.price || 4999}
            </span>
          </div>

          <div className="flex justify-between mb-6">
            <span>Duration</span>
            <span>5 Days</span>
          </div>

          <Link
            to="/booking"
            state={{ destination }}
            className="block w-full text-center bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition"
          >
            Book Now
          </Link>

        </div>
      </div>

    </div>
  );
};

export default DestinationDetail;