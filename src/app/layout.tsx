import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lightranslate-光翻译",
  description: "A pure translator application，一个简洁，纯粹的翻译应用",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-cn">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="光译" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#eaeff0" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0A0A0A" />
        <link rel="apple-touch-icon" href="/app-icons/translate-256.png"></link>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
