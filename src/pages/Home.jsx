import { useState, useEffect } from "react";

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // 🔹 Carousel images
  const slides = [
    "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1522204501929-8b5d5d5f38b4?auto=format&fit=crop&w=1500&q=80",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔹 Auto slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 🔹 NAVBAR */}
      <header className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo / Title */}
          <h1 className="text-2xl font-bold text-blue-700">ECN AFRICA</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#">About Us</a>
            <a href="#">Programs</a>
            <a href="#">Gallery</a>
            <a href="#">Blog/News</a>
            <a href="#">Contact Us</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-l-md px-3 py-1 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-3 py-1 rounded-r-md hover:bg-blue-700">
              Search
            </button>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-blue-700 text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="md:hidden bg-white shadow-md flex flex-col space-y-2 px-6 py-4">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#">About Us</a>
            <a href="#">Programs</a>
            <a href="#">Gallery</a>
            <a href="#">Blog/News</a>
            <a href="#">Contact Us</a>
          </nav>
        )}
      </header>

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

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Buttons */}
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
              className={`w-3 h-3 rounded-full ${
                i === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Empowering Children for a Better Future
          </h2>
          <p className="text-lg md:text-2xl mb-6">
            Supporting street and needy children through education and care
          </p>
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* 🔹 WELCOME SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Welcome to ECN Africa</h2>
        <p className="text-gray-700 leading-relaxed">
          ECN Africa is dedicated to transforming lives of vulnerable and street children
          by providing education, mentorship, and holistic support. Together, we can
          create a community where every child has the opportunity to thrive.
        </p>
      </section>

      {/* 🔹 FOOTER */}
      <footer className="bg-blue-900 text-white py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} ECN Africa. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
