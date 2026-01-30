import React, { Suspense, lazy } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = lazy(() => import("../components/Footer"));

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex flex-col">
      {/* Page Header */}
      <header className="text-center mt-20 mb-12 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 tracking-tight">
          Where We Work
        </h1>
        <p className="mt-4 text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
          We partner with communities across Kenya to create impact that is
          local, sustainable, and community-driven. Explore our regional
          presence and opportunities to join our mission.
        </p>
      </header>

      {/* Main Layout */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 lg:px-16 pb-20 max-w-7xl mx-auto">
        {/* Regional Hubs */}
        <section className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-green-100 relative overflow-hidden hover:shadow-3xl transition transform hover:-translate-y-1">
          {/* Background Shapes */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-emerald-300 rounded-full blur-3xl opacity-20"></div>

          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6 text-center relative z-10">
            Our Regional Hubs
          </h2>

          <ul className="text-gray-700 text-lg space-y-4 relative z-10">
            <li className="flex items-center gap-2">
              <MapPin className="text-green-500" size={20} />
              <span>
                <strong>Nairobi Region:</strong> Nairobi, Kajiado, Machakos, Kiambu
              </span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="text-green-500" size={20} />
              <span>
                <strong>Coastal Region:</strong> Mombasa, Kilifi, Kwale, Tana River
              </span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="text-green-500" size={20} />
              <span>
                <strong>Western Region:</strong> Busia, Kakamega, Vihiga, Kisumu
              </span>
            </li>
          </ul>
        </section>

        {/* Contact Card */}
        <section className="bg-green-700 text-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
          <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
          <div className="space-y-4">
            <p className="flex items-center gap-3 text-lg font-medium">
              <MapPin size={20} /> ECN – Education Africa, P.O BOX , Nairobi, Kenya
            </p>
            <p className="flex items-center gap-3">
              <Phone size={20} /> 
              <a href="tel:+254724178817" className="underline hover:text-green-200">+254 724 178 817</a>{" "}
              /{" "}
              <a href="tel:+254720576794" className="underline hover:text-green-200">+254 720 576 794</a>
            </p>
            <p className="flex items-center gap-3">
              <Mail size={20} /> 
              <a href="mailto:education@ecnafrica.org" className="underline hover:text-green-200">
                education@ecnafrica.org
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Suspense fallback={<div className="text-center py-4 text-gray-500">Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
