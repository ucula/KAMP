import { Header } from "@/components/header";

export default function AppGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header activeHref="/app-guide" />
      {children}
    </>
  );
}
