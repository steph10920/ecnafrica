import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function Uncategorized() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <section className="relative bg-gray-700 text-white py-32 text-center overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-5xl font-bold mb-6">Uncategorized</h1>
          <p className="text-lg leading-relaxed">
            Projects and initiatives that span multiple areas of focus within our mission.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-600 to-gray-800 opacity-80 animate-pulse" />
      </section>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">General Programs</h2>
        <p className="text-gray-700 leading-relaxed">
          These include initiatives that support multiple ECN programs and cross-sector partnerships that promote holistic community development.
        </p>
      </main>

      <Footer />
    </div>
  );
}
