import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import ImpactPhoto1 from "../assets/community-impact1.jpg";
import ImpactPhoto2 from "../assets/community-impact2.jpg";

export default function UrbanGreenMinds() {
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
      <section className="relative bg-gradient-to-r from-green-800 to-green-600 text-white py-24 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          Urban Green Minds: Turning Waste into Worth
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Empowering youth and communities to transform waste management into
          innovation, environmental responsibility, and social enterprise.
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
          <h2 className="text-2xl font-semibold text-green-700">
            Program Overview
          </h2>
          <p className="leading-relaxed">
            The <strong>Urban Green Minds</strong> initiative focuses on
            developing creative and sustainable waste management solutions
            across urban centers. It equips youth, community leaders, and
            innovators with knowledge and practical tools to turn waste into
            valuable products, promoting circular economy practices and
            greener livelihoods.
          </p>
        </motion.div>

        {/* Key Objectives */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-3">
            Core Objectives
          </h2>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              Inspire environmental stewardship among young urban populations.
            </li>
            <li>
              Support local innovation in upcycling, composting, and waste
              reduction.
            </li>
            <li>
              Promote partnerships between communities, schools, and local
              governments for sustainable city living.
            </li>
            <li>
              Empower youth-led start-ups that create eco-friendly products and
              green jobs.
            </li>
          </ul>
        </motion.div>

        {/* Impact Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-3">
            Impact and Community Engagement
          </h2>
          <p className="leading-relaxed mb-6">
            The program has reached hundreds of youth through workshops,
            awareness campaigns, and innovation challenges. Participants have
            developed creative recycling models, sustainable art, and waste-to-value
            projects that contribute to cleaner and healthier neighborhoods.
          </p>

          {/* Images */}
          <div className="grid md:grid-cols-2 gap-6">
            <img
              src={ImpactPhoto1}
              alt="Urban recycling initiative"
              className="rounded-2xl shadow-md"
            />
            <img
              src={ImpactPhoto2}
              alt="Youth environmental innovation"
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
          className="bg-green-100 p-6 rounded-2xl border-l-4 border-green-700 shadow-sm"
        >
          <p className="italic text-green-800 text-lg">
            “Turning waste into worth means changing mindsets — seeing
            opportunity where others see trash.”
          </p>
          <p className="text-right font-semibold text-green-700 mt-2">
            – ECN Africa Youth Ambassador
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
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            Get Involved
          </h3>
          <p className="mb-6">
            Join the <strong>Urban Green Minds</strong> movement — volunteer,
            share your ideas, or collaborate on waste innovation projects in
            your city.
          </p>
          <a
            href="/contact"
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl transition duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </section>

      {/* Scroll to Top Button */}
      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-800 transition duration-300 z-50"
        >
          <ArrowUp size={24} />
        </button>
      )}

      <Footer />
    </div>
  );
}
