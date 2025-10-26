import React, { Suspense, lazy } from "react";
import { BookOpen, Globe2, HeartHandshake, Users2, Mail } from "lucide-react"; // Lucide icons

const Footer = lazy(() => import("../components/Footer"));

export default function About() {
  const Divider = () => (
    <div className="flex items-center gap-2 my-8">
      <div className="h-[2px] w-10 bg-green-600 rounded"></div>
      <div className="h-[2px] flex-1 bg-green-200 rounded"></div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 🔹 Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-14 animate-fade-in">
        {/* ---------- INTRODUCTION ---------- */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="text-green-700" size={28} />
            <h1 className="text-3xl md:text-4xl font-bold text-green-700">About ECN</h1>
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Elimu Community Network (ECN)</strong> is a Kenyan
            Non-Governmental Learning Organization founded in 2012. We work to
            safeguard the rights of vulnerable children and empower families
            through quality, inclusive education and community-driven innovation.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our mission is to ensure that education remains a catalyst for
            sustainable community development — transforming challenges into
            opportunities and empowering Africa to design her own future.
          </p>
        </section>

        <Divider />

        {/* ---------- OUR APPROACH ---------- */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <HeartHandshake className="text-green-700" size={28} />
            <h2 className="text-2xl font-semibold text-green-700">Our Approach</h2>
          </div>

          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Listen. Learn. Lead.</strong>
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We listen deeply to communities, learn collaboratively, and lead
            with compassion. Our strength-based approach values local wisdom and
            creativity while promoting gender equality, inclusivity, and
            innovation. Education is not just what we do — it’s how we build
            empowered, resilient communities across Africa.
          </p>
          <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-600">
            “The future belongs to those who prepare for it today.” — Malcolm X
          </blockquote>
        </section>

        <Divider />

        {/* ---------- IMPACT & SUSTAINABILITY ---------- */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Globe2 className="text-green-700" size={28} />
            <h2 className="text-2xl font-semibold text-green-700">
              Impact and Sustainability
            </h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Since its founding, ECN has reached over{" "}
            <strong>10,000 children, youth, and women</strong> across Kenya
            through education, psychosocial care, and economic empowerment.
            Our programmes have led to reduced street involvement among children
            and youth, stronger family units, and increased household income from
            women-led enterprises.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We measure success not just by numbers but by transformation — a
            mother feeding her family with income from her business, a child
            re-enrolled in school, or a community turning barren land into a
            thriving green space.
          </p>
        </section>

        <Divider />

        {/* ---------- FUTURE VISION ---------- */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Users2 className="text-green-700" size={28} />
            <h2 className="text-2xl font-semibold text-green-700">
              The Future We Envision
            </h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Over the next five years, ECN will expand its Learning and
            Innovation initiatives across Kenya, deepen applied research
            partnerships, and strengthen youth and women networks that drive
            community-led transformation.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our vision is to see education act as a cornerstone for peace,
            productivity, and sustainable development in Africa. We invite
            partners, donors, and educators to join us in keeping education at
            the heart of Africa’s prosperity and peace.
          </p>
        </section>

        <Divider />

        {/* ---------- VALUES ---------- */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <HeartHandshake className="text-green-700" size={28} />
            <h2 className="text-2xl font-semibold text-green-700">Our Core Values</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <strong>Courage:</strong> We dare to believe that education can
              rewrite destinies.
            </li>
            <li>
              <strong>Integrity:</strong> We act with transparency and uphold
              trust.
            </li>
            <li>
              <strong>Creativity:</strong> We innovate for lasting impact.
            </li>
            <li>
              <strong>Grit:</strong> We persist where others might give up.
            </li>
            <li>
              <strong>Collaboration:</strong> We grow stronger together.
            </li>
          </ul>
        </section>

        <Divider />

        {/* ---------- REGIONS ---------- */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Globe2 className="text-green-700" size={28} />
            <h2 className="text-2xl font-semibold text-green-700">Where We Work</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <strong>Nairobi Region:</strong> Nairobi, Kajiado, Machakos,
              Kiambu
            </li>
            <li>
              <strong>Coastal Region:</strong> Mombasa, Kilifi, Kwale, Tana River
            </li>
            <li>
              <strong>Western Region:</strong> Busia, Kakamega, Vihiga, Kisumu
            </li>
          </ul>
        </section>

        <Divider />

        {/* ---------- CONTACT ---------- */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Mail className="text-green-700" size={28} />
            <h2 className="text-2xl font-semibold text-green-700">Get in Touch</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Contact us at{" "}
            <a
              href="mailto:elimu.communitynetwork@gmail.com"
              className="text-green-600 underline hover:text-green-800 transition-colors"
            >
              elimu.communitynetwork@gmail.com
            </a>{" "}
            or visit{" "}
            <a
              href="https://www.facebook.com/elimucommunitynetwork/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 underline hover:text-green-800 transition-colors"
            >
              our Facebook page
            </a>
            .
          </p>
        </section>
      </main>

      {/* ---------- FOOTER ---------- */}
      <Suspense
        fallback={<div className="text-center py-4 text-gray-500">Loading footer...</div>}
      >
        <Footer />
      </Suspense>
    </div>
  );
}
