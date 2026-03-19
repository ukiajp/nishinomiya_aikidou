"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "合氣道について" },
  { href: "/activity", label: "活動紹介" },
  { href: "/schedule", label: "稽古日程" },
  { href: "/posts", label: "活動報告" },
  { href: "/join", label: "入会案内" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-[#1c2333] text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none hover:opacity-70 transition-opacity">
          <span className="text-[10px] tracking-[0.25em] text-[#b8903a] font-light">NISHINOMIYA AIKIDO</span>
          <span className="text-base font-medium tracking-wider mt-0.5">西宮合氣道同好会</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`tracking-wide transition-colors hover:text-[#d4a853] ${
                pathname === link.href ? "text-[#d4a853]" : "text-slate-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="border border-[#b8903a] hover:bg-[#b8903a] text-[#d4a853] hover:text-white px-5 py-2 text-sm tracking-wide transition-colors"
          >
            体験稽古を申し込む
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <span className={`block w-6 h-px bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-px bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-px bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#151d2b] px-6 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-4 border-b border-slate-700 text-slate-300 hover:text-[#d4a853] tracking-wide transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-5 border border-[#b8903a] text-[#d4a853] px-5 py-3 text-center tracking-wide transition-colors hover:bg-[#b8903a] hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            体験稽古を申し込む
          </Link>
        </nav>
      )}
    </header>
  );
}
