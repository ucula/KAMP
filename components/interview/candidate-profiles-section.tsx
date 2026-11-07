import { SectionHeading } from "@/components/ui/section-heading";
import { CandidateGallery } from "./candidate-gallery";

export function CandidateProfilesSection() {
  return (
    <section aria-labelledby="candidate-title" className="scroll-mt-[92px] border-t border-[#ded5d5] py-[65px] min-[600px]:py-20 min-[900px]:pb-[100px]">
      <SectionHeading eyebrow="03 / OUR CANDIDATES" id="candidate-title" title="Get to know the people." note="Tap a card to preview the candidate profile layout. Official information is still pending." />
      <CandidateGallery />
    </section>
  );
}
