import type { Metadata } from "next";
import Link from "next/link";

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
            Próximamente disponible
          </h2>
          <p className="text-slate-500 leading-relaxed mb-10 max-w-lg mx-auto">
            Estamos preparando artículos clínicos, guías para pacientes y recursos
            educativos sobre queratocono, lentes esclerales, ortoqueratología y ojo seco.
            Vuelva pronto.
          </p>

          {/* Temas que vendrán */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {[
              { icon: "👁", label: "Queratocono" },
              { icon: "◎", label: "Esclerales" },
              { icon: "🌙", label: "Ortho-K" },
              { icon: "💧", label: "Ojo seco" },
            ].map((t) => (
              <div key={t.label}
                className="bg-[#fffbeb] border-2 border-[#d7c874]/40 rounded-2xl p-4 text-center">
                <div className="text-2xl mb-1">{t.icon}</div>
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
              Avíseme cuando esté listo
            </a>
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
