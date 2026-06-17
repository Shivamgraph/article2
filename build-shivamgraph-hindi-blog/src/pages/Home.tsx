import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import { blogs } from "../data/blogs";

// ============= HERO SECTION =============
function HeroSection() {
  const keywords = ["MIND", "MONEY", "DISCIPLINE", "HEALTH", "LEARNING", "PURPOSE", "FREEDOM", "LEGACY"];
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-28 pb-16 md:pt-40 md:pb-24">
      {/* Ambient orbs */}
      <div className="orb" style={{ top: "-10%", left: "-10%", width: "600px", height: "600px", background: "radial-gradient(circle, #FFB800 0%, transparent 60%)", opacity: 0.15 }} />
      <div className="orb" style={{ bottom: "-20%", right: "-10%", width: "700px", height: "700px", background: "radial-gradient(circle, #d97706 0%, transparent 60%)", opacity: 0.12 }} />
      <div className="pattern-grid absolute inset-0 opacity-40" />

      {/* Animated particles (CSS only) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#FFB800]/60"
            initial={{
              x: `${Math.random() * 100}%`,
              y: "100%",
              opacity: 0,
            }}
            animate={{
              y: "-10%",
              opacity: [0, 1, 1, 0],
              x: `${Math.random() * 100}%`,
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 12,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating keywords */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {keywords.map((k, i) => {
          const angle = (i / keywords.length) * Math.PI * 2;
          const r = 280;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r * 0.55;
          return (
            <motion.div
              key={k}
              className="absolute left-1/2 top-1/2 font-display text-[11px] font-bold tracking-[0.3em] text-white/25"
              style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
            >
              {k}
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#FFB800]/25 bg-[#FFB800]/5 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#FFB800]" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FFB800]">
            The Operating System For A Better Life
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-hindi text-4xl font-black leading-[1.08] text-white md:text-6xl lg:text-7xl"
          style={{ transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)` }}
        >
          System Ne Tumhe <br className="hidden md:block" />
          <span className="text-gold-gradient">Program Kiya Hai.</span>
          <br />
          Ab <span className="italic text-[#FFB800]" style={{ fontFamily: "Space Grotesk" }}>Reprogram</span> Karo.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg"
        >
          {blogs.length} deep articles on psychology, money, health, learning, discipline, and purpose — structured as a step-by-step life transformation roadmap.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link to="/blog" className="btn-gold">
            Start The Journey
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <a href="#roadmap" className="btn-ghost">
            Explore Roadmap
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/5 pt-10"
        >
          {[
            { n: blogs.length, l: "Articles" },
            { n: "5", l: "Life Phases" },
            { n: "1", l: "Mission" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl font-black text-white md:text-5xl">
                <span className="text-gold-gradient">{s.n}</span>
              </div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 md:text-xs">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <div className="h-2 w-1 rounded-full bg-[#FFB800]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ============= ROADMAP SECTION =============
const phases = [
  { num: "01", title: "Brutal Economics", hindi: "अर्थशास्त्र का काला सच", desc: "पैसे, salary, EMI, assets, liabilities, financial freedom का कड़वा सच।", color: "from-amber-500 to-orange-600" },
  { num: "02", title: "Relationship Reality", hindi: "रिश्तों की सच्चाई", desc: "Toxic लोग, boundaries, attachment, loneliness, family dynamics।", color: "from-pink-500 to-rose-600" },
  { num: "03", title: "Body As System", hindi: "शरीर एक प्रणाली", desc: "Hormones, sleep, protein, strength, mobility, recovery।", color: "from-emerald-500 to-teal-600" },
  { num: "04", title: "Learning System", hindi: "सीखने की प्रणाली", desc: "Meta-skill, memory, mental models, first principles, skill stacking।", color: "from-sky-500 to-blue-600" },
  { num: "05", title: "Legacy & Meaning", hindi: "विरासत और अर्थ", desc: "Purpose, suffering, gratitude, forgiveness, death awareness।", color: "from-violet-500 to-purple-600" },
];

function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="chip mb-5">The Roadmap</span>
          <h2 className="font-display text-3xl font-black tracking-tight text-white md:text-5xl">
            Five Phases. <span className="text-gold-gradient">One Transformation.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/60">
            Articles are sequenced to take you from financial and mental slavery, through body and mind, to a life of meaning and legacy.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {phases.map((p, i) => {
            const count = blogs.filter(b => b.categorySlug === ["economics","relationships","body","learning","legacy"][i]).length;
            return (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link to={`/blog?category=${["economics","relationships","body","learning","legacy"][i]}`} className="group relative block h-full">
                  <div className="glass glass-hover relative h-full overflow-hidden p-6">
                    {/* Accent gradient */}
                    <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${p.color} opacity-10 blur-3xl transition-opacity group-hover:opacity-25`} />

                    <div className="relative z-10">
                      <div className={`mb-4 font-display text-5xl font-black leading-none text-gold-gradient bg-gradient-to-br ${p.color} bg-clip-text text-transparent`}>
                        {p.num}
                      </div>
                      <div className="mb-1 font-display text-sm font-bold uppercase tracking-[0.15em] text-white/40">
                        Phase {p.num}
                      </div>
                      <h3 className="mb-1 font-display text-xl font-bold text-white">{p.title}</h3>
                      <p className="mb-4 font-hindi text-xs text-[#FFB800]/80">{p.hindi}</p>
                      <p className="mb-6 text-sm leading-relaxed text-white/50">
                        {p.desc}
                      </p>

                      {/* Progress */}
                      <div className="mb-4">
                        <div className="mb-1.5 flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-white/40">
                          <span>{count} articles</span>
                          <span className="text-[#FFB800]">Live</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                          <div className={`h-full bg-gradient-to-r ${p.color}`} style={{ width: "100%" }} />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm font-semibold text-[#FFB800] transition-transform group-hover:translate-x-1">
                        Explore Phase
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============= FEATURED ARTICLES =============
function FeaturedSection() {
  const featuredSlugs = [
    "financial-literacy-system",
    "middle-class-trap",
    "male-loneliness-crisis",
    "sleep-gym-se-badhiya",
    "purpose-kaise-milega",
  ];
  const featured = featuredSlugs.map(s => blogs.find(b => b.slug === s)).filter(Boolean).slice(0, 5);

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <span className="chip mb-4">⭐ Editor's Pick</span>
            <h2 className="font-display text-3xl font-black text-white md:text-5xl">Featured Articles</h2>
            <p className="mt-3 text-white/50">Hand-picked pieces that shift how you see the world.</p>
          </div>
          <Link to="/blog" className="hidden items-center gap-2 text-sm font-semibold text-[#FFB800] hover:text-[#fde68a] md:inline-flex">
            View All
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {featured.map((b, i) => b && (
            <motion.div
              key={b.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
            >
              <Link to={`/blog/${b.slug}`} className="block h-full">
                <div className="glass glass-hover relative h-full overflow-hidden">
                  <div className={`relative ${i === 0 ? "aspect-[16/10]" : "aspect-[3/4]"}`}>
                    <img src={b.coverImage} alt={b.hindiTitle} className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/50 to-transparent" />
                    <div className="pattern-grid absolute inset-0 opacity-30" />

                    {/* Category chip */}
                    <div className="absolute left-4 top-4"><span className="chip">{b.category}</span></div>

                    {/* Save button */}
                    <button
                      onClick={(e) => e.preventDefault()}
                      className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/70 backdrop-blur-md transition hover:border-[#FFB800]/40 hover:text-[#FFB800]"
                      aria-label="Save"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                    </button>

                    {/* Bottom content */}
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                      <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-white/50">
                        <span className="inline-flex items-center gap-1">
                          <svg className="h-3 w-3 text-[#FFB800]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                          {b.readTime} min
                        </span>
                        <span>·</span>
                        <span>{Math.floor(Math.random() * 50 + 10)}k views</span>
                      </div>
                      {i === 0 ? (
                        <>
                          <h3 className="mb-1 font-hindi text-2xl font-bold leading-tight text-white md:text-3xl">{b.hindiTitle}</h3>
                          <p className="font-display text-sm text-white/60">{b.title}</p>
                        </>
                      ) : (
                        <>
                          <h3 className="font-hindi text-base font-bold leading-tight text-white md:text-lg line-clamp-2">{b.hindiTitle}</h3>
                          <p className="mt-1 font-display text-[11px] text-white/50 line-clamp-1">{b.title}</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============= KNOWLEDGE EXPLORER =============
function ExplorerSection() {
  const [q, setQ] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  const explorerCats = [
    { slug: "all", name: "All", icon: "✦" },
    { slug: "psychology", name: "Psychology", icon: "🧠" },
    { slug: "money", name: "Money", icon: "💰" },
    { slug: "health", name: "Health", icon: "💪" },
    { slug: "learning", name: "Learning", icon: "📚" },
    { slug: "relationships", name: "Relationships", icon: "❤️" },
    { slug: "purpose", name: "Purpose", icon: "✨" },
  ];
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <div className="relative mx-auto max-w-5xl px-4 text-center md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="chip mb-5">Knowledge Explorer</span>
          <h2 className="font-display text-3xl font-black text-white md:text-5xl">
            Search Any <span className="text-gold-gradient">Truth</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">Find the exact answer you need — across {blogs.length} articles.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto mt-10 max-w-2xl"
        >
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#FFB800]/60 to-transparent" />
          <div className="glass flex items-center gap-3 rounded-2xl p-2">
            <svg className="ml-3 h-5 w-5 text-white/40" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search any truth... (e.g. dopamine, salary, sleep)"
              className="flex-1 bg-transparent py-3 text-white placeholder:text-white/40 outline-none"
            />
            <kbd className="mr-2 hidden rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-white/40 md:inline-block">⌘K</kbd>
          </div>
        </motion.div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {explorerCats.map((c) => (
            <button
              key={c.slug}
              onClick={() => setActiveCat(c.slug)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                activeCat === c.slug
                  ? "border-[#FFB800]/40 bg-[#FFB800]/10 text-[#FFB800]"
                  : "border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white"
              }`}
            >
              <span>{c.icon}</span>
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============= LIFE OS WHEEL =============
const wheelCats = [
  { key: "mind", name: "Mind", hindi: "मन", color: "#a78bfa", icon: "🧠", slugs: ["dopamine-detox", "monkey-mind", "curiosity-wapas-lao"] },
  { key: "body", name: "Body", hindi: "शरीर", color: "#34d399", icon: "💪", slugs: ["sleep-gym-se-badhiya", "sugar-addiction", "testosterone-crisis"] },
  { key: "money", name: "Money", hindi: "धन", color: "#fbbf24", icon: "💰", slugs: ["middle-class-trap", "financial-literacy-system", "assets-vs-liabilities"] },
  { key: "relationships", name: "Relations", hindi: "रिश्ते", color: "#fb7185", icon: "❤️", slugs: ["rishte-transactional", "toxic-logon-ko-pehchano", "boundaries-set-karna"] },
  { key: "learning", name: "Learn", hindi: "सीख", color: "#38bdf8", icon: "📚", slugs: ["rote-learning-ne-socha", "feynman-technique", "learn-how-to-learn"] },
  { key: "purpose", name: "Purpose", hindi: "उद्देश्य", color: "#fb923c", icon: "✨", slugs: ["purpose-kaise-milega", "death-defines-life", "suffering-viktor-frankl"] },
];

function LifeOSWheel() {
  const [active, setActive] = useState(wheelCats[0].key);
  const activeData = wheelCats.find(c => c.key === active)!;
  const relatedBlogs = activeData.slugs.map(s => blogs.find(b => b.slug === s)).filter(Boolean);

  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-16 text-center">
          <span className="chip mb-5">Life Operating System</span>
          <h2 className="font-display text-3xl font-black text-white md:text-5xl">
            Six Pillars. <span className="text-gold-gradient">One Complete Human.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">Click any pillar to explore — everything is connected.</p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          {/* Wheel */}
          <div className="relative mx-auto aspect-square w-full max-w-[480px]">
            <svg viewBox="0 0 400 400" className="h-full w-full">
              <defs>
                <radialGradient id="wheel-bg" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#FFB800" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#070B14" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="180" fill="url(#wheel-bg)" />
              <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              <circle cx="200" cy="200" r="110" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              <circle cx="200" cy="200" r="60" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              <circle cx="200" cy="200" r="25" fill="#FFB800" />
              <text x="200" y="196" textAnchor="middle" fill="#070B14" fontSize="11" fontWeight="900" fontFamily="Space Grotesk">OS</text>
              <text x="200" y="212" textAnchor="middle" fill="#070B14" fontSize="8" fontWeight="700" fontFamily="Space Grotesk" letterSpacing="1">LIFE</text>

              {wheelCats.map((c, i) => {
                const angle = (i / wheelCats.length) * Math.PI * 2 - Math.PI / 2;
                const x = 200 + Math.cos(angle) * 145;
                const y = 200 + Math.sin(angle) * 145;
                const isActive = active === c.key;
                return (
                  <g key={c.key} onClick={() => setActive(c.key)} style={{ cursor: "pointer" }}>
                    <line x1={200 + Math.cos(angle) * 60} y1={200 + Math.sin(angle) * 60} x2={200 + Math.cos(angle) * 180} y2={200 + Math.sin(angle) * 180} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                    <circle cx={x} cy={y} r={isActive ? 40 : 34} fill={c.color} fillOpacity={isActive ? 0.25 : 0.08} stroke={c.color} strokeWidth={isActive ? 2 : 1} strokeOpacity={isActive ? 0.8 : 0.3} style={{ transition: "all 0.3s" }} />
                    <text x={x} y={y - 2} textAnchor="middle" fontSize="18" dominantBaseline="middle">{c.icon}</text>
                    <text x={x} y={y + 16} textAnchor="middle" fill={isActive ? c.color : "rgba(255,255,255,0.5)"} fontSize={isActive ? "11" : "9"} fontWeight="700" fontFamily="Space Grotesk" letterSpacing="1" style={{ textTransform: "uppercase" }}>{c.name}</text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="glass p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl" style={{ background: `${activeData.color}20`, border: `1px solid ${activeData.color}50` }}>
                  {activeData.icon}
                </div>
                <div>
                  <div className="font-display text-2xl font-black text-white">{activeData.name}</div>
                  <div className="font-hindi text-[#FFB800]">{activeData.hindi}</div>
                </div>
              </div>
              <p className="mb-6 text-white/60">
                यह pillar तुम्हारी ज़िंदगी का अभिन्न हिस्सा है। इसमें कमजोर होने का मतलब पूरी system में imbalance पैदा होना।
              </p>
              <div className="space-y-2">
                {relatedBlogs.map(b => b && (
                  <Link key={b.slug} to={`/blog/${b.slug}`} className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition hover:border-[#FFB800]/30 hover:bg-[#FFB800]/5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFB800]/10 text-[#FFB800]">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate font-hindi text-sm font-semibold text-white group-hover:text-[#FFB800]">{b.hindiTitle}</div>
                      <div className="truncate text-xs text-white/40">{b.title}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// ============= LATEST ARTICLES =============
function LatestSection() {
  const latest = [...blogs].sort((a,b) => a.number - b.number).slice(0, 6);
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="chip mb-4">Fresh Drops</span>
            <h2 className="font-display text-3xl font-black text-white md:text-4xl">Latest Articles</h2>
          </div>
          <Link to="/blog" className="hidden text-sm font-semibold text-[#FFB800] md:inline-flex">All →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((b, i) => (
            <motion.div
              key={b.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link to={`/blog/${b.slug}`} className="group block">
                <div className="glass glass-hover overflow-hidden">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={b.coverImage} alt={b.hindiTitle} className="h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] to-transparent" />
                    <div className="absolute left-3 top-3"><span className="chip">{b.category}</span></div>
                  </div>
                  <div className="p-5">
                    <div className="mb-2 flex items-center gap-3 text-[11px] text-white/40">
                      <span>{b.date}</span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1">
                        <svg className="h-3 w-3 text-[#FFB800]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
                        {b.readTime} min
                      </span>
                    </div>
                    <h3 className="font-hindi text-lg font-bold leading-snug text-white group-hover:text-[#fde68a]">{b.hindiTitle}</h3>
                    <p className="mt-1 text-sm text-white/40 line-clamp-2 font-hindi">{b.excerpt}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============= MOST READ =============
function MostReadSection() {
  const tabs = [
    { label: "🔥 Most Read", blogs: blogs.slice(0, 5) },
    { label: "🔁 Most Shared", blogs: blogs.slice(5, 10) },
    { label: "⭐ Most Saved", blogs: blogs.slice(10, 15) },
  ];
  const [idx, setIdx] = useState(0);
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="mb-10 text-center">
          <span className="chip mb-4">Hall of Fame</span>
          <h2 className="font-display text-3xl font-black text-white md:text-4xl">Most Impactful</h2>
        </div>
        <div className="mb-8 flex justify-center gap-2">
          {tabs.map((t, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
                idx === i ? "border-[#FFB800]/40 bg-[#FFB800]/10 text-[#FFB800]" : "border-white/10 text-white/50 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="glass divide-y divide-white/5 overflow-hidden rounded-2xl">
          {tabs[idx].blogs.map((b, i) => (
            <motion.div
              key={b.slug + i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <Link to={`/blog/${b.slug}`} className="group flex items-center gap-4 p-5 transition hover:bg-[#FFB800]/5 md:gap-6 md:p-6">
                <div className="font-display text-3xl font-black text-white/10 transition-colors group-hover:text-[#FFB800] md:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="mb-1">
                    <span className="chip !py-0.5 !text-[9px]">{b.category}</span>
                  </div>
                  <h3 className="font-hindi text-base font-bold text-white group-hover:text-[#fde68a] md:text-lg">{b.hindiTitle}</h3>
                  <p className="mt-1 hidden text-sm text-white/40 line-clamp-1 font-hindi md:block">{b.excerpt}</p>
                </div>
                <div className="hidden shrink-0 text-right md:block">
                  <div className="text-xs text-white/40">{b.readTime} min read</div>
                  <div className="text-xs text-[#FFB800]/60">{Math.floor(Math.random() * 80 + 20)}k views</div>
                </div>
                <svg className="h-5 w-5 shrink-0 text-white/20 transition group-hover:translate-x-1 group-hover:text-[#FFB800]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============= LEARNING PATHS =============
function PathsSection() {
  const paths = [
    { title: "Student Path", hindi: "विद्यार्थी", color: "from-sky-500 to-blue-600", icon: "🎓", desc: "अभी पढ़ाई कर रहे हो? Focus, learning, career की शुरुआत।", count: 12 },
    { title: "Job Holder Path", hindi: "नौकरीपेशा", color: "from-amber-500 to-orange-600", icon: "💼", desc: "9-5 के चक्रव्यूह से निकलकर financial freedom तक।", count: 18 },
    { title: "Creator Path", hindi: "क्रिएटर", color: "from-pink-500 to-rose-600", icon: "🎥", desc: "Personal brand, audience, creative business और reach।", count: 14 },
    { title: "Entrepreneur Path", hindi: "उद्यमी", color: "from-emerald-500 to-teal-600", icon: "🚀", desc: "Business building, leverage, systems और wealth creation।", count: 16 },
  ];
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <span className="chip mb-4">Curated For You</span>
          <h2 className="font-display text-3xl font-black text-white md:text-4xl">Learning Paths</h2>
          <p className="mt-3 text-white/50">अपनी current stage के हिसाब से sequenced articles पढ़ो।</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {paths.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="glass glass-hover group relative h-full cursor-pointer overflow-hidden p-6">
                <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${p.color} opacity-10 blur-3xl transition-opacity group-hover:opacity-25`} />
                <div className="relative z-10">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-3xl">{p.icon}</div>
                  <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                  <p className="font-hindi text-xs text-[#FFB800]/80">{p.hindi}</p>
                  <p className="mt-3 mb-5 text-sm leading-relaxed text-white/50">{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white/40">{p.count} articles</span>
                    <span className="text-sm font-semibold text-[#FFB800] transition-transform group-hover:translate-x-1">Start →</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============= PROGRESS TRACKER =============
function ProgressSection() {
  const [read] = useState(7); // demo state
  const total = blogs.length;
  const pct = Math.round((read / total) * 100);
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="glass relative overflow-hidden p-8 md:p-14">
          <div className="orb" style={{ top: "-100px", right: "-50px", width: "400px", height: "400px", background: "radial-gradient(circle, #FFB800 0%, transparent 70%)", opacity: 0.15 }} />
          <div className="pattern-grid absolute inset-0 opacity-20" />

          <div className="relative z-10 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <span className="chip mb-4">Your Progress</span>
              <h2 className="font-display text-3xl font-black text-white md:text-4xl">Track Your <span className="text-gold-gradient">Transformation</span></h2>
              <p className="mt-3 max-w-lg text-white/60">Local progress tracking — see how far you've come, what's next, and stay accountable.</p>

              <div className="mt-8 space-y-4">
                <div>
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className="text-sm font-medium text-white/60">Completion</span>
                    <span className="font-display text-2xl font-black text-[#FFB800]">{pct}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                      className="h-full bg-gold-gradient"
                    />
                  </div>
                </div>
              </div>
              <button className="btn-gold mt-8">
                Continue Reading
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Total Articles", value: total, icon: "📚" },
                { label: "Read", value: read, icon: "✅" },
                { label: "Remaining", value: total - read, icon: "⏳" },
                { label: "Phases Done", value: "0/5", icon: "🏁" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-white/5 bg-white/[0.02] p-5 text-center">
                  <div className="mb-1 text-2xl">{s.icon}</div>
                  <div className="font-display text-2xl font-black text-white">{s.value}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-white/40">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============= QUOTE WALL =============
const quotes = [
  { en: "Distraction is the tax you pay for living without purpose.", hi: "व्याकुलता उस जीवन का कर है जिसका कोई उद्देश्य नहीं।" },
  { en: "Most people don't need motivation. They need awareness.", hi: "ज़्यादातर लोगों को motivation नहीं—awareness चाहिए।" },
  { en: "Comfort is the most expensive currency. You pay with your potential.", hi: "आराम सबसे महंगी currency है। तुम अपनी potential से चुकाते हो।" },
  { en: "Your mind will be used. Either by you or by the algorithm.", hi: "तुम्हारा दिमाग use होगा—या तो तुम करोगे या algorithm।" },
  { en: "Discipline is the highest form of self-love.", hi: "अनुशासन आत्म-प्रेम का सबसे ऊँचा रूप है।" },
];
function QuoteWall() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % quotes.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative py-20 md:py-32">
      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
        <span className="chip mb-8">SHIVAMGRAPH Says</span>
        <div className="relative min-h-[240px] md:min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <svg className="mx-auto mb-6 h-10 w-10 text-[#FFB800]/30" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              <p className="mb-4 font-display text-2xl font-medium italic leading-relaxed text-white md:text-4xl">
                "{quotes[idx].en}"
              </p>
              <p className="font-hindi text-lg text-[#FFB800] md:text-xl">— {quotes[idx].hi}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-[#FFB800]" : "w-1.5 bg-white/20"}`}
              aria-label={`Quote ${i+1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============= MANIFESTO =============
function ManifestoSection() {
  const statements = [
    "We question systems.",
    "We challenge comfort.",
    "We seek truth.",
    "We build discipline.",
    "We create awareness.",
    "We leave a legacy.",
  ];
  const hindi = [
    "हम व्यवस्थाओं से सवाल करते हैं।",
    "हम आराम को चुनौती देते हैं।",
    "हम सच की खोज करते हैं।",
    "हम अनुशासन बनाते हैं।",
    "हम जागरूकता फैलाते हैं।",
    "हम विरासत छोड़ते हैं।",
  ];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section ref={ref} className="relative py-20 md:py-36 overflow-hidden">
      <div className="orb" style={{ top: "20%", left: "-5%", width: "400px", height: "400px", background: "radial-gradient(circle, #FFB800 0%, transparent 70%)", opacity: 0.08 }} />

      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="mb-14 text-center">
          <span className="chip mb-5">The Manifesto</span>
          <h2 className="font-display text-3xl font-black text-white md:text-5xl">
            What We <span className="text-gold-gradient">Stand For</span>
          </h2>
        </div>
        <div className="space-y-8 md:space-y-12">
          {statements.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="group"
            >
              <div className={`text-center md:text-left ${i % 2 === 0 ? "md:ml-0" : "md:ml-auto md:text-right"} max-w-3xl`}>
                <div className="mb-2 font-display text-[11px] font-bold uppercase tracking-[0.3em] text-[#FFB800]/50">
                  {String(i + 1).padStart(2, "0")} / 06
                </div>
                <h3 className="font-display text-2xl font-black leading-tight text-white transition-colors group-hover:text-[#fde68a] md:text-4xl lg:text-5xl">
                  {s}
                </h3>
                <p className="mt-2 font-hindi text-sm text-white/50 md:text-lg">{hindi[i]}</p>
              </div>
              {i < statements.length - 1 && (
                <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent md:mx-0" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============= RESOURCE HUB =============
function ResourcesSection() {
  const resources = [
    { title: "Deep Work PDF", type: "PDF", icon: "📄", color: "from-red-500 to-rose-600" },
    { title: "Habit Tracker", type: "Worksheet", icon: "📊", color: "from-emerald-500 to-teal-600" },
    { title: "Morning Routine Template", type: "Template", icon: "🌅", color: "from-amber-500 to-orange-600" },
    { title: "Money Planner", type: "Tracker", icon: "💰", color: "from-yellow-500 to-amber-600" },
    { title: "Goal Setting Guide", type: "Guide", icon: "🎯", color: "from-sky-500 to-blue-600" },
    { title: "Reflection Journal", type: "Workbook", icon: "📓", color: "from-violet-500 to-purple-600" },
  ];
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <span className="chip mb-4">Resource Hub</span>
          <h2 className="font-display text-3xl font-black text-white md:text-4xl">Tools That <span className="text-gold-gradient">Do The Work</span></h2>
          <p className="mt-3 text-white/50">Premium PDFs, worksheets, trackers, and templates.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass glass-hover group flex items-center gap-4 p-5 cursor-pointer"
            >
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${r.color} bg-opacity-10 text-2xl shadow-lg`}>
                {r.icon}
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="truncate font-semibold text-white">{r.title}</h4>
                <div className="text-[10px] font-bold uppercase tracking-wider text-white/40">{r.type} Resource</div>
              </div>
              <button className="btn-ghost !py-2 !px-3 !text-xs">Get →</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============= NEWSLETTER =============
function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section id="newsletter" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass relative overflow-hidden p-8 text-center md:p-16"
        >
          <div className="orb animate-pulse-glow" style={{ top: "-100px", left: "50%", transform: "translateX(-50%)", width: "500px", height: "500px", background: "radial-gradient(circle, #FFB800 0%, transparent 70%)", opacity: 0.12 }} />
          <div className="pattern-grid absolute inset-0 opacity-20" />
          <div className="relative z-10">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-gradient shadow-2xl shadow-[#FFB800]/30">
              <svg className="h-7 w-7 text-[#070B14]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h2 className="font-display text-3xl font-black text-white md:text-5xl">The Weekly Wake-Up</h2>
            <p className="mx-auto mt-4 max-w-md text-white/60">One powerful insight every week. Zero spam. Zero fluff. Just the truth.</p>
            {done ? (
              <div className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-6 py-3 text-emerald-300">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                You're in. Check your inbox.
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="flex-1 rounded-xl border border-white/10 bg-black/40 px-5 py-3.5 text-white placeholder:text-white/40 outline-none focus:border-[#FFB800]/50"
                />
                <button type="submit" className="btn-gold justify-center">Subscribe</button>
              </form>
            )}
            <p className="mt-4 text-xs text-white/40">Join 25,000+ readers waking up every Sunday.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============= COMMUNITY COMING SOON =============
function CommunitySection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass relative overflow-hidden p-8 md:p-14"
        >
          <div className="orb" style={{ bottom: "-100px", left: "-50px", width: "400px", height: "400px", background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)", opacity: 0.15 }} />

          <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-violet-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                Coming Soon
              </span>
              <h2 className="font-display text-3xl font-black text-white md:text-4xl">Join The <span className="text-gold-gradient">Community</span></h2>
              <p className="mt-3 max-w-lg text-white/60">
                Discussions, weekly challenges, accountability groups, member profiles — a dedicated space for people on the same path.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:max-w-md">
                {["Discussions", "Challenges", "Accountability", "Member Profiles"].map(f => (
                  <div key={f} className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-sm text-white/70">
                    <svg className="h-4 w-4 text-[#FFB800]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <button className="btn-ghost whitespace-nowrap self-start md:self-center">
              Join Waitlist
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============= HOME FOOTER (custom) =============
function HomeFooter() {
  return (
    <footer className="relative mt-12 border-t border-white/5 bg-black/40 pt-16">
      <div className="mx-auto max-w-7xl px-4 pb-10 md:px-8">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-gradient">
                <span className="font-display text-sm font-black text-[#070B14]">SG</span>
              </div>
              <div>
                <div className="font-display text-lg font-black text-white">SHIVAMGRAPH</div>
                <div className="font-hindi text-[11px] text-white/50">The Operating System For A Better Life</div>
              </div>
            </div>
            <p className="max-w-sm font-hindi text-sm leading-relaxed text-white/50">
              {blogs.length} articles. One mission. Upgrade your mind — in Hindi.
            </p>
            <div className="mt-6 flex gap-3">
              {["YT", "IG", "X"].map(s => (
                <a key={s} href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold text-white/60 transition hover:border-[#FFB800]/40 hover:text-[#FFB800]">
                  {s}
                </a>
              ))}
            </div>
          </div>
          {[
            { heading: "Explore", links: ["All Articles", "Roadmap", "Learning Paths", "Resources"] },
            { heading: "Phases", links: ["Economics", "Relationships", "Body", "Learning", "Legacy"] },
            { heading: "Platform", links: ["About", "Newsletter", "Community", "Contact"] },
          ].map(col => (
            <div key={col.heading}>
              <h4 className="mb-4 font-display text-xs font-bold uppercase tracking-widest text-white">{col.heading}</h4>
              <ul className="space-y-2 text-sm">
                {col.links.map(l => (
                  <li key={l}><a href="#" className="text-white/50 transition hover:text-[#FFB800]">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 md:flex-row">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} SHIVAMGRAPH. All rights reserved.</p>
          <p className="text-xs text-white/40 font-hindi">गहराई से, सच्चाई से — Made in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}

// ============= MAIN HOME =============
export default function Home() {
  const { scrollYProgress } = useScroll();
  const topOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <div className="relative">
      {/* Top ambient gradient */}
      <motion.div style={{ opacity: topOpacity }} className="pointer-events-none fixed top-0 left-0 right-0 z-0 h-[600px]">
        <div className="orb" style={{ top: "-200px", left: "50%", transform: "translateX(-50%)", width: "800px", height: "800px", background: "radial-gradient(circle, #FFB800 0%, transparent 70%)", opacity: 0.08 }} />
      </motion.div>

      <HeroSection />
      <RoadmapSection />
      <FeaturedSection />
      <ExplorerSection />
      <LifeOSWheel />
      <LatestSection />
      <MostReadSection />
      <PathsSection />
      <ProgressSection />
      <QuoteWall />
      <ManifestoSection />
      <ResourcesSection />
      <NewsletterSection />
      <CommunitySection />
      <HomeFooter />
    </div>
  );
}
