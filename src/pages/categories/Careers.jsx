import React, { useState, useEffect, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Footer = lazy(() => import("../../components/Footer"));

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);

  // Sample job listings
  const jobListings = [
    {
      id: 1,
      title: "ICT Officer",
      location: "Nairobi, Kenya",
      type: "Full-Time",
      closingDate: "CLOSED",
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
      closingDate: "CLOSED",
      salaryRange: "KES (Depending on experience)",
      aboutRole:
        "The Program Coordinator will lead education initiatives in Western Kenya, manage field officers, oversee budgets, and strengthen school partnerships.",
      responsibilities: [
        "Coordinate implementation of education programs across counties.",
        "Supervise field staff and ensure timely project reporting.",
        "Monitor progress and evaluate impact against project goals.",
        "Engage with partners, schools, and community stakeholders.",
      ],
      qualifications: [
        "Bachelor’s degree in Education, Social Sciences, or related field.",
        "At least 4 years’ experience managing community education projects.",
        "Excellent leadership, coordination, and reporting skills.",
        "Ability to work independently and travel within the region.",
      ],
      apply:
        "Interested applicants should submit a cover letter and CV to hr@ecnafrica.org by 15th December 2024.",
    },
  ];

  // Lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedJob ? "hidden" : "auto";
  }, [selectedJob]);

  // Close modal on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedJob(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* Page Header */}
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

        {/* Hiring Notice */}
        <motion.div
          className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 max-w-2xl mx-auto rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-md">
            <strong>Notice:</strong> We’re currently not hiring. Please keep checking this page for any upcoming opportunities with ECN Africa.
          </p>
        </motion.div>
      </header>


      {/* Job Listings Grid */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-16 pb-20 max-w-7xl mx-auto">
        {jobListings?.length > 0 ? (
          jobListings.map((job) => (
            <motion.div
              key={job.id}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
              }}
              className="bg-white rounded-3xl shadow-md p-6 flex flex-col justify-between transition-all"
            >
              <div>
                <h3 className="text-xl font-bold text-green-700 mb-2">{job.title}</h3>
                <p className="text-gray-600 text-sm mb-1">{job.location} | {job.type}</p>
                <p className="text-gray-600 text-sm mb-2">{job.salaryRange}</p>
                <p className="text-gray-700 text-sm line-clamp-4">{job.aboutRole}</p>
              </div>
              <button
                onClick={() => setSelectedJob(job)}
                className="mt-4 bg-green-700 text-white py-2 rounded-xl hover:bg-green-800 transition font-medium"
              >
                See Details
              </button>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">No job listings available.</p>
        )}
      </main>

      {/* Job Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="job-title"
            aria-describedby="job-description"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white rounded-3xl shadow-2xl p-8 w-full max-w-2xl overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                <X size={24} />
              </button>

              <h3 id="job-title" className="text-2xl font-bold text-green-700 mb-2">
                {selectedJob.title}
              </h3>
              <p className="text-gray-600 text-sm mb-1">{selectedJob.location} • {selectedJob.type}</p>
              <p className="text-gray-600 text-sm mb-1">{selectedJob.salaryRange}</p>
              <p className="text-gray-600 text-sm mb-4">
                Closing Date: <strong>{selectedJob.closingDate}</strong>
              </p>
              <p id="job-description" className="text-gray-700 mb-4">{selectedJob.aboutRole}</p>

              <h4 className="font-semibold text-green-700 mb-2">Key Responsibilities</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                {selectedJob.responsibilities.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>

              <h4 className="font-semibold text-green-700 mb-2">Qualifications</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                {selectedJob.qualifications.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>

              <h4 className="font-semibold text-green-700 mb-2">How to Apply</h4>
              <p className="text-gray-700 leading-relaxed">{selectedJob.apply}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <Suspense fallback={<div className="text-center py-4 text-gray-500">Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
