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
    src: "/kamp6/activities/wisdom-on-the-road.jpg",
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
      className="relative h-[320px] overflow-hidden rounded-2xl bg-[#33292a] min-[600px]:h-[clamp(340px,43vw,640px)] min-[600px]:rounded-3xl"
    >
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
            sizes="(max-width: 900px) 100vw, 1360px"
            style={{ objectFit: "cover" }}
            preload={index === 0}
          />
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={() => setActive((current) => (current - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
        className="absolute top-1/2 left-4 z-10 size-11 -translate-y-1/2 border-white/50 bg-[#211a1b]/70 text-white hover:bg-[#211a1b] hover:text-white min-[600px]:left-7"
      >
        <ArrowLeft size={20} aria-hidden="true" />
      </Button>
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={() => setActive((current) => (current + 1) % slides.length)}
        aria-label="Next slide"
        className="absolute top-1/2 right-4 z-10 size-11 -translate-y-1/2 border-white/50 bg-[#211a1b]/70 text-white hover:bg-[#211a1b] hover:text-white min-[600px]:right-7"
      >
        <ArrowRight size={20} aria-hidden="true" />
      </Button>
    </div>
  );
}
