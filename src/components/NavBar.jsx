import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
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

  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCategoriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!searchQuery) return setSuggestions([]);

      const q = searchQuery.toLowerCase();
      const matched = searchMap
        .map((item) => {
          const keywords = item.keywords.filter((k) =>
            k.toLowerCase().includes(q)
          );
          if (!keywords.length) return null;
          return { ...item, keywords };
        })
        .filter(Boolean)
        .slice(0, 5);

      setSuggestions(matched);
    }, 200);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  const handleNavigate = (path) => {
    setMobileOpen(false);
    setCategoriesOpen(false);
    setSuggestions([]);
    navigate(path || "/");
  };

  const links = [
    ["Home", "/"],
    ["Programs", "/programs"],
    ["Stories", "/stories"],
    ["About", "/about"],
  ];

  const categories = [
    ["environment", "Environment"],
    ["arts-and-sports", "Arts & Sports"],
    ["education", "Education"],
    ["careers", "Careers"],
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div
          onClick={() => handleNavigate("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={Logo}
            alt="logo"
            className={`rounded-full transition-all duration-300 ${
              isScrolled ? "h-10" : "h-14"
            }`}
          />
          <span className="text-green-700 font-bold text-xl tracking-wide">
            ECN Africa
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          {links.map(([label, path]) => (
            <button
              key={label}
              onClick={() => handleNavigate(path)}
              className={`relative transition ${
                location.pathname === path
                  ? "text-green-600"
                  : "text-gray-700 hover:text-green-600"
              }`}
            >
              {label}
              {location.pathname === path && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-600" />
              )}
            </button>
          ))}

          {/* Categories Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              className="flex items-center gap-1 text-gray-700 hover:text-green-600"
            >
              Categories <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {categoriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-3 bg-white shadow-2xl rounded-2xl p-3 w-56"
                >
                  {categories.map(([path, label]) => (
                    <button
                      key={path}
                      onClick={() => handleNavigate(`/categories/${path}`)}
                      className="block w-full text-left px-3 py-2 rounded-lg hover:bg-green-50"
                    >
                      {label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Search */}
          <div className="relative">
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
              <Search size={16} className="text-gray-400" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="bg-transparent px-2 outline-none text-sm w-32"
              />
            </div>

            {searchQuery && (
              <div className="absolute w-full bg-white shadow-lg rounded-lg mt-2 z-50">
                {suggestions.length > 0 ? (
                  suggestions.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleNavigate(item.page)}
                      className="block w-full text-left px-4 py-2 hover:bg-green-50"
                    >
                      {item.keywords[0]}
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-2 text-sm text-gray-500">
                    No results found
                  </div>
                )}
              </div>
            )}
          </div>

          {/* CTA */}
          <button
            onClick={() => handleNavigate("/donate")}
            className="bg-green-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 hover:scale-105 transition"
          >
            Donate
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed right-0 top-0 h-full w-72 bg-white shadow-xl z-50 p-6 flex flex-col gap-5"
          >
            {links.map(([label, path]) => (
              <button
                key={label}
                onClick={() => handleNavigate(path)}
                className="text-left text-lg"
              >
                {label}
              </button>
            ))}

            <div>
              <p className="font-semibold mb-2">Categories</p>
              {categories.map(([path, label]) => (
                <button
                  key={path}
                  onClick={() => handleNavigate(`/categories/${path}`)}
                  className="block text-left py-1 text-gray-600"
                >
                  {label}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNavigate("/donate")}
              className="mt-auto bg-green-600 text-white py-3 rounded-full"
            >
              Donate
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
