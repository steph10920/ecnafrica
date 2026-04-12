import React, { Suspense, lazy, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
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
  const [impactStats, setImpactStats] = useState({ children: 0, youth: 0, women: 0 });

  // Animate stats counting up
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const targetStats = { children: 5000, youth: 3000, women: 2000 };
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setImpactStats({
        children: Math.floor(progress * targetStats.children),
        youth: Math.floor(progress * targetStats.youth),
        women: Math.floor(progress * targetStats.women),
      });
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

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

    formData.append("access_key", "74a6f829-9dac-4e22-bf1a-bcd3e916f4d7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        event.target.reset();
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
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* SEO */}
      <Helmet>
        <title>Elimu Community Network | ECN Africa</title>
        <meta
          name="description"
          content="Learn about Elimu Community Network (ECN Africa), our mission, vision, and how we empower communities through education, innovation, and sustainable programs."
        />
      </Helmet>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">

  {/*HERO SECTION */}
  <section className="text-center space-y-6">
    <h1 className="text-4xl md:text-5xl font-bold text-green-700 leading-tight">
      Empowering Communities Through Education
    </h1>
    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
      Elimu Community Network (ECN) is transforming lives by equipping children and families with the tools to build a sustainable future.
    </p>

    <div className="flex justify-center gap-4 mt-6">
      <a
  href="/donate"
  className="bg-green-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-green-900 transition-all duration-300 inline-flex items-center gap-2"
>
  Support Our Work
  <span>→</span>
</a>
      <button className="border border-green-700 text-green-700 px-6 py-3 rounded-xl hover:bg-green-50 transition">
        Learn More
      </button>
    </div>
  </section>

  {/*  IMPACT STRIP */}
  <section className="grid md:grid-cols-3 gap-6 text-center">
    <div className="bg-white p-6 rounded-2xl shadow border">
      <h3 className="text-3xl font-bold text-green-700">{impactStats.children}+</h3>
      <p className="text-gray-600">Children Reached</p>
    </div>
    <div className="bg-white p-6 rounded-2xl shadow border">
      <h3 className="text-3xl font-bold text-green-700">{impactStats.youth}+</h3>
      <p className="text-gray-600">Youth Empowered</p>
    </div>
    <div className="bg-white p-6 rounded-2xl shadow border">
      <h3 className="text-3xl font-bold text-green-700">{impactStats.women}+</h3>
      <p className="text-gray-600">Women Supported</p>
    </div>
  </section>

  {/*  WHO WE ARE */}
  <section className="grid md:grid-cols-2 gap-10 items-center">
    <div>
      <h2 className="text-2xl font-bold text-green-700 mb-4">Who We Are</h2>
      <p className="text-gray-700 leading-relaxed">
        Founded in 2012, Elimu Community Network (ECN) is a Kenyan NGO dedicated to safeguarding the rights of vulnerable children and empowering families through education and innovation.
      </p>
    </div>
    <div className="bg-green-50 p-6 rounded-2xl">
      <h3 className="font-semibold text-green-800 mb-2">Our Vision</h3>
      <p className="text-gray-700">
        A future where every child has access to quality education and the opportunity to thrive.
      </p>
    </div>
  </section>

  {/*  WHY IT MATTERS */}
  <section className="bg-gray-100 p-8 rounded-2xl">
    <h2 className="text-2xl font-bold text-green-700 mb-4">Why It Matters</h2>
    <p className="text-gray-700 leading-relaxed max-w-3xl">
      Millions of children still lack access to quality education. Without intervention, poverty and inequality continue across generations. ECN works at the grassroots level to break this cycle—creating real, lasting change.
    </p>
  </section>

  {/*  WHAT WE DO */}
  <section>
    <h2 className="text-2xl font-bold text-green-700 mb-6">What We Do</h2>

    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-2xl shadow border">
        <h3 className="font-semibold text-green-700 mb-2">Education Programs</h3>
        <p className="text-gray-600 text-sm">
          Providing access to inclusive, quality education for vulnerable children.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow border">
        <h3 className="font-semibold text-green-700 mb-2">Mentorship</h3>
        <p className="text-gray-600 text-sm">
          Guiding youth with skills, confidence, and leadership development.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow border">
        <h3 className="font-semibold text-green-700 mb-2">Community Innovation</h3>
        <p className="text-gray-600 text-sm">
          Building sustainable solutions with local communities.
        </p>
      </div>
    </div>
  </section>

  {/*  MISSION BLOCK */}
  <section className="bg-green-700 text-white p-10 rounded-2xl text-center">
    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
    <p className="max-w-2xl mx-auto text-lg">
      To make education a catalyst for sustainable development—transforming challenges into opportunities and empowering Africa to design her own future.
    </p>
  </section>

  {/*  APPROACH */}
  <section>
    <h2 className="text-2xl font-bold text-green-700 mb-4">Our Approach</h2>
    <p className="text-gray-700 max-w-3xl">
      We listen to communities, learn collaboratively, and lead with compassion. Our work is rooted in local knowledge, ensuring sustainable and scalable impact.
    </p>
  </section>

  {/* VALUES */}
  <section>
    <h2 className="text-2xl font-bold text-green-700 mb-6">Our Core Values</h2>
    <div className="grid md:grid-cols-4 gap-4">
      {["Courage", "Integrity", "Creativity", "Collaboration"].map((value) => (
        <div key={value} className="bg-white p-4 rounded-xl shadow border text-center">
          <p className="font-semibold text-green-700">{value}</p>
        </div>
      ))}
    </div>
  </section>

  {/* CTA SECTION */}
  <section className="text-center space-y-4">
    <h2 className="text-2xl font-bold text-green-700">
      Be Part of the Change
    </h2>
    <p className="text-gray-600 max-w-xl mx-auto">
      Join us in transforming lives through education. Your support creates lasting impact.
    </p>

    <a
  href="/donate"
  className="bg-green-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-green-800 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
>
  Donate Now
  <span>→</span>
</a>
    </section>

</main>

      {/* SUCCESS MODAL */}
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
                Your feedback has been received successfully.
              </p>
              <button onClick={() => setShowModal(false)} className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition">
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <Suspense fallback={<div className="text-center py-4 text-gray-500">Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
