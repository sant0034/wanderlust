import { useState } from "react";
import { destinations } from "../data/destinations";
import DestinationCard from "../components/ui/DestinationCard";

const Destinations = () => {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = destinations.filter((d) => {
    const matchesCategory =
      category === "All" || d.type === category;

    const matchesSearch = d.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="px-6 py-16 max-w-7xl mx-auto">

      <h1 className="text-4xl font-bold mb-8 text-center">
        Explore Destinations 🌍
      </h1>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search destinations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-full border focus:ring-2 focus:ring-blue-500 dark:bg-gray-900"
        />
      </div>

      {/* FILTER */}
      <div className="flex justify-center gap-4 mb-10">
        {["All", "Beach", "Hill", "Heritage"].map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-4 py-2 rounded-full ${category === c
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
              }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* GRID (REAL UI FIX) */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((d, i) => (
            <DestinationCard key={i} d={d} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No destinations found 😢
        </p>
      )}



    </div>
  );
};

export default Destinations;