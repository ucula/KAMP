import Link from "next/link";
import type { Mentee } from "@/lib/mentees";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { CandidateGallery } from "./candidate-gallery";

export function CandidateProfilesSection({
  candidates,
  testViewEnabled,
  showAll,
  selectedPair,
  pair = null,
}: {
  candidates: Mentee[];
  testViewEnabled: boolean;
  showAll: boolean;
  selectedPair: number | null;
  pair?: number | null;
}) {
  return (
    <section
      aria-labelledby="candidate-title"
      className="scroll-mt-[92px] border-t border-[#ded5d5] py-[65px] min-[600px]:py-20 min-[900px]:pb-[100px]"
    >
      <SectionHeading id="candidate-title" title="Get to know the people." />
      {testViewEnabled && (
        <Link
          href={showAll ? "/interview" : "/interview?view=all"}
          className="mb-8 inline-flex rounded-full bg-[#ad1425] px-6 py-4 text-sm font-bold text-white no-underline hover:bg-[#8f101c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad1425]"
        >
          {showAll ? "Hide all candidates" : "View all candidates (testing)"}
        </Link>
      )}
      {showAll || pair ? (
        <>
          {showAll && (
            <nav aria-label="Filter candidates by pair" className="mb-6 flex flex-wrap gap-2">
              {[null, ...Array.from({ length: 17 }, (_, index) => index + 1)].map(
                (pair) => (
                  <Link
                    key={pair ?? "all"}
                    href={pair ? `/interview?view=all&pair=${pair}` : "/interview?view=all"}
                    prefetch={false}
                    aria-current={selectedPair === pair ? "page" : undefined}
                    className={cn(
                      "rounded-full border border-[#eadfdf] px-4 py-2 text-sm font-semibold no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ad1425]",
                      selectedPair === pair
                        ? "bg-[#ad1425] text-white"
                        : "bg-white text-[#554b4c] hover:bg-[#f2e8e8]",
                    )}
                  >
                    {pair ? `Pair ${pair}` : "All candidates"}
                  </Link>
                ),
              )}
            </nav>
          )}
          <p className="mb-6 text-sm text-[#6d6263]">
            Showing {candidates.length} candidates
            {pair || selectedPair
              ? ` in Pair ${pair || selectedPair}`
              : " across 17 pairs"}.
          </p>
          <CandidateGallery candidates={candidates} />
        </>
      ) : (
        <p className="text-base text-[#6d6263]">
          Candidate profiles will be available through your interview pair link.
        </p>
      )}
    </section>
  );
}
