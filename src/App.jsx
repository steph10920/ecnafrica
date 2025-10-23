import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/About";
import Programs from "./pages/Programs"; // ✅ Added import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/programs" element={<Programs />} /> {/* ✅ Programs route */}
      </Routes>
    </Router>
  );
}

export default App;
