"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    src: "/kamp6/activities/mentoring-sessions.jpg",
    alt: "Mentors and mentees sharing a meal around a table",
  },
  {
    src: "/kamp6/activities/mentor-spotlight.jpg",
    alt: "Two engineering professionals speaking in an interview setting",
  },
  {
    src: "/kamp6/activities/wisdom-on-the-road-hero.jpg",
    alt: "KAMP participants and hosts gathered during a site visit",
  },
  {
    src: "/kamp6/activities/kamp-learning-space.jpg",
    alt: "Large group gathered in a lecture hall at a KAMP event",
  },
  {
    src: "/kamp6/activities/engineering-workshop.jpg",
    alt: "Students collaborating around a large sheet of notes during a workshop",
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
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#33292a] min-[600px]:aspect-[16/10] min-[900px]:aspect-video min-[600px]:rounded-3xl">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            aria-hidden={index !== active}
            className={`absolute inset-0 transition-opacity duration-700 ${index === active ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={slide.src}
              alt={index === active ? slide.alt : ""}
              fill
              sizes="(max-width: 899px) calc(100vw - 48px), (max-width: 1456px) calc(100vw - 96px), 1360px"
              quality={90}
              className="object-contain"
              preload={index === 0}
            />
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => setActive((current) => (current - 1 + slides.length) % slides.length)}
          aria-label="Previous slide"
          className="size-10 border-[#ad1425] bg-white text-[#ad1425] hover:bg-[#ad1425] hover:text-white"
        >
          <ArrowLeft size={18} aria-hidden="true" />
        </Button>
        <div className="flex items-center">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show image ${index + 1} of ${slides.length}`}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
              className="flex size-8 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad1425]"
            >
              <span className={`size-2 rounded-full ${index === active ? "bg-[#ad1425]" : "bg-[#ad1425]/35"}`} />
            </button>
          ))}
        </div>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => setActive((current) => (current + 1) % slides.length)}
          aria-label="Next slide"
          className="size-10 border-[#ad1425] bg-white text-[#ad1425] hover:bg-[#ad1425] hover:text-white"
        >
          <ArrowRight size={18} aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}
