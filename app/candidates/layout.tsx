import { Header } from "@/components/header";
import { EntryImages } from "@/components/home/entry-images";

export default function CandidatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <EntryImages>
      <Header activeHref="/candidates" />
      {children}
    </EntryImages>
  );
}
