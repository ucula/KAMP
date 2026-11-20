import { Card } from "@/components/ui/card";
import { TextHeading } from "@/components/ui/text-heading";
import {
  Briefcase,
  ChevronDown,
  FileText,
  PenLine,
  UserRound,
  Video,
  type LucideIcon,
} from "lucide-react";

type Material = {
  number: string;
  title: string;
  body: string;
  icon: LucideIcon;
  prompts?: string[];
  numberedPrompts?: boolean;
  followUpPrompts?: string[];
  prompt?: string;
  templateHref?: string;
};

const materials: Material[] = [
  {
    number: "01 / SOP",
    title: "Statement of purpose",
    icon: FileText,
    body: "Tell us about yourself by covering these topics:",
    prompts: [
      "Who are you, and what are your strengths?",
      "What stage of growth are you currently in?",
      "What goals or opportunities are you seeking at this stage?",
      "Why did you choose to apply to KAMP Engineering, and how do you think the program can help you move closer to your goals?",
    ],
  },
  {
    number: "02 / ESSAY",
    title: "Essay",
    icon: PenLine,
    body: "Please respond to each question.",
    numberedPrompts: true,
    prompts: [
      "What is something you are currently trying to find an answer to for yourself, and why is it important to you?",
      "Tell a story about a time you felt, “I’m glad I decided to take action that day.”",
      "If you had five extra hours of free time each day, how would you use them, and how would you make sure that time led to meaningful change in you?",
    ],
    followUpPrompts: [
      "What led you to take action that day?",
      "When you faced challenges, what helped you keep going, take responsibility, and see it through?",
      "What are you proud of, or what did you learn from the experience?",
    ],
  },
  {
    number: "03 / PROMPT VIDEO",
    title: "Video Short Answer",
    icon: Video,
    body: "Record yourself and answer the following question in 2 minutes:",
    prompt:
      "KAMP Engineering is a place where everyone learns from one another. We believe the people around us shape how we think and grow. Think of one person who has helped you grow—perhaps a family member, friend, older student, teacher, or someone else. Who comes to mind, and why? How has what you learned from them influenced you?",
  },
  {
    number: "04 / RESUME",
    title: "Resume",
    icon: Briefcase,
    body: "Share a current resume that highlights your education, experience, skills, and activities.",
  },
  {
    number: "05 / SELF-INTRO VIDEO",
    title: "Self-introduction video",
    icon: UserRound,
    body: "Record a one-minute video to introduce yourself to the mentors.",
    prompt:
      "If the mentors had only one minute to get to know you, what would you like them to know about you that they might not be able to see from your application?",
  },
];

export function MaterialsSection() {
  return (
    <section
      aria-labelledby="materials-title"
      className="scroll-mt-[92px] border-t border-[#ded5d5] py-12 min-[600px]:py-14 min-[900px]:pb-16"
    >
      <TextHeading
        as="h2"
        id="materials-title"
        className="mb-[45px] max-w-none text-[clamp(36px,5vw,68px)] leading-[1.02] font-extrabold tracking-[-.065em] min-[900px]:whitespace-nowrap"
        text="Mentee's"
        accent="materials"
        accentClassName="text-[#ad1425]"
      />
      <div className="grid grid-cols-1 gap-[15px] min-[900px]:grid-cols-2">
        {materials.map(
          ({
            number,
            title,
            body,
            icon: Icon,
            prompts,
            numberedPrompts,
            followUpPrompts,
            prompt,
            templateHref,
          }) => (
            <Card
              key={number}
              className="self-start rounded-[18px] border-0 bg-[#ad1425] p-[35px] text-white"
            >
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[26px] leading-tight font-bold tracking-[-.045em] text-white marker:content-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  <span className="flex items-center gap-3">
                    <Icon
                      size={24}
                      strokeWidth={1.8}
                      aria-hidden="true"
                      className="shrink-0 text-[#ffd5d8]"
                    />
                    <span>{title}</span>
                  </span>
                  <ChevronDown
                    size={22}
                    aria-hidden="true"
                    className="shrink-0 transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <div className="grid grid-rows-[0fr] overflow-hidden transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:grid-rows-[1fr] motion-reduce:transition-none">
                  <div className="min-h-0 overflow-hidden opacity-0 transition-opacity duration-200 ease-out group-open:opacity-100 group-open:delay-75 motion-reduce:transition-none">
                    <div className="mt-5 border-t border-white/25 pt-4 text-base leading-[1.45] text-[#ffe8e9]">
                      <p>{body}</p>
                      {prompt && <p>{prompt}</p>}
                      {prompts &&
                        (numberedPrompts ? (
                          <ol className="list-decimal space-y-3 pl-5">
                            {prompts.map((prompt, index) => (
                              <li key={prompt}>
                                {prompt}
                                {index === 1 && followUpPrompts && (
                                  <ul className="mt-2 list-disc space-y-1 pl-5">
                                    {followUpPrompts.map((followUp) => (
                                      <li key={followUp}>{followUp}</li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ol>
                        ) : (
                          <ul className="list-disc space-y-2 pl-5">
                            {prompts.map((prompt) => (
                              <li key={prompt}>{prompt}</li>
                            ))}
                          </ul>
                        ))}
                      {templateHref && (
                        <a
                          href={templateHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-block w-fit text-sm font-extrabold tracking-[.08em] text-white underline decoration-white/60 underline-offset-4 hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                          View Questions
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </details>
            </Card>
          ),
        )}
      </div>
    </section>
  );
}
