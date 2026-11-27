import { TextHeading, homeTopicHeadingClass } from "@/components/ui/text-heading";

const timeline = [
  {
    step: "01",
    title: "Applications",
    description: "Mentees submit their profiles and application materials.",
  },
  {
    step: "02",
    title: "Profile review",
    description: "Mentors review applications and submitted materials.",
  },
  {
    step: "03",
    title: "Interview day",
    description: "Candidates meet their mentors in scheduled interview slots.",
  },
  {
    step: "04",
    title: "Announcement",
    description: "Selected mentees are announced on interview day.",
  },
];

const container =
  "mx-auto w-[calc(100%-48px)] max-w-[1220px] min-[900px]:w-[calc(100%-96px)]";

export function ProgramTimeline() {
  return (
    <section
      id="program-timeline"
      aria-labelledby="program-timeline-title"
      className="scroll-mt-[92px] bg-[#f9f6f4] py-14 min-[900px]:py-20"
    >
      <div className={container}>
        <p className="border-b border-[#ded5d5] pb-[25px] text-xs font-extrabold tracking-[.22em] text-[#ad1425]">
          THE MENTORSHIP JOURNEY
        </p>
        <div className="mt-8 mb-9 max-w-[900px]">
          <TextHeading
            as="h2"
            id="program-timeline-title"
            className={`${homeTopicHeadingClass} max-w-none`}
            text="Program"
            accent="Timeline."
            accentClassName="text-[#ad1425]"
          />
          <p className="mt-5 max-w-[760px] text-lg leading-[1.6] text-[#6d6263]">
            From the first application to the mentee announcement, follow the
            key steps in the program.
          </p>
        </div>

        <ol className="grid list-none gap-4 p-0 min-[700px]:grid-cols-2 min-[1100px]:grid-cols-4">
          {timeline.map(({ step, title, description }) => (
            <li
              key={step}
              className="group relative rounded-[20px] border border-[#eadfdf] bg-white p-5 shadow-[0_10px_28px_#5a252508] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-[#c77a82] hover:shadow-[0_18px_36px_#9d737322] motion-reduce:transition-none motion-reduce:hover:translate-y-0 min-[600px]:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#ad1425] text-xs font-extrabold tracking-[.08em] text-white">
                  {step}
                </span>
                <span
                  aria-hidden="true"
                  className="h-px flex-1 bg-[#e4cfd0] transition-colors duration-300 group-hover:bg-[#ad1425] motion-reduce:transition-none"
                />
              </div>
              <h3 className="mt-6 text-[clamp(20px,2.2vw,28px)] leading-[1.1] font-extrabold tracking-[-.04em] text-[#211a1b]">
                {title}
              </h3>
              <p className="mt-3 text-base leading-[1.6] text-[#6d6263]">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
