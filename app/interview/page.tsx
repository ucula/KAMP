import { InterviewPage } from "@/components/interview/interview-page";
import { getMentees } from "@/lib/mentees";

export const dynamic = "force-dynamic";

export default async function InterviewPrepPage({
  searchParams,
}: {
  searchParams: Promise<{ view?: string; pair?: string }>;
}) {
  const testViewEnabled =
    process.env.NODE_ENV !== "production" &&
    process.env.ENABLE_ALL_CANDIDATES_TEST_VIEW === "true";
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
    <InterviewPage
      candidates={candidates}
      testViewEnabled={testViewEnabled}
      showAll={showAll}
      selectedPair={selectedPair}
    />
  );
}
