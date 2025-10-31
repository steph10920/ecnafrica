import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function Programs() {
  const programs = [
    {
      title: "GREEN CLASSROOMS FOR COMMUNITY RESILIENCE: EDUCATION FOR A GREENER AND SUSTAINABLE FUTURE",
      subtitle: "Education for a Greener and Sustainable Future",
      path: "/programs/green-classrooms",
      color: "from-green-100 to-green-300",
    },
    {
      title: "Urban Green Minds",
      subtitle: "Turning Waste into Worth",
      path: "/programs/urban-green-minds",
      color: "from-blue-100 to-blue-300",
    },
    {
      title: "Nafasi Learning Programme",
      subtitle: "Creating Spaces and Opportunities for Change",
      path: "/programs/nafasi-learning",
      color: "from-yellow-100 to-yellow-300",
    },
    {
      title: "Blue Horizons",
      subtitle: "Youth for Sustainable Fishing and Innovation",
      path: "/programs/blue-horizons",
      color: "from-cyan-100 to-cyan-300",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow flex flex-col items-center justify-start px-4 sm:px-8 py-10">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-green-700 mb-8 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Programmes
        </motion.h1>

        <p className="text-center text-gray-600 mb-10 max-w-2xl">
          Discover how ECN empowers communities through education, sustainability, and youth-driven innovation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className={`rounded-3xl shadow-lg bg-gradient-to-br ${program.color} p-6 flex flex-col items-center text-center`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-2xl font-bold text-green-700 mb-2">{program.title}</h2>
              <p className="text-gray-700 mb-4">{program.subtitle}</p>
              <Link
                to={program.path}
                className="text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded-lg transition"
              >
                See Details →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
