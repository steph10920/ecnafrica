import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ChevronDown } from "lucide-react";

import Logo from "../assets/ecnlogo.jpg";
import { searchMap } from "../data/searchMap";

/* ------------------------------------------------------------------ */
/*  Shared design tokens — kept identical to the rest of the site.     */
/*  Applied locally since the navbar mounts outside any page's own     */
/*  themed wrapper. Worth centralizing into /components/theme.js.      */
/* ------------------------------------------------------------------ */

const THEME_VARS = {
  "--ink": "#1B2A22",
  "--paper": "#F1EDD9",
  "--chalk": "#1F3A2E",
  "--clay": "#B8462F",
  "--gold": "#E3A73B",
  "--sky": "#3E7C8C",
  "--font-display": "'Fraunces', ui-serif, Georgia, serif",
  "--font-body": "'Work Sans', ui-sans-serif, system-ui, sans-serif",
};

const links = [
  ["Home", "/"],
  ["Programs", "/programs"],
  ["Stories", "/stories"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

const categories = [
  ["environment", "Environment"],
  ["arts-and-sports", "Arts & Sports"],
  ["education", "Education"],
  ["careers", "Careers"],
];

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

  // Lock body scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!searchQuery) return setSuggestions([]);

      const q = searchQuery.toLowerCase();
      const matched = searchMap
        .map((item) => {
          const keywords = item.keywords.filter((k) => k.toLowerCase().includes(q));
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
    // Previously left in place after picking a result, which reopened
    // the dropdown showing "No results found" on the next render.
    setSearchQuery("");
    navigate(path || "/");
  };

  return (
    <header
      style={THEME_VARS}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--paper)]/95 backdrop-blur-xl shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div
        className="max-w-7xl mx-auto px-6 flex justify-between items-center"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {/* Logo */}
        <div
          onClick={() => handleNavigate("/")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleNavigate("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={Logo}
            alt="ECN Africa logo"
            className={`rounded-full transition-all duration-300 ${
              isScrolled ? "h-10" : "h-14"
            }`}
          />
          <span
            className="text-[var(--chalk)] font-bold text-xl tracking-wide"
            style={{ fontFamily: "var(--font-display)" }}
          >
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
                  ? "text-[var(--clay)]"
                  : "text-[var(--ink)]/75 hover:text-[var(--clay)]"
              }`}
            >
              {label}
              {location.pathname === path && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[var(--gold)]" />
              )}
            </button>
          ))}

          {/* Categories Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              aria-expanded={categoriesOpen}
              className="flex items-center gap-1 text-[var(--ink)]/75 hover:text-[var(--clay)] transition"
            >
              Categories
              <ChevronDown size={16} className={`transition-transform ${categoriesOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {categoriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-3 bg-white shadow-2xl p-3 w-56 border-t-2 border-[var(--gold)]"
                >
                  {categories.map(([slug, label]) => (
                    <button
                      key={slug}
                      onClick={() => handleNavigate(`/categories/${slug}`)}
                      className="block w-full text-left px-3 py-2 text-[var(--ink)]/80 hover:bg-[var(--gold)]/10 hover:text-[var(--clay)] transition"
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
            <div className="flex items-center bg-[var(--chalk)]/5 px-3 py-1.5 focus-within:ring-2 focus-within:ring-[var(--gold)] transition">
              <Search size={16} className="text-[var(--ink)]/40" aria-hidden="true" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                aria-label="Search the site"
                className="bg-transparent px-2 outline-none text-sm w-32 text-[var(--ink)] placeholder:text-[var(--ink)]/40"
              />
            </div>

            {searchQuery && (
              <div className="absolute w-full min-w-[14rem] right-0 bg-white shadow-lg mt-2 z-50">
                {suggestions.length > 0 ? (
                  suggestions.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleNavigate(item.page)}
                      className="block w-full text-left px-4 py-2 text-[var(--ink)]/80 hover:bg-[var(--gold)]/10 hover:text-[var(--clay)] transition"
                    >
                      {item.label || item.keywords[0]}
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-2 text-sm text-[var(--ink)]/50">No results found</div>
                )}
              </div>
            )}
          </div>

          {/* CTA */}
          <button
            onClick={() => handleNavigate("/donate")}
            className="bg-[var(--clay)] text-[var(--paper)] px-6 py-2 rounded-full shadow-md hover:brightness-110 hover:scale-105 transition font-semibold"
          >
            Donate
          </button>
        </nav>

        {/* Mobile Toggle */}
        {/* relative z-50 keeps this above the mobile overlay (z-40) so the
            icon stays crisp/tappable instead of being dimmed by the scrim. */}
        <button
          className="md:hidden relative z-50 text-[var(--chalk)]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 backdrop-blur-sm z-40"
              style={{ backgroundColor: "rgba(27, 42, 34, 0.7)" }}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed right-0 top-0 h-full w-72 max-w-[85vw] shadow-xl z-50 p-6 flex flex-col gap-5"
              style={{ fontFamily: "var(--font-body)", backgroundColor: "#F1EDD9" }}
            >
              <div className="flex justify-end">
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="text-[var(--chalk)]"
                >
                  <X />
                </button>
              </div>

              {links.map(([label, path]) => (
                <button
                  key={label}
                  onClick={() => handleNavigate(path)}
                  className={`text-left text-lg ${
                    location.pathname === path ? "text-[var(--clay)] font-semibold" : "text-[var(--ink)]"
                  }`}
                >
                  {label}
                </button>
              ))}

              <div>
                <p
                  className="font-semibold mb-2 text-[var(--chalk)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Categories
                </p>
                {categories.map(([slug, label]) => (
                  <button
                    key={slug}
                    onClick={() => handleNavigate(`/categories/${slug}`)}
                    className="block text-left py-1 text-[var(--ink)]/70"
                  >
                    {label}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handleNavigate("/donate")}
                className="mt-auto bg-[var(--clay)] text-[var(--paper)] py-3 rounded-full font-semibold hover:brightness-110 transition"
              >
                Donate
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
