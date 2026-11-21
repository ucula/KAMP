import { BookOpen, Sprout, Target, UsersRound } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { TextHeading } from "@/components/ui/text-heading";

const values = [
  {
    icon: Sprout,
    title: "Growth Readiness",
    body: "Open to learning, reflective about themselves, and able to see growth as a process.",
  },
  {
    icon: BookOpen,
    title: "Learning Commitment",
    body: "Willing to invest in their own learning and make the most of the opportunities KAMP offers.",
  },
  {
    icon: Target,
    title: "Purposeful Learning",
    body: "Able to describe what they are looking for and their goals or intentions for learning, even if their answers are still developing.",
  },
  {
    icon: UsersRound,
    title: "Community Mindset",
    body: "Ready to learn from others, open to different perspectives, and grow alongside the community.",
  },
];

export function ValuesSection() {
  return (
    <section
      aria-labelledby="values-title"
      className="scroll-mt-[92px] border-t border-[#ded5d5] py-12 min-[600px]:py-14 min-[900px]:pb-16"
    >
      <p className="mb-4 text-xs font-extrabold tracking-[.22em] text-[#ad1425]">
        EVALUATION RUBRICS
      </p>
      <TextHeading
        as="h2"
        id="values-title"
        className="mb-8 text-[clamp(34px,4.5vw,58px)] leading-[1.08] font-extrabold tracking-[-.06em]"
        text="Who we are looking for."
      />
      <div className="grid gap-3 rounded-[22px] p-4 min-[600px]:grid-cols-2 min-[600px]:p-6">
        {values.map(({ icon: Icon, title, body }) => (
          <Card
            key={title}
            className="min-h-[190px] rounded-[16px] border-0 bg-white p-[26px]"
          >
            <CardHeader className="gap-4 p-0">
              <Icon
                size={28}
                strokeWidth={1.8}
                aria-hidden="true"
                className="text-[#ad1425]"
              />
              <div className="w-full">
                <TextHeading as="h3" className="text-[22px] leading-[1.1] font-bold tracking-[-.04em]" text={title} />
              </div>
            </CardHeader>
            <CardContent className="p-0 pt-3">
              <CardDescription className="text-[15px] leading-[1.55] text-[#6d6263]">
                {body}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
