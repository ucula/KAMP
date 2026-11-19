import { InterviewPage } from "@/components/interview/interview-page";

export default async function GroupInterviewPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const basePath = `/g/${token}`;

  return <InterviewPage basePath={basePath} />;
}
