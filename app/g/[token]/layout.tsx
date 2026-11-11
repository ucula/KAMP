import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { groupForToken } from "@/lib/group-links";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function GroupLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  if (!(await groupForToken(token))) notFound();

  return children;
}
