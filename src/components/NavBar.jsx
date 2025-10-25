import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/ecnlogo.jpg"; // Adjust path if needed

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (path = null, sectionId = null) => {
    setMobileOpen(false);
    setCategoriesOpen(false);
    if (path) {
      navigate(path, { state: { scrollTo: sectionId } });
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

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

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (!query) return;

    const result = searchMap.find(item => query.includes(item.keyword));
    if (result) {
      handleNavClick(result.page, result.sectionId);
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
    ["arts-and-sports","Arts and Sports"],
    ["environment","Environment"],
    ["food-security","Food Security"],
    ["health","Health"],
    ["human-rights","Human Rights"],
    ["quality-education","Quality Education"],
    ["uncategorized","Uncategorized"]
  ];

  return (
    <header className={`fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300 ${isScrolled ? "py-1" : "py-2"}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={() => handleNavClick("/")} className="flex items-center gap-2">
          <img
            src={Logo}
            alt="ECN Africa Logo"
            className={`h-16 md:h-18 transition-all duration-300 ${isScrolled ? "h-12 md:h-14" : ""}`}
          />
          <span className="text-green-700 font-bold text-xl md:text-2xl">ECN</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <Link to="/" onClick={() => handleNavClick("/")} className={`hover:text-green-600 ${location.pathname === "/" ? "text-green-700 font-semibold" : ""}`}>Home</Link>
          <Link to="/about" onClick={() => handleNavClick("/about")} className={`hover:text-green-600 ${location.pathname === "/about" ? "text-green-700 font-semibold" : ""}`}>About Us</Link>
          <Link to="/programs" onClick={() => handleNavClick("/programs")} className={`hover:text-green-600 ${location.pathname === "/programs" ? "text-green-700 font-semibold" : ""}`}>Programs</Link>

          {/* Categories Dropdown */}
          <div className="relative" onMouseEnter={() => setCategoriesOpen(true)} onMouseLeave={() => setCategoriesOpen(false)}>
            <button className="flex items-center gap-1 hover:text-green-600">Categories ▾</button>
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
                    <Link key={path} to={`/categories/${path}`} onClick={() => handleNavClick(`/categories/${path}`)} className="block px-3 py-2 hover:bg-green-50">{label}</Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/blog" onClick={() => handleNavClick("/blog")} className={`hover:text-green-600 ${location.pathname === "/blog" ? "text-green-700 font-semibold" : ""}`}>Blog</Link>
          <Link to="/contact" onClick={() => handleNavClick("/contact")} className={`hover:text-green-600 ${location.pathname === "/contact" ? "text-green-700 font-semibold" : ""}`}>Contact</Link>

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
        <button className="md:hidden text-green-700 text-2xl" onClick={() => setMobileOpen(!mobileOpen)}>
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
            <Link to="/" onClick={() => handleNavClick("/")} className="hover:text-green-600">Home</Link>
            <Link to="/about" onClick={() => handleNavClick("/about")} className="hover:text-green-600">About Us</Link>
            <Link to="/programs" onClick={() => handleNavClick("/programs")} className="hover:text-green-600">Programs</Link>

            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-green-600">Categories ▾</summary>
              <div className="pl-3 mt-1 space-y-1">
                {categories.map(([path, label]) => (
                  <Link key={path} to={`/categories/${path}`} onClick={() => handleNavClick(`/categories/${path}`)} className="hover:text-green-600 block">{label}</Link>
                ))}
              </div>
            </details>

            <Link to="/blog" onClick={() => handleNavClick("/blog")} className="hover:text-green-600">Blog</Link>
            <Link to="/contact" onClick={() => handleNavClick("/contact")} className="hover:text-green-600">Contact</Link>

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
