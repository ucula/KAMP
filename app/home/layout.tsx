import { Header } from "@/components/header";
import { IntroImageGate } from "@/components/home/intro-image-gate";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <IntroImageGate>
      <Header activeHref="/home" />
      {children}
    </IntroImageGate>
  );
}
