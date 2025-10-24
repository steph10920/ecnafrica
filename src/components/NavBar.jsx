import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = () => setMobileOpen(false);

  // 🔹 Map keywords to pages and section IDs
  const searchMap = [
    { keyword: "home", page: "/", sectionId: null },
    { keyword: "about", page: "/about", sectionId: null },
    { keyword: "vision", page: "/about", sectionId: "vision" },
    { keyword: "mission", page: "/about", sectionId: "mission" },
    { keyword: "values", page: "/about", sectionId: "values" },
    { keyword: "programs", page: "/programs", sectionId: null },
    { keyword: "education", page: "/programs", sectionId: "education" },
    { keyword: "child protection", page: "/programs", sectionId: "child-protection" },
    { keyword: "community", page: "/programs", sectionId: "community" },
    { keyword: "blog", page: "/blog", sectionId: null },
    { keyword: "contact", page: "/contact", sectionId: null },
  ];

  // 🔹 Handle search
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    const result = searchMap.find(item => query.includes(item.keyword));
    if (result) {
      // Navigate to page with scroll info
      navigate(result.page, { state: { scrollTo: result.sectionId } });
    } else {
      alert("No matching page or section found!");
    }

    setSearchQuery("");
    setMobileOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-700">ECN AFRICA</Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-700 font-medium relative">
          <Link to="/" className={`hover:text-blue-600 ${location.pathname === "/" ? "text-blue-700 font-semibold" : ""}`}>Home</Link>
          <Link to="/about" className={`hover:text-blue-600 ${location.pathname === "/about" ? "text-blue-700 font-semibold" : ""}`}>About Us</Link>
          <Link to="/programs" className={`hover:text-blue-600 ${location.pathname === "/programs" ? "text-blue-700 font-semibold" : ""}`}>Programs</Link>

          {/* Categories Dropdown */}
          <div className="relative" onMouseEnter={() => setCategoriesOpen(true)} onMouseLeave={() => setCategoriesOpen(false)}>
            <button className="hover:text-blue-600 flex items-center gap-1">Categories ▾</button>
            <AnimatePresence>
              {categoriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 bg-white border rounded-md shadow-md w-64 z-50"
                >
                  {[
                    ["arts-and-sports", "Arts and Sports"],
                    ["environment", "Environment"],
                    ["food-security", "Food Security"],
                    ["health", "Health"],
                    ["human-rights", "Human Rights"],
                    ["quality-education", "Quality Education"],
                    ["uncategorized", "Uncategorized"],
                  ].map(([path, label]) => (
                    <Link key={path} to={`/categories/${path}`} className="block px-4 py-2 hover:bg-blue-50">{label}</Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/blog" className={`hover:text-blue-600 ${location.pathname === "/blog" ? "text-blue-700 font-semibold" : ""}`}>Blog / News</Link>
          <Link to="/contact" className={`hover:text-blue-600 ${location.pathname === "/contact" ? "text-blue-700 font-semibold" : ""}`}>Contact Us</Link>

          {/* Desktop Search */}
          <form onSubmit={handleSearchSubmit} className="ml-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-blue-700 text-2xl focus:outline-none" onClick={() => setMobileOpen(!mobileOpen)}>
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
            className="md:hidden bg-white shadow-md flex flex-col space-y-2 px-6 py-4"
          >
            <Link to="/" onClick={handleNavClick} className="hover:text-blue-600">Home</Link>
            <Link to="/about" onClick={handleNavClick} className="hover:text-blue-600">About Us</Link>
            <Link to="/programs" onClick={handleNavClick} className="hover:text-blue-600">Programs</Link>

            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-blue-600">Categories</summary>
              <div className="pl-4 mt-2 space-y-1">
                {[
                  ["arts-and-sports", "Arts and Sports"],
                  ["environment", "Environment"],
                  ["food-security", "Food Security"],
                  ["health", "Health"],
                  ["human-rights", "Human Rights"],
                  ["quality-education", "Quality Education"],
                  ["uncategorized", "Uncategorized"],
                ].map(([path, label]) => (
                  <Link key={path} to={`/categories/${path}`} onClick={handleNavClick} className="block hover:text-blue-600">{label}</Link>
                ))}
              </div>
            </details>

            <Link to="/blog" onClick={handleNavClick} className="hover:text-blue-600">Blog / News</Link>
            <Link to="/contact" onClick={handleNavClick} className="hover:text-blue-600">Contact Us</Link>

            {/* Mobile Search */}
            <form onSubmit={handleSearchSubmit} className="mt-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
