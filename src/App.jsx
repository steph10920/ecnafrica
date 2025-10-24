import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar"; // ✅ Correct path
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Environment from "./pages/categories/Environment";
import Health from "./pages/categories/Health";
import FoodSecurity from "./pages/categories/FoodSecurity";
import HumanRights from "./pages/categories/HumanRights";
import ArtsAndSports from "./pages/categories/ArtsAndSports";
import QualityEducation from "./pages/categories/QualityEducation";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import StrategicFocus from "./components/StrategicFocus"; // ✅ Corrected

export default function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Single global navbar */}
      <div className="pt-20"> {/* offset for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/categories/environment" element={<Environment />} />
          <Route path="/categories/health" element={<Health />} />
          <Route path="/categories/food-security" element={<FoodSecurity />} />
          <Route path="/categories/human-rights" element={<HumanRights />} />
          <Route path="/categories/arts-and-sports" element={<ArtsAndSports />} />
          <Route path="/categories/quality-education" element={<QualityEducation />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

          {/* ✅ Add a route for Strategic Focus if needed */}
          <Route path="/strategic-focus" element={<StrategicFocus />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
