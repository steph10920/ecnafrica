import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function Environment() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <section className="relative bg-green-700 text-white py-32 text-center overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-5xl font-bold mb-6">Environment & Sustainability</h1>
          <p className="text-lg leading-relaxed">
            Protecting nature, promoting sustainability, and empowering communities to live in harmony with the planet.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-green-600 to-green-800 opacity-80 animate-pulse" />
      </section>

      <main className="max-w-6xl mx-auto px-6 py-20 space-y-12">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">Our Activities</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Tree planting and greening schools</li>
          <li>Waste management education</li>
          <li>Climate change advocacy</li>
          <li>Community clean-up initiatives</li>
        </ul>
      </main>

      <Footer />
    </div>
  );
}
