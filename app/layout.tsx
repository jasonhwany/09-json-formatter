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
  description: "JSON 데이터를 보기 좋게 정렬·검증. Free JSON formatter and validator.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "JSON 포매터 — MoneyStom7",
    description: "JSON 데이터를 보기 좋게 정렬·검증. Free JSON formatter and validator.",
    url: BASE_URL,
    siteName: "MoneyStom7",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON 포매터 — MoneyStom7",
    description: "JSON 데이터를 보기 좋게 정렬·검증. Free JSON formatter and validator.",
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
          src="https://www.googletagmanager.com/gtag/js?id=G-GN51TN6PS4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GN51TN6PS4');
          `}
        </Script>
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
