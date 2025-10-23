import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Environment from "./pages/categories/Environment";
import Health from "./pages/categories/Health";
import FoodSecurity from "./pages/categories/FoodSecurity";
import HumanRights from "./pages/categories/HumanRights";
import ArtsAndSports from "./pages/categories/ArtsAndSports";
import QualityEducation from "./pages/categories/QualityEducation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/environment" element={<Environment />} />
        <Route path="/categories/health" element={<Health />} />
        <Route path="/categories/food-security" element={<FoodSecurity />} />
        <Route path="/categories/human-rights" element={<HumanRights />} />
        <Route path="/categories/arts-and-sports" element={<ArtsAndSports />} />
        <Route path="/categories/quality-education" element={<QualityEducation />} />
      </Routes>
    </BrowserRouter>
  );
}
