import type { Metadata } from "next";
import "./globals.css";
import Navbar from '@/components/layout/Navbar';

export const metadata: Metadata = {
  title: "Muradin.net",
  description: "Officiële website van Muradin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}