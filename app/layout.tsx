import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "./components/ThemeProvider";
import { siteDescription, siteName, siteSummary, siteUrl } from "@/lib/seo";
import { FloatingControls } from "./components/FloatingControls";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
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
    description: siteSummary,
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
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Script id="theme-initializer" strategy="beforeInteractive">
          {`
            (function(){
              try {
                var storageKey = 'burst-theme';
                var root = document.documentElement;
                var stored = localStorage.getItem(storageKey);
                var mql = window.matchMedia('(prefers-color-scheme: dark)');
                var theme = stored === 'light' || stored === 'dark' ? stored : (mql.matches ? 'dark' : 'light');
                root.dataset.theme = theme;
                root.classList.toggle('dark', theme === 'dark');
                root.style.setProperty('color-scheme', theme);
              } catch (error) {
                console.warn('Theme init failed', error);
              }
            })();
          `}
        </Script>
        <ThemeProvider>
          <FloatingControls />
          <div className="relative min-h-screen overflow-hidden">{children}</div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
