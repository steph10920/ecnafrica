import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import FishingPhoto1 from "../assets/fishing1.jpg";
import FishingPhoto2 from "../assets/fishing2.jpg";

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

export default function BlueHorizons() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="min-h-screen flex flex-col motion-reduce:[&_*]:!transition-none motion-reduce:[&_*]:!animate-none"
      style={{ ...THEME_VARS, fontFamily: "var(--font-body)", color: "var(--ink)" }}
    >
      <Helmet>
        <title>Blue Horizons | Elimu Community Network (ECN Africa)</title>
        <meta
          name="description"
          content="Blue Horizons by Elimu Community Network empowers youth in Busia County to transform Lake Victoria’s fishing industry through sustainable practices, technology, and entrepreneurship."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,900&family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-[var(--chalk)] text-[var(--paper)] py-24 px-6 text-center overflow-hidden">
        <Grain />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-[repeating-linear-gradient(90deg,var(--sky)_0,var(--sky)_10px,transparent_10px,transparent_20px)] opacity-50"
        />
        <motion.h1
          className="relative z-10 text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "var(--font-display)" }}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          Blue Horizons: Youth for{" "}
          <span className="relative inline-block">
            Sustainable Fishing
            <ChalkUnderline className="absolute left-0 -bottom-1" />
          </span>{" "}
          and Innovation
        </motion.h1>
        <p className="relative z-10 max-w-3xl mx-auto text-lg text-[var(--paper)]/85">
          Empowering the Next Generation to Transform Lake Victoria’s Future
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto py-16 px-6 space-y-12 text-[var(--ink)]/80 bg-[var(--paper)]">
        {/* Introduction */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2
            className="text-2xl font-semibold text-[var(--sky)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Turning the Tide in Busia County
          </h2>
          <p className="leading-relaxed">
            Along the shores of Lake Victoria, in Runyu Village, a generation of young people faces
            an uncertain future. Most have dropped out of school, struggling to survive through precarious
            fishing, often caught in cycles of poverty, drug abuse, and disease.
          </p>
          <p className="leading-relaxed">Yet, beneath these challenges lies something powerful: their potential.</p>
          <p className="leading-relaxed">
            At Elimu Community Network (ECN), we believe that when young people are given the tools to learn,
            innovate, and lead, they can turn survival into sustainability and despair into discovery.
          </p>
          <p className="leading-relaxed">
            That’s why we launched Blue Horizons — a groundbreaking youth initiative designed to reshape the
            fishing industry through education, technology, and entrepreneurship.
          </p>
          <h2
            className="text-2xl font-semibold text-[var(--sky)] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What We Do
          </h2>
          <p className="leading-relaxed">
            Blue Horizons empowers vulnerable youth to become champions of sustainable fishing, innovation, and community development.
            <br />
            Through hands-on learning and mentorship, the program explores the entire fishing value chain, from sustainable
            practices to high-tech solutions and business creation.
            <br />
            Our approach blends traditional wisdom with modern technology, creating a model of learning that is both relevant and transformative.
          </p>
        </motion.div>

        {/* Our Approach */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-2xl font-semibold text-[var(--sky)] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Approach
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: "Sustainable Fishing Education",
                text: (
                  <>
                    We train youth on eco-friendly fishing practices, lake conservation, and community
                    stewardship. They learn to protect biodiversity, use the right tools, and safeguard the
                    lake’s ecosystem.
                    <br />
                    “We teach them to fish but also to think, innovate, and sustain.”
                  </>
                ),
              },
              {
                title: "Technology Meets Tradition",
                text: "At our solar-powered digital training hub in Runyu Village, young people gain essential ICT and AI skills. They learn how to use data and technology to map fish resources, improve marketing, and apply artificial intelligence in managing fisheries.",
              },
              {
                title: "Value Addition and Entrepreneurship",
                text: "Youth are trained to process, dry, and package fish sustainably, while exploring innovative by-products like fish oil, animal feed, and organic fertilizer. They also receive coaching in entrepreneurship, cooperative formation, and financial literacy.",
              },
              {
                title: "Connecting to Markets",
                text: "ECN builds market linkages between youth-led enterprises and major cities like Kisumu, Nairobi, and Mombasa. Future phases will expand across Uganda and Tanzania, building a vibrant East African network of young innovators in the blue economy.",
              },
            ].map((item, i) => (
              <div key={item.title} className="relative bg-white p-6 pl-9 shadow-sm">
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 bottom-0 w-2"
                  style={{ backgroundColor: "var(--sky)" }}
                />
                <h3
                  className="font-semibold text-[var(--chalk)] mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Our Impact Goals */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-2xl font-semibold text-[var(--sky)] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Impact Goals
          </h2>
          <ol className="list-decimal pl-6 space-y-2 text-lg leading-relaxed mb-8">
            <li>Train 30 youth (20 young men and 10 young women) from Runyu Village in sustainable fishing and digital skills.</li>
            <li>Support creation of 5 youth-led enterprises along the fishing value chain.</li>
            <li>Promote environmental stewardship and responsible use of Lake Victoria’s resources.</li>
            <li>Reduce unemployment, drug use, and illegal fishing through meaningful livelihoods.</li>
          </ol>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative bg-white p-3 pb-8 shadow-[0_15px_35px_-12px_rgba(0,0,0,0.4)] -rotate-1">
              <TapeCorner />
              <img
                src={FishingPhoto1}
                alt="Youth engaged in sustainable fishing"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="relative bg-white p-3 pb-8 shadow-[0_15px_35px_-12px_rgba(0,0,0,0.4)] rotate-1">
              <TapeCorner />
              <img
                src={FishingPhoto2}
                alt="Marine conservation and training"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="relative bg-white p-6 pl-8 shadow-sm"
        >
          <span aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-2 bg-[var(--sky)]" />
          <h2
            className="text-2xl font-semibold text-[var(--sky)] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Why It Matters
          </h2>
          <p className="italic text-[var(--chalk)] text-lg" style={{ fontFamily: "var(--font-display)" }}>
            Every fish caught, every app coded, every business started becomes a ripple of change.
            <br />
            Blue Horizons is more than a program; it’s a movement.
            <br />
            A movement of young people reclaiming their dignity, redefining their future, and restoring balance
            to one of Africa’s greatest natural treasures.
          </p>
          <p className="text-right font-semibold text-[var(--sky)] mt-2">
            “Teach a youth to fish wisely, and you feed generations while saving the lake.” — ECN
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3
            className="text-xl font-semibold text-[var(--sky)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Join the Blue Horizons Movement
          </h3>
          <p className="mb-6">
            Partner with us to power the next generation of innovators, entrepreneurs, and lake stewards.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[var(--sky)] hover:brightness-110 text-[var(--paper)] px-6 py-3 font-semibold shadow transition duration-300"
          >
            Get Involved
          </Link>
        </motion.div>
      </section>

      {/* Scroll to Top */}
      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 bg-[var(--sky)] text-[var(--paper)] p-3 rounded-full shadow-lg hover:brightness-110 transition duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--gold)]"
        >
          <ArrowUp size={24} />
        </button>
      )}

      <Footer />
    </div>
  );
}
