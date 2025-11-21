import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import LearningPhoto1 from "../assets/learning1.jpg";
import LearningPhoto2 from "../assets/learning2.jpg";

export default function Imarawomen() {
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
          IMARA WOMEN: Building Strength through Knowledge and Innovation
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
         Imara means “strong” or “resilient” in Swahili
        </p>
        <blockquote className="mt-8 italic text-white-700 text-center text-xl font-medium">
              “When you educate a woman, you educate a nation.” — African Proverb
        </blockquote>
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
           <p className="leading-relaxed">
            At Elimu Community Network (ECN), we believe that empowering women through 
            education and innovation is key to unlocking the full potential of families and communities.<br />
            Our Women Empowerment Programme integrates economic inclusion, psychosocial wellbeing, and 
            continuous learning to create sustainable change from the inside out.

          </p>
          <p className="leading-relaxed">
            This initiative recognizes that a woman’s empowerment journey begins with self-discovery, is 
            strengthened through education, and matures through active participation in the local economy.<br />
            When women are equipped with knowledge, confidence, and opportunity, they become drivers of transformation 
            by nurturing resilient families and building stronger, more equitable communities.
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
           Three Strategic Pillars
          </h2>
          <ul className=" list-inside space-y-3 pl-2">
            <li>
              <span className="font-semibold">Psychosocial and Family Wellbeing</span> <br />
              Our approach begins with the woman; her mind, emotions, and relationships. We 
              provide mental health and psychosocial support (MHPSS) through group therapy 
              sessions, peer mentorship, and family-focused counselling. These interventions 
              build self-worth, confidence, and emotional resilience that are essential foundations 
              for leadership, learning, and entrepreneurship. The families eventually support the 
              placement of vulnerable children under foster-care arrangements.<br />
              <blockquote className="mt-8 italic text-blue-700 text-center text-xl font-medium">
              “When you educate a woman, you educate a nation.” — African Proverb
            </blockquote>
            </li>
            <li>
              <span className="font-semibold">Entrepreneurship & Innovation:</span><br />
              At the heart of the programme lies a learning-based model that links education directly with 
              income generation.<br />
            Through structured trainings, women acquire practical skills in entrepreneurship, innovation, 
            and financial literacy, empowering them to design microenterprises that respond to real community needs.<br />
            Core Components:
            <ol className="list-decimal pl-6 space-y-2 text-lg text-gray-700 leading-relaxed">
            <li><span className="font-semiblod>">Village Savings and Loan Associations (VSLA): </span>Women are organized into 
            self-managed savings and lending groups that promote financial inclusion, mutual accountability, and community solidarity.<br />
            Each group saves regularly, issues small loans for income-generating activities, and collectively reinvests in local opportunities.
            </li>
            <li><span className="font-semiblod>">Microenterprise and Innovation Training:  </span>Women receive practical business education on topics 
            such as idea generation, market research, cost management, product diversification, and digital literacy.<br />
            Special emphasis is placed on “innovation for the generations” by equipping women to identify local problems and create scalable, sustainable solutions.
            </li>
            <li><span className="font-semiblod>">Business Incubation and Peer Mentorship: </span>ECN supports emerging women entrepreneurs through mentorship, 
            access to local markets, and partnerships with financial institutions and private-sector players. Peer learning circles encourage women to share 
            experiences and co-create new business models.
            </li>                        
        </ol>
            </li>
            <li><span className="font-semibold">Active Participation in Local Economies and Community Leadership</span><br />
            Empowered women are not just beneficiaries, they are leaders and innovators in their local economies.<br />
            The programme promotes their participation in local markets, cooperatives, and community enterprises, amplifying their voices in economic decision-making.<br />
            Through continuous education, we help women move beyond subsistence livelihoods toward productive, dignified, and sustainable engagement in their communities.<br />
            “When women rise, families prosper and communities flourish.”<br />
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
            The Role of Education
          </h2>
          <p className="leading-relaxed mb-6">
            Education is the foundation of empowerment in this model. It equips women not only with 
            knowledge and skills but also with the mindset to innovate, collaborate, and lead. Through 
            functional literacy classes, financial education, and leadership training, women become lifelong 
            learners who are capable of navigating change and shaping their futures.
          </p>
          <p className="leading-relaxed mb-6">
            Each training session, dialogue circle, and mentorship engagement reinforces the idea that education is both a right and a tool for liberation.<br />
            <strong>“The empowered woman is not just self-reliant; she is a catalyst for generational transformation.”</strong>

          </p>
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Our Distinctive Approach
          </h2>
          <p className="leading-relaxed mb-6">
            What sets our programme apart is our individualized accompaniment model. Each woman receives personalized support within group-based learning 
            environments that nurture both independence and interdependence. The result is a holistic ecosystem where women’s wellbeing, family development, 
            and community resilience grow together sustainably and inclusively.
          </p>
          <p className="leading-relaxed mb-6">
            Empowered women create empowered families and empowered families build resilient nations.
            Through education, savings, and innovation, ECN is helping women move from vulnerability to 
            visibility, from survival to success.
          </p>
          <p className="leading-relaxed mb-6">
            Call to Action:
          </p>
           <ol className="list-decimal pl-6 space-y-2 text-lg text-gray-700 leading-relaxed">
            <li>Learn, save, and grow with others.</li>
            <li>Sponsor a woman-led business or training.</li>
            <li>Collaborate to expand access to women’s education and financial inclusion.</li>
        </ol> 

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
