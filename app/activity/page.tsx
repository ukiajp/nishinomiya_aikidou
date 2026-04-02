import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[10px] tracking-[0.35em] text-[#b8903a] mb-4">SCHEDULE</p>
          <h2 className="text-2xl md:text-3xl font-medium text-[#1c1c1c] tracking-wider mb-6">稽古日程</h2>
          <div className="w-8 h-px bg-[#b8903a] mx-auto mb-10"></div>
          <p className="text-[#5a5a5a] text-sm leading-loose mb-10">
            土曜・日曜の週2回、西宮市立中央体育館 武道場で稽古しています。<br />
            詳しい日程はこちらからご確認ください。
          </p>
          <Link
            href="/schedule"
            className="inline-block border border-[#1c2333] hover:bg-[#1c2333] text-[#1c1c1c] hover:text-white px-10 py-4 tracking-widest text-sm transition-colors"
          >
            稽古日程を見る
          </Link>
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
                { en: "ADDRESS", ja: "稽古場所", val: "西宮市立中央体育館 武道場（中央体育館に併設の武道館です）" },
                { en: "STATION", ja: "最寄り駅", val: "阪急西宮北口駅 徒歩約20分 / JR西宮駅 徒歩約20分" },
                { en: "PARKING", ja: "駐車場", val: "詳細はお問い合わせください" },
              ].map((item) => (
                <div key={item.en} className="py-6">
                  <p className="text-[9px] tracking-[0.2em] text-[#b8903a] mb-2">{item.en}</p>
                  <p className="text-[#1c1c1c] text-sm leading-relaxed">{item.val}</p>
                </div>
              ))}
            </div>
            <div className="relative aspect-video overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13113.099749467692!2d135.33729151560235!3d34.7486664211349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000f251b147ef67%3A0x5ad1339aad3fbee9!2z6KW_5a6u5biC56uL5Lit5aSu5L2T6IKy6aSo!5e0!3m2!1sja!2sjp!4v1775135117167!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
