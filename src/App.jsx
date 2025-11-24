import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";

// 🔹 Page Imports
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Donate from "./components/Donate";

// 🔹 Program Subpages
import GreenClassrooms from "./pages/GreenClassrooms";
import NafasiProgramme from "./pages/NafasiProgramme";
import ImaraWomen from "./pages/imarawomen";
import BlueHorizons from "./pages/BlueHorizons";

// 🔹 Category Pages
import Environment from "./pages/categories/Environment";
import Health from "./pages/categories/Health";
import FoodSecurity from "./pages/categories/FoodSecurity";
import HumanRights from "./pages/categories/HumanRights";
import ArtsAndSports from "./pages/categories/ArtsAndSports";
import QualityEducation from "./pages/categories/QualityEducation";

// 🔹 Blog Pages
import Stories from "./pages/stories";
import BlogPost from "./pages/BlogPost";

// 🔹 Contact & Jobs
import Contact from "./pages/Contact";
import { jobs } from "./pages/Jobs";

// 🔹 Vercel Analytics & Speed Insights
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <div className="pt-20">
        <Routes>
          {/* 🔹 Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/donate" element={<Donate />} />

          {/* 🔹 Program Subpages */}
          <Route path="/programs/green-classrooms" element={<GreenClassrooms />} />
          <Route path="/programs/nafasiprogramme" element={<NafasiProgramme />} />

          <Route path="/programs/imara-women" element={<ImaraWomen />} />
          <Route path="/programs/blue-horizons" element={<BlueHorizons />} />

          {/* 🔹 Category Pages */}
          <Route path="/categories/environment" element={<Environment />} />
          <Route path="/categories/health" element={<Health />} />
          <Route path="/categories/food-security" element={<FoodSecurity />} />
          <Route path="/categories/human-rights" element={<HumanRights />} />
          <Route path="/categories/arts-and-sports" element={<ArtsAndSports />} />
          <Route path="/categories/quality-education" element={<QualityEducation />} />

          {/* 🔹 Blog Pages */}
          <Route path="/Stories" element={<Stories />} />
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* 🔹 Contact */}
          <Route path="/contact" element={<Contact jobs={jobs} />} />
        </Routes>
      </div>

      {/* 🔹 Vercel Analytics */}
      <Analytics />

      {/* 🔹 Speed Insights (development only) */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-4 right-4 z-50">
          <SpeedInsights
            url="https://ecnafrica.org"
            device="desktop"
            theme="light"
          />
        </div>
      )}
    </BrowserRouter>
  );
}
