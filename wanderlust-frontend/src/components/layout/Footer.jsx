import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) return alert("Enter email");

        alert("Subscribed successfully ✅");

        navigate("/"); // redirect to home
    };

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-16">

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

                {/* BRAND */}
                <div>
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                        Wanderlust ✈️
                    </h2>
                    <p className="text-gray-400 mb-4">
                        Discover the world with curated travel experiences, best prices, and unforgettable memories.
                    </p>

                    <div className="flex gap-4 mt-4 text-xl">
                        <span className="hover:text-blue-500 cursor-pointer">🌐</span>
                        <span className="hover:text-blue-500 cursor-pointer">📘</span>
                        <span className="hover:text-pink-500 cursor-pointer">📸</span>
                        <span className="hover:text-sky-400 cursor-pointer">🐦</span>
                    </div>
                </div>

                {/* LINKS */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
                    <ul className="space-y-3 text-gray-400">
                        <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                        <li><Link to="/destinations" className="hover:text-white transition">Destinations</Link></li>
                        <li><Link to="/about" className="hover:text-white transition">About</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
                    </ul>
                </div>

                {/* SUPPORT */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg">Support</h3>
                    <ul className="space-y-3 text-gray-400">
                        <li><Link to="/help" className="hover:text-white cursor-pointer">Help Center</Link></li>
                        <li><Link to="/privacy" className="hover:text-white cursor-pointer">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-white cursor-pointer">Terms & Conditions</Link></li>
                        <li><Link to="/faqs" className="hover:text-white cursor-pointer">FAQs</Link></li>
                    </ul>
                </div>

                {/* NEWSLETTER */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg">Stay Updated</h3>
                    <p className="text-gray-400 mb-4">
                        Subscribe to get travel deals & updates.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="flex items-center bg-gray-800 rounded-full overflow-hidden"
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-grow px-4 py-2 bg-transparent text-white outline-none"
                        />

                        <button
                            type="submit"
                            className="bg-blue-600 px-5 py-2 hover:bg-blue-700 transition"
                        >
                            →
                        </button>
                    </form>
                </div>

            </div>

            <div className="mt-12 border-t border-gray-700 py-6 text-center text-gray-500 text-sm">
                © 2026 Wanderlust Travel. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;