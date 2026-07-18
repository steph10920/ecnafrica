import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { GraduationCap, Users, Trees } from "lucide-react";
import CountUp from "react-countup";
import Footer from "../../components/Footer";

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

function Eyebrow({ children, tone = "gold" }) {
  const color = tone === "gold" ? "text-[var(--gold)]" : "text-[var(--clay)]";
  return (
    <span className={`inline-block -rotate-1 text-2xl ${color}`} style={{ fontFamily: "var(--font-hand)" }}>
      {children}
    </span>
  );
}

function SpiralEdge() {
  return (
    <div aria-hidden="true" className="absolute left-3 top-0 bottom-0 flex flex-col justify-evenly py-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="h-2 w-2 rounded-full bg-[var(--paper)] ring-2 ring-[var(--ink)]/15" />
      ))}
    </div>
  );
}

const ACCENTS = ["var(--clay)", "var(--sky)", "var(--gold)"];

const programs = [
  {
    Icon: GraduationCap,
    title: "Street Education & Reintegration",
    description:
      "Reaching children and youth on the streets, providing safe learning spaces, mentorship, and pathways to reintegration.",
  },
  {
    Icon: Users,
    title: "Teacher Training & Innovation",
    description:
      "Equipping educators with creative, culturally relevant, and future-ready teaching methods that inspire lifelong learning.",
  },
  {
    Icon: Trees,
    title: "Community Learning Centers",
    description:
      "Creating hubs of knowledge, innovation, and collaboration that connect families, schools, and local communities.",
  },
];

// NOTE: the source data had all three of these hardcoded to the same
// value (1000). That's almost certainly a copy-paste leftover rather
// than real impact data — left as-is rather than guessing real
// numbers. Swap in the correct figures per stat.
const impactStats = [
  { end: 1000, label: "Children Reached" },
  { end: 1000, label: "Youth Reached" },
  { end: 1000, label: "Women Reached" },
];

const volunteerMailto = `mailto:education@ecnafrica.org?subject=${encodeURIComponent(
  "Volunteer - [Position Name] - [Your Full Name]"
)}`;

export default function QualityEducation() {
  return (
    <div
      className="min-h-screen flex flex-col motion-reduce:[&_*]:!transition-none motion-reduce:[&_*]:!animate-none"
      style={{ ...THEME_VARS, fontFamily: "var(--font-body)", color: "var(--ink)" }}
    >
      <Helmet>
        <title>Quality Education | ECN Africa</title>
        <meta
          name="description"
          content="ECN Africa turns learning into action — empowering children, youth, and women to thrive, innovate, and lead their communities through inclusive, future-ready education."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,900&family=Work+Sans:wght@400;500;600;700&family=Caveat:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* HERO */}
      <section className="relative bg-[var(--chalk)] text-[var(--paper)] py-28 md:py-32 text-center overflow-hidden">
        <Grain />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-[repeating-linear-gradient(90deg,var(--gold)_0,var(--gold)_10px,transparent_10px,transparent_20px)] opacity-40"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >
          <Eyebrow>Field notes: education</Eyebrow>
          <h1
            className="mt-3 text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Quality{" "}
            <span className="relative inline-block">
              Education
              <ChalkUnderline className="absolute left-0 -bottom-1" />
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed max-w-2xl mx-auto text-[var(--paper)]/80">
            At ECN, we turn learning into action — empowering children, youth, and women to
            thrive, innovate, and lead their communities.
          </p>
          <p className="mt-4 font-semibold text-[var(--gold)]" style={{ fontFamily: "var(--font-hand)" }}>
            Inclusive. Transformative. Future-ready.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={volunteerMailto}
              className="bg-[var(--paper)] text-[var(--chalk)] font-semibold px-6 py-3 shadow-lg hover:brightness-95 transition focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
            >
              Volunteer Today
            </a>
            <Link
              to="/donate"
              className="bg-[var(--clay)] text-[var(--paper)] font-semibold px-6 py-3 shadow-lg hover:brightness-110 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--chalk)] focus:ring-[var(--gold)]"
            >
              Donate Now
            </Link>
          </div>
        </motion.div>
      </section>

      {/* PROGRAMS */}
      <main className="flex-1 bg-[var(--paper)]">
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <Eyebrow tone="clay">How we work</Eyebrow>
            <h2
              className="mt-2 text-3xl font-bold text-[var(--chalk)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What We Do
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative bg-white pl-8 pr-5 py-7 shadow-sm hover:shadow-lg transition text-center flex flex-col items-center ${
                  i % 2 === 0 ? "md:-rotate-1" : "md:rotate-1"
                }`}
              >
                <SpiralEdge />
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-8 right-5 h-1.5"
                  style={{ backgroundColor: ACCENTS[i % ACCENTS.length] }}
                />
                <program.Icon size={32} style={{ color: ACCENTS[i % ACCENTS.length] }} aria-hidden="true" />
                <h3
                  className="text-lg font-semibold mt-4 mb-2 text-[var(--chalk)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {program.title}
                </h3>
                <p className="text-[var(--ink)]/70 text-sm leading-relaxed">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* QUOTE */}
        <section className="px-6 py-16">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white p-8 pl-10 shadow-sm max-w-3xl mx-auto -rotate-1"
          >
            <span aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-2 bg-[var(--clay)]" />
            <p
              className="text-xl md:text-2xl text-[var(--chalk)] leading-snug"
              style={{ fontFamily: "var(--font-display)" }}
            >
              "Education is not a way to escape poverty; it is a way of fighting it."
            </p>
            <cite className="block mt-4 text-[var(--ink)]/60 not-italic">— Julius Nyerere</cite>
          </motion.blockquote>
        </section>

        {/* IMPACT */}
        <section className="relative -mx-0 px-6 py-20 bg-[var(--chalk)] overflow-hidden">
          <Grain />
          <div className="relative z-10 text-center mb-12">
            <Eyebrow>By the numbers</Eyebrow>
            <h2
              className="mt-2 text-3xl font-bold text-[var(--paper)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our Impact
            </h2>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
            {impactStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="border border-dashed border-[var(--paper)]/25 p-8"
              >
                <h3 className="mb-2">
                  <CountUp
                    start={0}
                    end={stat.end}
                    duration={2.5}
                    separator=","
                    className="text-4xl md:text-5xl font-bold"
                    style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}
                  />
                </h3>
                <p className="text-[var(--paper)]/75 text-sm uppercase tracking-wide font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-6 text-[var(--chalk)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Join Us in Making Education Accessible
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href={volunteerMailto}
              className="bg-white text-[var(--chalk)] font-semibold px-8 py-3 shadow-lg hover:brightness-95 transition focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
            >
              Volunteer Today
            </a>
            <Link
              to="/donate"
              className="bg-[var(--clay)] text-[var(--paper)] font-semibold px-8 py-3 shadow-lg hover:brightness-110 transition focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
            >
              Support With a Donation
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
