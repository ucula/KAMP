import {
  TextHeading,
  homeTopicHeadingClass,
} from "@/components/ui/text-heading";

const phases = [
  {
    title: "Preparation",
    range: "Aug–Nov",
    className: "bg-[#f9e7e9] text-[#b5202e]",
    milestones: [
      { date: "Aug", title: "Open Application" },
      { date: "28 Nov", title: "Pairing Day" },
    ],
  },
  {
    title: "Mentoring Program",
    range: "Dec–Apr",
    className:
      "bg-gradient-to-r from-[#d83c4b] to-[#95131f] text-white shadow-[0_10px_20px_#a7172526]",
    milestones: [
      { date: "Dec", title: "1st Mentoring" },
      { date: "Jan", title: "Workshop & KAMP Learning Space" },
      { date: "27–28 Feb", title: "Outing" },
      { date: "Mar", title: "Homecoming" },
      { date: "Apr", title: "Mentor Gathering" },
    ],
  },
  {
    title: "Closing",
    range: "Jun",
    className: "bg-[#321b1e] text-white",
    milestones: [{ date: "Jun", title: "Closing & Evaluation" }],
  },
];

const milestones = phases.flatMap(({ milestones }) => milestones);

const container =
  "mx-auto w-[calc(100%-48px)] max-w-[1220px] min-[900px]:w-[calc(100%-96px)]";

export function ProgramTimeline() {
  return (
    <section
      id="program-timeline"
      aria-labelledby="program-timeline-title"
      className="scroll-mt-[92px] bg-[#f9f6f4] py-14 min-[900px]:py-20"
    >
      <hr
        aria-hidden="true"
        className="mx-auto mb-10 h-px w-[calc(100%-48px)] border-0 bg-[#ded5d5] min-[600px]:mb-12 min-[900px]:mb-16 min-[900px]:w-[calc(100%-96px)]"
      />
      <div className={container}>
        <div className="max-w-none">
          <TextHeading
            as="h2"
            id="program-timeline-title"
            className={`${homeTopicHeadingClass} max-w-none`}
            text="Program"
            accent="Timeline"
            accentClassName="text-[#ad1425]"
          />
          <p className="mt-4 max-w-none text-[clamp(14px,1.4vw,18px)] leading-[1.6] text-[#6d6263]">
            From open application to the closing evaluation — the key milestones
            of the KAMP Engineering 6 mentoring journey.
          </p>
        </div>

        <div className="mt-8 rounded-[20px] border border-[#eadfdf] bg-gradient-to-br from-white to-[#fff9f9] p-4 shadow-[0_14px_36px_#5a25250c] min-[600px]:p-6 min-[900px]:mt-10 min-[900px]:p-8">
          <div className="mb-4 hidden grid-cols-[2fr_5fr_1fr] gap-3 min-[900px]:mb-6 min-[900px]:grid">
            {phases.map(({ title, className }) => (
              <div
                key={title}
                className={`flex min-h-[44px] items-center justify-center rounded-[12px] px-2 py-2 text-center text-[clamp(9px,2vw,16px)] font-extrabold tracking-[.1em] uppercase min-[900px]:min-h-[58px] min-[900px]:rounded-[15px] min-[900px]:px-3 min-[900px]:tracking-[.16em] ${className}`}
              >
                {title}
              </div>
            ))}
          </div>

          <div className="grid gap-4 min-[900px]:hidden">
            {phases.map(
              ({ title, range, className, milestones: phaseMilestones }) => (
                <section key={title} aria-label={`${title}, ${range}`}>
                  <div
                    className={`flex min-h-11 items-center justify-between gap-3 rounded-[12px] px-4 py-2 text-xs font-extrabold tracking-[.12em] uppercase ${className}`}
                  >
                    <span>{title}</span>
                    <span className="shrink-0 text-[10px] tracking-[.08em] opacity-80">
                      {range}
                    </span>
                  </div>
                  <ol className="mt-3 grid list-none gap-3 p-0">
                    {phaseMilestones.map(
                      ({ date, title: milestoneTitle }, index) => (
                        <li
                          key={date}
                          className="relative flex min-h-[52px] items-start gap-3 pl-1"
                        >
                          {index < phaseMilestones.length - 1 && (
                            <span
                              aria-hidden="true"
                              className="absolute top-[13px] bottom-[-25px] left-[10px] w-[3px] bg-[#ae1a29]"
                            />
                          )}
                          <span
                            aria-hidden="true"
                            className="relative z-10 mt-1.5 size-[15px] shrink-0 rounded-full border-[3px] border-[#ad1425] bg-[#ad1425] ring-4 ring-white"
                          />
                          <div>
                            <p className="m-0 text-xs font-extrabold tracking-[.13em] text-[#ad1425] uppercase">
                              {date}
                            </p>
                            <h3 className="mt-1 mb-0 text-base leading-[1.2] font-extrabold tracking-[-.035em] text-[#211a1b]">
                              {milestoneTitle}
                            </h3>
                          </div>
                        </li>
                      ),
                    )}
                  </ol>
                </section>
              ),
            )}
          </div>

          <ol className="relative hidden list-none gap-4 p-0 min-[900px]:grid min-[900px]:grid-cols-8 min-[900px]:gap-0">
            <span
              aria-hidden="true"
              className="absolute top-[7px] right-[6.25%] left-[6.25%] h-[3px] bg-[#ae1a29]"
            />
            {milestones.map(({ date, title }) => (
              <li
                key={date}
                className="relative flex min-h-0 flex-col items-center gap-0 px-1 text-center"
              >
                <span
                  aria-hidden="true"
                  className="relative z-10 mb-4 size-[15px] shrink-0 rounded-full border-[3px] border-[#ad1425] bg-[#ad1425] ring-4 ring-white"
                />
                <div className="px-1">
                  <p className="m-0 text-xs font-extrabold tracking-[.13em] text-[#ad1425] uppercase">
                    {date}
                  </p>
                  <h3 className="mt-1 mb-0 text-[clamp(14px,1.25vw,18px)] leading-[1.2] font-extrabold tracking-[-.035em] text-[#211a1b]">
                    {title}
                  </h3>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
