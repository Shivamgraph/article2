interface RelatedVideoProps {
  videoId: string;
  title?: string;
}

export default function RelatedVideo({ videoId, title = "इस विषय पर और गहराई में" }: RelatedVideoProps) {
  return (
    <div className="card p-5 md:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full gold-gradient">
          <svg className="ml-0.5 h-5 w-5 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-white md:text-2xl">Watch Related Video</h3>
          <p className="text-sm text-white/50 font-hindi">{title} — YouTube पर पूरी video देखो</p>
        </div>
      </div>

      {/* 16:9 placeholder for YouTube embed */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black">
        {/* NOTE: Replace this placeholder with actual YouTube iframe when ready:
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Related video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0"
          />
        */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-amber-900/20 via-black to-black">
          <div className="pattern-grid absolute inset-0 opacity-30" />
          <button
            className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full gold-gradient shadow-2xl shadow-amber-500/30 transition-transform hover:scale-110"
            aria-label="Play video"
          >
            <svg className="ml-1 h-8 w-8 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
          <p className="relative z-10 font-display text-sm font-medium text-white/60">
            Video ID: <span className="gold-text font-semibold">{videoId}</span>
          </p>
          <p className="relative z-10 text-xs text-white/30">
            ↓ YouTube iframe embed code is commented in RelatedVideo.tsx
          </p>
        </div>
      </div>
    </div>
  );
}
