import { useEffect, useMemo, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getBlogBySlug, getRelatedBlogs } from "../data/blogs";
import FeaturedImage from "../components/FeaturedImage";
import ShareButtons from "../components/ShareButtons";
import RelatedVideo from "../components/RelatedVideo";
import DownloadResources from "../components/DownloadResources";
import RelatedArticles from "../components/RelatedArticles";
import Newsletter from "../components/Newsletter";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const blog = slug ? getBlogBySlug(slug) : undefined;
  const [progress, setProgress] = useState(0);
  const [activeToc, setActiveToc] = useState<string>("");

  // Scroll progress
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (scrolled / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // SEO + JSON-LD
  useEffect(() => {
    if (!blog) return;
    document.title = `${blog.hindiTitle} — SHIVAMGRAPH`;
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };
    const setProp = (prop: string, content: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", prop);
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setMeta("description", blog.seoDescription);
    setProp("og:title", blog.hindiTitle);
    setProp("og:description", blog.seoDescription);
    setProp("og:type", "article");
    setProp("og:locale", "hi_IN");
    setProp("article:published_time", new Date(Date.now() - blog.number * 86400000).toISOString());

    // Twitter card
    setProp("twitter:card", "summary_large_image");
    setProp("twitter:title", blog.hindiTitle);
    setProp("twitter:description", blog.seoDescription);

    // JSON-LD structured data
    const existingLd = document.getElementById("article-jsonld");
    if (existingLd) existingLd.remove();
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = "article-jsonld";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: blog.hindiTitle,
      alternativeHeadline: blog.title,
      description: blog.seoDescription,
      datePublished: new Date(Date.now() - blog.number * 86400000).toISOString(),
      author: { "@type": "Person", name: "SHIVAMGRAPH" },
      publisher: {
        "@type": "Organization",
        name: "SHIVAMGRAPH",
        logo: { "@type": "ImageObject", url: "/logo.png" },
      },
      inLanguage: "hi",
      articleSection: blog.category,
      keywords: `${blog.category}, ${blog.hindiTitle}, SHIVAMGRAPH, Hindi blog, psychology`,
    });
    document.head.appendChild(ld);

    return () => {
      ld.remove();
      document.title = "SHIVAMGRAPH — हिंदी में गहराई से, सच्चाई से";
    };
  }, [blog]);

  // Table of contents from h2 headings
  const toc = useMemo(() => {
    if (!blog) return [] as { id: string; text: string }[];
    return blog.content
      .filter((c) => c.type === "h2" && c.text)
      .map((c, i) => ({ id: `section-${i}`, text: c.text! }));
  }, [blog]);

  // Scroll-spy for TOC active state
  useEffect(() => {
    if (!blog) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveToc(e.target.id);
        });
      },
      { rootMargin: "-30% 0% -60% 0%" }
    );
    const headings = document.querySelectorAll(".prose-custom h2");
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [blog]);

  if (!blog) return <Navigate to="/" replace />;

  const related = getRelatedBlogs(blog.relatedArticleSlugs);

  const renderContent = (content: typeof blog.content) => {
    let h2Idx = -1;
    return content.map((c, i) => {
      if (c.type === "h2") {
        h2Idx++;
        return (
          <h2 key={i} id={`section-${h2Idx}`} className="scroll-mt-24">
            {c.text}
          </h2>
        );
      }
      if (c.type === "h3") return <h3 key={i}>{c.text}</h3>;
      if (c.type === "blockquote") {
        return (
          <blockquote key={i} className="font-hindi" dangerouslySetInnerHTML={{ __html: c.text || "" }} />
        );
      }
      if (c.type === "ul" && c.items) {
        return (
          <ul key={i}>
            {c.items.map((item, j) => (
              <li key={j} className="font-hindi" dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        );
      }
      if (c.type === "p") {
        return (
          <p key={i} className={c.isHindi ? "font-hindi" : ""} dangerouslySetInnerHTML={{ __html: c.text || "" }} />
        );
      }
      return null;
    });
  };

  return (
    <div className="min-h-screen">
      {/* Reading progress bar */}
      <div
        className="fixed top-0 left-0 z-[60] h-0.5 gold-gradient transition-all"
        style={{ width: `${progress}%` }}
      />

      {/* Hero */}
      <section className="relative">
        <FeaturedImage
          coverGradient={blog.coverGradient}
          coverImage={blog.coverImage}
          hindiKeyword={blog.hindiKeyword}
          englishKeyword={blog.englishKeyword}
          category={blog.category}
          readTime={blog.readTime}
          variant="hero"
          title={blog.title}
          hindiTitle={blog.hindiTitle}
        />

        {/* Meta row */}
        <div className="mx-auto max-w-5xl px-4 pt-8 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/50 md:gap-6 md:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <svg className="h-4 w-4 text-amber-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {blog.date}
            </span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span className="inline-flex items-center gap-1.5">
              <svg className="h-4 w-4 text-amber-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {blog.readTime} min read
            </span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span className="inline-flex items-center gap-1.5 font-medium text-amber-300">
              by SHIVAMGRAPH
            </span>
          </div>
        </div>
      </section>

      {/* Article body + sidebar */}
      <section className="mx-auto mt-12 max-w-7xl px-4 md:mt-16 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px] xl:gap-16">
          {/* Main article */}
          <article>
            <div className="prose-custom max-w-none">
              {renderContent(blog.content)}
            </div>

            {/* Share buttons */}
            <div className="mt-12">
              <ShareButtons title={blog.title} hindiTitle={blog.hindiTitle} slug={blog.slug} />
            </div>

            {/* Video */}
            <div className="mt-12">
              <RelatedVideo videoId={blog.relatedVideoId} title={blog.title} />
            </div>

            {/* Downloads */}
            <div className="mt-12">
              <DownloadResources resources={blog.downloadResources} />
            </div>
          </article>

          {/* Sidebar — TOC (desktop only) */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <div className="card p-5">
                <h4 className="mb-4 font-display text-xs font-bold uppercase tracking-widest text-white/40">
                  Table of Contents
                </h4>
                <nav className="space-y-1">
                  {toc.map((t) => (
                    <a
                      key={t.id}
                      href={`#${t.id}`}
                      className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        activeToc === t.id
                          ? "bg-amber-500/10 text-amber-300"
                          : "text-white/50 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {t.text}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="card p-5">
                <div className="mb-3 text-xs font-bold uppercase tracking-widest text-amber-300/80">
                  #{blog.number} · {blog.category}
                </div>
                <p className="text-sm leading-relaxed text-white/60 font-hindi">
                  {blog.excerpt}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="mx-auto mt-24 max-w-7xl px-4 md:px-8">
          <RelatedArticles blogs={related} />
        </section>
      )}

      {/* Newsletter + back link */}
      <section className="mx-auto mt-24 max-w-7xl px-4 pb-20 md:px-8">
        <div className="mb-12 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition hover:text-amber-300">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all articles
          </Link>
        </div>
        <Newsletter />
      </section>
    </div>
  );
}
