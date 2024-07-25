import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RT Chat",
  description: "A real-time chat application",
  authors: { name: "Alejandro Córdoba Ríos", url: "https://github.com/lejito" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
