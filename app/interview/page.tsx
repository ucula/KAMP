import { CandidateProfilesSection } from "@/components/interview/candidate-profiles-section";
import { InterviewIntro } from "@/components/interview/interview-intro";
import { InterviewNextStep } from "@/components/interview/interview-next-step";
import { InterviewTipsSection } from "@/components/interview/interview-tips-section";
import { InterviewerPairSection } from "@/components/interview/interviewer-pair-section";

export default function InterviewPrepPage() {
  return (
    <main className="min-h-[calc(100svh-92px)] bg-[#f9f6f4] pb-[95px] font-[Arial,Helvetica,sans-serif] text-[#211a1b]">
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1220px] min-[900px]:w-[calc(100%-96px)]">
        <InterviewIntro />
        <InterviewerPairSection />
        <InterviewTipsSection />
        <CandidateProfilesSection />
        <InterviewNextStep />
      </div>
    </main>
  );
}
