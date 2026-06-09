"use client";

import { useState } from "react";
import Link from "next/link";

type Tab = { id: string; label: string; icon: string; desc: string };

const tabs: Tab[] = [
  { id: "servicios", label: "Servicios",  icon: "👁",  desc: "Lentes especializados" },
  { id: "equipo",    label: "Equipo",     icon: "🩺",  desc: "Nuestros especialistas" },
  { id: "nosotros",  label: "Nosotros",   icon: "🏆",  desc: "Historia y valores" },
  { id: "educacion", label: "Educación",  icon: "📖",  desc: "Artículos clínicos" },
];

export default function TabsInfo() {
  const [activo, setActivo] = useState("servicios");
  const [contentKey, setContentKey] = useState(0);
  const [btnKeys, setBtnKeys] = useState<Record<string, number>>({ servicios: 0, equipo: 0, nosotros: 0, educacion: 0 });

  const cambiar = (id: string) => {
    if (id === activo) return;
    setActivo(id);
    setContentKey((k) => k + 1);
    setBtnKeys((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

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
          <div className="w-16 h-1 bg-[#5b80d4] mx-auto rounded-full mt-4" />
        </div>

        {/* Botones grandes con efecto aladino propio */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {tabs.map((t) => {
            const esActivo = activo === t.id;
            return (
              <button
                key={`${t.id}-${btnKeys[t.id]}`}
                onClick={() => cambiar(t.id)}
                style={esActivo ? { animation: "aladino-btn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both" } : undefined}
                className={`flex flex-col items-center justify-center gap-3 rounded-2xl py-8 px-4 font-semibold transition-all duration-300 shadow-sm border-2 ${
                  esActivo
                    ? "bg-[#2e3f8a] text-white border-[#2e3f8a] shadow-xl"
                    : "bg-white text-slate-600 border-slate-200 hover:border-[#5b80d4] hover:shadow-md hover:text-[#2e3f8a]"
                }`}
              >
                <span className={`text-4xl transition-transform duration-300 ${esActivo ? "scale-125" : "scale-100"}`}>
                  {t.icon}
                </span>
                <span className="text-base font-bold">{t.label}</span>
                <span className={`text-xs font-normal ${esActivo ? "text-blue-200" : "text-slate-400"}`}>{t.desc}</span>
              </button>
            );
          })}
        </div>

        {/* Contenido con efecto Aladino */}
        <div
          key={contentKey}
          style={{ animation: "aladino 0.55s cubic-bezier(0.22, 1, 0.36, 1) both" }}
        >
          {activo === "servicios" && <TabServicios />}
          {activo === "equipo"    && <TabEquipo />}
          {activo === "nosotros"  && <TabNosotros />}
          {activo === "educacion" && <TabEducacion />}
        </div>
      </div>

      <style>{`
        @keyframes aladino {
          0%   { opacity: 0; transform: translateY(60px) scale(0.92) rotate(-1deg); }
          55%  { transform: translateY(-8px) scale(1.01) rotate(0.3deg); }
          75%  { transform: translateY(3px) scale(0.99); }
          100% { opacity: 1; transform: translateY(0) scale(1) rotate(0); }
        }
        @keyframes aladino-btn {
          0%   { opacity: 0.6; transform: scale(0.88) rotate(-2deg); }
          50%  { transform: scale(1.08) rotate(1deg); }
          75%  { transform: scale(0.97) rotate(-0.5deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
      `}</style>
    </section>
  );
}

function TabServicios() {
  const servicios = [
    { titulo: "Lentes Esclerales",     desc: "Para queratocono, córneas irregulares y ojo seco severo. El estándar de oro.",             href: "/servicios#esclerales" },
    { titulo: "Ortoqueratología · Ortho-K", desc: "Lentes nocturnos para ver sin gafas de día. Control de miopía con evidencia científica.", href: "/servicios#orthokeratologia" },
    { titulo: "Lentes RGP / Híbridos", desc: "Óptica superior para astigmatismo irregular y alta miopía.",                              href: "/servicios#rgp" },
    { titulo: "Post-quirúrgico",        desc: "Adaptación tras LASIK, trasplante de córnea o implante de IOL.",                          href: "/servicios#post-quirurgico" },
    { titulo: "Ojo Seco Severo",        desc: "Protocolo integral. Los esclerales actúan como reservorio permanente de lágrima.",         href: "/servicios#ojo-seco" },
    { titulo: "Baja Visión",            desc: "Ayudas ópticas y electrónicas para maximizar el potencial visual.",                        href: "/servicios#baja-vision" },
    { titulo: "Optometría Pediátrica",  desc: "Bebés canguro, desarrollo visual infantil y contactología en niños.",                      href: "/quienes-somos" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {servicios.map((s) => (
        <Link key={s.titulo} href={s.href}
          className="group bg-[#f0f9ff] border border-blue-100 rounded-2xl p-6 hover:border-[#5b80d4] hover:shadow-md transition-all">
          <div className="w-10 h-10 rounded-xl bg-[#2e3f8a] flex items-center justify-center mb-4">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <ellipse cx="9" cy="9" rx="7.5" ry="5" stroke="white" strokeWidth="1.5" />
              <circle cx="9" cy="9" r="2.5" fill="white" />
            </svg>
          </div>
          <h3 className="font-bold text-[#2e3f8a] mb-2 group-hover:text-[#5b80d4] transition-colors">{s.titulo}</h3>
          <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
        </Link>
      ))}
    </div>
  );
}

function TabEquipo() {
  const equipo = [
    { nombre: "Dr. Leonardo Orjuela Mariño", cargo: "OD · Director Científico", areas: "Esclerales · RGP · Baja visión · Prótesis ocular", inicial: "O" },
    { nombre: "Dra. Elizabeth Rueda",         cargo: "OD · Optometría Pediátrica", areas: "Bebés canguro · Desarrollo visual · Contactología", inicial: "R" },
    { nombre: "Dra. Laura Montoya",           cargo: "OD · Ortóptica y Prótesis",  areas: "Ortóptica · Prótesis ocular · Rehabilitación visual", inicial: "M" },
    { nombre: "Dra. Laura Silva",             cargo: "MD · Oftalmóloga",            areas: "Superficie ocular · Ojo seco · Diagnóstico MediView", inicial: "S" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {equipo.map((e) => (
        <div key={e.nombre} className="flex gap-4 bg-[#f0f9ff] border border-blue-100 rounded-2xl p-6">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#5b80d4] to-[#2e3f8a] flex items-center justify-center text-white font-bold text-xl shrink-0">
            {e.inicial}
          </div>
          <div>
            <p className="font-bold text-[#2e3f8a]">{e.nombre}</p>
            <p className="text-[#5b80d4] text-xs font-semibold mb-1">{e.cargo}</p>
            <p className="text-slate-500 text-sm">{e.areas}</p>
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
        <p className="text-lg font-semibold text-[#2e3f8a]">Fundados en 1992 en Medellín</p>
        <p>Somos el centro de referencia en contactología de alta complejidad de Antioquia. Atendemos los casos que otros centros no pueden resolver: queratocono, córneas irregulares, ojo seco severo y adaptaciones post-quirúrgicas.</p>
        <p>Nuestro equipo interdisciplinario combina optometría clínica especializada con oftalmología de superficie ocular, bajo el mismo techo.</p>
        <Link href="/quienes-somos" className="inline-block bg-[#2e3f8a] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#1a2a5e] transition-colors mt-2">
          Conocer más →
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[
          { num: "1992", label: "Fundados" },
          { num: "+30", label: "Años de experiencia" },
          { num: "+5.000", label: "Pacientes atendidos" },
          { num: "4", label: "Especialistas" },
        ].map((s) => (
          <div key={s.label} className="bg-[#2e3f8a] text-white rounded-2xl p-6 text-center">
            <p className="text-3xl font-black">{s.num}</p>
            <p className="text-blue-200 text-xs mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TabEducacion() {
  const articulos = [
    { slug: "que-es-el-queratocono",    cat: "Condiciones", titulo: "¿Qué es el queratocono y cómo afecta la visión?",         tiempo: "5 min" },
    { slug: "lentes-esclerales-guia",   cat: "Lentes",      titulo: "Lentes esclerales: la solución cuando los demás fallan",  tiempo: "7 min" },
    { slug: "post-lasik-lentes-contacto", cat: "Post-quirúrgico", titulo: "Después del LASIK: cuando necesita lentes de contacto", tiempo: "6 min" },
    { slug: "ojo-seco-lentes-esclerales", cat: "Ojo Seco", titulo: "Ojo seco severo y lentes esclerales: una solución real",   tiempo: "5 min" },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {articulos.map((a) => (
        <Link key={a.slug} href={`/blog/${a.slug}`}
          className="group bg-[#f0f9ff] border border-blue-100 rounded-2xl p-6 hover:border-[#5b80d4] hover:shadow-md transition-all">
          <span className="inline-block bg-blue-100 text-[#2e3f8a] text-xs font-bold px-3 py-1 rounded-full mb-3">{a.cat}</span>
          <h3 className="font-bold text-[#2e3f8a] mb-2 group-hover:text-[#5b80d4] transition-colors leading-snug">{a.titulo}</h3>
          <p className="text-xs text-slate-400">{a.tiempo} de lectura</p>
        </Link>
      ))}
    </div>
  );
}
