import { InterviewIntro } from "@/components/interview/interview-intro";
import { InterviewNextStep } from "@/components/interview/interview-next-step";

export function InterviewPage({
  basePath = "",
}: {
  basePath?: string;
}) {
  return (
    <main className="min-h-[calc(100svh-92px)] bg-[#f9f6f4] pb-16 font-[Arial,Helvetica,sans-serif] text-[#211a1b]">
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1220px] min-[900px]:w-[calc(100%-96px)]">
        <InterviewIntro />
        <InterviewNextStep basePath={basePath} />
      </div>
    </main>
  );
}
