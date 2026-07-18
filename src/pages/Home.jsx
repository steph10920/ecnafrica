import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import StrategicFocus from "../components/StrategicFocus";
import { ArrowUp } from "lucide-react";
import CountUp from "react-countup";
import { Helmet } from "react-helmet";
import childProtectionImg from "../assets/child-protection.jpg";
import img1 from "../assets/stories/mobischool.jpg";
import slide1 from "../assets/education.png";
import slide2 from "../assets/child-protection.jpg";
import slide3 from "../assets/women_empowerment.jpg";
import slide4 from "../assets/img1.jpg";
import slide5 from "../assets/slide1.jpg";
import greenclass from "../assets/trees4.jpg";
import bluezones from "../assets/bluezones.jpg";
import whoweareVideo from "../assets/weare_video.mp4";

/* ------------------------------------------------------------------ */
/*  Static content — module scope so it isn't recreated every render   */
/* ------------------------------------------------------------------ */

const slides = [
  {
    img: slide1,
    title: "Empowering Vulnerable Children Through Education",
    desc:
      "ECN Africa works with communities to support street children, promote education, and strengthen families across Kenya.",
  },
  {
    img: slide2,
    title: "Safe & Inclusive Learning",
    desc: "Protecting children, promoting wellbeing, and creating safe learning environments.",
  },
  {
    img: slide3,
    title: "Women & Youth Empowerment",
    desc: "Building leadership, entrepreneurship and digital skills for sustainable livelihoods.",
  },
  {
    img: slide4,
    title: "Community-led Solutions",
    desc: "Local knowledge and partnership — sustainable change rooted in community strengths.",
  },
  {
    img: slide5,
    title: "Sports & Wellbeing",
    desc: "Sport as a tool for life-skills, inclusion and holistic development.",
  },
];

const impactStats = [
  { label: "Learners Reached", value: 1500 },
  { label: "Teachers Trained", value: 450 },
  { label: "Schools Supported", value: 25 },
  { label: "Volunteers Engaged", value: 120 },
];

const programs = [
  {
    to: "/programs/green-classrooms",
    img: greenclass,
    title: "Green Classrooms",
    desc: "Education for a greener, sustainable future — community-driven learning for climate resilience.",
  },
  {
    to: "/programs/nafasiprogramme",
    img: childProtectionImg,
    title: "Nafasi Learning Programme",
    desc: "Creating safe learning spaces, mentoring, digital skills and youth-driven innovation.",
  },
  {
    to: "/programs/imara-women",
    img: slide3,
    title: "IMARA Women",
    desc: "Strengthening women's leadership, economic agency, and innovation through knowledge.",
  },
  {
    to: "/programs/blue-horizons",
    img: bluezones,
    title: "Blue Horizons",
    desc: "Youth-led sustainable fishing, marine conservation and innovation for coastal communities.",
  },
];

const volunteerMailto = `mailto:education@ecnafrica.org?subject=${encodeURIComponent(
  "Volunteer - [Position Name] - [Your Full Name]"
)}`;

// Subtle paper/chalk grain — generated inline so no new asset files are needed.
const GRAIN_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'>
      <filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter>
      <rect width='100%' height='100%' filter='url(#n)'/>
    </svg>`
  );

const THEME_VARS = {
  "--ink": "#1B2A22",
  "--paper": "#F1EDD9",
  "--paper-2": "#EAE3CC",
  "--chalk": "#1F3A2E",
  "--chalk-2": "#16291F",
  "--clay": "#B8462F",
  "--gold": "#E3A73B",
  "--sky": "#3E7C8C",
  "--font-display": "'Fraunces', ui-serif, Georgia, serif",
  "--font-body": "'Work Sans', ui-sans-serif, system-ui, sans-serif",
  "--font-hand": "'Caveat', cursive",
};

/* ------------------------------------------------------------------ */
/*  Small presentational helpers — the visual signature of the page    */
/* ------------------------------------------------------------------ */

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
    <svg
      viewBox="0 0 200 18"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`w-full h-[0.5em] ${className}`}
    >
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

function EmphasizedTitle({ text, className = "" }) {
  const words = text.trim().split(" ");
  const last = words.pop();
  return (
    <h1 className={className} style={{ fontFamily: "var(--font-display)" }}>
      {words.join(" ")}{" "}
      <span className="relative inline-block whitespace-nowrap">
        {last}
        <ChalkUnderline className="absolute left-0 -bottom-1" />
      </span>
    </h1>
  );
}

function TapeCorner({ position = "top" }) {
  const pos =
    position === "top"
      ? "-top-3 left-1/2 -translate-x-1/2 -rotate-2"
      : "-bottom-3 right-6 rotate-3";
  return (
    <span
      aria-hidden="true"
      className={`absolute ${pos} h-6 w-16 bg-[var(--gold)]/70 shadow-sm`}
      style={{ clipPath: "polygon(4% 0, 96% 0, 100% 100%, 0% 100%)" }}
    />
  );
}

function PhotoCard({ src, alt, caption, rotate = -3, className = "" }) {
  return (
    <div
      className={`relative bg-[var(--paper)] p-3 pb-9 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.55)] ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <TapeCorner position="top" />
      <img src={src} alt={alt} className="h-56 sm:h-64 w-full object-cover" loading="lazy" />
      {caption && (
        <p
          className="absolute bottom-1.5 left-3 right-3 text-[var(--ink)]/80 text-lg leading-none"
          style={{ fontFamily: "var(--font-hand)" }}
        >
          {caption}
        </p>
      )}
    </div>
  );
}

