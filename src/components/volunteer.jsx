// src/components/Volunteer.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import volunteerImg from "../assets/volunteer.png";

export default function Volunteer() {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    setUserName(name);

    formData.append("access_key", "74a6f829-9dac-4e22-bf1a-bcd3e916f4d7"); // acces key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        event.currentTarget.reset();
        setShowModal(true);
        setTimeout(() => setShowModal(false), 5000);
      } else {
        alert("⚠️ Submission failed. Check your access key or form setup.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("❌ Network error — check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <motion.img
          src={volunteerImg}
          alt="Volunteers helping the community"
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          style={{ y: 0 }} // can be replaced with scroll-based motion if needed
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Text */}
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Become a Volunteer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl text-white mb-6"
          >
            Join hands with ECN Africa and contribute to impactful community projects.
          </motion.p>
          <a
            href="#signup"
            className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Sign Up to Volunteer
          </a>
        </div>
      </section>

      {/* About Volunteering */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6">Why Volunteer with ECN Africa?</h2>
        <p className="mb-4">
          Volunteering with ECN Africa allows you to contribute your time and skills
          to meaningful projects that impact education, environment, and community
          development across Africa.
        </p>
        <p>
          Whether you are passionate about teaching, tree planting, or organizing community events,
          there is a place for you. Gain experience, meet like-minded people, and make a lasting difference.
        </p>
      </section>

      {/* Volunteer Opportunities */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10 text-center">Opportunities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Education",
                description:
                  "Help children learn and provide mentorship to improve literacy and life skills.",
              },
              {
                title: "Environment",
                description:
                  "Participate in tree planting, clean-up campaigns, and sustainability initiatives.",
              },
              {
                title: "Community Support",
                description:
                  "Assist in organizing events, fundraising, and supporting local development projects.",
              },
            ].map((opportunity) => (
              <motion.div
                key={opportunity.title}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold mb-2">{opportunity.title}</h3>
                <p>{opportunity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section id="signup" className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Join Us</h2>
        <p className="text-center mb-8">Fill in the form below to become an ECN Africa volunteer.</p>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid grid-cols-1 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
          <textarea
            name="message"
            placeholder="Why do you want to volunteer?"
            className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            rows={4}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </section>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl shadow-lg p-8 w-[90%] md:w-[400px] text-center"
            >
              <h3 className="text-2xl font-semibold text-green-700 mb-2">
                Thank You{userName ? `, ${userName}` : ""}!
              </h3>
              <p className="text-gray-600 mb-4">
                Your volunteer request has been received successfully. We will contact you soon!
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
