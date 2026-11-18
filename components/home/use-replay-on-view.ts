"use client";

import { useEffect, useRef, useState } from "react";

export function useReplayOnView() {
  const ref = useRef<HTMLHeadingElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heading = ref.current;
    if (!heading || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, { threshold: 0.25 });
    observer.observe(heading);

    let frame = 0;
    const replay = () => {
      setVisible(false);
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const { top, bottom } = heading.getBoundingClientRect();
        if (top < window.innerHeight && bottom > 0) setVisible(true);
      });
    };
    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) replay();
    };
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") replay();
    };
    window.addEventListener("pageshow", onPageShow);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("pageshow", onPageShow);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return { ref, visible };
}
