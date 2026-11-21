"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type HeroSlide = { name: string; wide: string; fourThree: string };

export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
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
  }, [active, slides.length]);

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
  const renderSlide = (
    index: number,
    animation = "",
    onAnimationEnd?: () => void,
  ) => (
    <div
      key={index}
      aria-hidden={index !== active}
      onAnimationEnd={onAnimationEnd}
      className={`absolute inset-0 ${animation}`}
    >
      <Image
        src={slides[index].wide}
        alt={index === active ? `KAMP Engineering 6 intro slide ${index + 1}` : ""}
        fill
        sizes="(max-width: 899px) calc(100vw - 48px), (max-width: 1456px) calc(100vw - 96px), 1360px"
        quality={90}
        className="hidden object-cover min-[900px]:block"
        preload={index === 0}
      />
      <Image
        src={slides[index].fourThree}
        alt=""
        fill
        sizes="(max-width: 899px) calc(100vw - 48px), 1px"
        className="object-cover min-[900px]:hidden"
      />
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
        {previous !== null &&
          renderSlide(previous, `carousel-out-${direction}`)}
        {renderSlide(
          active,
          previous !== null ? `carousel-in-${direction}` : "",
          () => setPrevious(null),
        )}
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => moveSlide(-1)}
          aria-label="Previous slide"
          className="absolute top-1/2 left-4 z-10 size-11 -translate-y-1/2 rounded-full border-white/30 bg-white/25 text-white shadow-sm backdrop-blur-md hover:bg-white/40 min-[900px]:left-6"
        >
          <ArrowLeft size={20} aria-hidden="true" />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => moveSlide(1)}
          aria-label="Next slide"
          className="absolute top-1/2 right-4 z-10 size-11 -translate-y-1/2 rounded-full border-white/30 bg-white/25 text-white shadow-sm backdrop-blur-md hover:bg-white/40 min-[900px]:right-6"
        >
          <ArrowRight size={20} aria-hidden="true" />
        </Button>
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-0 min-[900px]:gap-1">
          {slides.map((slide, index) => (
            <button
              key={slide.wide}
              type="button"
              aria-label={`Show image ${index + 1} of ${slides.length}`}
              aria-pressed={index === active}
              onClick={() => selectSlide(index)}
              className="flex h-5 w-5 appearance-none items-center justify-center border-0 bg-transparent p-0 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white min-[900px]:h-6 min-[900px]:w-6"
            >
              <span className={`block h-1.5 w-4 rounded-[2px] border border-white/50 transition-colors hover:bg-white/70 min-[900px]:h-2 min-[900px]:w-5 ${index === active ? "bg-white/75" : "bg-white/30"}`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
