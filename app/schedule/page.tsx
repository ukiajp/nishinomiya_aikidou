import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import ScheduleCalendar from "@/components/ScheduleCalendar";

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

      <CtaBanner />
    </>
  );
}
