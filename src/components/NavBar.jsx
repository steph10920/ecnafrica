import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Home,
  BookOpen,
  Globe2,
  Users2,
  FileText,
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

  const navigate = (path) => {
    setMobileOpen(false);
    setCategoriesOpen(false);
    setSuggestions([]);
    window.location.href = path || "/";
  };

  // SMART SEARCH SYSTEM
  useEffect(() => {
    if (!searchQuery) {
      setSuggestions([]);
      return;
    }

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
    if (suggestions.length) {
      navigate(suggestions[0].page);
    } else {
      alert("No matching page or section found!");
    }
    setSearchQuery("");
  };

  // NAVBAR SHADOW ON SCROLL
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const categories = [
    ["arts-and-sports", "Arts & Sports"],
    ["environment", "Environment"],
    ["quality-education", "Quality Education"],
    ["careers", "Careers"],
  ];

  const desktopLinks = [
    ["Home", "/", Home],
    ["Programmes", "/programs", BookOpen],
    ["Stories", "/stories", FileText],
    ["About Us", "/about", Users2],
    ["Contact Us", "/contact", Globe2],
  ];

  return (
    <header
      className={`fixed w-full z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-lg py-1" : "bg-white py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        {/* LOGO */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 group"
        >
          <img
            src={Logo}
            alt="ECN Africa Logo"
            className={`rounded-full transition-all duration-300 shadow-sm ${
              isScrolled ? "h-10" : "h-14"
            }`}
          />
          <span className="text-green-700 font-bold text-2xl tracking-wide group-hover:text-green-800 transition">
            ECN
          </span>
        </button>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-gray-800">
          {desktopLinks.map(([label, path]) => (
            <button
              key={label}
              onClick={() => navigate(path)}
              className="hover:text-green-600 transition-colors"
            >
              {label}
            </button>
          ))}

          {/* CATEGORIES DROPDOWN */}
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
                  className="absolute top-full mt-3 bg-white border rounded-xl shadow-lg w-60 overflow-hidden"
                >
                  {categories.map(([path, label]) => (
                    <button
                      key={path}
                      onClick={() => navigate(`/categories/${path}`)}
                      className="block w-full text-left px-5 py-3 hover:bg-green-50 hover:text-green-700 transition"
                    >
                      {label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* SEARCH BAR */}
          <div className="relative ml-4">
            <form onSubmit={handleSearchSubmit}>
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-3 top-2.5 text-gray-500"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="pl-10 pr-3 py-2 rounded-full border bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition text-sm"
                />
              </div>
            </form>

            {/* SEARCH SUGGESTIONS */}
            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-md shadow-xl z-50 max-h-60 overflow-y-auto">
                {suggestions.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => navigate(item.page)}
                    className="w-full text-left px-4 py-3 hover:bg-green-50 transition"
                  >
                    {item.keywords.map((keyword, idx) => {
                      const start = keyword
                        .toLowerCase()
                        .indexOf(searchQuery.toLowerCase());

                      if (start === -1)
                        return <span key={idx}>{keyword}</span>;

                      return (
                        <span key={idx}>
                          {keyword.slice(0, start)}
                          <span className="bg-green-200 text-green-900 font-semibold">
                            {keyword.slice(start, start + searchQuery.length)}
                          </span>
                          {keyword.slice(start + searchQuery.length)}
                        </span>
                      );
                    })}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* DONATE */}
          <button
            onClick={() => navigate("/donate")}
            className="bg-green-600 text-white px-5 py-2 rounded-full shadow hover:bg-green-700 hover:shadow-lg transition-all"
          >
            Donate
          </button>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-green-700 text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-xl border-t flex flex-col"
          >
            {desktopLinks.map(([label, path, Icon]) => (
              <button
                key={label}
                onClick={() => navigate(path)}
                className="px-5 py-4 flex items-center gap-3 border-b hover:bg-green-50 transition"
              >
                <Icon size={18} /> {label}
              </button>
            ))}

            {/* MOBILE CATEGORIES */}
            <button
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              className="px-5 py-4 flex items-center justify-between border-b hover:bg-green-50 transition"
            >
              <span className="flex items-center gap-3">
                <Globe2 size={18} /> Categories
              </span>
              <motion.div animate={{ rotate: categoriesOpen ? 180 : 0 }}>
                <ChevronDown />
              </motion.div>
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

            {/* DONATE */}
            <button
              onClick={() => navigate("/donate")}
              className="px-5 py-4 bg-green-600 text-white font-semibold text-center hover:bg-green-700 transition"
            >
              Donate
            </button>

            {/* MOBILE SEARCH */}
            <div className="p-4 relative">
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

              {suggestions.length > 0 && (
                <div className="absolute top-full left-4 right-4 bg-white border rounded-lg shadow-xl mt-1 z-50">
                  {suggestions.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => navigate(item.page)}
                      className="px-4 py-3 w-full text-left hover:bg-green-50 transition"
                    >
                      {item.keywords.join(", ")}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
