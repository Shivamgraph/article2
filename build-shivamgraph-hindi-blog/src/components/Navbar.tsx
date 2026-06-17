import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  const navLinks = [
    { to: "/", label: "Home", end: true },
    { to: "/blog", label: "All Articles" },
    { to: "/#roadmap", label: "Roadmap", hash: true },
    { to: "/blog?category=economics", label: "Money" },
    { to: "/blog?category=relationships", label: "Relations" },
    { to: "/blog?category=body", label: "Body" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open || !isHome
          ? "border-b border-white/5 bg-[#070B14]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-gradient shadow-lg shadow-[#FFB800]/20">
            <span className="font-display text-sm font-black text-[#070B14]">SG</span>
          </div>
          <div className="leading-none">
            <div className="font-display text-base font-black tracking-tight text-white md:text-lg group-hover:text-[#fde68a] transition-colors">
              SHIVAMGRAPH<span className="text-[#FFB800]">.</span>
            </div>
            <div className="mt-0.5 hidden font-hindi text-[9px] tracking-wide text-white/40 md:block">
              गहराई से · सच्चाई से
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-[#FFB800]" : "text-white/60 hover:text-white"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/#newsletter" className="btn-gold !py-2 !px-4 !text-xs ml-2">
            Subscribe
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/5 bg-[#070B14]/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map(l => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive ? "bg-[#FFB800]/10 text-[#FFB800]" : "text-white/80"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link to="/#newsletter" className="btn-gold mt-2 justify-center">Subscribe</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
