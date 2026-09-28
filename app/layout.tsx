import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import CssBaseline from "@mui/material/CssBaseline";

export const metadata: Metadata = {
  title: "KAMP 5 Engineering | Where Wisdom Empowers Potential",
  description: "Interview preparation, specialized curriculum, and pathways into engineering industries with KAMP 5 Engineering.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <CssBaseline />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
