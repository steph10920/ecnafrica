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

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavClick = (path = null) => {
    setMobileOpen(false);
    setCategoriesOpen(false);
    if (path) window.location.href = path;
    else window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const searchMap = [
    { keyword: "home", page: "/" },
    { keyword: "about", page: "/about" },
    { keyword: "vision", page: "/about#vision" },
    { keyword: "mission", page: "/about#mission" },
    { keyword: "programs", page: "/programs" },
    { keyword: "education", page: "/programs#education" },
    { keyword: "child protection", page: "/programs#child-protection" },
    { keyword: "community", page: "/programs#community" },
    { keyword: "blog", page: "/blog" },
    { keyword: "contact", page: "/contact" },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    const result = searchMap.find((item) => query.keyword.includes(query));
    if (result) handleNavClick(result.page);
    else alert("No matching page or section found!");
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
        {/* 🔹 Logo */}
        <button
          onClick={() => handleNavClick("/")}
          className="flex items-center gap-2"
        >
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

        {/* 🔹 Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-800 font-semibold">
          <button onClick={() => handleNavClick("/")} className="hover:text-green-600">
            Home
          </button>
          <button onClick={() => handleNavClick("/programs")} className="hover:text-green-600">
            Programmes
          </button>

          {/* 🔹 Desktop Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCategoriesOpen(true)}
            onMouseLeave={() => setCategoriesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-green-600">
              Categories <ChevronDown size={16} className="mt-0.5" />
            </button>
            <AnimatePresence>
              {categoriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 bg-white border rounded-lg shadow-lg w-56 z-50 overflow-hidden"
                >
                  {categories.map(([path, label]) => (
                    <button
                      key={path}
                      onClick={() => handleNavClick(`/categories/${path}`)}
                      className="block w-full text-left px-4 py-2 hover:bg-green-50 hover:text-green-700 transition"
                    >
                      {label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button onClick={() => handleNavClick("/blog")} className="hover:text-green-600">
            Blog/News
          </button>
          <button onClick={() => handleNavClick("/about")} className="hover:text-green-600">
            About Us
          </button>
          <button onClick={() => handleNavClick("/contact")} className="hover:text-green-600">
            Contact
          </button>

          {/* 🔹 Desktop Search */}
          <form onSubmit={handleSearchSubmit} className="ml-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="px-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </form>
        </nav>

        {/* 🔹 Mobile Menu Button */}
        <button
          className="md:hidden text-green-700 text-3xl focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col bg-white shadow-lg border-t border-gray-200 z-40 w-full"
          >
            <button onClick={() => handleNavClick("/")} className="hover:text-green-600 flex items-center gap-2 px-4 py-3 border-b border-gray-200">
              <Home size={18} /> Home
            </button>
            <button onClick={() => handleNavClick("/programs")} className="hover:text-green-600 flex items-center gap-2 px-4 py-3 border-b border-gray-200">
              <BookOpen size={18} /> Programs
            </button>

            {/* 🔹 Mobile Categories Dropdown (fixed spacing & animated arrow) */}
            <div className="w-full">
              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="flex items-center justify-between w-full text-left hover:text-green-600 px-4 py-3 border-b border-gray-200"
              >
                <div className="flex items-center gap-2">
                  <Globe2 size={18} /> Categories
                </div>
                <motion.div
                  animate={{ rotate: categoriesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>

              <AnimatePresence>
                {categoriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden flex flex-col border-b border-gray-200"
                  >
                    {categories.map(([path, label]) => (
                      <button
                        key={path}
                        onClick={() => handleNavClick(`/categories/${path}`)}
                        className="px-6 py-2 hover:bg-green-50 hover:text-green-700 text-left"
                      >
                        {label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button onClick={() => handleNavClick("/blog")} className="hover:text-green-600 flex items-center gap-2 px-4 py-3 border-b border-gray-200">
              <FileText size={18} /> Blog/News
            </button>
            <button onClick={() => handleNavClick("/about")} className="hover:text-green-600 flex items-center gap-2 px-4 py-3 border-b border-gray-200">
              <Users2 size={18} /> About Us
            </button>
            <button onClick={() => handleNavClick("/contact")} className="hover:text-green-600 flex items-center gap-2 px-4 py-3 border-b border-gray-200">
              <Globe2 size={18} /> Contact
            </button>

            {/* 🔹 Mobile Search */}
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center border border-gray-300 rounded-md overflow-hidden m-4"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full px-2 py-2 text-sm focus:outline-none"
              />
              <button type="submit" className="px-2 text-green-700">
                <Search size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
