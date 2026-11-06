import { useEffect, useState } from "react";
import { Menu, X, Globe2 } from "lucide-react";

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#partnerships", label: "Partnerships" },
  { href: "#initiatives", label: "Initiatives" },
  { href: "#about", label: "About ESSU" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft border-b border-emerald-900/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 grid place-items-center shadow-soft transition-transform group-hover:scale-105">
                <Globe2 className="w-5 h-5 text-white" strokeWidth={2.2} />
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-400 text-[9px] font-extrabold text-emerald-950 grid place-items-center ring-2 ring-white">
                17
              </span>
            </div>
            <div className="leading-tight">
              <p className={`text-sm font-extrabold tracking-tight ${scrolled ? "text-emerald-950" : "text-white"}`}>
                EASTERN SAMAR STATE UNIVERSITY
              </p>
              <p className={`text-[11px] font-medium ${scrolled ? "text-emerald-700/70" : "text-emerald-100/80"}`}>
                SDG 17 · Partnerships for the Goals
              </p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  scrolled
                    ? "text-emerald-900/80 hover:text-emerald-950 hover:bg-emerald-50"
                    : "text-emerald-50/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#initiatives"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-bold text-emerald-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-soft"
          >
            Explore Initiatives
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden p-2 rounded-lg ${scrolled ? "text-emerald-950" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-emerald-900/5">
          <div className="px-5 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-semibold text-emerald-900 hover:bg-emerald-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#initiatives"
              onClick={() => setOpen(false)}
              className="block mt-2 px-4 py-3 rounded-xl text-sm font-bold text-center text-emerald-950 bg-amber-400"
            >
              Explore Initiatives
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
