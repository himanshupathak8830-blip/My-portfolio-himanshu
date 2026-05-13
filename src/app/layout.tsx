import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Himanshu Pathak — Data Analyst & Automation Engineer",
  description:
    "Portfolio of Himanshu Pathak — Data Analyst, Automation Engineer, and Creative Developer building elegant digital experiences.",
  keywords: ["data analyst", "automation", "portfolio", "developer", "Himanshu Pathak"],
  openGraph: {
    title: "Himanshu Pathak Portfolio",
    description: "Premium portfolio for a Data Analyst & Automation Engineer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
