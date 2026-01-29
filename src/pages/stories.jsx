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
  const [storyModal, setStoryModal] = useState({
    open: false,
    story: null,
  });

  /* ---------------- FILTER STORIES ---------------- */
  const filteredStories = useMemo(() => {
    if (!yearFilter) return storiesData;
    return storiesData.filter(
      (s) => new Date(s.date).getFullYear().toString() === yearFilter
    );
  }, [yearFilter]);

  /* ---------------- CAROUSEL ---------------- */
  const { index, setIndex } = useStoryCarousel(filteredStories, paused);
  const featuredStory = filteredStories[index];

  /* ---------------- YEARS ---------------- */
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
        <meta
          name="description"
          content="Real stories of impact from learners, mentors, and communities supported by ECN Africa."
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <StoriesHero
        years={years}
        yearFilter={yearFilter}
        onYearChange={(year) => {
          setYearFilter(year);
          setIndex(0);
        }}
      />

      {/* ================= MAIN ================= */}
      <main className="max-w-7xl mx-auto px-6 pb-20">
        {/* FEATURED + SIDEBAR */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-6">
            <FeaturedStory
              story={featuredStory}
              paused={paused}
              onRead={(story) =>
                setStoryModal({ open: true, story })
              }
              onTogglePause={() => setPaused((p) => !p)}
            />

            {/* TOP STORIES GRID */}
            <StoriesGrid
              stories={filteredStories.slice(0, 4)}
              onReadMore={(story) =>
                setStoryModal({ open: true, story })
              }
            />
          </div>

          {/* RIGHT COLUMN */}
          <aside className="flex flex-col gap-6">
            <ImpactSnapshot />

            <StoriesGallery
              stories={filteredStories}
              onSelect={(story) =>
                setStoryModal({ open: true, story })
              }
              onPrev={() =>
                setIndex(
                  (i) =>
                    (i - 1 + filteredStories.length) %
                    filteredStories.length
                )
              }
              onNext={() =>
                setIndex(
                  (i) =>
                    (i + 1) % filteredStories.length
                )
              }
            />

            {/* FACEBOOK FEED */}
            <div className="hidden lg:block">
              <FacebookFeed />
            </div>
          </aside>
        </section>

        {/* ================= ALL STORIES ================= */}
        <section>
          <h3 className="text-2xl font-bold text-green-800 mb-6">
            All Stories
          </h3>

          <StoriesGrid
            stories={filteredStories}
            onReadMore={(story) =>
              setStoryModal({ open: true, story })
            }
          />
        </section>
      </main>

      {/* ================= MODAL ================= */}
      <StoryModal
        modal={storyModal}
        onClose={() =>
          setStoryModal({ open: false, story: null })
        }
        onSupport={() => (window.location.href = "/donate")}
      />

      {/* ================= FOOTER ================= */}
      <Suspense
        fallback={
          <div className="text-center py-6 text-gray-500">
            Loading footer…
          </div>
        }
      >
        <Footer />
      </Suspense>
    </div>
  );
}
