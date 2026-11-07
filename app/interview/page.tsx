import { CandidateProfilesSection } from "@/components/interview/candidate-profiles-section";
import { InterviewIntro } from "@/components/interview/interview-intro";
import { InterviewNextStep } from "@/components/interview/interview-next-step";
import { getMentees } from "@/lib/mentees";

export const dynamic = "force-dynamic";

export default async function InterviewPrepPage({
  searchParams,
}: {
  searchParams: Promise<{ view?: string; pair?: string }>;
}) {
  const testViewEnabled = process.env.ENABLE_ALL_CANDIDATES_TEST_VIEW === "true";
  const query = await searchParams;
  const showAll = testViewEnabled && query.view === "all";
  const selectedPair =
    showAll && typeof query.pair === "string" && /^(?:[1-9]|1[0-7])$/.test(query.pair)
      ? Number(query.pair)
      : null;
  const candidates = showAll
    ? (await getMentees())
        .filter((candidate) => !selectedPair || candidate.pairs.includes(selectedPair))
        .sort(
          (a, b) =>
            (selectedPair ? 0 : a.pairs[0] - b.pairs[0]) ||
            a.code.localeCompare(b.code, undefined, { numeric: true }),
        )
    : [];

  return (
    <main className="min-h-[calc(100svh-92px)] bg-[#f9f6f4] pb-[95px] font-[Arial,Helvetica,sans-serif] text-[#211a1b]">
      <div className="mx-auto w-[calc(100%-48px)] max-w-[1220px] min-[900px]:w-[calc(100%-96px)]">
        <InterviewIntro />
        {/* <InterviewerPairSection /> */}
        {/* <InterviewTipsSection /> */}
        <CandidateProfilesSection
          candidates={candidates}
          testViewEnabled={testViewEnabled}
          showAll={showAll}
          selectedPair={selectedPair}
        />
        <InterviewNextStep />
      </div>
    </main>
  );
}
