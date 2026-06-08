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
    titulo: "Lentes RGP e Híbridos para Queratocono",
    subtitulo: "Tecnología de topografía corneal de última generación para diseñar el lente exacto que su córnea necesita.",
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
    <div className="relative w-full overflow-hidden" style={{ height: "clamp(320px, 55vw, 600px)" }}>
      {slides.map((s, i) =>
        s.src ? (
          <Image
            key={s.src}
            src={s.src}
            alt={s.titulo}
            fill
            priority={i === 0}
            className={`object-cover transition-opacity duration-500 ${i === actual ? "opacity-100" : "opacity-0"}`}
          />
        ) : null
      )}

      <div className={`absolute inset-0 bg-gradient-to-r ${slide.bg} transition-opacity duration-500 ${slide.src ? "opacity-60" : "opacity-100"}`} />

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 transition-all duration-500 ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold max-w-3xl leading-tight mb-4 drop-shadow-lg">
          {slide.titulo}
        </h1>
        <p className="text-base sm:text-lg text-white/90 max-w-xl leading-relaxed mb-8 drop-shadow">
          {slide.subtitulo}
        </p>
        <a
          href={slide.ctaHref}
          target={slide.ctaHref.startsWith("http") ? "_blank" : undefined}
          rel={slide.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
          className="bg-white text-[#2e3f8a] px-7 py-3 rounded-full font-bold text-sm hover:bg-sky-50 transition-colors shadow-lg"
        >
          {slide.cta}
        </a>
      </div>

      <button
        onClick={() => ir(actual - 1)}
        aria-label="Anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white backdrop-blur-sm transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M13 4l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={() => ir(actual + 1)}
        aria-label="Siguiente"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white backdrop-blur-sm transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => ir(i)}
            aria-label={`Ir al slide ${i + 1}`}
            className={`rounded-full transition-all ${i === actual ? "w-6 h-2.5 bg-white" : "w-2.5 h-2.5 bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
