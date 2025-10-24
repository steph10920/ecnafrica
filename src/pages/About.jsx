import React, { Suspense, lazy } from "react";

const Footer = lazy(() => import("../components/Footer"));

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 🔹 Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8 space-y-16 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">About ECN</h1>

        <p className="text-gray-700 mb-4">
          Elimu community network (ECN) is a Non-Governmental learning organization based in Kenya. Since 2012, ECN has helped in safeguarding the rights of vulnerable children and empowering their families by promoting quality and best practices in education for sustainable community development.
        </p>
        <p className="text-gray-700 mb-4">
          We believe that relevant and quality inclusive education is a powerful tool for:
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Facilitating the discovery of unique potentials within all children in their journey of self-awareness</li>
          <li>Developing efficient schools as creative systems that promptly respond to evolving needs from children, family, and communities</li>
          <li>Generating innovative solutions for resolving social challenges within the framework of educative communities</li>
        </ul>

        <p className="text-gray-700 mb-4">
          <strong>Elimu</strong> in Swahili means <strong>EDUCATION</strong>.
        </p>
        <h1 className="text-2xl font-semibold text-green-700 mt-8 mb-2">Our Approach</h1>

        <p className="text-gray-700 mb-4">
          <strong>Listen. Learn. Lead.</strong>
        </p>
        <p className="text-gray-700 mb-4">
          Our strength lies in listening deeply to communities, learning collaboratively, and leading with compassion.
          We adopt a strength-based approach that values local wisdom and creativity while promoting gender equality and inclusivity.
          Through innovation, we convert challenges into opportunities and lessons into leadership.
          Education is not merely what we do, but it is how we empower Africa to design her own sustainable future.
          <br></br>
          <strong>“The future belongs to those who prepare for it today.”</strong>

        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">Our Vision</h2>
        <p className="text-gray-700 mb-4">
          A world where every child, youth, and woman thrives to their full potential within resilient families and empowered learning communities.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          To create inclusive and innovative learning spaces that nurture potential, inspire leadership, and empower communities to design their own sustainable futures.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">Our Values</h2>
        <ul className="text-gray-700 list-disc list-inside mb-4">
          <li>Courage: We dare to believe that education can rewrite destinies.</li>
          <li>Integrity: We act with transparency and uphold trust.</li>
          <li>Creativity: We innovate for lasting impact.</li>
          <li>Grit: We persist where others might give up.</li>
          <li>Collaboration: We grow stronger together.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">Regions</h2>
        <ul className="text-gray-700 list-disc list-inside mb-4">
          <li>Nairobi region: Nairobi, Kajiado, Machakos, Kiambu</li>
          <li>Coastal region: Mombasa, Kilifi, Kwale, Tana River</li>
          <li>Western region: Busia, Kakamega, Vihiga, Kisumu</li>
        </ul>

        <p className="text-gray-700">
          Contact us at <strong>elimu.communitynetwork@gmail.com</strong> or visit{" "}
          <a href="https://www.facebook.com/elimucommunitynetwork/" className="text-green-600 underline hover:text-green-800 transition-colors duration-300">
            our Facebook page
          </a>.
        </p>
      </main>

      <Suspense fallback={<div className="text-center py-4 text-gray-500">Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
