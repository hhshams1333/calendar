"use client";

import { RecoilRoot } from "recoil";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav className="p-4 bg-gray-200">
          <Link href="/calendar">Calendar</Link>
          <Link href="/tasks" className="ml-4">Tasks</Link>
        </nav>
        <RecoilRoot>{children}</RecoilRoot>
      </body>
    </html>
  );
}



