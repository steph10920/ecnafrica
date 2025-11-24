import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import Footer from "../../components/Footer";
import { ArrowUp, TreeDeciduous, Recycle, Sprout, Leaf, Users } from "lucide-react";

import tree1 from "../../assets/trees1.jpg";
import tree2 from "../../assets/trees2.jpg";
import tree3 from "../../assets/trees3.jpg";
import tree4 from "../../assets/trees4.jpg";

export default function Environment() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const treeImages = [tree1, tree2, tree3, tree4];

  const impactStats = [
    { label: "Trees Planted", value: 1200 },
    { label: "Schools Greened", value: 45 },
    { label: "Community Members Engaged", value: 800 },
    { label: "Clean-up Campaigns", value: 30 },
  ];

  const activityList = [
    { text: "Tree planting and greening schools", icon: <TreeDeciduous className="text-green-700 w-5 h-5" /> },
    { text: "Waste management education", icon: <Recycle className="text-green-700 w-5 h-5" /> },
    { text: "Climate change advocacy", icon: <Leaf className="text-green-700 w-5 h-5" /> },
    { text: "Community clean-up initiatives", icon: <Users className="text-green-700 w-5 h-5" /> },
    { text: "Eco-literacy workshops for youth", icon: <Sprout className="text-green-700 w-5 h-5" /> },
  ];

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* HERO SECTION */}
      <section className="relative h-[100vh] flex items-center justify-center text-white overflow-hidden bg-green-700">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-100 drop-shadow-lg">
            Environment & Sustainability
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Protecting nature, promoting sustainability, and empowering communities
            to live in harmony with the planet.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-black/50" />
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto py-20 px-6 space-y-20">
        {/* Our Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6 text-center">
            Our Vision
          </h2>
          <p className="text-lg leading-relaxed text-center">
            ECN envisions a sustainable future where communities actively protect their environment,
            embrace eco-friendly practices, and create greener, healthier neighborhoods.
          </p>
        </motion.div>

        {/* Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6 text-center">
            Our Activities
          </h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            {activityList.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-lg">
                {item.icon}
                {item.text}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tree Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8 text-center">
            Tree Planting Gallery
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {treeImages.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt={`Tree planting ${i + 1}`}
                className="rounded-2xl shadow-lg object-cover w-full h-64"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Impact Stats */}
        <section className="bg-green-700 text-white py-16 mt-12">
          <div className="max-w-6xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="max-w-3xl mx-auto text-green-100">
              Our environmental programs reach communities across Kenya — building confidence,
              inclusion, and hope through sustainability.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
            {impactStats.map((stat, i) => (
              <div key={i}>
                <CountUp end={stat.value} duration={4} className="text-5xl font-bold" />
                <p className="text-lg mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-green-600 rounded-2xl py-10 px-6 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join Us in Greening Our Communities
          </h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Your support helps plant more trees, educate communities, and promote
            sustainable practices across Africa.
          </p>
          <a
            href="/donate"
            className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-green-50 transition"
          >
            Volunteer & Donate
          </a>
        </section>
      </main>

      {/* SCROLL TO TOP */}
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
