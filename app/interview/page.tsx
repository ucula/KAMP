import { InterviewPage } from "@/components/interview/interview-page";
import { getMentees } from "@/lib/mentees";

export const dynamic = "force-dynamic";

export default function InterviewPrepPage() {
  const candidates = getMentees().then((mentees) =>
    mentees.sort(
      (a, b) =>
        a.pairs[0] - b.pairs[0] ||
        a.code.localeCompare(b.code, undefined, { numeric: true }),
    ),
  );

  return <InterviewPage candidates={candidates} />;
}
