{/*import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import donor1 from "../assets/donor1.jpg";
import donor2 from "../assets/donor1.jpg";
import donor3 from "../assets/donor1.jpg";

export default function Donate() {
  const testimonials = [
    {
      id: 1,
      name: "Amina K.",
      quote:
        "Supporting ECN has been one of the most rewarding experiences. I know my contribution is making a real difference in children’s lives.",
      avatar: donor1,
    },
    {
      id: 2,
      name: "Joseph M.",
      quote:
        "ECN's programs are impactful and transparent. Donating gives me peace of mind knowing the community truly benefits.",
      avatar: donor2,
    },
    {
      id: 3,
      name: "Faith W.",
      quote:
        "I love seeing updates from ECN. My small donations add up to big change for learners and teachers in Kenya.",
      avatar: donor3,
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 relative">
      {/* Floating Donate Button *
      <button
        className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 z-50 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Donate Now
      </button>

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-200 p-10">
        {/* Header *
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-green-700 text-center mb-4"
        >
          Support ECN
        </motion.h1>
        <p className="text-center text-gray-600 mb-10">
          Donate via <strong>M-Pesa Paybill</strong> to empower children, youth, and communities.
        </p>

        {/* Paybill Instructions *
        <section className="mt-6 bg-green-50 p-8 rounded-2xl shadow-inner border border-green-100 mb-12">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            How to Donate via Paybill
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Open your M-Pesa menu and select <strong>Paybill</strong>.</li>
            <li>Enter Paybill Number: <strong>123456</strong>.</li>
            <li>Enter your Account Number (phone number or identifier).</li>
            <li>Enter the donation amount.</li>
            <li>Confirm the transaction and keep the receipt.</li>
          </ol>
        </section>

        {/* Testimonials Carousel *
        <section className="relative">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
            What Our Donors Say
          </h2>

          <AnimatePresence>
            <motion.div
              key={testimonials[current].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center bg-white border border-green-100 p-6 rounded-2xl shadow-sm"
            >
              <img
                src={testimonials[current].avatar}
                alt={testimonials[current].name}
                className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full border-2 border-green-200 mb-4"
              />
              <p className="text-gray-700 italic mb-2 px-4 md:px-20">
                "{testimonials[current].quote}"
              </p>
              <p className="font-semibold text-green-700">{testimonials[current].name}</p>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls *
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="bg-green-100 text-green-700 px-4 py-2 rounded-full hover:bg-green-200 transition"
            >
              ❮ Prev
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-green-100 text-green-700 px-4 py-2 rounded-full hover:bg-green-200 transition"
            >
              Next ❯
            </button>
          </div>

          {/* Dots Indicators *
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  i === current ? "bg-green-700 scale-125" : "bg-green-200"
                }`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
*/}
import { motion } from "framer-motion";

export default function Donate() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-200 p-12 text-center">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4"
        >
          Donate to ECN Africa
        </motion.h1>

        {/* Coming Soon Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 text-lg leading-relaxed mb-8"
        >
          Our donation system is currently being updated to give you a smoother
          and more secure contribution experience.  
          <br /><br />
          <span className="text-green-700 font-semibold">
            New donation options coming soon!
          </span>
        </motion.p>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-4"
        >
          <span className="px-6 py-3 bg-green-600 text-white rounded-full font-medium shadow-lg">
            Coming Soon
          </span>
        </motion.div>

      </div>
    </section>
    
  );
  
}

