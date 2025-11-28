import React from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import { FaChalkboardTeacher, FaUsers, FaTree } from "react-icons/fa";

export default function QualityEducation() {
  const programs = [
    {
      icon: <FaChalkboardTeacher size={36} className="text-blue-700" />,
      title: "Street Education & Reintegration",
      description:
        "Reaching children and youth on the streets, providing safe learning spaces, mentorship, and pathways to reintegration."
    },
    {
      icon: <FaUsers size={36} className="text-green-700" />,
      title: "Teacher Training & Innovation",
      description:
        "Equipping educators with creative, culturally relevant, and future-ready teaching methods that inspire lifelong learning."
    },
    {
      icon: <FaTree size={36} className="text-yellow-700" />,
      title: "Community Learning Centers",
      description:
        "Creating hubs of knowledge, innovation, and collaboration that connect families, schools, and local communities."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-600 to-blue-800 text-white py-32 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-6">Quality Education</h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto">
            At ECN, we turn learning into action — empowering children, youth, and women to thrive, innovate, and lead their communities.
          </p>
          <p className="mt-4 font-semibold text-yellow-100">Inclusive. Transformative. Future-ready.</p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="mailto:education@ecnafrica.org?subject=Volunteer|"
              className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-50 transition"
            >
              Volunteer Today
            </a>
            <a
              href="/donate"
              className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition"
            >
              Donate Now
            </a>
          </div>
        </motion.div>
      </section>

      {/* Programs Section */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold text-blue-700 mb-12 text-center">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl text-center flex flex-col items-center"
            >
              {program.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2 text-blue-700">{program.title}</h3>
              <p className="text-gray-700">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Quote Section */}
      <section className="bg-blue-50 py-16 px-6 text-center">
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xl italic text-gray-800 max-w-3xl mx-auto"
        >
          “Education is not a way to escape poverty; it is a way of fighting it.” — Julius Nyerere
        </motion.blockquote>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6 text-blue-700"
        >
          Join Us in Making Education Accessible
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:education@ecnafrica.org?subject=Volunteer|"
            className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-50 transition"
          >
            Volunteer Today
          </a>
          <a
            href="/donate"
            className="bg-green-900 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-green-950 transition"
          >
            Support With a Donation
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
