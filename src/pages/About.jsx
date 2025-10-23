import React, { Suspense, lazy } from "react";

const Navbar = lazy(() => import("../components/NavBar"));
const Footer = lazy(() => import("../components/Footer"));

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Suspense fallback={<div className="text-center py-4 text-gray-500">Loading navbar...</div>}>
        <Navbar />
      </Suspense>

      <main className="max-w-6xl mx-auto px-6 py-16 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">About ECN</h1>

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

        <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-2">Vision</h2>
        <p className="text-gray-700 mb-4">
          Every child grows to full potential in resilient families within a supportive educational and community environment.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-2">Mission</h2>
        <p className="text-gray-700 mb-4">
          We establish creative safe spaces for children. We facilitate the process of placing vulnerable children in caring and resilient families. We promote access to relevant inclusive education and the development of sustainable opportunities in communities.
        </p>

        <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-2">Values</h2>
        <ul className="text-gray-700 list-disc list-inside mb-4">
          <li>Service</li>
          <li>Integrity</li>
          <li>Creativity</li>
          <li>Grit</li>
          <li>Collaboration</li>
        </ul>

        <p className="text-gray-700 mb-4">
          Through <strong>educational programs</strong>, ECN focuses on:
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Rescuing street-connected children and supporting OVCs to access appropriate alternative care and learning services to safeguard their rights.</li>
          <li>Creating innovative learning alternatives to explore the full potential of education institutions and educators/child practitioners in cultivating a culture of lifelong learning for children, families, and local communities.</li>
          <li>Enhancing community development through empowerment initiatives that strengthen health, food security, and environmental conservation systems.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-2">Regions</h2>
        <ul className="text-gray-700 list-disc list-inside mb-4">
          <li>Nairobi region: Nairobi, Kajiado, Machakos, Kiambu</li>
          <li>Coastal region: Mombasa, Kilifi, Kwale, Tana River</li>
          <li>Western region: Busia, Kakamega, Vihiga, Kisumu</li>
        </ul>

        <p className="text-gray-700">
          Contact us at <strong>elimu.communitynetwork@gmail.com</strong> or visit{" "}
          <a href="https://www.facebook.com/elimucommunitynetwork/" className="text-blue-600 underline hover:text-blue-800 transition-colors duration-300">
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
