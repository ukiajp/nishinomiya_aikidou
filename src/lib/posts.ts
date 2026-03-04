import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const postsDir = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description?: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

export function getAllPosts(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md"));

  return fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const { data } = matter(fs.readFileSync(path.join(postsDir, fileName), "utf8"));
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        description: data.description as string | undefined,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post> {
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(remarkHtml).process(content);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    description: data.description as string | undefined,
    contentHtml: processed.toString(),
  };
}

export function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split("-");
  return `${y}年${parseInt(m)}月${parseInt(d)}日`;
}
