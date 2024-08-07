import type { Metadata } from "next";

import "./globals.css";

import { fonts } from "@/utils/fonts";
import ThemeProvider from "@/providers/theme";
import Sidebar from "@/components/layout/sidebar";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Data Table by Ihda Anwari",
  description: "Data Table by Ihda Anwari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.dmSans.variable} suppressHydrationWarning>
      <body className="dark:bg-midnight-950 bg-slate-100 flex w-full transition-colors duration-150">
        <ThemeProvider>
          <Sidebar className="hidden lg:block sticky top-0 left-0" />
          <main className="w-full relative px-5 lg:pt-40 pt-52 pb-14 space-y-9">
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
