import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { homeTopicHeadingClass, TextHeading } from "@/components/ui/text-heading";

const activities = [
  {
    number: "01",
    title: "Mentoring Sessions",
    description:
      "Gain practical insights, professional guides and valuable perspecives from experienced engineering mentors",
    image: { wide: "/kamp6/activities/mentoring-sessions.jpg", fourThree: "/kamp6/activities/mentoring-sessions.jpg" },
    alt: "Mentors and mentees sharing a meal around a table",
  },
  {
    number: "02",
    title: "Mentor Spotlight",
    description:
      "Discover the experiences, achievements, and perspectives of engineering professionals who inspire the next generation.",
    image: { wide: "/kamp6/activities/mentor-spotlight.jpg", fourThree: "/kamp6/activities/mentor-spotlight.jpg" },
    alt: "Two engineering professionals speaking in an interview setting",
  },
  {
    number: "03",
    title: "Wisdom on the Road",
    description:
      "Step beyond the classroom to explore real-world engineering practices, industries, and professional experiences.",
    image: { wide: "/kamp6/activities/wisdom-on-the-road.jpg", fourThree: "/kamp6/activities/wisdom-on-the-road.jpg" },
    alt: "KAMP participants and hosts gathered during a site visit",
  },
  {
    number: "04",
    title: "KAMP Learning Space",
    description:
      "A collaborative space to exchange ideas, explore new perspectives, and grow through shared learning.",
    image: { wide: "/kamp6/activities/kamp-learning-space.jpg", fourThree: "/kamp6/activities/kamp-learning-space.jpg" },
    alt: "Large group gathered in a lecture hall at a KAMP event",
  },
  {
    number: "05",
    title: "Workshops",
    description:
      "Transform knowledge into practice through interactive workshops, hands-on activities, and collaborative problem-solving.",
    image: { wide: "/kamp6/activities/engineering-workshop.jpg", fourThree: "/kamp6/activities/engineering-workshop.jpg" },
    alt: "Students collaborating around a large sheet of notes during a workshop",
  },
];
const container =
  "mx-auto w-[calc(100%-48px)] max-w-[1220px] min-[900px]:w-[calc(100%-96px)]";
const heading = `${homeTopicHeadingClass} max-w-[920px]`;

export function Activity() {
  return (
    <section
      id="activities"
      aria-labelledby="activities-title"
      className="scroll-mt-[92px] bg-[#f9f6f4] py-14 min-[900px]:py-20"
    >
      <div className={container}>
        <p className="border-b border-[#ded5d5] pb-[25px] text-xs font-extrabold tracking-[.22em] text-[#ad1425]" />
        <div className="grid grid-cols-1 gap-8  min-[900px]:grid-cols-[1.2fr_.8fr] min-[900px]:gap-[70px]">
          <TextHeading as="h2" id="activities-title" className={heading} text="Our" accent="Activities." accentClassName="text-[#ad1425]" />
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
                <TextHeading as="h3" className="mt-[26px] mb-[18px] text-[clamp(35px,4vw,56px)] leading-[1.05] font-bold tracking-[-.065em]" text={activity.title} />
                <p className="max-w-[410px] text-[17px] leading-[1.6] text-[#6d6263]">
                  {activity.description}
                </p>
              </div>
              <div className="relative aspect-[4/3] min-h-[230px] flex-1 bg-[#e6d7d7] min-[900px]:aspect-auto min-[900px]:min-h-[360px]">
                <Image
                  src={activity.image.wide}
                  alt={activity.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  className="hidden min-[900px]:block"
                />
                <Image src={activity.image.fourThree} alt="" fill sizes="(max-width: 899px) 100vw, 1px" className="object-cover min-[900px]:hidden" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
