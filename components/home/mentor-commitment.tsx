import { Check } from "lucide-react";
import { TextHeading, homeTopicHeadingClass } from "@/components/ui/text-heading";

const commitments = [
  { number: "01", title: "Wisdom on the Road", target: "wisdom-on-the-road" },
  { number: "02", title: "Workshop", target: "workshop" },
  { number: "03", title: "KAMP Learning Space", target: "kamp-learning-space" },
];

const container =
  "mx-auto w-[calc(100%-48px)] max-w-[1220px] min-[900px]:w-[calc(100%-96px)]";

export function MentorCommitment() {
  return (
    <section
      id="mentor-commitment"
      aria-labelledby="mentor-commitment-title"
      className="scroll-mt-[92px] bg-[#f9f6f4] py-14 pb-4 min-[900px]:pt-20 min-[900px]:pb-6"
    >
      <hr
        aria-hidden="true"
        className="mx-auto mb-10 h-px w-[calc(100%-48px)] border-0 bg-[#ded5d5] min-[600px]:mb-12 min-[900px]:mb-16 min-[900px]:w-[calc(100%-96px)]"
      />
      <div className={container}>
        <div className="max-w-[900px]">
          <TextHeading
            as="h2"
            id="mentor-commitment-title"
            className={`${homeTopicHeadingClass} max-w-none`}
            text="Mentor"
            accent="Commitment"
            accentClassName="text-[#ad1425]"
          />
          <p className="mt-4 max-w-[760px] text-base leading-[1.6] text-[#6d6263] min-[600px]:text-lg">
            What every mentor attends, and the extra activities open to join
            along the way.
          </p>
        </div>

        <article className="relative mt-7 grid min-h-[200px] grid-cols-[auto_1fr] items-center gap-x-2 gap-y-3 overflow-hidden rounded-[22px] bg-gradient-to-br from-[#35191d] to-[#211a1b] px-5 py-7 text-white max-[600px]:gap-x-5 min-[600px]:min-h-[230px] min-[600px]:grid-cols-[.3fr_1.45fr_1.15fr] min-[600px]:gap-x-4 min-[600px]:gap-y-0 min-[600px]:px-8 min-[600px]:py-9">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-10 size-64 rounded-full border-[38px] border-white/[.04]"
          />
          <strong className="relative text-[clamp(88px,14vw,144px)] leading-[.8] font-extrabold tracking-[-.08em] text-[#d32b3a] min-[900px]:translate-x-8">
            5
          </strong>
          <h3 className="relative m-0 text-[clamp(26px,4vw,38px)] leading-[1.02] font-extrabold tracking-[-.055em] min-[900px]:translate-x-8">
            Mentoring Sessions
          </h3>
          <div className="relative col-span-2 flex flex-col items-start gap-2 min-[600px]:col-span-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#b5202e] px-3 py-1 text-[10px] font-extrabold tracking-[.14em] text-white">
              <Check size={12} strokeWidth={3} aria-hidden="true" />
              REQUIRED
            </span>
            <p className="m-0 text-sm leading-[1.45] text-[#f2e8e9]">
              Every mentor attends all five sessions with their mentees.
            </p>
          </div>
        </article>

        <div className="mt-7 mb-5 text-center">
          <h3 className="m-0 text-[clamp(24px,3vw,36px)] leading-[1.1] font-extrabold tracking-[-.045em] text-[#211a1b]">
            You’re Always <span className="text-[#ad1425]">Welcome.</span>
          </h3>
          <p className="mx-auto mt-2 max-w-[760px] text-sm leading-[1.55] text-[#6d6263]">
            These activities are optional — please join whenever your schedule
            allows.
            <br />
            Your presence always means a great deal to our mentees.
          </p>
        </div>

        <div className="grid gap-3 min-[600px]:grid-cols-2 min-[900px]:gap-4 min-[1000px]:grid-cols-3">
          {commitments.map(({ number, title, target }) => (
            <a
              key={number}
              href={`#activity-${target}`}
              aria-label={`Explore ${title} in Our Activities`}
              className="group relative flex min-h-[140px] flex-col overflow-hidden rounded-[20px] border border-[#eadfdf] bg-gradient-to-br from-white to-[#fff9f9] p-4 text-inherit no-underline shadow-[0_12px_34px_#5a25250a] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-[#c77a82] hover:shadow-[0_20px_42px_#9d737322] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ad1425] motion-reduce:transition-none motion-reduce:hover:translate-y-0 min-[600px]:min-h-[150px] min-[600px]:last:col-span-full min-[900px]:p-5 min-[1000px]:last:col-span-1"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-[#ad1425]"
              />
              <span
                aria-hidden="true"
                className="relative mt-1 h-1 w-8 rounded-full bg-[#ad1425] transition-all duration-300 group-hover:w-12 motion-reduce:transition-none"
              />
              <span className="relative mt-3 max-w-none text-[clamp(16px,2.4vw,24px)] leading-[1.08] font-extrabold tracking-[-.045em] text-[#211a1b]">
                {title}
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-2 bottom-[-.15em] text-[clamp(64px,9vw,92px)] leading-none font-extrabold tracking-[-.08em] text-[#ad1425]/10"
              >
                {number}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
