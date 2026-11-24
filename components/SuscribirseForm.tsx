"use client";

// Formulario de alta en el boletín "A la Medida".
// Manda el correo a /api/suscripcion, que lo registra en Substack.
import { useState } from "react";
import { BOLETIN } from "@/lib/boletin";

type Estado = "inicial" | "enviando" | "listo" | "error";

export default function SuscribirseForm({
  compacto = false,
  alSuscribirse,
}: {
  compacto?: boolean;
  alSuscribirse?: () => void;
}) {
  const [email, setEmail] = useState("");
  const [acepta, setAcepta] = useState(false);
  const [estado, setEstado] = useState<Estado>("inicial");
  const [mensaje, setMensaje] = useState("");

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!acepta) {
      setMensaje("Para suscribirse debe aceptar la política de tratamiento de datos.");
      setEstado("error");
      return;
    }
    setEstado("enviando");
    setMensaje("");
    try {
      const res = await fetch("/api/suscripcion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const datos = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(datos.error || "No pudimos registrar el correo.");
      setEstado("listo");
      alSuscribirse?.();
    } catch (err) {
      setEstado("error");
      setMensaje(err instanceof Error ? err.message : "No pudimos registrar el correo.");
    }
  }

  if (estado === "listo") {
    return (
      <div className="rounded-2xl border-2 border-[#d7c874]/50 bg-[#fffbeb] p-6 text-center">
        <p className="text-lg font-bold text-[#2e3f8a]">Listo, ya está en la lista</p>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          Le enviamos un correo para confirmar la suscripción. Revise su bandeja
          —y la carpeta de no deseados— y confirme para empezar a recibir
          A la Medida.
        </p>
      </div>
    );
  }

  const idCorreo = compacto ? "correo-ventana" : "correo-pagina";

  return (
    <form onSubmit={enviar} className="space-y-4">
      <div>
        <label htmlFor={idCorreo} className="block text-sm font-semibold text-[#2e3f8a]">
          Correo electrónico
        </label>
        <input
          id={idCorreo}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          placeholder="sucorreo@ejemplo.com"
          className="mt-1.5 w-full rounded-xl border-2 border-[#d7c874]/40 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[#2e3f8a]"
        />
      </div>

      <label className="flex items-start gap-3 text-xs leading-relaxed text-slate-600">
        <input
          type="checkbox"
          checked={acepta}
          onChange={(e) => setAcepta(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#d7c874]"
        />
        <span>
          Autorizo a Lentes Especializados a usar mi correo para enviarme el
          boletín y acepto la{" "}
          <a
            href="/politica-de-datos"
            target="_blank"
            className="font-semibold text-[#2e3f8a] underline hover:text-[#1a2a5e]"
          >
            política de tratamiento de datos personales
          </a>
          , conforme a la Ley 1581 de 2012. Puedo darme de baja cuando quiera.
        </span>
      </label>

      {estado === "error" && mensaje && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3">
          <p className="text-sm font-semibold text-red-700">{mensaje}</p>
          {/* Puerta de atrás: si nuestra alta falla, la página de Substack
              siempre funciona. Nadie se queda sin poder suscribirse. */}
          <a
            href={`${BOLETIN.url}/subscribe?email=${encodeURIComponent(email)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1.5 inline-block text-sm font-semibold text-[#2e3f8a] underline hover:text-[#1a2a5e]"
          >
            Suscribirme en {BOLETIN.nombre} directamente
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={estado === "enviando"}
        className="btn-shine w-full rounded-full bg-[#2e3f8a] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1a2a5e] disabled:opacity-60"
      >
        {estado === "enviando" ? "Enviando…" : "Suscribirme al boletín"}
      </button>
    </form>
  );
}
