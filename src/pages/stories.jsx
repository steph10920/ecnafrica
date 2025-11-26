import React, { Suspense, lazy, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, Heart, Users } from "lucide-react";
import { Helmet } from "react-helmet";
import josephImg from "../assets/stories/joseph.jpg";
import maryImg from "../assets/stories/mary.jpg";
import eugineImg from "../assets/stories/eugine.jpg";
import opiyoImg from "../assets/stories/opiyo.jpg";
import footballstory1 from "../assets/stories/footballstory1.jpg";
import busiaFloodImg from "../assets/stories/busia_floods.jpg";

const Footer = lazy(() => import("../components/Footer"));

// Story card component
const StoryCard = ({ story, onReadMore }) => (
  <motion.article
    whileHover={{ y: -5, boxShadow: "0px 8px 20px rgba(0,0,0,0.12)" }}
    className="bg-white rounded-2xl shadow border border-green-100 overflow-hidden flex flex-col"
  >
    <div className="h-48 w-full relative overflow-hidden rounded-t-2xl bg-gray-100">
      <img
        src={story.img}
        alt={story.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
    <div className="p-5 flex-1 flex flex-col justify-between">
      <div>
        <div className="text-sm text-green-700 font-semibold">{story.category}</div>
        <h4 className="mt-2 font-bold text-gray-900 text-lg">{story.title}</h4>
        <p className="mt-2 text-gray-600 text-sm">{story.excerpt}</p>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
        <button
          onClick={() => onReadMore(story)}
          className="text-green-700 font-medium hover:underline"
        >
          Read more
        </button>
        <div>Impact: {story.impact.join(", ")}</div>
      </div>
    </div>
  </motion.article>
);

export default function Stories() {
  const [stories] = useState([
        {
      id: "Eugine",
      title: "Eugine: From Learner to Leader",
      category: "Education",
      excerpt: "After joining the Blue Horizon Programme, Eugine gained fishing and net-making skills and developed a thriving micro-business that supports his community.",
      body: "Eugine joined our Blue Horizon Programme eager to learn skills that could benefit his community. Through hands-on training, he mastered fishing and net-making, and soon started a small business supplying nets and fish locally. With guidance from mentors, Eugine also explored digital tools to manage his enterprise efficiently. Today, he not only runs a successful micro-business but also mentors other youth, inspiring them to develop skills, embrace entrepreneurship, and leverage technology for growth.",
      img: eugineImg,
      impact: ["Mentor", "Micro-business", "Digital Skills"],
    },
        {
      id: "joseph",
      title: "Joseph: Youth Entrepreneurship",
      category: "Youth Empowerment",
      excerpt: "After completing the Youth Employment Program, Joseph launched a thriving local clothing business, creating jobs and inspiring other young entrepreneurs.",
      body: "Joseph was determined to create a better future for himself and his family. Through the Youth Employment Program, he gained practical business skills, mentorship, and access to resources to start his own clothing enterprise. Today, Joseph runs a successful local business, provides apprenticeship opportunities for other youth, and collaborates with community partners to expand economic opportunities. His journey highlights the power of skill development and community support in transforming young lives.",
      img: josephImg,
      impact: ["Job Created", "Apprenticeship", "Community Partnership"],
    },
    {
      id: "Mary",
      title: "Mary’s Journey Through Flooded Roads",
      category: "Environment",
      excerpt: "Mary led her community in constructing flood-resilient pathways, ensuring children could safely reach school and promoting sustainable local practices.",
      body: "Mary noticed that during the rainy season, many children struggled to reach school due to flooded and unsafe roads. Determined to find a solution, she mobilized her community to build durable, flood-resilient pathways. Through collaboration with local organizations, they used sustainable materials and techniques, improving access to education and creating small income-generating opportunities along the way. Mary's efforts not only ensured consistent school attendance but also promoted environmental sustainability and strengthened community resilience.",
      img: maryImg,
      impact: ["Sustainability", "School Income", "Nutrition"],
    },
        {
      id: "Opiyo",
      title: "Opiyo: The Great Fisherman",
      category: "Environment",
      excerpt: "Opiyo adopted sustainable fishing practices, preserving his community’s aquatic resources while mentoring young fishers and growing his business.",
      body: "Having grown up in a fishing community, Opiyo was skilled in traditional fishing methods but noticed declining fish stocks over the years. Through training programs and mentorship, he learned sustainable fishing techniques and resource management. Applying these methods, Opiyo not only improved his catch responsibly but also started mentoring younger fishers and secured a startup grant to expand his operations. His dedication demonstrates how environmental stewardship and entrepreneurship can go hand in hand, benefiting both the community and the ecosystem.",
      img: opiyoImg,
      impact: ["Scholarship", "Mentoring", "Startup Grant"],
    },
      {
    id: "FOOTBALL",
    title: "Football: From Dusty Field to Champions",
    category: "Youth Empowerment",
    excerpt:
      "A weekend football program started by ECN Africa in Nairobi grew from a dusty field with no equipment into a community-powered team that reached the champions finals in their first tournament.",
    body:
      "In 2023, ECN Africa launched a weekend football program in Nairobi, where young boys and girls trained on a dusty open field with no equipment. Within months, the community came together to donate balls, cones, and jerseys—transforming the small initiative into a real development opportunity.\n\nThe team entered their first district tournament with limited experience but immense determination. Against all odds, they reached the finals and finished as runners-up, marking the best performance the village had ever witnessed.\n\nToday, the team trains weekly under volunteer coaches, and several players have already been scouted by local academies. What began as a simple football camp has now become a symbol of hope, discipline, and unity for the entire community.",
    img: footballstory1, 
    impact: ["Team Development", "Youth Training", "Community Support"],
  },
    {
    id: "BUSIA_FLOODS",
    title: "Busia Floods: Rising Above the Waters",
    category: "Environment",
    excerpt:
      "When unexpected floods hit Busia, families were displaced and daily life came to a standstill. But through unity and ECN Africa’s support, the community organized rescue efforts and built long-term mitigation strategies.",
    body:
      "In early 2024, heavy rainfall caused the water levels around several villages in Busia County to rise unexpectedly, flooding homesteads, destroying farms, and cutting off access to essential services. What was once a calm riverside area quickly turned into a dangerous zone, forcing families to seek higher ground.\n\nDespite the disruption, the community responded with remarkable unity. Neighbours helped evacuate children and the elderly using wooden boats, while others secured livestock and essential belongings. Women and youth groups created makeshift washing and cooking points along safer dry patches, ensuring affected families could maintain basic hygiene and dignity even amid the chaos.\n\nECN Africa partnered with local leaders to coordinate emergency support, providing clean water containers, food supplies, and essential household items. Trained volunteers also mapped the flooded areas and identified vulnerable households who needed immediate assistance.\n\nAs the water slowly receded, the community worked hand in hand to prevent future disasters. Together with ECN Africa, they planted trees along riverbanks to reduce erosion, created raised communal pathways, and established early-warning systems using local scouts who monitor water levels daily.\n\nWhat began as a moment of crisis became a powerful reminder of the community’s resilience. Through collective action and simple yet effective mitigation strategies, the people of Busia transformed a devastating flood into an opportunity to strengthen safety, preparedness, and unity.",
    img: busiaFloodImg, 
    impact: ["Emergency Support", "Tree Planting", "Early Warning Systems"],
  },
  ]);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [storyModal, setStoryModal] = useState({ open: false, story: null });
  const modalRef = useRef(null);

  const visible = stories[index % stories.length];

  // Auto carousel
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setIndex(i => (i + 1) % stories.length), 5000);
    return () => clearInterval(timer);
  }, [paused, stories.length]);

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeStoryModal();
      if (e.key === "ArrowRight") setIndex(i => (i + 1) % stories.length);
      if (e.key === "ArrowLeft") setIndex(i => (i - 1 + stories.length) % stories.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [stories.length]);

  const openStoryModal = (story) => {
    setStoryModal({ open: true, story });
    document.body.style.overflow = "hidden";
    setTimeout(() => modalRef.current?.focus(), 50);
  };

  const closeStoryModal = () => {
    setStoryModal({ open: false, story: null });
    document.body.style.overflow = "auto";
  };

  const handleSupport = () => {
    window.location.href = "/donate";
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 via-white to-green-100">
      <Helmet>
        <title>ECN Africa | Stories of Impact</title>
        <meta
          name="description"
          content="Stories of learners, mentors, and communities transformed by ECN Africa."
        />
      </Helmet>

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
              Real stories from our learners, mentors, and communities. Discover how ECN programs transform lives.
            </motion.p>

            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <button
                onClick={handleSupport}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full shadow"
              >
                <Heart size={16} /> Support ECN
              </button>
              <button
                className="inline-flex items-center gap-2 px-4 py-2 border rounded-full text-green-700 bg-white"
                onClick={() => window.scrollTo({ top: 400, behavior: "smooth" })}
              >
                <BookOpen size={16} /> Explore stories
              </button>
              <div className="ml-2 inline-flex items-center gap-2 text-sm text-gray-600">
                <Users size={16} /> <span>{stories.length} stories • updated Nov 2025</span>
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
                className="w-full h-72 md:h-80 object-contain rounded-2xl border p-2"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-6 pb-20 w-full">
        {/* Featured + Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            {/* Featured Story */}
            <div className="bg-white rounded-3xl shadow p-6 border border-green-100 hover:shadow-2xl transition">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-800">Featured Story</h3>
                  <p className="text-sm text-green-700 font-medium mt-1">{visible?.category}</p>
                  <p className="mt-4 text-gray-700 leading-relaxed">{visible?.excerpt}</p>
                  <div className="mt-6 flex gap-3 flex-wrap">
                    <button
                      onClick={() => openStoryModal(visible)}
                      className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full shadow"
                    >
                      Read Full Story
                    </button>
                    <button
                      onClick={() => setPaused(p => !p)}
                      className="px-4 py-2 border rounded-full text-green-700 bg-white"
                    >
                      {paused ? "Resume" : "Pause"}
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-36">
                  <img
                    src={visible?.img}
                    alt="featured"
                    className="w-full h-24 object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Story Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {stories.slice(0, 4).map(story => (
                <StoryCard key={story.id} story={story} onReadMore={openStoryModal} />
              ))}
            </div>
          </div>

          {/* Side Widgets */}
          <aside className="flex flex-col gap-6">
            {/* Impact Snapshot */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-green rounded-2xl p-6 shadow-lg">
              <h5 className="font-semibold">Impact Snapshot</h5>
              <p className="mt-2 text-sm text-white/90">Quick view of achievements</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { label: "Volunteers", value: "120+" },
                  { label: "Learners reached", value: "4,500" },
                  { label: "Projects funded", value: "32" },
                  { label: "Program satisfaction", value: "98%" },
                ].map((item, i) => (
                  <div key={i} className="bg-white bg-opacity-10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold">{item.value}</div>
                    <div className="text-xs">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-2xl shadow p-4 border border-green-100">
              <h6 className="text-sm font-semibold text-gray-800">Gallery</h6>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {stories.map(s => (
                  <button
                    key={s.id}
                    onClick={() => openStoryModal(s)}
                    className="overflow-hidden rounded-lg w-full h-32 sm:h-36 md:h-40"
                  >
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => setIndex(i => (i - 1 + stories.length) % stories.length)}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-full border"
                >
                  <ArrowLeft size={16} /> Prev
                </button>
                <button
                  onClick={() => setIndex(i => (i + 1) % stories.length)}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-full border"
                >
                  Next <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </aside>
        </section>

        {/* All Stories */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-green-800 mb-6">All Stories</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map(s => <StoryCard key={s.id} story={s} onReadMore={openStoryModal} />)}
          </div>
        </section>
      </main>

      {/* Story Modal */}
      <AnimatePresence>
        {storyModal.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-black/40" onClick={closeStoryModal} />
            <motion.div
              ref={modalRef}
              tabIndex={-1}
              initial={{ y: 24, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl shadow-xl max-w-4xl w-full z-50 overflow-auto max-h-[90vh] border border-green-50 outline-none"
            >
              <div className="relative">
                <img
                  src={storyModal.story?.img}
                  alt={storyModal.story?.title}
                  className="w-full h-56 md:h-72 object-contain rounded-t-2xl"
                  loading="lazy"
                />
                <button
                  onClick={closeStoryModal}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <div className="text-sm text-green-700 font-medium">{storyModal.story?.category}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mt-2">{storyModal.story?.title}</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">{storyModal.story?.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {storyModal.story?.impact.map((it, idx) => (
                    <span key={idx} className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">{it}</span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3 flex-wrap">
                  <button
                    onClick={handleSupport}
                    className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full"
                  >
                    Support ECN
                  </button>
                  <button
                    onClick={() => { closeStoryModal(); setIndex(stories.findIndex(s => s.id === storyModal.story.id)); }}
                    className="px-4 py-2 border rounded-full text-green-700"
                  >
                    View in carousel
                  </button>
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
