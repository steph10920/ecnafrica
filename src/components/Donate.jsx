import { motion } from "framer-motion";

export default function Donate() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-200 p-12 text-center">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4"
        >
          Donate to ECN Africa
        </motion.h1>

        {/* Coming Soon Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 text-lg leading-relaxed mb-8"
        >
          Our donation system is currently being updated to give you a smoother
          and more secure contribution experience.
          <br /><br />
          <span className="text-green-700 font-semibold">
            New donation options coming soon!
          </span>
        </motion.p>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-4"
        >
          <span className="px-6 py-3 bg-green-600 text-white rounded-full font-medium shadow-lg">
            Coming Soon
          </span>
        </motion.div>

      </div>
    </section>
  );
}
