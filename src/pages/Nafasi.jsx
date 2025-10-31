import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import LearningPhoto1 from "../assets/learning1.jpg";
import LearningPhoto2 from "../assets/learning2.jpg";

export default function Nafasi() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 🔹 Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-24 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          Nafasi Learning: Bridging Education and Opportunity
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          Empowering Africa’s youth with digital skills, mentorship, and
          innovation training to unlock future-ready careers and community
          impact.
        </p>
      </section>

      {/* 🔹 Main Content */}
      <section className="max-w-6xl mx-auto py-16 px-6 space-y-12 text-gray-700">
        {/* Introduction */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-blue-700">
            Transforming Learning for the 21st Century
          </h2>
          <p className="leading-relaxed">
            <strong>Nafasi Learning</strong> is ECN’s digital education and
            innovation hub that connects young learners to opportunities in
            technology, entrepreneurship, and creative industries. “Nafasi,”
            meaning *opportunity* in Swahili, reflects our vision — to create
            pathways for youth to learn, grow, and lead in a rapidly changing
            world.
          </p>
          <p>
            Through blended learning, mentorship, and community-based projects,
            Nafasi equips young people with practical skills for employment and
            leadership — especially those from underserved communities.
          </p>
        </motion.div>

        {/* Key Pillars */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Our Key Learning Pillars
          </h2>
          <ul className="list-disc list-inside space-y-3 pl-2">
            <li>
              <strong>Digital Literacy & Tech Skills:</strong> Training in
              computer literacy, coding, and online collaboration tools.
            </li>
            <li>
              <strong>Entrepreneurship & Innovation:</strong> Empowering youth
              to turn ideas into sustainable enterprises through mentorship and
              design thinking.
            </li>
            <li>
              <strong>Career Readiness:</strong> Equipping learners with
              communication, leadership, and problem-solving skills to succeed
              in a competitive job market.
            </li>
            <li>
              <strong>Community Impact Projects:</strong> Applying learning to
              solve real challenges — from digital inclusion to local
              development.
            </li>
          </ul>
        </motion.div>

        {/* Learning in Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Learning in Action
          </h2>
          <p className="leading-relaxed mb-6">
            Nafasi Learning blends online lessons with real-world experience.
            Through partnerships with schools, tech hubs, and local innovators,
            learners participate in bootcamps, hackathons, and mentorship
            programs that ignite creativity and confidence.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <img
              src={LearningPhoto1}
              alt="Students learning technology"
              className="rounded-2xl shadow-md"
            />
            <img
              src={LearningPhoto2}
              alt="Youth training and mentorship"
              className="rounded-2xl shadow-md"
            />
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="bg-blue-100 p-6 rounded-2xl border-l-4 border-blue-700 shadow-sm"
        >
          <p className="italic text-blue-800 text-lg">
            “Education is not preparation for life; education is life itself —
            and Nafasi Learning is where opportunity meets purpose.”
          </p>
          <p className="text-right font-semibold text-blue-700 mt-2">
            – Elimu Community Network (ECN)
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            Join the Nafasi Learning Movement
          </h3>
          <p className="mb-6">
            Whether you are a student, mentor, or partner — your contribution
            can help shape a generation of thinkers, creators, and leaders.
          </p>
          <a
            href="/contact"
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl transition duration-300"
          >
            Get Involved
          </a>
        </motion.div>
      </section>

      {/* Scroll to Top */}
      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 z-50"
        >
          <ArrowUp size={24} />
        </button>
      )}

      <Footer />
    </div>
  );
}
