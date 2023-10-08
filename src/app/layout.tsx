import "./globals.css";
import type { Metadata } from "next";
import { Darker_Grotesque } from "next/font/google";

const darker_grotesque = Darker_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portolio Fabricio",
  description: "A portfolio of Fabricio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={darker_grotesque.className}>{children}</body>
    </html>
  );
}
