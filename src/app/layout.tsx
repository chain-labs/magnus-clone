import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SubscriptionProvider } from "@/state/subscription-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Magnus Hathaway",
  description: "Magnus Hathaway's site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0F0F0F" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SubscriptionProvider>{children}</SubscriptionProvider>
      </body>
    </html>
  );
}
