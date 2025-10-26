import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import educationImg from "../assets/education.jpg";
import childProtectionImg from "../assets/child-protection.jpg";
import communityImg from "../assets/community.jpg";
import StrategicFocus from "../components/StrategicFocus";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import slide1 from "../assets/slide1.jpeg";
import slide2 from "../assets/slide2.jpeg";
import slide3 from "../assets/slide3.jpeg";
import slide4 from "../assets/slide4.jpeg";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [slide1, slide2, slide3, slide4];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* 🔹 HERO SECTION */}
      <section className="relative w-full h-[65vh] sm:h-[75vh] md:h-[90vh] overflow-hidden">
        {slides.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            loading="eager"
            decoding="async"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === currentIndex ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className={`absolute inset-0 w-full h-full object-contain sm:object-cover object-center transition-opacity duration-1000`}
            style={{
              backfaceVisibility: "hidden",
              willChange: "transform, opacity",
            }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 backdrop-blur-[1px]" />

        {/* Text content */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-3 sm:mb-5 drop-shadow-2xl leading-snug tracking-tight">
            Welcome to Elimu Community Network (ECN)
          </h1>
          <p className="text-base sm:text-xl md:text-2xl mb-8 max-w-3xl leading-relaxed text-gray-100">
            <strong>Education for Transformation. Innovation for Sustainable Futures.</strong>
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
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-green-700 rounded-full p-2 sm:p-3 shadow-md transition"
        >
          ❮
        </button>
        <button
          onClick={() =>
            setCurrentIndex((i) => (i === slides.length - 1 ? 0 : i + 1))
          }
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-white text-green-700 rounded-full p-2 sm:p-3 shadow-md transition"
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

      {/* 🔹 ABOUT SECTION */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-20 space-y-24">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-10 p-8 sm:p-12 border border-green-100"
        >
          {/* Left images */}
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

          {/* Right content */}
          <div className="space-y-5 text-gray-700">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-green-700">
              Who We Are
            </h2>
            <p>
              <strong>Elimu Community Network (ECN)</strong> is a{" "}
              <strong>non-governmental learning organization</strong> founded in
              Kenya in 2012. We exist to redefine education not merely as
              classroom learning, but as{" "}
              <strong>
                a living, dynamic force for emancipation, innovation, and
                community resilience
              </strong>
              .
            </p>
            <p>
              Our name, <strong>Elimu</strong>, means <strong>Education</strong>{" "}
              in Swahili, defining our purpose:
            </p>
            <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-600">
              “To use education as a strategic tool for the emancipation of
              children, youth, and women, enabling them to lead fulfilling and
              productive lives.”
            </blockquote>
            <p>
              We champion education that not only informs but transforms — that
              not only prepares individuals for work but empowers them to create
              work and solutions that uplift communities.
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

        {/* 🔹 PROGRAMS SECTION */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {[ 
            { title: "Education", desc: "Innovative learning opportunities for all children.", img: educationImg },
            { title: "Child Protection", desc: "Rescuing and reintegrating street-connected children into families.", img: childProtectionImg },
            { title: "Community Development", desc: "Empowering families through health, food security, and conservation.", img: communityImg },
          ].map((program, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-green-100 transition-all"
            >
              <img src={program.img} alt={program.title} className="w-full h-52 object-cover" />
              <div className="p-6 text-center space-y-3">
                <h3 className="text-xl font-semibold text-green-700">{program.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base">{program.desc}</p>
                <a href="/programs" className="text-green-600 font-semibold hover:underline">
                  Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* ✅ STRATEGIC FOCUS */}
        <StrategicFocus />
      </main>

      <Footer />
    </div>
  );
}
