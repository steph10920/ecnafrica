import { useState, useEffect } from "react";

export const useStoryCarousel = (stories, paused) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (paused || !stories.length) return;

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % stories.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [paused, stories.length]);

  return { index, setIndex };
};
