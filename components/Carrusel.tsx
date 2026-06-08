"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

type Slide = {
  src?: string;
  titulo: string;
  subtitulo: string;
  cta: string;
  ctaHref: string;
  bg: string;
};

const slides: Slide[] = [
  {
    src: "/banners/banner-01.jpg",
    titulo: "Lentes Esclerales para Córneas Irregulares",
    subtitulo: "La solución cuando los demás han fallado. Adaptamos lentes para queratocono, post-cirugía y ojo seco severo.",
    cta: "Agendar consulta",
    ctaHref: "https://wa.me/573113154316?text=Hola,%20me%20interesa%20agendar%20una%20consulta",
    bg: "from-[#1a2a5e] to-[#2e3f8a]",
  },
  {
    src: "/banners/banner-02.jpg",
    titulo: "Más de 30 Años de Experiencia en Contactología",
    subtitulo: "Un equipo interdisciplinario de optómetras y oftalmólogos especializados en los casos más complejos de Medellín.",
    cta: "Conocer el equipo",
    ctaHref: "/quienes-somos",
    bg: "from-[#2e3f8a] to-[#3a5cc2]",
  },
  {
    src: "/banners/banner-03.jpg",
    titulo: "Imágenes MediView · Diagnóstico de Ojo Seco",
    subtitulo: "Tecnología de imagen corneal de última generación para diagnóstico preciso de ojo seco y superficie ocular.",
    cta: "Ver servicios",
    ctaHref: "/servicios",
    bg: "from-[#3a5cc2] to-[#5b80d4]",
  },
];

export default function Carrusel() {
  const [actual, setActual] = useState(0);
  const [fade, setFade] = useState(true);

  const ir = useCallback((idx: number) => {
    setFade(false);
    setTimeout(() => {
      setActual((idx + slides.length) % slides.length);
      setFade(true);
    }, 250);
  }, []);

  useEffect(() => {
    const t = setInterval(() => ir(actual + 1), 5500);
    return () => clearInterval(t);
  }, [actual, ir]);

  const slide = slides[actual];

  return (
    /* Full-screen: covers the viewport including behind the fixed navbar */
    <div className="relative w-full overflow-hidden" style={{ height: "100dvh" }}>

      {/* Background images */}
      {slides.map((s, i) =>
        s.src ? (
          <Image
            key={s.src}
            src={s.src}
            alt={s.titulo}
            fill
            priority={i === 0}
            className={`object-cover transition-opacity duration-700 ${i === actual ? "opacity-100" : "opacity-0"}`}
          />
        ) : null
      )}

      {/* Dark gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${slide.bg} transition-opacity duration-700 ${slide.src ? "opacity-65" : "opacity-100"}`}
      />

      {/* Additional dark vignette for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

      {/* Slide content — centered accounting for fixed navbar height */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 pt-28 pb-16 transition-all duration-500 ${
          fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        <p className="text-sky-300 font-semibold text-xs sm:text-sm uppercase tracking-widest mb-4 drop-shadow">
          PROLENS · Centro de Contactología Especializada
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black max-w-4xl leading-tight mb-5 drop-shadow-lg">
          {slide.titulo}
        </h1>
        <p className="text-base sm:text-xl text-white/85 max-w-2xl leading-relaxed mb-10 drop-shadow">
          {slide.subtitulo}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={slide.ctaHref}
            target={slide.ctaHref.startsWith("http") ? "_blank" : undefined}
            rel={slide.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
            className="hero-cta-primary"
          >
            <span className="hero-shine" aria-hidden="true" />
            <span className="relative z-10">{slide.cta}</span>
          </a>
          <a href="/servicios" className="hero-cta-secondary">
            Ver todos los servicios →
          </a>
        </div>
      </div>

      {/* Arrow buttons */}
      <button
        onClick={() => ir(actual - 1)}
        aria-label="Anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white backdrop-blur-sm transition-all hover:scale-110"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M14 4l-7 7 7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={() => ir(actual + 1)}
        aria-label="Siguiente"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white backdrop-blur-sm transition-all hover:scale-110"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M8 4l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => ir(i)}
            aria-label={`Ir al slide ${i + 1}`}
            className={`rounded-full transition-all duration-400 ${
              i === actual ? "w-8 h-2.5 bg-white" : "w-2.5 h-2.5 bg-white/45 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-6 flex flex-col items-center gap-1 text-white/50 text-xs">
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <rect x="1" y="1" width="14" height="18" rx="7" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="8" cy="6" r="2" fill="currentColor">
            <animate attributeName="cy" values="6;12;6" dur="1.8s" repeatCount="indefinite"/>
          </circle>
        </svg>
        <span className="tracking-widest">scroll</span>
      </div>

      <style>{`
        @keyframes hero-shine-anim {
          0%   { left: -80%; }
          45%  { left: 130%; }
          100% { left: 130%; }
        }
        .hero-cta-primary {
          position: relative; overflow: hidden;
          display: inline-flex; align-items: center; justify-content: center;
          padding: 14px 32px;
          border-radius: 9999px;
          background: #fff;
          color: #2e3f8a;
          font-weight: 800;
          font-size: 0.95rem;
          letter-spacing: 0.02em;
          box-shadow: 0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.8);
          text-decoration: none;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s;
        }
        .hero-cta-primary:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 14px 40px rgba(0,0,0,0.3);
        }
        .hero-shine {
          position: absolute; top: -50%; left: -80%;
          width: 40%; height: 200%;
          background: linear-gradient(105deg, transparent 30%, rgba(46,63,138,0.1) 50%, transparent 70%);
          transform: skewX(-20deg);
          animation: hero-shine-anim 2.5s ease infinite;
          pointer-events: none;
        }
        .hero-cta-secondary {
          display: inline-flex; align-items: center;
          padding: 14px 28px;
          border-radius: 9999px;
          border: 2px solid rgba(255,255,255,0.55);
          color: #fff;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.02em;
          text-decoration: none;
          backdrop-filter: blur(6px);
          background: rgba(255,255,255,0.08);
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), background 0.3s, border-color 0.3s;
        }
        .hero-cta-secondary:hover {
          transform: translateY(-4px) scale(1.04);
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.85);
        }
      `}</style>
    </div>
  );
}
