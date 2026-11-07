import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export function InterviewerPairSection() {
  return (
    <section
      aria-labelledby="pair-title"
      className="scroll-mt-[92px] border-t border-[#ded5d5] py-[65px] min-[600px]:py-20 min-[900px]:pb-[100px]"
    >
      <SectionHeading
        eyebrow="01 / MEET THE PEOPLE"
        id="pair-title"
        title="Get to know your interview pair."
        note="Official interviewer portraits and introductions will be added when provided."
      />
      <div className="grid grid-cols-1 gap-4 min-[700px]:grid-cols-2">
        {["01", "02"].map((number) => (
          <Card
            key={number}
            className="rounded-[18px] border-[#e9d9d9] p-[18px]"
          >
            <span className="m-2 mb-[18px] block text-xs font-extrabold tracking-[.16em] text-[#ad1425]">
              INTERVIEW PAIR / {number}
            </span>
            <div
              aria-hidden="true"
              className="grid h-[220px] place-items-center rounded-xl text-[110px] text-[#ad142555] min-[900px]:h-[300px]"
              style={{
                background:
                  "linear-gradient(140deg, #e8cecf, #f8efed 62%, #d9acad)",
              }}
            >
              ✳
            </div>
            <h3 className="mt-5 mx-2 text-[25px] font-bold tracking-[-.04em]">
              Profile coming soon
            </h3>
          </Card>
        ))}
      </div>
    </section>
  );
}
