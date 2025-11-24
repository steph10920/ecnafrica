import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import { ArrowUp } from "lucide-react";
import { Helmet } from "react-helmet";

// ✅ Import your local slide images
import Slide1 from "../assets/nafasi1.jpg";
import Slide2 from "../assets/nafasi2.jpg";
import Slide3 from "../assets/nafasi3.jpg";

export default function NafasiProgramme() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const slides = [Slide1, Slide2, Slide3];

  // 🔹 Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // 🔹 Show scroll-to-top button
  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const sections = [
    {
      title: "The Nafasi Learning Programme",
      content: `The Nafasi Learning Programme supports street-connected children and youth to reclaim their right to education, protection, and dignity. ‘Nafasi’ which means space or opportunity in Swahili, reflects our belief that every young person deserves a chance to learn and to belong.
Through mobile street schools, creative arts, and sports for transformation, ECN builds pathways from the street to structured learning environments. The programme integrates psychosocial care, family reintegration, and vocational training to empower youth toward independence.
Each child’s story begins in struggle but evolves through education from survival to learning, from learning to leadership. One example is a group of former street boys in Nairobi who, after completing ECN’s vocational program, now operate a community transport service using trollies that supports their families and funds younger children’s school fees.
Through the Nafasi Programme, ECN journeys with street-connected children and youth by meeting them where they are, listening to their stories, and walking beside them as they discover spaces and opportunities to survive, learn, and thrive.
“Every child has a right to be safe, to learn, and to dream.”`,
    },
    {
      title: "From the Streets to Safe Spaces",
      content: `Nafasi begins with compassion and curiosity. Our teams conduct mobile street outreach, building trust and helping children and youth identify safe survival options. From there, we guide them into rehabilitation, learning opportunities, and eventually family or community reintegration.
The journey follows three stages:
1. Rescue/Survival – Offering immediate safety, care, and emotional support on the streets.
2. Rehabilitation – Providing counselling, basic education, and psychosocial support in transitional spaces.
3. Foster and kinship care – support for short-term placement of children into foster families
4. Reintegration – Supporting family reunification and access to long-term educational and vocational pathways.
Each step is guided by our belief that education is the bridge between vulnerability and opportunity.
“Education is not a way to escape poverty; it is a way of fighting it.” — Julius Nyerere`,
    },
    {
      title: "Programme Objectives",
      content: `1. To strengthen social protection systems for children and youth living on the streets/ vulnerability by safeguarding their rights and wellbeing.
2. To increase sustainable reintegration through family-based care and access to education, skills training, and livelihood opportunities.`,
    },
    {
      title: "Key Activities",
      content: `• Street Work: Identification and assessment of street-connected children and youth, providing immediate assistance and pathways to reintegration.
• Street Teams and Safe Learning Spaces: Formation of creative and inclusive street teams engaged in arts, sports, and mentorship as tools for behaviour transformation and leadership development.
• Mobile School — Learning Without Walls: Establishment of a mobile street school as a safe, open, and flexible learning space where children and youth explore their talents, strengthen their self-esteem, and discover the joy of learning.
• Toolkits for Self-Reliance: Provision of work trollies and tool kits that help youth transition from street life to self-employment and community contribution.
“When we educate a child, we do not just change a life — we change a generation.”`,
    },
    {
      title: "Mobile Street School",
      content: `Nafasi is founded on the belief that education liberates potential. It helps children and youth rediscover their identity, rebuild confidence, and reimagine their place in the world.
Our “mobile street school” is not confined by walls because it travels where the children are, creating learning experiences rooted in real life and inspired by their strengths, talents, and dreams.
Through mentorship, creativity, and structured support, each child learns that their circumstances do not define their destiny.
“The child who is not embraced by the village will burn it down to feel its warmth.”— African Proverb
At Nafasi, we choose to embrace, to teach, to nurture, and to walk with every child until they can stand on their own.`,
    },
    {
      title: "Join the Journey",
      content: `Every week, ECN’s Nafasi team takes to the streets of Nairobi and surrounding communities not only to rescue but to reimagine education as a tool for healing and empowerment. This is not charity; it is partnership in transformation.
“Education is the key to unlock the golden door of freedom.”— George Washington Carver
Call to Action:
Join us in this beautiful journey of discovering and expanding learning spaces where every child finds their Nafasi; their space, their opportunity, their future.`,
    },
    {
      title: "Sports for Transformation",
      content: `Empowering vulnerable Youth through Play, Purpose, and Participation
“Sport has the power to change the world. It has the power to inspire and unite people in a way that little else does.” — Nelson Mandela
At Elimu Community Network (ECN), we believe that street and village sports are more than games. They are a classroom without walls, a bridge from vulnerability to self-discovery. Through sports-based learning, we use football, athletics, and creative games as transformative tools to engage youth, build life skills, promote discipline, and open pathways to education and sustainable livelihoods.
Specific Objective
To empower village and street-connected youth through structured sports and life-skills education, enhancing their social inclusion, psychosocial wellbeing, and access to education and livelihood opportunities.
Key Activities
1. Formation of Sports Clubs: Establish safe and inclusive street and village sports clubs where youth meet regularly to play, learn, and grow together. Sessions combine football, athletics, and team challenges with structured life-skills lessons on teamwork, communication, leadership, and self-control.
2. Street and village Sports Tournaments and Talent Days: Organize quarterly community tournaments and “Talent Days” that showcase the abilities of participating youth. These events foster team spirit, reduce stigma, and connect youth to education, vocational training, and mentorship opportunities.
3. Peer Coaching and Leadership Development: Identify and train outstanding participants as peer coaches and youth mentors. They become positive role models, leading younger players, facilitating learning circles, and organizing community clean-up or advocacy events that promote peace and social responsibility.
Achievements
1. Youth Empowerment and Re-engagement: Over 70% of participating youth have demonstrated improved confidence, teamwork, and emotional regulation, with many re-engaging in education, training, or family life.
2. Social Inclusion and Community Cohesion: Street and village sports activities reduced social stigma and strengthened community bonds, transforming how local residents perceive and support vulnerable youth.
3. Pathways to Opportunity: Through mentorship, talent development, and educational linkages, participating youth accessed new opportunities from school re-entry and vocational training to employment and microenterprise in the sports value chain.
“When youth play, they learn. When they learn, they lead. And when they lead, communities transform.” — Elimu Community Network`,
    },
    {
      title: "Fishers of Men Initiative",
      content: `Initiative for the empowerment of youth for their participation in the blue economy.`,
    },
  ];

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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* 🔹 Hero Slideshow */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={currentSlide}
            src={slides[currentSlide]}
            alt="Nafasi Programme"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
          >
            Nafasi Learning Programme
          </motion.h1>
          <p className="max-w-2xl text-lg opacity-90">
            Creating spaces and opportunities for every child to learn, belong,
            and thrive.
          </p>
        </div>
      </div>

      {/* 🔹 Main Content Cards */}
      <section className="max-w-6xl mx-auto py-16 px-6 space-y-10">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white shadow-lg rounded-2xl p-8 border-l-4 border-green-700"
          >
            <h2 className="text-2xl font-semibold text-green-700 mb-4">
              {section.title}
            </h2>
            <p className="whitespace-pre-line text-gray-700 leading-relaxed">
              {section.content}
            </p>
          </motion.div>
        ))}
      </section>

      {/* 🔹 Scroll to Top */}
      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-800 transition duration-300 z-50"
        >
          <ArrowUp size={24} />
        </button>
      )}

      <Footer />
    </div>
    </div>
  );
}
