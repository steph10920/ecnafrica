import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import Footer from "../../components/Footer";
import { ArrowUp, TreeDeciduous, Recycle, Sprout, Leaf, Users } from "lucide-react";

import tree1 from "../../assets/environment/trees1.jpg";
import tree2 from "../../assets/environment/trees2.jpg";
import clean1 from "../../assets/environment/clean1.jpg";
import clean2 from "../../assets/environment/clean2.jpg";
import climate1 from "../../assets/environment/climate1.jpg";
import climate2 from "../../assets/environment/climate2.jpg";
import waste1 from "../../assets/environment/waste1.jpg";
import waste2 from "../../assets/environment/waste2.jpg";
import workshop1 from "../../assets/environment/workshop1.jpg";
import workshop2 from "../../assets/environment/workshop2.jpg";
import tree3 from "../../assets/environment/trees3.jpg";
import tree4 from "../../assets/environment/trees4.jpg";

/* ------------------------------------------------------------------ */
/*  Shared design tokens — kept identical to the rest of the site.     */
/*  Worth centralizing into /components/theme.js at this point.        */
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

const ACCENTS = ["var(--clay)", "var(--sky)", "var(--gold)", "var(--chalk)", "var(--clay)"];

const volunteerMailto = `mailto:education@ecnafrica.org?subject=${encodeURIComponent(
  "Volunteer - [Position Name] - [Your Full Name]"
)}`;

