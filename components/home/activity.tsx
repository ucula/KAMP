import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const activities = [
  {
    number: "01",
    title: "Mentoring Sessions",
    description:
      "Gain practical insights, professional guides and valuable perspecives from experienced engineering mentors",
    image: "/kamp6/hero-mentoring.png",
    alt: "Illustrative mentorship conversation",
  },
  {
    number: "02",
    title: "Mentor Spotlight",
    description:
      "Discover the experiences, achievements, and perspectives of engineering professionals who inspire the next generation.",
    image: "/kamp6/hero-collaboration.png",
    alt: "Illustrative engineering group conversation",
  },
  {
    number: "03",
    title: "Wisdom on the Road",
    description:
      "Step beyond the classroom to explore real-world engineering practices, industries, and professional experiences.",
    image: "/kamp6/hero-workshop.png",
    alt: "Illustrative engineering workshop",
  },
  {
    number: "04",
    title: "KAMP Learning Space",
    description:
      "A collaborative space to exchange ideas, explore new perspectives, and grow through shared learning.",
    image: "/kamp6/hero-collaboration.png",
    alt: "Illustrative collaborative learning session",
  },
  {
    number: "05",
    title: "Engineering Workshop",
    description:
      "Transform knowledge into practice through interactive workshops, hands-on activities, and collaborative problem-solving.",
    image: "/kamp6/hero-workshop.png",
    alt: "Illustrative hands-on engineering activity",
  },
];
const container =
  "mx-auto w-[calc(100%-48px)] max-w-[1360px] min-[900px]:w-[calc(100%-96px)]";
const heading =
  "max-w-[850px] text-[52px] leading-[.99] font-extrabold tracking-[-.075em] min-[900px]:text-[clamp(50px,6.3vw,90px)]";

export function Activity() {
  return (
    <section
      id="activities"
      aria-labelledby="activities-title"
      className="scroll-mt-[92px] bg-[#f9f6f4] py-20 min-[900px]:py-[130px]"
    >
      <div className={container}>
        <p className="border-b border-[#ded5d5] pb-[25px] text-xs font-extrabold tracking-[.22em] text-[#ad1425]" />
        <div className="grid grid-cols-1 gap-8  min-[900px]:grid-cols-[1.2fr_.8fr] min-[900px]:gap-[70px]">
          <h2 id="activities-title" className={heading}>
            Our <span className="text-[#ad1425]">Activities.</span>
          </h2>
        </div>
        <div className="grid gap-[18px]">
          {activities.map((activity, index) => (
            <Card
              key={activity.number}
              className={cn(
                "flex min-h-[360px] flex-col-reverse overflow-hidden rounded-[22px] border-[#e9d9d9] min-[900px]:flex-row",
                index % 2 === 1 && "min-[900px]:flex-row-reverse",
              )}
            >
              <div className="flex flex-1 flex-col justify-center p-[35px] min-[900px]:p-[clamp(36px,5vw,70px)]">
                {/* <span className="text-xs font-extrabold tracking-[.15em] text-[#ad1425]">
                  {activity.number} / 05
                </span> */}
                <h3 className="mt-[26px] mb-[18px] text-[clamp(35px,4vw,56px)] leading-[1.05] font-bold tracking-[-.065em]">
                  {activity.title}
                </h3>
                <p className="max-w-[410px] text-[17px] leading-[1.6] text-[#6d6263]">
                  {activity.description}
                </p>
              </div>
              <div className="relative min-h-[230px] flex-1 bg-[#e6d7d7] min-[900px]:min-h-[360px]">
                <Image
                  src={activity.image}
                  alt={activity.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
