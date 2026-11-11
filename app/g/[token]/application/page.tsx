import ApplicationPage from "@/app/application/page";
import { Header } from "@/components/header";

export default async function GroupApplicationPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  return (
    <>
      <Header activeHref="/application" basePath={`/g/${token}`} />
      <ApplicationPage />
    </>
  );
}
