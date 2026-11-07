import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const prompts = [
  { number: "01", title: "Origin & Passion", question: "What sparked your engineering passion and challenged you most?", note: "Look for genuine curiosity and a real story of learning." },
  { number: "02", title: "Vision & Goals", question: "Where do you envision yourself in three years, and how can mentorship help?", note: "Think about your direction and what you hope to learn." },
  { number: "03", title: "Giving Back", question: "How do you plan to support your engineering peers?", note: "Show how you share ideas, care for others, or contribute." },
  { number: "04", title: "Video Pitch", question: "Share an engineering principle or idea you find genuinely exciting.", note: "Your interest matters more than polished production." },
];

export function ApplicationPromptsSection() {
  return (
    <section aria-labelledby="prompts-title" className="scroll-mt-[92px] border-t border-[#ded5d5] py-[65px] min-[600px]:py-20 min-[900px]:pb-[100px]">
      <SectionHeading eyebrow="02 / APPLICATION BREAKDOWN" id="prompts-title" title="Questions worth thinking through." note="Example prompts from the brief. The final wording may change." />
      <div className="grid grid-cols-1 gap-[15px] min-[700px]:grid-cols-2">
        {prompts.map(({ number, title, question, note }) => (
          <Card key={number} className="min-h-[270px] rounded-[18px] border-[#e9d9d9] p-[35px]">
            <span className="text-xs font-extrabold tracking-[.15em] text-[#ad1425]">{number}</span>
            <h3 className="mt-[18px] mb-4 text-[25px] font-bold tracking-[-.04em]">{title}</h3>
            <blockquote className="max-w-[490px] text-[19px] leading-[1.45] font-semibold text-[#3d3334]">“{question}”</blockquote>
            <p className="mt-5 text-sm leading-[1.5] text-[#74696a]">{note}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
