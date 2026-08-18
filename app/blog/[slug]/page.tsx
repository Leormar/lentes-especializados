import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articulos, getArticulo } from "@/lib/articulos";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articulos.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const articulo = getArticulo(slug);
  if (!articulo) return {};
  return {
    title: articulo.titulo,
    description: articulo.resumen,
  };
}

export default async function ArticuloPage({ params }: Props) {
  const { slug } = await params;
  const articulo = getArticulo(slug);
  if (!articulo) notFound();

  const otros = articulos.filter((a) => a.slug !== slug).slice(0, 3);

  const html = markdownToHtml(articulo.contenido);

  return (
    <>
      <section className="bg-gradient-to-br from-[#2e3f8a] to-[#1a2a5e] text-white pt-36 pb-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-sky-300 text-sm mb-6">
            <Link href="/blog" className="hover:text-white transition-colors">Educación</Link>
            <span>/</span>
            <span>{articulo.categoria}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
            {articulo.titulo}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sky-200 text-sm">
            <span className="font-medium text-white">{articulo.autor}</span>
            <span>·</span>
            <span>{new Date(articulo.fecha).toLocaleDateString("es-CO", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span>·</span>
            <span>{articulo.tiempo} de lectura</span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div
          className="prose prose-lg prose-slate max-w-none
            prose-headings:text-[#2e3f8a] prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4
            prose-li:text-slate-600 prose-li:leading-relaxed
            prose-strong:text-[#2e3f8a]
            prose-ul:my-4 prose-ul:space-y-1"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="mt-12 bg-[#2e3f8a] text-white rounded-2xl p-6 text-center">
          <p className="font-bold text-lg mb-2">¿Tiene esta condición o conoce a alguien que la tenga?</p>
          <p className="text-sky-200 text-sm mb-4">Una consulta puede cambiar completamente su experiencia visual.</p>
          <a
            href={`https://wa.me/573113154316?text=Hola,%20leí%20el%20artículo%20sobre%20${encodeURIComponent(articulo.titulo)}%20y%20me%20gustaría%20agendar%20una%20consulta`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-block bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#20b858] transition-colors"
          >
            Agendar consulta por WhatsApp
          </a>
        </div>
      </div>

      {otros.length > 0 && (
        <section className="bg-[#f0f9ff] py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-bold text-[#2e3f8a] mb-6">Más artículos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otros.map((a) => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  className="group bg-white rounded-2xl p-5 border border-sky-100 hover:border-[#5b80d4] hover:shadow-md transition-all"
                >
                  <span className="inline-block bg-sky-50 text-[#2e3f8a] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {a.categoria}
                  </span>
                  <h3 className="font-bold text-[#2e3f8a] text-base group-hover:text-[#5b80d4] transition-colors leading-snug">
                    {a.titulo}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2">{a.tiempo} de lectura</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function markdownToHtml(md: string): string {
  return md
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m}</ul>`)
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hul])(.+)$/gm, (line) => {
      if (line.trim() === '' || line.startsWith('<')) return line;
      return line;
    })
    .split('\n\n')
    .map((block) => {
      if (block.startsWith('<h') || block.startsWith('<ul')) return block;
      if (block.trim() === '') return '';
      return `<p>${block}</p>`;
    })
    .join('\n');
}
