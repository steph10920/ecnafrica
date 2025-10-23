import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1522204501929-8b5d5d5f38b4?auto=format&fit=crop&w=1500&q=80",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* 🔹 IMAGE SLIDER */}
      <section className="relative w-full h-[85vh] mt-[72px] overflow-hidden">
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-black/30"></div>

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

        <div className="absolute bottom-5 w-full flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            ECN – Elimu Community Network
          </h2>
          <p className="text-lg md:text-2xl mb-6">
            African Education Inspiring Opportunities & Understanding
          </p>
          <Link
            to="/about"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* 🔹 WELCOME SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          Welcome to ECN Africa
        </h2>
        <p className="text-gray-700 leading-relaxed">
          ECN Africa is dedicated to transforming lives of vulnerable and street children
          by providing education, mentorship, and holistic support. Together, we can
          create a community where every child has the opportunity to thrive.
        </p>
      </section>

      <Footer />
    </div>
  );
}
