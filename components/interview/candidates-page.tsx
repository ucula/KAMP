import { CandidateProfilesSection } from "@/components/interview/candidate-profiles-section";
import type { Mentee } from "@/lib/mentees";

export function CandidatesPage({
  candidates,
  pair = null,
}: {
  candidates: Promise<Mentee[]>;
  pair?: number | null;
}) {
  return (
    <main className="min-h-[calc(100svh-92px)] bg-[#f9f6f4] py-12 font-[Arial,Helvetica,sans-serif] text-[#211a1b] min-[900px]:py-16">
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1220px] min-[900px]:w-[calc(100%-96px)]">
        <CandidateProfilesSection candidates={candidates} pair={pair} />
      </div>
    </main>
  );
}
