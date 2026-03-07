import React, { Suspense, lazy, useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Footer = lazy(() => import("../components/Footer"));

const locations = [
  {
    name: "Nairobi Region",
    counties: "Nairobi, Kajiado, Machakos, Kiambu",
    position: [-1.286389, 36.817223],
    program: "Youth empowerment and digital learning programmes",
    type: "education",
  },
  {
    name: "Coastal Region",
    counties: "Mombasa, Kilifi, Kwale, Tana River",
    position: [-4.0435, 39.6682],
    program: "Blue Horizons sustainable fishing programme",
    type: "climate",
  },
  {
    name: "Western Region",
    counties: "Busia, Kakamega, Vihiga, Kisumu",
    position: [0.2827, 34.7519],
    program: "Green Classrooms and Nafasi Learning Programme",
    type: "education",
  },
];

export default function Contact() {
  const [filter, setFilter] = useState("all");

  const filteredLocations =
    filter === "all"
      ? locations
      : locations.filter((loc) => loc.type === filter);

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
          presence and programmes across the country.
        </p>
      </header>

      {/* Main Layout */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 lg:px-16 pb-16 max-w-7xl mx-auto">

        {/* Regional Hubs */}
        <section className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-green-100 relative overflow-hidden hover:shadow-3xl transition transform hover:-translate-y-1">

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

          <h2 className="text-2xl font-semibold mb-6 text-center">
            Contact Us
          </h2>

          <div className="space-y-4">

            <p className="flex items-center gap-3 text-lg font-medium">
              <MapPin size={20} />
              ECN – Education Africa, Nairobi, Kenya
            </p>

            <p className="flex items-center gap-3">
              <Phone size={20} />
              <a href="tel:+254724178817" className="underline hover:text-green-200">
                +254 724 178 817
              </a>
              /
              <a href="tel:+254720576794" className="underline hover:text-green-200">
                +254 720 576 794
              </a>
            </p>

            <p className="flex items-center gap-3">
              <Mail size={20} />
              <a
                href="mailto:education@ecnafrica.org"
                className="underline hover:text-green-200"
              >
                education@ecnafrica.org
              </a>
            </p>

          </div>
        </section>

      </main>

      {/* Interactive Program Map */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-100">

          <h2 className="text-2xl md:text-3xl font-bold text-green-700 text-center mb-3">
            ECN Program Locations
          </h2>

          <p className="text-center text-gray-600 mb-6">
            Explore where ECN programmes are creating impact across Kenya.
          </p>

          {/* Filters */}
          <div className="flex justify-center gap-3 mb-6 flex-wrap">

            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                filter === "all"
                  ? "bg-green-700 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              All Programs
            </button>

            <button
              onClick={() => setFilter("education")}
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                filter === "education"
                  ? "bg-green-700 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Education
            </button>

            <button
              onClick={() => setFilter("climate")}
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                filter === "climate"
                  ? "bg-green-700 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Climate
            </button>

          </div>

          <MapContainer
            center={[-1.286389, 36.817223]}
            zoom={6}
            scrollWheelZoom={false}
            className="h-[480px] w-full rounded-2xl z-0"
          >

            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {filteredLocations.map((loc, index) => (
              <Marker key={index} position={loc.position}>

                <Popup>

                  <div className="text-sm">

                    <h3 className="font-bold text-green-700 mb-1">
                      {loc.name}
                    </h3>

                    <p className="text-gray-600 mb-1">
                      {loc.counties}
                    </p>

                    <p className="text-gray-700">
                      {loc.program}
                    </p>

                  </div>

                </Popup>

              </Marker>
            ))}

          </MapContainer>

        </div>

      </section>

      {/* Footer */}
      <Suspense fallback={<div className="text-center py-4 text-gray-500">Loading...</div>}>
        <Footer />
      </Suspense>

    </div>
  );
}