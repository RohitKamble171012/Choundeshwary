"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Machines" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-[0_10px_30px_-20px_rgba(0,0,0,0.3)]" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <div className={`w-10 h-10 grid place-items-center font-display text-lg transition-colors ${scrolled ? "bg-ink text-white" : "bg-machinery text-white"}`}>
            C
          </div>
          <div className="leading-tight">
            <div className={`text-sm font-bold tracking-wide ${scrolled ? "text-ink" : "text-white"}`}>CHOUNDESHWARY</div>
            <div className={`text-[10px] uppercase tracking-[0.28em] ${scrolled ? "text-machinery" : "text-white/70"}`}>Machinery</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-xs uppercase tracking-[0.22em] font-semibold transition-colors hover:text-machinery ${
                scrolled ? "text-ink" : "text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/918208384134"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-machinery text-white px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-ink transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            WhatsApp
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((s) => !s)}
            className={`lg:hidden w-10 h-10 grid place-items-center border ${scrolled ? "border-ink/20 text-ink" : "border-white/40 text-white"}`}
          >
            <span className="sr-only">Toggle</span>
            <div className="space-y-1.5">
              <span className="block w-5 h-0.5 bg-current" />
              <span className="block w-5 h-0.5 bg-current" />
              <span className="block w-3 h-0.5 bg-current ml-auto" />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-black/5">
          <div className="container-x py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.22em] font-semibold text-ink hover:text-machinery"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/918208384134"
              className="mt-2 inline-flex items-center justify-center bg-machinery text-white px-5 py-3 text-xs font-bold uppercase tracking-[0.2em]"
            >
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
