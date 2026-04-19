import Script from "next/script"
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "JSON 포매터 — MoneyStom7",
  description: "JSON을 보기 좋게 정렬하거나 압축하고 유효성을 검사하세요.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body>{children}        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8414331859152952"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body></html>;
}
