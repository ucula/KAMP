import Image from "next/image";

export function InterviewIntro() {
  return (
    <section
      aria-labelledby="interview-title"
      className="pt-12 pb-12 min-[900px]:pt-16 min-[900px]:pb-20"
    >
      <p className="text-xs font-extrabold tracking-[.22em] text-[#ad1425]">
        KAMP6 ENGINEERING / INTERVIEW PREP
      </p>
      <h1
        id="interview-title"
        className="mt-9 mb-7 max-w-[950px] text-[60px] leading-[.95] font-extrabold tracking-[-.08em] min-[600px]:text-[clamp(62px,8vw,116px)]"
      >
        Interview <span className="text-[#ad1425]">Flow.</span>
      </h1>
      <Image
        src="/kamp6/interview-flow.png"
        alt="Interview flow: submit a candidate profile and pair preferences ranking, followed by two 10-minute interview slots with mentors and mentees."
        width={1888}
        height={710}
        sizes="(max-width: 899px) calc(100vw - 48px), (max-width: 1316px) calc(100vw - 96px), 1220px"
        className="h-auto w-full rounded-2xl"
      />
    </section>
  );
}
