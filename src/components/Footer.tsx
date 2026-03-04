import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1c2333] text-slate-400">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="text-[10px] tracking-[0.25em] text-[#b8903a] mb-2">NISHIMIYA AIKIDO</p>
            <h3 className="text-white text-lg font-medium tracking-wider mb-4">西宮合氣道同好会</h3>
            <p className="text-sm leading-relaxed text-slate-400">
              西宮市で合氣道を稽古する仲間たちの会です。<br />
              初心者から経験者まで、年齢・体力を問わず歓迎します。
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.25em] text-[#b8903a] mb-4">NAVIGATION</p>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/about", label: "合氣道について" },
                { href: "/activity", label: "活動紹介" },
                { href: "/posts", label: "活動報告" },
                { href: "/join", label: "入会案内" },
                { href: "/contact", label: "お問い合わせ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#d4a853] transition-colors tracking-wide">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.25em] text-[#b8903a] mb-4">TRIAL LESSON</p>
            <p className="text-sm mb-5 leading-relaxed">
              体験稽古は無料です。<br />
              まずはお気軽にご連絡ください。
            </p>
            <Link
              href="/contact"
              className="inline-block border border-[#b8903a] text-[#d4a853] hover:bg-[#b8903a] hover:text-white px-6 py-2.5 text-sm tracking-wide transition-colors"
            >
              申し込む
            </Link>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-xs text-slate-600 tracking-widest">
          © 2026 西宮合氣道同好会
        </div>
      </div>
    </footer>
  );
}
