import Image from "next/image";
import { TextHeading } from "@/components/ui/text-heading";

const steps = [
  {
    number: "01",
    title: "Review Candidate Profiles",
    description: "Review each application before the interview:",
    details: [
      "Resume",
      "Statement of Purpose (SOP)",
      "Essay",
      "Introduction Video",
    ],
  },
  {
    number: "02",
    title: "Interview the Candidate",
    description:
      "Each interview lasts 9 minutes. Use this time to ask questions and get to know the candidate.",
    details: ["08:00 — Warning sound", "09:00 — Final signal"],
  },
  {
    number: "03",
    title: "Take Notes",
    description:
      "The candidate leaves the interview room. Take 1 minute to write down your notes and feedback.",
    note: "Please complete your notes before the next candidate arrives.",
  },
  {
    number: "04",
    title: "Welcome the Next Candidate",
    description:
      "The next candidate enters at minute 10. Repeat the same process for each candidate.",
    note: "There will be approximately 15–16 interview slots.",
  },
];

const schedule = [
  {
    time: "00–08",
    label: "INTERVIEW",
    description: "Ask questions and get to know the candidate.",
  },
  {
    time: "08:00",
    label: "WARNING SIGNAL",
    description: "One minute left. Wrap up your questions.",
  },
  {
    time: "09:00",
    label: "INTERVIEW ENDS",
    description: "Final signal. The candidate leaves the room.",
  },
  {
    time: "09–10",
    label: "NOTE TAKING",
    description: "Write down feedback and prepare for the next candidate.",
  },
];

