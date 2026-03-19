"use client";

import Link from "next/link";
import { useState } from "react";
import { schedule, PracticeDay } from "@/data/schedule";

const WEEK_DAYS = ["日", "月", "火", "水", "木", "金", "土"];

function formatDateJa(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return `${y}年${m}月${d}日`;
}

export default function ScheduleCalendar() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [selected, setSelected] = useState<PracticeDay | null>(null);

  const firstDow = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const practiceMap = new Map<number, PracticeDay>(
    schedule
      .filter((p) => {
        const [y, m] = p.date.split("-").map(Number);
        return y === year && m === month;
      })
      .map((p) => [parseInt(p.date.split("-")[2]), p])
  );

  const prevMonth = () => {
    if (month === 1) { setYear((y) => y - 1); setMonth(12); }
    else setMonth((m) => m - 1);
    setSelected(null);
  };

  const nextMonth = () => {
    if (month === 12) { setYear((y) => y + 1); setMonth(1); }
    else setMonth((m) => m + 1);
    setSelected(null);
  };

  const contactUrl = selected
    ? `/contact?date=${selected.date}&time=${encodeURIComponent(selected.time)}`
    : "/contact";

  return (
    <div>
      {/* 月ナビゲーション */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={prevMonth}
          className="w-10 h-10 flex items-center justify-center border border-[#e2dcd2] hover:border-[#b8903a] text-[#5a5a5a] hover:text-[#b8903a] transition-colors"
        >
          ←
        </button>
        <h2 className="text-xl font-medium text-[#1c1c1c] tracking-wider">
          {year}年 {month}月
        </h2>
        <button
          onClick={nextMonth}
          className="w-10 h-10 flex items-center justify-center border border-[#e2dcd2] hover:border-[#b8903a] text-[#5a5a5a] hover:text-[#b8903a] transition-colors"
        >
          →
        </button>
      </div>

      {/* 曜日ヘッダー */}
      <div className="grid grid-cols-7 mb-1">
        {WEEK_DAYS.map((d, i) => (
          <div
            key={d}
            className={`text-center text-xs tracking-widest py-3 font-medium ${
              i === 0 ? "text-red-400" : i === 6 ? "text-blue-400" : "text-[#5a5a5a]"
            }`}
          >
            {d}
          </div>
        ))}
      </div>

      {/* カレンダーグリッド */}
      <div className="grid grid-cols-7 gap-px bg-[#e2dcd2]">
        {cells.map((day, i) => {
          if (!day) {
            return <div key={i} className="bg-[#faf8f5] min-h-[88px]" />;
          }

          const dow = (firstDow + day - 1) % 7;
          const practice = practiceMap.get(day);
          const isSelected = selected?.date === `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

          if (practice) {
            const [start, end] = practice.time.split("～");
            return (
              <button
                key={i}
                onClick={() => setSelected(isSelected ? null : practice)}
                className={`min-h-[88px] w-full flex flex-col items-center justify-start pt-3 pb-2 gap-1 transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-[#b8903a]"
                    : "bg-[#fff8ee] hover:bg-[#f5e8c8]"
                }`}
              >
                <span className={`text-lg font-medium leading-none ${isSelected ? "text-white" : "text-[#b8903a]"}`}>
                  {day}
                </span>
                {practice.note && (
                  <span className={`text-[10px] leading-none ${isSelected ? "text-white/80" : "text-[#5a5a5a]"}`}>
                    {practice.note}
                  </span>
                )}
                <span className={`text-[11px] leading-tight text-center px-0.5 mt-0.5 ${isSelected ? "text-white/90" : "text-[#b8903a]"}`}>
                  {start}
                </span>
                <span className={`text-[11px] leading-tight text-center px-0.5 ${isSelected ? "text-white/90" : "text-[#b8903a]"}`}>
                  ～{end}
                </span>
              </button>
            );
          }

          return (
            <div
              key={i}
              className="bg-white min-h-[88px] flex items-start justify-center pt-3"
            >
              <span className={`text-lg ${
                dow === 0 ? "text-red-300" : dow === 6 ? "text-blue-300" : "text-[#c0bbb4]"
              }`}>
                {day}
              </span>
            </div>
          );
        })}
      </div>

      {/* 凡例 */}
      <div className="flex items-center gap-3 mt-4">
        <div className="w-4 h-4 bg-[#fff8ee] border border-[#e2dcd2]" />
        <span className="text-[10px] tracking-wide text-[#5a5a5a]">稽古あり（タップで詳細）</span>
      </div>

      {/* 選択した日の詳細 */}
      {selected && (
        <div className="mt-6 border border-[#b8903a] bg-[#fff8ee] p-6">
          <p className="text-[9px] tracking-[0.3em] text-[#b8903a] mb-2">SELECTED</p>
          <p className="text-[#1c1c1c] font-medium tracking-wider mb-1">
            {formatDateJa(selected.date)}
            {selected.note && <span className="text-xs text-[#5a5a5a] ml-2">（{selected.note}）</span>}
          </p>
          <p className="text-[#5a5a5a] text-sm mb-5">{selected.time}</p>
          <Link
            href={contactUrl}
            className="inline-block border border-[#b8903a] bg-[#b8903a] text-white hover:bg-[#9a7830] px-8 py-3 text-xs tracking-[0.2em] transition-colors"
          >
            この日の体験稽古を申し込む →
          </Link>
        </div>
      )}
    </div>
  );
}
