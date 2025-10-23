import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function HumanRights() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <section className="relative bg-indigo-700 text-white py-32 text-center overflow-hidden">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-5xl font-bold mb-6">Human Rights & Advocacy</h1>
          <p className="text-lg leading-relaxed">
            Ensuring dignity, justice, and equal opportunities for all through advocacy and policy engagement.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600 to-indigo-800 opacity-80 animate-pulse" />
      </section>

      <main className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Our Focus Areas</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Child protection and legal awareness</li>
          <li>Youth empowerment for social justice</li>
          <li>Community advocacy on human rights</li>
        </ul>
      </main>

      <Footer />
    </div>
  );
}
