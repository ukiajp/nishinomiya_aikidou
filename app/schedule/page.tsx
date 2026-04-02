import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import ScheduleCalendar from "@/components/ScheduleCalendar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "稽古日程 | 西宮合氣道同好会",
  description: "西宮合氣道同好会の稽古日程です。体験稽古はお気軽にお申し込みください。",
};

export default function SchedulePage() {
  return (
    <>
      <PageHeader en="SCHEDULE" ja="稽古日程" />

      <section className="bg-[#faf8f5] py-24">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.35em] text-[#b8903a] mb-4">PRACTICE DAYS</p>
            <h2 className="text-2xl font-medium text-[#1c1c1c] tracking-wider mb-4">
              稽古カレンダー
            </h2>
            <div className="w-8 h-px bg-[#b8903a] mx-auto mb-6"></div>
            <p className="text-[#5a5a5a] text-sm leading-loose">
              稽古日をタップすると体験申込みボタンが表示されます。<br />
              日程は変更になる場合があります。
            </p>
          </div>

          <ScheduleCalendar />

          <div className="mt-12 border-t border-[#e2dcd2] pt-8">
            <div className="divide-y divide-[#e2dcd2]">
              {[
                { en: "VENUE", val: "西宮市立中央体育館 武道場" },
                { en: "STATION", val: "阪急西宮北口駅 / JR西宮駅 各徒歩約20分" },
                { en: "TRIAL", val: "体験稽古は無料。道着不要・私服でOK" },
              ].map((item) => (
                <div key={item.en} className="py-5 flex gap-8">
                  <span className="text-[9px] tracking-[0.2em] text-[#b8903a] w-20 flex-shrink-0 mt-0.5">{item.en}</span>
                  <span className="text-[#1c1c1c] text-sm leading-relaxed">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 会場・アクセス */}
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
                { en: "ADDRESS", val: "西宮市立中央体育館 武道場（中央体育館に併設の武道館です）" },
                { en: "STATION", val: "阪急西宮北口駅 徒歩約20分 / JR西宮駅 徒歩約20分" },
                { en: "PARKING", val: "詳細はお問い合わせください" },
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
