import { cn } from "@/lib/utils";
import { getCategoryPhotos } from "@/lib/kamp-activity-images";
import { HeroCarousel } from "./hero-carousel";

const container =
  "mx-auto w-[calc(100%-48px)] max-w-[1220px] min-[900px]:w-[calc(100%-96px)]";
const tickerItems = [
  "KNOWLEDGE SHARING",
  "MEANINGFUL CONNECTIONS",
  "QUALITY MENTORSHIP",
  "LEADERSHIP DEVELOPMENT",
  "STRONGER COMMUNITIES",
];

export function Intro() {
  const slides = getCategoryPhotos("kamp6/intro");

  return (
    <>
      <section
        aria-labelledby="hero-title"
        className="relative overflow-hidden bg-[#f9f6f4] font-[Arial,Helvetica,sans-serif]"
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
          <div className="grid gap-5 min-[900px]:mb-14">
            <h1
              id="hero-title"
              className="page-title m-0 max-w-none leading-[.95] font-extrabold tracking-[-.07em]"
            >
              <span className="max-[1169px]:block">Where Experiences</span>{" "}
              <span>
                Inspires <span className="text-[#ad1425]">Potential</span>
              </span>
            </h1>
            <p className="mt-0 pt-4 mb-[30px] text-[clamp(15px,2.2vw,30px)] leading-[1.55] text-[#605557]">
              A community where engineering experience meets emerging talent,
              empowering the next generation to learn, connect, and lead.
            </p>
          </div>
          <div className="mt-10">
            <HeroCarousel slides={slides} />
            <div className="flex justify-between gap-5 py-7 text-[clamp(9px,calc(8.43px_+_0.179vw),11px)] font-bold tracking-[.17em] text-[#8b7779]">
              <span>KAMP ENGINEERING 6</span>
              <span>SCROLL TO EXPLORE ↓</span>
            </div>
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
              className="values-ticker-group flex shrink-0 items-center gap-8 whitespace-nowrap pr-8 text-[clamp(9px,calc(7.86px_+_0.357vw),13px)] leading-[1.8] font-extrabold tracking-[.12em]"
            >
              {tickerItems.map((item) => (
                <span key={item} className="inline-flex items-center gap-8">
                  {item} <b className="text-[clamp(12px,calc(11.14px_+_0.268vw),15px)]">✦</b>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
