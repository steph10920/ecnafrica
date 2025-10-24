import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔹 Online background images
  const slides = [
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1500&q=80",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* 🔹 HERO SLIDER SECTION */}
      <section className="relative w-full h-[90vh] mt-[72px] overflow-hidden">
        {slides.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Overlay */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Elimu Community Network (ECN)
          </h1>
          <p className="text-lg md:text-2xl mb-6 max-w-3xl">
            African Education Inspiring Opportunities & Understanding
          </p>
          <a
            href="/programs"
            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-gray-100 transition-transform"
          >
            Explore Our Programs
          </a>
        </motion.div>

        {/* Navigation Arrows */}
        <button
          onClick={() =>
            setCurrentIndex((i) => (i === 0 ? slides.length - 1 : i - 1))
          }
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white/60 hover:bg-white text-blue-700 rounded-full p-2"
        >
          ❮
        </button>
        <button
          onClick={() =>
            setCurrentIndex((i) => (i === slides.length - 1 ? 0 : i + 1))
          }
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white/60 hover:bg-white text-blue-700 rounded-full p-2"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 w-full flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentIndex ? "bg-white scale-110" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* 🔹 ABOUT PREVIEW */}
      <main className="max-w-6xl mx-auto px-6 py-20 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            Who We Are
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed text-center">
            ECN is a learning organization that supports vulnerable children and their families through education, advocacy, and community development.
          </p>
          <div className="flex justify-center">
            <a
              href="/about"
              className="bg-blue-700 text-white px-5 py-3 rounded-full hover:bg-blue-800 transition-colors"
            >
              Learn More About Us
            </a>
          </div>
        </motion.div>

        {/* 🔹 PROGRAMS PREVIEW */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Education",
              desc: "Innovative learning opportunities for all children.",
              img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=60",
            },
            {
              title: "Child Protection",
              desc: "Rescuing and reintegrating street-connected children into families.",
              img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60",
            },
            {
              title: "Community Development",
              desc: "Empowering families through health, food security, and conservation.",
              img: "https://images.unsplash.com/photo-1497339100210-9e87df79c218?auto=format&fit=crop&w=800&q=60",
            },
          ].map((program, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={program.img}
                alt={program.title}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-700 mb-3">{program.desc}</p>
                <a
                  href="/programs"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
