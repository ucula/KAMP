import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const materials = [
  {
    number: "01 / SOP",
    title: "Statement of Purpose",
    body: "Explain why this experience matters to you and what you want to learn.",
    note: "Final question to be confirmed",
  },
  {
    number: "02 / ESSAY",
    title: "Your perspective",
    body: "Use specific experiences to show how you think, learn, and contribute.",
    note: "Final questions to be confirmed",
  },
  {
    number: "03 / VIDEO",
    title: "Speak in your own voice",
    body: "Share an idea or experience you care about with clarity and sincerity.",
    note: "Final video prompt to be confirmed",
  },
];

export function MaterialsSection() {
  return (
    <section
      aria-labelledby="materials-title"
      className="scroll-mt-[92px] border-t border-[#ded5d5] py-[65px] min-[600px]:py-20 min-[900px]:pb-[100px]"
    >
      <SectionHeading
        id="materials-title"
        title="Make your thinking visible."
      />
      <div className="grid grid-cols-1 gap-[15px] min-[900px]:grid-cols-3">
        {materials.map(({ number, title, body, note }) => (
          <Card
            key={number}
            className="flex min-h-[240px] flex-col rounded-[18px] border-0 bg-[#ad1425] p-[35px] text-white min-[900px]:min-h-[300px]"
          >
            <span className="text-xs font-extrabold tracking-[.15em] text-[#ffd5d8]">
              {number}
            </span>
            <h3 className="mt-[35px] mb-[15px] text-[26px] font-bold tracking-[-.045em] min-[900px]:mt-[55px]">
              {title}
            </h3>
            <p className="text-base leading-[1.55] text-[#ffe8e9]">{body}</p>
            <small className="mt-auto pt-[25px] text-xs text-[#ffcbd0]">
              {note}
            </small>
          </Card>
        ))}
      </div>
    </section>
  );
}
