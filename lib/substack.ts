/**
 * Lee las entradas publicadas en "A la Medida", el Substack del Dr. Orjuela.
 *
 * Substack expone un RSS público en /feed, sin clave ni cuota. Lo parseamos a
 * mano con expresiones regulares en vez de añadir una dependencia: el formato
 * es plano y predecible (title, description y creator en CDATA; link, pubDate
 * y enclosure sueltos), así que no justifica meter un parser de XML completo
 * en un proyecto que hoy solo depende de Next y React.
 *
 * Si el feed no responde o viene malformado, devuelve una lista vacía y el
 * área del boletín se queda solo con la presentación y los botones.
 */

export type PostSubstack = {
  titulo: string;
  resumen: string;
  url: string;
  imagen: string | null;
  /** ISO 8601, para <time dateTime> y para ordenar. */
  fecha: string;
};

const FEED_URL = "https://alamedida.substack.com/feed";

/** Una hora: Leo publica cada pocos días, no hace falta más frescura. */
const REVALIDAR_SEGUNDOS = 3600;

export async function obtenerPostsSubstack(limite = 6): Promise<PostSubstack[]> {
  try {
    const res = await fetch(FEED_URL, {
      headers: { Accept: "application/rss+xml, application/xml, text/xml" },
      next: { revalidate: REVALIDAR_SEGUNDOS },
    });

    if (!res.ok) {
      console.warn(`[substack] El feed respondió ${res.status}`);
      return [];
    }

    return parsearFeed(await res.text()).slice(0, limite);
  } catch (error) {
    console.warn("[substack] No se pudo leer el feed:", error);
    return [];
  }
}

function parsearFeed(xml: string): PostSubstack[] {
  const posts: PostSubstack[] = [];

  for (const bloque of xml.split("<item>").slice(1)) {
    const item = bloque.split("</item>")[0];

    const titulo = limpiar(extraer(item, "title"));
    const url = extraer(item, "link").trim();
    if (!titulo || !url) continue;

    const fecha = new Date(extraer(item, "pubDate").trim());

    posts.push({
      titulo,
      resumen: limpiar(extraer(item, "description")),
      url,
      imagen: /<enclosure[^>]*\surl="([^"]+)"/.exec(item)?.[1] ?? null,
      fecha: isNaN(fecha.getTime()) ? "" : fecha.toISOString(),
    });
  }

  return posts;
}

function extraer(item: string, etiqueta: string): string {
  const m = new RegExp(`<${etiqueta}[^>]*>([\\s\\S]*?)</${etiqueta}>`).exec(item);
  if (!m) return "";
  // El contenido puede venir envuelto en CDATA o plano.
  return /^<!\[CDATA\[([\s\S]*)\]\]>$/.exec(m[1].trim())?.[1] ?? m[1];
}

/** Quita el HTML que a veces trae el resumen y resuelve las entidades. */
function limpiar(texto: string): string {
  return decodificar(texto.replace(/<[^>]*>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

const NOMBRADAS: Record<string, string> = {
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&apos;": "'",
  "&nbsp;": " ",
  "&hellip;": "…",
  "&mdash;": "—",
  "&ndash;": "–",
  "&laquo;": "«",
  "&raquo;": "»",
  "&rsquo;": "’",
  "&lsquo;": "‘",
  "&ldquo;": "“",
  "&rdquo;": "”",
};

function decodificar(texto: string): string {
  const conNumericas = texto
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)));

  const conNombradas = conNumericas.replace(
    /&(lt|gt|quot|apos|nbsp|hellip|mdash|ndash|laquo|raquo|rsquo|lsquo|ldquo|rdquo);/g,
    (e) => NOMBRADAS[e] ?? e,
  );

  // &amp; de último, o se desharían entidades que venían escapadas dos veces.
  return conNombradas.replace(/&amp;/g, "&");
}
