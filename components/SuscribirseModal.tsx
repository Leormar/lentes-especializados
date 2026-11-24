"use client";

// Ventana de suscripción al boletín "A la Medida". Sale una sola vez por
// visitante: a los 20 segundos o cuando lleva media página leída, lo que
// ocurra primero. Si se suscribe o la cierra, no vuelve a salir (se recuerda
// en el navegador).
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BOLETIN } from "@/lib/boletin";
import SuscribirseForm from "./SuscribirseForm";

const CLAVE = "lentesesp_boletin_visto";

function yaVisto() {
  try {
    return localStorage.getItem(CLAVE) === "1";
  } catch {
    return false; // navegación privada o almacenamiento bloqueado
  }
}

function marcarVisto() {
  try {
    localStorage.setItem(CLAVE, "1");
  } catch {
    // sin almacenamiento: volverá a salir en la próxima visita, no pasa nada
  }
}

export default function SuscribirseModal() {
  const [abierto, setAbierto] = useState(false);
  const ruta = usePathname();

  // En /blog el bloque de suscripción ya está a la vista, y en la política de
  // datos sería absurdo interrumpir justo cuando la están leyendo.
  const callada =
    ruta?.startsWith("/blog") || ruta?.startsWith("/politica-de-datos");

  useEffect(() => {
    if (callada || yaVisto()) return;

    let abierta = false;
    const abrir = () => {
      if (abierta) return;
      abierta = true;
      setAbierto(true);
      marcarVisto();
      window.removeEventListener("scroll", alDesplazar);
    };
    const alDesplazar = () => {
      const alto = document.body.scrollHeight - window.innerHeight;
      if (alto > 0 && window.scrollY / alto > 0.5) abrir();
    };

    const reloj = setTimeout(abrir, 20000);
    window.addEventListener("scroll", alDesplazar, { passive: true });
    return () => {
      clearTimeout(reloj);
      window.removeEventListener("scroll", alDesplazar);
    };
  }, [callada]);

  useEffect(() => {
    if (!abierto) return;
    const alPulsar = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
    window.addEventListener("keydown", alPulsar);
    return () => window.removeEventListener("keydown", alPulsar);
  }, [abierto]);

  if (!abierto) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/50 p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="titulo-boletin"
      onClick={(e) => e.target === e.currentTarget && setAbierto(false)}
    >
      <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <Image
              src={BOLETIN.logo}
              alt={BOLETIN.nombre}
              width={56}
              height={56}
              className="rounded-xl shrink-0"
            />
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#5b80d4]">
                Boletín · Substack
              </p>
              <h2
                id="titulo-boletin"
                className="mt-0.5 text-2xl font-bold text-[#2e3f8a]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {BOLETIN.nombre}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setAbierto(false)}
            aria-label="Cerrar"
            className="-mr-1 -mt-1 rounded-full px-3 py-1 text-xl font-bold text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            ×
          </button>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          Cada entrega, un caso o una explicación de contactología
          especializada: queratocono, lentes esclerales, ojo seco y lo que
          pasa de verdad en la consulta. Lo escribe el Dr. Leonardo Orjuela.
          Gratis, y se da de baja cuando quiera.
        </p>

        <div className="mt-6">
          <SuscribirseForm compacto alSuscribirse={marcarVisto} />
        </div>
      </div>
    </div>
  );
}
