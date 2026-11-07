"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    src: "/kamp6/hero-collaboration.png",
    alt: "Illustration of an engineering group collaborating around a prototype",
    title: "Learn together",
  },
  // {
  //   src: "/kamp6/hero-mentoring.png",
  //   alt: "Illustration of a small-group engineering mentorship conversation",
  //   title: "Share experience",
  // },
  // {
  //   src: "/kamp6/hero-workshop.png",
  //   alt: "Illustration of learners exploring an engineering workshop",
  //   title: "Build what comes next",
  // },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div aria-label="KAMP6 experience gallery" className="relative h-[320px] overflow-hidden rounded-2xl bg-[#33292a] min-[600px]:h-[clamp(340px,43vw,640px)] min-[600px]:rounded-3xl">
      {slides.map((slide, index) => (
        <div key={slide.src} aria-hidden={index !== active} className={`absolute inset-0 transition-opacity duration-700 [&_img]:saturate-[.82] ${index === active ? "opacity-100" : "opacity-0"}`}>
          <Image src={slide.src} alt={index === active ? slide.alt : ""} fill sizes="(max-width: 900px) 100vw, 1360px" style={{ objectFit: "cover" }} />
        </div>
      ))}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-[#171112a8]" />
      <div className="absolute right-[18px] bottom-[18px] left-[18px] z-10 flex items-end justify-between gap-5 text-white min-[600px]:right-8 min-[600px]:bottom-[30px] min-[600px]:left-8">
        <div className="grid gap-[10px]">
          <span className="text-xs font-extrabold tracking-[.2em]">0{active + 1} / 0{slides.length}</span>
          <strong className="text-[clamp(22px,3vw,36px)] tracking-[-.04em]">{slides[active].title}</strong>
        </div>
        {slides.length > 1 && (
          <div className="flex gap-2">
            <Button type="button" variant="outline" size="icon" onClick={() => setActive((current) => (current - 1 + slides.length) % slides.length)} aria-label="Previous slide" className="size-[38px] text-[22px] min-[600px]:size-11">←</Button>
            <Button type="button" variant="outline" size="icon" onClick={() => setActive((current) => (current + 1) % slides.length)} aria-label="Next slide" className="size-[38px] text-[22px] min-[600px]:size-11">→</Button>
          </div>
        )}
      </div>
    </div>
  );
}
