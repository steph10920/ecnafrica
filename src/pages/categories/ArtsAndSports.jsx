import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer.jsx";
import { ArrowUp } from "lucide-react";
import CountUp from "react-countup";

// --- Assets ---
import footballImg1 from "../../assets/football1.jpg";
import footballImg2 from "../../assets/football2.jpg";
import footballImg3 from "../../assets/sports1.jpg";
import footballImg4 from "../../assets/slide1.jpg";
import footballVideo from "../../assets/football.mp4";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/community.png";
import slide4 from "../../assets/slide4.jpg";

export default function ArtsAndSports() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const slides = [slide1, slide2, slide3, slide4];

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Scroll button
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[100vh] flex items-center justify-center text-white overflow-hidden">
        <AnimatePresence>
          {slides.map(
            (img, i) =>
              i === currentIndex && (
                <motion.img
                  key={i}
                  src={img}
                  alt={`Slide ${i + 1}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                />
              )
          )}
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Text */}
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-green-100 drop-shadow-lg"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Sports for Growth and Empowerment
          </motion.h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Empowering young people through football and sports activities that
            build discipline, unity, and confidence.
          </p>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-green-500 scale-125" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </section>

      {/* --- INTRO SECTION --- */}
      <section className="max-w-5xl mx-auto py-16 px-4">
        <motion.h2
          className="text-3xl font-bold text-green-700 mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Building Champions On and Off the Field
        </motion.h2>
        <p className="text-lg leading-relaxed mb-4">
          Our sports initiatives at{" "}
          <strong>ECN Education Africa</strong> focus on football as a tool for
          personal and community transformation. We use sports to teach
          teamwork, leadership, equality, and resilience among children and
          youth.
        </p>
        <p className="text-lg leading-relaxed">
          Through school and community football leagues, mentorship camps, and
          girls-in-sports programs, we are nurturing talent while promoting
          inclusion and healthy lifestyles.
        </p>
      </section>

      {/* --- FOOTBALL MEDIA --- */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-8">
          Football in Action
        </h2>

        {/* Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {[footballImg1, footballImg2, footballImg3, footballImg4].map(
            (img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`Football activity ${i + 1}`}
                className="rounded-2xl shadow-lg object-cover w-full h-96"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            )
          )}
        </div>

        {/* Video */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-10 bg-black">
          <video
            src={footballVideo}
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto max-h-[90vh] object-contain bg-black"
          />
        </div>

        <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto">
          Every match is more than a game — it’s a classroom of character. Our
          football sessions promote unity across backgrounds, teach gender
          inclusion, and inspire the next generation of leaders through the
          spirit of fair play and teamwork.
        </p>
      </section>

      {/* --- IMPACT SECTION --- */}
      <section className="bg-green-700 text-white py-16 mt-12">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Impact Through Sports
          </h2>
          <p className="max-w-3xl mx-auto text-gray-100">
            Our sports programs reach communities across Kenya — building
            confidence, inclusion, and hope through teamwork.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
          <div>
            <CountUp end={800} duration={4} className="text-5xl font-bold" />
            <p className="text-lg mt-2">Children Trained</p>
          </div>
          <div>
            <CountUp end={150} duration={4} className="text-5xl font-bold" />
            <p className="text-lg mt-2">Football Matches Played</p>
          </div>
          <div>
            <CountUp end={60} duration={4} className="text-5xl font-bold" />
            <p className="text-lg mt-2">Communities Engaged</p>
          </div>
        </div>
      </section>

      {/* --- SCROLL TO TOP --- */}
      {showScrollTop && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      <Footer />
    </div>
  );
}
