import { Suspense } from "react";
import type { Mentee } from "@/lib/mentees";
import { CandidateGallery } from "./candidate-gallery";

export function CandidateProfilesSection({
  candidates,
  pair = null,
}: {
  candidates: Promise<Mentee[]>;
  pair?: number | null;
}) {
  return (
    <section
      aria-labelledby="candidate-title"
      className="relative mb-20 scroll-mt-[110px] overflow-hidden rounded-[28px] border border-[#e8d8d8] bg-gradient-to-br from-white via-[#fffafa] to-[#f5e8e7] px-5 py-9 shadow-[0_24px_70px_#5a252511] min-[600px]:px-9 min-[600px]:py-12 min-[900px]:mb-[100px] min-[900px]:px-12"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full border-[42px] border-[#ad1425]/5" />
      <p className="relative mb-5 text-xs font-extrabold tracking-[.22em] text-[#ad1425]">
        THE CANDIDATES / KAMP6
      </p>
      <h2 id="candidate-title" className="relative mb-4 max-w-[760px] text-[46px] leading-[1.02] font-extrabold tracking-[-.065em] min-[600px]:text-[clamp(44px,5vw,68px)]">
        Get to know the people.
      </h2>
      <p className="relative mb-10 max-w-[580px] text-base leading-[1.6] text-[#6d6263]">
        Explore the mentees and open a profile to see their submitted materials.
      </p>
      <Suspense
        fallback={
          <div role="status" className="relative flex items-center gap-3 text-sm text-[#6d6263]">
            <span
              aria-hidden="true"
              className="size-6 animate-spin rounded-full border-[3px] border-[#eadfdf] border-t-[#ad1425]"
            />
            Loading mentees…
          </div>
        }
      >
        <CandidateProfilesContent candidates={candidates} pair={pair} />
      </Suspense>
    </section>
  );
}

async function CandidateProfilesContent({
  candidates,
  pair,
}: {
  candidates: Promise<Mentee[]>;
  pair: number | null;
}) {
  const mentees = await candidates;

  return (
    <>
      <div className="relative mb-6 flex items-center gap-4">
        <p className="m-0 shrink-0 text-xs font-bold tracking-[.08em] text-[#8d5a60]">
          SHOWING {mentees.length} CANDIDATES
          {pair ? ` / PAIR ${pair}` : " / ALL PAIRS"}
        </p>
        <span aria-hidden="true" className="h-px flex-1 bg-[#e4cfd0]" />
      </div>
      <CandidateGallery candidates={mentees} />
    </>
  );
}
