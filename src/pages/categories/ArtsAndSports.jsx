import React from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

export default function ArtsAndSports() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
          <section className="relative bg-pink-600 text-white py-32 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl mx-auto px-6"
        >
          <h1 className="text-5xl font-bold mb-6">Arts & Sports</h1>
          <p className="text-lg leading-relaxed">
            Empowering youth through creativity, performance, and teamwork — using art and sports as tools for transformation.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500 to-pink-800 opacity-80 animate-pulse" />
      </section>

      <main className="max-w-6xl mx-auto px-6 py-20 space-y-12">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-semibold text-pink-700 mb-4">Our Approach</h2>
          <p className="text-gray-700 leading-relaxed">
            We use art and sports as powerful tools to connect, teach life skills, and build confidence among children and youth.
          </p>
        </motion.div>

        <motion.ul initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <li>Talent identification and mentorship</li>
          <li>Community art workshops</li>
          <li>Sports tournaments for social inclusion</li>
        </motion.ul>
      </main>

      <Footer />
    </div>
  );
}
