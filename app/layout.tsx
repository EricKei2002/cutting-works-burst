import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SwupTransition } from "./components/SwupTransition";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cuttingworksburst.com";
const siteName = "Cutting Works Burst";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    "切り文字ステッカーやデザイン制作の実績を紹介する Cutting Works Burst のポートフォリオサイト。店舗看板・車両ラッピングなど幅広く対応します。",
  keywords: [
    "切り文字ステッカー",
    "カッティングシート",
    "看板デザイン",
    "車両ラッピング",
    "バイクデカール",
    "カスタムデザイン",
  ],
  openGraph: {
    title: siteName,
    description:
      "切り文字ステッカー・看板デザインの制作実績を掲載する Cutting Works Burst の公式サイト。",
    url: siteUrl,
    siteName,
    type: "website",
    images: [
      {
        url: "/hero-bg.svg",
        width: 1600,
        height: 960,
        alt: siteName,
      },
    ],
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description:
      "切り文字ステッカー制作・看板デザインのポートフォリオ Cutting Works Burst。",
    images: ["/hero-bg.svg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SwupTransition />
        <div
          id="swup"
          data-swup-transition
          className="relative min-h-screen overflow-hidden"
        >
          {children}
        </div>
        <Analytics />
        <span aria-hidden className="swup-overlay" />
      </body>
    </html>
  );
}
