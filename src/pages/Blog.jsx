import { Suspense, lazy, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, Heart, Users } from "lucide-react";

const Footer = lazy(() => import("../components/Footer"));

// Stories.jsx
// A single-file, production-ready React + Tailwind component for an ECN "Stories" page.
// Features included:
// - Dedicated Stories page layout
// - Multiple real story entries (data-driven)
// - Animated hero and section reveals (framer-motion)
// - Auto-rotating carousel + manual controls
// - Masonry-style gallery with modal "Read more"
// - Icons (lucide-react) and subtle gradients
// - Accessible keyboard controls for modal and carousel

export default function Stories() {
  const [stories] = useState([
    {
      id: "amina",
      title: "Amina's Journey: From Learner to Mentor",
      category: "Education",
      excerpt:
        "After joining the Nafasi Learning Programme Amina gained digital skills, mentoring experience and started a cooperative project that supports other learners.",
      body:
        "When Amina joined ECN's Nafasi Learning Programme she had limited access to learning resources. After a year of tailored mentoring, digital-skills classes and a community-supported micro-project, she is now mentoring other learners and working with a local cooperative to start a small business. Stories like Amina's are why we do this work.",
      img: "https://source.unsplash.com/900x700/?africa,girl,education",
      impact: ["Mentor", "Micro-business", "Digital Skills"],
    },
    {
      id: "joseph",
      title: "Joseph: Youth Entrepreneurship",
      category: "Youth Empowerment",
      excerpt:
        "Joseph completed the Youth Employment Program and now runs a local ICT repair shop employing two other youths.",
      body:
        "Joseph joined our Youth Employment Program to learn ICT and entrepreneurship. Within six months he had built a thriving small business repairing phones and teaching others — now he employs two apprentices and partners with local schools for placements.",
      img: "https://source.unsplash.com/900x700/?young,man,africa,business",
      impact: ["Job Created", "Apprenticeship", "Community Partnership"],
    },
    {
      id: "faith",
      title: "Faith’s Green Classroom Initiative",
      category: "Environment",
      excerpt:
        "Faith led a project to create a school garden and recycling program, reducing waste and funding small school needs.",
      body:
        "Faith mobilized her peers to transform a disused school plot into a productive garden. The Green Classrooms Project provided seedlings, training and a waste-recycling plan. Proceeds now pay for school supplies and help fund lunchtime meals.",
      img: "https://source.unsplash.com/900x700/?garden,school,africa",
      impact: ["Sustainability", "School Income", "Nutrition"],
    },
    {
      id: "mary",
      title: "Mary: Women in Tech Scholarship",
      category: "Women Empowerment",
      excerpt:
        "Mary received scholarships to attend a coding bootcamp — she now mentors girls in her county.",
      body:
        "Through our Women in Tech scholarships Mary completed a coding bootcamp and now mentors a cohort of girls in her county. Her startup recently won a small grant to scale a local educational app.",
      img: "https://source.unsplash.com/900x700/?women,coding,africa",
      impact: ["Scholarship", "Mentoring", "Startup Grant"],
    },
    // add more entries as needed
  ]);

  // carousel state
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [modal, setModal] = useState({ open: false, story: null });
  const visible = stories.length > 0 ? stories[index % stories.length] : null;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % stories.length);
    }, 5000);
    return () => clearInterval(t);
  }, [paused, stories.length]);

  const openModal = (s) => {
    setModal({ open: true, story: s });
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setModal({ open: false, story: null });
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % stories.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + stories.length) % stories.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [stories.length]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 via-white to-green-100">
      {/* HERO */}
      <header className="relative py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold text-green-800 leading-tight"
            >
              Stories of Impact
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-gray-700 max-w-xl"
            >
              Real stories from our learners, mentors and communities. Read how ECN's
              programmes transform lives — and how you can support the next success story.
            </motion.p>

            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full shadow">
                <Heart size={16} /> Support a story
              </button>

              <button
                className="inline-flex items-center gap-2 px-4 py-2 border rounded-full text-green-700 bg-white"
                onClick={() => window.scrollTo({ top: 400, behavior: "smooth" })}
              >
                <BookOpen size={16} /> Explore stories
              </button>

              <div className="ml-2 inline-flex items-center gap-2 text-sm text-gray-600">
                <Users size={16} /> <span>4 stories • updated Nov 2025</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg border border-green-100">
              <img
                src={visible?.img}
                alt={visible?.title}
                className="w-full h-72 object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 pb-20 w-full">
        {/* CAROUSEL + STORY PREVIEWS */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow p-6 border border-green-100">
              <div className="flex items-start gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-800">Featured Story</h3>
                  <p className="text-sm text-green-700 font-medium mt-1">{visible?.category}</p>
                  <p className="mt-4 text-gray-700 leading-relaxed">{visible?.excerpt}</p>

                  <div className="mt-6 flex gap-3 items-center">
                    <button
                      onClick={() => openModal(visible)}
                      className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full shadow"
                    >
                      Read Full Story
                    </button>

                    <button
                      onClick={() => setPaused((p) => !p)}
                      className="px-4 py-2 border rounded-full text-green-700 bg-white"
                    >
                      {paused ? "Resume" : "Pause"}
                    </button>
                  </div>
                </div>

                <div className="w-36">
                  <img src={visible?.img} alt="featured" className="w-full h-24 object-cover rounded-lg" />
                </div>
              </div>
            </div>

            {/* story cards grid */}
            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              {stories.slice(0, 4).map((s) => (
                <motion.article
                  key={s.id}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl shadow-sm border border-green-50 overflow-hidden"
                >
                  <img src={s.img} alt={s.title} className="w-full h-44 object-cover" />
                  <div className="p-4">
                    <div className="text-sm text-green-700 font-medium">{s.category}</div>
                    <h4 className="mt-2 font-semibold text-gray-800">{s.title}</h4>
                    <p className="mt-2 text-gray-600 text-sm">{s.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <button
                        onClick={() => openModal(s)}
                        className="text-sm text-green-700 font-medium"
                      >
                        Read more
                      </button>
                      <div className="text-xs text-gray-500">Impact: {s.impact.join(", ")}</div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Right column - animated gallery / indicators */}
          <aside className="flex flex-col gap-6">
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-2xl p-6 shadow-lg">
              <h5 className="font-semibold">Impact Snapshot</h5>
              <p className="mt-2 text-sm">Quick view of recent achievements and fast facts.</p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold">120+</div>
                  <div className="text-xs">Volunteers</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold">4,500</div>
                  <div className="text-xs">Learners reached</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold">32</div>
                  <div className="text-xs">Projects funded</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs">Program satisfaction</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow p-4 border border-green-100">
              <h6 className="text-sm font-semibold text-gray-800">Gallery</h6>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {stories.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => openModal(s)}
                    className="overflow-hidden rounded-lg w-full h-28"
                  >
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover transform hover:scale-105 transition" />
                  </button>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => setIndex((i) => (i - 1 + stories.length) % stories.length)}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-full border"
                >
                  <ArrowLeft size={16} /> Prev
                </button>

                <button
                  onClick={() => setIndex((i) => (i + 1) % stories.length)}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-full border"
                >
                  Next <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </aside>
        </section>

        {/* FULL STORIES GRID */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-green-800 mb-6">All Stories</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((s) => (
              <article key={s.id} className="bg-white rounded-2xl shadow-sm border border-green-50 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="text-xs text-green-700 font-medium">{s.category}</div>
                  <h4 className="mt-2 font-semibold text-gray-800">{s.title}</h4>
                  <p className="mt-2 text-gray-600 text-sm">{s.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <button onClick={() => openModal(s)} className="text-sm text-green-700 font-medium">Read more</button>
                    <div className="text-xs text-gray-500">Impact: {s.impact.join(", ")}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* MODAL */}
      <AnimatePresence>
        {modal.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-black/40" onClick={closeModal} />
            <motion.div
              initial={{ y: 24, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl shadow-xl max-w-4xl w-full z-50 overflow-auto max-h-[90vh] border border-green-50"
            >
              <div className="relative">
                <img src={modal.story?.img} alt={modal.story?.title} className="w-full h-56 object-cover rounded-t-2xl" />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <div className="p-6">
                <div className="text-sm text-green-700 font-medium">{modal.story?.category}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mt-2">{modal.story?.title}</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">{modal.story?.body}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {modal.story?.impact.map((it, idx) => (
                    <span key={idx} className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">{it}</span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <button className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full">Support</button>
                  <button onClick={() => { closeModal(); setIndex(stories.findIndex(s => s.id === modal.story.id)); }} className="px-4 py-2 border rounded-full text-green-700">View in carousel</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Suspense fallback={<div className="text-center py-6 text-gray-500">Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
