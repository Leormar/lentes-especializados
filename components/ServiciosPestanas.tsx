"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type Servicio = {
  id: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  indicaciones: string[];
  precio: string;
  nota: string;
  imagenes?: string[];
  /** Encuadre de las fotos de apertura cuando el centro no es lo importante. */
  foco?: string;
  galeria?: { src: string; pie: string }[];
  video?: { src: string; poster: string; pie: string };
};

/**
 * Los servicios, uno por pestaña.
 *
 * Antes iban los siete apilados y la página era una sola tira interminable.
 * Ahora se elige desde la barra de arriba, que queda fija al desplazarse, y
 * al pie de cada servicio están el anterior y el siguiente con su nombre, de
 * modo que siempre se sabe dónde se está y hacia dónde se puede ir.
 *
 * Los siete paneles se pintan en el HTML y se ocultan con `hidden` en vez de
 * montarse y desmontarse: así Google sigue viendo el texto completo de todos
 * los servicios, que es lo que posiciona esta página.
 *
 * Los enlaces profundos siguen funcionando: /servicios#mediview abre esa
 * pestaña, venga de la home, del pie o de un resultado de búsqueda.
 */
export default function ServiciosPestanas({ servicios }: { servicios: Servicio[] }) {
  const [activo, setActivo] = useState(servicios[0].id);
  const inicio = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const desdeHash = (desplazar: boolean) => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!servicios.some((s) => s.id === id)) return;
      setActivo(id);
      // El ancla nativa no sirve: el panel está oculto hasta que lo abrimos.
      if (desplazar) inicio.current?.scrollIntoView({ block: "start" });
    };

    desdeHash(true);
    const alCambiar = () => desdeHash(true);
    window.addEventListener("hashchange", alCambiar);
    return () => window.removeEventListener("hashchange", alCambiar);
  }, [servicios]);

  function abrir(id: string) {
    setActivo(id);
    // replaceState y no push: el botón "atrás" saca de la página, no recorre
    // hacia atrás las siete pestañas que se hayan mirado.
    window.history.replaceState(null, "", `#${id}`);
    inicio.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const indice = servicios.findIndex((s) => s.id === activo);
  const anterior = indice > 0 ? servicios[indice - 1] : null;
  const siguiente = indice < servicios.length - 1 ? servicios[indice + 1] : null;

  return (
    <>
      <div ref={inicio} className="scroll-mt-28" />

      <nav
        aria-label="Servicios"
        className="bg-white sticky top-28 z-40 border-b-2 border-[#d7c874]/40 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div role="tablist" className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {servicios.map((s) => {
              const esActivo = s.id === activo;
              return (
                <button
                  key={s.id}
                  role="tab"
                  id={`pestana-${s.id}`}
                  type="button"
                  aria-selected={esActivo}
                  aria-controls={s.id}
                  onClick={() => abrir(s.id)}
                  className={`whitespace-nowrap rounded-full border-2 px-4 py-2 text-sm font-bold transition-colors ${
                    esActivo
                      ? "border-[#2e3f8a] bg-[#2e3f8a] text-white"
                      : "border-[#d7c874]/50 bg-white text-[#2e3f8a] hover:border-[#d7c874] hover:bg-[#fffbeb]"
                  }`}
                >
                  {s.titulo}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        {servicios.map((s, i) => {
          const fotos = s.imagenes ?? [];
          const galeria = s.galeria ?? [];
          const foco = s.foco ?? "object-center";

          // Las fotos ocupan al menos la mitad de la sección: una sola va a lo
          // ancho y bien alta; dos o tres se reparten el ancho sin encogerse.
          const rejilla =
            fotos.length === 1 ? "" :
            fotos.length === 2 ? "grid gap-4 sm:grid-cols-2" :
                                 "grid gap-4 sm:grid-cols-2 lg:grid-cols-3";
          const alto =
            fotos.length === 1 ? "h-[300px] sm:h-[420px]" :
            fotos.length === 2 ? "h-[260px] sm:h-[340px]" :
                                 "h-[240px] sm:h-[300px]";
          const medida =
            fotos.length === 1 ? "(max-width: 768px) 100vw, 720px" :
            fotos.length === 2 ? "(max-width: 640px) 100vw, 360px" :
                                 "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 240px";

          return (
            <section
              key={s.id}
              id={s.id}
              role="tabpanel"
              aria-labelledby={`pestana-${s.id}`}
              hidden={s.id !== activo}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-black text-[#d7c874]/50 select-none leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2e3f8a]">{s.titulo}</h2>
                  <p className="text-[#5b80d4] font-medium">{s.subtitulo}</p>
                </div>
              </div>

              {fotos.length > 0 && (
                <div className={`mb-8 ${rejilla}`}>
                  {fotos.map((src) => (
                    <div
                      key={src}
                      className={`relative w-full ${alto} rounded-2xl overflow-hidden border border-blue-100 shadow-sm`}
                    >
                      <Image
                        src={src}
                        alt={`${s.titulo} — ${s.subtitulo}`}
                        fill
                        sizes={medida}
                        className={`object-cover ${foco}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1a2a5e]/25 to-transparent" />
                    </div>
                  ))}
                </div>
              )}

              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4">
                  {s.descripcion.split("\n\n").map((p, j) => (
                    <p key={j} className="text-slate-600 leading-relaxed">{p}</p>
                  ))}
                </div>

                <div className="space-y-6">
                  <div className="bg-[#f0f9ff] rounded-2xl p-5 border border-sky-100">
                    <p className="text-xs font-semibold text-[#5b80d4] uppercase tracking-wide mb-3">Indicaciones</p>
                    <ul className="space-y-2">
                      {s.indicaciones.map((ind) => (
                        <li key={ind} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="text-[#5b80d4] mt-0.5 shrink-0">✓</span>
                          {ind}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#2e3f8a] text-white rounded-2xl p-5">
                    <p className="text-xs font-semibold text-sky-300 uppercase tracking-wide mb-1">Inversión aproximada</p>
                    <p className="font-bold text-lg mb-1">{s.precio}</p>
                    <p className="text-sky-200 text-xs leading-relaxed">{s.nota}</p>
                    <a
                      href={`https://wa.me/573113154316?text=Hola,%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(s.titulo)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-shine mt-4 block text-center bg-[#25D366] text-white px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-[#20b858] transition-colors"
                    >
                      Agendar consulta
                    </a>
                  </div>
                </div>
              </div>

              {s.video && (
                <figure className="mt-12 rounded-2xl overflow-hidden border border-blue-100 shadow-sm bg-white">
                  {/* Vídeo mudo y sin autoplay: el paciente decide verlo. */}
                  <video
                    className="w-full block bg-[#1b1d21]"
                    src={s.video.src}
                    poster={s.video.poster}
                    controls
                    muted
                    playsInline
                    preload="none"
                  />
                  <figcaption className="px-5 py-4 text-sm text-slate-600 leading-relaxed">
                    {s.video.pie}
                  </figcaption>
                </figure>
              )}

              {galeria.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-[#2e3f8a] mb-2">
                    Exámenes reales tomados en el consultorio
                  </h3>
                  <p className="text-slate-500 text-sm mb-6 max-w-2xl leading-relaxed">
                    Todas estas imágenes salen de nuestro propio equipo MediView. Así se ve
                    cada examen y esto es lo que mide.
                  </p>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {galeria.map((g) => (
                      <figure
                        key={g.src}
                        className="rounded-2xl overflow-hidden border border-blue-100 shadow-sm bg-white"
                      >
                        <div className="relative w-full aspect-[16/10] bg-[#1b1d21]">
                          <Image
                            src={g.src}
                            alt={g.pie}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 460px"
                            className="object-contain"
                          />
                        </div>
                        <figcaption className="px-5 py-4 text-sm text-slate-600 leading-relaxed">
                          {g.pie}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}
            </section>
          );
        })}

        {/* Dónde estoy y a dónde puedo ir desde aquí. */}
        <div className="mt-14 border-t-2 border-[#d7c874]/40 pt-6">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#5b80d4] mb-5">
            Servicio {indice + 1} de {servicios.length}
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {anterior ? (
              <button
                type="button"
                onClick={() => abrir(anterior.id)}
                className="group rounded-2xl border-2 border-[#d7c874]/50 bg-white px-5 py-4 text-left transition-colors hover:border-[#d7c874] hover:bg-[#fffbeb]"
              >
                <span className="block text-xs font-bold uppercase tracking-wide text-[#5b80d4]">
                  ← Anterior
                </span>
                <span className="mt-0.5 block font-bold text-[#2e3f8a]">{anterior.titulo}</span>
              </button>
            ) : (
              <span />
            )}

            {siguiente && (
              <button
                type="button"
                onClick={() => abrir(siguiente.id)}
                className="group rounded-2xl border-2 border-[#d7c874]/50 bg-white px-5 py-4 text-right transition-colors hover:border-[#d7c874] hover:bg-[#fffbeb] sm:col-start-2"
              >
                <span className="block text-xs font-bold uppercase tracking-wide text-[#5b80d4]">
                  Siguiente →
                </span>
                <span className="mt-0.5 block font-bold text-[#2e3f8a]">{siguiente.titulo}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
