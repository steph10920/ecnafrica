import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

// Reusable Program Card component (entire card clickable)
function ProgramCard({ program }) {
  return (
    <Link
      to={program.path}
      aria-label={`View details about ${program.title}`}
      className="w-full"
    >
      <motion.div
        whileHover={{
          scale: 1.05,
          y: -5,
          boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
        }}
        transition={{ type: "spring", stiffness: 250 }}
        className={`relative rounded-3xl bg-gradient-to-br ${program.color} p-6 sm:p-8 flex flex-col items-center text-center overflow-hidden cursor-pointer`}
      >
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 hover:opacity-100 transition-all duration-500 rounded-3xl"></div>

        <h2 className="text-xl sm:text-2xl font-bold text-green-900 mb-3 z-10">
          {program.title}
        </h2>
        <p className="text-gray-700 mb-6 z-10 text-sm sm:text-base">
          {program.subtitle}
        </p>

        {/* Optional inner button for visual cue */}
        <div className="z-10 text-white bg-green-700 px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transition">
          See Details →
        </div>
      </motion.div>
    </Link>
  );
}

export default function Programs() {
  const programs = [
    {
      title:
        "GREEN CLASSROOMS FOR COMMUNITY RESILIENCE: EDUCATION FOR A GREENER AND SUSTAINABLE FUTURE",
      subtitle: "Education for a Greener and Sustainable Future",
      path: "/programs/green-classrooms",
      color: "from-green-100 via-green-200 to-green-300",
    },
    {
      title:
        "Nafasi Learning Programme: Creating Spaces and Opportunities for Change",
      subtitle: "Creating Spaces and Opportunities for Change",
      path: "/programs/nafasiprogramme",
      color: "from-blue-100 via-blue-200 to-blue-300",
    },
    {
      title: "IMARA WOMEN: Building Strength through Knowledge and Innovation",
      subtitle: "Imara means “strong” or “resilient” in Swahili",
      path: "/programs/imara-women",
      color: "from-yellow-100 via-yellow-200 to-yellow-300",
    },
    {
      title: "Blue Horizons",
      subtitle: "Youth for Sustainable Fishing and Innovation",
      path: "/programs/blue-horizons",
      color: "from-cyan-100 via-cyan-200 to-cyan-300",
    },
  ];

  // Animation variants for staggered fade-in effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 250 } },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-green-50 to-green-100">
      <div className="flex-grow flex flex-col items-center justify-start px-4 sm:px-8 py-14">
        {/* Page Title */}
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-6 text-center tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Programmes
        </motion.h1>

        {/* Intro Paragraph */}
        <motion.p
          className="text-center text-gray-600 mb-12 max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Discover how ECN empowers communities through education, sustainability,
          and youth-driven innovation.
        </motion.p>

        {/* Programs Grid with staggered animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {programs.map((program, index) => (
            <motion.div key={index} variants={cardVariants}>
              <ProgramCard program={program} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
