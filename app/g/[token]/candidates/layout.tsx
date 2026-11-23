import { Header } from "@/components/header";
import { EntryImages } from "@/components/home/entry-images";

export default async function GroupCandidatesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  return (
    <EntryImages>
      <Header activeHref="/candidates" basePath={`/g/${token}`} />
      {children}
    </EntryImages>
  );
}
