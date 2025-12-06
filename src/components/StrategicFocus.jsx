import React, { useState } from "react";
import { BookOpen, Users, Lightbulb, Globe2, Heart } from "lucide-react";

import childImg from "../assets/child_education.jpg";
import youthImg from "../assets/youth_engagement.jpg";
import womenImg from "../assets/women_empowerment.jpg";
import systemImg from "../assets/system_learning.jpg";
import communityImg from "../assets/community_development.jpg";

export default function StrategicFocus() {
  const [selectedFocus, setSelectedFocus] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const focuses = [
    {
      icon: <Heart className="text-green-600 w-7 h-7" />,
      title: "Child Protection and Education Alternatives",
      image: childImg,
      content: (
        <>
          <p className="text-gray-700 text-base leading-relaxed">

            Every child deserves the chance to learn, to grow, and to dream.
            ECN began its journey on the streets of Nairobi where educators met
            children and youth whose only classrooms were life itself. This
            journey then evolved to also include children and youth in the
            villages. We exist to restore their rights to education, protection,
            and belonging.
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2 text-sm">
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

          <blockquote className="border-l-4 border-green-400 pl-3 italic text-gray-600 mt-3 text-sm">
            “It takes a village to raise a child, but it takes education to
            empower that village.” — African Proverb
          </blockquote>

          <p className="text-gray-700 text-sm mt-2">
            We believe that every child can succeed when surrounded by love,
            learning, and opportunity. Families are the first teachers and
            therefore when families learn, communities thrive.
          </p>

          <p className="font-semibold text-green-700 mt-3 text-sm">
            Call to Action: Join us in creating safe, nurturing environments
            where every child’s story becomes one of hope and transformation.
          </p>
        </>
      ),
    },

    {
      icon: <Users className="text-green-600 w-7 h-7" />,
      title: "Youth Engagement: Skills, Leadership, and Innovation",
      image: youthImg,
      content: (
        <>
          <p className="text-gray-700 text-base leading-relaxed">

            Education unlocks potential and innovation makes it sustainable. We
            envision a Kenya where no young person’s potential is wasted. We
            respond to youth vulnerability by providing:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2 text-sm">
            <li>
              Access to technical and vocational education scholarships.
            </li>
            <li>Entrepreneurship and leadership training programs.</li>
            <li>Mentorship and reintegration opportunities.</li>
          </ul>

          <blockquote className="border-l-4 border-green-400 pl-3 italic text-gray-600 mt-3 text-sm">
            “If we educate today’s youth, we secure tomorrow’s future.” — Julius
            Nyerere
          </blockquote>

          <p className="text-gray-700 text-sm mt-2">
            We don’t just teach skills, we cultivate innovators and
            problem-solvers. Our programs help youth transition from dependency
            to self-reliance, becoming drivers of local enterprise and
            sustainable change.
          </p>

          <p className="font-semibold text-green-700 mt-3 text-sm">
            Call to Action: Let’s empower the youth to innovate, create, and
            lead their communities forward.
          </p>
        </>
      ),
    },

    {
      icon: <BookOpen className="text-green-600 w-7 h-7" />,
      title: "Women Empowerment: Education for Equality and Progress",
      image: womenImg,
      content: (
        <>
          <p className="text-gray-700 text-base leading-relaxed">

            When women learn, societies rise. We believe that women’s education
            is the engine of development and the heartbeat of social progress.
            Through literacy, entrepreneurship, and leadership programs, we
            empower women to:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2 text-sm">
            <li>Participate fully in community decision-making.</li>
            <li>Establish sustainable livelihoods for families.</li>
            <li>Mentor other women and girls.</li>
          </ul>

          <blockquote className="border-l-4 border-green-400 pl-3 italic text-gray-600 mt-3 text-sm">
            “Educate a woman, and you educate a nation.” — African Proverb
          </blockquote>

          <p className="text-gray-700 text-sm mt-2">
            When women support one another through education, innovation
            blossoms. ECN helps women harness their collective power to
            challenge inequality, nurture change, and shape brighter futures.
          </p>

          <p className="font-semibold text-green-700 mt-3 text-sm">
            Call to Action: Stand with women who are rewriting the story of
            Africa through education and innovation.
          </p>
        </>
      ),
    },

    {
      icon: <Lightbulb className="text-green-600 w-7 h-7" />,
      title: "System Strengthening: Innovative Learning Opportunities",
      image: systemImg,
      content: (
        <>
          <p className="text-gray-700 text-base leading-relaxed">

            Schools as engines of social transformation. We design programs that
            transform schools into hubs of creativity and lifelong learning as
            they become spaces where innovation begins and communities are
            reimagined.
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2 text-sm">
            <li>Relevant to real-world challenges.</li>
            <li>Rooted in local culture and context.</li>
            <li>Designed to generate sustainable solutions.</li>
          </ul>

          <blockquote className="border-l-4 border-green-400 pl-3 italic text-gray-600 mt-3 text-sm">
            “The mind of the child is where the revolution begins.” — Wangari
            Maathai
          </blockquote>

          <p className="text-gray-700 text-sm mt-2">
            Our approach promotes educative communities as environments where
            schools, families, and local institutions learn together, teach
            together, and grow together.
          </p>

          <p className="text-gray-700 text-sm mt-2">
            This cross-cutting framework links entrepreneurship, technology, and
            applied research to ensure education remains relevant to Africa’s
            realities. ECN collaborates with schools, universities, innovators,
            and community enterprises to develop locally inspired solutions from
            climate-smart agriculture to youth digital innovation hubs.
          </p>

          <p className="font-semibold text-green-700 mt-3 text-sm">
            Call to Action: Join us in supporting innovative schools that
            educate, empower, and elevate entire communities.
          </p>
        </>
      ),
    },

    {
      icon: <Globe2 className="text-green-600 w-7 h-7" />,
      title: "Community Development: Health, Food Security, and Environment",
      image: communityImg,
      content: (
        <>
          <p className="text-gray-700 text-base leading-relaxed">

            An educated community is a sustainable community. Education enables
            people to make informed choices about their health, nutrition, and
            environment. We integrate learning with action, promoting practical
            knowledge that leads to improved wellbeing and sustainable
            livelihoods.
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-2 text-sm">
            <li>The UN Convention on the Rights of the Child (CRC)</li>
            <li>The Sustainable Development Goals (SDGs)</li>
          </ul>

          <blockquote className="border-l-4 border-green-400 pl-3 italic text-gray-600 mt-3 text-sm">
            “He who learns, teaches.” — Ethiopian Proverb
          </blockquote>

          <p className="text-gray-700 text-sm mt-2">
            We build the capacity of communities to become their own advocates,
            ensuring that transformation is locally owned, locally led, and
            lasting.
          </p>

          <p className="font-semibold text-green-700 mt-3 text-sm">
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
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-700 mb-8">
          Our Strategic Focus
        </h2>

        {/* Search */}
        <div className="max-w-sm mx-auto mb-10">
          <input
            type="text"
            placeholder="Search focus..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFocuses.map((focus, index) => (
            <div
              key={index}
              onClick={() => setSelectedFocus(focus)}
              className="bg-white rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition-all duration-200 border border-green-100 overflow-hidden"
            >
              <div className="relative h-40">
                <img
                  src={focus.image}
                  alt={focus.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  {focus.icon}
                  <h3 className="text-lg font-semibold text-green-700 leading-snug">
                    {focus.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm">
                  <strong>Discover how we make a lasting impact.</strong>
                </p>

                <p className="text-green-600 italic text-xs mt-1">
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
        className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-4"
        onClick={() => setSelectedFocus(null)}
      >
        <div
          className="bg-white w-full max-w-2xl p-6 rounded-2xl shadow-xl relative overflow-y-auto max-h-[85vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setSelectedFocus(null)}
            className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>

          {/* IMAGE SHOWN INSIDE MODAL */}
          {selectedFocus.image && (
        <img
          src={selectedFocus.image}
          alt={selectedFocus.title}
          className="w-full h-56 object-cover rounded-xl mb-4"
        />
      )}

          <h3 className="text-2xl font-bold text-green-700 mb-4">
            {selectedFocus.title}
          </h3>

          <div className="space-y-3 text-gray-700 text-sm">
            {selectedFocus.content}
          </div>
        </div>
      </div>
    )}

    </section>
  );
}
