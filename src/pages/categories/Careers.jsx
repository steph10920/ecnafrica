import React, { useState, useEffect, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = lazy(() => import("../../components/Footer"));

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobListings = [
    {
      id: 1,
      title: "ICT Officer",
      location: "Nairobi, Kenya",
      type: "Full-Time",
      closingDate: "2024-11-20",// Changed to future date
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
        "Bachelor’s degree in IT, Computer Science, or related field.",
        "3+ years of IT support or systems admin experience.",
        "Knowledge of networking, cloud services, and database management.",
        "Strong problem-solving and communication skills.",
      ],
      apply:
        "Send your CV and cover letter to hr@ecnafrica.org with the subject line ‘ICT Officer Application’. Only shortlisted candidates will be contacted.",
    },
    {
      id: 2,
      title: "Program Coordinator – Education",
      location: "Kakamega, Kenya",
      type: "12-month Contract",
      closingDate: "2024-12-20",// Changed to future date
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
        "Bachelor’s degree in Education, Social Sciences, or related field.",
        "4+ years’ experience managing community education programs.",
        "Strong coordination and leadership skills.",
        "Ability to travel across counties.",
      ],
      apply:
        "Submit a cover letter and CV to hr@ecnafrica.org by 15th December 2024.",
    },
  ];

  // Calculate badge: days left or CLOSED
  const getBadge = (dateStr) => {
    if (dateStr === "CLOSED") return { text: "CLOSED", color: "bg-gray-400" };
    const today = new Date();
    const closing = new Date(dateStr);
    const diffTime = closing - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays <= 0) return { text: "CLOSED", color: "bg-gray-400" };
    return { text: `${diffDays} day${diffDays > 1 ? "s" : ""} left`, color: "bg-green-700" };
  };

  // Format date nicely
  const formatDate = (dateStr) => {
    if (dateStr === "CLOSED") return "Position Closed";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  };

  useEffect(() => {
    document.body.style.overflow = selectedJob ? "hidden" : "auto";
  }, [selectedJob]);

  useEffect(() => {
    const f = (e) => e.key === "Escape" && setSelectedJob(null);
    window.addEventListener("keydown", f);
    return () => window.removeEventListener("keydown", f);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-green-100">

      {/* HEADER */}
      <header className="text-center mt-20 mb-12 px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-green-700"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Careers at ECN Africa
        </motion.h1>

        <motion.p
          className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Explore open positions and join our mission to make education
          sustainable and community-driven across Kenya.
        </motion.p>

        <motion.div
          className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 max-w-2xl mx-auto rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p>
            <strong>Notice:</strong> We’re currently <strong>NOT</strong> hiring. Please keep 
            checking this page for future opportunities with ECN Africa.
          </p>
        </motion.div>
      </header>

      {/* OPEN POSITIONS */}
      <section className="px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Open Positions</h2>
      </section>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-16 pb-20 max-w-7xl mx-auto">
        {jobListings.map((job, i) => {
          const badge = getBadge(job.closingDate);
          const isClosed = badge.text === "CLOSED";
          return (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative bg-white rounded-3xl shadow-md p-6 hover:shadow-xl transition"
            >
              {/* Badge */}
              <span className={`absolute top-4 right-4 text-white text-xs font-semibold px-2 py-1 rounded-full ${badge.color}`}>
                {badge.text}
              </span>

              <h3 className="text-xl font-bold text-green-700 mb-2">{job.title}</h3>
              <p className="text-gray-600 text-sm mb-1">{job.location} • {job.type}</p>
              <p className="text-gray-600 text-sm mb-1">{job.salaryRange}</p>
              <p className="text-gray-500 text-xs mb-2">📅 Closing Date: {formatDate(job.closingDate)}</p>
              <p className="text-gray-700 mt-3 line-clamp-3">{job.aboutRole}</p>

              <button
                onClick={() => setSelectedJob(job)}
                className={`mt-5 px-4 py-2 rounded-full transition ${isClosed ? "bg-gray-400 text-white cursor-not-allowed" : "bg-green-700 text-white hover:bg-green-800"}`}
                disabled={isClosed}
              >
                {isClosed ? "Position Closed" : "See Details"}
              </button>
            </motion.div>
          );
        })}
      </main>

      {/* JOB MODAL */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white rounded-3xl shadow-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                <X size={24} />
              </button>

              <h3 className="text-2xl font-bold text-green-700">{selectedJob.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{selectedJob.location} • {selectedJob.type}</p>
              <p className="text-gray-600 text-sm">{selectedJob.salaryRange}</p>
              <p className="text-gray-500 text-xs mt-1">📅 Closing Date: {formatDate(selectedJob.closingDate)}</p>
              <p className="text-gray-700 mt-4">{selectedJob.aboutRole}</p>

              <h4 className="font-semibold text-green-700 mt-6 mb-2">Key Responsibilities</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {selectedJob.responsibilities.map((task, idx) => <li key={idx}>{task}</li>)}
              </ul>

              <h4 className="font-semibold text-green-700 mt-6 mb-2">Qualifications</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {selectedJob.qualifications.map((q, idx) => <li key={idx}>{q}</li>)}
              </ul>

              <h4 className="font-semibold text-green-700 mt-6 mb-2">How to Apply</h4>
              <p className="text-gray-700">{selectedJob.apply}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* TALENT POOL */}
      <section className="bg-white py-16 px-6 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700">Join Our Talent Pool</h2>
          <p className="mt-3 text-gray-700">Not seeing a role that fits you? Sign up to be notified when new opportunities open.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <input type="email" placeholder="Enter your email address" className="px-4 py-3 rounded-full border border-gray-300 w-full sm:w-80"/>
            <button className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition">Join Talent Pool</button>
          </div>
        </div>
      </section>

      {/* VOLUNTEER */}
      <section className="py-20 px-6 bg-green-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700">Volunteer With Us</h2>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            We welcome passionate individuals who want to contribute to community learning,
            environmental sustainability, and youth empowerment.  
            To volunteer, kindly send your <strong>CV and COVER LETTER</strong> to <strong>education@ecnafrica.org</strong> with the 
            subject line <strong>"Volunteer"</strong>.
          </p>
          <br/>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:education@ecnafrica.org?subject=Volunteer" className="bg-white text-green-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-green-50 transition">Volunteer Today</a>
            <Link to="/donate" className="bg-green-900 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-green-950 transition">Support With a Donation</Link>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="text-center py-4">Loading...</div>}><Footer /></Suspense>
    </div>
  );
}
