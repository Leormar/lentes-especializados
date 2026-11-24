import { BOLETIN } from "@/lib/boletin";

/**
 * Alta en el boletín "A la Medida".
 *
 * Registra el correo en Substack, que es quien manda el correo de
 * confirmación y lleva la lista. No guardamos nada por nuestra cuenta: la
 * lista vive en Substack y el lector se da de baja desde allí.
 *
 * Los manejadores POST no se cachean, así que no hay que configurar nada.
 */

const EMAIL_OK = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

async function altaEnSubstack(email: string): Promise<boolean> {
  try {
    const res = await fetch(`${BOLETIN.url}/api/v1/free`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        email,
        first_url: `${BOLETIN.url}/`,
        current_url: `${BOLETIN.url}/`,
        source: "cover_page",
      }),
      cache: "no-store",
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  let datos: unknown;
  try {
    datos = await request.json();
  } catch {
    return Response.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const cuerpo = (datos ?? {}) as Record<string, unknown>;
  const email = String(cuerpo.email ?? "").trim().toLowerCase();

  if (!EMAIL_OK.test(email)) {
    return Response.json({ error: "Escriba un correo válido." }, { status: 400 });
  }

  // Si Substack no responde, lo decimos: es mejor que lo intente de nuevo a
  // dejarlo creyendo que quedó suscrito.
  if (!(await altaEnSubstack(email))) {
    return Response.json(
      { error: "No pudimos registrar el correo. Intente de nuevo en un momento." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
