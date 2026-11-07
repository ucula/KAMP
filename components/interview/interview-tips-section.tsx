import { MessageCircle, ScanSearch, UsersRound } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const guidance = [
  { icon: ScanSearch, title: "Know your story", body: "Choose a few real moments that show what you tried, learned, and would do differently." },
  { icon: MessageCircle, title: "Speak with clarity", body: "Answer the question directly, then use a specific example to give it shape." },
  { icon: UsersRound, title: "Make it a conversation", body: "Listen carefully and ask thoughtful questions about the people and the program." },
];

export function InterviewTipsSection() {
  return (
    <section aria-labelledby="interview-guide-title" className="scroll-mt-[92px] border-t border-[#ded5d5] py-[65px] min-[600px]:py-20 min-[900px]:pb-[100px]">
      <SectionHeading eyebrow="02 / INTERVIEW GUIDE" id="interview-guide-title" title="Show how you think." note="Use these tips to prepare a thoughtful conversation." />
      <div className="grid grid-cols-1 gap-[14px] min-[600px]:grid-cols-2 min-[1000px]:grid-cols-3">
        {guidance.map(({ icon: Icon, title, body }) => (
          <Card key={title} className="min-h-[205px] rounded-[18px] border-[#e9d9d9] p-[30px] min-[900px]:min-h-[250px]">
            <Icon size={31} strokeWidth={1.7} aria-hidden="true" className="text-[#ad1425]" />
            <h3 className="mt-8 mb-[10px] text-2xl font-bold tracking-[-.04em] min-[900px]:mt-12">{title}</h3>
            <p className="text-[15px] leading-[1.55] text-[#6d6263]">{body}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
