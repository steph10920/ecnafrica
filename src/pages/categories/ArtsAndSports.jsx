import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer.jsx";
import CountUp from "react-countup";
import { ArrowUp } from "lucide-react";

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

function TapeCorner() {
  return (
    <span
      aria-hidden="true"
      className="absolute -top-3 left-1/2 -translate-x-1/2 -rotate-2 h-6 w-16 bg-[var(--gold)]/70 shadow-sm"
      style={{ clipPath: "polygon(4% 0, 96% 0, 100% 100%, 0% 100%)" }}
    />
  );
}

function FramedPhoto({ src, alt, rotate = -2, className = "" }) {
  return (
    <div
      className={`relative bg-[var(--paper)] p-3 pb-6 shadow-[0_15px_35px_-12px_rgba(0,0,0,0.4)] ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <TapeCorner />
      <img src={src} alt={alt} className="w-full h-72 object-cover" loading="lazy" />
    </div>
  );
}

const ACCENTS = ["var(--clay)", "var(--sky)", "var(--gold)"];

const volunteerMailto = `mailto:education@ecnafrica.org?subject=${encodeURIComponent(
  "Volunteer - [Position Name] - [Your Full Name]"
)}`;

export default function ArtsAndSports() {
  const slides = [slide1, slide2, slide3, slide4];
  const media = [footballImg1, footballImg2, footballImg3, footballImg4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setCurrentIndex((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionAnim = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <div
      className="w-full motion-reduce:[&_*]:!transition-none motion-reduce:[&_*]:!animate-none"
      style={{ ...THEME_VARS, fontFamily: "var(--font-body)", color: "var(--ink)" }}
    >
      <Helmet>
        <title>Arts & Sports | ECN Africa</title>
        <meta
          name="description"
          content="ECN Africa uses football, athletics and creative games to build discipline, teamwork and pathways to education for youth across Kenya."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,900&family=Work+Sans:wght@400;500;600;700&family=Caveat:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* HERO */}
      <header className="relative h-[88vh] md:h-[92vh] flex items-center justify-center overflow-hidden bg-[var(--chalk)]">
        <div className="absolute inset-0">
          <img
            src={slides[currentIndex]}
            alt={`Youth sports programme ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--chalk)]/70 via-[var(--chalk)]/40 to-[var(--chalk)]/80" />
          <Grain />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block border-2 border-dashed border-[var(--gold)] text-[var(--gold)] rounded-full px-4 py-1 text-sm md:text-base mb-4"
            style={{ fontFamily: "var(--font-hand)" }}
          >
            ECN Sports — field pass
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-[var(--paper)] drop-shadow-lg"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Sports for Growth — Building{" "}
            <span className="relative inline-block">
              Leaders
              <ChalkUnderline className="absolute left-0 -bottom-1" />
            </span>{" "}
            On and Off the Field
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-4 text-lg md:text-xl text-[var(--paper)]/85 max-w-3xl mx-auto"
          >
            Using football and community sports to foster discipline, teamwork, inclusion, and
            pathways to education and opportunity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-6 items-center justify-center"
          >
            <Link
              to="/donate"
              className="bg-[var(--clay)] text-[var(--paper)] font-semibold px-6 py-3 shadow hover:brightness-110 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--chalk)] focus:ring-[var(--gold)]"
            >
              Donate Now
            </Link>
            <Link
              to="/programs"
              className="bg-transparent border-2 border-[var(--paper)]/50 text-[var(--paper)] px-6 py-3 hover:bg-[var(--paper)]/10 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--chalk)] focus:ring-[var(--gold)]"
            >
              Explore Programmes
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setCurrentIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === currentIndex ? "w-6 bg-[var(--gold)]" : "w-2.5 bg-[var(--paper)]/40"
              }`}
            />
          ))}
        </div>
      </header>

      <main className="bg-[var(--paper)]">
        {/* INTRO + HIGHLIGHTS */}
        <motion.section
          className="max-w-6xl mx-auto py-16 px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={sectionAnim}
        >
          <div className="text-center mb-6">
            <Eyebrow>Our philosophy</Eyebrow>
            <h2
              className="mt-2 text-3xl md:text-4xl font-bold text-[var(--chalk)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Building Champions On and Off the Field
            </h2>
          </div>

          <p className="text-lg text-[var(--ink)]/75 max-w-3xl mx-auto text-center leading-relaxed">
            At Elimu Community Network (ECN), we believe that street and village sports are more
            than games. They are a classroom without walls, a bridge from vulnerability to
            self-discovery. Through sports-based learning, we use football, athletics, and
            creative games as transformative tools to engage youth, build life skills, promote
            discipline, and open pathways to education and sustainable livelihoods.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { title: "Football Clinics", desc: "Weekly skill development for ages 8 & above." },
              { title: "Girls in Sports", desc: "Leadership and safe spaces for girls." },
              { title: "Street Leagues", desc: "Structured inter-street competitions and talent pathways." },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`relative bg-white pl-8 pr-5 py-6 shadow-sm text-center ${
                  i % 2 === 0 ? "sm:-rotate-1" : "sm:rotate-1"
                }`}
              >
                <SpiralEdge />
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-8 right-5 h-1.5"
                  style={{ backgroundColor: ACCENTS[i % ACCENTS.length] }}
                />
                <h3
                  className="text-xl font-semibold text-[var(--chalk)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="text-[var(--ink)]/70 mt-2 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* KEY ACTIVITIES */}
        <motion.section
          className="py-16 px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={sectionAnim}
        >
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Eyebrow tone="clay">On the ground</Eyebrow>
              <h3
                className="mt-2 text-2xl md:text-3xl font-bold text-[var(--chalk)] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Key Activities
              </h3>
              <ul className="text-[var(--ink)]/80 space-y-3">
                {[
                  "Formation of Street Sports Clubs.",
                  "Street and village Sports Tournaments and Talent Days.",
                  "Peer Coaching and Leadership Development.",
                ].map((li) => (
                  <li key={li} className="flex gap-2">
                    <span className="text-[var(--clay)] font-bold">—</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center">
              <FramedPhoto src={footballImg5} alt="Kids playing football" rotate={2} className="w-full max-w-md" />
            </div>
          </div>
        </motion.section>

        {/* ACHIEVEMENTS */}
        <motion.section
          className="py-16 px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={sectionAnim}
        >
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <FramedPhoto src={footballImg2} alt="Kids playing football" rotate={-2} className="w-full max-w-md" />
            </div>

            <div className="order-1 md:order-2">
              <Eyebrow>What's changed</Eyebrow>
              <h3
                className="mt-2 text-2xl md:text-3xl font-bold text-[var(--chalk)] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Achievements
              </h3>
              <ul className="text-[var(--ink)]/80 space-y-4">
                <li>
                  Over 70% of participating youth demonstrated improved confidence, teamwork, and
                  emotional regulation, with many re-engaging in education, training, or family
                  life.
                </li>
                <li>
                  Street and village sports activities reduced social stigma and strengthened
                  community bonds, transforming how local residents perceive and support
                  vulnerable youth.
                </li>
                <li>
                  Through mentorship, talent development, and educational linkages, participating
                  youth accessed new opportunities — from school re-entry and vocational training
                  to employment and microenterprise in the sports value chain.
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* MEDIA + VIDEO */}
        <motion.section
          className="max-w-6xl mx-auto py-16 px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={sectionAnim}
        >
          <div className="text-center mb-10">
            <Eyebrow tone="clay">See it live</Eyebrow>
            <h3
              className="mt-2 text-3xl md:text-4xl font-bold text-[var(--chalk)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Football in Action
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="grid grid-cols-2 gap-4">
              {media.map((m, i) => (
                <div key={i} className="shadow-md overflow-hidden">
                  <img
                    src={m}
                    alt={`ECN sports programme moment ${i + 1}`}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="relative shadow-2xl bg-[var(--chalk)] flex items-center justify-center">
              <video
                src={footballVideo}
                controls
                playsInline
                className="w-full h-full max-h-[420px] object-cover"
              />
            </div>
          </div>

          <p className="text-center text-lg text-[var(--ink)]/75 max-w-3xl mx-auto mt-8">
            Every match is more than a game — it's a classroom where young people learn
            resilience, teamwork and leadership.
          </p>
        </motion.section>

        {/* IMPACT COUNTERS */}
        <motion.section
          className="relative -mx-0 px-6 py-16 bg-[var(--chalk)] overflow-hidden"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={sectionAnim}
        >
          <Grain />
          <div className="relative z-10 max-w-6xl mx-auto text-center mb-10">
            <Eyebrow>By the numbers</Eyebrow>
            <h3
              className="mt-2 text-3xl md:text-4xl font-bold text-[var(--paper)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Impact Through Sports
            </h3>
            <p className="max-w-3xl mx-auto text-[var(--paper)]/75 mt-3">
              Our programmes reach communities across Kenya — building confidence and hope
              through sport.
            </p>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
            {[
              { end: 800, label: "Children Trained" },
              { end: 150, label: "Football Matches Played" },
              { end: 60, label: "Communities Engaged" },
            ].map((s) => (
              <div key={s.label} className="border border-dashed border-[var(--paper)]/25 p-6">
                <CountUp
                  end={s.end}
                  duration={2.5}
                  className="text-4xl md:text-5xl font-bold"
                  style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}
                />
                <p className="mt-2 text-[var(--paper)]/75 text-sm uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* TESTIMONIALS */}
        <motion.section
          className="py-16 px-6 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={sectionAnim}
        >
          <div className="text-center mb-10">
            <Eyebrow tone="clay">From the community</Eyebrow>
            <h3
              className="mt-2 text-3xl md:text-4xl font-bold text-[var(--chalk)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What People Say
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { quote: "Sports keeps our youth active and away from risky behavior.", who: "Parent, Kisumu" },
              {
                quote:
                  "The girls' programme changed how our community sees sport for young women — now more parents support their daughters to play.",
                who: "Coach, Nairobi",
              },
            ].map((t) => (
              <blockquote key={t.who} className="relative bg-white p-6 pl-8 shadow-sm">
                <span aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-2 bg-[var(--gold)]" />
                <p className="text-[var(--ink)]/80 italic leading-relaxed">{t.quote}</p>
                <cite className="block mt-4 font-semibold text-[var(--clay)] not-italic">— {t.who}</cite>
              </blockquote>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="relative px-6 py-16 bg-[var(--clay)] text-[var(--paper)] text-center overflow-hidden"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={sectionAnim}
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-[repeating-linear-gradient(90deg,var(--paper)_0,var(--paper)_10px,transparent_10px,transparent_20px)] opacity-40"
          />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Support Our Sports Programmes
            </h3>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-[var(--paper)]/85">
              Help us reach more young people through sports, mentorship and education.
            </p>

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
        </motion.section>
      </main>

      {showTopBtn && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-[var(--clay)] text-[var(--paper)] p-3 rounded-full shadow-lg hover:brightness-110 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--gold)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}

      <Footer />
    </div>
  );
}
