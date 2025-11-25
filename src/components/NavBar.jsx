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

  const handleNavClick = (path = null) => {
    setMobileOpen(false);
    setCategoriesOpen(false);
    setSuggestions([]);

    if (path) {
      window.location.href = path;
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!searchQuery) {
      setSuggestions([]);
      return;
    }

    const query = searchQuery.toLowerCase();

    const matches = searchMap
      .map((item) => {
        const matchedKeywords = item.keywords.filter((k) =>
          k.toLowerCase().includes(query)
        );
        if (matchedKeywords.length === 0) return null;

        const score = matchedKeywords.reduce(
          (acc, k) => acc + (k.toLowerCase().startsWith(query) ? 2 : 1),
          0
        );

        return { ...item, score, matchedKeywords };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    setSuggestions(matches);
  }, [searchQuery]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      handleNavClick(suggestions[0].page);
    } else {
      alert("No matching page or section found.");
    }
    setSearchQuery("");
  };

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const categories = [
    ["arts-and-sports", "Arts & Sports"],
    ["environment", "Environment"],
    ["quality-education", "Quality Education"],
    ["careers", "Careers"],
  ];

  return (
    <header
      className={`fixed w-full z-50 backdrop-blur-md bg-white/90 shadow-md transition-all duration-300 ${
        isScrolled ? "py-1" : "py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNavClick("/")} className="flex items-center gap-2">
          <img
            src={Logo}
            alt="ECN Logo"
            className={`rounded-full transition-all duration-300 ${
              isScrolled ? "h-12" : "h-16"
            }`}
          />
          <span className="text-green-700 font-bold text-xl md:text-2xl tracking-wide">
            ECN
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7 font-medium text-gray-800">
          <button onClick={() => handleNavClick("/")} className="hover:text-green-700">
            Home
          </button>

          <button onClick={() => handleNavClick("/programs")} className="hover:text-green-700">
            Programmes
          </button>

          {/* Categories Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCategoriesOpen(true)}
            onMouseLeave={() => setCategoriesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-green-700">
              Categories <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {categoriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute top-full mt-2 w-56 bg-white shadow-lg rounded-lg border overflow-hidden z-50"
                >
                  {categories.map(([path, label]) => (
                    <button
                      key={path}
                      onClick={() => handleNavClick(`/categories/${path}`)}
                      className="block w-full text-left px-4 py-2 hover:bg-green-50 hover:text-green-700"
                    >
                      {label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button onClick={() => handleNavClick("/stories")} className="hover:text-green-700">
            Stories
          </button>

          <button onClick={() => handleNavClick("/about")} className="hover:text-green-700">
            About Us
          </button>

          <button onClick={() => handleNavClick("/contact")} className="hover:text-green-700">
            Contact Us
          </button>

          {/* Donate Button */}
          <button
            onClick={() => handleNavClick("/donate")}
            className="bg-green-600 text-white px-5 py-2 rounded-full shadow hover:bg-green-700 transition-all"
          >
            Donate
          </button>

          {/* Search Bar */}
          <div className="relative">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="px-3 py-2 text-sm rounded-md border border-gray-300 focus:ring-green-600 focus:ring-2 outline-none w-40"
              />
            </form>

            {suggestions.length > 0 && (
              <div className="absolute left-0 right-0 bg-white border rounded-md shadow-lg mt-1 max-h-56 overflow-y-auto z-50">
                {suggestions.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleNavClick(item.page)}
                    className="w-full text-left px-4 py-2 hover:bg-green-50"
                  >
                    {item.keywords[0]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-green-700 text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden bg-white shadow-lg border-t"
          >
            <button
              onClick={() => handleNavClick("/")}
              className="flex items-center gap-2 px-4 py-3 border-b"
            >
              <Home size={18} /> Home
            </button>

            <button
              onClick={() => handleNavClick("/programs")}
              className="flex items-center gap-2 px-4 py-3 border-b"
            >
              <BookOpen size={18} /> Programmes
            </button>

            {/* Mobile Categories */}
            <div className="border-b">
              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="flex items-center justify-between w-full px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <Globe2 size={18} /> Categories
                </div>
                <motion.div animate={{ rotate: categoriesOpen ? 180 : 0 }}>
                  <ChevronDown size={16} />
                </motion.div>
              </button>

              <AnimatePresence>
                {categoriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    {categories.map(([path, label]) => (
                      <button
                        key={path}
                        onClick={() => handleNavClick(`/categories/${path}`)}
                        className="px-6 py-2 block w-full text-left hover:bg-green-50"
                      >
                        {label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleNavClick("/stories")}
              className="flex items-center gap-2 px-4 py-3 border-b"
            >
              <FileText size={18} /> Stories
            </button>

            <button
              onClick={() => handleNavClick("/about")}
              className="flex items-center gap-2 px-4 py-3 border-b"
            >
              <Users2 size={18} /> About Us
            </button>

            <button
              onClick={() => handleNavClick("/contact")}
              className="flex items-center gap-2 px-4 py-3 border-b"
            >
              <Globe2 size={18} /> Contact Us
            </button>

            <button
              onClick={() => handleNavClick("/donate")}
              className="flex items-center gap-2 px-4 py-3 border-b text-green-700 font-semibold"
            >
              <Home size={18} /> Donate
            </button>

            {/* Mobile Search */}
            <div className="p-4">
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center border rounded-md"
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="flex-grow px-2 py-2 text-sm"
                />
                <button className="px-2 text-green-700">
                  <Search size={18} />
                </button>
              </form>

              {suggestions.length > 0 && (
                <div className="bg-white border rounded-md shadow-lg mt-1">
                  {suggestions.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleNavClick(item.page)}
                      className="px-4 py-2 block w-full text-left hover:bg-green-50"
                    >
                      {item.keywords[0]}
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
