import React, { useState, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Footer = lazy(() => import("../components/Footer"));

export default function Contact() {
  const [selectedJob, setSelectedJob] = useState(null);

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
      apply: "Send your CV and cover letter to hr@ecnafrica.org with the subject line ‘ICT Officer Application’. Only shortlisted candidates will be contacted.",
    },
    {
      id: 2,
      title: "Program Coordinator – Education",
      location: "Kakamega, Kenya",
      type: "12-month Contract",
      closingDate: "CLOSED",
      salaryRange: "KES  (Depending on experience)",
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
      apply: "Interested applicants should submit a cover letter and CV to careers@ecnafrica.org by 15th December 2025.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex flex-col">
      {/* --- Page Header --- */}
      <header className="text-center mt-20 mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 tracking-tight">
          Where We Work
        </h1>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
          We partner with communities across Kenya to create impact that is local,
          sustainable, and community-driven. Explore our regional presence and
          opportunities to join our mission.
        </p>
      </header>

      {/* --- Content Layout --- */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 px-6 lg:px-16 pb-20 mx-auto w-full max-w-7xl">
        {/* --- Main Section --- */}
        <section className="flex-1 bg-white/70 backdrop-blur-md shadow-xl rounded-3xl p-10 border border-green-100">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6 text-center">
            Our Regional Hubs
          </h2>
          <ul className="text-gray-700 text-lg list-disc list-inside space-y-3">
            <li>
              <strong>Nairobi Region:</strong> Nairobi, Kajiado, Machakos, Kiambu
            </li>
            <li>
              <strong>Coastal Region:</strong> Mombasa, Kilifi, Kwale, Tana River
            </li>
            <li>
              <strong>Western Region:</strong> Busia, Kakamega, Vihiga, Kisumu
            </li>
          </ul>

          {/* --- Contact Card --- */}
          <div className="mt-12 bg-green-700 text-white rounded-3xl p-8 md:p-10 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-lg font-medium">ECN – Education Africa</p>
            <p className="text-sm mt-1">P.O BOX 1234-00200, Nairobi, Kenya</p>
            <p className="mt-2">
              Tel:{" "}
              <a href="tel:+254724178817" className="hover:underline">
                +254 724 178 817
              </a>{" "}
              /{" "}
              <a href="tel:+254720576794" className="hover:underline">
                +254 720 576 794
              </a>
            </p>
            <p className="mt-2">
              Email:{" "}
              <a
                href="mailto:education@ecnafrica.org"
                className="underline hover:text-green-200"
              >
                education@ecnafrica.org
              </a>
            </p>
          </div>
        </section>

        {/* --- Jobs Section --- */}
        <aside className="w-full lg:w-1/3 bg-white/70 backdrop-blur-md shadow-xl rounded-3xl border border-green-100 p-8">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
            Job Opportunities
          </h2>
          <div className="flex flex-col gap-6">
            {jobListings.map((job) => (
              <motion.div
                key={job.id}
                whileHover={{ scale: 1.02 }}
                className="border border-green-100 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-green-700 mb-1">
                  {job.title}
                </h3>
                <p className="text-gray-600 text-sm mb-1">
                  {job.location} | {job.type}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  {job.salaryRange}
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  Closing Date: <strong>{job.closingDate}</strong>
                </p>
                <p className="text-gray-700 text-sm mt-2 line-clamp-3">
                  {job.aboutRole}
                </p>
                <button
                  onClick={() => setSelectedJob(job)}
                  className="mt-4 w-full bg-green-700 text-white py-2 rounded-xl hover:bg-green-800 transition font-medium"
                >
                  See Details
                </button>
              </motion.div>
            ))}
          </div>
        </aside>
      </div>

      {/* --- Job Details Modal --- */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white rounded-3xl shadow-2xl p-8 w-full max-w-2xl overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-bold text-green-700 mb-2">
                {selectedJob.title}
              </h3>
              <p className="text-gray-600 text-sm mb-1">
                {selectedJob.location} • {selectedJob.type}
              </p>
              <p className="text-gray-600 text-sm mb-1">
                {selectedJob.salaryRange}
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Closing Date: {selectedJob.closingDate}
              </p>

              <p className="text-gray-700 mb-4">{selectedJob.aboutRole}</p>

              <h4 className="font-semibold text-green-700 mb-2">
                Key Responsibilities
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                {selectedJob.responsibilities.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>

              <h4 className="font-semibold text-green-700 mb-2">
                Qualifications
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                {selectedJob.qualifications.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>

              <h4 className="font-semibold text-green-700 mb-2">How to Apply</h4>
              <p className="text-gray-700 leading-relaxed">
                {selectedJob.apply}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Footer --- */}
      <Suspense
        fallback={<div className="text-center py-4 text-gray-500">Loading...</div>}
      >
        <Footer />
      </Suspense>
    </div>
  );
}
