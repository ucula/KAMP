"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type SyntheticEvent } from "react";
import { HOME_IMAGE_LOAD_EVENT, HOME_IMAGES_READY_EVENT } from "./home-image-gate";
import { preloadResponsiveImage } from "./preload-responsive-image";

export function ActivityGallery({ photos, label }: { photos: { wide: string; fourThree: string }[]; label: string }) {
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [direction, setDirection] = useState<"previous" | "next">("next");
  const [canRotate, setCanRotate] = useState(false);
  const loadedVariants = useRef(new Set<string>());
  const pendingLoads = useRef(new Map<string, Promise<boolean>>());
  const currentActive = active >= 0 && active < photos.length ? active : 0;
  const currentPrevious =
    previous !== null && previous >= 0 && previous < photos.length
      ? previous
      : null;
  useEffect(() => {
    const startCarousel = () => setCanRotate(true);
    window.addEventListener(HOME_IMAGES_READY_EVENT, startCarousel, { once: true });
    if (document.querySelector('[data-home-images-ready="true"]')) startCarousel();
    return () => window.removeEventListener(HOME_IMAGES_READY_EVENT, startCarousel);
  }, []);
  const preloadPhoto = useCallback(
    (index: number) => {
      const photo = photos[index];
      if (!photo) return Promise.resolve(false);

      const wide = window.matchMedia("(min-width: 900px)").matches;
      const variant = wide ? "wide" : "fourThree";
      const key = `${index}:${variant}`;
      if (loadedVariants.current.has(key)) return Promise.resolve(true);
      const existing = pendingLoads.current.get(key);
      if (existing) return existing;

      const pending = preloadResponsiveImage(
        photo[variant],
        wide ? "(min-width: 900px) 50vw, 1px" : "(max-width: 899px) 100vw, 1px",
      ).then((loaded) => {
        if (loaded) loadedVariants.current.add(key);
        pendingLoads.current.delete(key);
        return loaded;
      });
      pendingLoads.current.set(key, pending);
      return pending;
    },
    [photos],
  );

  const showPhoto = useCallback(
    (index: number, step: "previous" | "next") => {
      if (index === currentActive) return;
      void preloadPhoto(index).then((loaded) => {
        if (!loaded) return;
        setPrevious(currentActive);
        setDirection(step);
        setActive(index);
      });
    },
    [currentActive, preloadPhoto],
  );

  useEffect(() => {
    if (!photos.length || !canRotate || photos.length < 2) return;
    let cancelled = false;
    let timer: number | undefined;
    const next = (currentActive + 1) % photos.length;
    void preloadPhoto(next).then((loaded) => {
      if (loaded && !cancelled) {
        timer = window.setTimeout(() => showPhoto(next, "next"), 6000);
      }
    });
    return () => {
      cancelled = true;
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [canRotate, currentActive, photos.length, preloadPhoto, showPhoto]);

  const changePhoto = (step: -1 | 1) => {
    if (!photos.length) return;
    const next = (currentActive + step + photos.length) % photos.length;
    showPhoto(next, step === 1 ? "next" : "previous");
  };
  const renderPhoto = (index: number, animation: string, onAnimationEnd?: () => void) => {
    const photo = photos[index];
    if (!photo) return null;
    const reportImageReady = (event: SyntheticEvent<HTMLImageElement>) => {
      if (index === 0 && event.currentTarget.getClientRects().length > 0) {
        window.dispatchEvent(new Event(HOME_IMAGE_LOAD_EVENT));
      }
    };

    return (
      <div
        key={index}
        aria-hidden={index !== currentActive}
        onAnimationEnd={onAnimationEnd}
        className={`absolute inset-0 ${animation}`}
      >
        <Image
          src={photo.wide}
          alt={`${label} photo ${index + 1}`}
          fill
          sizes="(min-width: 900px) 50vw, 1px"
          className="hidden object-cover min-[900px]:block"
          data-home-critical-image={index === 0 ? "true" : undefined}
          onLoad={reportImageReady}
          onError={reportImageReady}
          loading={index === currentActive ? "eager" : "lazy"}
        />
        <Image
          src={photo.fourThree}
          alt=""
          fill
          sizes="(max-width: 899px) 100vw, 1px"
          className="object-cover min-[900px]:hidden"
          data-home-critical-image={index === 0 ? "true" : undefined}
          onLoad={reportImageReady}
          onError={reportImageReady}
          loading={index === currentActive ? "eager" : "lazy"}
        />
      </div>
    );
  };

  if (!photos.length) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {currentPrevious !== null && renderPhoto(currentPrevious, `carousel-out-${direction}`)}
      {renderPhoto(currentActive, currentPrevious !== null ? `carousel-in-${direction}` : "", () => setPrevious(null))}
      <button type="button" onClick={() => changePhoto(-1)} aria-label={`Previous ${label.toLowerCase()} photo`} className="absolute top-1/2 left-4 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/25 text-white shadow-sm backdrop-blur-md transition hover:bg-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white min-[900px]:left-5"><ArrowLeft size={22} aria-hidden="true" /></button>
      <button type="button" onClick={() => changePhoto(1)} aria-label={`Next ${label.toLowerCase()} photo`} className="absolute top-1/2 right-4 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/25 text-white shadow-sm backdrop-blur-md transition hover:bg-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white min-[900px]:right-5"><ArrowRight size={22} aria-hidden="true" /></button>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-0 min-[900px]:gap-1">
        {photos.map((photo, index) => (
          <button
            key={photo.wide}
            type="button"
            aria-label={`Show ${label.toLowerCase()} photo ${index + 1} of ${photos.length}`}
            aria-pressed={index === currentActive}
            onClick={() => showPhoto(index, index > currentActive ? "next" : "previous")}
            className="flex h-5 w-5 appearance-none items-center justify-center border-0 bg-transparent p-0 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white min-[900px]:h-6 min-[900px]:w-6"
          >
            <span className={`block h-1.5 w-4 rounded-[2px] border border-white/50 transition-colors hover:bg-white/70 min-[900px]:h-2 min-[900px]:w-5 ${index === currentActive ? "bg-white/75" : "bg-white/30"}`} />
          </button>
        ))}
      </div>
      <span className="sr-only" aria-live="polite">{label} photo {currentActive + 1} of {photos.length}</span>
    </div>
  );
}
