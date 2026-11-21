"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function ActivityGallery({ photos, label }: { photos: { wide: string; fourThree: string }[]; label: string }) {
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  useEffect(() => {
    const timer = window.setInterval(() => {
      setPrevious(active);
      setActive((current) => (current + 1) % photos.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [active, photos.length]);

  const changePhoto = (step: -1 | 1) => {
    setPrevious(active);
    setActive((current) => (current + step + photos.length) % photos.length);
  };
  const renderPhoto = (index: number, animation: string, onAnimationEnd?: () => void) => (
    <div key={index} onAnimationEnd={onAnimationEnd} className={`absolute inset-0 ${animation}`}>
      <Image
        src={photos[index].wide}
        alt={`${label} photo ${index + 1}`}
        fill
        sizes="(min-width: 900px) 50vw, 1px"
        className="hidden object-cover min-[900px]:block"
      />
      <Image
        src={photos[index].fourThree}
        alt=""
        fill
        sizes="(max-width: 899px) 100vw, 1px"
        className="object-cover min-[900px]:hidden"
      />
    </div>
  );

  return (
    <div className="absolute inset-0">
      {previous !== null && renderPhoto(previous, "gallery-crossfade-out")}
      {renderPhoto(active, previous !== null ? "gallery-crossfade-in" : "", () => setPrevious(null))}
      <button type="button" onClick={() => changePhoto(-1)} aria-label={`Previous ${label.toLowerCase()} photo`} className="absolute top-1/2 left-4 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#ad1425] shadow-sm transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad1425] min-[900px]:left-5"><ArrowLeft size={22} aria-hidden="true" /></button>
      <button type="button" onClick={() => changePhoto(1)} aria-label={`Next ${label.toLowerCase()} photo`} className="absolute top-1/2 right-4 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#ad1425] shadow-sm transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad1425] min-[900px]:right-5"><ArrowRight size={22} aria-hidden="true" /></button>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-0 rounded-full bg-[#211a1b]/70 px-1 py-0.5 min-[900px]:gap-1 min-[900px]:px-1.5">
        {photos.map((photo, index) => (
          <button
            key={photo.wide}
            type="button"
            aria-label={`Show ${label.toLowerCase()} photo ${index + 1} of ${photos.length}`}
            aria-pressed={index === active}
            onClick={() => {
              if (index !== active) {
                setPrevious(active);
                setActive(index);
              }
            }}
            className="flex size-4 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white min-[900px]:size-6"
          >
            <span className={`size-1 rounded-full transition-colors min-[900px]:size-1.5 ${index === active ? "bg-white" : "bg-white/50"}`} />
          </button>
        ))}
      </div>
      <span className="sr-only" aria-live="polite">{label} photo {active + 1} of {photos.length}</span>
    </div>
  );
}
