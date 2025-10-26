import React, { Suspense, lazy } from "react";

const Footer = lazy(() => import("../components/Footer"));

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-green-100">
      {/* 🌍 Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-6">
          Where We Work
        </h1>
        <p className="max-w-2xl text-gray-700 text-lg leading-relaxed mb-12">
          We reach communities across Kenya through regional hubs that embody
          the diversity, resilience, and creativity of our people. Our regional
          teams collaborate with local leaders, schools, and families to design
          solutions that are rooted in context and driven by compassion.
        </p>

        {/* 🗺️ Regions Section */}
        <section className="bg-white shadow-lg rounded-3xl p-8 md:p-12 max-w-3xl w-full border border-green-100 mb-16">
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

        {/* ✉️ Contact Details */}
        <section className="bg-green-700 text-white rounded-3xl shadow-xl p-10 md:p-12 max-w-3xl w-full space-y-3">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg font-medium tracking-wide">ECN – Education Africa</p>
          <p>P.O BOX 1234-00200, Nairobi, Kenya</p>
          <p>Tel: <a href="tel:+254724178817" className="hover:underline">+254 724 178 817</a> / <a href="tel:+254720576794" className="hover:underline">+254 720 576 794</a></p>
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
              href="https://elimucommunitynet.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium hover:text-green-200 transition-colors"
            >
              elimucommunitynet.org
            </a>
          </p>
        </section>
      </main>

      {/* 🌿 Footer */}
      <Suspense fallback={<div className="text-center py-4 text-gray-500">Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
