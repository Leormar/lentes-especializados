import { NEGOCIO, SITE_URL } from "@/lib/seo";

/** La ficha de Google del consultorio. No es un dato secreto. */
const PLACE_ID = "ChIJTfHO2CsoRI4RbWz3ulpTnw4";
const MAPS_URL = `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`;

/**
 * Mapa de la ubicación con el Maps Embed API.
 *
 * Apunta al `place_id` de la ficha, no a una búsqueda por texto: así el pin
 * cae sobre el consultorio y el panel muestra el nombre, las reseñas y el
 * botón de "Cómo llegar" de Google. El Embed API es gratuito y sin cuota.
 *
 * La clave va en NEXT_PUBLIC_ porque el iframe la lleva en la URL; está
 * restringida por dominio y solo habilitada para el Embed API. Si falta,
 * se muestra la tarjeta con la dirección y el enlace, sin romper la página.
 */
export default function MapaUbicacion({ alto = 420 }: { alto?: number }) {
  const key = process.env.NEXT_PUBLIC_MAPS_EMBED_KEY;

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-[#d7c874]/30 shadow-sm">
      {key ? (
        <iframe
          title={`Ubicación de ${NEGOCIO.nombre} — ${NEGOCIO.edificio}`}
          src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=place_id:${PLACE_ID}&language=es&region=CO&zoom=16`}
          className="w-full block"
          style={{ height: alto, border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div
          className="flex flex-col items-center justify-center gap-3 bg-[#f0f9ff] px-6 text-center"
          style={{ height: alto }}
        >
          <p className="font-bold text-[#2e3f8a]">{NEGOCIO.edificio}</p>
          <p className="text-slate-600 text-sm">
            {NEGOCIO.calle} · {NEGOCIO.ciudad}
          </p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center gap-2 bg-[#2e3f8a] text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#1a2a5e] transition-colors"
          >
            Abrir en Google Maps
          </a>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 bg-white px-5 py-4 border-t border-slate-100">
        <div>
          <p className="font-bold text-[#2e3f8a] leading-tight">{NEGOCIO.edificio}</p>
          <p className="text-slate-500 text-sm">
            {NEGOCIO.calle} · {NEGOCIO.barrio}, {NEGOCIO.ciudad}
          </p>
        </div>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine inline-flex items-center gap-2 border-2 border-[#d7c874] text-[#2e3f8a] px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#d7c874]/15 transition-colors"
        >
          Cómo llegar
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export { MAPS_URL, PLACE_ID, SITE_URL };
