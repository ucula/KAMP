"use client";

import { getImageProps } from "next/image";
import { useEffect, useState } from "react";
import { homeImagesAreReady, markHomeImagesReady } from "./home-image-gate";

export function EntryImageGate({
  children,
  images,
  introCount,
}: {
  children: React.ReactNode;
  images: { wide: string; fourThree: string }[];
  introCount: number;
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
        sizes: index < introCount
          ? wide
            ? "(min-width: 1316px) 1220px, (min-width: 900px) calc(100vw - 96px), 1px"
            : "(max-width: 899px) calc(100vw - 48px), 1px"
          : wide ? "(min-width: 900px) 50vw, 1px" : "(max-width: 899px) 100vw, 1px",
      });
      return new Promise<boolean>((resolve) => {
        const image = new window.Image();
        image.fetchPriority = index === 0 ? "high" : "low";
        image.onload = () => image.decode().then(() => resolve(true), () => resolve(false));
        image.onerror = () => resolve(false);
        image.sizes = props.sizes || "100vw";
        image.srcset = props.srcSet || "";
        image.src = props.src;
        if (image.complete && image.naturalWidth > 0) {
          image.decode().then(() => resolve(true), () => resolve(false));
        }
      });
    });
    const timeout = window.setTimeout(() => {
      if (active) {
        setReady(true);
      }
    }, 30_000);
    Promise.all(loads).then((results) => {
      if (active) {
        window.clearTimeout(timeout);
        if (results.every(Boolean)) markHomeImagesReady();
        setReady(true);
      }
    });
    return () => {
      active = false;
      window.clearTimeout(timeout);
    };
  }, [images, introCount]);

  return (
    <>
      <div aria-hidden={!ready} inert={!ready}>{children}</div>
      {!ready && <div className="fluid-type fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-[#f9f6f4] text-[#605557]" role="status" aria-label="Loading"><span className="size-9 animate-spin rounded-full border-4 border-[#e7d7d7] border-t-[#ad1425]" /><span className="text-sm font-semibold">Loading</span></div>}
    </>
  );
}
