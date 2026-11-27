"use client";

import { useEffect, useRef, useState } from "react";

export const HOME_IMAGE_LOAD_EVENT = "kamp-home-image-load";
export const HOME_IMAGES_READY_EVENT = "kamp-home-images-ready";

let homeImagesReady = false;
export function homeImagesAreReady() {
  return homeImagesReady;
}

export function markHomeImagesReady() {
  homeImagesReady = true;
}

export function HomeImageGate({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(homeImagesReady);
  const gateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (homeImagesReady) {
      gateRef.current?.setAttribute("data-home-images-ready", "true");
      window.dispatchEvent(new Event(HOME_IMAGES_READY_EVENT));
      return;
    }
    let pageReady = false;
    const reveal = () => {
      if (pageReady) return;
      pageReady = true;
      markHomeImagesReady();
      gateRef.current?.setAttribute("data-home-images-ready", "true");
      setReady(true);
      window.dispatchEvent(new Event(HOME_IMAGES_READY_EVENT));
    };
    const checkImages = () => {
      if (pageReady) return;
      const images = Array.from(
        document.querySelectorAll<HTMLImageElement>(
          '[data-home-critical-image="true"]',
        ),
      ).filter((image) => image.getClientRects().length > 0);
      if (images.length > 0 && images.every((image) => image.complete)) {
        reveal();
        window.removeEventListener(HOME_IMAGE_LOAD_EVENT, checkImages);
      }
    };
    window.addEventListener(HOME_IMAGE_LOAD_EVENT, checkImages);
    const timeout = window.setTimeout(() => {
      window.removeEventListener(HOME_IMAGE_LOAD_EVENT, checkImages);
      reveal();
    }, 10_000);

    checkImages();

    return () => {
      window.removeEventListener(HOME_IMAGE_LOAD_EVENT, checkImages);
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div
        ref={gateRef}
        data-home-images-ready={ready ? "true" : undefined}
        aria-hidden={!ready}
        inert={!ready}
      >
        {children}
      </div>
      {!ready && (
        <div
          className="fluid-type fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-[#f9f6f4] text-[#605557]"
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
