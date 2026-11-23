import Image from "next/image";

const SUBSTACK_URL = "https://alamedida.substack.com";

/**
 * Área del boletín "A la Medida", el Substack del Dr. Orjuela. Vive dentro de
 * /blog como el canal largo y periódico, al lado de los artículos clínicos del
 * sitio. La portada es el logo real de la publicación (`public/a-la-medida-logo.png`,
 * el mismo que Substack usa como og:image), no una ilustración inventada.
 */
export default function ALaMedida() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12">
      <div className="relative overflow-hidden rounded-2xl border-2 border-[#d7c874]/50 bg-gradient-to-br from-[#f0f9ff] to-white p-8 md:p-10">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-10 items-center">
          <div>
            <p className="text-[#5b80d4] font-black text-xs uppercase tracking-[0.18em] mb-3">
              Boletín · Substack
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#2e3f8a] mb-4 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A la Medida
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6 max-w-prose">
              Contactología especializada contada desde la consulta: lo clínico,
              lo práctico y la gestión del consultorio. Por Leonardo Orjuela
              Mariño, optómetra en Medellín, dedicado a lentes especializados
              desde 1995.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex items-center gap-2 bg-[#2e3f8a] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#1a2a5e] transition-colors"
              >
                Leer A la Medida
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href={`${SUBSTACK_URL}/subscribe`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex items-center border-2 border-[#d7c874] text-[#2e3f8a] px-6 py-3 rounded-full font-bold text-sm hover:bg-[#d7c874]/15 transition-colors"
              >
                Suscribirse gratis
              </a>
            </div>
          </div>

          {/* Portada: el logo de la publicación tal como aparece en Substack. */}
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center"
          >
            <Image
              src="/a-la-medida-logo.png"
              alt="A la Medida — boletín de contactología especializada del Dr. Leonardo Orjuela"
              width={512}
              height={512}
              sizes="(max-width: 768px) 70vw, 260px"
              className="w-56 md:w-64 h-auto drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <p className="text-slate-400 text-xs mt-4 break-all group-hover:text-[#2e3f8a] transition-colors">
              alamedida.substack.com
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
