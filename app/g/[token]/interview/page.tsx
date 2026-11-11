import { Header } from "@/components/header";
import { InterviewPage } from "@/components/interview/interview-page";
import { groupForToken } from "@/lib/group-links";
import { getMentees } from "@/lib/mentees";
import { notFound } from "next/navigation";

export default async function GroupInterviewPage({
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
  const basePath = `/g/${token}`;

  return (
    <>
      <Header activeHref="/interview" basePath={basePath} />
      <InterviewPage candidates={candidates} pair={pair} basePath={basePath} />
    </>
  );
}
