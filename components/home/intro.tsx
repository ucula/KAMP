import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HeroCarousel } from "./hero-carousel";

const container =
  "mx-auto w-[calc(100%-48px)] max-w-[1360px] min-[900px]:w-[calc(100%-96px)]";
const cta = cn(
  buttonVariants(),
  "min-w-[220px] justify-between gap-8 px-6 py-[18px] text-xs font-extrabold tracking-[.1em] no-underline transition-transform hover:-translate-y-0.5",
);

export function Intro() {
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
        <div
          className={cn(container, "relative pt-[75px] min-[900px]:pt-[90px]")}
        >
          <p className="text-[10px] leading-[1.7] font-extrabold tracking-[.23em] text-[#ad1425] min-[600px]:text-xs">
            KASETSART ALUMNI MENTORSHIP PROGRAM <span className="mx-3">•</span>{" "}
            ENGINEERING 6
          </p>
          <h1
            id="hero-title"
            className="my-[65px] text-[clamp(54px,12vw,72px)] leading-[.95] font-black tracking-[-.08em] min-[900px]:my-20 min-[900px]:text-[clamp(50px,7.3vw,108px)]"
          >
            KAMP ENGINEERING <span className="text-[#ad1425]">6</span>
          </h1>
          <div className="mb-[55px] grid grid-cols-1 items-end gap-8 min-[900px]:mb-20 min-[900px]:grid-cols-[1.2fr_.8fr] min-[900px]:gap-[72px]">
            <h2 className="max-w-[760px] text-[45px] leading-[1.04] font-extrabold tracking-[-.07em] min-[900px]:text-[clamp(42px,5.2vw,76px)]">
              Where Experience Inspires{" "}
              <span className="text-[#ad1425]">Potential.</span>
            </h2>
            <div className="max-w-[440px]">
              <p className="mb-[30px] text-[17px] leading-[1.65] text-[#605557] min-[600px]:text-lg">
                A community where engineering experience meets emerging talent,
                empowering the next generation to learn, connect, and lead.
              </p>
              <Link href="#about" className={cta}>
                DISCOVER KAMP6{" "}
                <span aria-hidden="true" className="text-[19px] leading-none">
                  ↘
                </span>
              </Link>
            </div>
          </div>
          <HeroCarousel />
          <div className="flex justify-between gap-5 py-7 text-[9px] font-bold tracking-[.17em] text-[#8b7779] min-[600px]:text-[11px]">
            <span>KAMP ENGINEERING 6</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </div>
      </section>
      <div className="bg-[#ad1425] px-6 py-[22px] text-white">
        <p className="mx-auto max-w-[1360px] text-center text-[11px] leading-[1.8] font-extrabold tracking-[.12em] min-[600px]:text-[13px] [&_b]:mx-[10px] [&_b]:text-[15px]">
          KNOWLEDGE SHARING <b>✦</b> MEANINGFUL CONNECTIONS <b>✦</b> QUALITY
          MENTORSHIP <b>✦</b> LEADERSHIP DEVELOPMENT <b>✦</b> STRONGER
          COMMUNITIES
        </p>
      </div>
    </>
  );
}
