import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { homeTopicHeadingClass, TextHeading } from "@/components/ui/text-heading";

const mentors = [
  "E35.png",
  "E40.png",
  "E43-1.png",
  "E43-2.png",
  "E45.png",
  "E46-1.png",
  "E46-2.png",
  "E46-3.png",
  "E46-4.png",
  "E46-5.png",
  "E48-1.png",
  "E48-2.png",
  "E48-3.png",
  "E49.png",
  "E50-1.png",
  "E50-2.png",
  "E51-1.png",
  "E51-2.png",
  "E53-1.png",
  "E53-2.png",
  "E54-1.png",
  "E54-2.png",
  "E54-3.png",
  "E57-1.png",
  "E57-2.png",
  "E58-1.png",
  "E58-2.png",
  "E59-1.png",
  "E59-2.png",
  "E59-3.png",
  "E60-1.png",
  "E60-2.png",
  "E65.png",
  "E68.png",
].map((name) => `/kamp6/mentors/${name}`);

const container =
  "mx-auto w-[calc(100%-48px)] max-w-[1220px] min-[900px]:w-[calc(100%-96px)]";
const section = "scroll-mt-[92px] py-16 min-[900px]:py-20";
const heading = `${homeTopicHeadingClass} max-w-none`;

export function Mentors() {
  return (
    <section id="mentors" aria-labelledby="mentors-title" className={section}>
      <div className={container}>
        <p className="border-b border-[#ded5d5] pb-[25px] text-xs font-extrabold tracking-[.22em] text-[#ad1425]" />
        <div>
          <TextHeading
            as="h2"
            id="mentors-title"
            className={heading}
            text="Mentors of"
            accent="KAMP ENGINEERING 6."
            accentClassName="text-[#ad1425] max-[1119px]:block"
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
