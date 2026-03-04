interface PageHeaderProps {
  en: string;
  ja: string;
}

export default function PageHeader({ en, ja }: PageHeaderProps) {
  return (
    <section className="bg-[#1c2333] py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-[10px] tracking-[0.35em] text-[#b8903a] mb-4">{en}</p>
        <h1 className="text-3xl md:text-4xl font-medium text-white tracking-wider">{ja}</h1>
        <div className="w-8 h-px bg-[#b8903a] mx-auto mt-6"></div>
      </div>
    </section>
  );
}
