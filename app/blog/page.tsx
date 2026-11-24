import type { Metadata } from "next";
import Link from "next/link";
import { articulos, type Articulo } from "@/lib/articulos";
import ALaMedida from "@/components/ALaMedida";
import SuscribirseForm from "@/components/SuscribirseForm";
import { BOLETIN } from "@/lib/boletin";

export const metadata: Metadata = {
  title: "Educación Visual — Queratocono y Lentes Especializados",
  alternates: { canonical: "/blog" },
  description:
    "Artículos sobre queratocono, lentes esclerales, RGP, ojo seco y contactología especializada escritos por expertos en Medellín.",
};

const categorias = ["Todos", "Condiciones", "Lentes", "Post-quirúrgico", "Ojo Seco"];

export default function BlogPage() {
  const destacado = articulos[0];
  const resto = articulos.slice(1);

  return (
    <>
      <section className="bg-gradient-to-br from-[#2e3f8a] to-[#1a2a5e] text-white pt-36 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#d7c874] font-black text-sm uppercase tracking-widest mb-4">Educación</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Entienda su visión
          </h1>
          <p className="text-sky-100 text-lg leading-relaxed max-w-2xl mx-auto">
            Artículos clínicos escritos por especialistas para ayudarle a comprender su condición visual y las opciones de tratamiento disponibles.
          </p>
        </div>
      </section>

      <ALaMedida />

      {/* En el blog la suscripción va a la vista, no en ventana: quien llega
          aquí ya viene a leer. */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-4">
        <div className="mx-auto max-w-xl rounded-2xl border-2 border-[#d7c874]/50 bg-[#fffbeb] p-7">
          <h2 className="text-2xl font-bold text-[#2e3f8a] mb-2" style={{ fontFamily: "var(--font-display)" }}>
            Reciba {BOLETIN.nombre} en su correo
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-5">
            Cada entrega, un caso o una explicación de contactología
            especializada. Gratis, y se da de baja cuando quiera.
          </p>
          <SuscribirseForm />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex gap-3 flex-wrap mb-10">
          {categorias.map((c) => (
            <span
              key={c}
              className={`text-sm px-4 py-2 rounded-full font-medium cursor-default transition-colors ${
                c === "Todos"
                  ? "bg-[#2e3f8a] text-white"
                  : "bg-sky-50 text-slate-600 hover:bg-sky-100"
              }`}
            >
              {c}
            </span>
          ))}
        </div>

        <Link
          href={`/blog/${destacado.slug}`}
          className="group grid md:grid-cols-2 gap-8 bg-[#f0f9ff] rounded-2xl p-8 border border-sky-100 hover:border-[#5b80d4] hover:shadow-md transition-all mb-12"
        >
          <div>
            <span className="inline-block bg-sky-200 text-[#2e3f8a] text-xs font-bold px-3 py-1 rounded-full mb-4">
              Artículo destacado · {destacado.categoria}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f8a] mb-4 group-hover:text-[#5b80d4] transition-colors leading-snug">
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
            <PortadaTipografica articulo={destacado} />
          </div>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resto.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="group bg-white rounded-2xl p-6 border border-sky-100 hover:border-[#5b80d4] hover:shadow-md transition-all flex flex-col"
            >
              <span className="inline-block bg-sky-50 text-[#2e3f8a] text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start">
                {a.categoria}
              </span>
              <h3 className="font-bold text-[#2e3f8a] text-lg mb-3 group-hover:text-[#5b80d4] transition-colors leading-snug flex-1">
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

      <section className="bg-[#2e3f8a] text-white py-12 text-center">
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

/**
 * Portada del artículo destacado resuelta con tipografía y color de marca.
 * No lleva ilustración ni icono (ver "No usar iconos" en AGENTS.md); cuando
 * exista una foto clínica propia del tema, se reemplaza por esa foto.
 */
function PortadaTipografica({ articulo }: { articulo: Articulo }) {
  return (
    <div className="w-full rounded-2xl bg-[#2e3f8a] text-white p-8 text-center">
      <p className="text-[#d7c874] font-black text-xs uppercase tracking-[0.18em] mb-4">
        {articulo.categoria}
      </p>
      <p
        className="text-3xl md:text-4xl font-bold leading-tight mb-5"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {articulo.titulo}
      </p>
      <div className="w-12 h-1 bg-[#d7c874] mx-auto rounded-full mb-4" />
      <p className="text-sky-200 text-sm">
        {articulo.autor} · {articulo.tiempo} de lectura
      </p>
    </div>
  );
}
