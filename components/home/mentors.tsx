import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { TypewriterHeading } from "@/components/ui/typewriter-heading";

const mentors = Array.from(
  { length: 34 },
  (_, index) =>
    `/kamp6/mentors/updated/mentor-${String(index + 1).padStart(2, "0")}.png`,
);

const container =
  "mx-auto w-[calc(100%-48px)] max-w-[1220px] min-[900px]:w-[calc(100%-96px)]";
const section = "scroll-mt-[92px] py-16 min-[900px]:py-20";
const heading =
  "w-full whitespace-nowrap text-[clamp(22px,6vw,45px)] leading-[1.2] font-extrabold min-[900px]:text-[clamp(42px,5vw,72px)]";

export function Mentors() {
  return (
    <section id="mentors" aria-labelledby="mentors-title" className={section}>
      <div className={container}>
        <p className="border-b border-[#ded5d5] pb-[25px] text-xs font-extrabold tracking-[.22em] text-[#ad1425]" />
        <div className="w-full">
          <TypewriterHeading
            as="h2"
            id="mentors-title"
            className={heading}
            text="Mentors of"
            accent="KAMP ENGINEERING 6."
            accentClassName="text-[#ad1425]"
          />
        </div>
        <div
          aria-label="KAMP Engineering 6 mentors"
          className="mx-auto grid max-w-[1120px] grid-cols-2 gap-4 min-[600px]:grid-cols-3 min-[900px]:grid-cols-4"
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
                  width={1080}
                  height={1440}
                  sizes="(max-width: 599px) 50vw, (max-width: 899px) 33vw, 280px"
                  className="block h-auto w-full"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
