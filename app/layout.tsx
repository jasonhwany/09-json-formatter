import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"

const BASE_URL = "https://json.moneystom7.com"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "JSON 포매터 — MoneyStom7",
    template: "%s | MoneyStom7",
  },
  description: "JSON 데이터를 보기 좋게 정렬·검증. 무료 온라인 JSON 포매터. Free online JSON formatter and validator. Beautify, format and validate JSON data instantly.",
  keywords: ["JSON 포매터", "JSON Formatter", "무료", "온라인", "계산기", "JSON formatter", "JSON validator", "JSON beautifier", "JSON parser"],
  authors: [{ name: "MoneyStom7" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "JSON 포매터 — MoneyStom7",
    description: "JSON 데이터를 보기 좋게 정렬·검증. 무료 온라인 JSON 포매터.",
    url: BASE_URL,
    siteName: "MoneyStom7",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON 포매터 — MoneyStom7",
    description: "JSON 데이터를 보기 좋게 정렬·검증. 무료 온라인 JSON 포매터.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8414331859152952"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
