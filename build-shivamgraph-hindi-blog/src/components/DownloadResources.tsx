import type { DownloadResource } from "../data/blogs";

interface DownloadResourcesProps {
  resources: DownloadResource[];
}

const typeColors: Record<string, string> = {
  PDF: "bg-red-500/10 text-red-300 border-red-500/20",
  Workbook: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  Etsy: "bg-orange-500/10 text-orange-300 border-orange-500/20",
  Checklist: "bg-sky-500/10 text-sky-300 border-sky-500/20",
  Guide: "bg-violet-500/10 text-violet-300 border-violet-500/20",
};

export default function DownloadResources({ resources }: DownloadResourcesProps) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full gold-gradient">
          <svg className="h-5 w-5 text-black" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-white md:text-2xl">Download Resources</h3>
          <p className="text-sm text-white/50 font-hindi">और गहराई में जाने के लिए resources ले लो</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* 
          NOTE: Replace href="#" with actual URLs when resources are ready.
          Etsy products can link to your Etsy shop; PDFs can go to /downloads/ or Gumroad/Amazon S3.
        */}
        {resources.map((r, i) => (
          <div key={i} className="card card-hover flex flex-col p-5">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
                <svg className="h-6 w-6 text-amber-400" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${typeColors[r.type] || "bg-white/5 text-white/60 border-white/10"}`}>
                {r.type}
              </span>
            </div>
            <h4 className="mb-4 flex-1 font-hindi text-base font-semibold leading-snug text-white">
              {r.title}
            </h4>
            <a
              href={r.url}
              className="btn-primary w-full justify-center"
              target={r.url.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              {r.type === "Etsy" ? "Buy →" : "Download →"}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
