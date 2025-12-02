import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { X } from "lucide-react";

export default function Newsroom() {
  const [selectedNews, setSelectedNews] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const newsItems = [
    {
      title: "ECN Partners with Schools to Expand Green Classrooms Initiative",
      image: "/images/news/green-classroom.jpg",
      date: "Feb 2025",
      category: "Education",
      content: `ECN has partnered with multiple schools to expand the Green Classrooms Initiative, promoting sustainable education and environmental awareness...`
    },
    {
      title: "IMARA Women Train 200 Young Mothers on Digital Business Skills",
      image: "/images/news/imara-training.jpg",
      date: "Jan 2025",
      category: "Women Empowerment",
      content: `IMARA Women conducted a series of training sessions for young mothers to improve digital literacy, business skills, and entrepreneurship opportunities...`
    },
    {
      title: "Nafasi Learning Programme Launches Community Innovation Labs",
      image: "/images/news/nafasi-labs.jpg",
      date: "Dec 2024",
      category: "Youth",
      content: `The Nafasi Learning Programme has launched innovation labs in local communities to encourage youth creativity, technology skills, and collaborative projects...`
    },
    {
      title: "ECN Africa Hosts Annual Environmental Awareness Summit",
      image: "/images/news/environment-summit.jpg",
      date: "Nov 2024",
      category: "Environment",
      content: `ECN Africa hosted its annual Environmental Awareness Summit, bringing together policymakers, educators, students, and environmental advocates...`
    },
    {
      title: "Digital Literacy Campaign Reaches 1,000 Students",
      image: "/images/news/digital-literacy.jpg",
      date: "Oct 2024",
      category: "Education",
      content: `Through a collaborative effort with local schools, ECN Africa's Digital Literacy Campaign successfully reached 1,000 students...`
    },
    {
      title: "Youth Innovation Challenge Awards 50 Young Innovators",
      image: "/images/news/youth-challenge.jpg",
      date: "Sep 2024",
      category: "Youth",
      content: `The Youth Innovation Challenge celebrated 50 young innovators who presented solutions in areas such as renewable energy, sustainable farming, and community health...`
    },
  ];

  const categories = ["All", ...new Set(newsItems.map((item) => item.category))];

  const filteredNews = activeCategory === "All"
    ? newsItems
    : newsItems.filter((item) => item.category === activeCategory);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Helmet>
        <title>ECN Africa | Newsroom</title>
        <meta
          name="description"
          content="Stay up to date with the latest news, stories, and announcements from ECN Africa."
        />
      </Helmet>

      <main className="flex-grow py-20">
        <div className="max-w-7xl mx-auto px-6">
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
            Stay up to date with the latest news and announcements from ECN Africa.
          </motion.p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold transition ${
                  activeCategory === cat
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-green-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredNews.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => setSelectedNews(item)}
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNews(null)}
          >
            <motion.div
              className="bg-white rounded-xl shadow-xl max-w-3xl w-full overflow-y-auto max-h-[90vh] relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {selectedNews.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{selectedNews.date}</p>
                <p className="text-gray-700 whitespace-pre-line">{selectedNews.content}</p>
              </div>
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                onClick={() => setSelectedNews(null)}
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
