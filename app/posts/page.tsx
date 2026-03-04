import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { getAllPosts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "活動報告 | 西宮合氣道同好会",
  description: "西宮合氣道同好会の活動報告・お知らせです。",
};

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader en="REPORTS" ja="活動報告" />

      <section className="bg-[#faf8f5] py-24 min-h-[60vh]">
        <div className="max-w-3xl mx-auto px-6">
          {posts.length === 0 ? (
            <p className="text-center text-[#5a5a5a] text-sm tracking-wide">
              現在、記事はありません。
            </p>
          ) : (
            <div className="divide-y divide-[#e2dcd2]">
              {posts.map((post) => (
                <article key={post.slug} className="py-10">
                  <Link href={`/posts/${post.slug}`} className="group block">
                    <time className="text-[9px] tracking-[0.3em] text-[#b8903a]">
                      {formatDate(post.date)}
                    </time>
                    <h2 className="text-xl font-medium text-[#1c1c1c] tracking-wider mt-3 mb-4 group-hover:opacity-60 transition-opacity">
                      {post.title}
                    </h2>
                    {post.description && (
                      <p className="text-[#5a5a5a] text-sm leading-loose">
                        {post.description}
                      </p>
                    )}
                    <span className="inline-block mt-5 text-[9px] tracking-[0.25em] text-[#b8903a] group-hover:opacity-60 transition-opacity">
                      続きを読む →
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
