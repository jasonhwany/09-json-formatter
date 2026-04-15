"use client";
import { useState } from "react";

export default function JSONFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState<{ msg: string; ok: boolean } | null>(null);
  const [copied, setCopied] = useState(false);

  const run = (mode: "format" | "minify" | "validate") => {
    if (!input.trim()) return;
    try {
      const parsed = JSON.parse(input);
      if (mode === "format") { setOutput(JSON.stringify(parsed, null, 2)); setStatus(null); }
      else if (mode === "minify") { setOutput(JSON.stringify(parsed)); setStatus(null); }
      else { setOutput(""); setStatus({ msg: "✅ 유효한 JSON입니다.", ok: true }); }
    } catch (e) {
      setOutput("");
      setStatus({ msg: `❌ ${(e as Error).message}`, ok: false });
    }
  };

  const copy = () => {
    navigator.clipboard.writeText(output || input);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const SAMPLE = `{\n  "name": "MoneyStom7",\n  "tools": 10,\n  "free": true\n}`;

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 font-sans">
      <div className="max-w-4xl mx-auto pt-10">
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🧹</div>
          <h1 className="text-3xl font-bold tracking-tight">JSON 포매터</h1>
          <p className="text-gray-400 mt-1 text-sm">정렬 · 압축 · 유효성 검사</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-gray-900 rounded-2xl p-4 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs text-gray-400">입력 JSON</label>
              <div className="flex gap-2">
                <button onClick={() => setInput(SAMPLE)} className="text-xs text-gray-500 hover:text-emerald-400 transition-colors">예시</button>
                <button onClick={() => { setInput(""); setOutput(""); setStatus(null); }} className="text-xs text-gray-500 hover:text-gray-300 transition-colors">지우기</button>
              </div>
            </div>
            <textarea value={input} onChange={e => setInput(e.target.value)}
              className="flex-1 bg-gray-800 border border-gray-700 rounded-xl p-4 text-sm font-mono h-72 resize-none focus:outline-none focus:border-emerald-500 transition-colors leading-relaxed"
              placeholder='{"key": "value"}' />
          </div>

          <div className="bg-gray-900 rounded-2xl p-4 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs text-gray-400">결과</label>
              <button onClick={copy} className="text-xs bg-gray-700 hover:bg-gray-600 px-2.5 py-1 rounded-lg transition-colors">
                {copied ? "✓ 복사됨" : "복사"}
              </button>
            </div>
            {status ? (
              <div className={`flex-1 rounded-xl p-4 text-sm font-mono h-72 flex items-start ${status.ok ? "bg-emerald-900/20 text-emerald-400 border border-emerald-500/20" : "bg-red-900/20 text-red-400 border border-red-500/20"}`}>
                <span>{status.msg}</span>
              </div>
            ) : (
              <textarea readOnly value={output}
                className="flex-1 bg-gray-800 border border-gray-700 rounded-xl p-4 text-sm font-mono h-72 resize-none focus:outline-none leading-relaxed"
                placeholder="결과가 여기 표시됩니다" />
            )}
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <button onClick={() => run("format")}
            className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-3 rounded-xl transition-colors text-sm">
            정렬 (Prettify)
          </button>
          <button onClick={() => run("minify")}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-xl transition-colors text-sm">
            압축 (Minify)
          </button>
          <button onClick={() => run("validate")}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-xl transition-colors text-sm">
            검증 (Validate)
          </button>
        </div>

        <p className="text-center text-xs text-gray-600 mt-10">
          <a href="https://moneystom7.com" className="hover:text-gray-400 transition-colors">← MoneyStom7 홈으로</a>
        </p>
      </div>
    </div>
  );
}
