import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-700">ECN AFRICA</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium relative">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About Us</Link>
          <Link to="/programs" className="hover:text-blue-600">Programs</Link>

          {/* Dropdown for Categories */}
          <div
            className="relative"
            onMouseEnter={() => setCategoriesOpen(true)}
            onMouseLeave={() => setCategoriesOpen(false)}
          >
            <button className="hover:text-blue-600 flex items-center gap-1">
              Categories ▾
            </button>
            {categoriesOpen && (
              <div className="absolute top-full mt-2 bg-white border rounded-md shadow-md w-64">
                <Link to="/categories/arts-and-sports" className="block px-4 py-2 hover:bg-blue-50">Arts and Sports</Link>
                <Link to="/categories/environment" className="block px-4 py-2 hover:bg-blue-50">Environment</Link>
                <Link to="/categories/food-security" className="block px-4 py-2 hover:bg-blue-50">Food Security</Link>
                <Link to="/categories/health" className="block px-4 py-2 hover:bg-blue-50">Health</Link>
                <Link to="/categories/human-rights" className="block px-4 py-2 hover:bg-blue-50">Human Rights</Link>
                <Link to="/categories/quality-education" className="block px-4 py-2 hover:bg-blue-50">Quality Education</Link>
                <Link to="/categories/uncategorized" className="block px-4 py-2 hover:bg-blue-50">Uncategorized</Link>
              </div>
            )}
          </div>

          <Link to="/blog" className="hover:text-blue-600">Blog/News</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
        </nav>

        {/* Mobile Button */}
        <button className="md:hidden text-blue-700 text-2xl" onClick={() => setMobileOpen(!mobileOpen)}>☰</button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col space-y-2 px-6 py-4">
          <Link to="/" className="hover:text-blue-600 block">Home</Link>
          <Link to="/about" className="hover:text-blue-600 block">About Us</Link>
          <Link to="/programs" className="hover:text-blue-600 block">Programs</Link>

          <details className="group">
            <summary className="cursor-pointer font-medium hover:text-blue-600">
              Categories
            </summary>
            <div className="pl-4 mt-2 space-y-1">
              <Link to="/categories/arts-and-sports" className="block hover:text-blue-600">Arts and Sports</Link>
              <Link to="/categories/environment" className="block hover:text-blue-600">Environment</Link>
              <Link to="/categories/food-security" className="block hover:text-blue-600">Food Security</Link>
              <Link to="/categories/health" className="block hover:text-blue-600">Health</Link>
              <Link to="/categories/human-rights" className="block hover:text-blue-600">Human Rights</Link>
              <Link to="/categories/quality-education" className="block hover:text-blue-600">Quality Education</Link>
              <Link to="/categories/uncategorized" className="block hover:text-blue-600">Uncategorized</Link>
            </div>
          </details>

          <Link to="/blog" className="hover:text-blue-600 block">Blog/News</Link>
          <Link to="/contact" className="hover:text-blue-600 block">Contact Us</Link>
        </div>
      )}
    </header>
  );
}
