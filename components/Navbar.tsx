"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contáctenos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-sky-100 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          {!logoError ? (
            <Image
              src="/logo.png"
              alt="Lentes Especializados"
              width={280}
              height={84}
              className="h-20 w-auto object-contain"
              onError={() => setLogoError(true)}
              priority
            />
          ) : (
            <span className="flex items-center gap-2 font-semibold text-[#2e3f8a]">
              <EyeIcon />
              <span className="text-lg tracking-tight">Lentes Especializados</span>
            </span>
          )}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-slate-600 hover:text-[#2e3f8a] font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/573113154316?text=Hola,%20me%20interesa%20agendar%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-[#2e3f8a] text-white px-4 py-2 rounded-full font-medium hover:bg-[#1a2a5e] transition-colors"
          >
            Solicitar cita
          </a>
        </div>

        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-sky-100 bg-white px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-slate-700 font-medium border-b border-slate-100 last:border-0"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/573113154316?text=Hola,%20me%20interesa%20agendar%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center bg-[#2e3f8a] text-white px-4 py-3 rounded-full font-medium"
          >
            Solicitar cita
          </a>
        </div>
      )}
    </header>
  );
}

function EyeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <ellipse cx="14" cy="14" rx="12" ry="8" stroke="#2e3f8a" strokeWidth="2" />
      <circle cx="14" cy="14" r="4" fill="#5b80d4" />
      <circle cx="14" cy="14" r="2" fill="#2e3f8a" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
