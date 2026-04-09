import React, { Suspense, lazy, useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

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
  const mapContainer = useRef(null);
  const mapRef = useRef(null);

  const filteredLocations =
    filter === "all"
      ? locations
      : locations.filter((loc) => loc.type === filter);

  const flyToLocation = (position) => {
    if (!mapRef.current) return;
    mapRef.current.flyTo({
      center: [position[1], position[0]],
      zoom: 8,
      speed: 1.2,
    });
  };

  useEffect(() => {
    if (!mapContainer.current) return;

    if (mapRef.current) {
      mapRef.current.remove();
    }

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
      center: [36.817223, -1.286389],
      zoom: 6,
    });

    mapRef.current = map;

    filteredLocations.forEach((loc) => {
      const el = document.createElement("div");
      el.className = "pulse-marker";

      const popup = new maplibregl.Popup({
        offset: 25,
        closeButton: false,
        closeOnClick: false,
      }).setHTML(`
        <div style="font-size:14px; line-height:1.4;">
          <h3 style="font-weight:bold;color:#16a34a;margin-bottom:4px;">
            ${loc.name}
          </h3>
          <p style="margin:0;">${loc.counties}</p>
          <p style="font-size:12px;color:#555;margin-top:4px;">
            ${loc.program}
          </p>
        </div>
      `);

      new maplibregl.Marker(el)
        .setLngLat([loc.position[1], loc.position[0]])
        .setPopup(popup)
        .addTo(map);

      // Open all popups by default
      popup.addTo(map);

      // Click to fly + keep popup open
      el.addEventListener("click", () => {
        flyToLocation(loc.position);
        popup.addTo(map);
      });
    });
  }, [filteredLocations]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex flex-col">

      {/* HEADER */}
      <header className="text-center mt-20 mb-10 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700">
          Where We Work
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Explore our regional hubs and programmes across Kenya.
        </p>
      </header>

      {/* INFO CARD */}
      <section className="max-w-7xl mx-auto px-6 pb-10 w-full">
        <div className="bg-white rounded-3xl shadow-xl border border-green-100 p-8 grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Regions */}
          <div>
            <h2 className="text-xl font-bold text-green-700 mb-6">
              Regional Hubs
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {locations.map((loc, i) => (
                <div
                  key={i}
                  onClick={() => flyToLocation(loc.position)}
                  className="cursor-pointer border border-gray-100 rounded-xl p-4 hover:shadow-md hover:bg-green-50 transition"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">{loc.name}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        loc.type === "education"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {loc.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{loc.counties}</p>
                  <p className="text-xs text-gray-600">{loc.program}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact + Filters */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-green-700 mb-4">Contact</h2>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center gap-2">
                  <MapPin size={18} /> Nairobi, Kenya
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={18} /> +254 724 178 817
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={18} /> education@ecnafrica.org
                </p>
              </div>
            </div>

            {/* Filters */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-500 mb-3">
                Filter Programs
              </h3>
              <div className="flex gap-2 flex-wrap">
                {["all", "education", "climate"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilter(type)}
                    className={`px-3 py-1 text-xs rounded-full ${
                      filter === type
                        ? "bg-green-700 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MAP SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-16 w-full">
        <div className="bg-white rounded-b-3xl shadow-2xl border border-green-100 overflow-hidden">

          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-green-700">Our Locations Map</h2>
            <p className="text-sm text-gray-500">
              Click a region above to zoom into the map. All regions are tagged.
            </p>
          </div>

          <div className="h-[500px] w-full">
            <div ref={mapContainer} className="h-full w-full" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Suspense fallback={<div className="text-center py-4">Loading...</div>}>
        <Footer />
      </Suspense>

      {/* Marker Animation */}
      <style>{`
        .pulse-marker {
          width: 16px;
          height: 16px;
          background: #16a34a;
          border-radius: 50%;
          position: relative;
        }

        .pulse-marker::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #16a34a;
          animation: pulse 1.5s infinite;
          top: 0;
          left: 0;
          opacity: 0.6;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
      `}</style>

    </div>
  );
}