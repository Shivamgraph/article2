import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5 bg-black/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gold-gradient">
              <span className="font-display text-sm font-black text-black">SG</span>
            </div>
            <div>
              <div className="font-display text-xl font-black text-white">SHIVAMGRAPH</div>
              <div className="font-hindi text-xs text-white/50">गहराई से, सच्चाई से</div>
            </div>
          </div>
          <p className="max-w-md font-hindi text-sm leading-relaxed text-white/50">
            हिंदी में raw, direct, no-fluff content on psychology, money, body, relationships और meaning.
            तुम्हारा comfort zone तोड़ने के लिए बनाया गया।
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">
            Explore
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-white/50 transition hover:text-amber-300">All Blogs</Link></li>
            <li><Link to="/?category=economics" className="text-white/50 transition hover:text-amber-300">Brutal Economics</Link></li>
            <li><Link to="/?category=relationships" className="text-white/50 transition hover:text-amber-300">Relationships</Link></li>
            <li><Link to="/?category=body" className="text-white/50 transition hover:text-amber-300">Body as System</Link></li>
            <li><Link to="/?category=learning" className="text-white/50 transition hover:text-amber-300">Learning System</Link></li>
            <li><Link to="/?category=legacy" className="text-white/50 transition hover:text-amber-300">Legacy & Meaning</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">
            Connect
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-white/50 transition hover:text-amber-300">YouTube</a></li>
            <li><a href="#" className="text-white/50 transition hover:text-amber-300">Instagram</a></li>
            <li><a href="#" className="text-white/50 transition hover:text-amber-300">Twitter / X</a></li>
            <li><a href="#" className="text-white/50 transition hover:text-amber-300">Etsy Store</a></li>
            <li><a href="#" className="text-white/50 transition hover:text-amber-300">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 md:flex-row md:px-8">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} SHIVAMGRAPH. All rights reserved.
          </p>
          <p className="text-xs text-white/40 font-hindi">
            हिंदी में बनाया गया — भारत के लिए, भारतीयों के लिए
          </p>
        </div>
      </div>
    </footer>
  );
}
