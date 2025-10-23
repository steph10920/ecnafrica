import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function QualityEducation() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <section className="relative bg-blue-700 text-white py-32 text-center overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-5xl font-bold mb-6">Quality Education</h1>
          <p className="text-lg leading-relaxed">
            Providing innovative, inclusive, and transformative learning opportunities for all.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-800 opacity-80 animate-pulse" />
      </section>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">What We Do</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Street education and reintegration</li>
          <li>Teacher training and innovation programs</li>
          <li>Community-based learning centers</li>
        </ul>
      </main>

      <Footer />
    </div>
  );
}
