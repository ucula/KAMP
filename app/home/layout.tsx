import { Header } from "@/components/header";
import { HomeImageGate } from "@/components/home/home-image-gate";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HomeImageGate>
      <Header activeHref="/home" />
      {children}
    </HomeImageGate>
  );
}
