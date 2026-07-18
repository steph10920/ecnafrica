import { useState, useEffect, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Footer = lazy(() => import("../../components/Footer"));

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

const volunteerMailto = `mailto:education@ecnafrica.org?subject=${encodeURIComponent(
  "Volunteer - [Position Name] - [Your Full Name]"
)}`;

const jobListings = [
  {
    id: 1,
    title: "ICT Officer",
    location: "Nairobi, Kenya",
    type: "Full-Time",
    closingDate: "2024-11-20",
    salaryRange: "KES (Negotiable)",
    aboutRole:
      "We are seeking an experienced ICT Officer to ensure smooth IT operations, manage infrastructure, and enhance digital capacity across our regional offices.",
    responsibilities: [
      "Maintain and troubleshoot computer systems, servers, and networks.",
      "Implement data backup, cybersecurity, and system upgrades.",
      "Provide IT support and user training to staff.",
      "Collaborate with program teams to digitize workflows.",
    ],
    qualifications: [
      "Bachelor's degree in IT, Computer Science, or related field.",
      "3+ years of IT support or systems admin experience.",
      "Knowledge of networking, cloud services, and database management.",
      "Strong problem-solving and communication skills.",
    ],
    apply:
      "Send your CV and cover letter to hr@ecnafrica.org with the subject line 'ICT Officer Application'. Only shortlisted candidates will be contacted.",
  },
  {
    id: 2,
    title: "Program Coordinator – Education",
    location: "Kakamega, Kenya",
    type: "12-month Contract",
    closingDate: "2024-12-20",
    salaryRange: "KES (Depending on experience)",
    aboutRole:
      "The Program Coordinator will lead education initiatives, manage field officers, oversee budgets, and strengthen partnerships within schools.",
    responsibilities: [
      "Coordinate implementation of education programs across counties.",
      "Supervise field staff and ensure timely project reporting.",
      "Monitor project impact and evaluate progress.",
      "Engage with partners, schools, and community stakeholders.",
    ],
    qualifications: [
      "Bachelor's degree in Education, Social Sciences, or related field.",
      "4+ years' experience managing community education programs.",
      "Strong coordination and leadership skills.",
      "Ability to travel across counties.",
    ],
    apply: "Submit a cover letter and CV to hr@ecnafrica.org by 15th December 2024.",
  },
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const getBadge = (dateStr) => {
    if (dateStr === "CLOSED") return { text: "CLOSED", color: "bg-[var(--ink)]/40" };
    const today = new Date();
    const closing = new Date(dateStr);
    const diffTime = closing - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays <= 0) return { text: "CLOSED", color: "bg-[var(--ink)]/40" };
    return { text: `${diffDays} day${diffDays > 1 ? "s" : ""} left`, color: "bg-[var(--clay)]" };
  };

  const formatDate = (dateStr) => {
    if (dateStr === "CLOSED") return "Position Closed";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  };

  useEffect(() => {
    document.body.style.overflow = selectedJob ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedJob]);

  useEffect(() => {
    const f = (e) => e.key === "Escape" && setSelectedJob(null);
    window.addEventListener("keydown", f);
    return () => window.removeEventListener("keydown", f);
  }, []);

  const handleJoinTalentPool = (e) => {
    e.preventDefault();
    if (!email) return;
    window.location.href = `mailto:hr@ecnafrica.org?subject=${encodeURIComponent(
      "Talent Pool Signup"
    )}&body=${encodeURIComponent(`Please add me to the ECN Africa talent pool. My email: ${email}`)}`;
    setJoined(true);
  };

  return (
    <div
      className="min-h-screen flex flex-col motion-reduce:[&_*]:!transition-none motion-reduce:[&_*]:!animate-none"
      style={{ ...THEME_VARS, fontFamily: "var(--font-body)", color: "var(--ink)" }}
    >
      <Helmet>
        <title>Careers | ECN Africa</title>
        <meta
          name="description"
          content="Explore open positions and volunteer opportunities with ECN Africa, and join our talent pool to hear about future roles."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,900&family=Work+Sans:wght@400;500;600;700&family=Caveat:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* HEADER */}
      <header className="relative bg-[var(--chalk)] text-[var(--paper)] pt-24 pb-16 px-6 text-center overflow-hidden">
        <Grain />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-[repeating-linear-gradient(90deg,var(--gold)_0,var(--gold)_10px,transparent_10px,transparent_20px)] opacity-40"
        />
        <div className="relative z-10">
          <Eyebrow>Join the team</Eyebrow>
          <motion.h1
            className="mt-3 text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Careers at{" "}
            <span className="relative inline-block">
              ECN Africa
              <ChalkUnderline className="absolute left-0 -bottom-1" />
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-[var(--paper)]/80 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Explore open positions and join our mission to make education sustainable and
            community-driven across Kenya.
          </motion.p>

          <motion.div
            className="mt-8 relative bg-[var(--paper)] text-[var(--ink)] p-5 pl-8 max-w-2xl mx-auto shadow-lg -rotate-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-2 bg-[var(--gold)]" />
            <p>
              <strong>Notice:</strong> We're currently <strong>NOT</strong> hiring. Please keep
              checking this page for future opportunities with ECN Africa.
            </p>
          </motion.div>
        </div>
      </header>

      {/* OPEN POSITIONS */}
      <main className="flex-1 bg-[var(--paper)]">
        <section className="px-6 max-w-7xl mx-auto pt-16">
          <Eyebrow tone="clay">Current listings</Eyebrow>
          <h2
            className="mt-2 text-3xl font-bold text-[var(--chalk)] mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Open Positions
          </h2>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-16 pb-20 max-w-7xl mx-auto">
          {jobListings.map((job, i) => {
            const badge = getBadge(job.closingDate);
            const isClosed = badge.text === "CLOSED";
            return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative bg-white shadow-sm p-6 hover:shadow-lg transition"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: isClosed ? "var(--ink)" : "var(--clay)", opacity: isClosed ? 0.25 : 1 }}
                />
                <span
                  className={`absolute top-4 right-4 text-white text-xs font-semibold px-2 py-1 rounded-full ${badge.color}`}
                >
                  {badge.text}
                </span>

                <h3
                  className="text-xl font-bold text-[var(--chalk)] mb-2 pr-16"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {job.title}
                </h3>
                <p className="text-[var(--ink)]/60 text-sm mb-1">
                  {job.location} • {job.type}
                </p>
                <p className="text-[var(--ink)]/60 text-sm mb-1">{job.salaryRange}</p>
                <p className="text-[var(--ink)]/50 text-xs mb-3 flex items-center gap-1">
                  <Calendar size={12} aria-hidden="true" /> Closing Date: {formatDate(job.closingDate)}
                </p>
                <p className="text-[var(--ink)]/75 line-clamp-3">{job.aboutRole}</p>

                <button
                  onClick={() => setSelectedJob(job)}
                  className={`mt-5 px-4 py-2 rounded-full transition font-semibold ${
                    isClosed
                      ? "bg-[var(--ink)]/20 text-[var(--ink)]/50 cursor-not-allowed"
                      : "bg-[var(--clay)] text-[var(--paper)] hover:brightness-110"
                  }`}
                  disabled={isClosed}
                >
                  {isClosed ? "Position Closed" : "See Details"}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* JOB MODAL */}
        <AnimatePresence>
          {selectedJob && (
            <motion.div
              className="fixed inset-0 bg-[var(--ink)]/60 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
            >
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="job-modal-title"
                onClick={(e) => e.stopPropagation()}
                className="relative bg-[var(--paper)] shadow-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto border-2 border-dashed border-[var(--gold)]"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
              >
                <button
                  onClick={() => setSelectedJob(null)}
                  aria-label="Close job details"
                  className="absolute top-4 right-4 text-[var(--ink)]/60 hover:text-[var(--chalk)]"
                >
                  <X size={24} />
                </button>

                <h3
                  id="job-modal-title"
                  className="text-2xl font-bold text-[var(--chalk)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {selectedJob.title}
                </h3>
                <p className="text-[var(--ink)]/60 text-sm mt-1">
                  {selectedJob.location} • {selectedJob.type}
                </p>
                <p className="text-[var(--ink)]/60 text-sm">{selectedJob.salaryRange}</p>
                <p className="text-[var(--ink)]/50 text-xs mt-1 flex items-center gap-1">
                  <Calendar size={12} aria-hidden="true" /> Closing Date:{" "}
                  {formatDate(selectedJob.closingDate)}
                </p>
                <p className="text-[var(--ink)]/80 mt-4">{selectedJob.aboutRole}</p>

                <h4
                  className="font-semibold text-[var(--chalk)] mt-6 mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Key Responsibilities
                </h4>
                <ul className="list-disc list-inside text-[var(--ink)]/75 space-y-1">
                  {selectedJob.responsibilities.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>

                <h4
                  className="font-semibold text-[var(--chalk)] mt-6 mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Qualifications
                </h4>
                <ul className="list-disc list-inside text-[var(--ink)]/75 space-y-1">
                  {selectedJob.qualifications.map((q, idx) => (
                    <li key={idx}>{q}</li>
                  ))}
                </ul>

                <h4
                  className="font-semibold text-[var(--chalk)] mt-6 mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  How to Apply
                </h4>
                <p className="text-[var(--ink)]/80">{selectedJob.apply}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* TALENT POOL */}
        <section className="bg-white py-16 px-6 border-t border-[var(--chalk)]/10">
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow tone="clay">Stay in touch</Eyebrow>
            <h2
              className="mt-2 text-3xl font-bold text-[var(--chalk)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Join Our Talent Pool
            </h2>
            <p className="mt-3 text-[var(--ink)]/70">
              Not seeing a role that fits you? Sign up to be notified when new opportunities
              open.
            </p>

            {joined ? (
              <p className="mt-6 text-[var(--clay)] font-semibold">
                Thanks! We'll be in touch when new roles open up.
              </p>
            ) : (
              <form
                onSubmit={handleJoinTalentPool}
                className="mt-6 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <label htmlFor="talent-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="talent-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="px-4 py-3 border-2 border-[var(--chalk)]/15 focus:border-[var(--gold)] outline-none w-full sm:w-80 bg-transparent transition"
                />
                <button
                  type="submit"
                  className="bg-[var(--clay)] text-[var(--paper)] px-6 py-3 font-semibold hover:brightness-110 transition focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                >
                  Join Talent Pool
                </button>
              </form>
            )}
          </div>
        </section>

        {/* VOLUNTEER */}
        <section className="relative py-20 px-6 bg-[var(--chalk)] text-[var(--paper)] overflow-hidden">
          <Grain />
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <Eyebrow>Give your time</Eyebrow>
            <h2
              className="mt-2 text-3xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Volunteer With Us
            </h2>
            <p className="mt-4 text-[var(--paper)]/80 max-w-2xl mx-auto leading-relaxed">
              We welcome passionate individuals who want to contribute to community learning,
              environmental sustainability, and youth empowerment. To volunteer, kindly send
              your <strong>CV and cover letter</strong> to{" "}
              <strong>education@ecnafrica.org</strong> with the subject line{" "}
              <strong>"Volunteer"</strong>.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={volunteerMailto}
                className="bg-[var(--paper)] text-[var(--chalk)] font-semibold px-8 py-3 shadow-lg hover:brightness-95 transition focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
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
      </main>

      <Suspense fallback={<div className="text-center py-4 text-[var(--ink)]/60">Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
