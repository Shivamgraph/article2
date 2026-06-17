import type { Blog } from "../data/blogs";
import BlogCard from "./BlogCard";

interface RelatedArticlesProps {
  blogs: Blog[];
}

export default function RelatedArticles({ blogs }: RelatedArticlesProps) {
  if (blogs.length === 0) return null;
  return (
    <div>
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full gold-gradient">
          <svg className="h-5 w-5 text-black" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-white md:text-2xl">Related Articles</h3>
          <p className="text-sm text-white/50 font-hindi">और पढ़ो — इसी विषय से जुड़े articles</p>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((b, i) => (
          <BlogCard key={b.slug} blog={b} index={i} />
        ))}
      </div>
    </div>
  );
}
