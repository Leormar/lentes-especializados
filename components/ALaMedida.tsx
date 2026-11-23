const SUBSTACK_URL = "https://alamedida.substack.com";

/**
 * Área del boletín "A la Medida", el Substack del Dr. Orjuela. Vive dentro de
 * /blog como el canal largo y periódico, al lado de los artículos clínicos del
 * sitio. Sin iconos: la jerarquía la llevan la tipografía y el color de marca
 * (ver "No usar iconos" en AGENTS.md).
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
              El boletín del Dr. Leonardo Orjuela. Cada entrega toma un artículo
              o un caso de contactología especializada y lo explica en español
              claro: qué dice la evidencia, qué significa para el paciente y qué
              cambia en la consulta. Lentes esclerales, queratocono, control de
              miopía y superficie ocular.
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

          {/* Panel tipográfico: hace de portada sin recurrir a una ilustración. */}
          <div className="rounded-2xl bg-[#2e3f8a] text-white p-8 text-center">
            <p
              className="text-5xl md:text-6xl font-bold leading-none mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A la
              <br />
              Medida
            </p>
            <div className="w-12 h-1 bg-[#d7c874] mx-auto rounded-full mb-4" />
            <p className="text-sky-200 text-sm leading-relaxed">
              Contactología especializada,
              <br />
              una entrega a la vez.
            </p>
            <p className="text-sky-300/70 text-xs mt-4 break-all">alamedida.substack.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
