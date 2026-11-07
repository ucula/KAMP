import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const mentors = Array.from(
  { length: 34 },
  (_, index) =>
    `/kamp6/mentors/mentor-${String(index + 1).padStart(2, "0")}.png`,
);

const container =
  "mx-auto w-[calc(100%-48px)] max-w-[1360px] min-[900px]:w-[calc(100%-96px)]";
const section = "scroll-mt-[92px] py-24 min-[900px]:py-[130px]";
const heading =
  "max-w-[850px] text-[52px] leading-[.99] font-extrabold tracking-[-.075em] min-[900px]:text-[clamp(50px,6.3vw,90px)]";
const headingRow =
  "grid grid-cols-1 gap-8 min-[900px]:grid-cols-[1.2fr_.8fr] min-[900px]:gap-[70px]";

export function Mentors() {
  return (
    <section id="mentors" aria-labelledby="mentors-title" className={section}>
      <div className={container}>
        <p className="border-b border-[#ded5d5] pb-[25px] text-xs font-extrabold tracking-[.22em] text-[#ad1425]" />
        <div className={headingRow}>
          <h2 id="mentors-title" className={heading}>
            The People who help{" "}
            <span className="text-[#ad1425]">light the way.</span>
          </h2>
        </div>
        <div
          aria-label="KAMP Engineering 6 mentors"
          className="mx-auto grid max-w-[1120px] grid-cols-2 gap-4 min-[600px]:grid-cols-3 min-[900px]:grid-cols-5"
        >
          {mentors.map((src, index) => (
            <Card
              key={src}
              className="overflow-hidden rounded-[15px] border-[#eadfdf] bg-[#2c1215]"
            >
              <CardContent className="p-0">
                <Image
                  src={src}
                  alt={`KAMP Engineering 6 mentor profile ${index + 1}`}
                  width={159}
                  height={212}
                  sizes="(max-width: 599px) 50vw, (max-width: 899px) 33vw, (max-width: 1199px) 20vw, 220px"
                  className="h-auto w-full"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
