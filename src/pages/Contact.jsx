import React, { useState, Suspense, lazy } from "react";

const Footer = lazy(() => import("../components/Footer"));

export default function Contact() {
  // --- Job listings data ---
  const jobListings = [
    {
      id: 1,
      title: "ICT Officer",
      location: "Nairobi, Kenya",
      type: "Full-Time",
      closingDate: /*"December 15, 2025"*/"closed",
      salaryRange: "KES 70,000 - 120,000 (negotiable)",
      shortDescription:
        "We are seeking a qualified ICT Officer to support our IT infrastructure, ensure network stability, and manage system security.",
      description:
        "The ICT Officer provides technical support across the organization, manages servers/networks, deploys and maintains software, implements security best practices, and supports staff with IT-related issues. The role ensures smooth digital operations across all ECN programs.",
      responsibilities: [
        "Manage and maintain local networks, servers, and cloud services.",
        "Provide day-to-day technical support to staff and troubleshoot hardware/software issues.",
        "Ensure backups, disaster recovery plans, and cybersecurity measures are in place.",
        "Maintain website and basic integrations with third-party services.",
        "Train staff on digital tools, data security, and safe online practices.",
      ],
      qualifications: [
        "Degree or diploma in IT, Computer Science, or related field.",
        "Minimum 2 years of experience in IT support or system administration.",
        "Familiarity with Linux/Windows servers, routers, firewalls, and cloud services.",
        "Good communication skills and ability to train non-technical staff.",
      ],
      benefits:
        "Medical cover, pension contributions, flexible working arrangements, and opportunities for professional development.",
      howToApply:
        "Click Apply to complete the short form and upload your CV (PDF). Only shortlisted candidates will be contacted.",
    },
    {
      id: 2,
      title: "Program Coordinator – Education",
      location: "Kakamega, Kenya",
      type: "12-month Contract",
      closingDate: /*"November 30, 2025",*/"closed",
      salaryRange: "KES 60,000 - 90,000 (depending on experience)",
      shortDescription:
        "The Program Coordinator will oversee community-based education initiatives, manage field officers, and ensure effective reporting.",
      description:
        "The Program Coordinator will lead the design and implementation of ECN’s education projects. They supervise field staff, ensure quality programming, monitor progress against targets, manage stakeholder relationships, and prepare timely reports for donors and leadership.",
      responsibilities: [
        "Plan, implement, and supervise education activities and school-based programs.",
        "Manage and mentor field staff and volunteers.",
        "Monitor program quality and collect data for reporting and learning.",
        "Coordinate with local stakeholders, schools, and government offices.",
        "Support proposal writing and contribute to program improvement.",
      ],
      qualifications: [
        "Bachelor’s degree in Education, Development Studies, or related field.",
        "3+ years of experience managing community education or development programs.",
        "Strong monitoring & evaluation skills and excellent written English.",
        "Ability to travel regularly and work with diverse communities.",
      ],
      benefits:
        "Field allowances, travel reimbursement, training, and opportunities to lead research partnerships.",
      howToApply:
        "Complete the Apply form and upload your CV and a one-page cover letter (PDF). Shortlisted candidates will be notified by email.",
    },
  ];

  const [selectedJob, setSelectedJob] = useState(null);
  const [modalMode, setModalMode] = useState(null); // "details" or "apply"

  const openDetails = (job) => {
    setSelectedJob(job);
    setModalMode("details");
    document.body.style.overflow = "hidden";
  };

  const openApply = (job) => {
    setSelectedJob(job);
    setModalMode("apply");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedJob(null);
    setModalMode(null);
    document.body.style.overflow = "";
  };

  // --- MAIN PAGE ---
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-green-100">
      <main className="flex-1 flex flex-col items-center justify-start px-6 pt-28 text-center">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-6">
          Where We Work
        </h1>
        <p className="max-w-2xl text-gray-700 text-lg leading-relaxed mb-12">
          We reach communities across Kenya through regional hubs that embody
          the diversity, resilience, and creativity of our people. Our regional
          teams collaborate with local leaders, schools, and families to design
          solutions that are rooted in context and driven by compassion.
        </p>

        {/* Regional Hubs */}
        <section className="bg-white shadow-lg rounded-3xl p-8 md:p-12 max-w-3xl w-full border border-green-100 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
            Our Regional Hubs
          </h2>
          <ul className="text-gray-700 text-lg text-left list-disc list-inside space-y-2">
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
        </section>

        {/* JOB LISTINGS */}
        <section className="w-full max-w-6xl mb-16">
          <h2 className="text-3xl font-extrabold text-green-700 mb-8 text-center">
            Job Opportunities
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {jobListings.map((job) => (
              <article
                key={job.id}
                className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 hover:shadow-2xl transition-shadow flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-green-700 mb-2">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 mb-1">
                    <strong>Location:</strong> {job.location}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Type:</strong> {job.type} •{" "}
                    <strong>Closes:</strong> {job.closingDate}
                  </p>
                  <p className="text-gray-700 mb-4">{job.shortDescription}</p>
                </div>

                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => openDetails(job)}
                    className="flex-1 bg-green-700 text-white px-4 py-2 rounded-xl hover:bg-green-800 transition"
                  >
                    See Details
                  </button>
                  <button
                    onClick={() => openApply(job)}
                    className="flex-1 border border-green-700 text-green-700 px-4 py-2 rounded-xl hover:bg-green-700 hover:text-white transition"
                  >
                    Apply
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* DETAILS MODAL */}
        {selectedJob && modalMode === "details" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={closeModal}
            />
            <div className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-auto max-h-[90vh]">
              <div className="p-6 sm:p-8 relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>

                <h3 className="text-2xl font-bold text-green-700 mb-2">
                  {selectedJob.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  {selectedJob.location} • {selectedJob.type} • Closes:{" "}
                  {selectedJob.closingDate}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Salary:</strong> {selectedJob.salaryRange}
                </p>

                <div className="text-left text-gray-700 space-y-4">
                  <section>
                    <h4 className="font-semibold mb-2">About the Role</h4>
                    <p>{selectedJob.description}</p>
                  </section>

                  <section>
                    <h4 className="font-semibold mb-2">Key Responsibilities</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedJob.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h4 className="font-semibold mb-2">
                      Qualifications & Skills
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedJob.qualifications.map((q, i) => (
                        <li key={i}>{q}</li>
                      ))}
                    </ul>
                  </section>

                  <p>
                    <strong>Benefits:</strong> {selectedJob.benefits}
                  </p>
                  <p>
                    <strong>How to Apply:</strong> {selectedJob.howToApply}
                  </p>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    onClick={() => openApply(selectedJob)}
                    className="bg-green-700 text-white px-4 py-2 rounded-xl hover:bg-green-800 transition"
                  >
                    Apply Now
                  </button>
                  <button
                    onClick={closeModal}
                    className="border border-gray-300 px-4 py-2 rounded-xl hover:bg-gray-50 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* APPLY MODAL */}
        {selectedJob && modalMode === "apply" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={closeModal}
            />
            <div className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-auto max-h-[90vh] p-6 sm:p-8">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold text-green-700 mb-2">
                Apply for {selectedJob.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {selectedJob.location} • {selectedJob.type}
              </p>

              {/* APPLICATION FORM */}
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  formData.append("jobTitle", selectedJob.title);

                  try {
                    const res = await fetch("http://localhost:5000/apply", {
                      method: "POST",
                      body: formData,
                    });

                    const result = await res.json();
                    if (result.success) {
                      alert("✅ Application sent successfully!");
                    } else {
                      alert("❌ Failed to send application. Please try again.");
                    }
                  } catch (err) {
                    console.error(err);
                    alert("⚠️ Could not connect to the server.");
                  }

                  closeModal();
                }}
                className="space-y-4 text-left"
              >
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-green-600"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-green-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Education Level
                    </label>
                    <select
                      name="education"
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-green-600"
                    >
                      <option value="">Select</option>
                      <option>Diploma</option>
                      <option>Bachelor’s Degree</option>
                      <option>Master’s Degree</option>
                      <option>PhD</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Experience (Years)
                    </label>
                    <input
                      name="experience"
                      type="number"
                      min="0"
                      required
                      className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-green-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Upload CV (PDF, max 5MB)
                  </label>
                  <input
                    name="cv"
                    type="file"
                    accept=".pdf"
                    required
                    className="w-full border border-gray-300 rounded-xl px-3 py-2 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Upload Cover Letter (PDF, optional)
                  </label>
                  <input
                    name="coverLetter"
                    type="file"
                    accept=".pdf"
                    className="w-full border border-gray-300 rounded-xl px-3 py-2 cursor-pointer"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-green-700 text-white font-semibold py-3 rounded-xl hover:bg-green-800 transition"
                  >
                    Submit Application
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 border border-gray-300 py-3 rounded-xl hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* CONTACT INFO */}
        <section className="bg-green-700 text-white rounded-3xl shadow-xl p-10 md:p-12 max-w-3xl w-full space-y-3 mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Contact Us
          </h2>
          <p className="text-lg font-medium tracking-wide">ECN – Education Africa</p>
          <p>P.O BOX 1234-00200, Nairobi, Kenya</p>
          <p>
            Tel:{" "}
            <a href="tel:+254724178817" className="hover:underline">
              +254 724 178 817
            </a>{" "}
            /{" "}
            <a href="tel:+254720576794" className="hover:underline">
              +254 720 576 794
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:info@elimucommunitynet.org"
              className="underline font-medium hover:text-green-200 transition-colors"
            >
              info@elimucommunitynet.org
            </a>
          </p>
          <p>
            Website:{" "}
            <a
              href="https://sashioya65@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium hover:text-green-200 transition-colors"
            >
              ecnafrica.org
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <Suspense
        fallback={<div className="text-center py-4 text-gray-500">Loading footer...</div>}
      >
        <Footer />
      </Suspense>
    </div>
  );
}
