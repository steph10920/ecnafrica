import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import { ArrowUp } from "lucide-react";
import { Helmet } from "react-helmet";

import Slide1 from "../assets/nafasi1.jpg";
import Slide2 from "../assets/nafasi2.jpg";
import Slide3 from "../assets/nafasi3.jpg";

import SectionImage1 from "../assets/nafasi_section1.jpg";
import SectionImage2 from "../assets/nafasi_section2.jpg";
import SectionImage3 from "../assets/nafasi_section3.jpg";
import SectionImage4 from "../assets/nafasi_section4.jpg";
import SectionImage5 from "../assets/nafasi_section5.jpg";
import SectionImage6 from "../assets/nafasi_section6.jpg";
import SectionImage7 from "../assets/nafasi_section7.jpg";
import SectionImage8 from "../assets/nafasi_section8.jpg";

/* ------------------------------------------------------------------ */
/*  Shared design tokens — kept identical to the rest of the site.     */
/* ------------------------------------------------------------------ */

const THEME_VARS = {
  "--ink": "#1B2A22",
  "--paper": "#F1EDD9",
  "--chalk": "#1F3A2E",
  "--clay": "#B8462F",
  "--gold": "#E3A73B",
  "--sky": "#3E7C8C",
  "--font-display": "'Fraunces', ui-serif, Georgia, serif",
  "--font-body": "'Work Sans', ui-sans-serif, system-ui, sans-serif",
};

const GRAIN_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'>
      <filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter>
      <rect width='100%' height='100%' filter='url(#n)'/>
    </svg>`
  );

function Grain({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay ${className}`}
      style={{ backgroundImage: `url("${GRAIN_SVG}")` }}
    />
  );
}

function ChalkUnderline({ className = "" }) {
  return (
    <svg viewBox="0 0 200 18" preserveAspectRatio="none" aria-hidden="true" className={`w-full h-[0.5em] ${className}`}>
      <path
        d="M2 13 C 40 4, 80 17, 118 7 S 178 3, 198 11"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TapeCorner() {
  return (
    <span
      aria-hidden="true"
      className="absolute -top-3 left-1/2 -translate-x-1/2 -rotate-2 h-6 w-16 bg-[var(--gold)]/70 shadow-sm"
      style={{ clipPath: "polygon(4% 0, 96% 0, 100% 100%, 0% 100%)" }}
    />
  );
}

const ACCENTS = [
  "var(--clay)",
  "var(--sky)",
  "var(--gold)",
  "var(--chalk)",
  "var(--clay)",
  "var(--sky)",
  "var(--gold)",
  "var(--chalk)",
];

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

export default function NafasiProgramme() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

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

  return (
    <div
      className="flex flex-col min-h-screen motion-reduce:[&_*]:!transition-none motion-reduce:[&_*]:!animate-none"
      style={{ ...THEME_VARS, fontFamily: "var(--font-body)", color: "var(--ink)" }}
    >
      <Helmet>
        <title>Elimu Community Network | Nafasi Programme</title>
        <meta
          name="description"
          content="Learn about Elimu Community Network (ECN Africa) Nafasi Programme and how we empower street-connected children and youth through education, sports, and vocational training."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,900&family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* Hero Section */}
      <header className="relative w-full overflow-hidden bg-[var(--chalk)] pt-24 pb-16 md:pt-32 md:pb-24">
        <Grain />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-[repeating-linear-gradient(90deg,var(--gold)_0,var(--gold)_10px,transparent_10px,transparent_20px)] opacity-40"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            key={`text-${currentIndex}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[var(--paper)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {slides[currentIndex].title}
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl max-w-lg text-[var(--paper)]/80 leading-relaxed">
              {slides[currentIndex].desc}
            </p>
          </motion.div>

          {/* Photo — taped field photograph, matching the rest of the site */}
          <div className="relative flex justify-center md:justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, rotate: -8, y: 12 }}
                animate={{ opacity: 1, rotate: -3, y: 0 }}
                exit={{ opacity: 0, rotate: 4 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative bg-[var(--paper)] p-3 pb-9 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.55)] w-72 sm:w-80"
              >
                <TapeCorner />
                <img
                  src={slides[currentIndex].img}
                  alt={slides[currentIndex].title}
                  className="h-56 sm:h-64 w-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>

            <button
              onClick={() => setCurrentIndex((i) => (i === 0 ? slides.length - 1 : i - 1))}
              aria-label="Previous slide"
              className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 bg-[var(--paper)] text-[var(--chalk)] w-9 h-9 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
            >
              ❮
            </button>
            <button
              onClick={() => setCurrentIndex((i) => (i === slides.length - 1 ? 0 : i + 1))}
              aria-label="Next slide"
              className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 bg-[var(--paper)] text-[var(--chalk)] w-9 h-9 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
            >
              ❯
            </button>
          </div>
        </div>

        <div className="relative z-10 mt-10 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === currentIndex ? "w-6 bg-[var(--gold)]" : "w-2.5 bg-[var(--paper)]/30"
              }`}
            />
          ))}
        </div>
      </header>

      {/* Sections */}
      <section className="max-w-6xl mx-auto py-16 px-6 space-y-16 bg-[var(--paper)]">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center md:gap-10 ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 w-full mb-6 md:mb-0 flex justify-center">
              <div
                className="relative bg-white p-3 pb-8 shadow-[0_15px_35px_-12px_rgba(0,0,0,0.4)] w-full max-w-md"
                style={{ transform: `rotate(${idx % 2 === 0 ? -1.5 : 1.5}deg)` }}
              >
                <TapeCorner />
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full relative pl-5">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1 bottom-1 w-1"
                style={{ backgroundColor: ACCENTS[idx % ACCENTS.length] }}
              />
              <h2
                className="text-2xl md:text-3xl font-semibold text-[var(--chalk)] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="relative inline-block">
                  {section.title}
                  {idx === 0 && <ChalkUnderline className="absolute left-0 -bottom-1" />}
                </span>
              </h2>
              <p className="whitespace-pre-line text-[var(--ink)]/80 leading-relaxed text-lg">
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
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 bg-[var(--clay)] text-[var(--paper)] p-3 rounded-full shadow-lg hover:brightness-110 transition duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--gold)]"
        >
          <ArrowUp size={24} />
        </button>
      )}

      <Footer />
    </div>
  );
}
