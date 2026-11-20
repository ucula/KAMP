import type { Mentee } from "@/lib/mentees";
import { CandidateGallery } from "./candidate-gallery";
import { TextHeading } from "@/components/ui/text-heading";

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
      className="relative mb-14 scroll-mt-[110px] overflow-hidden rounded-[28px] border border-[#e8d8d8] bg-gradient-to-br from-white via-[#fffafa] to-[#f5e8e7] px-5 py-8 shadow-[0_24px_70px_#5a252511] min-[600px]:px-9 min-[600px]:py-10 min-[900px]:mb-16 min-[900px]:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full border-[42px] border-[#ad1425]/5"
      />

      <TextHeading
        as="h2"
        id="candidate-title"
        className="relative mb-4 max-w-none text-[46px] leading-[1.12] font-extrabold tracking-[-.065em] min-[600px]:text-[clamp(44px,5vw,68px)] min-[900px]:whitespace-nowrap"
        text="Meet your "
        accent="CANDIDATES"
        accentClassName="text-[#ad1425]"
      />
      <p className="relative mb-10 max-w-[580px] text-base leading-[1.6] text-[#6d6263]">
        Explore the mentees and open a profile to see their submitted materials.
      </p>
      <div className="relative mb-6 flex items-center gap-4">
        <p className="m-0 shrink-0 text-xs font-bold tracking-[.08em] text-[#8d5a60]">
          CANDIDATE PROFILES{pair ? ` / PAIR ${pair}` : " / ALL PAIRS"}
        </p>
        <span aria-hidden="true" className="h-px flex-1 bg-[#e4cfd0]" />
      </div>
      <CandidateGallery
        key={pair ?? "all"}
        candidates={candidates}
        allPairs={pair === null}
        pair={pair}
      />
    </section>
  );
}
