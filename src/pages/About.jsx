<title>Elimu Community Network | ECN Africa</title>
import React, { Suspense, lazy, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Globe2,
  HeartHandshake,
  Mail,
  Send,
  CheckCircle,
} from "lucide-react";

const Footer = lazy(() => import("../components/Footer"));

export default function About() {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");

  const Divider = () => (
    <div className="flex items-center gap-2 my-8">
      <div className="h-[2px] w-10 bg-green-600 rounded"></div>
      <div className="h-[2px] flex-1 bg-green-200 rounded"></div>
    </div>
  );

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    const name = formData.get("name");
    setUserName(name);

    // ✅ Add your access key
    formData.append("access_key", "74a6f829-9dac-4e22-bf1a-bcd3e916f4d7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Web3Forms Response:", data);

      if (data.success) {
        event.target.reset();
        setShowModal(true);
        setTimeout(() => setShowModal(false), 5000);
      } else {
        alert("⚠️ Submission failed. Please check your access key or form setup.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("❌ Network error — please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-14 animate-fade-in">
        {/* ---------- INTRODUCTION ---------- */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="text-green-700" size={28} />
            <h1 className="text-3xl md:text-4xl font-bold text-green-700">
              About ECN
            </h1>
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Elimu Community Network (ECN)</strong> is a Kenyan
            Non-Governmental Learning Organization founded in 2012. We work to
            safeguard the rights of vulnerable children and empower families
            through quality, inclusive education and community-driven innovation.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our mission is to ensure that education remains a catalyst for
            sustainable community development — transforming challenges into
            opportunities and empowering Africa to design her own future.
          </p>
        </section>

        <Divider />

        {/* ---------- APPROACH ---------- */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <HeartHandshake className="text-green-700" size={28} />
            <h2 className="text-2xl font-semibold text-green-700">
              Our Approach
            </h2>
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Listen. Learn. Lead.</strong>
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We listen deeply to communities, learn collaboratively, and lead
            with compassion. Our strength-based approach values local wisdom and
            creativity while promoting gender equality, inclusivity, and
            innovation.
          </p>
        </section>

        <Divider />

        {/* ---------- IMPACT ---------- */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Globe2 className="text-green-700" size={28} />
            <h2 className="text-2xl font-semibold text-green-700">
              Impact and Sustainability
            </h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Since its founding, ECN has reached over{" "}
            <strong>10,000 children, youth, and women</strong> across Kenya.
          </p>
        </section>

        <Divider />

        {/* ---------- VALUES ---------- */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <HeartHandshake className="text-green-700" size={28} />
            <h2 className="text-2xl font-semibold text-green-700">
              Our Core Values
            </h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <strong>Courage:</strong> We believe in transformation through
              education.
            </li>
            <li>
              <strong>Integrity:</strong> We act transparently and responsibly.
            </li>
            <li>
              <strong>Creativity:</strong> We innovate for impact.
            </li>
            <li>
              <strong>Collaboration:</strong> We grow stronger together.
            </li>
          </ul>
        </section>

        <Divider />

        {/* ---------- CONTACT ---------- */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Mail className="text-green-700" size={28} />
            <h2 className="text-2xl font-semibold text-green-700">
              Get in Touch
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Contact us at{" "}
            <a
              href="mailto:education@ecnafrica.org"
              className="text-green-600 underline hover:text-green-800"
            >
              education@ecnafrica.org
            </a>{" "}
            or visit our{" "}
            <a
              href="https://www.facebook.com/elimucommunitynetwork/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 underline hover:text-green-800"
            >
              Facebook page
            </a>
            .
          </p>
        </section>

        <Divider />

        {/* ---------- FEEDBACK FORM ---------- */}
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-green-100">
          <h2 className="text-2xl font-semibold text-green-700 mb-4 flex items-center gap-2">
            <Send size={22} className="text-green-700" /> Share Your Feedback
          </h2>
          <p className="text-gray-600 mb-6">
            We’d love to hear your thoughts! Please share your ideas, suggestions, or experiences with ECN.
          </p>

          <form onSubmit={onSubmit} className="space-y-4" id="feedback-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-600 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-600 outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number (optional)"
              pattern="[0-9+\-\s()]*"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-600 outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Feedback"
              required
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-green-600 outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center items-center gap-2 bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all ${
                loading ? "opacity-70 cursor-not-allowed" : "hover:bg-green-800"
              }`}
            >
              {loading ? "Sending..." : "Submit Feedback"}
            </button>
          </form>
        </section>
      </main>

      {/* ---------- SUCCESS MODAL ---------- */}
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
              <CheckCircle size={60} className="text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-green-700 mb-2">
                Thank You{userName ? `, ${userName}` : ""}!
              </h3>
              <p className="text-gray-600 mb-4">
                Your feedback has been received successfully. We appreciate your input!
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

      {/* ---------- FOOTER ---------- */}
      <Suspense fallback={<div className="text-center py-4 text-gray-500">Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
