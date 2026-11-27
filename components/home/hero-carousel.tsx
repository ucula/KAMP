"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type SyntheticEvent } from "react";
import { Button } from "@/components/ui/button";
import { HOME_IMAGE_LOAD_EVENT, HOME_IMAGES_READY_EVENT } from "./home-image-gate";
import { preloadResponsiveImage } from "./preload-responsive-image";

type HeroSlide = { name: string; wide: string; fourThree: string };

export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [direction, setDirection] = useState<"previous" | "next">("next");
  const [canRotate, setCanRotate] = useState(false);
  const loadedVariants = useRef(new Set<string>());
  const pendingLoads = useRef(new Map<string, Promise<boolean>>());

  useEffect(() => {
    const startCarousel = () => setCanRotate(true);
    window.addEventListener(HOME_IMAGES_READY_EVENT, startCarousel, { once: true });
    if (document.querySelector('[data-home-images-ready="true"]')) startCarousel();
    return () => window.removeEventListener(HOME_IMAGES_READY_EVENT, startCarousel);
  }, []);

  const preloadSlide = useCallback(
    (index: number) => {
      const wide = window.matchMedia("(min-width: 900px)").matches;
      const variant = wide ? "wide" : "fourThree";
      const key = `${index}:${variant}`;
      if (loadedVariants.current.has(key)) return Promise.resolve(true);
      const existing = pendingLoads.current.get(key);
      if (existing) return existing;

      const photo = slides[index];
      if (!photo) return Promise.resolve(false);
      const pending = preloadResponsiveImage(
        photo[variant],
        wide
          ? "(min-width: 1316px) 1220px, (min-width: 900px) calc(100vw - 96px), 1px"
          : "(max-width: 899px) calc(100vw - 48px), 1px",
      ).then((loaded) => {
        if (loaded) loadedVariants.current.add(key);
        pendingLoads.current.delete(key);
        return loaded;
      });
      pendingLoads.current.set(key, pending);
      return pending;
    },
    [slides],
  );

  const showSlide = useCallback(
    (index: number, step: "previous" | "next") => {
      if (index === active) return;
      void preloadSlide(index).then((loaded) => {
        if (!loaded) return;
        setPrevious(active);
        setDirection(step);
        setActive(index);
      });
    },
    [active, preloadSlide],
  );

  useEffect(() => {
    if (!canRotate || slides.length < 2) return;
    let cancelled = false;
    let timer: number | undefined;
    const next = (active + 1) % slides.length;
    void preloadSlide(next).then((loaded) => {
      if (loaded && !cancelled) {
        timer = window.setTimeout(() => showSlide(next, "next"), 6000);
      }
    });
    return () => {
      cancelled = true;
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [active, canRotate, preloadSlide, showSlide, slides.length]);

  const moveSlide = (step: -1 | 1) => {
    showSlide(
      (active + step + slides.length) % slides.length,
      step === 1 ? "next" : "previous",
    );
  };
  const selectSlide = (index: number) => {
    showSlide(index, index > active ? "next" : "previous");
  };
  const renderSlide = (
    index: number,
    animation = "",
    onAnimationEnd?: () => void,
  ) => {
    const reportImageReady = (event: SyntheticEvent<HTMLImageElement>) => {
      if (
        event.type === "load" &&
        event.currentTarget.getClientRects().length > 0
      ) {
        const variant = window.matchMedia("(min-width: 900px)").matches
          ? "wide"
          : "fourThree";
        loadedVariants.current.add(`${index}:${variant}`);
      }
      if (index === 0 && event.currentTarget.getClientRects().length > 0) {
        window.dispatchEvent(new Event(HOME_IMAGE_LOAD_EVENT));
      }
    };

    return (
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
          sizes="(min-width: 1316px) 1220px, (min-width: 900px) calc(100vw - 96px), 1px"
          className="hidden object-cover min-[900px]:block"
          data-home-critical-image={index === 0 ? "true" : undefined}
          onLoad={reportImageReady}
          onError={reportImageReady}
          preload={index === 0}
        />
        <Image
          src={slides[index].fourThree}
          alt=""
          fill
          sizes="(max-width: 899px) calc(100vw - 48px), 1px"
          className="object-cover min-[900px]:hidden"
          data-home-critical-image={index === 0 ? "true" : undefined}
          onLoad={reportImageReady}
          onError={reportImageReady}
          loading={index === active ? "eager" : "lazy"}
        />
      </div>
    );
  };

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
