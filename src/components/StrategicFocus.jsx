import { useState, useEffect } from "react";
import { BookOpen, Users, Lightbulb, Globe2, Heart } from "lucide-react";

import childImg from "../assets/child_education.jpg";
import youthImg from "../assets/youth_engagement.jpg";
import womenImg from "../assets/women_empowerment.jpg";
import systemImg from "../assets/system_learning.jpg";
import communityImg from "../assets/community_development.jpg";

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
};

function SpiralEdge() {
  return (
    <div aria-hidden="true" className="absolute left-2 top-0 bottom-0 flex flex-col justify-evenly py-3 z-10">
      {Array.from({ length: 4 }).map((_, i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-white ring-2 ring-[var(--ink)]/15" />
      ))}
    </div>
  );
}

export default function StrategicFocus() {
  const [selectedFocus, setSelectedFocus] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Lock body scroll while the modal is open.
  useEffect(() => {
    document.body.style.overflow = selectedFocus ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedFocus]);

  // Close on Escape.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSelectedFocus(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const focuses = [
    {
      icon: <Heart className="w-7 h-7" style={{ color: "var(--clay)" }} />,
      accent: "var(--clay)",
      title: "Child Protection and Education Alternatives",
      image: childImg,
      content: (
        <>
          <p className="text-[var(--ink)]/80 text-base leading-relaxed">
            Every child deserves the chance to learn, to grow, and to dream.
            ECN began its journey on the streets of Nairobi where educators met
            children and youth whose only classrooms were life itself. This
            journey then evolved to also include children and youth in the
            villages. We exist to restore their rights to education, protection,
            and belonging.
          </p>

          <ul className="list-disc pl-6 text-[var(--ink)]/80 space-y-1 mt-2 text-sm">
            <li>
              Rescue and reintegrate street-connected children into safe family
              environments.
            </li>
            <li>
              Offer education alternatives that rebuild confidence and curiosity.
            </li>
            <li>
              Focus on character development, resilience, and leadership.
            </li>
          </ul>

          <blockquote
            className="border-l-4 pl-3 italic text-[var(--chalk)] mt-3 text-sm"
            style={{ borderColor: "var(--gold)", fontFamily: "var(--font-display)" }}
          >
            “It takes a village to raise a child, but it takes education to
            empower that village.” — African Proverb
          </blockquote>

          <p className="text-[var(--ink)]/80 text-sm mt-2">
            We believe that every child can succeed when surrounded by love,
            learning, and opportunity. Families are the first teachers and
            therefore when families learn, communities thrive.
          </p>

          <p className="font-semibold mt-3 text-sm" style={{ color: "var(--clay)" }}>
            Call to Action: Join us in creating safe, nurturing environments
            where every child’s story becomes one of hope and transformation.
          </p>
        </>
      ),
    },

    {
      icon: <Users className="w-7 h-7" style={{ color: "var(--sky)" }} />,
      accent: "var(--sky)",
      title: "Youth Engagement: Skills, Leadership, and Innovation",
      image: youthImg,
      content: (
        <>
          <p className="text-[var(--ink)]/80 text-base leading-relaxed">
            Education unlocks potential and innovation makes it sustainable. We
            envision a Kenya where no young person’s potential is wasted. We
            respond to youth vulnerability by providing:
          </p>

          <ul className="list-disc pl-6 text-[var(--ink)]/80 space-y-1 mt-2 text-sm">
            <li>Access to technical and vocational education scholarships.</li>
            <li>Entrepreneurship and leadership training programs.</li>
            <li>Mentorship and reintegration opportunities.</li>
          </ul>

          <blockquote
            className="border-l-4 pl-3 italic text-[var(--chalk)] mt-3 text-sm"
            style={{ borderColor: "var(--gold)", fontFamily: "var(--font-display)" }}
          >
            “If we educate today’s youth, we secure tomorrow’s future.” — Julius
            Nyerere
          </blockquote>

          <p className="text-[var(--ink)]/80 text-sm mt-2">
            We don’t just teach skills, we cultivate innovators and
            problem-solvers. Our programs help youth transition from dependency
            to self-reliance, becoming drivers of local enterprise and
            sustainable change.
          </p>

          <p className="font-semibold mt-3 text-sm" style={{ color: "var(--sky)" }}>
            Call to Action: Let’s empower the youth to innovate, create, and
            lead their communities forward.
          </p>
        </>
      ),
    },

    {
      icon: <BookOpen className="w-7 h-7" style={{ color: "var(--gold)" }} />,
      accent: "var(--gold)",
      title: "Women Empowerment: Education for Equality and Progress",
      image: womenImg,
      content: (
        <>
          <p className="text-[var(--ink)]/80 text-base leading-relaxed">
            When women learn, societies rise. We believe that women’s education
            is the engine of development and the heartbeat of social progress.
            Through literacy, entrepreneurship, and leadership programs, we
            empower women to:
          </p>

          <ul className="list-disc pl-6 text-[var(--ink)]/80 space-y-1 mt-2 text-sm">
            <li>Participate fully in community decision-making.</li>
            <li>Establish sustainable livelihoods for families.</li>
            <li>Mentor other women and girls.</li>
          </ul>

          <blockquote
            className="border-l-4 pl-3 italic text-[var(--chalk)] mt-3 text-sm"
            style={{ borderColor: "var(--gold)", fontFamily: "var(--font-display)" }}
          >
            “Educate a woman, and you educate a nation.” — African Proverb
          </blockquote>

          <p className="text-[var(--ink)]/80 text-sm mt-2">
            When women support one another through education, innovation
            blossoms. ECN helps women harness their collective power to
            challenge inequality, nurture change, and shape brighter futures.
          </p>

          <p className="font-semibold mt-3 text-sm" style={{ color: "var(--clay)" }}>
            Call to Action: Stand with women who are rewriting the story of
            Africa through education and innovation.
          </p>
        </>
      ),
    },

    {
      icon: <Lightbulb className="w-7 h-7" style={{ color: "var(--chalk)" }} />,
      accent: "var(--chalk)",
      title: "System Strengthening: Innovative Learning Opportunities",
      image: systemImg,
      content: (
        <>
          <p className="text-[var(--ink)]/80 text-base leading-relaxed">
            Schools as engines of social transformation. We design programs that
            transform schools into hubs of creativity and lifelong learning as
            they become spaces where innovation begins and communities are
            reimagined.
          </p>

          <ul className="list-disc pl-6 text-[var(--ink)]/80 space-y-1 mt-2 text-sm">
            <li>Relevant to real-world challenges.</li>
            <li>Rooted in local culture and context.</li>
            <li>Designed to generate sustainable solutions.</li>
          </ul>

          <blockquote
            className="border-l-4 pl-3 italic text-[var(--chalk)] mt-3 text-sm"
            style={{ borderColor: "var(--gold)", fontFamily: "var(--font-display)" }}
          >
            “The mind of the child is where the revolution begins.” — Wangari
            Maathai
          </blockquote>

          <p className="text-[var(--ink)]/80 text-sm mt-2">
            Our approach promotes educative communities as environments where
            schools, families, and local institutions learn together, teach
            together, and grow together.
          </p>

          <p className="text-[var(--ink)]/80 text-sm mt-2">
            This cross-cutting framework links entrepreneurship, technology, and
            applied research to ensure education remains relevant to Africa’s
            realities. ECN collaborates with schools, universities, innovators,
            and community enterprises to develop locally inspired solutions from
            climate-smart agriculture to youth digital innovation hubs.
          </p>

          <p className="font-semibold mt-3 text-sm" style={{ color: "var(--chalk)" }}>
            Call to Action: Join us in supporting innovative schools that
            educate, empower, and elevate entire communities.
          </p>
        </>
      ),
    },

    {
      icon: <Globe2 className="w-7 h-7" style={{ color: "var(--sky)" }} />,
      accent: "var(--sky)",
      title: "Community Development: Health, Food Security, and Environment",
      image: communityImg,
      content: (
        <>
          <p className="text-[var(--ink)]/80 text-base leading-relaxed">
            An educated community is a sustainable community. Education enables
            people to make informed choices about their health, nutrition, and
            environment. We integrate learning with action, promoting practical
            knowledge that leads to improved wellbeing and sustainable
            livelihoods.
          </p>

          <ul className="list-disc pl-6 text-[var(--ink)]/80 space-y-1 mt-2 text-sm">
            <li>The UN Convention on the Rights of the Child (CRC)</li>
            <li>The Sustainable Development Goals (SDGs)</li>
          </ul>

          <blockquote
            className="border-l-4 pl-3 italic text-[var(--chalk)] mt-3 text-sm"
            style={{ borderColor: "var(--gold)", fontFamily: "var(--font-display)" }}
          >
            “He who learns, teaches.” — Ethiopian Proverb
          </blockquote>

          <p className="text-[var(--ink)]/80 text-sm mt-2">
            We build the capacity of communities to become their own advocates,
            ensuring that transformation is locally owned, locally led, and
            lasting.
          </p>

          <p className="font-semibold mt-3 text-sm" style={{ color: "var(--sky)" }}>
            Call to Action: Join us in building learning communities that
            nurture people, protect the planet, and sustain prosperity.
          </p>
        </>
      ),
    },
  ];

  const filteredFocuses = focuses.filter((focus) =>
    focus.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section
      className="py-16 bg-[var(--paper)]"
      style={THEME_VARS}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center text-[var(--chalk)] mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Our Strategic Focus
        </h2>

        {/* Search */}
        <div className="max-w-sm mx-auto mb-10">
          <label htmlFor="focus-search" className="sr-only">
            Search focus areas
          </label>
          <input
            id="focus-search"
            type="text"
            placeholder="Search focus..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 text-sm border-2 border-[var(--chalk)]/15 bg-white focus:outline-none focus:border-[var(--gold)] transition"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFocuses.map((focus) => (
            <div
              key={focus.title}
              onClick={() => setSelectedFocus(focus)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedFocus(focus);
                }
              }}
              className="relative bg-white shadow-sm cursor-pointer hover:shadow-xl transition-all duration-200 overflow-hidden focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
            >
              <SpiralEdge />
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-1.5 z-10"
                style={{ backgroundColor: focus.accent }}
              />
              <div className="relative h-40">
                <img src={focus.image} alt={focus.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--chalk)]/40 to-transparent" />
              </div>

              <div className="p-5 pl-7">
                <div className="flex items-center gap-2 mb-2">
                  {focus.icon}
                  <h3
                    className="text-lg font-semibold text-[var(--chalk)] leading-snug"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {focus.title}
                  </h3>
                </div>

                <p className="text-[var(--ink)]/70 text-sm">
                  <strong>Discover how we make a lasting impact.</strong>
                </p>

                <p className="italic text-xs mt-1" style={{ color: focus.accent }}>
                  Click to read more →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedFocus && (
        <div
          className="fixed inset-0 bg-[var(--ink)]/50 flex justify-center items-center z-50 px-4"
          onClick={() => setSelectedFocus(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="strategic-focus-modal-title"
            className="relative bg-[var(--paper)] w-full max-w-2xl p-6 shadow-xl overflow-y-auto max-h-[85vh] border-2 border-dashed border-[var(--gold)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedFocus(null)}
              aria-label="Close"
              className="absolute top-3 right-3 text-[var(--ink)]/60 hover:text-[var(--chalk)] text-xl"
            >
              ✕
            </button>

            {selectedFocus.image && (
              <img
                src={selectedFocus.image}
                alt={selectedFocus.title}
                className="w-full h-56 object-cover mb-4"
              />
            )}

            <h3
              id="strategic-focus-modal-title"
              className="text-2xl font-bold text-[var(--chalk)] mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {selectedFocus.title}
            </h3>

            <div className="space-y-3 text-[var(--ink)]/80 text-sm">{selectedFocus.content}</div>
          </div>
        </div>
      )}
    </section>
  );
}
