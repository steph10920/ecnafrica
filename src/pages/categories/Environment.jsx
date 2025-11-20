import React from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

// Import local tree images
import tree1 from "../../assets/trees1.jpg";
import tree2 from "../../assets/trees2.jpg";
import tree3 from "../../assets/trees3.jpg";
import tree4 from "../../assets/trees4.jpg";

export default function Environment() {
  const treeImages = [tree1, tree2, tree3, tree4];

  const impactStats = [
    { label: "Trees Planted", value: 1200 },
    { label: "Schools Greened", value: 45 },
    { label: "Community Members Engaged", value: 800 },
    { label: "Clean-up Campaigns", value: 30 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* HERO SECTION */}
      <section className="relative bg-green-700 text-white py-32 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl mx-auto px-4"
        >
          <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">
            Environment & Sustainability
          </h1>
          <p className="text-lg leading-relaxed opacity-90">
            Protecting nature, promoting sustainability, and empowering communities
            to live in harmony with the planet.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-green-600 to-green-800 opacity-80 animate-pulse" />
      </section>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        {/* Our Vision */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-green-700 mb-6">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              ECN envisions a sustainable future where communities are empowered to protect their environment,
              embrace eco-friendly practices, and create greener, healthier neighborhoods.
            </p>
          </motion.div>
        </section>

        {/* Activities */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-green-700 mb-6">
              Our Activities
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Tree planting and greening schools</li>
              <li>Waste management education</li>
              <li>Climate change advocacy</li>
              <li>Community clean-up initiatives</li>
              <li>Eco-literacy workshops for youth</li>
            </ul>
          </motion.div>
        </section>

        {/* Tree Gallery */}
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-green-700 mb-8 text-center">
              Tree Planting Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {treeImages.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="overflow-hidden rounded-2xl shadow-lg"
                >
                  <img
                    src={img}
                    alt={`Tree planting ${i + 1}`}
                    className="w-full h-48 object-cover transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Impact Stats */}
        <section className="bg-green-100 rounded-2xl py-12 px-6">
          <h2 className="text-3xl font-semibold text-green-700 mb-8 text-center">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {impactStats.map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
                <p className="text-2xl font-bold text-green-800">{stat.value}+</p>
                <p className="mt-2 text-gray-700 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Community Stories */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-green-700 mb-6">Community Stories</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When local communities participate in tree planting, they not only improve their environment but also strengthen social cohesion.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For example, the Greening Schools Project in Nairobi led to over 300 students engaging in environmental clubs, planting trees, and learning sustainable practices that continue to impact their neighborhoods.
            </p>
          </motion.div>
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
            href="/get-involved"
            className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-green-50 transition"
          >
            Volunteer & Donate
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
