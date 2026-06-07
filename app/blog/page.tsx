import type { Metadata } from "next";
import Link from "next/link";
import { articulos } from "@/lib/articulos";

export const metadata: Metadata = {
  title: "Educación Visual",
  description:
    "Artículos sobre queratocono, lentes esclerales, RGP, ojo seco y contactología especializada escritos por expertos en Medellín.",
};

const categorias = ["Todos", "Condiciones", "Lentes", "Post-quirúrgico", "Ojo Seco"];

export default function BlogPage() {
  const destacado = articulos[0];
  const resto = articulos.slice(1);

  return (
    <>
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#132660] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sky-300 font-semibold text-sm uppercase tracking-widest mb-4">Educación</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Entienda su visión
          </h1>
          <p className="text-sky-100 text-lg leading-relaxed max-w-2xl mx-auto">
            Artículos clínicos escritos por especialistas para ayudarle a comprender su condición visual y las opciones de tratamiento disponibles.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex gap-3 flex-wrap mb-10">
          {categorias.map((c) => (
            <span
              key={c}
              className={`text-sm px-4 py-2 rounded-full font-medium cursor-default transition-colors ${
                c === "Todos"
                  ? "bg-[#1e3a8a] text-white"
                  : "bg-sky-50 text-slate-600 hover:bg-sky-100"
              }`}
            >
              {c}
            </span>
          ))}
        </div>

        <Link
          href={`/blog/${destacado.slug}`}
          className="group grid md:grid-cols-2 gap-8 bg-[#f0f9ff] rounded-2xl p-8 border border-sky-100 hover:border-[#4a80e4] hover:shadow-md transition-all mb-12"
        >
          <div>
            <span className="inline-block bg-sky-200 text-[#1e3a8a] text-xs font-bold px-3 py-1 rounded-full mb-4">
              Artículo destacado · {destacado.categoria}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-4 group-hover:text-[#4a80e4] transition-colors leading-snug">
              {destacado.titulo}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">{destacado.resumen}</p>
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <span>{destacado.autor}</span>
              <span>·</span>
              <span>{destacado.tiempo} de lectura</span>
              <span>·</span>
              <span>{new Date(destacado.fecha).toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" })}</span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <ArticuloIllustration categoria={destacado.categoria} />
          </div>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resto.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="group bg-white rounded-2xl p-6 border border-sky-100 hover:border-[#4a80e4] hover:shadow-md transition-all flex flex-col"
            >
              <span className="inline-block bg-sky-50 text-[#1e3a8a] text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start">
                {a.categoria}
              </span>
              <h3 className="font-bold text-[#1e3a8a] text-lg mb-3 group-hover:text-[#4a80e4] transition-colors leading-snug flex-1">
                {a.titulo}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{a.resumen}</p>
              <div className="flex items-center justify-between text-xs text-slate-400 mt-auto pt-4 border-t border-slate-100">
                <span>{a.tiempo} de lectura</span>
                <span>{new Date(a.fecha).toLocaleDateString("es-CO", { month: "short", year: "numeric" })}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#1e3a8a] text-white py-12 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3">¿Tiene una pregunta específica?</h2>
          <p className="text-sky-200 mb-6">
            Aria, nuestra asistente virtual, puede orientarle sobre su condición y agendar una consulta.
          </p>
          <a
            href="https://wa.me/573113154316"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#20b858] transition-colors"
          >
            Preguntar por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

function ArticuloIllustration({ categoria }: { categoria: string }) {
  const color = categoria === "Condiciones" ? "#4a80e4" : categoria === "Lentes" ? "#7ba7f0" : "#1e3a8a";
  return (
    <svg viewBox="0 0 200 200" className="w-40 h-40 opacity-80" fill="none">
      <circle cx="100" cy="100" r="90" stroke={color} strokeWidth="2" strokeDasharray="6 4" />
      <ellipse cx="100" cy="100" rx="70" ry="45" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="2" />
      <circle cx="100" cy="100" r="30" fill={color} fillOpacity="0.3" />
      <circle cx="100" cy="100" r="15" fill={color} />
      <circle cx="92" cy="92" r="5" fill="white" fillOpacity="0.5" />
    </svg>
  );
}
