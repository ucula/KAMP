"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function ActivityGallery({ photos, label }: { photos: { wide: string; fourThree: string }[]; label: string }) {
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [direction, setDirection] = useState<"previous" | "next">("next");
  const currentActive = active >= 0 && active < photos.length ? active : 0;
  const currentPrevious =
    previous !== null && previous >= 0 && previous < photos.length
      ? previous
      : null;
  useEffect(() => {
    if (!photos.length) return;
    const timer = window.setInterval(() => {
      setPrevious(currentActive);
      setDirection("next");
      setActive((current) => {
        const index = current >= 0 && current < photos.length ? current : 0;
        return (index + 1) % photos.length;
      });
    }, 6000);
    return () => window.clearInterval(timer);
  }, [currentActive, photos.length]);

  const changePhoto = (step: -1 | 1) => {
    if (!photos.length) return;
    setPrevious(currentActive);
    setDirection(step === 1 ? "next" : "previous");
    setActive((current) => {
      const index = current >= 0 && current < photos.length ? current : 0;
      return (index + step + photos.length) % photos.length;
    });
  };
  const renderPhoto = (index: number, animation: string, onAnimationEnd?: () => void) => {
    const photo = photos[index];
    if (!photo) return null;

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
          unoptimized={process.env.NODE_ENV === "development"}
          className="hidden object-cover min-[900px]:block"
        />
        <Image
          src={photo.fourThree}
          alt=""
          fill
          sizes="(max-width: 899px) 100vw, 1px"
          unoptimized={process.env.NODE_ENV === "development"}
          className="object-cover min-[900px]:hidden"
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
            onClick={() => {
              if (index !== currentActive) {
                setPrevious(currentActive);
                setDirection(index > currentActive ? "next" : "previous");
                setActive(index);
              }
            }}
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
