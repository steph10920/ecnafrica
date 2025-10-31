import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import FishingPhoto1 from "../assets/fishing1.jpg";
import FishingPhoto2 from "../assets/fishing2.jpg";

export default function BlueHorizons() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 🔹 Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-800 to-sky-600 text-white py-24 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          Blue Horizons: Youth for Sustainable Fishing and Innovation
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Empowering coastal and lakeside youth to protect marine ecosystems,
          embrace sustainable fishing, and pioneer innovations for a blue
          economy future.
        </p>
      </section>

      {/* 🔹 Main Content */}
      <section className="max-w-6xl mx-auto py-16 px-6 space-y-12 text-gray-700">
        {/* Introduction */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-sky-700">
            Restoring the Balance Between People and the Waters
          </h2>
          <p className="leading-relaxed">
            <strong>Blue Horizons</strong> is ECN’s youth-led marine and
            freshwater sustainability program. It supports communities around
            Lake Victoria and Kenya’s coastal regions to adopt eco-friendly
            fishing, reduce pollution, and explore blue economy opportunities
            through innovation and education.
          </p>
          <p>
            As climate change and overfishing threaten livelihoods, Blue
            Horizons empowers youth to lead solutions — combining traditional
            wisdom with modern science to preserve aquatic life for generations
            to come.
          </p>
        </motion.div>

        {/* Key Focus Areas */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-sky-700 mb-3">
            Our Key Focus Areas
          </h2>
          <ul className="list-disc list-inside space-y-3 pl-2">
            <li>
              <strong>Sustainable Fishing Practices:</strong> Promoting
              responsible harvesting and habitat protection through training and
              community awareness.
            </li>
            <li>
              <strong>Blue Economy Innovation:</strong> Engaging youth in
              fish-farming, aquaponics, and eco-business ventures powered by
              renewable energy.
            </li>
            <li>
              <strong>Marine Conservation Education:</strong> Integrating
              aquatic ecosystem learning in schools and community programs.
            </li>
            <li>
              <strong>Waste Reduction & Pollution Control:</strong> Mobilizing
              clean-up drives, plastic collection, and sustainable waste reuse
              along water bodies.
            </li>
          </ul>
        </motion.div>

        {/* Innovation and Training */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-sky-700 mb-3">
            Innovation for the Blue Future
          </h2>
          <p className="leading-relaxed mb-6">
            From designing solar-powered fishing boats to introducing digital
            fish-tracking tools, ECN works with young innovators and local
            fishermen to modernize and sustain aquatic livelihoods. Blue
            Horizons blends technology, traditional knowledge, and
            environmental stewardship to secure a prosperous blue economy for
            all.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <img
              src={FishingPhoto1}
              alt="Youth engaged in sustainable fishing"
              className="rounded-2xl shadow-md"
            />
            <img
              src={FishingPhoto2}
              alt="Marine conservation and training"
              className="rounded-2xl shadow-md"
            />
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="bg-sky-100 p-6 rounded-2xl border-l-4 border-sky-700 shadow-sm"
        >
          <p className="italic text-sky-800 text-lg">
            “The ocean and our lakes do not divide us — they connect us. In
            protecting them, we protect our shared future.”
          </p>
          <p className="text-right font-semibold text-sky-700 mt-2">
            – Elimu Community Network (ECN)
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-sky-700 mb-4">
            Join the Blue Horizons Movement
          </h3>
          <p className="mb-6">
            Become part of ECN’s effort to empower youth and protect aquatic
            ecosystems. Volunteer, partner, or support innovation for a cleaner,
            more sustainable future.
          </p>
          <a
            href="/contact"
            className="bg-sky-700 hover:bg-sky-800 text-white px-6 py-3 rounded-xl transition duration-300"
          >
            Get Involved
          </a>
        </motion.div>
      </section>

      {/* Scroll to Top */}
      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-sky-700 text-white p-3 rounded-full shadow-lg hover:bg-sky-800 transition duration-300 z-50"
        >
          <ArrowUp size={24} />
        </button>
      )}

      <Footer />
    </div>
  );
}
