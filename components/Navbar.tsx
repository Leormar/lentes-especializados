"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const links = [
  { href: "/",              label: "Inicio" },
  { href: "/quienes-somos", label: "Nosotros" },
  { href: "/servicios",     label: "Servicios" },
  { href: "/contacto",      label: "Contáctenos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const glass = !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        glass
          ? "bg-white/70 backdrop-blur-md border-b border-white/40"
          : "bg-white/98 backdrop-blur border-b border-sky-100 shadow-sm"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-28 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="nav-logo-link flex items-center">
          {!logoError ? (
            <Image
              src="/logo.png"
              alt="Lentes Especializados"
              width={380}
              height={114}
              className="h-24 w-auto object-contain transition-all duration-500"
              style={{}}
              onError={() => setLogoError(true)}
              priority
            />
          ) : (
            <span className={`flex items-center gap-2 font-semibold ${glass ? "text-white" : "text-[#2e3f8a]"}`}>
              <EyeIcon white={glass} />
              <span className="text-lg tracking-tight">Lentes Especializados</span>
            </span>
          )}
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link solid-link"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {l.label}
            </Link>
          ))}

          <a
            href="https://wa.me/573113154316?text=Hola,%20me%20interesa%20agendar%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-solid"
            style={{ animationDelay: "0.36s" }}
          >
            <span className="shine-bar" aria-hidden="true" />
            <span className="relative z-10">Solicitar cita</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 transition-colors text-[#2e3f8a] hover:text-[#5b80d4]"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-sky-100 bg-white px-4 pb-5 pt-2">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="mobile-link"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/573113154316?text=Hola,%20me%20interesa%20agendar%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-solid block text-center mt-3"
          >
            <span className="shine-bar" aria-hidden="true" />
            <span className="relative z-10">Solicitar cita</span>
          </a>
        </div>
      )}

      <style>{`
        /* ── Entrance animation ───────────────────────────── */
        @keyframes nav-in {
          0%   { opacity: 0; transform: translateY(-18px) scale(0.9) rotate(-1.5deg); }
          55%  { transform: translateY(4px) scale(1.02) rotate(0.5deg); }
          80%  { transform: translateY(-2px) scale(0.99); }
          100% { opacity: 1; transform: translateY(0) scale(1) rotate(0deg); }
        }
        @keyframes link-hop {
          0%   { transform: translateY(0) scale(1); }
          35%  { transform: translateY(-6px) scale(1.1) rotate(-1.2deg); }
          65%  { transform: translateY(2px) scale(0.97) rotate(0.5deg); }
          100% { transform: translateY(0) scale(1) rotate(0deg); }
        }
        @keyframes shine-sweep {
          0%   { left: -80%; }
          45%  { left: 130%; }
          100% { left: 130%; }
        }

        /* ── Nav links ────────────────────────────────────── */
        .nav-link {
          position: relative;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          padding: 6px 2px;
          text-decoration: none;
          animation: nav-in 0.55s cubic-bezier(0.22,1,0.36,1) both;
          transition: color 0.25s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 50%;
          width: 0;
          height: 2px;
          border-radius: 2px;
          transition: width 0.35s cubic-bezier(0.22,1,0.36,1), left 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .nav-link:hover {
          animation: link-hop 0.45s cubic-bezier(0.22,1,0.36,1) both;
        }
        .nav-link:hover::after {
          width: 100%;
          left: 0;
        }

        /* Glass mode (over hero) */
        .glass-link { color: rgba(255,255,255,0.88); }
        .glass-link:hover { color: #fff; }
        .glass-link::after { background: linear-gradient(90deg, rgba(255,255,255,0.6), #fff); }

        /* Solid mode (scrolled) */
        .solid-link { color: #475569; }
        .solid-link:hover { color: #2e3f8a; }
        .solid-link::after { background: linear-gradient(90deg, #5b80d4, #2e3f8a); }

        /* ── Mobile links ─────────────────────────────────── */
        .mobile-link {
          display: block;
          padding: 14px 0;
          font-weight: 700;
          font-size: 0.95rem;
          color: #334155;
          border-bottom: 1px solid #f1f5f9;
          text-decoration: none;
          animation: nav-in 0.5s cubic-bezier(0.22,1,0.36,1) both;
          transition: color 0.2s, padding-left 0.2s;
        }
        .mobile-link:hover { color: #2e3f8a; padding-left: 8px; }

        /* ── CTA button shared ────────────────────────────── */
        .cta-btn {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 24px;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 800;
          letter-spacing: 0.03em;
          text-decoration: none;
          animation: nav-in 0.55s cubic-bezier(0.22,1,0.36,1) both;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s;
        }
        .cta-btn:hover  { transform: translateY(-3px) scale(1.05); }
        .cta-btn:active { transform: translateY(0) scale(0.97); }

        /* Glass style (over hero) */
        .cta-glass {
          color: #fff;
          border: 2px solid rgba(255,255,255,0.7);
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 16px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2);
        }
        .cta-glass:hover {
          background: rgba(255,255,255,0.22);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3);
        }

        /* Solid style (scrolled) */
        .cta-solid {
          color: #fff;
          background: linear-gradient(135deg, #3b5ec6 0%, #2e3f8a 60%, #1a2a5e 100%);
          box-shadow: 0 4px 15px rgba(46,63,138,0.35), inset 0 1px 0 rgba(255,255,255,0.15);
        }
        .cta-solid:hover {
          box-shadow: 0 8px 24px rgba(46,63,138,0.45), inset 0 1px 0 rgba(255,255,255,0.2);
        }

        /* Shine sweep */
        .shine-bar {
          position: absolute; top: -50%; left: -80%;
          width: 40%; height: 200%;
          background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%);
          transform: skewX(-20deg);
          animation: shine-sweep 2.8s ease infinite;
          pointer-events: none;
        }

        /* Logo hover */
        .nav-logo-link { transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), filter 0.3s; }
        .nav-logo-link:hover { transform: scale(1.04); filter: drop-shadow(0 4px 14px rgba(46,63,138,0.25)); }
      `}</style>
    </header>
  );
}

function EyeIcon({ white }: { white?: boolean }) {
  const c = white ? "#fff" : "#2e3f8a";
  const f = white ? "#ffffffaa" : "#5b80d4";
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <ellipse cx="14" cy="14" rx="12" ry="8" stroke={c} strokeWidth="2" />
      <circle cx="14" cy="14" r="4" fill={f} />
      <circle cx="14" cy="14" r="2" fill={c} />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
