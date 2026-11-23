import { Header } from "@/components/header";
import { HomeContent } from "@/components/home/home-page";
import { HomeImageGate } from "@/components/home/home-image-gate";

export default async function GroupHomePage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const basePath = `/g/${token}`;
  return (
    <HomeImageGate>
      <Header activeHref="/home" basePath={basePath} />
      <HomeContent basePath={basePath} />
    </HomeImageGate>
  );
}
