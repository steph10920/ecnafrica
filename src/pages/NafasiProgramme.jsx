import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { ArrowUp } from "lucide-react";
import { Helmet } from "react-helmet";

// Slide images
import Slide1 from "../assets/nafasi1.jpg";
import Slide2 from "../assets/nafasi2.jpg";
import Slide3 from "../assets/nafasi3.jpg";

// Section images
import SectionImage1 from "../assets/nafasi_section1.jpg";
import SectionImage2 from "../assets/nafasi_section2.jpg";
import SectionImage3 from "../assets/nafasi_section3.jpg";
import SectionImage4 from "../assets/nafasi_section4.jpg";
import SectionImage5 from "../assets/nafasi_section5.jpg";
import SectionImage6 from "../assets/nafasi_section6.jpg";
import SectionImage7 from "../assets/nafasi_section7.jpg";
import SectionImage8 from "../assets/nafasi_section8.jpg";

export default function NafasiProgramme() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Automatic slide change every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slides = [
    {
      img: Slide1,
      title: "Creating Spaces to Learn and Thrive",
      desc: "The Nafasi Learning Programme empowers street-connected children with education, mentorship, and opportunities to reclaim their future.",
    },
    {
      img: Slide2,
      title: "Empowering Youth Through Sports",
      desc: "Structured sports, life skills, and mentorship transform vulnerable youth into confident and capable leaders.",
    },
    {
      img: Slide3,
      title: "Pathways from the Streets to Opportunity",
      desc: "From mobile schools to vocational training, Nafasi creates pathways for youth to gain independence and build sustainable livelihoods.",
    },
  ];

  const sections = [
    {
      title: "The Nafasi Learning Programme",
      content: `The Nafasi Learning Programme supports street-connected children and youth to reclaim their right to education, protection, and dignity. ‘Nafasi’ which means space or opportunity in Swahili, reflects our belief that every young person deserves a chance to learn and to belong.
Through mobile street schools, creative arts, and sports for transformation, ECN builds pathways from the street to structured learning environments. The programme integrates psychosocial care, family reintegration, and vocational training to empower youth toward independence.
Each child’s story begins in struggle but evolves through education from survival to learning, from learning to leadership. One example is a group of former street boys in Nairobi who, after completing ECN’s vocational program, now operate a community transport service using trollies that supports their families and funds younger children’s school fees.
Through the Nafasi Programme, ECN journeys with street-connected children and youth by meeting them where they are, listening to their stories, and walking beside them as they discover spaces and opportunities to survive, learn, and thrive.
“Every child has a right to be safe, to learn, and to dream.”`,
      image: SectionImage1,
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
      image: SectionImage2,
    },
    {
      title: "Programme Objectives",
      content: `1. To strengthen social protection systems for children and youth living on the streets/ vulnerability by safeguarding their rights and wellbeing.
2. To increase sustainable reintegration through family-based care and access to education, skills training, and livelihood opportunities.`,
      image: SectionImage3,
    },
    {
      title: "Key Activities",
      content: `• Street Work: Identification and assessment of street-connected children and youth, providing immediate assistance and pathways to reintegration.
• Street Teams and Safe Learning Spaces: Formation of creative and inclusive street teams engaged in arts, sports, and mentorship as tools for behaviour transformation and leadership development.
• Mobile School — Learning Without Walls: Establishment of a mobile street school as a safe, open, and flexible learning space where children and youth explore their talents, strengthen their self-esteem, and discover the joy of learning.
• Toolkits for Self-Reliance: Provision of work trollies and tool kits that help youth transition from street life to self-employment and community contribution.
“When we educate a child, we do not just change a life — we change a generation.”`,
      image: SectionImage4,
    },
    {
      title: "Mobile Street School",
      content: `Nafasi is founded on the belief that education liberates potential. It helps children and youth rediscover their identity, rebuild confidence, and reimagine their place in the world.
Our “mobile street school” is not confined by walls because it travels where the children are, creating learning experiences rooted in real life and inspired by their strengths, talents, and dreams.
Through mentorship, creativity, and structured support, each child learns that their circumstances do not define their destiny.
“The child who is not embraced by the village will burn it down to feel its warmth.”— African Proverb
At Nafasi, we choose to embrace, to teach, to nurture, and to walk with every child until they can stand on their own.`,
      image: SectionImage5,
    },
    {
      title: "Join the Journey",
      content: `Every week, ECN’s Nafasi team takes to the streets of Nairobi and surrounding communities not only to rescue but to reimagine education as a tool for healing and empowerment. This is not charity; it is partnership in transformation.
“Education is the key to unlock the golden door of freedom.”— George Washington Carver
Call to Action:
Join us in this beautiful journey of discovering and expanding learning spaces where every child finds their Nafasi; their space, their opportunity, their future.`,
      image: SectionImage6,
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
      image: SectionImage7,
    },
    {
      title: "Fishers of Men Initiative",
      content: `Initiative for the empowerment of youth for their participation in the blue economy.`,
      image: SectionImage8,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Helmet>
        <title>Elimu Community Network | Nafasi Programme</title>
        <meta
          name="description"
          content="Learn about Elimu Community Network (ECN Africa) Nafasi Programme and how we empower street-connected children and youth through education, sports, and vocational training."
        />
      </Helmet>

      {/* Hero Section */}
      <header className="relative w-full h-[85vh] md:h-[80vh] lg:h-[75vh] overflow-hidden">
        {/* Background slides */}
        <div className="absolute inset-0">
          {slides.map((s, i) => (
            <motion.img
              key={i}
              src={s.img}
              alt={i === currentIndex ? s.title : ""}
              aria-hidden={i === currentIndex ? "false" : "true"}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{
                opacity: i === currentIndex ? 1 : 0,
                scale: i === currentIndex ? 1 : 1.06,
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{
                filter: i === currentIndex ? "brightness(0.7)" : "brightness(0.65)",
              }}
              loading="lazy"
            />
          ))}
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/10 to-black/45"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-left w-full md:w-3/4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
              {slides[currentIndex].title}
            </h1>

            <p className="mt-4 text-base sm:text-lg md:text-xl max-w-3xl opacity-90">
              {slides[currentIndex].desc}
            </p>

            </motion.div>
        </div>

        {/* Slide controls */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 md:left-8">
          <button
            onClick={() =>
              setCurrentIndex((i) => (i === 0 ? slides.length - 1 : i - 1))
            }
            aria-label="Previous slide"
            className="bg-white/90 text-green-800 p-2 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            ❮
          </button>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 md:right-8">
          <button
            onClick={() =>
              setCurrentIndex((i) => (i === slides.length - 1 ? 0 : i + 1))
            }
            aria-label="Next slide"
            className="bg-white/90 text-green-800 p-2 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            ❯
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-transform ${
                i === currentIndex ? "bg-white scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </header>

      {/* Sections */}
      <section className="max-w-6xl mx-auto py-16 px-6 space-y-16">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center md:space-x-8 ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 w-full mb-6 md:mb-0">
              <img
                src={section.image}
                alt={section.title}
                className="rounded-2xl w-full h-full object-cover shadow-lg"
              />
            </div>
            <div className="md:w-1/2 w-full">
              <h2 className="text-2xl md:text-3xl font-semibold text-green-700 mb-4">
                {section.title}
              </h2>
              <p className="whitespace-pre-line text-gray-700 leading-relaxed text-lg">
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Scroll to Top */}
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
  );
}
