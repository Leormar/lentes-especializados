import type { Metadata } from "next";
import Link from "next/link";
import { articulos } from "@/lib/articulos";

export const metadata: Metadata = {
  title: "Educación | Lentes Especializados",
  description:
    "Centro de educación y recursos clínicos de Lentes Especializados. Próximamente: artículos sobre queratocono, lentes esclerales, ortoqueratología y ojo seco.",
};

export default function EducacionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#2e3f8a] to-[#1a2a5e] text-white pt-36 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#d7c874] font-black text-sm uppercase tracking-widest mb-4">
            Centro educativo
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Educación</h1>
          <p className="text-sky-100 text-lg leading-relaxed max-w-2xl mx-auto">
            Artículos clínicos, guías y recursos sobre contactología especializada,
            ojo seco y cuidado visual avanzado.
          </p>
        </div>
      </section>

      {/* En construcción */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">

          {/* Ícono animado */}
          <div className="flex justify-center mb-8">
            <div className="w-28 h-28 rounded-full bg-[#fffbeb] border-4 border-[#d7c874]/50 flex items-center justify-center shadow-lg"
              style={{ animation: "pulse-gold 2.4s ease-in-out infinite" }}
            >
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                <path d="M26 6v6M26 40v6M6 26h6M40 26h6M12 12l4 4M36 36l4 4M36 12l-4 4M12 36l4-4"
                  stroke="#d7c874" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="26" cy="26" r="9" stroke="#2e3f8a" strokeWidth="2.5"/>
                <circle cx="26" cy="26" r="4" fill="#d7c874"/>
              </svg>
            </div>
          </div>

          <p className="text-[#d7c874] font-black text-sm uppercase tracking-widest mb-3">
            En construcción
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2e3f8a] mb-4">
            Estamos ampliando este espacio
          </h2>
          <p className="text-slate-500 leading-relaxed mb-10 max-w-lg mx-auto">
            Estamos preparando más guías para pacientes y recursos educativos sobre
            queratocono, lentes esclerales, ortoqueratología y ojo seco. Mientras
            tanto, ya puede leer nuestros primeros artículos clínicos.
          </p>

          {/* Temas */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {[
              { id: "queratocono", label: "Queratocono" },
              { id: "esclerales", label: "Esclerales" },
              { id: "orthok", label: "Ortho-K" },
              { id: "ojo-seco", label: "Ojo seco" },
            ].map((t) => (
              <div key={t.label}
                className="bg-[#fffbeb] border-2 border-[#d7c874]/40 rounded-2xl p-4 text-center">
                <div className="flex justify-center mb-2"><TemaIcon id={t.id} /></div>
                <p className="text-xs font-bold text-[#2e3f8a]">{t.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="btn-shine inline-block border-2 border-[#2e3f8a] text-[#2e3f8a] px-7 py-3 rounded-full font-bold text-sm hover:bg-[#2e3f8a] hover:text-white transition-colors"
            >
              ← Volver al inicio
            </Link>
            <a
              href="https://wa.me/573113154316?text=Hola,%20quisiera%20recibir%20información%20educativa%20de%20PROLENS"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-block bg-[#25D366] text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-[#20b858] transition-colors"
            >
              Avíseme cuando haya novedades
            </a>
          </div>
        </div>
      </section>

      {/* Artículos ya disponibles */}
      <section className="py-16 bg-[#fffbeb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-[#d7c874] font-black text-sm uppercase tracking-widest mb-2">
              Ya disponibles
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f8a] mb-3">
              Primeros artículos clínicos
            </h2>
            <div className="w-16 h-1 bg-[#d7c874] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {articulos.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group bg-white rounded-2xl p-5 border-2 border-[#d7c874]/20 hover:border-[#d7c874] hover:shadow-md transition-all flex flex-col"
              >
                <span className="inline-block bg-[#fffbeb] border border-[#d7c874]/40 text-[#2e3f8a] text-xs font-bold px-3 py-1 rounded-full mb-3 self-start">
                  {a.categoria}
                </span>
                <h3 className="font-bold text-[#2e3f8a] mb-2 group-hover:text-[#5b80d4] transition-colors leading-snug text-sm flex-1">
                  {a.titulo}
                </h3>
                <p className="text-xs text-slate-400">{a.tiempo} de lectura</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="btn-shine inline-block bg-[#2e3f8a] text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-[#1a2a5e] transition-colors"
            >
              Ver todos los artículos →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse-gold {
          0%, 100% { box-shadow: 0 0 0 0 rgba(215,200,116,0.4); }
          50%       { box-shadow: 0 0 0 16px rgba(215,200,116,0); }
        }
      `}</style>
    </>
  );
}

/* Íconos de línea profesionales — azul institucional con acento dorado */
function TemaIcon({ id }: { id: string }) {
  const azul = "#2e3f8a";
  const dorado = "#d7c874";
  switch (id) {
    case "queratocono": // córnea cónica sobre el ojo
      return (
        <svg width="28" height="28" viewBox="0 0 30 30" fill="none" aria-hidden="true">
          <path d="M4 22c0-8 5-14 11-14s11 6 11 14" stroke={azul} strokeWidth="2" strokeLinecap="round"/>
          <path d="M11 22c0-5 1.8-9.5 4-9.5s4 4.5 4 9.5" stroke={dorado} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case "esclerales": // cúpula escleral
      return (
        <svg width="28" height="28" viewBox="0 0 30 30" fill="none" aria-hidden="true">
          <path d="M4 21c0-7 5-12 11-12s11 5 11 12" stroke={azul} strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 21c0-4.5 3.2-8 7-8s7 3.5 7 8" stroke={dorado} strokeWidth="2" strokeLinecap="round"/>
          <line x1="2" y1="21" x2="28" y2="21" stroke={azul} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case "orthok": // luna
      return (
        <svg width="28" height="28" viewBox="0 0 30 30" fill="none" aria-hidden="true">
          <path d="M25 18.5A10.5 10.5 0 0 1 11.5 5 10.5 10.5 0 1 0 25 18.5z" stroke={azul} strokeWidth="2" strokeLinejoin="round"/>
          <circle cx="21" cy="8" r="1.5" fill={dorado}/>
        </svg>
      );
    default: // ojo seco: gota
      return (
        <svg width="28" height="28" viewBox="0 0 30 30" fill="none" aria-hidden="true">
          <path d="M15 3.5S6.5 13 6.5 18.5a8.5 8.5 0 0 0 17 0C23.5 13 15 3.5 15 3.5z" stroke={azul} strokeWidth="2" strokeLinejoin="round"/>
          <path d="M11 18.5a4 4 0 0 0 3 4" stroke={dorado} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
  }
}
