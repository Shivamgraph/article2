import { Link } from "react-router-dom";
import type { Blog } from "../data/blogs";
import FeaturedImage from "./FeaturedImage";
import { cn } from "../utils/cn";
import { useEffect, useRef, useState } from "react";

interface BlogCardProps {
  blog: Blog;
  index?: number;
}

export default function BlogCard({ blog, index = 0 }: BlogCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Link
      ref={ref}
      to={`/blog/${blog.slug}`}
      className={cn(
        "card card-hover group block overflow-hidden",
        "reveal",
        inView && "in-view"
      )}
      style={{ transitionDelay: `${(index % 6) * 80}ms` }}
    >
      <FeaturedImage
        coverGradient={blog.coverGradient}
        coverImage={blog.coverImage}
        hindiKeyword={blog.hindiKeyword}
        englishKeyword={blog.englishKeyword}
        category={blog.category}
        readTime={blog.readTime}
        variant="card"
      />
      <div className="p-5 md:p-6">
        <div className="mb-3 flex items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-400/80">
            {blog.category}
          </span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span className="text-[11px] text-white/50">#{blog.number}</span>
        </div>

        <h3 className="mb-2 font-hindi text-lg font-bold leading-snug text-white transition-colors group-hover:text-amber-100 md:text-xl">
          {blog.hindiTitle}
        </h3>
        <p className="mb-1 font-display text-xs font-medium uppercase tracking-wider text-white/50">
          {blog.title}
        </p>

        <p className="mt-3 mb-5 line-clamp-3 text-sm leading-relaxed text-white/60 font-hindi">
          {blog.excerpt}
        </p>

        <div className="flex items-center justify-between border-t border-white/5 pt-4">
          <div className="flex items-center gap-2 text-xs text-white/40">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{blog.date}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-semibold gold-text transition-transform group-hover:translate-x-1">
            Read More
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
