import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { Menu, X } from "lucide-react"; // Hamburger menu icons

export default function Newsroom() {
  const [menuOpen, setMenuOpen] = useState(false);

  const newsItems = [
    {
      title: "ECN Partners with Schools to Expand Green Classrooms Initiative",
      image: "/images/news/green-classroom.jpg",
      date: "Feb 2025",
      category: "Education",
      path: "/news/green-classrooms-expansion",
    },
    {
      title: "IMARA Women Train 200 Young Mothers on Digital Business Skills",
      image: "/images/news/imara-training.jpg",
      date: "Jan 2025",
      category: "Women Empowerment",
      path: "/news/imara-digital-skills",
    },
    {
      title: "Nafasi Learning Programme Launches Community Innovation Labs",
      image: "/images/news/nafasi-labs.jpg",
      date: "Dec 2024",
      category: "Youth",
      path: "/news/nafasi-innovation-labs",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* SEO */}
      <Helmet>
        <title>ECN Africa | Newsroom</title>
        <meta
          name="description"
          content="Stay up to date with the latest news, stories, and announcements from ECN Africa."
        />
      </Helmet>

      {/* Main content */}
      <main className="flex-grow py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page title */}
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-green-700 text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Newsroom
          </motion.h2>

          <motion.p
            className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Stay up to date with the latest news, and announcements from ECN Africa.
          </motion.p>

          {/* News grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {newsItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link to={item.path}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-6">
                    <div className="text-sm text-green-700 font-semibold mb-1">
                      {item.category}
                    </div>

                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500 mb-4">{item.date}</p>

                    <span className="text-green-700 font-semibold hover:underline">
                      Read More →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
