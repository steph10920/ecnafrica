import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  BookOpen,
  Globe2,
  Users2,
  FileText,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

import Logo from "../assets/ecnlogo.jpg";
import { searchMap } from "../data/searchMap";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation handler
  const navigate = (path) => {
    setMobileOpen(false);
    setCategoriesOpen(false);
    setSuggestions([]);
    window.location.href = path || "/";
  };

  // Search suggestions logic
  useEffect(() => {
    if (!searchQuery) return setSuggestions([]);

    const q = searchQuery.toLowerCase();
    const matched = searchMap
      .map((item) => {
        const keywords = item.keywords.filter((k) =>
          k.toLowerCase().includes(q)
        );
        if (!keywords.length) return null;
        const score = keywords.reduce(
          (acc, k) => acc + (k.toLowerCase().startsWith(q) ? 2 : 1),
          0
        );
        return { ...item, score, keywords };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    setSuggestions(matched);
  }, [searchQuery]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length) navigate(suggestions[0].page);
    else alert("No matching page or section found!");
    setSearchQuery("");
  };

  // Navbar shadow on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menu structure
  const links = [
    ["Home", "/"],
    ["Programs", "/programs"],
    ["Stories", "/stories"],
    ["Newsroom", "/newsroom"],
    ["About Us", "/about"],
    ["Contact Us", "/contact"],
  ];

  const categories = [
    ["arts-and-sports", "Arts & Sports"],
    ["environment", "Environment"],
    ["quality-education", "Quality Education"],
    ["careers", "Careers"],
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => navigate("/")} className="flex items-center gap-3">
          <img src={Logo} alt="ECN Africa Logo" className="h-14 w-25 object-contain rounded-full" />
          <span className="text-green-700 font-bold text-2xl tracking-wide">ECN</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 font-medium text-gray-700">
          {links.map(([label, path]) => (
            <button
              key={label}
              onClick={() => navigate(path)}
              className="hover:text-green-600 transition"
            >
              {label}
            </button>
          ))}

          {/* Categories Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCategoriesOpen(true)}
            onMouseLeave={() => setCategoriesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-green-600 transition">
              Categories <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {categoriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute top-full mt-2 bg-white border rounded-xl shadow-lg w-52 overflow-hidden"
                >
                  {categories.map(([path, label]) => (
                    <button
                      key={path}
                      onClick={() => navigate(`/categories/${path}`)}
                      className="block w-full text-left px-4 py-3 hover:bg-green-50 hover:text-green-700 transition"
                    >
                      {label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Search */}
          <div className="relative ml-4">
            <form onSubmit={handleSearchSubmit}>
              <div className="relative">
                <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="pl-10 pr-3 py-2 rounded-full border bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition text-sm w-56"
                />
              </div>
            </form>
            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto">
                {suggestions.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => navigate(item.page)}
                    className="w-full text-left px-4 py-3 hover:bg-green-50 transition"
                  >
                    {item.keywords.join(", ")}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Donate Button */}
          <button
            onClick={() => navigate("/donate")}
            className="ml-4 bg-green-600 text-white px-5 py-2 rounded-full shadow hover:bg-green-700 transition"
          >
            Donate
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-green-700" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-xl border-t flex flex-col"
          >
            {links.map(([label, path]) => (
              <button
                key={label}
                onClick={() => navigate(path)}
                className="px-5 py-4 border-b hover:bg-green-50 transition text-left"
              >
                {label}
              </button>
            ))}

            {/* Categories */}
            <button
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              className="px-5 py-4 flex justify-between items-center border-b hover:bg-green-50 transition"
            >
              Categories <ChevronDown className={`transition-transform ${categoriesOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {categoriesOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden border-b"
                >
                  {categories.map(([path, label]) => (
                    <button
                      key={path}
                      onClick={() => navigate(`/categories/${path}`)}
                      className="px-8 py-3 w-full text-left hover:bg-green-50 transition"
                    >
                      {label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mobile Search */}
            <div className="p-4">
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center border rounded-full px-3"
              >
                <Search size={18} className="text-gray-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-3 py-2 text-sm focus:outline-none"
                />
              </form>
            </div>

            {/* Mobile Donate */}
            <button
              onClick={() => navigate("/donate")}
              className="mx-5 mb-5 bg-green-600 text-white px-5 py-2 rounded-full shadow hover:bg-green-700 transition"
            >
              Donate
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
