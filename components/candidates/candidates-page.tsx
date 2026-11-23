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
    <main className="min-h-[calc(100svh-92px)] bg-[#f9f6f4] py-12 font-[Arial,Helvetica,sans-serif] text-[#211a1b] min-[900px]:py-16">
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1220px] min-[900px]:w-[calc(100%-96px)]">
        <div className="mb-10 max-w-[900px] min-[900px]:mb-14">
          <p className="mb-5 text-sm font-bold tracking-[.22em] text-[#b5202e]">KAMP ENGINEERING · MENTOR PORTAL</p>
          <h1 className="text-[clamp(56px,9vw,112px)] leading-[.95] font-extrabold tracking-[-.055em]">Your <span className="text-[#b5202e]">Candidates.</span></h1>
          <p className="mt-6 max-w-[700px] text-xl leading-[1.6] text-[#605557]">Get to know the applicants before interview day. Explore their profiles and review the materials they submitted.</p>
        </div>
        <CandidateProfilesSection candidates={candidates} pair={pair} />
      </div>
    </main>
  );
}
