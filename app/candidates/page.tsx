import { CandidatesPage } from "@/components/candidates/candidates-page";
import { getMentees } from "@/lib/mentees";

export const dynamic = "force-dynamic";

export default function YourCandidatesPage() {
  const candidates = getMentees().then((mentees) =>
    mentees.sort((a, b) =>
      a.code.localeCompare(b.code, undefined, { numeric: true }),
    ),
  );

  return <CandidatesPage candidates={candidates} />;
}
