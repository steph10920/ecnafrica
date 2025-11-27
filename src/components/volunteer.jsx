// src/components/Volunteer.jsx
import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Footer from "./Footer";
import volunteerImg from "../assets/volunteer.png";
import Confetti from "react-confetti";

export default function Volunteer() {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");

  const formRef = useRef(null);

  // ---------- Framer Motion Parallax ----------
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 300], [0, 80]); // parallax effect

  // ---------- Form Submission ----------
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const name = formData.get("name");
    setUserName(name);

    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY"); // Replace with your key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        form.reset();
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

  const volunteerOpportunities = [
    {
      title: "Education",
      description:
        "Help children learn and provide mentorship to improve literacy and life skills.",
      icon: "📚",
    },
    {
      title: "Environment",
      description:
        "Participate in tree planting, clean-up campaigns, and sustainability initiatives.",
      icon: "🌳",
    },
    {
      title: "Community Support",
      description:
        "Assist in organizing events, fundraising, and supporting local development projects.",
      icon: "🤝",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* ---------- Hero Section ---------- */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.img
          src={volunteerImg}
          alt="Volunteers helping the community"
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          style={{ y: yParallax }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Become a Volunteer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl text-white mb-6"
          >
            Join hands with ECN Africa and contribute to impactful community projects.
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#signup"
            className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Sign Up to Volunteer
          </motion.a>
        </div>
      </section>

      {/* ---------- About Volunteering ---------- */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6">Why Volunteer with ECN Africa?</h2>
        <p className="mb-4">
          Volunteering allows you to contribute your time and skills to meaningful projects that impact education, environment, and community development across Africa.
        </p>
        <p>
          Whether you are passionate about teaching, tree planting, or organizing community events, there is a place for you. Gain experience, meet like-minded people, and make a lasting difference.
        </p>
      </section>

      {/* ---------- Volunteer Opportunities ---------- */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10 text-center">Opportunities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {volunteerOpportunities.map((opportunity) => (
              <motion.div
                key={opportunity.title}
                className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-2">{opportunity.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{opportunity.title}</h3>
                <p>{opportunity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Volunteer Form ---------- */}
      <section id="signup" className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Join Us</h2>
        <p className="text-center mb-8">Fill in the form below to become an ECN Africa volunteer.</p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto grid grid-cols-1 gap-6 bg-white p-8 rounded-xl shadow-md border border-green-100"
        >
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

      {/* ---------- Success Modal with Confetti ---------- */}
      <AnimatePresence>
        {showModal && (
          <>
            <Confetti numberOfPieces={150} recycle={false} />
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
          </>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
