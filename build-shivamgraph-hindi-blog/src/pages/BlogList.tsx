import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { blogs, categories } from "../data/blogs";
import BlogCard from "../components/BlogCard";
import Newsletter from "../components/Newsletter";

export default function BlogList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const activeCategory = searchParams.get("category") || "all";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [activeCategory]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((b) => {
      const matchCat = activeCategory === "all" || b.categorySlug === activeCategory;
      const q = query.toLowerCase().trim();
      const matchQ =
        !q ||
        b.title.toLowerCase().includes(q) ||
        b.hindiTitle.toLowerCase().includes(q) ||
        b.excerpt.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [activeCategory, query]);

  const setCategory = (slug: string) => {
    if (slug === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: slug });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-32 md:pt-40">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-mind.jpg"
            alt="SHIVAMGRAPH Hero"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070B14] via-[#070B14]/70 to-[#070B14]" />
        </div>
        <div className="pattern-grid absolute inset-0 opacity-30" />
        <div
          className="glow-orb"
          style={{ top: "-100px", left: "10%", width: "400px", height: "400px", background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)", opacity: 0.15 }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center md:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">
              {blogs.length} Articles · हिंदी + English
            </span>
          </div>

          <h1 className="mb-4 font-hindi text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            हिंदी में —
            <br />
            <span className="gold-text font-black">गहराई से, सच्चाई से</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-hindi text-base leading-relaxed text-white/60 md:text-lg">
            Psychology, economics, body, relationships और legacy पर raw, direct, no-BS content.
            कोई fluff नहीं, कोई self-help बकवास नहीं—सिर्फ वो सच जो तुम्हें जगा देगा।
          </p>

          {/* Search */}
          <div className="mx-auto mt-10 max-w-xl">
            <div className="relative">
              <svg className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles... (e.g. salary, dopamine, sleep)"
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-12 py-4 text-white placeholder:text-white/40 outline-none backdrop-blur-xl transition focus:border-amber-500/40 focus:ring-2 focus:ring-amber-500/10"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-white/40 transition hover:bg-white/10 hover:text-white"
                  aria-label="Clear"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 pb-8 md:px-8">
        <div className="flex flex-wrap gap-2 md:gap-3">
          {categories.map((c) => {
            const count = c.slug === "all" ? blogs.length : blogs.filter(b => b.categorySlug === c.slug).length;
            return (
              <button
                key={c.slug}
                onClick={() => setCategory(c.slug)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                  activeCategory === c.slug
                    ? "border-amber-500/40 bg-amber-500/10 text-amber-300"
                    : "border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white"
                }`}
              >
                {c.name}
                <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${activeCategory === c.slug ? "bg-amber-500/20 text-amber-200" : "bg-white/10 text-white/40"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        {filteredBlogs.length === 0 ? (
          <div className="card p-16 text-center">
            <h3 className="mb-2 font-display text-xl font-bold text-white">कोई article नहीं मिला</h3>
            <p className="text-white/50 font-hindi">Try different keywords या category change करो।</p>
          </div>
        ) : (
          <>
            <div className="mb-8 flex items-baseline justify-between">
              <p className="text-sm text-white/40">
                Showing <span className="font-semibold text-white">{filteredBlogs.length}</span> article{filteredBlogs.length !== 1 ? "s" : ""}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredBlogs.map((b, i) => (
                <BlogCard key={b.slug} blog={b} index={i} />
              ))}
            </div>
          </>
        )}
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <Newsletter />
      </section>
    </div>
  );
}
