"use client";

import { RecoilRoot } from "recoil";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="p-4 bg-gray-200 flex space-x-4">
          <Link href="/" className="text-blue-500 hover:text-blue-700 font-semibold">Calendar</Link>
          <Link href="/tasks" className="text-blue-500 hover:text-blue-700 font-semibold">Tasks</Link>
        </nav>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}



