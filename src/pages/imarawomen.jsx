import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import Footer from "../components/Footer";
import LearningPhoto1 from "../assets/women_empowerment.jpg";
import LearningPhoto2 from "../assets/learning2.jpg";
import { Helmet } from "react-helmet";

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

const ACCENTS = ["var(--clay)", "var(--sky)", "var(--gold)"];

export default function Imarawomen() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

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
        <title>Elimu Community Network | ECN Africa</title>
        <meta
          name="description"
          content="Learn about Elimu Community Network (ECN Africa), our mission, vision, and how we empower communities through education, innovation, and sustainable programs."
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
          className="absolute inset-x-0 bottom-0 h-px bg-[repeating-linear-gradient(90deg,var(--gold)_0,var(--gold)_10px,transparent_10px,transparent_20px)] opacity-40"
        />
        <motion.h1
          className="relative z-10 text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "var(--font-display)" }}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          IMARA WOMEN: Building Strength through Knowledge and Innovation
        </motion.h1>
        <p className="relative z-10 max-w-3xl mx-auto text-lg text-[var(--paper)]/85 mb-6">
          Imara means “strong” or “resilient” in Swahili
        </p>
        <motion.blockquote
          className="relative z-10 italic text-[var(--gold)] text-center text-xl font-medium"
          style={{ fontFamily: "var(--font-display)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          “When you educate a woman, you educate a nation.” — African Proverb
        </motion.blockquote>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto py-16 px-6 space-y-16 text-[var(--ink)]/80 bg-[var(--paper)]">
        {/* Introduction */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="leading-relaxed">
            At Elimu Community Network (ECN), we believe that empowering women through education and innovation is key to unlocking the full potential of families and communities. Our Women Empowerment Programme integrates economic inclusion, psychosocial wellbeing, and continuous learning to create sustainable change from the inside out.
          </p>
          <p className="leading-relaxed">
            This initiative recognizes that a woman’s empowerment journey begins with self-discovery, is strengthened through education, and matures through active participation in the local economy. When women are equipped with knowledge, confidence, and opportunity, they become drivers of transformation by nurturing resilient families and building stronger, more equitable communities.
          </p>
        </motion.div>

        {/* Key Pillars */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2
            className="text-2xl font-semibold text-[var(--chalk)] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Three Strategic Pillars
          </h2>

          <div className="space-y-6">
            {/* Pillar 1 */}
            <div className="relative p-6 pl-9 bg-white shadow-sm">
              <SpiralEdge />
              <span aria-hidden="true" className="absolute top-0 left-8 right-0 h-1.5" style={{ backgroundColor: ACCENTS[0] }} />
              <h3
                className="text-xl font-semibold mb-2 text-[var(--chalk)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Psychosocial and Family Wellbeing
              </h3>
              <p className="leading-relaxed">
                Our approach begins with the woman; her mind, emotions, and relationships. We provide mental health and psychosocial support (MHPSS) through group therapy sessions, peer mentorship, and family-focused counselling. These interventions build self-worth, confidence, and emotional resilience essential for leadership, learning, and entrepreneurship. Families eventually support vulnerable children under foster-care arrangements.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="relative p-6 pl-9 bg-white shadow-sm">
              <SpiralEdge />
              <span aria-hidden="true" className="absolute top-0 left-8 right-0 h-1.5" style={{ backgroundColor: ACCENTS[1] }} />
              <h3
                className="text-xl font-semibold mb-2 text-[var(--chalk)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Entrepreneurship & Innovation
              </h3>
              <p className="leading-relaxed mb-3">
                At the heart of the programme lies a learning-based model linking education directly with income generation. Through structured trainings, women acquire practical skills in entrepreneurship, innovation, and financial literacy.
              </p>
              <ol className="list-decimal pl-6 space-y-3 leading-relaxed">
                <li>
                  <span className="font-semibold">Village Savings and Loan Associations (VSLA):</span> Women form self-managed savings and lending groups that promote financial inclusion, mutual accountability, and community solidarity. Each group saves regularly, issues small loans for income-generating activities, and reinvests in local opportunities.
                </li>
                <li>
                  <span className="font-semibold">Microenterprise and Innovation Training:</span> Women receive practical business education on idea generation, market research, cost management, product diversification, and digital literacy. Emphasis is placed on identifying local problems and creating scalable, sustainable solutions.
                </li>
                <li>
                  <span className="font-semibold">Business Incubation and Peer Mentorship:</span> ECN supports emerging women entrepreneurs through mentorship, market access, and partnerships. Peer learning circles encourage experience-sharing and co-creation of new business models.
                </li>
              </ol>
            </div>

            {/* Pillar 3 */}
            <div className="relative p-6 pl-9 bg-white shadow-sm">
              <SpiralEdge />
              <span aria-hidden="true" className="absolute top-0 left-8 right-0 h-1.5" style={{ backgroundColor: ACCENTS[2] }} />
              <h3
                className="text-xl font-semibold mb-2 text-[var(--chalk)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Active Participation in Local Economies & Community Leadership
              </h3>
              <p className="leading-relaxed">
                Empowered women are not just beneficiaries—they are leaders and innovators in their local economies. The programme promotes participation in local markets, cooperatives, and community enterprises, amplifying women’s voices in economic decision-making. Through continuous education, women move beyond subsistence livelihoods toward productive, dignified, and sustainable engagement in their communities.
              </p>
              <p className="mt-2 italic text-[var(--clay)]">“When women rise, families prosper and communities flourish.”</p>
            </div>
          </div>
        </motion.div>

        {/* Learning in Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-2xl font-semibold text-[var(--chalk)] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Role of Education
          </h2>
          <p className="leading-relaxed mb-6">
            Education equips women with knowledge, skills, and the mindset to innovate, collaborate, and lead. Functional literacy classes, financial education, and leadership training foster lifelong learning and personal growth.
          </p>

          <h2
            className="text-2xl font-semibold text-[var(--chalk)] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Distinctive Approach
          </h2>
          <p className="leading-relaxed mb-6">
            Each woman receives personalized support within group-based learning environments. This holistic ecosystem nurtures women’s wellbeing, family development, and community resilience sustainably.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="relative bg-white p-3 pb-8 shadow-[0_15px_35px_-12px_rgba(0,0,0,0.4)] -rotate-1">
              <TapeCorner />
              <img
                src={LearningPhoto1}
                alt="Women learning digital skills during mentorship"
                className="object-cover h-64 md:h-72 w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative bg-white p-3 pb-8 shadow-[0_15px_35px_-12px_rgba(0,0,0,0.4)] rotate-1">
              <TapeCorner />
              <img
                src={LearningPhoto2}
                alt="Youth training and mentorship"
                className="object-cover h-64 md:h-72 w-full transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <h3
            className="text-xl font-semibold text-[var(--chalk)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Call to Action
          </h3>
          <ol className="list-decimal pl-6 space-y-2 leading-relaxed">
            <li>Learn, save, and grow with others.</li>
            <li>Sponsor a woman-led business or training.</li>
            <li>Collaborate to expand access to women’s education and financial inclusion.</li>
          </ol>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="relative bg-white p-6 pl-8 shadow-sm"
        >
          <span aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-2 bg-[var(--gold)]" />
          <p className="italic text-[var(--chalk)] text-lg" style={{ fontFamily: "var(--font-display)" }}>
            “Education is not preparation for life; education is life itself — and Nafasi Learning is where opportunity meets purpose.”
          </p>
          <p className="text-right font-semibold text-[var(--clay)] mt-2">– Elimu Community Network (ECN)</p>
        </motion.div>

        {/* Join Movement CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3
            className="text-xl font-semibold text-[var(--chalk)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Join the Nafasi Learning Movement
          </h3>
          <p className="mb-6">
            Whether you are a student, mentor, or partner — your contribution can help shape a generation of thinkers, creators, and leaders.
          </p>
          <Link
            to="/contact"
            aria-label="Get involved with Imara Women program"
            className="inline-block bg-[var(--clay)] hover:brightness-110 text-[var(--paper)] px-6 py-3 font-semibold shadow transition duration-300"
          >
            Get Involved
          </Link>
        </motion.div>
      </section>

      {/* Scroll to Top */}
      {showTopBtn && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 bg-[var(--clay)] text-[var(--paper)] p-3 rounded-full shadow-lg hover:brightness-110 transition duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--gold)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ArrowUp size={24} />
        </motion.button>
      )}

      <Footer />
    </div>
  );
}