function SpiralEdge() {
  return (
    <div
      aria-hidden="true"
      className="absolute left-3 top-0 bottom-0 flex flex-col justify-evenly py-4"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="h-2 w-2 rounded-full bg-[var(--paper)] ring-2 ring-[var(--ink)]/15"
        />
      ))}
    </div>
  );
}

function Eyebrow({ children, tone = "gold" }) {
  const color = tone === "gold" ? "text-[var(--gold)]" : "text-[var(--clay)]";
  return (
    <span
      className={`inline-block -rotate-1 text-2xl ${color}`}
      style={{ fontFamily: "var(--font-hand)" }}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPos({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  return (
    <div
      className="min-h-screen flex flex-col motion-reduce:[&_*]:!transition-none motion-reduce:[&_*]:!animate-none"
      style={{ ...THEME_VARS, fontFamily: "var(--font-body)", color: "var(--ink)" }}
    >
      <Helmet>
        <title>ECN Africa | Empowering Communities Through Education</title>
        <meta
          name="description"
          content="ECN Africa empowers vulnerable children and communities through inclusive education, youth empowerment, and community-driven solutions."
        />
        <meta
          name="keywords"
          content="ECN Africa, education NGO Kenya, community education Africa, youth empowerment Kenya"
        />
        <meta property="og:title" content="ECN Africa" />
        <meta property="og:description" content="Empowering communities through education and innovation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ecnafrica.org" />
        <meta property="og:image" content="/preview.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,900&family=Work+Sans:wght@400;500;600;700&family=Caveat:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* ============================ HERO ============================ */}
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
            <Eyebrow>Field notes from Kenya</Eyebrow>

            <EmphasizedTitle
              text={slides[currentIndex].title}
              className="mt-3 text-[var(--paper)] text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15]"
            />

            <p className="mt-6 text-base sm:text-lg text-[var(--paper)]/80 max-w-lg leading-relaxed">
              {slides[currentIndex].desc}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/programs"
                className="inline-flex items-center justify-center bg-[var(--clay)] text-[var(--paper)] font-semibold px-6 py-3 shadow-lg hover:brightness-110 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--chalk)] focus:ring-[var(--gold)]"
                aria-label="Explore ECN Programs"
              >
                Explore Programmes
              </Link>
              <Link
                to="/donate"
                className="inline-flex items-center justify-center border-2 border-dashed border-[var(--gold)] text-[var(--gold)] font-semibold px-6 py-3 hover:bg-[var(--gold)]/10 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--chalk)] focus:ring-[var(--gold)]"
                aria-label="Donate to ECN"
              >
                Donate
              </Link>
            </div>

            <p className="mt-8 text-sm text-[var(--paper)]/60 max-w-md">
              ECN Education Africa partners with local schools, teachers and communities to
              create inclusive, practical and sustainable learning opportunities.
            </p>
          </motion.div>

          {/* Photo — presented as a taped field photograph, not a full-bleed background */}
          <div className="relative flex justify-center md:justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, rotate: -8, y: 12 }}
                animate={{ opacity: 1, rotate: -3, y: 0 }}
                exit={{ opacity: 0, rotate: 4 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <PhotoCard
                  src={slides[currentIndex].img}
                  alt={slides[currentIndex].title}
                  caption={`— ${slides[currentIndex].title.split(" ").slice(0, 3).join(" ")}...`}
                  rotate={-3}
                  className="w-72 sm:w-80"
                />
              </motion.div>
            </AnimatePresence>

            {/* Prev / next */}
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

        {/* Dots */}
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

      {/* ============================ MAIN ============================ */}
      <main className="flex-1 bg-[var(--paper)]">
        <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
          {/* ---------------------------- About ---------------------------- */}
          <section
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            aria-labelledby="about-heading"
          >
            <div>
              <Eyebrow tone="clay">Who we are</Eyebrow>
              <h2
                id="about-heading"
                className="mt-2 text-2xl md:text-3xl font-bold text-[var(--chalk)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                An African-led education network, built in Kenya
              </h2>
              <p className="mt-5 text-[var(--ink)]/80 leading-relaxed">
                Elimu Community Network (ECN) is an African-led organization founded in Kenya
                (2012), working to expand quality, contextual and inclusive education that
                empowers learners, teachers and communities. Our model blends practical
                learning, digital skills, and community-led solutions to create lasting
                opportunity.
              </p>

              <div className="relative mt-6 bg-white p-5 pl-8 shadow-md max-w-md -rotate-1">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 bottom-0 w-2 bg-[var(--clay)]"
                />
                <p className="text-[var(--ink)]/80 italic leading-relaxed">
                  Education must be relevant, liberatory and rooted in community realities.
                </p>
              </div>

              <div className="flex gap-3 mt-8">
                <Link
                  to="/about"
                  className="inline-block bg-[var(--chalk)] text-[var(--paper)] px-5 py-2.5 font-semibold shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--chalk)]"
                >
                  Learn More
                </Link>
                <Link
                  to="/contact"
                  className="inline-block border-2 border-[var(--chalk)] text-[var(--chalk)] px-5 py-2.5 font-semibold hover:bg-[var(--chalk)]/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--chalk)]"
                >
                  Get Involved
                </Link>
              </div>
            </div>

            {/* Parallax video — framed as a taped field photograph */}
            <motion.div
              className="relative bg-white p-3 pb-8 shadow-xl mx-auto max-w-md rotate-1"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setHoverPos({ x: 0, y: 0 })}
              animate={{
                rotateX: hoverPos.y * -6,
                rotateY: hoverPos.x * 6,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 14 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <TapeCorner position="top" />
              <video
                src={whoweareVideo}
                className="w-full h-64 object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
              <p
                className="absolute bottom-1.5 left-4 text-[var(--ink)]/80 text-lg"
                style={{ fontFamily: "var(--font-hand)" }}
              >
                — a day in the field
              </p>
            </motion.div>
          </section>

          {/* -------------------------- Programmes -------------------------- */}
          <section aria-labelledby="programs-heading">
            <div className="text-center mb-12">
              <Eyebrow>Our programmes</Eyebrow>
              <h3
                id="programs-heading"
                className="mt-2 text-2xl md:text-3xl font-bold text-[var(--chalk)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Four ways we work
              </h3>
              <p className="max-w-2xl mx-auto text-[var(--ink)]/70 mt-3">
                ECN Education Africa delivers impactful programmes designed to strengthen
                learning, empower youth, and build resilient community-driven education
                systems across Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {programs.map((p, i) => (
                <Link
                  key={p.to}
                  to={p.to}
                  className={`group relative block bg-white pl-8 pr-5 py-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition focus:outline-none focus:ring-2 focus:ring-[var(--gold)] ${
                    i % 2 === 0 ? "sm:-rotate-1" : "sm:rotate-1"
                  }`}
                >
                  <SpiralEdge />
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-32 object-cover mb-4 grayscale-[15%] group-hover:grayscale-0 transition"
                    loading="lazy"
                  />
                  <h4
                    className="font-semibold text-lg text-[var(--chalk)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {p.title}
                  </h4>
                  <p className="mt-2 text-[var(--ink)]/70 text-sm leading-relaxed">{p.desc}</p>
                  <span className="mt-4 inline-block text-[var(--clay)] font-semibold">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <StrategicFocus />

          {/* --------------------------- Impact --------------------------- */}
          <section className="relative -mx-6 px-6 py-16 bg-[var(--chalk)] overflow-hidden" aria-labelledby="impact-heading">
            <Grain />
            <div className="relative z-10 max-w-6xl mx-auto text-center">
              <Eyebrow>By the numbers</Eyebrow>
              <h3
                id="impact-heading"
                className="mt-2 text-2xl md:text-3xl font-bold text-[var(--paper)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our Impact
              </h3>
              <p className="max-w-2xl mx-auto text-[var(--paper)]/70 mt-3">
                Numbers below represent learners, teachers, and communities whose lives have
                been touched by ECN programmes. These are real people with real progress.
              </p>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {impactStats.map((s, i) => (
                  <div
                    key={i}
                    className="border border-dashed border-[var(--paper)]/25 p-6"
                    role="group"
                    aria-label={`${s.label}: ${s.value}`}
                  >
                    <div
                      className="text-3xl md:text-4xl font-bold text-[var(--gold)]"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      <CountUp end={s.value} duration={2.5} separator="," />+
                    </div>
                    <div className="mt-2 text-sm text-[var(--paper)]/70 tracking-wide uppercase">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex justify-center relative z-50">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-expanded={dropdownOpen}
                  className="inline-flex items-center gap-2 bg-[var(--clay)] text-[var(--paper)] px-6 py-3 font-semibold shadow-lg hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] transition"
                >
                  Download Impact Report
                  <motion.svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    animate={{ rotate: dropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </motion.svg>
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full mt-2 w-64 bg-[var(--paper)] shadow-2xl overflow-hidden">
                    <a
                      href="/downloads/Impact_Report_2025.pdf"
                      download
                      className="block px-6 py-3 text-[var(--ink)] font-medium hover:bg-[var(--gold)]/15 transition"
                    >
                      Impact Report 2025
                    </a>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* --------------------------- Story --------------------------- */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Eyebrow tone="clay">A story of hope</Eyebrow>
              <h4
                className="mt-2 text-2xl font-bold text-[var(--chalk)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Mobile School
              </h4>
              <p className="mt-4 text-[var(--ink)]/80 leading-relaxed">
                When a young person reaches out to Mobile School, they may have nowhere stable
                to call home. Mobile School's "school-on-wheels" brings learning directly to
                the streets — offering books, mentoring, and a safe space where children can
                begin to believe in themselves again. Over time, many regain confidence,
                acquire new skills, and find purpose. Stories like this remind us why ECN
                fights for inclusive, accessible education for all.
              </p>
              <Link
                to="/Stories"
                className="inline-block mt-6 bg-[var(--chalk)] text-[var(--paper)] px-5 py-2.5 font-semibold shadow hover:brightness-110"
              >
                Read more stories
              </Link>
            </div>
            <div className="flex justify-center">
              <PhotoCard
                src={img1}
                alt="A student participating in ECN programme"
                caption="— on the road, learning"
                rotate={2}
                className="w-full max-w-md"
              />
            </div>
          </section>

          {/* ---------------------------- CTA ---------------------------- */}
          <section className="relative -mx-6 px-6 py-10 bg-[var(--clay)] text-[var(--paper)] overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-[repeating-linear-gradient(90deg,var(--paper)_0,var(--paper)_10px,transparent_10px,transparent_20px)] opacity-40"
            />
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  Support ECN's work
                </h4>
                <p className="mt-1 text-sm text-[var(--paper)]/85">
                  Your support helps scale programmes, train teachers and provide safe learning
                  spaces.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={volunteerMailto}
                  className="bg-[var(--paper)] text-[var(--clay)] font-semibold px-8 py-3 shadow-lg hover:brightness-95 transition focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                >
                  Volunteer Today
                </a>
                <Link
                  to="/donate"
                  className="border-2 border-dashed border-[var(--paper)] text-[var(--paper)] font-semibold px-8 py-3 hover:bg-[var(--paper)]/10 transition focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                >
                  Support With a Donation
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* ----------------------- Scroll-to-top ----------------------- */}
      {showScrollTop && (
        <motion.button
          onClick={handleScrollTop}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24 }}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 bg-[var(--clay)] text-[var(--paper)] p-3 rounded-full shadow-lg hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--gold)]"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}

      <Footer />
    </div>
  );
}
