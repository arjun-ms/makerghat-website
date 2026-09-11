import type { Metadata } from "next";
import { Outfit, Parkinsans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const parkinsans = Parkinsans({
  variable: "--font-parkinsans",
  subsets: ["latin"],
  adjustFontFallback: false,
  display: "swap",
});

export const metadata: Metadata = {
  title: "MakerGhat - Our Story",
  description: "The story that built MakerGhat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${parkinsans.variable} antialiased font-outfit`}>
        {children}
      </body>
    </html>
  );
}
