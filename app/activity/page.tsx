import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "活動紹介 | 西宮合氣道同好会",
  description: "稽古内容・スケジュール・会場のご案内。見学・体験随時受付中です。",
};

const contents = [
  {
    en: "01",
    title: "基本動作・受け身",
    body: "まずは足運び・体の向き・受け身から。最初は基本の動きをゆっくり丁寧に学びます。受け身は怪我を防ぐ大切な技術です。",
  },
  {
    en: "02",
    title: "技の稽古（対人）",
    body: "先輩や同期と組んで技を稽古します。強さを競うのではなく、お互いに技を掛け合いながら動きを磨きます。",
  },
  {
    en: "03",
    title: "演武・審査（希望者）",
    body: "年に数回、演武の機会があります。段位の審査は希望者のみ。焦らず自分のペースで目標を持てます。",
  },
];

export default function ActivityPage() {
  return (
    <>
      <PageHeader en="ACTIVITY" ja="活動紹介" />

      {/* 稽古内容 */}
      <section className="bg-[#faf8f5] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.35em] text-[#b8903a] mb-4">CONTENTS</p>
            <h2 className="text-2xl md:text-3xl font-medium text-[#1c1c1c] tracking-wider">稽古内容</h2>
            <div className="w-8 h-px bg-[#b8903a] mx-auto mt-6"></div>
          </div>
          <div className="divide-y divide-[#e2dcd2]">
            {contents.map((c) => (
              <div key={c.en} className="py-10 flex gap-8 items-start">
                <span className="text-[#e2dcd2] text-4xl font-light flex-shrink-0 leading-none mt-1">{c.en}</span>
                <div>
                  <h3 className="text-lg font-medium text-[#1c1c1c] tracking-wider mb-4">{c.title}</h3>
                  <p className="text-[#5a5a5a] text-sm leading-loose">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 写真グリッド */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.35em] text-[#b8903a] mb-4">GALLERY</p>
            <h2 className="text-2xl md:text-3xl font-medium text-[#1c1c1c] tracking-wider">稽古の様子</h2>
            <div className="w-8 h-px bg-[#b8903a] mx-auto mt-6"></div>
          </div>
          {/* メイン写真 */}
          <div className="relative aspect-[16/7] overflow-hidden mb-4">
            <Image
              src="/images/training-throw-2.jpg"
              alt="投げ技の稽古"
              fill
              style={{ objectFit: "cover", objectPosition: "center 40%" }}
              quality={90}
            />
          </div>
          {/* サブ写真グリッド */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { src: "/images/practice-1.jpg", alt: "稽古風景" },
              { src: "/images/practice-4.jpg", alt: "稽古風景" },
              { src: "/images/veteran.jpg", alt: "ベテラン会員の指導" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] overflow-hidden">
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
        </div>
      </section>

      {/* スケジュール */}
      <section className="bg-[#faf8f5] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.35em] text-[#b8903a] mb-4">SCHEDULE</p>
            <h2 className="text-2xl md:text-3xl font-medium text-[#1c1c1c] tracking-wider">稽古スケジュール</h2>
            <div className="w-8 h-px bg-[#b8903a] mx-auto mt-6"></div>
          </div>
          <div className="border border-[#e2dcd2] divide-y divide-[#e2dcd2]">
            {[
              { day: "土曜日", time: "13:00 – 15:00", venue: "西宮市立中央体育館 武道場" },
              { day: "日曜日", time: "9:00 – 11:00", venue: "西宮市立中央体育館 武道場" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 text-sm">
                <div className="px-8 py-6 border-r border-[#e2dcd2]">
                  <p className="text-[9px] tracking-[0.2em] text-[#b8903a] mb-2">DAY</p>
                  <p className="text-[#1c1c1c] font-medium">{row.day}</p>
                </div>
                <div className="px-8 py-6 border-r border-[#e2dcd2]">
                  <p className="text-[9px] tracking-[0.2em] text-[#b8903a] mb-2">TIME</p>
                  <p className="text-[#1c1c1c]">{row.time}</p>
                </div>
                <div className="px-8 py-6">
                  <p className="text-[9px] tracking-[0.2em] text-[#b8903a] mb-2">VENUE</p>
                  <p className="text-[#1c1c1c]">{row.venue}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#5a5a5a] mt-4 tracking-wide">
            ※稽古日・時間・場所は変更になる場合があります。詳細はお問い合わせください。
          </p>
        </div>
      </section>

      {/* 会場 */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] tracking-[0.35em] text-[#b8903a] mb-4">ACCESS</p>
            <h2 className="text-2xl md:text-3xl font-medium text-[#1c1c1c] tracking-wider">会場・アクセス</h2>
            <div className="w-8 h-px bg-[#b8903a] mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="divide-y divide-[#e2dcd2]">
              {[
                { en: "ADDRESS", ja: "稽古場所", val: "西宮市立中央体育館 武道場" },
                { en: "STATION", ja: "最寄り駅", val: "阪急西宮北口駅 徒歩約20分 / JR西宮駅 徒歩約20分" },
                { en: "PARKING", ja: "駐車場", val: "詳細はお問い合わせください" },
              ].map((item) => (
                <div key={item.en} className="py-6">
                  <p className="text-[9px] tracking-[0.2em] text-[#b8903a] mb-2">{item.en}</p>
                  <p className="text-[#1c1c1c] text-sm leading-relaxed">{item.val}</p>
                </div>
              ))}
            </div>
            <div className="relative aspect-video bg-[#e2dcd2] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-[9px] tracking-[0.2em] text-[#b8903a]">MAP — 要差替え</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
