"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./home.module.css";

const slides = [
  { src: "/kamp6/hero-collaboration.png", alt: "Illustration of an engineering group collaborating around a prototype", title: "Learn together" },
  { src: "/kamp6/hero-mentoring.png", alt: "Illustration of a small-group engineering mentorship conversation", title: "Share experience" },
  { src: "/kamp6/hero-workshop.png", alt: "Illustration of learners exploring an engineering workshop", title: "Build what comes next" },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className={styles.carousel} aria-label="KAMP6 experience gallery">
      {slides.map((slide, index) => (
        <div className={styles.carouselSlide} data-active={index === active} aria-hidden={index !== active} key={slide.src}>
          <Image src={slide.src} alt={index === active ? slide.alt : ""} fill sizes="(max-width: 900px) 100vw, 1360px" style={{ objectFit: "cover" }} />
        </div>
      ))}
      <div className={styles.carouselCaption}>
        <div><span>0{active + 1} / 0{slides.length}</span><strong>{slides[active].title}</strong></div>
        <div className={styles.carouselControls}>
          <button type="button" onClick={() => setActive((current) => (current - 1 + slides.length) % slides.length)} aria-label="Previous slide">←</button>
          <button type="button" onClick={() => setActive((current) => (current + 1) % slides.length)} aria-label="Next slide">→</button>
        </div>
      </div>
    </div>
  );
}
