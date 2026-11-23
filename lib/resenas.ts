/**
 * Reseñas reales traídas de la ficha de Google Business Profile.
 *
 * Usa la Places API (New) — endpoint Place Details. Devuelve como máximo 5
 * reseñas; es el límite de la API, no nuestro. Si faltan las variables de
 * entorno o Google responde mal, `obtenerResenasGoogle` devuelve `null` y la
 * sección de reseñas cae de vuelta a la tarjeta estática con el enlace.
 *
 * Variables (ver .env.example):
 *   GOOGLE_PLACES_API_KEY  — clave de servidor, NO expuesta al cliente.
 *   GOOGLE_PLACE_ID        — identificador de la ficha del consultorio.
 */

export type ResenaGoogle = {
  id: string;
  autor: string;
  fotoAutor: string | null;
  perfilAutor: string | null;
  calificacion: number;
  texto: string;
  /** "hace 2 meses", tal como lo redacta Google en español. */
  cuando: string;
  publicada: string;
};

export type PerfilGoogle = {
  calificacion: number;
  total: number;
  mapsUrl: string | null;
  resenas: ResenaGoogle[];
};

type RespuestaPlaces = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: {
    name?: string;
    rating?: number;
    publishTime?: string;
    relativePublishTimeDescription?: string;
    text?: { text?: string };
    originalText?: { text?: string };
    authorAttribution?: {
      displayName?: string;
      uri?: string;
      photoUri?: string;
    };
  }[];
};

const CAMPOS = ["rating", "userRatingCount", "googleMapsUri", "reviews"].join(",");

/** Las reseñas cambian poco; 6 horas de caché sobran y no castiga la cuota. */
const REVALIDAR_SEGUNDOS = 21600;

export async function obtenerResenasGoogle(): Promise<PerfilGoogle | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=es`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": CAMPOS,
        },
        next: { revalidate: REVALIDAR_SEGUNDOS },
      },
    );

    if (!res.ok) {
      console.warn(`[resenas] Places API respondió ${res.status}: ${await res.text()}`);
      return null;
    }

    const data: RespuestaPlaces = await res.json();

    const resenas: ResenaGoogle[] = (data.reviews ?? [])
      .map((r, i) => ({
        id: r.name ?? `resena-${i}`,
        autor: r.authorAttribution?.displayName?.trim() || "Paciente de Google",
        fotoAutor: r.authorAttribution?.photoUri ?? null,
        perfilAutor: r.authorAttribution?.uri ?? null,
        calificacion: r.rating ?? 0,
        // `text` ya viene traducido al idioma pedido; `originalText` es el respaldo.
        texto: (r.text?.text ?? r.originalText?.text ?? "").trim(),
        cuando: r.relativePublishTimeDescription ?? "",
        publicada: r.publishTime ?? "",
      }))
      .filter((r) => r.texto.length > 0);

    if (!data.rating && resenas.length === 0) return null;

    return {
      calificacion: data.rating ?? 0,
      total: data.userRatingCount ?? 0,
      mapsUrl: data.googleMapsUri ?? null,
      resenas,
    };
  } catch (error) {
    console.warn("[resenas] No se pudieron traer las reseñas de Google:", error);
    return null;
  }
}
