import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import StrategicFocus from "../components/StrategicFocus";
import { ArrowUp } from "lucide-react";
import CountUp from "react-countup";

import educationImg from "../assets/education.jpg";
import childProtectionImg from "../assets/child-protection.jpg";
import communityImg from "../assets/community.png";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import slide1 from "../assets/education.jpg";
import slide2 from "../assets/child-protection.jpg";
import slide3 from "../assets/women_empowerment.jpg";
import slide4 from "../assets/img1.jpg";
import slide5 from "../assets/slide1.jpg";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const slides = [
    {
      img: slide1,
      title: "Empowering Education",
      desc: "Building resilient futures through learning and creativity.",
    },
    {
      img: slide2,
      title: "Child Protection",
      desc: "Every child deserves safety, love, and opportunity.",
    },
    {
      img: slide3,
      title: "Community Development",
      desc: "Empower. Engage. Transform communities sustainably.",
    },
    {
      img: slide4,
      title: "Sustainable Innovation",
      desc: "Driving change through education and collaboration.",
    },
    {
      img: slide5,
      title: "Promoting Sports",
      desc: "Driving change through education and collaboration.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const toggleVisibility = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* 🔹 HERO SECTION */}
      <section className="relative w-full h-[100vh] sm:h-[100vh] md:h-[100vh] overflow-hidden">
        {slides.map((slide, i) => (
          <motion.img
            key={i}
            src={slide.img}
            alt={`Slide ${i + 1}`}
            loading="eager"
            decoding="async"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === currentIndex ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 [image-rendering:crisp-edges] sm:[image-rendering:high-quality]"

          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 backdrop-blur-[1px]" />

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-3 sm:mb-5 drop-shadow-2xl leading-snug tracking-tight">
            {slides[currentIndex].title}
          </h1>
          <p className="text-base sm:text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed text-gray-100">
            {slides[currentIndex].desc}
          </p>
          <a
            href="/programs"
            className="bg-white/90 text-green-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all duration-300 backdrop-blur-md"
          >
            Explore Our Programs
          </a>
        </motion.div>

        {/* Navigation arrows */}
        <button
          onClick={() =>
            setCurrentIndex((i) => (i === 0 ? slides.length - 1 : i - 1))
          }
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-green-700 rounded-full p-2 sm:p-3 shadow-md hover:scale-110 transition"
        >
          ❮
        </button>
        <button
          onClick={() =>
            setCurrentIndex((i) => (i === slides.length - 1 ? 0 : i + 1))
          }
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-green-700 rounded-full p-2 sm:p-3 shadow-md hover:scale-110 transition"
        >
          ❯
        </button>

        {/* Slide dots */}
        <div className="absolute bottom-6 w-full flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentIndex ? "bg-white scale-125" : "bg-gray-400/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* 🔹 ABOUT + IMPACT + PROGRAMS */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-20 space-y-2">
        {/* ABOUT SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-10 p-8 sm:p-12 border border-green-100"
        >
          <div className="space-y-5">
            {[img1, img2].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-2xl group">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  src={img}
                  alt={`About ECN image ${i + 1}`}
                  className="w-full h-60 sm:h-72 object-cover transition duration-700"
                />
              </div>
            ))}
          </div>

          <div className="space-y-2 text-gray-700">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-green-700">
              Who We Are
            </h2>
            <p>
              Elimu Community Network (ECN) is a non-governmental learning organization founded 
              in Kenya in 2012. We exist to redefine education not merely as classroom learning, 
              but as a living, dynamic force for emancipation, innovation, and community resilience. 
              We believe that education is not just a pathway out of poverty but a foundation of 
              , dignity, and transformation.
            </p>
            <p className="text-gray-800 font-semibold">
              Our name, Elimu, means Education in Swahili which is the single word that defines our purpose:
            </p>
            <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-600">
              “To use education as a strategic tool for the emancipation of
              children, youth, and women, enabling them to lead fulfilling and
              productive lives.”
            </blockquote>
            
            <p>
              At ECN, we believe that education must be relevant, contextual, and 
              transformative by being rooted in the realities of our people and responsive 
              to the changing needs of society. We champion education that not only informs 
              but transforms; that not only prepares individuals for work but empowers them 
              to create work and solutions that uplift communities.
            </p>
           
            <p className="text-gray-800 font-semibold">
              “Education is the most powerful weapon which you can use to change
              the world.” — Nelson Mandela
            </p>
            <a
              href="/about"
              className="inline-block bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition-all font-semibold shadow-md hover:shadow-xl"
            >
              Learn More About Us
            </a>
          </div>
        </motion.section>
        {/* 🔹 EDUCATIONAL FUNDAMENTALS SECTION */}
        <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-green-50 via-white to-green-100 rounded-3xl shadow-2xl border border-green-100 p-10 sm:p-14 space-y-10"
        >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-700 text-center mb-8">
          Our Educational Fundamentals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white/90 rounded-2xl shadow-lg p-8 border border-green-100 hover:shadow-2xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold text-green-700 mb-4">
              Education that is Culturally Grounded and Life-Sustaining
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We believe that education should equip individuals to meet their basic
              human needs—food security, clothing, housing, and health—using knowledge
              that is locally meaningful and culturally appropriate. Our programs
              integrate practical learning, indigenous knowledge, and community-based
              innovations that help families not only survive but thrive.
            </p>
          </div>

          <div className="bg-white/90 rounded-2xl shadow-lg p-8 border border-green-100 hover:shadow-2xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold text-green-700 mb-4">
              Education that Catalyzes Innovation and Economic Participation
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We promote education that connects learning with livelihood. By linking
              entrepreneurship, research, and technology, ECN transforms knowledge
              into innovation that drives local economic growth. Our education model
              nurtures creativity and curiosity by cultivating problem solvers and
              innovators who shape Africa’s future.
            </p>
          </div>

          <div className="bg-white/90 rounded-2xl shadow-lg p-8 border border-green-100 hover:shadow-2xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-bold text-green-700 mb-4">
              Education that Cultivates Visionary and Ethical Leadership
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We aspire for sustainable development that begins with values-based
              leadership. Our model nurtures leaders who can mobilize resources,
              champion justice, and promote environmental conservation. Through
              mentorship, civic learning, and life-skills education, ECN cultivates
              visionary citizens who are socially responsible and committed to the
              common good.
            </p>
          </div>
        </div>
        </motion.section>

        {/* 🔹 PROGRAMS SECTION */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden py-20 rounded-3xl shadow-2xl"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-emerald-900/70 backdrop-blur-sm" />

          <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 drop-shadow-lg">
              Our Programs
            </h2>
            <p className="max-w-3xl mx-auto text-lg mb-12 text-gray-200">
              We focus on sustainable programs that uplift children, families,
              and communities through education, empowerment, and inclusion.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "Education for All",
                  description:
                    "Providing access to quality education for street and needy children across Kenya.",
                  image: educationImg,
                  link: "/programs#eduwomen",
                },
                {
                  title: "Child Protection",
                  description:
                    "Rescuing and reintegrating street-connected children into families and communities.",
                  image: childProtectionImg,
                  link: "/programs#child-protection",
                },
                {
                  title: "Community Development",
                  description:
                    "Empowering families through training, food security, and environmental conservation.",
                  image: communityImg,
                  link: "/programs#community-development",
                },
              ].map((program, i) => (
                <Link
                  to={program.link}
                  key={i}
                  className="relative overflow-hidden rounded-3xl shadow-lg group border border-white/10 backdrop-blur-md"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${program.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500" />
                  <div className="relative z-10 p-8 flex flex-col justify-end h-64">
                    <h3 className="text-2xl font-semibold mb-3">
                      {program.title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {program.description}
                    </p>
                    <span className="mt-3 inline-block text-green-300 font-semibold underline underline-offset-4 hover:text-white transition">
                      View Program →
                    </span>
                  </div>
                  <div className="absolute -bottom-10 left-0 w-40 h-40 bg-emerald-400/20 blur-2xl rounded-full group-hover:opacity-100 opacity-0 transition-opacity duration-700" />
                </Link>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ✅ STRATEGIC FOCUS */}
        <StrategicFocus />
         {/* 🔹 IMPACT COUNTERS SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl shadow-2xl"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1581092795360-fd1ca4e0c95b?auto=format&fit=crop&w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-green-900/70 backdrop-blur-sm" />

          <div className="relative text-center text-white py-20 px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 drop-shadow-lg">
              Our Impact
            </h2>
            <p className="max-w-3xl mx-auto text-lg mb-12 text-gray-200">
              Every number represents a life changed, a dream nurtured, and a
              community strengthened through the power of education and
              compassion.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {[
                { label: "Children Reached", value: 1500 },
                { label: "Families Empowered", value: 300 },
                { label: "Schools Partnered", value: 25 },
                { label: "Volunteers Engaged", value: 120 },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl backdrop-blur-md"
                >
                  <h3 className="text-5xl font-extrabold text-white drop-shadow-md">
                    <CountUp end={stat.value} duration={5} />+
                  </h3>
                  <p className="text-gray-200 mt-3 font-medium tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      {/* Scroll-to-Top */}
      {showScrollTop && (
        <motion.button
          onClick={handleScrollTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 right-6 bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-800 transition"
        >
          <ArrowUp size={22} />
        </motion.button>
      )}

      <Footer />
    </div>
  );
}
