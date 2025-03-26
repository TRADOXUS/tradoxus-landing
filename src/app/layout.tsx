import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tradoxus",
  description: "Coming Soon - We're working on something amazing!",
  icons: {
    icon: "/logo_isotipe.svg",
    shortcut: "/logo_isotipe.svg",
    apple: "/logo_isotipe.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
