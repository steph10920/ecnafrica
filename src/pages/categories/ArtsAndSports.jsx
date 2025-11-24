import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer.jsx";
import CountUp from "react-countup";
import { ArrowUp } from "lucide-react";

// --- Assets (reuse your existing assets) ---
import footballImg1 from "../../assets/football1.jpg";
import footballImg2 from "../../assets/football2.jpg";
import footballImg3 from "../../assets/sports1.png";
import footballImg4 from "../../assets/slide1.jpg";
import footballImg5 from "../../assets/footballImg.jpg";
import footballVideo from "../../assets/football.mp4";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/community.png";
import slide4 from "../../assets/slide4.jpg";

export default function ArtsAndSports() {
  const slides = [slide1, slide2, slide3, slide4];
  const media = [footballImg1, footballImg2, footballImg3, footballImg4];
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [showTopBtn, setShowTopBtn] = React.useState(false);

  // Auto-slide
  React.useEffect(() => {
    const t = setInterval(() => setCurrentIndex((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  // Scroll button visibility
  React.useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionAnim = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* HERO */}
      <header className="relative h-[88vh] md:h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Slides */}
        <div className="absolute inset-0">
          <img
            src={slides[currentIndex]}
            alt={`hero ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-green-700/80 text-white rounded-full px-4 py-1 text-sm md:text-base mb-4"
          >
            ECN SPORTS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg"
          >
            Sports for Growth — Building Leaders On and Off the Field
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-4 text-lg md:text-xl text-gray-100 max-w-3xl mx-auto"
          >
            Using football and community sports to foster discipline, teamwork,
            inclusion, and pathways to education and opportunity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-6 items-center justify-center"
          >
            <Link
              to="/donate"
              className="bg-white text-green-700 font-semibold px-6 py-3 rounded-xl shadow hover:shadow-md transition"
            >
              Donate Now
            </Link>
            <Link
              to="/programs"
              className="bg-transparent border border-white/40 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition"
            >
              Explore Programs
            </Link>
          </motion.div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentIndex ? "bg-white scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </header>

      {/* INTRO + HIGHLIGHTS */}
      <main>
        <motion.section
          className="max-w-6xl mx-auto py-14 px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={sectionAnim}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-6">
            Building Champions on and off the Field
          </h2>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
            At Elimu Community Network (ECN), we believe that street and village sports are more 
            than games. They are a classroom without walls, a bridge from vulnerability to self-discovery.
            Through sports-based learning, we use football, athletics, and creative games as transformative 
            tools to engage youth, build life skills, promote discipline, and open pathways to education and 
            sustainable livelihoods.
          </p>

          {/* QUICK HIGHLIGHTS */}
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <h3 className="text-xl font-semibold text-green-700">Football Clinics</h3>
              <p className="text-gray-600 mt-2">Weekly skill development for ages 8 & above.</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <h3 className="text-xl font-semibold text-green-700">Girls in Sports</h3>
              <p className="text-gray-600 mt-2">Leadership and safe spaces for girls.</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6 text-center">
              <h3 className="text-xl font-semibold text-green-700">Sreet Leagues</h3>
              <p className="text-gray-600 mt-2">Structured inter-street competitions and talent pathways.</p>
            </div>
          </div>
        </motion.section>

         {/* KEY ACTIVITIES */}
        <motion.section
          className="bg-white py-14 px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={sectionAnim}
        >
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-green-700 mb-4">Key Activities</h3>
              <ul className="text-lg text-gray-700 space-y-3 list-disc list-inside">
                <li>Formation of Street Sports Clubs.</li>
                <li>Street and village Sports Tournaments and Talent Days</li>
                <li>Peer Coaching and Leadership Development</li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={footballImg5} alt="kids playing football" className="w-full h-72 object-cover" />
            </div>
          </div>
        </motion.section>

        {/* WHY SPORTS MATTER */}
        <motion.section
          className="bg-white py-14 px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={sectionAnim}
        >
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-green-700 mb-4">Achievements</h3>
              <ul className="text-lg text-gray-700 space-y-3 list-disc list-inside">
                <li>Over 70% of participating youth demonstrated improved confidence, teamwork, and 
                  emotional regulation, with many re-engaging in education, training, or family life.</li>
                <li>Street and village sports activities reduced social stigma and strengthened community 
                  bonds, transforming how local residents perceive and support vulnerable youth.</li>
                <li>Through mentorship, talent development, and educational linkages, participating youth 
                  accessed new opportunities — from school re-entry and vocational training to employment 
                  and microenterprise in the sports value chain.</li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={footballImg2} alt="kids playing football" className="w-full h-72 object-cover" />
            </div>
          </div>
        </motion.section>

        {/* MEDIA + VIDEO */}
        <motion.section
          className="max-w-6xl mx-auto py-14 px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={sectionAnim}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-8">Football in Action</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="grid grid-cols-2 gap-4">
              {media.slice(0, 4).map((m, i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-md">
                  <img src={m} alt={`media ${i + 1}`} className="w-full h-48 object-cover" />
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl bg-black flex items-center justify-center">
              <video
                src={footballVideo}
                controls
                playsInline
                className="w-full h-full max-h-[420px] object-cover"
              />
            </div>
          </div>

          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mt-6">
            Every match is more than a game — it’s a classroom where young people learn
            resilience, teamwork and leadership.
          </p>
        </motion.section>

        {/* IMPACT COUNTERS */}
        <motion.section
          className="bg-green-700 text-white py-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={sectionAnim}
        >
          <div className="max-w-6xl mx-auto text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Impact Through Sports</h3>
            <p className="max-w-3xl mx-auto text-gray-100">Our programs reach communities across Kenya — building confidence and hope through sport.</p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <div>
              <CountUp end={800} duration={3} className="text-5xl md:text-6xl font-bold" />
              <p className="mt-2 text-lg md:text-xl">Children Trained</p>
            </div>

            <div>
              <CountUp end={150} duration={3} className="text-5xl md:text-6xl font-bold" />
              <p className="mt-2 text-lg md:text-xl">Football Matches Played</p>
            </div>

            <div>
              <CountUp end={60} duration={3} className="text-5xl md:text-6xl font-bold" />
              <p className="mt-2 text-lg md:text-xl">Communities Engaged</p>
            </div>
          </div>
        </motion.section>

        {/* TESTIMONIALS */}
        <motion.section
          className="py-14 px-6 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={sectionAnim}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-8">What People Say</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <blockquote className="bg-white p-6 rounded-2xl shadow">
              <p className="text-gray-700">“Sports keeps our youth active and away from risky behavior.”</p>
              <cite className="block mt-4 font-semibold text-green-700">— Parent, Kisumu</cite>
            </blockquote>

            <blockquote className="bg-white p-6 rounded-2xl shadow">
              <p className="text-gray-700">“The girls’ program changed how our community sees sport for young women — now more parents support their daughters to play.”</p>
              <cite className="block mt-4 font-semibold text-green-700">— Coach, Nairobi</cite>
            </blockquote>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="py-16 bg-green-700 text-white text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={sectionAnim}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Support Our Sports Programs</h3>
          <p className="text-lg max-w-2xl mx-auto mb-6">Help us reach more young people through sports, mentorship and education.</p>

          <div className="flex items-center justify-center gap-4">
            <Link to="/donate" className="bg-white text-green-700 font-semibold px-6 py-3 rounded-xl shadow hover:shadow-md transition">
              Donate Now
            </Link>

            <Link to="/volunteer" className="bg-transparent border border-white/60 px-6 py-3 rounded-xl hover:bg-white/10 transition">
              Volunteer
            </Link>
          </div>
        </motion.section>
      </main>

      {/* SCROLL TO TOP */}
      {showTopBtn && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-white text-green-700 p-3 rounded-full shadow-lg hover:scale-105 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      <Footer />
    </div>
  );
}
