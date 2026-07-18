import { Suspense, lazy, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  BookOpen,
  Globe2,
  HeartHandshake,
  Mail,
  Send,
  CheckCircle,
} from "lucide-react";

const Footer = lazy(() => import("../components/Footer"));

/* ------------------------------------------------------------------ */
/*  Shared design tokens — kept identical to Home.jsx / Programs.jsx / */
/*  Stories.jsx. Worth centralizing into /components/theme.js now that */
/*  a fourth page needs it.                                            */
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

const ACCENTS = ["var(--clay)", "var(--gold)", "var(--sky)", "var(--chalk)"];

const whatWeDo = [
  {
    title: "Education Programmes",
    desc: "Providing access to inclusive, quality education for vulnerable children.",
    Icon: BookOpen,
  },
  {
    title: "Mentorship",
    desc: "Guiding youth with skills, confidence, and leadership development.",
    Icon: HeartHandshake,
  },
  {
    title: "Community Innovation",
    desc: "Building sustainable solutions with local communities.",
    Icon: Globe2,
  },
];

const values = ["Courage", "Integrity", "Creativity", "Collaboration"];

export default function About() {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [impactStats, setImpactStats] = useState({ children: 0, youth: 0, women: 0 });

  // Animate stats counting up
  useEffect(() => {
    const duration = 2000;
    const targetStats = { children: 5000, youth: 3000, women: 2000 };
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setImpactStats({
        children: Math.floor(progress * targetStats.children),
        youth: Math.floor(progress * targetStats.youth),
        women: Math.floor(progress * targetStats.women),
      });
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  const scrollToWhoWeAre = () => {
    document.getElementById("who-we-are")?.scrollIntoView({ behavior: "smooth" });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    const name = formData.get("name");
    setUserName(name);

    formData.append("access_key", "74a6f829-9dac-4e22-bf1a-bcd3e916f4d7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        event.target.reset();
        setShowModal(true);
        setTimeout(() => setShowModal(false), 5000);
      } else {
        alert("Submission failed. Check your access key or form setup.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Network error — check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col motion-reduce:[&_*]:!transition-none motion-reduce:[&_*]:!animate-none"
      style={{ ...THEME_VARS, fontFamily: "var(--font-body)", color: "var(--ink)" }}
    >
      <Helmet>
        <title>Elimu Community Network | ECN Africa</title>
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
      <header className="relative w-full overflow-hidden bg-[var(--chalk)] pt-24 pb-20 md:pt-28 md:pb-24 text-center">
        <Grain />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-[repeating-linear-gradient(90deg,var(--gold)_0,var(--gold)_10px,transparent_10px,transparent_20px)] opacity-40"
        />

        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <Eyebrow>Our story</Eyebrow>

          <h1
            className="mt-3 text-3xl md:text-5xl font-bold leading-tight text-[var(--paper)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Empowering Communities Through{" "}
            <span className="relative inline-block">
              Education
              <ChalkUnderline className="absolute left-0 -bottom-1" />
            </span>
          </h1>

          <p className="mt-6 text-[var(--paper)]/80 text-lg leading-relaxed">
            Elimu Community Network (ECN) is transforming lives by equipping children and
            families with the tools to build a sustainable future.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              to="/donate"
              className="bg-[var(--clay)] text-[var(--paper)] font-semibold px-8 py-3 shadow-lg hover:brightness-110 transition inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--chalk)] focus:ring-[var(--gold)]"
            >
              Support Our Work <span>→</span>
            </Link>
            <button
              onClick={scrollToWhoWeAre}
              className="border-2 border-dashed border-[var(--gold)] text-[var(--gold)] px-6 py-3 hover:bg-[var(--gold)]/10 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--chalk)] focus:ring-[var(--gold)]"
            >
              Learn More
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-[var(--paper)]">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
          {/* ---------------------------- IMPACT STRIP ---------------------------- */}
          <section className="grid md:grid-cols-3 gap-6 text-center -mt-32 relative z-10">
            {[
              { label: "Children Reached", value: impactStats.children },
              { label: "Youth Empowered", value: impactStats.youth },
              { label: "Women Supported", value: impactStats.women },
            ].map((s) => (
              <div key={s.label} className="bg-white shadow-xl p-6 border-t-4 border-[var(--gold)]">
                <h3
                  className="text-3xl font-bold text-[var(--clay)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.value.toLocaleString()}+
                </h3>
                <p className="text-[var(--ink)]/70 mt-1">{s.label}</p>
              </div>
            ))}
          </section>

          {/* ---------------------------- WHO WE ARE ---------------------------- */}
          <section id="who-we-are" className="grid md:grid-cols-2 gap-10 items-center scroll-mt-24">
            <div>
              <Eyebrow tone="clay">Who we are</Eyebrow>
              <h2
                className="mt-2 text-2xl md:text-3xl font-bold text-[var(--chalk)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Founded in Kenya, built for Africa
              </h2>
              <p className="mt-5 text-[var(--ink)]/80 leading-relaxed">
                Founded in 2012, Elimu Community Network (ECN) is a Kenyan NGO dedicated to
                safeguarding the rights of vulnerable children and empowering families through
                education and innovation.
              </p>
            </div>
            <div className="relative bg-white p-6 pl-8 shadow-md -rotate-1">
              <span aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-2 bg-[var(--sky)]" />
              <h3
                className="font-semibold text-[var(--chalk)] mb-2 text-lg"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our Vision
              </h3>
              <p className="text-[var(--ink)]/80 leading-relaxed">
                A future where every child has access to quality education and the opportunity
                to thrive.
              </p>
            </div>
          </section>

          {/* ---------------------------- WHY IT MATTERS ---------------------------- */}
          <section className="relative -mx-6 px-6 py-14 bg-[var(--chalk)] overflow-hidden">
            <Grain />
            <div className="relative z-10 max-w-3xl mx-auto">
              <Eyebrow>Why it matters</Eyebrow>
              <h2
                className="mt-2 text-2xl md:text-3xl font-bold text-[var(--paper)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                The cycle we're here to break
              </h2>
              <p className="mt-5 text-[var(--paper)]/80 leading-relaxed">
                Millions of children still lack access to quality education. Without
                intervention, poverty and inequality continue across generations. ECN works at
                the grassroots level to break this cycle — creating real, lasting change.
              </p>
            </div>
          </section>

          {/* ---------------------------- WHAT WE DO ---------------------------- */}
          <section>
            <div className="text-center mb-12">
              <Eyebrow tone="clay">How we work</Eyebrow>
              <h2
                className="mt-2 text-2xl md:text-3xl font-bold text-[var(--chalk)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What We Do
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {whatWeDo.map(({ title, desc, Icon }, i) => (
                <div
                  key={title}
                  className={`relative bg-white pl-8 pr-6 py-7 shadow-sm ${
                    i % 2 === 0 ? "md:-rotate-1" : "md:rotate-1"
                  }`}
                >
                  <SpiralEdge />
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-8 right-6 h-1.5"
                    style={{ backgroundColor: ACCENTS[i % ACCENTS.length] }}
                  />
                  <Icon
                    className="mb-3"
                    size={28}
                    style={{ color: ACCENTS[i % ACCENTS.length] }}
                    aria-hidden="true"
                  />
                  <h3
                    className="font-semibold text-[var(--chalk)] mb-2 text-lg"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-[var(--ink)]/70 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ---------------------------- MISSION ---------------------------- */}
          <section className="relative -mx-6 px-6 py-16 bg-[var(--clay)] text-center overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-[repeating-linear-gradient(90deg,var(--paper)_0,var(--paper)_10px,transparent_10px,transparent_20px)] opacity-40"
            />
            <div className="relative z-10 max-w-2xl mx-auto">
              <Eyebrow>Our mission</Eyebrow>
              <p
                className="mt-4 text-2xl md:text-3xl text-[var(--paper)] leading-snug font-medium"
                style={{ fontFamily: "var(--font-display)" }}
              >
                To make education a catalyst for sustainable development — transforming
                challenges into opportunities and empowering Africa to design her own future.
              </p>
            </div>
          </section>

          {/* ---------------------------- APPROACH ---------------------------- */}
          <section className="max-w-3xl">
            <Eyebrow tone="clay">Our approach</Eyebrow>
            <h2
              className="mt-2 text-2xl md:text-3xl font-bold text-[var(--chalk)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Rooted in local knowledge
            </h2>
            <p className="mt-5 text-[var(--ink)]/80 leading-relaxed">
              We listen to communities, learn collaboratively, and lead with compassion. Our
              work is rooted in local knowledge, ensuring sustainable and scalable impact.
            </p>
          </section>

          {/* ---------------------------- VALUES ---------------------------- */}
          <section>
            <Eyebrow>What we stand for</Eyebrow>
            <h2
              className="mt-2 mb-8 text-2xl md:text-3xl font-bold text-[var(--chalk)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our Core Values
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {values.map((value, i) => (
                <div
                  key={value}
                  className="bg-white p-5 text-center shadow-sm border-b-4"
                  style={{ borderColor: ACCENTS[i % ACCENTS.length] }}
                >
                  <p
                    className="font-semibold text-[var(--chalk)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ---------------------------- GET IN TOUCH ---------------------------- */}
          <section className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <Eyebrow tone="clay">Get in touch</Eyebrow>
              <h2
                className="mt-2 text-2xl md:text-3xl font-bold text-[var(--chalk)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Send us a message
              </h2>
              <p className="mt-4 text-[var(--ink)]/70 leading-relaxed max-w-sm">
                Questions about our programmes, partnerships, or volunteering? Drop us a note
                and our team will get back to you.
              </p>
              <div className="mt-6 flex items-center gap-2 text-[var(--ink)]/60 text-sm">
                <Mail size={16} aria-hidden="true" />
                <span>education@ecnafrica.org</span>
              </div>
            </div>

            <form onSubmit={onSubmit} className="relative bg-white p-6 md:p-8 shadow-md space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--ink)]/70 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-transparent border-b-2 border-[var(--chalk)]/20 focus:border-[var(--gold)] outline-none py-2 transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--ink)]/70 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-transparent border-b-2 border-[var(--chalk)]/20 focus:border-[var(--gold)] outline-none py-2 transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--ink)]/70 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-transparent border-b-2 border-[var(--chalk)]/20 focus:border-[var(--gold)] outline-none py-2 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 bg-[var(--chalk)] text-[var(--paper)] font-semibold px-6 py-3 shadow hover:brightness-110 transition disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--gold)]"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={16} aria-hidden="true" />
              </button>
            </form>
          </section>

          {/* ---------------------------- CTA ---------------------------- */}
          <section className="text-center space-y-4">
            <Eyebrow>Join us</Eyebrow>
            <h2
              className="text-2xl md:text-3xl font-bold text-[var(--chalk)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Be Part of the Change
            </h2>
            <p className="text-[var(--ink)]/70 max-w-xl mx-auto">
              Join us in transforming lives through education. Your support creates lasting
              impact.
            </p>

            <Link
              to="/donate"
              className="bg-[var(--clay)] text-[var(--paper)] font-semibold px-8 py-3 shadow-lg hover:brightness-110 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--gold)]"
            >
              Donate Now <span>→</span>
            </Link>
          </section>
        </div>
      </main>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[var(--ink)]/50 flex justify-center items-center z-50 px-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[var(--paper)] shadow-lg p-8 w-full max-w-sm text-center border-2 border-dashed border-[var(--gold)]"
            >
              <CheckCircle size={56} className="text-[var(--gold)] mx-auto mb-4" aria-hidden="true" />
              <h3
                className="text-2xl font-semibold text-[var(--chalk)] mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Thank You{userName ? `, ${userName}` : ""}!
              </h3>
              <p className="text-[var(--ink)]/70 mb-6">
                Your message has been received successfully.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-[var(--chalk)] text-[var(--paper)] px-5 py-2 font-semibold hover:brightness-110 transition focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <Suspense
        fallback={<div className="text-center py-4 text-[var(--ink)]/60">Loading footer...</div>}
      >
        <Footer />
      </Suspense>
    </div>
  );
}
