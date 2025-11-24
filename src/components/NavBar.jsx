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
    if (path) window.location.href = path;
    else window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (!searchQuery) {
      setSuggestions([]);
      return;
    }

    const query = searchQuery.toLowerCase();

    const matches = searchMap
      .map((item) => {
        const matchedKeywords = item.keywords.filter((keyword) =>
          keyword.toLowerCase().includes(query)
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
      alert("No matching page or section found!");
    }
    setSearchQuery("");
  };

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const categories = [
    ["arts-and-sports", "Arts and Sports"],
    ["environment", "Environment"],
    ["food-security", "Food Security"],
    ["health", "Health"],
    ["human-rights", "Human Rights"],
    ["quality-education", "Quality Education"],
  ];

  return (
    <header
      className={`fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-md transition-all duration-300 ${
        isScrolled ? "py-1" : "py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <button onClick={() => handleNavClick("/")} className="flex items-center gap-2">
          <img
            src={Logo}
            alt="ECN Africa Logo"
            className={`transition-all duration-300 rounded-full ${
              isScrolled ? "h-12" : "h-16"
            }`}
          />
          <span className="text-green-700 font-bold text-xl md:text-2xl tracking-wide">
            ECN
          </span>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-800 font-semibold relative">
          <button onClick={() => handleNavClick("/")} className="hover:text-green-600">
            Home
          </button>

          <button onClick={() => handleNavClick("/programs")} className="hover:text-green-600">
            Programmes
          </button>

          {/* Desktop Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCategoriesOpen(true)}
            onMouseLeave={() => setCategoriesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-green-600">
              Categories <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {categoriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute top-full mt-2 bg-white border rounded-lg shadow-lg w-56 z-50 overflow-hidden"
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

          <button onClick={() => handleNavClick("/stories")} className="hover:text-green-600">
            Stories
          </button>

          <button onClick={() => handleNavClick("/about")} className="hover:text-green-600">
            About Us
          </button>

          <button onClick={() => handleNavClick("/contact")} className="hover:text-green-600">
            Contact
          </button>

          {/* ⭐ NEW DONATE BUTTON */}
          <button
            onClick={() => handleNavClick("/donate")}
            className="bg-green-600 text-white px-4 py-2 rounded-full shadow hover:bg-green-700 transition"
          >
            Donate
          </button>

          {/* Desktop Search */}
          <div className="ml-4 relative">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </form>

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border rounded-md mt-1 shadow-lg z-50 max-h-60 overflow-y-auto">
                {suggestions.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleNavClick(item.page)}
                    className="w-full text-left px-4 py-2 hover:bg-green-50 hover:text-green-700"
                  >
                    {item.keywords.map((keyword, idx) => {
                      const index = keyword.toLowerCase().indexOf(searchQuery.toLowerCase());
                      if (index === -1) return <span key={idx}>{keyword}</span>;
                      return (
                        <span key={idx}>
                          {keyword.slice(0, index)}
                          <span className="bg-green-200 text-green-900 font-semibold">
                            {keyword.slice(index, index + searchQuery.length)}
                          </span>
                          {keyword.slice(index + searchQuery.length)}
                        </span>
                      );
                    })}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden flex flex-col bg-white shadow-lg border-t border-gray-200"
          >
            <button
              onClick={() => handleNavClick("/")}
              className="flex items-center gap-2 px-4 py-3 border-b hover:text-green-600"
            >
              <Home size={18} /> Home
            </button>

            <button
              onClick={() => handleNavClick("/programs")}
              className="flex items-center gap-2 px-4 py-3 border-b hover:text-green-600"
            >
              <BookOpen size={18} /> Programs
            </button>

            {/* Mobile Categories */}
            <div className="w-full">
              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="flex items-center justify-between w-full px-4 py-3 border-b hover:text-green-600"
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
                    className="overflow-hidden border-b"
                  >
                    {categories.map(([path, label]) => (
                      <button
                        key={path}
                        onClick={() => handleNavClick(`/categories/${path}`)}
                        className="px-6 py-2 hover:bg-green-50 text-left"
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
              className="flex items-center gap-2 px-4 py-3 border-b hover:text-green-600"
            >
              <FileText size={18} /> Stories
            </button>

            <button
              onClick={() => handleNavClick("/about")}
              className="flex items-center gap-2 px-4 py-3 border-b hover:text-green-600"
            >
              <Users2 size={18} /> About Us
            </button>

            <button
              onClick={() => handleNavClick("/contact")}
              className="flex items-center gap-2 px-4 py-3 border-b hover:text-green-600"
            >
              <Globe2 size={18} /> Contact
            </button>

            {/* ⭐ NEW MOBILE DONATE BUTTON */}
            <button
              onClick={() => handleNavClick("/donate")}
              className="flex items-center gap-2 px-4 py-3 border-b hover:text-green-600 font-semibold"
            >
              <Home size={18} /> Donate
            </button>

            {/* Mobile Search */}
            <div className="relative m-4">
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center border rounded-md overflow-hidden"
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-2 py-2 text-sm"
                />
                <button type="submit" className="px-2 text-green-700">
                  <Search size={18} />
                </button>
              </form>

              {suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border rounded-md shadow-lg mt-1 z-50">
                  {suggestions.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleNavClick(item.page)}
                      className="px-4 py-2 w-full text-left hover:bg-green-50"
                    >
                      {item.keywords.map((keyword, idx) => {
                        const index = keyword
                          .toLowerCase()
                          .indexOf(searchQuery.toLowerCase());
                        if (index === -1)
                          return <span key={idx}>{keyword}</span>;
                        return (
                          <span key={idx}>
                            {keyword.slice(0, index)}
                            <span className="bg-green-200 font-semibold">
                              {keyword.slice(index, index + searchQuery.length)}
                            </span>
                            {keyword.slice(index + searchQuery.length)}
                          </span>
                        );
                      })}
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
