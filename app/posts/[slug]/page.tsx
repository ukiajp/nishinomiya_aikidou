import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllPosts, getPost, formatDate } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const posts = getAllPosts();
  const meta = posts.find((p) => p.slug === slug);
  if (!meta) return {};
  return {
    title: `${meta.title} | 西宮合氣道同好会`,
    description: meta.description,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const posts = getAllPosts();
  if (!posts.find((p) => p.slug === slug)) notFound();

  const post = await getPost(slug);

  return (
    <>
      {/* ページヘッダー */}
      <section className="bg-[#1c2333] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[10px] tracking-[0.35em] text-[#b8903a] mb-4">REPORTS</p>
          <time className="text-[#5a6a7a] text-xs tracking-widest">{formatDate(post.date)}</time>
          <h1 className="text-2xl md:text-3xl font-medium text-white tracking-wider mt-3 leading-relaxed">
            {post.title}
          </h1>
          <div className="w-8 h-px bg-[#b8903a] mt-6"></div>
        </div>
      </section>

      {/* ヒーロー画像 */}
      {post.image && (
        <div className="relative aspect-[16/6] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
            quality={85}
          />
        </div>
      )}

      {/* 本文 */}
      <section className="bg-[#faf8f5] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="prose-aikido"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <div className="mt-16 pt-8 border-t border-[#e2dcd2]">
            <Link
              href="/posts"
              className="text-[9px] tracking-[0.3em] text-[#b8903a] hover:opacity-60 transition-opacity"
            >
              ← 活動報告一覧へ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
