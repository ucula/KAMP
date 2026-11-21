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
    wide: "/kamp6/activities/intro-kamp-day1-4x3.webp",
    fourThree: "/kamp6/activities/intro-kamp-day1-16x9.webp",
    alt: "Participants on the first day of KAMP",
  },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [direction, setDirection] = useState<"previous" | "next">("next");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPrevious(active);
      setDirection("next");
      setActive((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [active]);

  const moveSlide = (step: -1 | 1) => {
    setPrevious(active);
    setDirection(step === 1 ? "next" : "previous");
    setActive((current) => (current + step + slides.length) % slides.length);
  };
  const selectSlide = (index: number) => {
    if (index !== active) {
      setPrevious(active);
      setDirection(index > active ? "next" : "previous");
      setActive(index);
    }
  };
  const renderSlide = (index: number, animation = "", onAnimationEnd?: () => void) => (
    <div
      key={index}
      aria-hidden={index !== active}
      onAnimationEnd={onAnimationEnd}
      className={`absolute inset-0 ${animation}`}
    >
      <Image
        src={slides[index].wide}
        alt={index === active ? slides[index].alt : ""}
        fill
        sizes="(max-width: 899px) calc(100vw - 48px), (max-width: 1456px) calc(100vw - 96px), 1360px"
        quality={90}
        className="hidden object-cover min-[900px]:block"
        preload={index === 0}
      />
      <Image src={slides[index].fourThree} alt="" fill sizes="(max-width: 899px) calc(100vw - 48px), 1px" className="object-cover min-[900px]:hidden" />
    </div>
  );

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="KAMP6 experience gallery"
      className="mx-auto w-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#33292a] min-[600px]:aspect-[4/3] min-[900px]:aspect-video min-[600px]:rounded-3xl">
        {previous !== null && renderSlide(previous, `carousel-out-${direction}`)}
        {renderSlide(active, previous !== null ? `carousel-in-${direction}` : "", () => setPrevious(null))}
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => moveSlide(-1)}
          aria-label="Previous slide"
          className="absolute top-1/2 left-4 z-10 size-11 -translate-y-1/2 rounded-full border-white/70 bg-white/85 text-[#ad1425] shadow-sm hover:bg-white min-[900px]:left-6"
        >
          <ArrowLeft size={20} aria-hidden="true" />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => moveSlide(1)}
          aria-label="Next slide"
          className="absolute top-1/2 right-4 z-10 size-11 -translate-y-1/2 rounded-full border-white/70 bg-white/85 text-[#ad1425] shadow-sm hover:bg-white min-[900px]:right-6"
        >
          <ArrowRight size={20} aria-hidden="true" />
        </Button>
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-0 rounded-full bg-[#211a1b]/70 px-1 py-0.5 min-[900px]:gap-1 min-[900px]:px-1.5">
          {slides.map((slide, index) => (
            <button
              key={slide.wide}
              type="button"
              aria-label={`Show image ${index + 1} of ${slides.length}`}
              aria-pressed={index === active}
              onClick={() => selectSlide(index)}
              className="flex size-4 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white min-[900px]:size-6"
            >
              <span className={`size-1 rounded-full transition-colors min-[900px]:size-1.5 ${index === active ? "bg-white" : "bg-white/50"}`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
