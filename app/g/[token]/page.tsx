import { redirect } from "next/navigation";

export default async function GroupEntryPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  redirect(`/g/${token}/candidates`);
}
