"use client";

import { useState } from "react";
import Link from "next/link";

type Tab = {
  id: string;
  label: string;
  icon: string;
  desc: string;
  gradient: string;       // active gradient
  gradientSoft: string;   // inactive background
  glow: string;           // box-shadow color
  shine: string;          // shine tint
  border: string;         // inactive border
  textAccent: string;     // inactive text color
};

const tabs: Tab[] = [
  {
    id: "servicios",
    label: "Servicios",
    icon: "👁",
    desc: "Nuestros tratamientos",
    gradient: "linear-gradient(135deg,#3b5ec6 0%,#2e3f8a 60%,#1a2a5e 100%)",
    gradientSoft: "linear-gradient(135deg,#eef2ff 0%,#e0e7ff 100%)",
    glow: "0 8px 32px rgba(59,94,198,0.45), 0 2px 8px rgba(46,63,138,0.3)",
    shine: "rgba(180,200,255,0.55)",
    border: "#5b80d4",
    textAccent: "#2e3f8a",
  },
  {
    id: "equipo",
    label: "Equipo",
    icon: "🩺",
    desc: "Nuestros especialistas",
    gradient: "linear-gradient(135deg,#0f766e 0%,#0d9488 60%,#134e4a 100%)",
    gradientSoft: "linear-gradient(135deg,#f0fdfa 0%,#ccfbf1 100%)",
    glow: "0 8px 32px rgba(13,148,136,0.45), 0 2px 8px rgba(15,118,110,0.3)",
    shine: "rgba(167,243,208,0.55)",
    border: "#0d9488",
    textAccent: "#0f766e",
  },
  {
    id: "nosotros",
    label: "Nosotros",
    icon: "🏆",
    desc: "Historia desde 1992",
    gradient: "linear-gradient(135deg,#b45309 0%,#d97706 60%,#92400e 100%)",
    gradientSoft: "linear-gradient(135deg,#fffbeb 0%,#fef3c7 100%)",
    glow: "0 8px 32px rgba(217,119,6,0.45), 0 2px 8px rgba(180,83,9,0.3)",
    shine: "rgba(253,230,138,0.65)",
    border: "#d97706",
    textAccent: "#b45309",
  },
  {
    id: "educacion",
    label: "Educación",
    icon: "📖",
    desc: "Artículos clínicos",
    gradient: "linear-gradient(135deg,#5b21b6 0%,#7c3aed 60%,#4c1d95 100%)",
    gradientSoft: "linear-gradient(135deg,#f5f3ff 0%,#ede9fe 100%)",
    glow: "0 8px 32px rgba(124,58,237,0.45), 0 2px 8px rgba(91,33,182,0.3)",
    shine: "rgba(221,214,254,0.6)",
    border: "#7c3aed",
    textAccent: "#5b21b6",
  },
];

