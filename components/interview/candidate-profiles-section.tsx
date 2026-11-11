import { Suspense } from "react";
import type { Mentee } from "@/lib/mentees";
import { SectionHeading } from "@/components/ui/section-heading";
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
      className="scroll-mt-[92px] border-t border-[#ded5d5] py-[65px] min-[600px]:py-20 min-[900px]:pb-[100px]"
    >
      <SectionHeading id="candidate-title" title="Get to know the people." />
      <Suspense
        fallback={
          <div role="status" className="flex items-center gap-3 text-sm text-[#6d6263]">
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
      <p className="mb-6 text-sm text-[#6d6263]">
        Showing {mentees.length} candidates
        {pair ? ` in Pair ${pair}` : " across 17 pairs"}.
      </p>
      <CandidateGallery candidates={mentees} />
    </>
  );
}
