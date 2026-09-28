import { Header } from "@/components/header";

export default function InterviewPrepLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header activeHref="/interview" />
      {children}
    </>
  );
}
