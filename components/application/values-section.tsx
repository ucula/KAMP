import { Compass, HeartHandshake, Lightbulb, Rocket } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const values = [
  {
    icon: Lightbulb,
    title: "Curiosity",
    body: "A genuine desire to explore, question, and discover new possibilities.",
  },
  {
    icon: Rocket,
    title: "Initiative",
    body: "The confidence to take action, embrace challenges, and drive ideas forward.",
  },
  {
    icon: Compass,
    title: "Coachability",
    body: "An open mindset to receive feedback, learn from experience, and continuously improve.",
  },
  {
    icon: HeartHandshake,
    title: "Community",
    body: "A willingness to collaborate, support others, and contribute to shared success.",
  },
];

export function ValuesSection() {
  return (
    <section
      aria-labelledby="values-title"
      className="scroll-mt-[92px] border-t border-[#ded5d5] py-[65px] min-[600px]:py-20 min-[900px]:pb-[100px]"
    >
      <h2
        id="values-title"
        className="mb-8 text-[clamp(34px,4.5vw,58px)] leading-[1.08] font-extrabold tracking-[-.06em]"
      >
        The Mindset That Moves Us Forward.
      </h2>
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
              <CardTitle className="text-[22px] leading-[1.1] font-bold tracking-[-.04em]">
                {title}
              </CardTitle>
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
