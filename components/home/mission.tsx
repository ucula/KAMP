import { HeartHandshake, Lightbulb, UsersRound } from "lucide-react";
import { Card } from "@/components/ui/card";

const missions = [
  {
    icon: Lightbulb,
    title: "Wisdom & Knowledge Platform",
    // description:
    //   "A place to share insight, experience, and ideas across generations.",
  },
  {
    icon: UsersRound,
    title: "Build a New Generation of Leaders",
    // description:
    //   "Support curious engineers as they find their direction and grow.",
  },
  {
    icon: HeartHandshake,
    title: "Pay It Forward Community",
    // description: "Pass on what we learn and make room for the next generation.",
  },
];
const container =
  "mx-auto w-[calc(100%-48px)] max-w-[1360px] min-[900px]:w-[calc(100%-96px)]";
const heading =
  "max-w-[850px] text-[52px] leading-[.99] font-extrabold tracking-[-.075em] min-[900px]:text-[clamp(50px,6.3vw,90px)]";

export function Mission() {
  return (
    <section
      id="mission"
      aria-labelledby="mission-title"
      className="scroll-mt-[92px] bg-[#a71422] py-24 text-white min-[900px]:py-[130px]"
    >
      <div className={container}>
        <p className="border-b border-white/40 pb-[25px] text-xs font-extrabold tracking-[.22em]">
          {/* 02 <span className="mx-[14px] text-[#ffb6bc]">/</span> OUR MISSION */}
        </p>
        <div className="grid grid-cols-1 gap-8 py-[60px] min-[900px]:grid-cols-[1.2fr_.8fr] min-[900px]:gap-[70px] min-[900px]:py-8">
          <h2 id="mission-title" className={heading}>
            Missions to <span className="text-[#ffbfc5]">complete.</span>
          </h2>
        </div>
        <p className="mt-3 font-[Arial,Helvetica,sans-serif] text-[clamp(18px,2.2vw,30px)] leading-[1.35] font-bold tracking-[-.02em] text-[#FFFFFF]">
          <span className="text-[#ffbfc5]">KAMP</span> exists so you don't have
          to start from zero
        </p>
        <div className="grid grid-cols-1 gap-[18px] min-[900px]:grid-cols-3">
          {missions.map(({ icon: Icon, title }, index) => (
            <Card
              key={title}
              className="flex min-h-[240px] flex-col rounded-[20px] border-white/30 bg-white/[.08] p-9 text-white min-[900px]:min-h-[300px]"
            >
              <div className="flex items-start justify-between text-[#ffd1d5]">
                <Icon size={42} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="mt-auto mb-3 text-[clamp(25px,2.6vw,34px)] leading-[1.12] font-bold tracking-[-.04em]">
                {title}
              </h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
