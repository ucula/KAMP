import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { homeTopicHeadingClass, TextHeading } from "@/components/ui/text-heading";
import { getCategoryPhotos } from "@/lib/kamp-activity-images";
import { ActivityGallery } from "./workshop-gallery";

const activities = [
  {
    number: "01",
    title: "Mentoring Sessions",
    target: "mentoring-sessions",
    gallery: "mentoring",
    description:
      "Gain practical insights, professional guides and valuable perspecives from experienced engineering mentors",
  },
  {
    number: "02",
    title: "Mentor Spotlight",
    target: "mentor-spotlight",
    gallery: "spotlight",
    description:
      "Discover the experiences, achievements, and perspectives of engineering professionals who inspire the next generation.",
  },
  {
    number: "03",
    title: "Wisdom on the Road",
    target: "wisdom-on-the-road",
    gallery: "wisdom",
    description:
      "Step beyond the classroom to explore real-world engineering practices, industries, and professional experiences.",
  },
  {
    number: "04",
    title: "KAMP Learning Space",
    target: "kamp-learning-space",
    gallery: "kls",
    description:
      "A collaborative space to exchange ideas, explore new perspectives, and grow through shared learning.",
  },
  {
    number: "05",
    title: "Workshop",
    target: "workshop",
    gallery: "workshops",
    description:
      "Transform knowledge into practice through interactive workshops, hands-on activities, and collaborative problem-solving.",
  },
  {
    number: "06",
    title: "Outing",
    target: "outing",
    gallery: "outing",
    description:
      "Build friendships and shared memories through outings and activities beyond the classroom.",
  },
] as const;
const container =
  "mx-auto w-[calc(100%-48px)] max-w-[1220px] min-[900px]:w-[calc(100%-96px)]";
const heading = `${homeTopicHeadingClass} max-w-none`;

export function Activity() {
  const activityPhotos = {
    kls: getCategoryPhotos("kamp6/activities/kls"),
    spotlight: getCategoryPhotos("kamp6/activities/mentor-spotlight"),
    mentoring: getCategoryPhotos("kamp6/activities/mentoring-sessions"),
    wisdom: getCategoryPhotos("kamp6/activities/wisdom-on-the-road"),
    workshops: getCategoryPhotos("kamp6/activities/workshops"),
    outing: getCategoryPhotos("kamp6/activities/outing"),
  };

  return (
    <section
      id="activities"
      aria-labelledby="activities-title"
      className="scroll-mt-[92px] bg-[#f9f6f4] py-14 pt-4 min-[900px]:pt-6 min-[900px]:pb-20"
    >
      <div className={container}>
        <p className="border-b border-[#ded5d5] pb-[25px] text-xs font-extrabold tracking-[.22em] text-[#ad1425]" />
        <div className="grid grid-cols-1 gap-8  min-[900px]:grid-cols-[1.2fr_.8fr] min-[900px]:gap-[70px]">
          <TextHeading as="h2" id="activities-title" className={heading} text="Our" accent="Activities" accentClassName="text-[#ad1425]" />
        </div>
        <div className="grid gap-[18px]">
          {activities.map((activity, index) => (
            <Card
              key={activity.number}
              id={`activity-${activity.target}`}
              className={cn(
                "scroll-mt-[110px] flex min-h-[360px] flex-col-reverse overflow-hidden rounded-[22px] border-[#e9d9d9] min-[900px]:min-h-0 min-[900px]:flex-row",
                index % 2 === 1 && "min-[900px]:flex-row-reverse",
              )}
            >
              <div className="flex flex-col justify-center p-[35px] min-[900px]:flex-1 min-[900px]:p-8">
                <TextHeading as="h3" className="mt-[26px] mb-[18px] text-[clamp(28px,4vw,56px)] leading-[1.05] font-bold tracking-[-.065em] min-[900px]:mt-0" text={activity.title} />
                <p className="text-[clamp(14px,1.4vw,17px)] leading-[1.6] text-[#6d6263]">
                  {activity.description}
                </p>
              </div>
              <div className="relative aspect-[4/3] min-h-[230px] flex-1 bg-[#e6d7d7] min-[900px]:aspect-video min-[900px]:min-h-0 min-[900px]:self-center">
                <ActivityGallery photos={activityPhotos[activity.gallery]} label={activity.title} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
