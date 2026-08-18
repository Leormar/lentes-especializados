"use client";

import { useState } from "react";

const condiciones = [
  { value: "", label: "Seleccione una opción" },
  { value: "Queratocono", label: "Queratocono" },
  { value: "Post-LASIK / Post-cirugía", label: "Post-LASIK / Post-cirugía" },
  { value: "Ojo seco severo", label: "Ojo seco severo" },
  { value: "Intolerancia a lentes convencionales", label: "Intolerancia a lentes convencionales" },
  { value: "Córnea irregular", label: "Córnea irregular" },
  { value: "Baja visión", label: "Baja visión" },
  { value: "Otro", label: "Otro" },
];

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [condicion, setCondicion] = useState("");
  const [mensaje, setMensaje] = useState("");

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    const partes = [
      "Hola, quisiera agendar una consulta.",
      nombre && `Mi nombre es ${nombre}.`,
      condicion && `Motivo de consulta: ${condicion}.`,
      mensaje && `Mensaje: ${mensaje}`,
    ].filter(Boolean);
    const url = `https://wa.me/573113154316?text=${encodeURIComponent(partes.join(" "))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form className="space-y-4" onSubmit={enviar}>
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-1">
          Nombre completo
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5b80d4] focus:border-transparent transition-all"
          placeholder="Su nombre"
        />
      </div>
      <div>
        <label htmlFor="condicion" className="block text-sm font-medium text-slate-700 mb-1">
          ¿Cuál es su condición o motivo de consulta?
        </label>
        <select
          id="condicion"
          name="condicion"
          value={condicion}
          onChange={(e) => setCondicion(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5b80d4] focus:border-transparent transition-all"
        >
          {condiciones.map((c) => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-slate-700 mb-1">
          Mensaje (opcional)
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={4}
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#5b80d4] focus:border-transparent transition-all resize-none"
          placeholder="Cuéntenos brevemente su situación..."
        />
      </div>
      <button
        type="submit"
        className="btn-shine w-full bg-[#25D366] text-white py-3.5 rounded-xl font-semibold hover:bg-[#20b858] transition-colors"
      >
        Enviar por WhatsApp
      </button>
      <p className="text-xs text-slate-400 text-center">
        El mensaje se abre en su WhatsApp listo para enviar. Aria responde en segundos, 24/7.
        También puede escribirnos a{" "}
        <a href="mailto:info@lentesespecializados.com" className="text-[#5b80d4] hover:underline">
          info@lentesespecializados.com
        </a>.
      </p>
    </form>
  );
}
