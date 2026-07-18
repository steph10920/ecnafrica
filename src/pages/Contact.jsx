import { Suspense, lazy, useState, useEffect, useMemo, useRef } from "react";
import { Helmet } from "react-helmet";
import { MapPin, Phone, Mail } from "lucide-react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const Footer = lazy(() => import("../components/Footer"));

/* ------------------------------------------------------------------ */
/*  Shared design tokens — kept identical to Home.jsx / Programs.jsx / */
/*  Stories.jsx / About.jsx. These are due for a shared theme.js file. */
/* ------------------------------------------------------------------ */

const THEME_VARS = {
  "--ink": "#1B2A22",
  "--paper": "#F1EDD9",
  "--chalk": "#1F3A2E",
  "--clay": "#B8462F",
  "--gold": "#E3A73B",
  "--sky": "#3E7C8C",
  "--font-display": "'Fraunces', ui-serif, Georgia, serif",
  "--font-body": "'Work Sans', ui-sans-serif, system-ui, sans-serif",
  "--font-hand": "'Caveat', cursive",
};

const GRAIN_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'>
      <filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter>
      <rect width='100%' height='100%' filter='url(#n)'/>
    </svg>`
  );

function Grain({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay ${className}`}
      style={{ backgroundImage: `url("${GRAIN_SVG}")` }}
    />
  );
}

