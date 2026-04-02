import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "お問い合わせ | 西宮合氣道同好会",
  description: "体験稽古の申込み・見学・入会に関するお問い合わせはこちらから。",
};

type Props = { searchParams: Promise<{ date?: string; time?: string }> };

function formatDateJa(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return `${y}年${m}月${d}日`;
}

export default async function ContactPage({ searchParams }: Props) {
  const { date, time } = await searchParams;
  const hasDate = !!date && !!time;
  const defaultMessage = hasDate
    ? `${formatDateJa(date!)}（${time}）の体験稽古を希望します。`
    : "";

  return (
    <>
      <PageHeader en="CONTACT" ja="お問い合わせ" />

      <section className="bg-[#faf8f5] py-24">
        <div className="max-w-2xl mx-auto px-6">

          {/* カレンダーから来た場合のバナー */}
          {hasDate && (
            <div className="bg-[#b8903a] px-8 py-5 mb-8">
              <p className="text-[9px] tracking-[0.3em] text-white/70 mb-1">SELECTED DATE</p>
              <p className="text-white font-medium tracking-wider">
                {formatDateJa(date!)}　{time}
              </p>
            </div>
          )}

          <div className="bg-[#1c2333] px-8 py-6 mb-12">
            <p className="text-[9px] tracking-[0.3em] text-[#b8903a] mb-3">TRIAL LESSON</p>
            <p className="text-white text-sm leading-loose">
              体験稽古は無料です。「見学だけしたい」「少し話を聞きたい」という方も大歓迎です。
            </p>
          </div>

          <form
            action="https://submit-form.com/S08IfM2Zl"
            method="POST"
            className="space-y-8"
          >
            <input type="hidden" name="_redirect" value="https://nishinomiya-aikidou.vercel.app/contact/thanks" />

            {/* カレンダーで選んだ日付を隠しフィールドで送信 */}
            {hasDate && (
              <input
                type="hidden"
                name="practice_date"
                value={`${formatDateJa(date!)}（${time}）`}
              />
            )}

            {[
              { id: "name", label: "お名前", type: "text", required: true, placeholder: "山田 太郎" },
              { id: "email", label: "メールアドレス", type: "email", required: true, placeholder: "example@email.com" },
              { id: "phone", label: "電話番号", type: "tel", required: false, placeholder: "090-0000-0000" },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-[9px] tracking-[0.3em] text-[#b8903a] mb-3">
                  {field.label.toUpperCase().replace(/\s/g, "_")}
                  <span className="ml-3 normal-case text-[#5a5a5a] font-sans">
                    {field.label}
                    {field.required
                      ? <span className="text-red-400 ml-1">必須</span>
                      : <span className="text-[#5a5a5a] ml-1">任意</span>
                    }
                  </span>
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  name={field.id}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="w-full border-b border-[#e2dcd2] bg-transparent py-3 text-[#1c1c1c] text-sm placeholder:text-[#c0bbb4] focus:outline-none focus:border-[#b8903a] transition-colors"
                />
              </div>
            ))}

            <div>
              <label htmlFor="type" className="block text-[9px] tracking-[0.3em] text-[#b8903a] mb-3">
                TYPE <span className="normal-case text-[#5a5a5a] font-sans ml-3">お問い合わせの種類 <span className="text-red-400">必須</span></span>
              </label>
              <select
                id="type"
                name="type"
                required
                defaultValue={hasDate ? "trial" : ""}
                className="w-full border-b border-[#e2dcd2] bg-transparent py-3 text-[#1c1c1c] text-sm focus:outline-none focus:border-[#b8903a] transition-colors appearance-none"
              >
                <option value="">選択してください</option>
                <option value="trial">体験稽古・見学の申込み</option>
                <option value="join">入会について</option>
                <option value="other">その他</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-[9px] tracking-[0.3em] text-[#b8903a] mb-3">
                MESSAGE <span className="normal-case text-[#5a5a5a] font-sans ml-3">メッセージ <span className="text-[#5a5a5a]">任意</span></span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                defaultValue={defaultMessage}
                placeholder="ご質問・ご要望などをご記入ください"
                className="w-full border-b border-[#e2dcd2] bg-transparent py-3 text-[#1c1c1c] text-sm placeholder:text-[#c0bbb4] focus:outline-none focus:border-[#b8903a] transition-colors resize-none"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full border border-[#1c2333] hover:bg-[#1c2333] text-[#1c1c1c] hover:text-white py-4 tracking-[0.3em] text-sm transition-colors"
              >
                送信する
              </button>
              <p className="text-xs text-[#5a5a5a] text-center mt-4 tracking-wide">
                ※送信後、2〜3営業日以内にご返信いたします。
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* アクセス */}
      <section className="bg-white py-24 border-t border-[#e2dcd2]">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.35em] text-[#b8903a] mb-4">ACCESS</p>
            <h2 className="text-2xl font-medium text-[#1c1c1c] tracking-wider">稽古場所</h2>
            <div className="w-8 h-px bg-[#b8903a] mx-auto mt-6"></div>
          </div>
          <div className="divide-y divide-[#e2dcd2]">
            {[
              { en: "ADDRESS", val: "西宮市立中央体育館 武道場" },
              { en: "STATION", val: "阪急西宮北口駅 徒歩約20分 / JR西宮駅 徒歩約20分" },
              { en: "SCHEDULE", val: "土曜 13:00–15:00 / 日曜 9:00–11:00（月2〜3回）" },
            ].map((item) => (
              <div key={item.en} className="py-6 flex gap-8">
                <span className="text-[9px] tracking-[0.2em] text-[#b8903a] w-20 flex-shrink-0 mt-0.5">{item.en}</span>
                <span className="text-[#1c1c1c] text-sm leading-relaxed">{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
