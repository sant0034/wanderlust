import { Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import MapView from "../components/MapView";
import { destinations } from "../data/destinations";
import { testimonials } from "../data/testimonials";


const Home = () => {
  

  const [category, setCategory] = useState("All");
  
  const filteredDestinations = useMemo(() => {
    return category === "All"
      ? destinations
      : destinations.filter((d) => d.type === category);
  }, [category]);

  const features = [
    {
      title: "Smart Booking Engine",
      desc: "AI-powered travel recommendations for best deals.",
    },
    {
      title: "Instant Confirmation",
      desc: "Get booking confirmation in seconds.",
    },
    {
      title: "24/7 Support",
      desc: "We assist you anytime, anywhere.",
    },
  ];

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')] bg-cover bg-center">
        <div className="bg-black/60 p-10 rounded-2xl max-w-3xl text-white">
          <h1 className="text-5xl font-bold mb-4">
            Travel Smarter, Not Harder ✈️
          </h1>
          <p className="text-gray-200 mb-6">
            Discover premium travel experiences curated just for you
          </p>

          <div className="flex gap-4 justify-center">
            <Link to="/destinations" className="bg-blue-600 px-6 py-3 rounded-full">
              Explore Trips
            </Link>
            <Link to="/contact" className="bg-white text-black px-6 py-3 rounded-full">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">
          Why Choose Wanderlust
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-2xl shadow bg-white dark:bg-gray-800">
              <h3 className="font-bold text-xl mb-2">{f.title}</h3>
              <p className="text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DESTINATION PREVIEW (IMAGE HEAVY) */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-10">
          Popular Destinations 🇮🇳
        </h2>

        {/* CATEGORY FILTER - MUST BE INSIDE RETURN */}
        <div className="flex justify-center gap-4 mb-8">
          {["All", "Beach", "Hill", "Heritage"].map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-full transition ${category === c
                ? "bg-blue-600 text-white scale-105"
                : "bg-gray-200 dark:bg-gray-700 hover:scale-105"
                }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* CAROUSEL */}

        {filteredDestinations.length === 0 ? (
          <p className="text-center text-gray-500">
            No destinations found
          </p>
        ) : (
          <AutoDestinationCarousel destinations={filteredDestinations} />
        )}
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          What Travelers Say ❤️
        </h2>

        <Carousel testimonials={testimonials} />
      </section>

      {/* MAP SECTION */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Explore Map 🌍
        </h2>

        <MapView />
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Journey Today
        </h2>
        <Link to="/booking" className="bg-white text-blue-600 px-6 py-3 rounded-full">
          Book Now
        </Link>
      </section>

    </div>
  );
};



const Carousel = ({ testimonials }) => {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 640) setItemsPerView(2);
      else if (window.innerWidth < 1024) setItemsPerView(3);
      else setItemsPerView(4);
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + itemsPerView) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0
        ? Math.max(testimonials.length - itemsPerView, 0)
        : prev - itemsPerView
    );
  };

  const visible = () => {
  const total = testimonials.length;
  const result = [];

  for (let i = 0; i < itemsPerView; i++) {
    result.push(testimonials[(index + i) % total]);
  }

  return result;
};

  return (
    <div className="relative">

      {/* LEFT */}
      <button
        onClick={prev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-3 py-2 rounded-full"
      >
        ◀
      </button>

      {/* RIGHT */}
      <button
        onClick={next}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-3 py-2 rounded-full"
      >
        ▶
      </button>

      <div className="flex gap-6 overflow-hidden px-8 sm:px-10 md:px-12">
        {visible().map((t, i) => (
          <div
            key={i}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-6 bg-white dark:bg-gray-800 shadow rounded-2xl text-center transition-all duration-300 hover:scale-105"
          >
            <img
              src={t.img}
              alt={t.name}
              className="w-16 h-16 mx-auto rounded-full mb-4 object-cover"
            />

            <p className="text-gray-600 dark:text-gray-300 italic mb-3">
              "{t.text}"
            </p>

            <h3 className="font-bold">{t.name}</h3>

            <div className="text-yellow-500 mt-2">
              {"⭐".repeat(5)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AutoDestinationCarousel = ({ destinations }) => {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(6);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setItemsPerView(2);   // mobile
      else if (window.innerWidth < 1024) setItemsPerView(3); // tablet
      else setItemsPerView(6); // desktop
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => {
      const next = prev + itemsPerView;
      return next >= destinations.length ? 0 : next;
    });
  };

  const prevSlide = () => {
    setIndex((prev) => {
      const next = prev - itemsPerView;
      return next < 0 ? Math.max(destinations.length - itemsPerView, 0) : next;
    });
  };

  const visible = () => {
    const total = destinations.length;
    const result = [];

    for (let i = 0; i < itemsPerView; i++) {
      result.push(destinations[(index + i) % total]);
    }

    return result;
  };

  return (
    <div className="relative">
      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-3 py-2 rounded-full"
      >
        ◀
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-3 py-2 rounded-full"
      >
        ▶
      </button>

      {/* CARDS */}
      <div className="flex gap-6 justify-center overflow-hidden px-10">
        {visible().map((d, i) => (
          <div
            key={i}
            className="h-[260px] flex flex-col justify-between bg-white dark:bg-gray-900 rounded-2xl shadow-lg group transition-all duration-300 hover:scale-105"
          >
            <div className="relative overflow-hidden">
              <img
                src={d.img}
                alt={d.name}
                className="h-[150px] w-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>
            </div>

            <div className="p-3 text-center flex flex-col justify-between flex-1">
              <h3 className="font-bold text-sm mb-2">{d.name}</h3>

              <Link
                to="/booking"
                className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;