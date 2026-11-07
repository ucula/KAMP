import { Header } from "@/components/header";

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header activeHref="/application" />
      {children}
    </>
  );
}
