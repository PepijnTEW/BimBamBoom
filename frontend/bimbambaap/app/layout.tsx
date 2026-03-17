import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bim Bam Boom",
  description: "Speel de nieuwe Bim Bam Boom!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${inter.variable} antialiased bg-[#0F0F0F] min-h-screen text-[#EDEDED]`}>
        <nav className="py-3 flex items-center min-w-screen justify-around bg-[#1A1A1A] border-b-2 border-[#2D2D2D]">
          <p>Letter:</p>
          <h1>Bim Bam Boom</h1>
          <button className="bg-red">Button</button>
        </nav>
        {children}
      </body>
    </html>
  );
}
