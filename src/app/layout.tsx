import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Provider from "@/lib/provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UniHelp - Help for students, by students",
  description: "UniHelp is a platform for students to help each other out",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}
