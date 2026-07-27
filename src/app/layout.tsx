import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Govt. Jinnah Graduate College for Women | Mozang, Lahore",
    template: "%s | GJGCW Mozang",
  },
  description:
    "Premier government graduate college for women in Mozang, Lahore. Established 1990. Admissions 2026-27 open. Excellence in academics, culture, and sports.",
  keywords: [
    "Govt Jinnah Graduate College",
    "women college Lahore",
    "Mozang college",
    "admissions 2026",
    "ADP English",
    "ADP Computer Science",
  ],
  openGraph: {
    title: "Govt. Jinnah Graduate College for Women",
    description: "Empowering women through education since 1990. Mozang, Lahore.",
    type: "website",
    locale: "en_PK",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col overflow-x-clip bg-white font-sans">{children}</body>
    </html>
  );
}
