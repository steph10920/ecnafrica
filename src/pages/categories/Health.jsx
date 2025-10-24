import React from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

export default function Health() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
 
      <section className="relative bg-red-700 text-white py-32 text-center overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-5xl font-bold mb-6">Health & Wellness</h1>
          <p className="text-lg leading-relaxed">
            Promoting health education, disease prevention, and access to healthcare in vulnerable communities.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-red-600 to-red-800 opacity-80 animate-pulse" />
      </section>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-red-700 mb-4">Initiatives</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Community malaria prevention programs</li>
          <li>Health outreach and awareness campaigns</li>
          <li>Support for child and maternal health</li>
        </ul>
      </main>

      <Footer />
    </div>
  );
}
