import JSONFormatterClient from "@/components/JSONFormatterClient";
import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "JSON 포매터 (JSON Formatter)",
  url: "https://json.moneystom7.com",
  description: "JSON 데이터를 보기 좋게 정렬하고 검증하는 무료 도구",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
  inLanguage: ["ko", "en"],
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 font-sans">
      <Script id="json-ld" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <JSONFormatterClient />

      <section className="max-w-4xl mx-auto mt-16 space-y-10 text-sm text-gray-400 pb-16">
        <div>
          <h2 className="text-white text-base font-semibold mb-3">JSON 포매터란?</h2>
          <p>
            JSON 포매터(JSON Formatter)는 가독성이 떨어지는 JSON 데이터를 들여쓰기와 줄바꿈을 통해
            보기 좋게 정렬(prettify)하거나, 반대로 공백을 제거해 압축(minify)하는 무료 온라인 도구입니다.
            또한 JSON 문법 오류를 즉시 감지하는 유효성 검사(validate) 기능도 제공합니다.
            API 응답 디버깅, 설정 파일 편집, 데이터 검증에 유용합니다.
          </p>
        </div>

        <div>
          <h2 className="text-white text-base font-semibold mb-3">주요 기능</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li><strong className="text-gray-300">정렬 (Prettify)</strong> — 2칸 들여쓰기로 읽기 쉽게 포맷합니다.</li>
            <li><strong className="text-gray-300">압축 (Minify)</strong> — 모든 공백을 제거해 파일 크기를 줄입니다.</li>
            <li><strong className="text-gray-300">유효성 검사 (Validate)</strong> — JSON 문법 오류 위치를 즉시 알려줍니다.</li>
            <li><strong className="text-gray-300">복사</strong> — 결과를 클립보드에 원클릭 복사합니다.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-base font-semibold mb-3">자주 묻는 질문 (FAQ)</h2>
          <dl className="space-y-4">
            <div>
              <dt className="text-gray-300 font-medium">JSON이란 무엇인가요?</dt>
              <dd className="mt-1">JSON(JavaScript Object Notation)은 데이터를 텍스트 형식으로 표현하는 경량 데이터 교환 형식입니다. API 통신, 설정 파일, 데이터베이스 등에 광범위하게 사용됩니다.</dd>
            </div>
            <div>
              <dt className="text-gray-300 font-medium">JSON 압축은 왜 필요한가요?</dt>
              <dd className="mt-1">웹 API 응답이나 JavaScript 번들에서 불필요한 공백을 제거하면 파일 크기가 줄어 네트워크 전송 속도가 빨라집니다. 프로덕션 환경에서 성능 최적화에 사용됩니다.</dd>
            </div>
            <div>
              <dt className="text-gray-300 font-medium">입력한 JSON 데이터가 서버에 저장되나요?</dt>
              <dd className="mt-1">아니요. 모든 처리는 브라우저에서만 이루어지며 데이터가 서버로 전송되지 않습니다. API 키나 개인정보가 포함된 JSON도 안전하게 처리할 수 있습니다.</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}
