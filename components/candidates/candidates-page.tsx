import { CandidateProfilesSection } from "./candidate-profiles-section";
import type { Mentee } from "@/lib/mentees";

export function CandidatesPage({
  candidates,
  pair = null,
}: {
  candidates: Promise<Mentee[]>;
  pair?: number | null;
}) {
  return (
    <main className="fluid-type min-h-[calc(100svh-92px)] bg-[#f9f6f4] py-12 font-[Arial,Helvetica,sans-serif] text-[#211a1b] min-[900px]:py-16">
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1220px] min-[900px]:w-[calc(100%-96px)]">
        <div className="mb-10 min-[900px]:mb-14">
          <h1 className="page-title m-0 leading-[.95] font-extrabold tracking-[-.055em]">
            Your <span className="text-[#b5202e]">Candidates</span>
          </h1>
          <p className="mt-5 pt-4 text-base leading-[1.6] text-[#605557] min-[600px]:text-lg min-[900px]:text-xl">
            Get to know the applicants before interview day by exploring their
            profiles and reviewing the materials they submitted.
          </p>
        </div>
        <CandidateProfilesSection candidates={candidates} pair={pair} />
      </div>
    </main>
  );
}
