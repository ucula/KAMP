"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HeroCarousel } from "./hero-carousel";
import { useReplayOnView } from "./use-replay-on-view";

const container =
  "mx-auto w-[calc(100%-48px)] max-w-[1360px] min-[900px]:w-[calc(100%-96px)]";
const cta = cn(
  buttonVariants(),
  "min-w-[220px] justify-between gap-8 px-6 py-[18px] text-xs font-extrabold tracking-[.1em] no-underline transition-transform hover:-translate-y-0.5",
);
const tickerItems = [
  "KNOWLEDGE SHARING",
  "MEANINGFUL CONNECTIONS",
  "QUALITY MENTORSHIP",
  "LEADERSHIP DEVELOPMENT",
  "STRONGER COMMUNITIES",
];

export function Intro() {
  const { ref, visible } = useReplayOnView();

  return (
    <>
      <section
        aria-labelledby="hero-title"
        className="relative overflow-hidden bg-[#f9f6f4]"
      >
        <div
          aria-hidden="true"
          className="absolute top-[10px] right-[-250px] size-[850px] rounded-full opacity-65 max-[600px]:top-[110px] max-[600px]:right-[-260px] max-[600px]:size-[490px]"
          style={{
            background:
              "radial-gradient(circle, #e6a2a8 0, #f4d8d9 38%, transparent 70%)",
          }}
        />
        <div className={cn(container, "relative pt-12 min-[900px]:pt-16")}>
          {/* <p className="text-[10px] leading-[1.7] font-extrabold tracking-[.23em] text-[#ad1425] min-[600px]:text-xs">
            KASETSART ALUMNI MENTORSHIP PROGRAM <span className="mx-3">•</span>{" "}
            ENGINEERING 6
          </p> */}
          <div className="grid gap-6 min-[900px]:mb-14">
            <h1
              ref={ref}
              id="hero-title"
              aria-label="Where Experience Inspires Potential."
              className={cn("typewriter-heading max-w-[920px] text-[clamp(22px,6vw,45px)] leading-[1.2] font-extrabold min-[900px]:text-[clamp(42px,5vw,72px)]", visible && "is-visible")}
            >
              <span className="typewriter-layout" aria-hidden="true">
                <span>Where</span> <span>Experience</span> <span>Inspires</span>
                {"\u00a0"}
                <span>Potential.</span>
              </span>
              <span className="typewriter-display" aria-hidden="true">
                <span>Where</span> <span>Experience</span> <span>Inspires</span>
                {"\u00a0"}
                <span className="text-[#ad1425]">Potential.</span>
              </span>
            </h1>
            <p className="mb-[30px] text-xl leading-[1.55] text-[#605557] min-[900px]:text-xl">
              A community where engineering experience meets emerging talent,
              empowering the next generation to learn, connect, and lead.
            </p>
            {/* <div className="max-w-[760px]">
              <Link href="#about" className={cta}>
                DISCOVER KAMP6{" "}
                <span aria-hidden="true" className="text-[19px] leading-none">
                  ↘
                </span>
              </Link>
            </div> */}
          </div>
          <HeroCarousel />
          <div className="flex justify-between gap-5 py-7 text-[9px] font-bold tracking-[.17em] text-[#8b7779] min-[600px]:text-[11px]">
            <span>KAMP ENGINEERING 6</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </div>
      </section>
      <div className="overflow-hidden bg-[#ad1425] py-4 text-white">
        <p className="sr-only">{tickerItems.join(" · ")}</p>
        <div className="values-ticker-track flex w-max">
          {[0, 1, 2, 3].map((copy) => (
            <div
              key={copy}
              aria-hidden="true"
              className="values-ticker-group flex shrink-0 items-center gap-8 whitespace-nowrap pr-8 text-[11px] leading-[1.8] font-extrabold tracking-[.12em] min-[600px]:text-[13px]"
            >
              {tickerItems.map((item) => (
                <span key={item} className="inline-flex items-center gap-8">
                  {item} <b className="text-[15px]">✦</b>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
