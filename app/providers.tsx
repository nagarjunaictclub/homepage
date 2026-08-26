"use client"
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }, { pageprops: session }) {
  console.log(session)
  return (
    <SessionProvider session={session}   >
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}