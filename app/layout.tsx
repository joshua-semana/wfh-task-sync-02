import HeaderNav from "@/components/HeaderNav";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Sync",
  description:
    "Work-from-home reporting web application for the employees of LBP Resources and Development Corporation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="default" enableSystem>
          <div className="flex flex-col min-h-screen">
            <HeaderNav />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
