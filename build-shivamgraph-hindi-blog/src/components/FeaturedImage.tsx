import { cn } from "../utils/cn";

interface FeaturedImageProps {
  coverGradient: string;
  coverImage?: string;
  hindiKeyword: string;
  englishKeyword: string;
  category: string;
  readTime: number;
  variant?: "card" | "hero";
  title?: string;
  hindiTitle?: string;
}

export default function FeaturedImage({
  coverGradient,
  coverImage,
  hindiKeyword,
  englishKeyword,
  category,
  readTime,
  variant = "card",
  title,
  hindiTitle,
}: FeaturedImageProps) {
  const isHero = variant === "hero";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        isHero ? "aspect-[21/9] md:aspect-[2.3/1] min-h-[320px] md:min-h-[480px]" : "aspect-[16/10] rounded-t-2xl"
      )}
      style={{ background: coverGradient }}
    >
      {/* AI Generated Cover Image */}
      {coverImage && (
        <img
          src={coverImage}
          alt={hindiKeyword}
          className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-luminosity"
          loading="lazy"
        />
      )}

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/30" />

      {/* Grid pattern */}
      <div className="pattern-grid absolute inset-0 opacity-50" />

      {/* Gold glow orbs */}
      <div
        className="glow-orb"
        style={{
          top: "-100px",
          right: "-50px",
          width: isHero ? "500px" : "250px",
          height: isHero ? "500px" : "250px",
          background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)",
        }}
      />
      <div
        className="glow-orb"
        style={{
          bottom: "-80px",
          left: "-30px",
          width: isHero ? "300px" : "150px",
          height: isHero ? "300px" : "150px",
          background: "radial-gradient(circle, #d97706 0%, transparent 70%)",
          opacity: 0.2,
        }}
      />

      {/* Category chip top-left */}
      <div className={cn("absolute left-4 top-4 md:left-6 md:top-6", isHero && "left-6 top-6 md:left-10 md:top-10")}>
        <span className="chip">{category}</span>
      </div>

      {/* Center typography */}
      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center px-6 text-center",
          isHero ? "gap-3 md:gap-5" : "gap-1 md:gap-2"
        )}
      >
        <span
          className={cn(
            "font-hindi font-bold leading-none text-white/90 drop-shadow-2xl",
            isHero ? "text-6xl md:text-[9rem] tracking-tight" : "text-4xl md:text-6xl"
          )}
        >
          {hindiKeyword}
        </span>
        <span
          className={cn(
            "font-display font-black uppercase tracking-[0.2em] gold-text",
            isHero ? "text-sm md:text-2xl" : "text-[10px] md:text-xs"
          )}
        >
          {englishKeyword}
        </span>
      </div>

      {/* Hero titles bottom */}
      {isHero && title && hindiTitle && (
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="mx-auto max-w-4xl space-y-3 text-center md:space-y-4">
            <h1 className="font-hindi text-2xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              {hindiTitle}
            </h1>
            <p className="font-display text-sm font-medium text-white/70 md:text-lg">{title}</p>
          </div>
        </div>
      )}

      {/* Reading time badge bottom-right */}
      <div
        className={cn(
          "absolute flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur-md",
          isHero ? "bottom-6 right-6 md:bottom-10 md:right-10" : "bottom-3 right-3"
        )}
      >
        <svg className="h-3 w-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
        <span>{readTime} min read</span>
      </div>
    </div>
  );
}
