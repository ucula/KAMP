"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export function ActivityGallery({ photos, label }: { photos: { wide: string; fourThree: string }[]; label: string }) {
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
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
      <span className="absolute right-4 bottom-4 rounded-full bg-[#211a1b]/75 px-3 py-1.5 text-sm font-bold text-white" aria-live="polite">{active + 1}/{photos.length}</span>
    </div>
  );
}