export function InterviewIntro() {
  return (
    <section
      aria-labelledby="interview-title"
      className="space-y-8 py-12 font-[Arial,Helvetica,sans-serif] min-[900px]:space-y-10 min-[900px]:py-16"
    >
      <div className="grid gap-8">
        <div>
          <TextHeading
            as="h1"
            id="interview-title"
            className="max-w-none text-[clamp(48px,7vw,96px)] leading-[.95] font-extrabold tracking-[-.07em] min-[900px]:whitespace-nowrap"
            text="Interview"
            accent="Process."
            accentClassName="text-[#ad1425]"
          />
          <p className="mt-5 text-lg leading-[1.6] text-[#605557]">
            A step-by-step guide for mentors — from reviewing candidate profiles
            to announcing the selected mentees.
          </p>
        </div>

        <div className="w-full rounded-[22px] border border-[#eadada] bg-white/80 p-4 shadow-[0_12px_36px_#5a25250a] min-[600px]:p-6">
          <Image
            src="/kamp6/interview-process-flow.svg"
            alt="Interview process: review candidate profiles, interview candidates in 15–16 slots, then select mentees. Each interview slot lasts 10 minutes."
            width={1772}
            height={672}
            sizes="(max-width: 599px) calc(100vw - 80px), (max-width: 899px) calc(100vw - 96px), (max-width: 1316px) calc(100vw - 144px), 1172px"
            className="block h-auto w-full"
          />
          <div className="mt-4 grid grid-cols-3 border-t border-[#e6dcdd] pt-3 text-center">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-bold tracking-[.14em] text-[#7a7374]">
                SLOTS
              </span>
              <strong className="text-2xl font-extrabold">15–16</strong>
            </div>
            <div className="flex flex-col gap-1 border-x border-[#e6dcdd]">
              <span className="text-[11px] font-bold tracking-[.14em] text-[#7a7374]">
                TIME PER SLOT
              </span>
              <strong className="text-2xl font-extrabold">10 min</strong>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-bold tracking-[.14em] text-[#7a7374]">
                RESULTS
              </span>
              <strong className="text-2xl font-extrabold text-[#ad1425]">
                Same day
              </strong>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 min-[600px]:grid-cols-2 min-[1200px]:grid-cols-4">
        {steps.map((step) => (
          <article
            key={step.number}
            className="flex flex-col gap-4 rounded-[20px] border border-[#ece5e6] bg-white p-6 shadow-[0_10px_30px_#5a25250a]"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold tracking-[.18em] text-[#ad1425]">
                STEP {step.number}
              </span>
              {step.number === "02" && (
                <span className="text-[11px] font-semibold tracking-[.08em] text-[#7a7374]">
                  00:00 – 09:00
                </span>
              )}
              {step.number === "03" && (
                <span className="text-[11px] font-semibold tracking-[.08em] text-[#7a7374]">
                  09:00 – 10:00
                </span>
              )}
              {step.number === "04" && (
                <span className="text-[11px] font-semibold tracking-[.08em] text-[#7a7374]">
                  10:00
                </span>
              )}
            </div>
            <span
              aria-hidden="true"
              className="text-4xl leading-none font-extrabold tracking-[-.04em] text-[#eadadc]"
            >
              {step.number}
            </span>
            <h2 className="text-xl leading-[1.25] font-bold tracking-[-.02em] min-[1200px]:min-h-[60px]">
              {step.title}
            </h2>
            <p className="text-base leading-[1.6] text-[#5f5a5b] min-[1200px]:min-h-[112px]">
              {step.description}
            </p>
            {step.details && (
              <ul className="divide-y divide-[#f0eaea] border-t border-[#f0eaea]">
                {step.details.map((detail) => (
                  <li
                    key={detail}
                    className="py-2.5 text-base font-semibold text-[#211a1b]"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            )}
            {step.note && (
              <p className="border-t border-[#f0eaea] pt-3 text-sm leading-[1.6] text-[#ad1425]">
                {step.note}
              </p>
            )}
          </article>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 rounded-[20px] bg-white px-6 py-7 text-[#211a1b] min-[600px]:px-10">
        <div className="flex min-w-0 flex-1 basis-[470px] items-center gap-3 min-[600px]:gap-5">
          <span
            aria-hidden="true"
            className="text-5xl font-extrabold tracking-[-.04em] text-[#eadadc] max-[599px]:hidden"
          >
            05
          </span>

          <div>
            <p className="mb-2 text-xs font-bold tracking-[.2em] text-[#ad1425] max-[599px]:hidden">
              STEP 05
            </p>

            <p className="mb-2 hidden text-xs font-bold tracking-[.2em] text-[#ad1425] max-[599px]:block">
              STEP 05
            </p>

            <span className="hidden text-5xl font-extrabold tracking-[-.04em] text-[#eadadc] max-[599px]:block">
              05
            </span>

            <h2 className="text-[clamp(22px,6vw,30px)] leading-tight font-extrabold tracking-[-.03em]">
              Mentee Announcement.
            </h2>
          </div>
        </div>

        <p className="m-0 max-w-[520px] flex-1 basis-[380px] text-lg leading-[1.6] text-[#5f5a5b]">
          After all interviews are completed, the selected mentees will be
          announced on the same day.
        </p>
      </div>

      <div className="space-y-8 rounded-[24px] bg-[#ad1425] p-6 text-white min-[600px]:p-10 min-[900px]:p-12">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[.2em] text-white/80">
              TIMING · PER SLOT
            </p>
            <h2 className="text-4xl leading-[1.04] font-extrabold tracking-[-.04em] min-[600px]:text-5xl">
              10-Minute <span className="text-[#ffe0e2]">Schedule.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 text-sm font-semibold">
            <span className="rounded-full border border-white/15 bg-white/[.08] px-4 py-2">
              10 min / slot
            </span>
            <span className="rounded-full border border-white/15 bg-white/[.08] px-4 py-2">
              15–16 slots
            </span>
          </div>
        </div>

        <div>
          <div
            role="img"
            aria-label="Timeline: interview from minute 0 to 8, warning at 8, interview ends at 9, and note taking from minute 9 to 10."
            className="flex h-12 overflow-hidden rounded-xl text-sm font-bold min-[600px]:h-[60px] min-[600px]:text-xl"
          >
            <div className="flex flex-[8] items-center bg-[#f5f2f2] px-4 text-[#141414] min-[600px]:px-6">
              Interview
            </div>
            <div aria-hidden="true" className="flex-1 bg-[#f6bec3]" />
            <div
              aria-hidden="true"
              className="flex-1 border-l-4 border-white bg-[#79101b]"
            />
          </div>
          <div
            aria-hidden="true"
            className="relative h-7 text-xs font-bold text-white"
          >
            <span className="absolute left-0">0</span>
            <span className="absolute left-[80%] -translate-x-1/2">8</span>
            <span className="absolute left-[90%] -translate-x-1/2">9</span>
            <span className="absolute right-0">10</span>
          </div>
        </div>

        <div className="grid gap-7 border-t border-white/25 pt-6 min-[600px]:grid-cols-2 min-[1200px]:grid-cols-4">
          {schedule.map((item) => (
            <div key={item.time} className="flex flex-col gap-2">
              <span
                className={`text-3xl font-extrabold tracking-[-.03em] ${item.time === "08:00" || item.time === "09:00" ? "text-[#ffe0e2]" : "text-white"}`}
              >
                {item.time}
              </span>
              <span className="text-xs font-bold tracking-[.17em] text-white">
                {item.label}
              </span>
              <p className="m-0 text-base leading-[1.6] text-white/85">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/25 pt-6">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <strong className="text-xl font-extrabold">
              10:00 — Next Candidate
            </strong>
            <span className="text-base leading-[1.6] text-white/85">
              The next candidate enters, and the interview starts again.
            </span>
          </div>
          <span className="rounded-full bg-white px-4 py-2 text-xs font-bold tracking-[.17em] text-[#ad1425]">
            NEW ROUND
          </span>
        </div>
      </div>
    </section>
  );
}
