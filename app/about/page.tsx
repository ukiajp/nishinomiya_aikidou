import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "合氣道について | 西宮合氣道同好会",
  description: "合氣道とは何か、他の武道との違い、初心者の方がよく感じる疑問にお答えします。",
};

const comparisons = [
  { label: "競技・試合", aikido: "なし", karate: "あり", judo: "あり" },
  { label: "体格・体力", aikido: "問わない", karate: "影響する", judo: "影響しやすい" },
  { label: "年齢制限", aikido: "実質なし", karate: "ある程度", judo: "ある程度" },
  { label: "関節への負担", aikido: "比較的少ない", karate: "中程度", judo: "やや高い" },
];

const faqs = [
  {
    q: "道着は最初から必要ですか？",
    a: "体験稽古の間は私服で参加できます。入会後に道着をご用意いただければ大丈夫です。",
  },
  {
    q: "一人で参加しても大丈夫ですか？",
    a: "もちろんです。ほとんどの方が一人で来られます。先輩会員が丁寧にサポートします。",
  },
  {
    q: "体力がなくても続けられますか？",
    a: "合氣道は体力や筋力に頼らない武道です。自分のペースで無理なく稽古できます。",
  },
  {
    q: "何歳から始められますか？",
    a: "年齢の上限はありません。60代・70代から始めた会員も元気に稽古しています。",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader en="ABOUT AIKIDO" ja="合氣道について" />

      {/* 合氣道とは */}
      <section className="bg-[#faf8f5] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.35em] text-[#b8903a] mb-4">PHILOSOPHY</p>
            <h2 className="text-2xl md:text-3xl font-medium text-[#1c1c1c] tracking-wider">
              力ではなく、流れと調和の武道
            </h2>
            <div className="w-8 h-px bg-[#b8903a] mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e2dcd2]">
            {[
              {
                en: "NO COMPETITION",
                ja: "競い合わない",
                body: "試合や勝ち負けを求めません。相手の力を利用し、流れを読んで技をかける。「勝つ」ではなく「調和する」ことが合氣道の本質です。",
              },
              {
                en: "FOR EVERYONE",
                ja: "体格・体力を選ばない",
                body: "技は筋力ではなく体の使い方で成り立ちます。小柄な方・高齢の方でも、正確な動きで大柄な相手に技をかけることができます。",
              },
              {
                en: "MIND & BODY",
                ja: "心身の調和",
                body: "稽古を重ねるうちに、集中力・バランス感覚・姿勢が整ってきます。日常生活での落ち着きや動作の美しさにもつながります。",
              },
            ].map((f) => (
              <div key={f.en} className="bg-white p-10">
                <p className="text-[9px] tracking-[0.3em] text-[#b8903a] mb-4">{f.en}</p>
                <h3 className="text-lg font-medium text-[#1c1c1c] tracking-wider mb-4">{f.ja}</h3>
                <div className="w-5 h-px bg-[#e2dcd2] mb-5"></div>
                <p className="text-[#5a5a5a] text-sm leading-loose">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 他武道との違い */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.35em] text-[#b8903a] mb-4">COMPARISON</p>
            <h2 className="text-2xl md:text-3xl font-medium text-[#1c1c1c] tracking-wider">
              他の武道との違い
            </h2>
            <div className="w-8 h-px bg-[#b8903a] mx-auto mt-6 mb-4"></div>
            <p className="text-[#5a5a5a] text-sm">「空手や柔道と何が違うの？」という方のために。</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1c2333] text-white text-sm">
                  <th className="py-4 px-6 text-left font-normal tracking-wider">項目</th>
                  <th className="py-4 px-6 text-left font-normal tracking-[0.15em] text-[#d4a853]">合氣道</th>
                  <th className="py-4 px-6 text-left font-normal tracking-wider text-slate-400">空手</th>
                  <th className="py-4 px-6 text-left font-normal tracking-wider text-slate-400">柔道</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={row.label} className={`border-b border-[#e2dcd2] text-sm ${i % 2 === 0 ? "bg-[#faf8f5]" : "bg-white"}`}>
                    <td className="py-4 px-6 text-[#5a5a5a] tracking-wide">{row.label}</td>
                    <td className="py-4 px-6 text-[#b8903a] font-medium">{row.aikido}</td>
                    <td className="py-4 px-6 text-[#5a5a5a]">{row.karate}</td>
                    <td className="py-4 px-6 text-[#5a5a5a]">{row.judo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#faf8f5] py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.35em] text-[#b8903a] mb-4">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-medium text-[#1c1c1c] tracking-wider">
              よくある質問
            </h2>
            <div className="w-8 h-px bg-[#b8903a] mx-auto mt-6"></div>
          </div>
          <div className="divide-y divide-[#e2dcd2]">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-8">
                <p className="text-[9px] tracking-[0.3em] text-[#b8903a] mb-3">QUESTION</p>
                <p className="font-medium text-[#1c1c1c] mb-4 tracking-wide leading-relaxed">{faq.q}</p>
                <p className="text-[#5a5a5a] text-sm leading-loose">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-center border-t border-[#e2dcd2]">
        <p className="text-[#5a5a5a] text-sm mb-6 tracking-wide">実際の稽古内容や日程を確認してみましょう。</p>
        <Link
          href="/activity"
          className="inline-block border border-[#1c2333] hover:bg-[#1c2333] text-[#1c1c1c] hover:text-white px-10 py-4 tracking-widest text-sm transition-colors"
        >
          活動紹介を見る
        </Link>
      </section>

      <CtaBanner />
    </>
  );
}