export default function Environment() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [openActivity, setOpenActivity] = useState(null);

  const treeImages = [tree1, tree2, tree3, tree4];

  const impactStats = [
    { label: "Trees Planted", value: 1200 },
    { label: "Schools Greened", value: 45 },
    { label: "Community Members Engaged", value: 800 },
    { label: "Clean-up Campaigns", value: 30 },
  ];

  const activityList = [
    {
      text: "Tree planting and greening schools",
      Icon: TreeDeciduous,
      description:
        "We plant trees in schools and community spaces, teaching participants about the importance of urban greenery and biodiversity.",
      images: [tree1, tree2],
    },
    {
      text: "Waste management education & recycling drives",
      Icon: Recycle,
      description:
        "Community workshops and drives to educate on proper waste segregation, recycling, and reducing plastic use.",
      images: [waste1, waste2],
    },
    {
      text: "Climate change awareness & advocacy",
      Icon: Leaf,
      description:
        "Programs to raise awareness on climate change, carbon footprint reduction, and sustainable living practices.",
      images: [climate1, climate2],
    },
    {
      text: "Community clean-ups & action days",
      Icon: Users,
      description:
        "Hands-on clean-up days in local communities to restore rivers, streets, and public spaces.",
      images: [clean1, clean2],
    },
    {
      text: "Eco-literacy youth workshops",
      Icon: Sprout,
      description:
        "Youth-focused workshops to teach environmental literacy, eco-friendly habits, and leadership in sustainability.",
      images: [workshop1, workshop2],
    },
  ];

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-full motion-reduce:[&_*]:!transition-none motion-reduce:[&_*]:!animate-none"
      style={{ ...THEME_VARS, fontFamily: "var(--font-body)", color: "var(--ink)" }}
    >
      <Helmet>
        <title>Environment & Sustainability | ECN Africa</title>
        <meta
          name="description"
          content="ECN Africa empowers communities to restore nature, promote climate awareness, and build a greener, more sustainable future."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,900&family=Work+Sans:wght@400;500;600;700&family=Caveat:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[var(--chalk)]">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center scale-105 brightness-[0.4]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[var(--chalk)]/40" aria-hidden="true" />
        <Grain />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <Eyebrow>Field notes: environment</Eyebrow>
          <h1
            className="mt-3 text-4xl md:text-6xl font-bold text-[var(--paper)] leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Environment &{" "}
            <span className="relative inline-block">
              Sustainability
              <ChalkUnderline className="absolute left-0 -bottom-2" />
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--paper)]/80 max-w-2xl mx-auto mt-6 leading-relaxed">
            Empowering communities to restore nature, promote climate awareness, and build a
            greener future.
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <main className="bg-[var(--paper)]">
        <div className="max-w-7xl mx-auto py-20 px-6 space-y-24">
          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Eyebrow tone="clay">Our vision</Eyebrow>
            <p
              className="mt-4 text-2xl md:text-3xl leading-snug text-[var(--chalk)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A future where environmental sustainability is a shared responsibility — where
              nature and people coexist in balance.
            </p>
          </motion.div>

          {/* Activities Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <Eyebrow>What this looks like</Eyebrow>
              <h2
                className="mt-2 text-3xl md:text-4xl font-bold text-[var(--chalk)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our Key Activities
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-[var(--ink)]/70 leading-relaxed">
                Our environmental activities are hands-on, interactive, and community-driven.
                Each programme teaches practical sustainability skills while bringing people
                together.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activityList.map((item, i) => {
                const isOpen = openActivity === i;
                const panelId = `activity-panel-${i}`;
                return (
                  <div
                    key={item.text}
                    className={`relative bg-white pl-8 pr-5 py-6 shadow-sm hover:shadow-lg transition overflow-hidden ${
                      i % 2 === 0 ? "sm:-rotate-1" : "sm:rotate-1"
                    }`}
                  >
                    <SpiralEdge />
                    <span
                      aria-hidden="true"
                      className="absolute top-0 left-8 right-5 h-1.5"
                      style={{ backgroundColor: ACCENTS[i % ACCENTS.length] }}
                    />

                    <button
                      type="button"
                      onClick={() => setOpenActivity(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="w-full flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] rounded-sm"
                    >
                      <div className="flex items-center gap-4">
                        <motion.div whileHover={{ rotate: 10 }} transition={{ duration: 0.3 }}>
                          <item.Icon
                            className="w-6 h-6"
                            style={{ color: ACCENTS[i % ACCENTS.length] }}
                            aria-hidden="true"
                          />
                        </motion.div>
                        <p className="text-base font-semibold text-[var(--chalk)]">{item.text}</p>
                      </div>
                      <span
                        className="font-bold text-2xl select-none"
                        style={{ color: ACCENTS[i % ACCENTS.length] }}
                        aria-hidden="true"
                      >
                        {isOpen ? "\u2212" : "+"}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                            {item.images.map((img, idx) => (
                              <img
                                key={idx}
                                src={img}
                                alt={`${item.text} ${idx + 1}`}
                                className="object-cover w-full h-40 shadow-sm"
                                loading="lazy"
                              />
                            ))}
                          </div>
                          <p className="mt-4 text-[var(--ink)]/70 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Tree Gallery — presented as taped field photographs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <Eyebrow tone="clay">From the field</Eyebrow>
              <h2
                className="mt-2 text-3xl md:text-4xl font-bold text-[var(--chalk)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Tree Planting Gallery
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {treeImages.map((img, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className={`relative bg-[var(--paper)] p-3 pb-6 shadow-[0_15px_35px_-12px_rgba(0,0,0,0.4)] ${
                    i % 2 === 0 ? "-rotate-2" : "rotate-2"
                  }`}
                >
                  <TapeCorner />
                  <img
                    src={img}
                    alt={`Tree planting ${i + 1}`}
                    className="object-cover w-full h-56"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Impact Section */}
          <section className="relative -mx-6 px-6 py-16 bg-[var(--chalk)] overflow-hidden">
            <Grain />
            <div className="relative z-10 text-center mb-12 max-w-3xl mx-auto">
              <Eyebrow>By the numbers</Eyebrow>
              <h2
                className="mt-2 text-3xl md:text-4xl font-bold text-[var(--paper)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our Environmental Impact
              </h2>
              <p className="mt-4 text-[var(--paper)]/70 text-lg">
                Through partnerships, volunteers, and community engagement, we are making
                measurable progress in environmental restoration.
              </p>
            </div>
            <div className="relative z-10 grid md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
              {impactStats.map((stat) => (
                <div key={stat.label} className="border border-dashed border-[var(--paper)]/25 p-6">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    className="text-4xl font-bold"
                    style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}
                  />
                  <p className="text-sm mt-2 text-[var(--paper)]/70 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative -mx-6 px-6 py-14 bg-[var(--clay)] text-[var(--paper)] text-center overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-[repeating-linear-gradient(90deg,var(--paper)_0,var(--paper)_10px,transparent_10px,transparent_20px)] opacity-40"
            />
            <div className="relative z-10">
              <h3
                className="text-2xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Be Part of the Green Movement
              </h3>
              <p className="mb-8 max-w-2xl mx-auto text-lg text-[var(--paper)]/85">
                Every tree planted and every volunteer effort contributes to a sustainable
                Africa. Join us today and help build a healthier planet.
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
          </section>
        </div>
      </main>

      {/* Scroll to Top */}
      {showScrollTop && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 bg-[var(--clay)] text-[var(--paper)] p-3 rounded-full shadow-lg hover:brightness-110 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--gold)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}

      <Footer />
    </div>
  );
}
