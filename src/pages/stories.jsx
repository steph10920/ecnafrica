import React, { Suspense, lazy, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";

import josephImg from "../assets/stories/joseph.jpg";
import maryImg from "../assets/stories/mary.jpg";
import eugineImg from "../assets/stories/eugine.jpg";
import opiyoImg from "../assets/stories/opiyo.jpg";
import footballstory1 from "../assets/stories/footballstory1.jpg";
import busiaFloodImg from "../assets/stories/busia_floods.jpg";

const Footer = lazy(() => import("../components/Footer"));

// Story Card Component
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
        <div className="mt-1 text-xs text-gray-400">
          {new Date(story.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </div>
        <p className="mt-2 text-gray-600 text-sm">{story.excerpt}</p>
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
        <button
          onClick={() => onReadMore(story)}
          className="text-green-700 font-medium hover:underline"
        >
          <strong>Read more</strong>
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
      date: "2024-05-12",
      excerpt:
        "After joining the Blue Horizon Programme, Eugine gained fishing and net-making skills, transforming his life and empowering his community.",
      body: `Eugine joined the Blue Horizon Programme eager to learn new skills that could help his community thrive. 
Through hands-on training, he mastered sustainable fishing techniques and net-making, eventually starting a small business supplying fish and handmade nets locally. 
With guidance from mentors, he also explored digital tools to manage his enterprise efficiently, keeping records of sales, inventory, and customer orders.  
As his business grew, Eugine began mentoring other young learners in his village, sharing both practical skills and the importance of discipline, teamwork, and financial literacy. 
He collaborated with local organizations to create small employment opportunities for peers and encouraged the adoption of sustainable practices in fishing and trade.  
Today, Eugine is not only a successful entrepreneur but also a recognized youth leader in his community. 
His journey demonstrates the transformative power of skill-building, mentorship, and community engagement, inspiring others to pursue education and entrepreneurship with confidence.`,
      img: eugineImg,
      impact: [
        "Mentor",
        "Micro-business",
        "Digital Skills",
        "Youth Leadership",
        "Community Development",
      ],
    },
    {
      id: "joseph",
      title: "Joseph: Youth Entrepreneurship",
      category: "Youth Empowerment",
      date: "2023-11-20",
      excerpt:
        "After completing the Youth Employment Program, Joseph launched a thriving local clothing business, creating jobs and inspiring young entrepreneurs in his community.",
      body: `Joseph was determined to create a better future for himself and his family. Through the Youth Employment Program, he gained practical business skills, mentorship, and access to resources to start his own clothing enterprise. 
He learned everything from tailoring and quality control to marketing and customer service, which helped him turn his passion into a profitable business.  
With guidance from mentors, Joseph set up a small workshop, employing a few local youth and providing apprenticeship opportunities. 
He collaborated with local community groups and suppliers to expand his operations while maintaining high-quality standards.  
Today, Joseph’s business has become a hub for young talent, creating jobs, fostering entrepreneurship, and inspiring others to pursue their own ventures. 
His journey showcases how skills training, mentorship, and community partnerships can transform lives and empower youth to become self-reliant leaders.`,
      img: josephImg,
      impact: [
        "Job Creation",
        "Apprenticeship",
        "Community Partnership",
        "Youth Empowerment",
        "Entrepreneurship",
      ],
    },
    {
      id: "Mary",
      title: "Mary’s Journey Through Flooded Roads",
      category: "Environment",
      date: "2024-02-15",
      excerpt:
        "Mary led her community in constructing flood-resilient pathways, ensuring children could safely reach school and promoting sustainable local practices.",
      body: `During the rainy season, Mary observed that many children were unable to attend school because flooded roads made travel unsafe and difficult. Determined to find a lasting solution, she mobilized her community to design and construct durable, flood-resilient pathways using locally sourced, sustainable materials.  
Mary collaborated with local organizations and volunteers, integrating simple engineering techniques to elevate walkways and prevent erosion. Alongside improving access to education, the project created small income-generating opportunities for families involved in building and maintaining the paths.  
Her efforts not only ensured that children could attend school consistently but also promoted environmental stewardship and strengthened community resilience. Today, the flood-resilient pathways stand as a symbol of collective action, innovation, and Mary’s commitment to creating safer, sustainable spaces for her community.`,
      img: maryImg,
      impact: [
        "Sustainability",
        "Education Access",
        "Community Resilience",
        "Income Generation",
        "Environmental Stewardship",
      ],
    },
    {
      id: "Opiyo",
      title: "Opiyo: The Great Fisherman",
      category: "Environment",
      date: "2023-08-30",
      excerpt:
        "Opiyo adopted sustainable fishing practices, preserving his community’s aquatic resources while mentoring young fishers and growing his business.",
      body: `Opiyo grew up in a vibrant fishing community, learning traditional fishing techniques from an early age. Over time, he noticed declining fish stocks and
 realized that continued overfishing could harm both the environment and the livelihoods of his community.  
Determined to make a change, Opiyo attended training programs on sustainable fishing practices, resource management, and responsible aquaculture. He implemented 
these methods in his daily work, ensuring that his fishing activities replenished rather than depleted local water bodies.  
Beyond his personal business, Opiyo became a mentor for younger fishers, sharing knowledge about sustainable practices and 
environmental stewardship. With the help of a startup grant, he expanded his operations while creating new employment opportunities. Opiyo’s story exemplifies how environmental awareness, entrepreneurship, and mentorship can coexist, benefiting both the ecosystem and the local community.`,
      img: opiyoImg,
      impact: [
        "Sustainable Fishing",
        "Mentoring Youth",
        "Environmental Stewardship",
        "Business Growth",
        "Community Development",
      ],
    },
    {
      id: "FOOTBALL",
      title: "Football: From Dusty Field to Champions",
      category: "Youth Empowerment",
      date: "2023-03-12",
      excerpt:
        "A weekend football program started by ECN Africa in Nairobi grew from a dusty field with no equipment into a community-powered team that reached the champions finals in their first tournament.",
      body: `In 2023, ECN Africa launched a weekend football program in Nairobi, where young boys and girls trained on a dusty open field with no proper equipment. The community soon rallied to provide donated footballs, cones, jerseys, and basic training gear, transforming a small initiative into a structured development opportunity.  
The team entered their first district tournament with little experience but a lot of determination. Against all odds, they advanced to the finals and finished as runners-up, marking a historic achievement for the community.  
Today, the team trains weekly under volunteer coaches and emphasizes discipline, teamwork, and sportsmanship. Several players have been scouted by local academies, and the program has inspired other youth-led initiatives. What began as a simple football camp has now become a symbol of hope, resilience, and unity, demonstrating how sports can empower youth and strengthen communities.`,
      img: footballstory1,
      impact: [
        "Team Development",
        "Youth Training",
        "Community Engagement",
        "Sports Empowerment",
        "Discipline & Resilience",
      ],
    },
    {
      id: "BUSIA_FLOODS",
      title: "Busia Floods: Rising Above the Waters",
      category: "Environment",
      date: "2024-01-08",
      excerpt:
        "When unexpected floods hit Busia, families were displaced and daily life came to a standstill. Through unity and ECN Africa’s support, the community organized rescue efforts and built long-term mitigation strategies.",
      body: `In early 2024, heavy rainfall caused rivers in Busia County to overflow, flooding homes, destroying crops, and cutting off access to essential services. Families were forced to evacuate to safer grounds as the water levels rose rapidly.  
The community responded with remarkable solidarity. Neighbours helped evacuate children and the elderly using wooden boats, while others secured livestock and essential belongings. Women and youth groups set up temporary washing and cooking points along higher ground, ensuring that displaced families could maintain basic hygiene and dignity despite the crisis.  
ECN Africa partnered with local leaders to provide emergency relief, including clean water, food supplies, and essential household items. Trained volunteers mapped flooded areas and identified vulnerable households needing urgent support.  
As waters receded, the community shifted focus to long-term resilience. Together with ECN Africa, they planted trees along riverbanks to reduce erosion, constructed raised communal pathways, and established early-warning systems with local scouts monitoring water levels daily.  
The Busia floods became more than a disaster; they highlighted the power of collective action, planning, and community-led solutions. Through cooperation and guidance from ECN Africa, the community turned a devastating flood into an opportunity for sustainable preparedness, safety, and unity.`,
      img: busiaFloodImg,
      impact: [
        "Emergency Support",
        "Tree Planting",
        "Early Warning Systems",
        "Community Resilience",
        "Disaster Preparedness",
      ],
    },
  ]);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [storyModal, setStoryModal] = useState({ open: false, story: null });
  const [yearFilter, setYearFilter] = useState("");
  const modalRef = useRef(null);

  const filteredStories = yearFilter
    ? stories.filter((s) => new Date(s.date).getFullYear().toString() === yearFilter)
    : stories;

  const visible = filteredStories[index % filteredStories.length];

  // Carousel auto-advance
  useEffect(() => {
    if (!paused) {
      const timer = setInterval(
        () => setIndex((i) => (i + 1) % filteredStories.length),
        5000
      );
      return () => clearInterval(timer);
    }
  }, [paused, filteredStories.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeStoryModal();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % filteredStories.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + filteredStories.length) % filteredStories.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [filteredStories.length]);

  const openStoryModal = (story) => {
    setStoryModal({ open: true, story });
    document.body.style.overflow = "hidden";
    setTimeout(() => modalRef.current?.focus(), 50);
  };

  const closeStoryModal = () => {
    setStoryModal({ open: false, story: null });
    document.body.style.overflow = "auto";
  };

  const handleSupport = () => (window.location.href = "/donate");

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
              Hear the stories behind the numbers—real journeys from learners,
              mentors, and communities transformed by ECN Africa.
            </motion.p>

            {/* Year Filter */}
            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <label className="text-gray-700 text-sm font-medium">Filter by year:</label>
              <select
                value={yearFilter}
                onChange={(e) => {
                  setYearFilter(e.target.value);
                  setIndex(0);
                }}
                className="border rounded-full px-3 py-1 text-gray-700"
              >
                <option value="">All Years</option>
                {[...new Set(stories.map((s) => new Date(s.date).getFullYear()))]
                  .sort((a, b) => b - a)
                  .map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
              </select>
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
                  <p className="mt-2 text-xs text-gray-400">
                    {visible &&
                      new Date(visible.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                  </p>
                  <p className="mt-4 text-gray-700 leading-relaxed">{visible?.excerpt}</p>
                  <div className="mt-6 flex gap-3 flex-wrap">
                    <button
                      onClick={() => openStoryModal(visible)}
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
              {filteredStories.slice(0, 4).map((story) => (
                <StoryCard key={story.id} story={story} onReadMore={openStoryModal} />
              ))}
            </div>
          </div>

          {/* Side Widgets */}
          <aside className="flex flex-col gap-6">
            {/* Impact Snapshot */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 text-black rounded-2xl p-6 shadow-lg">
              <h5 className="font-semibold text-lg">Impact Snapshot</h5>
              <p className="mt-2 text-sm text-white/90">Quick view of achievements</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { label: "Volunteers", value: "120+" },
                  { label: "Learners reached", value: "4,500" },
                  { label: "Projects funded", value: "32" },
                  { label: "Program satisfaction", value: "98%" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white bg-opacity-10 rounded-lg p-4 text-center flex flex-col items-center justify-center"
                  >
                    <div className="text-2xl font-bold">{item.value}</div>
                    <div className="text-xs">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-2xl shadow p-4 border border-green-100">
              <h6 className="text-sm font-semibold text-gray-800 mb-3">Gallery</h6>
              <div className="grid grid-cols-2 gap-2">
                {filteredStories.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => openStoryModal(s)}
                    className="overflow-hidden rounded-lg w-full h-32 sm:h-36 md:h-40 transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() =>
                    setIndex((i) => (i - 1 + filteredStories.length) % filteredStories.length)
                  }
                  className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-full border"
                >
                  <ArrowLeft size={16} /> Prev
                </button>
                <button
                  onClick={() => setIndex((i) => (i + 1) % filteredStories.length)}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-white rounded-full border"
                >
                  Next <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </aside>
        </section>

        {/* Facebook Timeline */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
  {/* Left/Main Column */}
  <div className="lg:col-span-2 space-y-6">
    {/* Featured Story + Story Grid */}
    <div className="space-y-6">
      {/* Featured Story */}
      <div className="bg-white rounded-3xl shadow p-6 border border-green-100 hover:shadow-2xl transition">
        {/* Featured story content here */}
      </div>

      {/* Story Grid */}
      <div className="grid sm:grid-cols-2 gap-6">
        {filteredStories.slice(0, 4).map((story) => (
          <StoryCard key={story.id} story={story} onReadMore={openStoryModal} />
        ))}
      </div>
    </div>
  </div>

  {/* Right Column */}
  <aside className="flex flex-col gap-6">
    {/* Gallery Widget */}
    <div className="bg-white rounded-2xl shadow p-4 border border-green-100">
      <h6 className="text-sm font-semibold text-gray-800 mb-3">Gallery</h6>
      <div className="grid grid-cols-2 gap-2">
        {filteredStories.map((s) => (
          <button
            key={s.id}
            onClick={() => openStoryModal(s)}
            className="overflow-hidden rounded-lg w-full h-32 sm:h-36 md:h-40 transition-transform duration-300 hover:scale-105"
          >
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </button>
        ))}
      </div>
    </div>

    {/* Facebook Feed: BELOW the gallery */}
    <div className="bg-white rounded-2xl shadow p-4 border border-green-100">
      <h6 className="text-sm font-semibold text-gray-800 mb-3">Facebook Updates</h6>
      <div className="w-full h-[600px] overflow-hidden rounded-lg">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Felimucommunitynetwork&tabs=timeline&width=340&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="100%"
          height="100%"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title="Elimu Community Network Facebook Feed"
        />
      </div>
    </div>
  </aside>
</section>


        {/* All Stories */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-green-800 mb-6">All Stories</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((s) => (
              <StoryCard key={s.id} story={s} onReadMore={openStoryModal} />
            ))}
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
                <div className="text-xs text-gray-400 mt-1">
                  {storyModal.story &&
                    new Date(storyModal.story.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mt-2">{storyModal.story?.title}</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">{storyModal.story?.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {storyModal.story?.impact.map((it, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full"
                    >
                      {it}
                    </span>
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
                    onClick={() => {
                      closeStoryModal();
                      setIndex(filteredStories.findIndex((s) => s.id === storyModal.story.id));
                    }}
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
