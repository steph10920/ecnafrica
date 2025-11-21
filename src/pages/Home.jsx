import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import StrategicFocus from "../components/StrategicFocus";
import { ArrowUp } from "lucide-react";
import CountUp from "react-countup";

import educationImg from "../assets/education.png";
import childProtectionImg from "../assets/child-protection.jpg";
import communityImg from "../assets/community.png";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import slide1 from "../assets/education.png";
import slide2 from "../assets/child-protection.jpg";
import slide3 from "../assets/women_empowerment.jpg";
import slide4 from "../assets/img1.jpg";
import slide5 from "../assets/slide1.jpg";
import greenclass from "../assets/trees4.jpg";


export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const slides = [
    {
      img: slide1,
      title: "Transforming Education Across Africa",
      desc:
        "Empowering learners, teachers and communities with practical skills and opportunities.",
    },
    {
      img: slide2,
      title: "Safe & Inclusive Learning",
      desc:
        "Protecting children, promoting wellbeing, and creating safe learning environments.",
    },
    {
      img: slide3,
      title: "Women & Youth Empowerment",
      desc:
        "Building leadership, entrepreneurship and digital skills for sustainable livelihoods.",
    },
    {
      img: slide4,
      title: "Community-led Solutions",
      desc:
        "Local knowledge + partnership — sustainable change rooted in community strengths.",
    },
    {
      img: slide5,
      title: "Sports & Wellbeing",
      desc:
        "Sport as a tool for life-skills, inclusion and holistic development.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  // Impact numbers — replace with real data as needed
  const impactStats = [
    { label: "Learners Reached", value: 1500 },
    { label: "Teachers Trained", value: 450 },
    { label: "Schools Supported", value: 25 },
    { label: "Volunteers Engaged", value: 120 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* HERO */}
      <header className="relative w-full h-[85vh] md:h-[80vh] lg:h-[75vh] overflow-hidden">
        {/* Background slides (accessible: aria-hidden) */}
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

        {/* Dark overlay for contrast */}
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

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/programs"
                className="inline-flex items-center justify-center bg-white text-green-800 font-semibold px-5 py-3 rounded-full shadow hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Explore ECN Programs"
              >
                Explore Programs
              </Link>

              <a
                href="/donate"
                className="inline-flex items-center justify-center bg-transparent border border-white/70 text-white font-semibold px-5 py-3 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Donate to ECN"
              >
                Donate
              </a>
            </div>

            <div className="mt-6 text-sm text-white/80 max-w-xl">
              <p>
                ECN Education Africa partners with local schools, teachers and
                communities to create inclusive, practical and sustainable learning opportunities.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Slide controls (keyboard accessible) */}
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

      {/* MAIN CONTENT */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">
          {/* About (concise, prominent) */}
          <section
            className="bg-white rounded-3xl shadow-lg p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            aria-labelledby="about-heading"
          >
            <div className="space-y-4">
              <h2 id="about-heading" className="text-2xl md:text-3xl font-extrabold text-green-800">
                Who We Are
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Elimu Community Network (ECN) is an African-led organization founded in Kenya (2012),
                working to expand quality, contextual and inclusive education that empowers learners,
                teachers and communities. Our model blends practical learning, digital skills, and
                community-led solutions to create lasting opportunity.
              </p>

              <blockquote className="border-l-4 border-green-200 pl-4 text-gray-600 italic">
                “Education must be relevant, liberatory and rooted in community realities.”
              </blockquote>

              <div className="flex gap-3 mt-4">
                <Link
                  to="/about"
                  className="inline-block bg-green-700 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-200"
                >
                  Learn More
                </Link>
                <Link
                  to="/contact"
                  className="inline-block border border-green-700 text-green-700 px-5 py-2 rounded-full font-semibold hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-200"
                >
                  Get Involved
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src={img1}
                alt="Learners in a classroom"
                className="w-full h-40 object-cover rounded-2xl shadow-sm"
                loading="lazy"
              />
              <img
                src={img2}
                alt="Community school activity"
                className="w-full h-40 object-cover rounded-2xl shadow-sm"
                loading="lazy"
              />
            </div>
          </section>
{/* Programmes (NEW, MATCHING OFFICIAL PROGRAMS) */}
<section aria-labelledby="programs-heading">
  <div className="text-center mb-8">
    <h3 id="programs-heading" className="text-2xl md:text-3xl font-bold text-green-800">
      Our Programmes
    </h3>
    <p className="max-w-2xl mx-auto text-gray-600 mt-2">
      ECN Education Africa delivers impactful programmes designed to strengthen learning,
      empower youth, and build resilient community-driven education systems across Africa.
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

    {/* Green Classrooms */}
    <article className="rounded-2xl bg-white border p-6 shadow-sm hover:shadow-lg transition">
      <img
        src={greenclass}
        alt="Green Classrooms Programme"
        className="w-full h-36 object-cover rounded-lg mb-4"
        loading="lazy"
      />
      <h4 className="font-semibold text-lg text-green-800">Green Classrooms</h4>
      <p className="mt-2 text-gray-600 text-sm">
        Education for a greener, sustainable future — community-driven learning for climate resilience.
      </p>
      <Link
        to="/programs/green-classrooms"
        className="mt-4 inline-block text-green-700 font-semibold"
      >
        Learn more →
      </Link>
    </article>

    {/* Nafasi Learning Programme */}
    <article className="rounded-2xl bg-white border p-6 shadow-sm hover:shadow-lg transition">
      <img
        src={childProtectionImg}
        alt="Nafasi Learning Programme"
        className="w-full h-36 object-cover rounded-lg mb-4"
        loading="lazy"
      />
      <h4 className="font-semibold text-lg text-green-800">Nafasi Learning Programme</h4>
      <p className="mt-2 text-gray-600 text-sm">
        Creating safe learning spaces, mentoring, digital skills and youth-driven innovation.
      </p>
      <Link
        to="/programs/NafasiProgramme"
        className="mt-4 inline-block text-green-700 font-semibold"
      >
        Learn more →
      </Link>
    </article>

    {/* IMARA Women */}
    <article className="rounded-2xl bg-white border p-6 shadow-sm hover:shadow-lg transition">
      <img
        src={slide3}
        alt="IMARA Women Programme"
        className="w-full h-36 object-cover rounded-lg mb-4"
        loading="lazy"
      />
      <h4 className="font-semibold text-lg text-green-800">IMARA Women</h4>
      <p className="mt-2 text-gray-600 text-sm">
        Strengthening women’s leadership, economic agency, and innovation through knowledge.
      </p>
      <Link
        to="/programs/imara-women"
        className="mt-4 inline-block text-green-700 font-semibold"
      >
        Learn more →
      </Link>
    </article>

    {/* Blue Horizons */}
    <article className="rounded-2xl bg-white border p-6 shadow-sm hover:shadow-lg transition">
      <img
        src={img1}
        alt="IMARA Women Programme"
        className="w-full h-36 object-cover rounded-lg mb-4"
        loading="lazy"
      />
      <h4 className="font-semibold text-lg text-green-800">Blue Horizons</h4>
      <p className="mt-2 text-gray-600 text-sm">
        Youth-led sustainable fishing, marine conservation and innovation for coastal communities.
      </p>
      <Link
        to="/programs/blue-horizons"
        className="mt-4 inline-block text-green-700 font-semibold"
      >
        Learn more →
      </Link>
    </article>

  </div>
</section>


          {/* Strategic Focus (component preserved) */}
          <StrategicFocus />

          {/* Impact counters (prominent, accessible) */}
          <section
            className="rounded-3xl overflow-hidden"
            aria-labelledby="impact-heading"
          >
            <div className="bg-gradient-to-br from-emerald-700 via-green-700 to-emerald-800 text-white py-12 px-6">
              <div className="max-w-6xl mx-auto text-center space-y-4">
                <h3 id="impact-heading" className="text-2xl md:text-3xl font-extrabold">
                  Our Impact
                </h3>
                <p className="max-w-2xl mx-auto text-gray-100/90">
                  Numbers below represent learners, teachers and communities whose lives have been
                  touched by ECN programmes. These are real people with real progress.
                </p>

                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {impactStats.map((s, i) => (
                    <div
                      key={i}
                      className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10"
                      role="group"
                      aria-label={`${s.label}: ${s.value}`}
                    >
                      <div className="text-3xl md:text-4xl font-extrabold">
                        <CountUp end={s.value} duration={2.5} separator="," />+
                      </div>
                      <div className="mt-2 text-sm md:text-base text-gray-100">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Story / Testimonial */}
          <section className="bg-white rounded-3xl shadow p-8 md:p-12">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold text-green-800">A story of change</h4>
                <p className="mt-4 text-gray-700">
                  When Amina joined ECN's Nafasi Learning Programme she had limited access to learning
                  resources. After a year of tailored mentoring, digital-skills classes and a
                  community-supported micro-project, she is now mentoring other learners and working
                  with a local cooperative to start a small business. Stories like Amina's are why we
                  do this work.
                </p>
                <Link
                  to="/Blog"
                  className="inline-block mt-6 bg-green-700 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-green-800"
                >
                  Read more stories
                </Link>
              </div>
              <div>
                <img
                  src={img1}
                  alt="A student participating in ECN programme"
                  className="w-full h-64 object-cover rounded-2xl shadow-sm"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* Call to Action strip */}
          <section className="rounded-2xl py-8 px-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-xl font-extrabold">Support ECN's work</h4>
                <p className="mt-1 text-sm opacity-90">
                  Your support helps scale programmes, train teachers and provide safe learning spaces.
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href="/donate"
                  className="inline-block bg-white text-green-800 px-4 py-2 rounded-full font-semibold shadow"
                >
                  Donate now
                </a>
                <Link
                  to="/contact"
                  className="inline-block border border-white/60 px-4 py-2 rounded-full font-semibold hover:bg-white/10"
                >
                  Volunteer & Partner
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Scroll-to-top */}
      {showScrollTop && (
        <motion.button
          onClick={handleScrollTop}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24 }}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-200"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}

      <Footer />
    </div>
  );
}
