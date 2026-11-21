"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    wide: "/kamp6/activities/intro-closing-16x9.webp",
    fourThree: "/kamp6/activities/intro-closing-4x3.webp",
    alt: "KAMP participants at the closing celebration",
  },
  {
    wide: "/kamp6/activities/intro-dongtansampan-16x9.webp",
    fourThree: "/kamp6/activities/intro-dongtansampan-4x3.webp",
    alt: "KAMP participants at Dongtan Sam Pha",
  },
  {
    wide: "/kamp6/activities/intro-kamp-day1-16x9.webp",
    fourThree: "/kamp6/activities/intro-kamp-day1-4x3.webp",
    alt: "Participants on the first day of KAMP",
  },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      6000,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="KAMP6 experience gallery"
      className="mx-auto w-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#33292a] min-[600px]:aspect-[4/3] min-[900px]:aspect-video min-[600px]:rounded-3xl">
        {slides.map((slide, index) => (
          <div
            key={slide.wide}
            aria-hidden={index !== active}
            className={`absolute inset-0 transition-opacity duration-700 ${index === active ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={slide.wide}
              alt={index === active ? slide.alt : ""}
              fill
              sizes="(max-width: 899px) calc(100vw - 48px), (max-width: 1456px) calc(100vw - 96px), 1360px"
              quality={90}
              className="hidden object-cover min-[900px]:block"
              preload={index === 0}
            />
            <Image src={slide.fourThree} alt="" fill sizes="(max-width: 899px) calc(100vw - 48px), 1px" className="object-cover min-[900px]:hidden" />
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => setActive((current) => (current - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
          className="absolute top-1/2 left-4 z-10 size-11 -translate-y-1/2 rounded-full border-white/70 bg-white/85 text-[#ad1425] shadow-sm hover:bg-white min-[900px]:left-6"
        >
          <ArrowLeft size={20} aria-hidden="true" />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => setActive((current) => (current + 1) % slides.length)}
          aria-label="Next slide"
          className="absolute top-1/2 right-4 z-10 size-11 -translate-y-1/2 rounded-full border-white/70 bg-white/85 text-[#ad1425] shadow-sm hover:bg-white min-[900px]:right-6"
        >
          <ArrowRight size={20} aria-hidden="true" />
        </Button>
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center rounded-full bg-[#211a1b]/65 px-2 py-1">
          {slides.map((slide, index) => (
            <button
              key={slide.wide}
              type="button"
              aria-label={`Show image ${index + 1} of ${slides.length}`}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
              className="flex size-8 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className={`size-2 rounded-full ${index === active ? "bg-white" : "bg-white/50"}`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
