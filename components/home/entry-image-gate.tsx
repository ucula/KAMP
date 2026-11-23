"use client";

import { getImageProps } from "next/image";
import { useEffect, useState } from "react";
import { homeImagesAreReady, markHomeImagesReady } from "./home-image-gate";

export function EntryImageGate({
  children,
  images,
}: {
  children: React.ReactNode;
  images: { wide: string; fourThree: string }[];
}) {
  const [ready, setReady] = useState(homeImagesAreReady);

  useEffect(() => {
    if (homeImagesAreReady()) return;
    let active = true;
    const wide = window.matchMedia("(min-width: 900px)").matches;
    const loads = images.map((photo, index) => {
      const { props } = getImageProps({
        src: wide ? photo.wide : photo.fourThree,
        alt: "",
        fill: true,
        sizes: index === 0
          ? wide ? "(min-width: 1316px) 1220px, calc(100vw - 96px)" : "calc(100vw - 48px)"
          : wide ? "50vw" : "100vw",
      });
      return new Promise<void>((resolve) => {
        const image = new window.Image();
        image.onload = () => resolve();
        image.onerror = () => resolve();
        image.sizes = props.sizes || "100vw";
        image.srcset = props.srcSet || "";
        image.src = props.src;
        if (image.complete) resolve();
      });
    });
    const timeout = window.setTimeout(() => {
      if (active) {
        markHomeImagesReady();
        setReady(true);
      }
    }, 10_000);
    Promise.all(loads).then(() => {
      if (active) {
        window.clearTimeout(timeout);
        markHomeImagesReady();
        setReady(true);
      }
    });
    return () => {
      active = false;
      window.clearTimeout(timeout);
    };
  }, [images]);

  return (
    <>
      <div aria-hidden={!ready} inert={!ready}>{children}</div>
      {!ready && <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-[#f9f6f4] text-[#605557]" role="status" aria-label="Loading"><span className="size-9 animate-spin rounded-full border-4 border-[#e7d7d7] border-t-[#ad1425]" /><span className="text-sm font-semibold">Loading</span></div>}
    </>
  );
}
