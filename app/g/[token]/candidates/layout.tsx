import { Header } from "@/components/header";

export default async function GroupCandidatesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  return (
    <>
      <Header activeHref="/candidates" basePath={`/g/${token}`} />
      {children}
    </>
  );
}
