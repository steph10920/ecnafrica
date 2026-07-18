import { Suspense, lazy, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

import { storiesData } from "../data/storiesData";

import StoriesHero from "../components/stories/StoriesHero";
import FeaturedStory from "../components/stories/FeaturedStory";
import StoriesGrid from "../components/stories/StoriesGrid";
import ImpactSnapshot from "../components/stories/ImpactSnapshot";
import StoriesGallery from "../components/stories/StoriesGallery";
import StoryModal from "../components/stories/StoryModal";

import FacebookFeed from "../components/FacebookFeed";
import { useStoryCarousel } from "../hooks/useStoryCarousel";

const Footer = lazy(() => import("../components/Footer"));

/* ------------------------------------------------------------------ */
/*  Shared design tokens — kept identical to Home.jsx / Programs.jsx.  */
/*  Worth centralizing into /components/theme.js once a third page     */
/*  needs it — three copies of the same object is one too many.        */
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

export default function Stories() {
  const navigate = useNavigate();

  /* ---------------- STATE ---------------- */

  const [yearFilter, setYearFilter] = useState("");
  const [paused, setPaused] = useState(false);

  const [storyModal, setStoryModal] = useState({
    open: false,
    story: null,
  });

  /* ---------------- FILTER STORIES ---------------- */

  const filteredStories = useMemo(() => {
    if (!yearFilter) return storiesData;

    return storiesData.filter(
      (story) => new Date(story.date).getFullYear().toString() === yearFilter
    );
  }, [yearFilter]);

  /* ---------------- CAROUSEL ---------------- */

  const { index, setIndex } = useStoryCarousel(filteredStories, paused);
  const featuredStory = filteredStories[index];

  /* ---------------- UNIQUE YEARS ---------------- */

  const years = useMemo(() => {
    return [
      ...new Set(storiesData.map((story) => new Date(story.date).getFullYear())),
    ].sort((a, b) => b - a);
  }, []);

  return (
    <div
      className="min-h-screen bg-[var(--paper)] motion-reduce:[&_*]:!transition-none motion-reduce:[&_*]:!animate-none"
      style={{ ...THEME_VARS, fontFamily: "var(--font-body)", color: "var(--ink)" }}
    >
      {/* ---------------- SEO ---------------- */}

      <Helmet>
        <title>ECN Africa | Stories of Impact</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,900&family=Work+Sans:wght@400;500;600;700&family=Caveat:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* ---------------- HERO ---------------- */}

      <StoriesHero
        years={years}
        yearFilter={yearFilter}
        onYearChange={(year) => {
          setYearFilter(year);
          setIndex(0);
        }}
      />

      {/* ---------------- MAIN CONTENT ---------------- */}

      <main className="max-w-7xl mx-auto px-6 pb-20">
        {/* FEATURED + GRID + SIDEBAR */}

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* LEFT COLUMN */}

          <div className="lg:col-span-2 space-y-6">
            <FeaturedStory
              story={featuredStory}
              paused={paused}
              onRead={(story) => setStoryModal({ open: true, story })}
              onTogglePause={() => setPaused((p) => !p)}
            />

            <StoriesGrid
              stories={filteredStories.slice(0, 8)}
              onReadMore={(story) => setStoryModal({ open: true, story })}
            />
          </div>

          {/* SIDEBAR */}

          <aside className="flex flex-col gap-6">
            <ImpactSnapshot />

            <StoriesGallery
              stories={filteredStories}
              onSelect={(story) => setStoryModal({ open: true, story })}
              onPrev={() =>
                setIndex((i) => (i - 1 + filteredStories.length) % filteredStories.length)
              }
              onNext={() => setIndex((i) => (i + 1) % filteredStories.length)}
            />

            <FacebookFeed />
          </aside>
        </section>

        {/* Chalk-style divider between the featured block and the full list */}
        <div
          aria-hidden="true"
          className="h-px w-full mb-12 bg-[repeating-linear-gradient(90deg,var(--chalk)_0,var(--chalk)_10px,transparent_10px,transparent_20px)] opacity-25"
        />

        {/* ---------------- ALL STORIES ---------------- */}

        <section>
          <Eyebrow tone="clay">The full archive</Eyebrow>
          <h3
            className="relative inline-block mt-2 mb-8 text-2xl md:text-3xl font-bold text-[var(--chalk)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            All Stories
            <ChalkUnderline className="absolute left-0 -bottom-1 w-24" />
          </h3>

          <StoriesGrid
            stories={filteredStories}
            onReadMore={(story) => setStoryModal({ open: true, story })}
          />
        </section>
      </main>

      {/* ---------------- STORY MODAL ---------------- */}

      <StoryModal
        modal={storyModal}
        onClose={() => setStoryModal({ open: false, story: null })}
        onSupport={() => navigate("/donate")}
      />

      {/* ---------------- FOOTER ---------------- */}

      <Suspense
        fallback={
          <div className="text-center py-6 text-[var(--ink)]/60">Loading footer…</div>
        }
      >
        <Footer />
      </Suspense>
    </div>
  );
}
