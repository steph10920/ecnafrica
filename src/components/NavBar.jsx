import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/ecnlogo.jpg"; // Adjust path if needed

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavClick = (path = null) => {
    setMobileOpen(false);
    setCategoriesOpen(false);
    if (path) {
      // 🔁 Force full page reload
      window.location.href = path;
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  const searchMap = [
    { keyword: "home", page: "/" },
    { keyword: "about", page: "/about" },
    { keyword: "vision", page: "/about#vision" },
    { keyword: "mission", page: "/about#mission" },
    { keyword: "values", page: "/about#values" },
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

    const result = searchMap.find(item => query.includes(item.keyword));
    if (result) {
      handleNavClick(result.page);
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
    ["uncategorized", "Uncategorized"],
  ];

  return (
    <header
      className={`fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300 ${
        isScrolled ? "py-1" : "py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNavClick("/")} className="flex items-center gap-2">
          <img
            src={Logo}
            alt="ECN Africa Logo"
            className={`h-16 md:h-18 transition-all duration-300 ${
              isScrolled ? "h-12 md:h-14" : ""
            }`}
          />
          <span className="text-green-700 font-bold text-xl md:text-2xl">ECN</span>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <button onClick={() => handleNavClick("/")} className="hover:text-green-600">
            Home
          </button>
          <button onClick={() => handleNavClick("/about")} className="hover:text-green-600">
            About Us
          </button>
          <button onClick={() => handleNavClick("/programs")} className="hover:text-green-600">
            Programs
          </button>

          {/* Categories Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCategoriesOpen(true)}
            onMouseLeave={() => setCategoriesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-green-600">
              Categories ▾
            </button>
            <AnimatePresence>
              {categoriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 bg-white border rounded-md shadow-md w-52 z-50"
                >
                  {categories.map(([path, label]) => (
                    <button
                      key={path}
                      onClick={() => handleNavClick(`/categories/${path}`)}
                      className="block w-full text-left px-3 py-2 hover:bg-green-50"
                    >
                      {label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button onClick={() => handleNavClick("/blog")} className="hover:text-green-600">
            Blog
          </button>
          <button onClick={() => handleNavClick("/contact")} className="hover:text-green-600">
            Contact
          </button>

          {/* Search */}
          <form onSubmit={handleSearchSubmit} className="ml-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="px-3 py-2 rounded-md border border-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </form>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-700 text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md flex flex-col space-y-2 px-4 py-3 text-lg"
          >
            <button onClick={() => handleNavClick("/")} className="hover:text-green-600">
              Home
            </button>
            <button onClick={() => handleNavClick("/about")} className="hover:text-green-600">
              About Us
            </button>
            <button onClick={() => handleNavClick("/programs")} className="hover:text-green-600">
              Programs
            </button>

            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-green-600">
                Categories ▾
              </summary>
              <div className="pl-3 mt-1 space-y-1">
                {categories.map(([path, label]) => (
                  <button
                    key={path}
                    onClick={() => handleNavClick(`/categories/${path}`)}
                    className="hover:text-green-600 block w-full text-left"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </details>

            <button onClick={() => handleNavClick("/blog")} className="hover:text-green-600">
              Blog
            </button>
            <button onClick={() => handleNavClick("/contact")} className="hover:text-green-600">
              Contact
            </button>

            <form onSubmit={handleSearchSubmit} className="mt-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full px-3 py-2 rounded-md border border-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
