import "./globals.css"; // 👈 This moved to the top

import type React from "react";
import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "Bremmiepalooza 2026",
  description: "January 16-18, 2026 · Cancun, MX",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>;
}
