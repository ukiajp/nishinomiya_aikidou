import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-[#1c2333] py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-[10px] tracking-[0.3em] text-[#b8903a] mb-6">TRIAL LESSON</p>
        <h2 className="text-2xl md:text-3xl font-medium text-white mb-6 leading-relaxed">
          まず、見学してみませんか。
        </h2>
        <p className="text-slate-400 mb-10 leading-loose">
          体験稽古は無料です。道着も最初は不要。<br className="hidden sm:block" />
          「やってみようかな」と思ったら、ぜひ一度お越しください。
        </p>
        <Link
          href="/contact"
          className="inline-block border border-[#b8903a] hover:bg-[#b8903a] text-[#d4a853] hover:text-white px-10 py-4 tracking-widest text-sm transition-colors"
        >
          無料体験を申し込む
        </Link>
      </div>
    </section>
  );
}