function ChalkUnderline({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 18"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`w-full h-[0.5em] ${className}`}
    >
      <path
        d="M2 13 C 40 4, 80 17, 118 7 S 178 3, 198 11"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Eyebrow({ children, tone = "gold" }) {
  const color = tone === "gold" ? "text-[var(--gold)]" : "text-[var(--clay)]";
  return (
    <span
      className={`inline-block -rotate-1 text-2xl ${color}`}
      style={{ fontFamily: "var(--font-hand)" }}
    >
      {children}
    </span>
  );
}

function SpiralEdge() {
  return (
    <div
      aria-hidden="true"
      className="absolute left-3 top-0 bottom-0 flex flex-col justify-evenly py-4"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="h-2 w-2 rounded-full bg-[var(--paper)] ring-2 ring-[var(--ink)]/15"
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Content                                                             */
/* ------------------------------------------------------------------ */

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

const TYPE_ACCENT = {
  education: "#3E7C8C", // var(--sky)
  climate: "#B8462F", // var(--clay)
};

export default function Contact() {
  const [filter, setFilter] = useState("all");
  const mapContainer = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  // Recomputed only when the filter actually changes — this used to be
  // a plain `const` recalculated on every render, which made the map
  // effect below think its dependency changed on every render and
  // rebuild the entire map instance each time.
  const filteredLocations = useMemo(
    () => (filter === "all" ? locations : locations.filter((loc) => loc.type === filter)),
    [filter]
  );

  const flyToLocation = (position) => {
    if (!mapRef.current) return;
    mapRef.current.flyTo({
      center: [position[1], position[0]],
      zoom: 8,
      speed: 1.2,
    });
  };

  // Create the map once on mount.
  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
      center: [36.817223, -1.286389],
      zoom: 6,
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Sync markers whenever the filtered list changes — the map itself
  // is left alone.
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    filteredLocations.forEach((loc) => {
      const el = document.createElement("div");
      el.className = "pulse-marker";

      const popup = new maplibregl.Popup({
        offset: 25,
        closeButton: false,
        closeOnClick: false,
      }).setHTML(`
        <div style="font-family: var(--font-body, sans-serif); font-size:14px; line-height:1.4;">
          <h3 style="font-family: var(--font-display, serif); font-weight:700; color: var(--clay, #B8462F); margin-bottom:4px;">
            ${loc.name}
          </h3>
          <p style="margin:0; color: var(--ink, #1B2A22);">${loc.counties}</p>
          <p style="font-size:12px; color:#6b6b63; margin-top:4px;">
            ${loc.program}
          </p>
        </div>
      `);

      const marker = new maplibregl.Marker(el)
        .setLngLat([loc.position[1], loc.position[0]])
        .setPopup(popup)
        .addTo(map);

      popup.addTo(map);

      el.addEventListener("click", () => {
        flyToLocation(loc.position);
        popup.addTo(map);
      });

      markersRef.current.push(marker);
    });
  }, [filteredLocations]);

  return (
    <div
      className="min-h-screen flex flex-col motion-reduce:[&_*]:!transition-none motion-reduce:[&_*]:!animate-none"
      style={{ ...THEME_VARS, fontFamily: "var(--font-body)", color: "var(--ink)" }}
    >
      <Helmet>
        <title>Where We Work | ECN Africa</title>
        <meta
          name="description"
          content="Explore ECN Africa's regional hubs and programmes across Kenya, and get in touch with our team."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,900&family=Work+Sans:wght@400;500;600;700&family=Caveat:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* ============================ HEADER ============================ */}
      <header className="relative w-full overflow-hidden bg-[var(--chalk)] pt-24 pb-20 text-center">
        <Grain />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-[repeating-linear-gradient(90deg,var(--gold)_0,var(--gold)_10px,transparent_10px,transparent_20px)] opacity-40"
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <Eyebrow>Regional footprint</Eyebrow>
          <h1
            className="mt-3 text-3xl md:text-5xl font-bold text-[var(--paper)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Where We{" "}
            <span className="relative inline-block">
              Work
              <ChalkUnderline className="absolute left-0 -bottom-1" />
            </span>
          </h1>
          <p className="mt-4 text-[var(--paper)]/80 leading-relaxed">
            Explore our regional hubs and programmes across Kenya.
          </p>
        </div>
      </header>

      <main className="flex-1 bg-[var(--paper)]">
        <div className="max-w-7xl mx-auto px-6 py-16 space-y-10">
          {/* ------------------------- INFO CARD ------------------------- */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Regional hubs */}
            <div>
              <Eyebrow tone="clay">Regional hubs</Eyebrow>
              <h2
                className="mt-2 mb-6 text-xl font-bold text-[var(--chalk)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our field offices
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {locations.map((loc, i) => (
                  <div
                    key={loc.name}
                    onClick={() => flyToLocation(loc.position)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && flyToLocation(loc.position)}
                    className="relative cursor-pointer bg-white pl-7 pr-4 py-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{ backgroundColor: TYPE_ACCENT[loc.type] }}
                    />
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-[var(--chalk)]">{loc.name}</h3>
                      <span
                        className="text-xs px-2 py-1 rounded-full text-white"
                        style={{ backgroundColor: TYPE_ACCENT[loc.type] }}
                      >
                        {loc.type}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--ink)]/60 mb-2">{loc.counties}</p>
                    <p className="text-xs text-[var(--ink)]/70">{loc.program}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact + filters */}
            <div className="flex flex-col justify-between">
              <div className="relative bg-white p-6 pl-8 shadow-sm">
                <span aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-2 bg-[var(--gold)]" />
                <Eyebrow tone="clay">Reach us</Eyebrow>
                <h2
                  className="mt-2 mb-4 text-xl font-bold text-[var(--chalk)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Contact
                </h2>
                <div className="space-y-3 text-[var(--ink)]/80">
                  <p className="flex items-center gap-2">
                    <MapPin size={18} className="text-[var(--clay)]" aria-hidden="true" /> Nairobi,
                    Kenya
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone size={18} className="text-[var(--clay)]" aria-hidden="true" /> +254 724
                    178 817
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={18} className="text-[var(--clay)]" aria-hidden="true" />{" "}
                    education@ecnafrica.org
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3
                  className="text-sm font-semibold text-[var(--ink)]/60 mb-3 uppercase tracking-wide"
                >
                  Filter Programmes
                </h3>
                <div className="flex gap-2 flex-wrap">
                  {["all", "education", "climate"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setFilter(type)}
                      className={`px-4 py-1.5 text-xs font-semibold rounded-full transition focus:outline-none focus:ring-2 focus:ring-[var(--gold)] ${
                        filter === type
                          ? "bg-[var(--clay)] text-white"
                          : "bg-white text-[var(--ink)]/60 hover:bg-[var(--chalk)]/5"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ------------------------- MAP SECTION ------------------------- */}
          <section className="relative bg-white shadow-xl overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1.5"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <div className="p-6 border-b border-[var(--chalk)]/10">
              <Eyebrow>The map</Eyebrow>
              <h2
                className="mt-1 text-xl font-bold text-[var(--chalk)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our Locations
              </h2>
              <p className="text-sm text-[var(--ink)]/60 mt-1">
                Click a region above to zoom into the map. All regions are tagged.
              </p>
            </div>

            <div className="h-[500px] w-full">
              <div ref={mapContainer} className="h-full w-full" />
            </div>
          </section>
        </div>
      </main>

      <Suspense
        fallback={<div className="text-center py-4 text-[var(--ink)]/60">Loading...</div>}
      >
        <Footer />
      </Suspense>

      {/* Marker animation */}
      <style>{`
        .pulse-marker {
          width: 16px;
          height: 16px;
          background: var(--clay, #B8462F);
          border-radius: 50%;
          position: relative;
        }

        .pulse-marker::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: var(--clay, #B8462F);
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
