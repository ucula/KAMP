import { Header } from "@/components/header";

export default async function GroupInterviewLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;

  return (
    <>
      <Header activeHref="/interview" basePath={`/g/${token}`} />
      {children}
    </>
  );
}
