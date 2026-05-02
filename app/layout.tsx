import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The 15 Minute App",
  description:
    "Track time and activities in 15-minute slots, uncover daily time leaks, and build more productive weeks with The 15 Minute App.",
  applicationName: "The 15 Minute App",
  keywords: [
    "time tracking",
    "productivity app",
    "15 minute app",
    "activity tracker",
    "time management",
  ],
  openGraph: {
    title: "The 15 Minute App",
    description:
      "Track time and activities in 15-minute slots, uncover daily time leaks, and build more productive weeks.",
    type: "website",
    siteName: "The 15 Minute App",
    images: [
      {
        url: "/01-calendar.png",
        alt: "Calendar overview inside The 15 Minute App",
      },
      {
        url: "/04-full-day.png",
        alt: "Full-day breakdown in 15-minute intervals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The 15 Minute App",
    description:
      "A productivity app for tracking your time and activities in 15-minute slots.",
    images: ["/01-calendar.png", "/04-full-day.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

