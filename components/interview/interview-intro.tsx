import Image from "next/image";

const documents = [
  "Self-Introduction Video",
  "SOP",
  "Essay",
  "Short Answer Video",
  "Resume",
];

const schedule = [
  ["00–08", "INTERVIEW", "Ask questions and get to know the candidate."],
  ["08:00", "WARNING SIGNAL", "One minute left. Wrap up your questions."],
  ["09:00", "INTERVIEW ENDS", "Final signal. The candidate leaves the room."],
  [
    "09–10",
    "NOTE TAKING",
    "Write down your notes and feedback before the next candidate arrives.",
  ],
];

export function InterviewIntro() {
  return (
    <section
      aria-labelledby="interview-title"
      className="space-y-14 py-16 min-[900px]:py-20"
    >
      <header className="space-y-5">
        <h1
          id="interview-title"
          className="text-[clamp(60px,10vw,124px)] leading-[.95] font-extrabold tracking-[-.045em]"
        >
          Interview <span className="text-[#b5202e]">Process.</span>
        </h1>
        <p className="text-xl leading-[1.6] text-[#5f5a5b]">
          A step-by-step guide for mentors — from reviewing candidate profiles
          to announcing the selected mentees.
        </p>
      </header>

      <div className="mx-auto max-w-[900px]">
        <Image
          src="/kamp6/interview-flow-artifact.png"
          alt="Interview flow: candidate profile, 15–16 ten-minute interview slots with two mentors and one candidate, then the final mentee stage."
          width={1772}
          height={672}
          sizes="(max-width: 900px) 100vw, 900px"
          className="h-auto w-full"
          priority
        />
        <div className="grid grid-cols-3 border-t border-[#e6dcdd] text-center">
          {[
            ["SLOTS", "15–16"],
            ["TIME PER SLOT", "10 min"],
            ["RESULTS", "Same day"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex flex-col gap-1 border-r border-[#e6dcdd] px-1 py-3 last:border-r-0"
            >
              <span className="text-[11px] font-bold tracking-[.12em] text-[#7a7374] min-[600px]:text-sm">
                {label}
              </span>
              <strong
                className={`text-[clamp(20px,3vw,34px)] font-extrabold ${label === "RESULTS" ? "text-[#b5202e]" : ""}`}
              >
                {value}
              </strong>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <article className="space-y-7 rounded-[20px] border border-[#ece5e6] bg-white p-6 min-[600px]:p-10">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="flex items-center gap-5">
              <span
                aria-hidden="true"
                className="text-6xl font-extrabold text-[#eadadc]"
              >
                01
              </span>
              <div>
                <p className="text-xs font-bold tracking-[.2em] text-[#b5202e]">
                  STEP 01 · BEFORE THE INTERVIEW
                </p>
                <h2 className="mt-2 text-[clamp(28px,3.2vw,36px)] leading-tight font-extrabold tracking-[-.03em]">
                  Review Candidate Profiles.
                </h2>
              </div>
            </div>
            <p className="max-w-[460px] text-lg leading-[1.6] text-[#5f5a5b] max-[1176px]:basis-full max-[1177px]:max-w-none">
              Read each application before the interview day, so every question
              builds on what the candidate has already shared.
            </p>
          </div>
          <ul className="grid gap-3 min-[600px]:grid-cols-2 min-[1000px]:grid-cols-[3.1fr_1fr_1.25fr_2.65fr_1.4fr]">
            {documents.map((document, index) => (
              <div
                key={document}
                className="rounded-[14px] border border-[#f0eaea] bg-[#fbf8f8] p-4"
              >
                <span className="block text-xs font-bold tracking-[.16em] text-[#7a7374]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong className="mt-1 block text-lg">{document}</strong>
              </div>
            ))}
          </ul>
        </article>

        <article className="space-y-9 rounded-[24px] bg-[#2a1b1f] p-6 text-white min-[600px]:p-10 min-[900px]:p-12">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="flex items-center gap-5">
              <span
                aria-hidden="true"
                className="text-6xl font-extrabold text-[#5a3c43]"
              >
                02
              </span>
              <div>
                <p className="text-xs font-bold tracking-[.2em] text-[#e0525e]">
                  STEP 02 · INTERVIEW DAY
                </p>
                <h2 className="mt-2 text-[clamp(35px,4.8vw,51px)] leading-tight font-extrabold tracking-[-.035em]">
                  Interview <span className="text-[#e0525e]">Flow.</span>
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
                10 min / slot
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
                15–16 slots
              </span>
            </div>
          </div>
          <p className="text-xl leading-[1.6] text-[#cfc5c7]">
            Two mentors meet one candidate in each slot. Every slot follows the
            same <strong className="text-white">10-minute rhythm</strong>, so
            the whole day stays on time.
          </p>
          <div
            role="img"
            aria-label="Interview from minute 0 to 8, warning from 8 to 9, note taking from 9 to 10"
            className="flex h-[60px] overflow-hidden rounded-[14px] font-bold"
          >
            <div className="flex-[8] bg-[#f5f2f2] px-4 py-4 text-xl text-[#141414] min-[600px]:text-2xl">
              Interview
            </div>
            <div className="flex-1 bg-[#e0525e]" />
            <div className="flex-1 border-l-4 border-white bg-[#6e5b60]" />
          </div>
          <div
            aria-hidden="true"
            className="relative -mt-7 h-5 text-sm font-bold"
          >
            <span className="absolute left-0">0</span>
            <span className="absolute left-[80%] -translate-x-1/2">8</span>
            <span className="absolute left-[90%] -translate-x-1/2 text-[#e0525e]">
              9
            </span>
            <span className="absolute right-0">10</span>
          </div>
          <div className="grid gap-7 min-[600px]:grid-cols-2 min-[1000px]:grid-cols-4">
            {schedule.map(([time, label, description]) => (
              <div key={time}>
                <strong
                  className={`text-4xl ${time.includes(":") ? "text-[#e0525e]" : ""}`}
                >
                  {time}
                </strong>
                <p className="mt-2 text-xs font-bold tracking-[.2em]">
                  {label}
                </p>
                <p className="mt-2 text-lg leading-[1.6] text-[#cfc5c7]">
                  {description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#4a3a3e] pt-7">
            <p className="text-lg">
              <strong className="text-2xl">10:00 — Next Candidate</strong>{" "}
              <span className="text-[#cfc5c7]">
                The next candidate enters and the same rhythm starts again.
              </span>
            </p>
            <span className="rounded-full bg-[#b5202e] px-5 py-2 font-bold tracking-[.2em]">
              NEW ROUND
            </span>
          </div>
        </article>

        <article className="flex flex-wrap items-center justify-between gap-6 rounded-[20px] bg-[#b5202e] p-7 text-white min-[600px]:p-10">
          <div className="flex items-center gap-5">
            <span
              aria-hidden="true"
              className="text-6xl font-extrabold text-[#e07a84]"
            >
              03
            </span>
            <div>
              <p className="text-xs font-bold tracking-[.2em] text-[#f4c9cd]">
                STEP 03 · AFTER THE INTERVIEWS
              </p>
              <h2 className="mt-2 text-[clamp(29px,3.4vw,37px)] leading-tight font-extrabold">
                Mentee Announcement.
              </h2>
            </div>
          </div>
          <p className="basis-full text-xl leading-[1.6] text-[#fbe7e9]">
            After all interviews are completed, the selected mentees will be
            announced on the same day.
          </p>
        </article>
      </div>
    </section>
  );
}
