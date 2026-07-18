import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";

/* ------------------------------------------------------------------ */
/*  Shared design tokens — kept identical to Home.jsx for consistency. */
/*  If this pattern repeats on more pages, consider moving these into  */
/*  a single /components/theme.js and /components/DesignSystem.jsx.    */
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
  "--font-hand": "'Caveat', cursive",
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

/* ------------------------------------------------------------------ */
/*  Content                                                             */
/* ------------------------------------------------------------------ */

const programs = [
  {
    title: "Green Classrooms for Community Resilience",
    subtitle: "Education for a Greener and Sustainable Future",
    path: "/programs/green-classrooms",
    accent: "var(--chalk)",
  },
  {
    title: "Nafasi Learning Programme",
    subtitle: "Creating Spaces and Opportunities for Change",
    path: "/programs/nafasiprogramme",
    accent: "var(--sky)",
  },
  {
    title: "IMARA Women",
    subtitle: "Imara means \u201cstrong\u201d or \u201cresilient\u201d in Swahili — building strength through knowledge and innovation",
    path: "/programs/imara-women",
    accent: "var(--gold)",
  },
  {
    title: "Blue Horizons",
    subtitle: "Youth for Sustainable Fishing and Innovation",
    path: "/programs/blue-horizons",
    accent: "var(--clay)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, duration: 0.5 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 250 } },
};

/* ------------------------------------------------------------------ */
/*  Program card — index card with a spiral edge and a colored tab,    */
/*  matching the card language used for programmes on the homepage.    */
/* ------------------------------------------------------------------ */

function ProgramCard({ program, rotate }) {
  return (
    <Link to={program.path} aria-label={`View details about ${program.title}`} className="block h-full">
      <motion.div
        whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.35)" }}
        transition={{ type: "spring", stiffness: 250 }}
        className={`relative h-full bg-white pl-8 pr-6 py-8 shadow-sm flex flex-col ${rotate}`}
      >
        <span
          aria-hidden="true"
          className="absolute top-0 left-8 right-6 h-1.5"
          style={{ backgroundColor: program.accent }}
        />
        <SpiralEdge />

        <h2
          className="text-lg font-bold text-[var(--chalk)] mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {program.title}
        </h2>
        <p className="text-[var(--ink)]/70 text-sm leading-relaxed flex-1">
          {program.subtitle}
        </p>

        <div
          className="mt-6 inline-flex items-center justify-center self-start text-[var(--paper)] px-5 py-2.5 rounded-full text-sm font-semibold shadow-md transition"
          style={{ backgroundColor: program.accent }}
        >
          Explore Programme →
        </div>
      </motion.div>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function Programs() {
  return (
    <div
      className="min-h-screen flex flex-col motion-reduce:[&_*]:!transition-none motion-reduce:[&_*]:!animate-none"
      style={{ ...THEME_VARS, fontFamily: "var(--font-body)", color: "var(--ink)" }}
    >
      <Helmet>
        <title>Our Programmes | ECN Africa</title>
        <meta
          name="description"
          content="Learn about Elimu Community Network (ECN Africa), our mission, vision, and how we empower communities through education, innovation, and sustainable programs."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,900&family=Work+Sans:wght@400;500;600;700&family=Caveat:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* ============================ HERO ============================ */}
      <header className="relative w-full overflow-hidden bg-[var(--chalk)] pt-24 pb-20 md:pt-28 md:pb-24">
        <Grain />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-[repeating-linear-gradient(90deg,var(--gold)_0,var(--gold)_10px,transparent_10px,transparent_20px)] opacity-40"
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Eyebrow>What we do, on the ground</Eyebrow>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--paper)] leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our{" "}
            <span className="relative inline-block">
              Programmes
              <ChalkUnderline className="absolute left-0 -bottom-1" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-6 text-[var(--paper)]/80 leading-relaxed max-w-xl mx-auto"
          >
            Discover how ECN empowers communities through education, sustainability, and
            youth-driven innovation.
          </motion.p>
        </div>
      </header>

      {/* ============================ GRID ============================ */}
      <main className="flex-1 bg-[var(--paper)]">
        <motion.div
          className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {programs.map((program, index) => (
            <motion.div key={program.path} variants={cardVariants} className={index % 2 === 0 ? "sm:-rotate-1" : "sm:rotate-1"}>
              <ProgramCard program={program} rotate="" />
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
