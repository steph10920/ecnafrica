import { Suspense, lazy, useMemo, useState } from "react";
import { Helmet } from "react-helmet";

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

export default function Stories() {
  const [yearFilter, setYearFilter] = useState("");
  const [paused, setPaused] = useState(false);
  const [storyModal, setStoryModal] = useState({ open: false, story: null });

  // ---------------- Filter Stories by Year ----------------
  const filteredStories = useMemo(() => {
    if (!yearFilter) return storiesData;
    return storiesData.filter(
      (s) => new Date(s.date).getFullYear().toString() === yearFilter
    );
  }, [yearFilter]);

  // ---------------- Carousel Hook ----------------
  const { index, setIndex } = useStoryCarousel(filteredStories, paused);
  const featuredStory = filteredStories[index];

  // ---------------- Extract Unique Years ----------------
  const years = useMemo(
    () =>
      [...new Set(storiesData.map((s) => new Date(s.date).getFullYear()))].sort(
        (a, b) => b - a
      ),
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-100">
      <Helmet>
        <title>ECN Africa | Stories of Impact</title>
      </Helmet>

      {/* HERO + Year Filter */}
      <StoriesHero
        years={years}
        yearFilter={yearFilter}
        onYearChange={(year) => {
          setYearFilter(year);
          setIndex(0);
        }}
      />

      <main className="max-w-7xl mx-auto px-6 pb-20">
        {/* FEATURED + GRID + SIDEBAR */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <FeaturedStory
              story={featuredStory}
              paused={paused}
              onRead={(story) => setStoryModal({ open: true, story })}
              onTogglePause={() => setPaused((p) => !p)}
            />

            {/* Grid: 4 columns on large screens */}
            <StoriesGrid
              stories={filteredStories.slice(0, 8)} // Show top 8 stories in grid
              onReadMore={(story) => setStoryModal({ open: true, story })}
            />
          </div>

          {/* Right Column */}
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

        {/* ALL STORIES */}
        <section>
          <h3 className="text-2xl font-bold text-green-800 mb-6">
            All Stories
          </h3>

          <StoriesGrid
            stories={filteredStories}
            onReadMore={(story) => setStoryModal({ open: true, story })}
          />
        </section>
      </main>

      {/* MODAL */}
      <StoryModal
        modal={storyModal}
        onClose={() => setStoryModal({ open: false, story: null })}
        onSupport={() => (window.location.href = "/donate")}
      />

      <Suspense fallback={<div className="text-center py-6">Loading footer…</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
