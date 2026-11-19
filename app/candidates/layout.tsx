import { Header } from "@/components/header";

export default function CandidatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header activeHref="/candidates" />
      {children}
    </>
  );
}
