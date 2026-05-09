import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  };

  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-md transition">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* BRAND */}
        <h1 className="text-2xl font-extrabold text-blue-600">
          Wanderlust ✈️
        </h1>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link className="hover:text-blue-500" to="/">Home</Link>
          <Link className="hover:text-blue-500" to="/destinations">Destinations</Link>
          <Link className="hover:text-blue-500" to="/about">About</Link>
          <Link className="hover:text-blue-500" to="/contact">Contact</Link>
        </nav>

        {/* RIGHT SIDE ACTIONS */}
        <div className="flex items-center gap-4">

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-sm font-semibold transition hover:scale-105"
          >
            {dark ? "🌙 Dark" : "☀️ Light"}
          </button>

          {/* MOBILE MENU ICON (optional future upgrade) */}
          <div className="md:hidden text-2xl cursor-pointer">
            ☰
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;