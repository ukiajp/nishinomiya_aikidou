import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "送信完了 | 西宮合氣道同好会",
};

export default function ThanksPage() {
  return (
    <section className="bg-[#faf8f5] min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-12 h-12 border border-[#b8903a] rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="text-[#b8903a] text-lg">✓</span>
        </div>
        <p className="text-[10px] tracking-[0.35em] text-[#b8903a] mb-4">THANK YOU</p>
        <h1 className="text-2xl font-medium text-[#1c1c1c] tracking-wider mb-6">
          送信が完了しました
        </h1>
        <div className="w-8 h-px bg-[#b8903a] mx-auto mb-8"></div>
        <p className="text-[#5a5a5a] text-sm leading-loose mb-12">
          お問い合わせありがとうございます。<br />
          2〜3営業日以内にご連絡いたします。
        </p>
        <Link
          href="/"
          className="inline-block border border-[#1c2333] hover:bg-[#1c2333] text-[#1c1c1c] hover:text-white px-10 py-4 tracking-widest text-sm transition-colors"
        >
          トップページへ戻る
        </Link>
      </div>
    </section>
  );
}
