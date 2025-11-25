import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import LearningPhoto1 from "../assets/women_empowerment.jpg";
import LearningPhoto2 from "../assets/learning2.jpg";
import { Helmet } from "react-helmet"; // ✅ Added for SEO

export default function Imarawomen() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

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
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* ✅ Add Helmet here */}
      <Helmet>
        <title>Elimu Community Network | ECN Africa</title>
        <meta
          name="description"
          content="Learn about Elimu Community Network (ECN Africa), our mission, vision, and how we empower communities through education, innovation, and sustainable programs."
        />
      </Helmet>
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
          IMARA WOMEN: Building Strength through Knowledge and Innovation
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90 mb-6">
          Imara means “strong” or “resilient” in Swahili
        </p>
        <motion.blockquote
          className="italic text-white/80 text-center text-xl font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          “When you educate a woman, you educate a nation.” — African Proverb
        </motion.blockquote>
      </section>

      {/* 🔹 Main Content */}
      <section className="max-w-6xl mx-auto py-16 px-6 space-y-16 text-gray-700">
        {/* Introduction */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="leading-relaxed">
            At Elimu Community Network (ECN), we believe that empowering women through education and innovation is key to unlocking the full potential of families and communities. Our Women Empowerment Programme integrates economic inclusion, psychosocial wellbeing, and continuous learning to create sustainable change from the inside out.
          </p>
          <p className="leading-relaxed">
            This initiative recognizes that a woman’s empowerment journey begins with self-discovery, is strengthened through education, and matures through active participation in the local economy. When women are equipped with knowledge, confidence, and opportunity, they become drivers of transformation by nurturing resilient families and building stronger, more equitable communities.
          </p>
        </motion.div>

        {/* Key Pillars */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Three Strategic Pillars
          </h2>

          <div className="space-y-6">
            {/* Pillar 1 */}
            <div className="p-6 bg-white rounded-2xl shadow-md border-l-4 border-blue-700">
              <h3 className="text-xl font-semibold mb-2">Psychosocial and Family Wellbeing</h3>
              <p className="leading-relaxed">
                Our approach begins with the woman; her mind, emotions, and relationships. We provide mental health and psychosocial support (MHPSS) through group therapy sessions, peer mentorship, and family-focused counselling. These interventions build self-worth, confidence, and emotional resilience essential for leadership, learning, and entrepreneurship. Families eventually support vulnerable children under foster-care arrangements.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 bg-white rounded-2xl shadow-md border-l-4 border-blue-700">
              <h3 className="text-xl font-semibold mb-2">Entrepreneurship & Innovation</h3>
              <p className="leading-relaxed mb-3">
                At the heart of the programme lies a learning-based model linking education directly with income generation. Through structured trainings, women acquire practical skills in entrepreneurship, innovation, and financial literacy.
              </p>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700 leading-relaxed">
                <li>
                  <span className="font-semibold">Village Savings and Loan Associations (VSLA):</span> Women form self-managed savings and lending groups that promote financial inclusion, mutual accountability, and community solidarity. Each group saves regularly, issues small loans for income-generating activities, and reinvests in local opportunities.
                </li>
                <li>
                  <span className="font-semibold">Microenterprise and Innovation Training:</span> Women receive practical business education on idea generation, market research, cost management, product diversification, and digital literacy. Emphasis is placed on identifying local problems and creating scalable, sustainable solutions.
                </li>
                <li>
                  <span className="font-semibold">Business Incubation and Peer Mentorship:</span> ECN supports emerging women entrepreneurs through mentorship, market access, and partnerships. Peer learning circles encourage experience-sharing and co-creation of new business models.
                </li>
              </ol>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 bg-white rounded-2xl shadow-md border-l-4 border-blue-700">
              <h3 className="text-xl font-semibold mb-2">Active Participation in Local Economies & Community Leadership</h3>
              <p className="leading-relaxed">
                Empowered women are not just beneficiaries—they are leaders and innovators in their local economies. The programme promotes participation in local markets, cooperatives, and community enterprises, amplifying women’s voices in economic decision-making. Through continuous education, women move beyond subsistence livelihoods toward productive, dignified, and sustainable engagement in their communities.
              </p>
              <p className="mt-2 italic">“When women rise, families prosper and communities flourish.”</p>
            </div>
          </div>
        </motion.div>

        {/* Learning in Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">The Role of Education</h2>
          <p className="leading-relaxed mb-6">
            Education equips women with knowledge, skills, and the mindset to innovate, collaborate, and lead. Functional literacy classes, financial education, and leadership training foster lifelong learning and personal growth.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700 mb-6">Our Distinctive Approach</h2>
          <p className="leading-relaxed mb-6">
            Each woman receives personalized support within group-based learning environments. This holistic ecosystem nurtures women’s wellbeing, family development, and community resilience sustainably.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <img
              src={LearningPhoto1}
              alt="Women learning digital skills during mentorship"
              className="rounded-2xl shadow-md object-cover h-64 md:h-80 w-full transition-transform duration-300 hover:scale-105"
            />
            <img
              src={LearningPhoto2}
              alt="Youth training and mentorship"
              className="rounded-2xl shadow-md object-cover h-64 md:h-80 w-full transition-transform duration-300 hover:scale-105"
            />
          </div>

          <h3 className="text-xl font-semibold text-blue-700 mb-4">Call to Action</h3>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700 leading-relaxed">
            <li>Learn, save, and grow with others.</li>
            <li>Sponsor a woman-led business or training.</li>
            <li>Collaborate to expand access to women’s education and financial inclusion.</li>
          </ol>
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
            “Education is not preparation for life; education is life itself — and Nafasi Learning is where opportunity meets purpose.”
          </p>
          <p className="text-right font-semibold text-blue-700 mt-2">– Elimu Community Network (ECN)</p>
        </motion.div>

        {/* Join Movement CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Join the Nafasi Learning Movement</h3>
          <p className="mb-6">
            Whether you are a student, mentor, or partner — your contribution can help shape a generation of thinkers, creators, and leaders.
          </p>
          <a
            href="/contact"
            aria-label="Get involved with Imara Women program"
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl transition duration-300"
          >
            Get Involved
          </a>
        </motion.div>
      </section>

      {/* Scroll to Top */}
      {showTopBtn && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ArrowUp size={24} />
        </motion.button>
      )}

      <Footer />
    </div>
    </div>
  );
}
