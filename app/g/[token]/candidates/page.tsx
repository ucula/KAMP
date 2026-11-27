import { notFound } from "next/navigation";
import { CandidatesPage } from "@/components/candidates/candidates-page";
import { groupForToken } from "@/lib/group-links";
import { getMentees } from "@/lib/mentees";

export const dynamic = "force-dynamic";

export default async function GroupCandidatesPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const pair = await groupForToken(token);
  if (!pair) notFound();

  const candidates = getMentees(pair).then((mentees) =>
    mentees.sort((a, b) =>
      a.code.localeCompare(b.code, undefined, { numeric: true }),
    ),
  );

  return <CandidatesPage candidates={candidates} pair={pair} />;
}
