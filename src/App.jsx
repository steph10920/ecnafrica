import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";

// 🔹 Page Imports
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";

// 🔹 Category Pages
import Environment from "./pages/categories/Environment";
import Health from "./pages/categories/Health";
import FoodSecurity from "./pages/categories/FoodSecurity";
import HumanRights from "./pages/categories/HumanRights";
import ArtsAndSports from "./pages/categories/ArtsAndSports";
import QualityEducation from "./pages/categories/QualityEducation";

// 🔹 Blog Pages
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

// 🔹 Contact & Jobs
import Contact from "./pages/Contact";
import { jobs } from "./pages/Jobs"; // ✅ Correct import (named export)

// 🔹 Vercel Speed Insights
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <BrowserRouter>
      {/* Ensures each route starts from top of the page */}
      <ScrollToTop />

      {/* Global Navbar */}
      <Navbar />

      <div className="pt-20">
        <Routes>
          {/* 🔹 Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />

          {/* 🔹 Category Pages */}
          <Route path="/categories/environment" element={<Environment />} />
          <Route path="/categories/health" element={<Health />} />
          <Route path="/categories/food-security" element={<FoodSecurity />} />
          <Route path="/categories/human-rights" element={<HumanRights />} />
          <Route path="/categories/arts-and-sports" element={<ArtsAndSports />} />
          <Route path="/categories/quality-education" element={<QualityEducation />} />

          {/* 🔹 Blog Pages */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* 🔹 Contact Page (with Jobs data) */}
          <Route path="/contact" element={<Contact jobs={jobs} />} /> {/* ✅ Pass jobs as props */}
        </Routes>
      </div>

      {/* 🔹 Vercel Speed Insights */}
      <div className="fixed bottom-4 right-4 z-50">
        <SpeedInsights
          url="https://ecnafrica.org" // Your deployed site URL
          device="desktop" // or "mobile" / "all"
          theme="light"
        />
      </div>
    </BrowserRouter>
  );
}
