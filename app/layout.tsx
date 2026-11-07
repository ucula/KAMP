import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAMP6 Engineering | Where Wisdom Empowers Potential",
  description: "Explore engineering, prepare for your next step, and grow with KAMP6 Engineering.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
