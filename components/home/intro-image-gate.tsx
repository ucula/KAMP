"use client";

import { useEffect, useState } from "react";

export const INTRO_IMAGE_READY_EVENT = "kamp-intro-image-ready";

export function IntroImageGate({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reveal = () => setReady(true);
    window.addEventListener(INTRO_IMAGE_READY_EVENT, reveal, { once: true });
    const timeout = window.setTimeout(() => {
      window.removeEventListener(INTRO_IMAGE_READY_EVENT, reveal);
      reveal();
    }, 10_000);

    const variant = window.matchMedia("(min-width: 900px)").matches
      ? "wide"
      : "four-three";
    const image = document.querySelector<HTMLImageElement>(
      `[data-intro-image="${variant}"]`,
    );
    if (image?.complete) reveal();

    return () => {
      window.removeEventListener(INTRO_IMAGE_READY_EVENT, reveal);
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div aria-hidden={!ready} inert={!ready}>
        {children}
      </div>
      {!ready && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-[#f9f6f4] text-[#605557]"
          role="status"
          aria-label="Loading"
        >
          <span className="size-9 animate-spin rounded-full border-4 border-[#e7d7d7] border-t-[#ad1425]" />
          <span className="text-sm font-semibold">Loading</span>
        </div>
      )}
    </>
  );
}
