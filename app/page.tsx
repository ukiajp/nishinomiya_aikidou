import Link from "next/link";
import Image from "next/image";
import CtaBanner from "@/components/CtaBanner";
import HeroSlideshow from "@/components/HeroSlideshow";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <HeroSlideshow />
        <div className="absolute inset-0 bg-[#0f1520]/65"></div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] text-[#d4a853] mb-8">NISHIMIYA AIKIDO</p>
          <h1 className="text-5xl md:text-7xl font-medium text-white leading-tight tracking-wider mb-8">
            西宮で、<br />
            はじめての<br className="sm:hidden" /><span className="whitespace-nowrap">合氣道。</span>
          </h1>
          <div className="w-8 h-px bg-[#b8903a] mx-auto mb-8"></div>
          <p className="text-slate-300 text-base md:text-lg leading-loose mb-12 tracking-wide">
            年齢・体力は問いません。<br className="hidden sm:block" />
            稽古を通じて、心と体を整える時間を。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="border border-[#b8903a] hover:bg-[#b8903a] text-[#d4a853] hover:text-white px-10 py-4 tracking-widest text-sm transition-colors"
            >
              無料体験を申し込む
            </Link>
            <Link
              href="/activity"
              className="border border-white/40 hover:border-white text-white/80 hover:text-white px-10 py-4 tracking-widest text-sm transition-colors"
            >
              稽古日程を確認する
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-[9px] tracking-[0.3em]">SCROLL</span>
          <div className="w-px h-12 bg-white/20"></div>
        </div>
      </section>

      {/* Veteran feature — ターゲットへの最強メッセージ */}
      <section className="bg-[#faf8f5] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/veteran.jpg"
                alt="ベテラン会員による指導"
                fill
                style={{ objectFit: "cover", objectPosition: "center 20%" }}
                quality={85}
              />
            </div>
            <div className="bg-white px-10 py-16 md:py-24">
              <p className="text-[10px] tracking-[0.35em] text-[#b8903a] mb-6">FOR BEGINNERS</p>
              <h2 className="text-3xl md:text-4xl font-medium text-[#1c1c1c] leading-tight tracking-wider mb-8">
                何歳からでも、<br />始められます。
              </h2>
              <div className="w-8 h-px bg-[#b8903a] mb-8"></div>
              <p className="text-[#5a5a5a] leading-loose text-sm md:text-base">
                合氣道は筋力や体力を競いません。<br />
                相手の力を受け流す動きは、<br />
                むしろ長年の経験で深まっていきます。<br /><br />
                60代・70代から始めた会員も<br />
                元気に稽古を続けています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3つの特徴 */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.35em] text-[#b8903a] mb-4">FEATURES</p>
            <h2 className="text-2xl md:text-3xl font-medium text-[#1c1c1c] tracking-wider">
              西宮合氣道同好会の特徴
            </h2>
            <div className="w-8 h-px bg-[#b8903a] mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e2dcd2]">
            {[
              {
                en: "NO COMPETITION",
                ja: "競わない",
                body: "試合も勝ち負けもありません。相手と合わせながら技を磨く。それが合氣道の稽古です。",
              },
              {
                en: "FOR ALL AGES",
                ja: "年齢・体力不問",
                body: "体格や体力に関わらず技が活きる武道です。自分のペースで、無理なく続けられます。",
              },
              {
                en: "WEST NISHINOMIYA",
                ja: "通いやすい場所",
                body: "西宮市内で週2回稽古しています。仕事帰りや週末にも無理なく通えます。",
              },
            ].map((f) => (
              <div key={f.en} className="bg-[#faf8f5] p-10 md:p-12">
                <p className="text-[9px] tracking-[0.3em] text-[#b8903a] mb-4">{f.en}</p>
                <h3 className="text-xl font-medium text-[#1c1c1c] tracking-wider mb-4">{f.ja}</h3>
                <div className="w-5 h-px bg-[#e2dcd2] mb-5"></div>
                <p className="text-[#5a5a5a] text-sm leading-loose">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 稽古の様子 */}
      <section className="bg-[#faf8f5] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.35em] text-[#b8903a] mb-4">PRACTICE</p>
            <h2 className="text-2xl md:text-3xl font-medium text-[#1c1c1c] tracking-wider">
              稽古の様子
            </h2>
            <div className="w-8 h-px bg-[#b8903a] mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { src: "/images/practice-1.jpg", alt: "稽古風景" },
              { src: "/images/practice-2.jpg", alt: "技の稽古" },
              { src: "/images/practice-3.jpg", alt: "対人稽古" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-square overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  quality={80}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/activity"
              className="inline-block text-[#b8903a] text-sm tracking-[0.2em] hover:opacity-60 transition-opacity"
            >
              活動紹介を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* 稽古日程 */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[10px] tracking-[0.35em] text-[#b8903a] mb-4">SCHEDULE</p>
          <h2 className="text-2xl md:text-3xl font-medium text-[#1c1c1c] tracking-wider mb-6">
            稽古日程
          </h2>
          <div className="w-8 h-px bg-[#b8903a] mx-auto mb-12"></div>
          <div className="border border-[#e2dcd2] divide-y divide-[#e2dcd2] text-left mb-10">
            <div className="flex items-baseline px-8 py-6">
              <span className="text-[9px] tracking-[0.2em] text-[#b8903a] w-32 flex-shrink-0">DAY / TIME</span>
              <span className="text-[#1c1c1c] text-sm leading-loose">
                毎週〇曜日・〇曜日<br />
                <span className="text-[#5a5a5a] text-xs">○○:○○ – ○○:○○（詳細は要確認）</span>
              </span>
            </div>
            <div className="flex items-baseline px-8 py-6">
              <span className="text-[9px] tracking-[0.2em] text-[#b8903a] w-32 flex-shrink-0">VENUE</span>
              <span className="text-[#1c1c1c] text-sm">
                西宮市内<br />
                <span className="text-[#5a5a5a] text-xs">（詳細はお問い合わせください）</span>
              </span>
            </div>
          </div>
          <Link
            href="/activity"
            className="inline-block border border-[#1c2333] hover:bg-[#1c2333] text-[#1c1c1c] hover:text-white px-10 py-4 tracking-widest text-sm transition-colors"
          >
            活動詳細を見る
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
