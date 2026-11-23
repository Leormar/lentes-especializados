import Image from "next/image";
import { obtenerPostsSubstack, type PostSubstack } from "@/lib/substack";

const SUBSTACK_URL = "https://alamedida.substack.com";

/**
 * Área del boletín "A la Medida", el Substack del Dr. Orjuela. Aparece en la
 * home (debajo de las reseñas) y en /blog, donde hace de canal largo y
 * periódico al lado de los artículos clínicos del sitio.
 *
 * Las entradas se leen del RSS público de Substack y se pintan como bloques
 * con su propia portada, igual que en la publicación. Si el feed falla, el
 * área se queda con la presentación y los botones, sin romperse.
 */
export default async function ALaMedida({ limite = 6 }: { limite?: number }) {
  const posts = await obtenerPostsSubstack(limite);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-14">
      <div className="rounded-2xl border-2 border-[#d7c874]/50 bg-gradient-to-br from-[#f0f9ff] to-white p-8 md:p-10">

        {/* Presentación */}
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
              sizes="(max-width: 768px) 60vw, 240px"
              className="w-48 md:w-56 h-auto drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <p className="text-slate-400 text-xs mt-4 break-all group-hover:text-[#2e3f8a] transition-colors">
              alamedida.substack.com
            </p>
          </a>
        </div>

        {/* Entradas publicadas, cada una con su portada */}
        {posts.length > 0 && (
          <>
            <div className="border-t border-slate-200/80 mt-10 mb-8" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((p) => (
                <BloquePost key={p.url} post={p} />
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href={`${SUBSTACK_URL}/archive`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#2e3f8a] font-bold text-sm hover:text-[#5b80d4] transition-colors"
              >
                Ver todas las entradas en Substack
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function BloquePost({ post }: { post: PostSubstack }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl overflow-hidden bg-white border border-slate-200 hover:border-[#5b80d4] hover:shadow-lg transition-all"
    >
      {post.imagen && (
        <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden">
          <Image
            src={post.imagen}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-bold text-[#2e3f8a] leading-snug mb-2 line-clamp-2 group-hover:text-[#5b80d4] transition-colors">
          {post.titulo}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1">
          {post.resumen}
        </p>
        {post.fecha && (
          <time
            dateTime={post.fecha}
            className="text-xs text-slate-400 mt-4 pt-3 border-t border-slate-100"
          >
            {new Date(post.fecha).toLocaleDateString("es-CO", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        )}
      </div>
    </a>
  );
}
