import React from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

export default function FoodSecurity() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
     

      <section className="relative bg-yellow-600 text-white py-32 text-center overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-5xl font-bold mb-6">Food Security</h1>
          <p className="text-lg leading-relaxed">
            Building resilient communities through sustainable agriculture and improved nutrition.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500 to-yellow-700 opacity-80 animate-pulse" />
      </section>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-yellow-700 mb-4">Our Work</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Community training on sustainable farming</li>
          <li>School gardens to support child nutrition</li>
          <li>Empowering women farmers</li>
        </ul>
      </main>

      <Footer />
    </div>
  );
}