export default function TabsInfo() {
  const [activo, setActivo] = useState("servicios");
  const [contentKey, setContentKey] = useState(0);
  const [btnKeys, setBtnKeys] = useState<Record<string, number>>(
    Object.fromEntries(tabs.map((t) => [t.id, 0]))
  );

  const cambiar = (id: string) => {
    if (id === activo) return;
    setActivo(id);
    setContentKey((k) => k + 1);
    setBtnKeys((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const tabActivo = tabs.find((t) => t.id === activo)!;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-[#5b80d4] font-semibold text-sm uppercase tracking-widest mb-2">
            Todo en un lugar
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2e3f8a]">
            ¿Qué encontrará aquí?
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full mt-4" style={{ background: tabActivo.gradient }} />
        </div>

        {/* Botones con estilo CTA + personalidad por pestaña */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {tabs.map((t) => {
            const esActivo = activo === t.id;
            return (
              <button
                key={`${t.id}-${btnKeys[t.id]}`}
                onClick={() => cambiar(t.id)}
                className="tab-btn relative overflow-hidden flex flex-col items-center justify-center gap-3 rounded-2xl py-8 px-4 border-2 transition-all duration-300"
                style={
                  esActivo
                    ? {
                        background: t.gradient,
                        borderColor: "transparent",
                        boxShadow: t.glow,
                        animation: `aladino-tab 0.65s cubic-bezier(0.22,1,0.36,1) both`,
                      }
                    : {
                        background: t.gradientSoft,
                        borderColor: t.border,
                      }
                }
              >
                {/* Shine sweep */}
                <span
                  className="tab-shine"
                  style={{ background: `linear-gradient(108deg,transparent 20%,${t.shine} 50%,transparent 80%)` }}
                  aria-hidden="true"
                />

                <span
                  className="text-5xl relative z-10 transition-transform duration-300"
                  style={{ filter: esActivo ? "drop-shadow(0 2px 8px rgba(0,0,0,0.25))" : "none" }}
                >
                  {t.icon}
                </span>
                <span
                  className="relative z-10 text-xl font-black tracking-tight leading-none"
                  style={{ color: esActivo ? "#fff" : t.textAccent }}
                >
                  {t.label}
                </span>
                <span
                  className="relative z-10 text-xs font-semibold text-center leading-snug"
                  style={{ color: esActivo ? "rgba(255,255,255,0.75)" : t.textAccent + "aa" }}
                >
                  {t.desc}
                </span>
              </button>
            );
          })}
        </div>

        {/* Contenido con efecto Aladino */}
        <div
          key={contentKey}
          style={{ animation: "aladino-content 0.6s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          {activo === "servicios" && <TabServicios />}
          {activo === "equipo"    && <TabEquipo />}
          {activo === "nosotros"  && <TabNosotros />}
          {activo === "educacion" && <TabEducacion />}
        </div>
      </div>

      <style>{`
        /* ── Aladino en botón — exagerado y visible ─────────── */
        @keyframes aladino-tab {
          0%   { opacity: 0; transform: scale(0.72) rotate(-5deg) translateY(16px); }
          35%  { transform: scale(1.14) rotate(3deg) translateY(-8px); }
          58%  { transform: scale(0.94) rotate(-1.5deg) translateY(3px); }
          78%  { transform: scale(1.05) rotate(0.8deg) translateY(-1px); }
          100% { opacity: 1; transform: scale(1) rotate(0deg) translateY(0); }
        }

        /* ── Aladino en contenido ─────────────────────────── */
        @keyframes aladino-content {
          0%   { opacity: 0; transform: translateY(55px) scale(0.91) rotate(-1.2deg); }
          50%  { transform: translateY(-7px) scale(1.02) rotate(0.4deg); }
          75%  { transform: translateY(3px) scale(0.99); }
          100% { opacity: 1; transform: translateY(0) scale(1) rotate(0deg); }
        }

        /* ── Shine sweep en cada botón ────────────────────── */
        @keyframes tab-shine-anim {
          0%   { left: -90%; }
          50%  { left: 130%; }
          100% { left: 130%; }
        }
        .tab-btn { cursor: pointer; }
        .tab-shine {
          position: absolute; top: -60%; left: -90%;
          width: 55%; height: 220%;
          transform: skewX(-22deg);
          animation: tab-shine-anim 2.4s ease infinite;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}

/* ════ Contenido de cada pestaña ════════════════════════════ */

function TabServicios() {
  const servicios = [
    { titulo: "Lentes Esclerales",         desc: "Para queratocono, córneas irregulares y ojo seco severo. El estándar de oro.", href: "/servicios#esclerales" },
    { titulo: "Ortoqueratología · Ortho-K",desc: "Lentes nocturnos. Visión sin gafas de día. Control científico de la miopía.", href: "/servicios#orthokeratologia" },
    { titulo: "Lentes RGP / Híbridos",     desc: "Óptica superior para astigmatismo irregular y alta miopía.",                  href: "/servicios#rgp" },
    { titulo: "Post-quirúrgico",           desc: "Adaptación tras LASIK, trasplante de córnea o implante de IOL.",              href: "/servicios#post-quirurgico" },
    { titulo: "Ojo Seco Severo",           desc: "Protocolo integral. Los esclerales actúan como reservorio de lágrima.",        href: "/servicios#ojo-seco" },
    { titulo: "Imágenes MediView",         desc: "Valoración de ojo seco y superficie ocular con imágenes de alta definición.", href: "/servicios#mediview" },
    { titulo: "Baja Visión",               desc: "Ayudas ópticas y electrónicas para maximizar el potencial visual restante.",   href: "/servicios#baja-vision" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {servicios.map((s) => (
        <Link key={s.titulo} href={s.href}
          className="group bg-[#f0f9ff] border border-blue-100 rounded-2xl p-5 hover:border-[#5b80d4] hover:shadow-md transition-all">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#5b80d4] to-[#2e3f8a] flex items-center justify-center mb-3">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <ellipse cx="9" cy="9" rx="7.5" ry="5" stroke="white" strokeWidth="1.5" />
              <circle cx="9" cy="9" r="2.5" fill="white" />
            </svg>
          </div>
          <h3 className="font-bold text-[#2e3f8a] mb-1 text-sm group-hover:text-[#5b80d4] transition-colors">{s.titulo}</h3>
          <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
        </Link>
      ))}
    </div>
  );
}

function TabEquipo() {
  const equipo = [
    { nombre: "Dr. Leonardo Orjuela Mariño", cargo: "OD · Director Científico",    areas: "Esclerales · RGP · Baja visión · Prótesis ocular", inicial: "O", color: "from-[#2e3f8a] to-[#5b80d4]" },
    { nombre: "Dra. Elizabeth Rueda",         cargo: "OD · Optometría Pediátrica",  areas: "Bebés canguro · Desarrollo visual · Contactología", inicial: "R", color: "from-[#0f766e] to-[#0d9488]" },
    { nombre: "Dra. Laura Montoya",           cargo: "OD · Ortóptica y Prótesis",   areas: "Ortóptica · Prótesis ocular · Rehabilitación visual",inicial: "M", color: "from-[#5b21b6] to-[#7c3aed]" },
    { nombre: "Dra. Laura Silva",             cargo: "MD · Oftalmóloga",             areas: "Superficie ocular · Ojo seco · Diagnóstico MediView", inicial: "S", color: "from-[#b45309] to-[#d97706]" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {equipo.map((e) => (
        <div key={e.nombre} className="flex gap-4 bg-[#f0fdfa] border border-teal-100 rounded-2xl p-5">
          <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${e.color} flex items-center justify-center text-white font-black text-xl shrink-0 shadow-md`}>
            {e.inicial}
          </div>
          <div>
            <p className="font-bold text-[#0f766e]">{e.nombre}</p>
            <p className="text-[#0d9488] text-xs font-semibold mb-1">{e.cargo}</p>
            <p className="text-slate-500 text-xs">{e.areas}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function TabNosotros() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4 text-slate-600 leading-relaxed">
        <p className="text-lg font-bold text-[#b45309]">Fundados en 1992 en Medellín</p>
        <p>Somos el centro de referencia en contactología de alta complejidad de Antioquia. Atendemos los casos que otros centros no pueden resolver: queratocono, córneas irregulares, ojo seco severo y adaptaciones post-quirúrgicas.</p>
        <p>Nuestro equipo interdisciplinario combina optometría clínica especializada con oftalmología de superficie ocular, bajo el mismo techo.</p>
        <Link href="/quienes-somos" className="btn-shine inline-block text-white px-6 py-2.5 rounded-full text-sm font-bold mt-2"
          style={{ background: "linear-gradient(135deg,#b45309 0%,#d97706 60%,#92400e 100%)", boxShadow: "0 4px 16px rgba(217,119,6,0.4)" }}>
          Conocer más →
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[
          { num: "1992", label: "Fundados",           color: "from-[#b45309] to-[#d97706]" },
          { num: "+30",  label: "Años de experiencia", color: "from-[#2e3f8a] to-[#5b80d4]" },
          { num: "+5.000", label: "Pacientes",         color: "from-[#0f766e] to-[#0d9488]" },
          { num: "4",    label: "Especialistas",       color: "from-[#5b21b6] to-[#7c3aed]" },
        ].map((s) => (
          <div key={s.label} className={`bg-gradient-to-br ${s.color} text-white rounded-2xl p-6 text-center shadow-md`}>
            <p className="text-3xl font-black">{s.num}</p>
            <p className="text-white/75 text-xs mt-1 font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TabEducacion() {
  const articulos = [
    { slug: "que-es-el-queratocono",     cat: "Condiciones",    titulo: "¿Qué es el queratocono y cómo afecta la visión?",        tiempo: "5 min" },
    { slug: "lentes-esclerales-guia",    cat: "Lentes",         titulo: "Lentes esclerales: la solución cuando los demás fallan", tiempo: "7 min" },
    { slug: "post-lasik-lentes-contacto",cat: "Post-quirúrgico",titulo: "Después del LASIK: cuando necesita lentes de contacto",  tiempo: "6 min" },
    { slug: "ojo-seco-lentes-esclerales",cat: "Ojo Seco",       titulo: "Ojo seco severo y lentes esclerales: una solución real", tiempo: "5 min" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {articulos.map((a) => (
        <Link key={a.slug} href={`/blog/${a.slug}`}
          className="group bg-[#f5f3ff] border border-violet-100 rounded-2xl p-5 hover:border-[#7c3aed] hover:shadow-md transition-all">
          <span className="inline-block bg-violet-100 text-[#5b21b6] text-xs font-bold px-3 py-1 rounded-full mb-3">{a.cat}</span>
          <h3 className="font-bold text-[#5b21b6] mb-2 group-hover:text-[#7c3aed] transition-colors leading-snug text-sm">{a.titulo}</h3>
          <p className="text-xs text-slate-400">{a.tiempo} de lectura</p>
        </Link>
      ))}
    </div>
  );
}
