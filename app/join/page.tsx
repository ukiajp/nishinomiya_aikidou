import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "入会案内 | 西宮合氣道同好会",
  description: "入会の流れ・費用・よくある質問。まずは無料の体験稽古からどうぞ。",
};

const steps = [
  {
    en: "STEP 01",
    title: "見学・体験稽古（無料）",
    body: "まずはお気軽に見学・体験稽古へ。道着不要、私服でOKです。雰囲気を確かめてからご判断ください。",
  },
  {
    en: "STEP 02",
    title: "入会申込み",
    body: "入会を希望される方は担当者に申し出てください。簡単な書類へのご記入をお願いします。",
  },
  {
    en: "STEP 03",
    title: "道着・会費の準備",
    body: "道着は入会後にご用意ください。購入先はご案内します。月会費は翌月分から発生します。",
  },
  {
    en: "STEP 04",
    title: "稽古スタート",
    body: "先輩会員が丁寧にサポートします。最初は基本動作からゆっくり覚えていきましょう。",
  },
];

const fees = [
  { en: "ADMISSION", ja: "入会金", amount: "なし", note: "" },
  { en: "MONTHLY", ja: "月会費", amount: "5,300円", note: "毎月" },
  { en: "UNIFORM", ja: "道着代", amount: "別途ご案内", note: "購入時のみ" },
];

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "体験稽古の申込み方法は？",
    a: (
      <>
        <Link href="/schedule" className="text-[#b8903a] underline hover:opacity-70 transition-opacity">稽古日程カレンダー</Link>
        で参加したい日程を確認のうえ、
        <Link href="/contact" className="text-[#b8903a] underline hover:opacity-70 transition-opacity">お問い合わせフォーム</Link>
        からお申し込みください。
      </>
    ),
  },
  {
    q: "道着はどこで買えますか？",
    a: "入会後に購入先をご案内します。ネット通販でも購入可能です。",
  },
  {
    q: "子供も参加できますか？",
    a: "現在の同好会は主に成人向けですが、詳細はお問い合わせください。",
  },
  {
    q: "途中退会できますか？",
    a: "いつでも退会できます。手続きは担当者にお申し出ください。",
  },
];

export default function JoinPage() {
  return (
    <>
      <PageHeader en="HOW TO JOIN" ja="入会案内" />

      {/* 入会の流れ */}
      <section className="bg-[#faf8f5] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.35em] text-[#b8903a] mb-4">FLOW</p>
            <h2 className="text-2xl md:text-3xl font-medium text-[#1c1c1c] tracking-wider">入会の流れ</h2>
            <div className="w-8 h-px bg-[#b8903a] mx-auto mt-6"></div>
          </div>
          <div className="divide-y divide-[#e2dcd2]">
            {steps.map((s) => (
              <div key={s.en} className="py-10 flex gap-8 items-start">
                <span className="text-[9px] tracking-[0.2em] text-[#b8903a] flex-shrink-0 mt-1 w-16">{s.en}</span>
                <div>
                  <h3 className="text-lg font-medium text-[#1c1c1c] tracking-wider mb-4">{s.title}</h3>
                  <p className="text-[#5a5a5a] text-sm leading-loose">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 費用 */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.35em] text-[#b8903a] mb-4">FEES</p>
            <h2 className="text-2xl md:text-3xl font-medium text-[#1c1c1c] tracking-wider">費用について</h2>
            <div className="w-8 h-px bg-[#b8903a] mx-auto mt-6 mb-4"></div>
            <p className="text-[#5a5a5a] text-sm">※金額は変更になる場合があります。詳細はお問い合わせください。</p>
          </div>
          <div className="border border-[#e2dcd2] divide-y divide-[#e2dcd2]">
            {fees.map((fee) => (
              <div key={fee.en} className="flex items-center px-8 py-6">
                <div className="w-28">
                  <p className="text-[9px] tracking-[0.2em] text-[#b8903a]">{fee.en}</p>
                  <p className="text-sm text-[#1c1c1c] mt-1">{fee.ja}</p>
                </div>
                <div className="flex-1 text-right">
                  <span className="text-[#1c1c1c] font-medium">{fee.amount}</span>
                  <span className="text-[#5a5a5a] text-xs ml-3">{fee.note}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-[#5a5a5a] tracking-wide">
            体験稽古は無料です。まずお試しください。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#faf8f5] py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.35em] text-[#b8903a] mb-4">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-medium text-[#1c1c1c] tracking-wider">よくある質問</h2>
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
        <p className="text-[#5a5a5a] text-sm mb-6 tracking-wide">ご不明な点はお気軽にお問い合わせください。</p>
        <Link
          href="/contact"
          className="inline-block border border-[#b8903a] hover:bg-[#b8903a] text-[#b8903a] hover:text-white px-10 py-4 tracking-widest text-sm transition-colors"
        >
          お問い合わせ・体験申込み
        </Link>
      </section>

      <CtaBanner />
    </>
  );
}
